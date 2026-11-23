"""Keep software delivery separate from target-cluster cleanup installation state."""
import copy
import json

from console.services.cleanup_installation import requires_managed_cleanup


def discover_cleanup_template(template, team, region_name, version_reader, api):
    """Probe only the running version actually being published, never a newer one."""
    result = copy.deepcopy(template)
    plugin = result.get('platform_plugin') or {}
    if plugin.get('plugin_id') not in ('rainbond-enterprise-base', 'rainbond-enterprise-base-AMD64',
                                       'rainbond-enterprise-base-ARM64'):
        return result
    if requires_managed_cleanup(result):
        return portable_cleanup_template(result)
    components = [c for c in result.get('apps', []) if c.get('service_cname') == plugin.get('frontend_component')]
    if len(components) != 1:
        raise ValueError('one enterprise base component is required')
    component = components[0]
    service_id, version = component.get('service_id'), component.get('deploy_version')
    if not service_id or not version:
        return result
    current = version_reader(region_name, team, [service_id]) or {}
    if current.get(service_id) != version:
        return result  # An older snapshot cannot inherit today's binary capabilities.
    try:
        response = api.get_service_pods(region_name, team.tenant_name, component['service_alias'], team.enterprise_id)
        groups = (response.get('bean') or response.get('list') or {}) if isinstance(response, dict) else {}
        pods = groups.get('new_pods', []) if isinstance(groups, dict) else []
        active = [pod for pod in pods if str(pod.get('pod_status', '')).upper() == 'RUNNING']
        if not active:
            raise ValueError('enterprise base component must be running for capability inspection')
        pod = active[0]
        containers = pod.get('container') or {}
        if not isinstance(containers, dict) or len(containers) != 1:
            raise ValueError('enterprise base main container is ambiguous')
        response = api.exec_component_pod(team.tenant_name,
                                          region_name,
                                          component['service_alias'],
                                          pod['pod_name'],
                                          next(iter(containers)), ['/bin/plugin', '-capabilities'],
                                          timeout_seconds=5)
        execution = response.get('bean') if isinstance(response, dict) else None
        if not isinstance(execution, dict):
            raise ValueError('enterprise base capability inspection is unavailable')
        if execution.get('exit_code') != 0:
            return result  # Previous binaries do not expose the software capability flag.
        output = execution.get('stdout', '')
        if not isinstance(output, str) or len(output) > 4096 or execution.get('truncated'):
            raise ValueError('enterprise base capability response is invalid')
        capabilities = json.loads(output)
    except Exception:
        raise ValueError('enterprise base capability inspection did not complete') from None
    if (isinstance(capabilities, dict) and capabilities.get('protocol') == 1
            and type(capabilities.get('cleanup_installation_protocol')) is int
            and capabilities['cleanup_installation_protocol'] == 1):
        plugin['bundled_disk_cleanup'] = True
        plugin['cleanup_installation_protocol'] = 1
    return portable_cleanup_template(result)


def _owned_name(name):
    return isinstance(name, str) and (name.startswith(
        ('enterprise-base-disk-', 'rainbond-disk-')) or name in ('enterprise-base-registry-auth', 'rainbond-enterprise-base'))


def _value(attribute):
    import yaml
    raw = attribute.get('attribute_value')
    return yaml.safe_load(raw) if isinstance(raw, str) else raw


def portable_cleanup_template(template):
    result = copy.deepcopy(template)
    if not requires_managed_cleanup(result):
        return result
    plugin = result['platform_plugin']
    components = [c for c in result.get('apps', []) if c.get('service_cname') == plugin.get('frontend_component')]
    if len(components) != 1:
        raise ValueError('one enterprise base component is required')
    component = components[0]
    component['service_env_map_list'] = [
        env for env in component.get('service_env_map_list', [])
        if not str(env.get('attr_name', '')).startswith('CLEANUP_') and env.get('attr_name') not in ('REGION_NAME',
                                                                                                     'ENTERPRISE_DISK_CLEANUP')
    ]
    attrs = {a['name']: a for a in component.get('component_k8s_attributes', [])}
    mounts = _value(attrs['volumeMounts']) if 'volumeMounts' in attrs else []
    volumes = _value(attrs['volumes']) if 'volumes' in attrs else []
    if not isinstance(mounts, list) or not isinstance(volumes, list):
        raise ValueError('cleanup installation mounts must be lists')
    removed = {
        mount['name']
        for mount in mounts if mount.get('mountPath') in ('/registry', '/data/disk-cleanup')
        or str(mount.get('mountPath', '')).startswith('/var/run/enterprise-registry-auth')
    }
    for volume in volumes:
        reference = (volume.get('persistentVolumeClaim') or {}).get('claimName') or (volume.get('secret')
                                                                                     or {}).get('secretName')
        if _owned_name(reference):
            removed.add(volume['name'])
    for name, values in (('volumes', volumes), ('volumeMounts', mounts)):
        if name in attrs:
            attrs[name]['attribute_value'] = json.dumps([item for item in values if item['name'] not in removed])
    if 'nodeSelector' in attrs:
        selector = _value(attrs['nodeSelector'])
        if not isinstance(selector, dict):
            raise ValueError('cleanup installation node selector must be a mapping')
        selector.pop('kubernetes.io/hostname', None)
        attrs['nodeSelector']['attribute_value'] = json.dumps(selector)
    attrs.pop('nodeName', None)
    component['component_k8s_attributes'] = list(attrs.values())
    component['extend_method'] = 'state'
    component.setdefault('extend_method_map', {})['min_node'] = 1
    resources = []
    for resource in result.get('k8s_resources', []):
        if _owned_name(resource.get('name')):
            continue
        raw = resource.get('content')
        try:
            import yaml
            document = yaml.safe_load(raw) if isinstance(raw, str) else raw
        except Exception:
            raise ValueError('cleanup publish resource is invalid') from None
        metadata = document.get('metadata', {}) if isinstance(document, dict) else {}
        if _owned_name(metadata.get('name')) or (metadata.get('labels')
                                                 or {}).get('cleanup.rainbond.io/managed-by') == 'enterprise-base-installer':
            continue
        resources.append(resource)
    result['k8s_resources'] = resources
    return result
