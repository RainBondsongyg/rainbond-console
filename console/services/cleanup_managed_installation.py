"""Apply server-generated installation references before a plugin starts."""
import json
import os
from urllib.parse import urlsplit


class CleanupPlatformUnsupported(ValueError):
    pass


def validate_installation_response(tenant, region, response):
    installation = response.get('bean') if isinstance(response, dict) else None
    if not isinstance(installation, dict) or installation.get('protocol') != 1:
        raise CleanupPlatformUnsupported()
    scope = installation.get('scope') if isinstance(installation, dict) else None
    if (not isinstance(scope, dict) or installation.get('protocol') != 1 or installation.get('phase') != 'prepared'
            or scope.get('enterprise') != tenant.enterprise_id or scope.get('region') != region.region_name
            or scope.get('namespace') != tenant.namespace):
        raise ValueError('cleanup installation scope is invalid')
    return installation


def prepare_managed_installation(tenant, region, backend, plugin_id, region_app_id, console_url):
    from console.services.app_config import env_var_service
    from console.services.k8s_attribute import k8s_attribute_service
    from www.apiclient.regionapi import RegionInvokeApi

    origin = urlsplit(console_url or '')
    if console_url and (origin.scheme not in ('http', 'https') or not origin.hostname or origin.username is not None
                        or origin.password is not None or origin.query or origin.fragment or origin.path not in ('', '/')):
        raise ValueError('cleanup installation Console origin is unavailable')
    if not console_url and not (os.environ.get('POD_NAME') and os.environ.get('POD_UID')):
        raise ValueError('cleanup installation Console origin is unavailable')
    api = RegionInvokeApi()
    status, response = api.prepare_cleanup_installation(tenant.enterprise_id, region.region_name, plugin_id, region_app_id,
                                                        console_url)
    if status != 200:
        if status in (404, 405):
            raise CleanupPlatformUnsupported()
        raise ValueError('cleanup installation platform support is unavailable')
    installation = validate_installation_response(tenant, region, response)
    scope = installation['scope']
    target_console = scope.get('consoleUrl')
    target_origin = urlsplit(target_console or '')
    if target_origin.scheme not in ('http', 'https') or not target_origin.hostname:
        raise ValueError('cleanup installation Console origin is invalid')
    status, response = api.prepare_cleanup_registry_view(tenant.enterprise_id, region.region_name)
    if status in (404, 405):
        raise CleanupPlatformUnsupported()
    registry = response.get('bean') if isinstance(response, dict) else None
    if status != 200 or not isinstance(registry, dict) or registry.get('protocol') != 1:
        raise ValueError('cleanup installation Registry preparation is unavailable')
    mount = registry.get('mount')
    binding = registry.get('binding')
    if (not isinstance(mount, dict) or not mount.get('claim') or not mount.get('subPath') or not registry.get('authSecret')
            or not registry.get('url') or not registry.get('aliases') or not isinstance(binding, dict)
            or not binding.get('storage_id') or not binding.get('generation')):
        raise ValueError('cleanup installation Registry references are invalid')
    values = {
        'REGION_NAME': region.region_name,
        'ENTERPRISE_DISK_CLEANUP': 'true',
        'CLEANUP_SOURCE_ENTERPRISE_ID': tenant.enterprise_id,
        'CLEANUP_AUTO_BOOTSTRAP': 'true',
        'CLEANUP_MANAGED_INSTALLATION': 'true',
        'CLEANUP_RECORD_RETIREMENT': 'true',
        'CLEANUP_CONSOLE_URL': target_console,
        'CLEANUP_CONSOLE_ALLOW_HTTP': str(target_origin.scheme == 'http').lower(),
        'CLEANUP_REGISTRY_URL': registry['url'],
        'CLEANUP_REGISTRY_STORAGE_ROOT': '/registry',
        'CLEANUP_REGISTRY_ALLOW_HTTP': str(urlsplit(registry['url']).scheme == 'http').lower(),
        'CLEANUP_REGISTRY_ALIASES': ','.join(registry['aliases']),
        'CLEANUP_REGISTRY_USERNAME_FILE': '/var/run/enterprise-registry-auth/username',
        'CLEANUP_REGISTRY_PASSWORD_FILE': '/var/run/enterprise-registry-auth/password',
        'CLEANUP_COORDINATION_STORAGE_ID': binding['storage_id'],
        'CLEANUP_COORDINATION_GENERATION': binding['generation'],
    }
    for name, value in values.items():
        existing = env_var_service.get_env_by_attr_name(tenant, backend, name)
        if existing and existing.attr_value == value:
            continue
        if existing:
            code, _, _ = env_var_service.update_env_by_env_id(tenant, backend, str(existing.ID), name, value, 'plugin-install')
        else:
            code, _, _ = env_var_service.add_service_env_var(tenant=tenant,
                                                             service=backend,
                                                             container_port=0,
                                                             name=name,
                                                             attr_name=name,
                                                             attr_value=value,
                                                             is_change=True,
                                                             scope='inner',
                                                             user_name='plugin-install')
        if code != 200:
            raise ValueError('cleanup installation configuration could not be saved')

    def read_attribute(name, default):
        import yaml
        records = k8s_attribute_service.get_by_component_ids_and_name(backend.service_id, name)
        if not records:
            return default
        raw = records[0].attribute_value
        return yaml.safe_load(raw) if isinstance(raw, str) else raw

    def save_attribute(name, value):
        k8s_attribute_service.update_k8s_attribute(tenant, backend, region.region_name, {
            'name': name,
            'save_type': 'yaml',
            'attribute_value': json.dumps(value),
            'operator': 'plugin-install'
        })

    previous_mounts = read_attribute('volumeMounts', [])
    previous_volumes = read_attribute('volumes', [])
    if not isinstance(previous_mounts, list) or not isinstance(previous_volumes, list):
        raise ValueError('cleanup installation storage is invalid')
    managed_paths = ('/registry', '/data/disk-cleanup', '/var/run/enterprise-registry-auth')
    replaced = {item['name'] for item in previous_mounts if item.get('mountPath') in managed_paths}
    state_mount = next((item for item in previous_mounts if item.get('mountPath') == '/data/disk-cleanup'), None)
    state_claim = installation['stateClaim']
    if state_mount:
        old_volume = next((item for item in previous_volumes if item.get('name') == state_mount['name']), {})
        state_claim = (old_volume.get('persistentVolumeClaim') or {}).get('claimName') or state_claim

    args = read_attribute('args', [])
    if not isinstance(args, list) or not all(isinstance(arg, str) for arg in args):
        raise ValueError('cleanup installation arguments are invalid')
    kept, index = [], 0
    while index < len(args):
        arg = args[index]
        flag = arg.split('=', 1)[0]
        if flag in ('-plugin-id', '--plugin-id'):
            index += 1 if '=' in arg else 2
            continue
        if flag in ('-cleanup-state-file', '--cleanup-state-file') and state_mount:
            kept.append(arg)
            index += 1
            if '=' not in arg and index < len(args):
                kept.append(args[index])
                index += 1
            continue
        if flag in ('-disk-cleanup', '--disk-cleanup', '-cleanup-scan-only', '--cleanup-scan-only'):
            index += 1
            if '=' not in arg and index < len(args) and args[index] in ('true', 'false'):
                index += 1
            continue
        if flag in ('-cleanup-state-file', '--cleanup-state-file', '-cleanup-gateway-key-file', '--cleanup-gateway-key-file'):
            index += 1 if '=' in arg else 2
            continue
        kept.append(arg)
        index += 1
    save_attribute('args', kept + ['-plugin-id=' + plugin_id, '-disk-cleanup', '-cleanup-scan-only=false'])
    save_attribute('serviceAccountName', installation['serviceAccount'])
    additions = {
        'volumes': [{
            'name': 'enterprise-disk-state',
            'persistentVolumeClaim': {
                'claimName': state_claim
            }
        }, {
            'name': 'enterprise-base-disk-registry',
            'persistentVolumeClaim': {
                'claimName': mount['claim'],
                'readOnly': True
            }
        }, {
            'name': 'enterprise-base-registry-auth',
            'secret': {
                'secretName': registry['authSecret']
            }
        }],
        'volumeMounts': [{
            'name': 'enterprise-disk-state',
            'mountPath': '/data/disk-cleanup'
        }, {
            'name': 'enterprise-base-disk-registry',
            'mountPath': '/registry',
            'subPath': mount['subPath'],
            'readOnly': True
        }, {
            'name': 'enterprise-base-registry-auth',
            'mountPath': '/var/run/enterprise-registry-auth',
            'readOnly': True
        }]
    }
    for name, additions_for_attribute in additions.items():
        items = read_attribute(name, [])
        if not isinstance(items, list):
            raise ValueError('cleanup installation storage is invalid')
        merged = {item['name']: item for item in items if item['name'] not in replaced}
        for addition in additions_for_attribute:
            merged[addition['name']] = addition
        save_attribute(name, list(merged.values()))
    selector = read_attribute('nodeSelector', {}) or {}
    if not isinstance(selector, dict):
        raise ValueError('cleanup installation node selector is invalid')
    selector.update(mount.get('nodeSelector') or {})
    save_attribute('nodeSelector', selector)
    if not read_attribute('podSecurityContext', None):
        save_attribute('podSecurityContext', {'runAsUser': 1000, 'runAsGroup': 1000, 'fsGroup': 1000})
    return installation
