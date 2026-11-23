import json
import unittest
from types import ModuleType, SimpleNamespace
from unittest.mock import Mock, patch


class ManagedCleanupInstallationTests(unittest.TestCase):
    def test_old_base_versions_are_not_silently_enabled_by_a_platform_upgrade(self):
        from console.services.cleanup_installation import requires_managed_cleanup
        template = {'platform_plugin': {'plugin_id': 'rainbond-enterprise-base', 'bundled_disk_cleanup': True}}
        self.assertFalse(requires_managed_cleanup(template))
        template['platform_plugin']['cleanup_installation_protocol'] = 1
        self.assertTrue(requires_managed_cleanup(template))
        template['platform_plugin']['plugin_id'] = 'other-plugin'
        self.assertFalse(requires_managed_cleanup(template))

    def test_predeployment_initialization_uses_target_scope_and_installs_required_references(self):
        from console.services.cleanup_managed_installation import prepare_managed_installation
        api = Mock()
        api.prepare_cleanup_installation.return_value = (200, {
            'bean': {
                'protocol': 1,
                'phase': 'prepared',
                'scope': {
                    'enterprise': 'enterprise',
                    'region': 'region',
                    'namespace': 'target',
                    'consoleUrl': 'https://console.example'
                },
                'serviceAccount': 'rainbond-enterprise-base',
                'stateClaim': 'enterprise-base-disk-state'
            }
        })
        api.prepare_cleanup_registry_view.return_value = (200, {
            'bean': {
                'protocol': 1,
                'mount': {
                    'claim': 'rainbond-disk-registry-target',
                    'subPath': 'registry/docker/registry/v2',
                    'nodeSelector': {
                        'kubernetes.io/hostname': 'target-node'
                    }
                },
                'authSecret': 'enterprise-base-registry-auth',
                'binding': {
                    'storage_id': 'registry-storage',
                    'generation': 'original-generation'
                },
                'url': 'http://rbd-hub.system.svc.cluster.local:5000',
                'aliases': ['registry.test']
            }
        })
        env = Mock()
        env.get_env_by_attr_name.return_value = None
        env.add_service_env_var.return_value = (200, '', None)
        attrs = Mock()
        previous = {
            'volumes': [{
                'name': 'legacy-registry',
                'persistentVolumeClaim': {
                    'claimName': 'old-registry'
                }
            }, {
                'name': 'legacy-state',
                'persistentVolumeClaim': {
                    'claimName': 'existing-journal'
                }
            }, {
                'name': 'business',
                'configMap': {
                    'name': 'business'
                }
            }],
            'volumeMounts': [{
                'name': 'legacy-registry',
                'mountPath': '/registry',
                'readOnly': True
            }, {
                'name': 'legacy-state',
                'mountPath': '/data/disk-cleanup'
            }, {
                'name': 'business',
                'mountPath': '/business'
            }]
        }
        attrs.get_by_component_ids_and_name.side_effect = lambda component, name: (
            [SimpleNamespace(attribute_value=json.dumps(previous[name]))] if name in previous else [])
        modules = {}
        for name, values in {
                'www.apiclient.regionapi': {
                    'RegionInvokeApi': lambda: api
                },
                'console.services.app_config': {
                    'env_var_service': env
                },
                'console.services.k8s_attribute': {
                    'k8s_attribute_service': attrs
                },
        }.items():
            module = ModuleType(name)
            module.__dict__.update(values)
            modules[name] = module
        tenant = SimpleNamespace(enterprise_id='enterprise', namespace='target')
        region = SimpleNamespace(region_name='region')
        backend = SimpleNamespace(service_id='backend')
        with patch.dict('sys.modules', modules):
            prepare_managed_installation(tenant, region, backend, 'rainbond-enterprise-base', 'app', 'https://console.example')
        api.prepare_cleanup_installation.assert_called_once_with('enterprise', 'region', 'rainbond-enterprise-base', 'app',
                                                                 'https://console.example')
        values = {call.kwargs['attr_name']: call.kwargs['attr_value'] for call in env.add_service_env_var.call_args_list}
        self.assertEqual(values['CLEANUP_SOURCE_ENTERPRISE_ID'], 'enterprise')
        self.assertEqual(values['REGION_NAME'], 'region')
        self.assertEqual(values['CLEANUP_CONSOLE_URL'], 'https://console.example')
        self.assertEqual(values['CLEANUP_CONSOLE_ALLOW_HTTP'], 'false')
        self.assertEqual(values['CLEANUP_MANAGED_INSTALLATION'], 'true')
        self.assertEqual(values['CLEANUP_RECORD_RETIREMENT'], 'true')
        self.assertEqual(values['CLEANUP_REGISTRY_STORAGE_ROOT'], '/registry')
        self.assertEqual(values['CLEANUP_REGISTRY_URL'], 'http://rbd-hub.system.svc.cluster.local:5000')
        calls = attrs.update_k8s_attribute.call_args_list + attrs.create_k8s_attribute.call_args_list
        updated = {call.args[3]['name']: call.args[3]['attribute_value'] for call in calls}
        self.assertTrue(attrs.create_k8s_attribute.called)
        self.assertEqual(updated['serviceAccountName'], 'rainbond-enterprise-base')
        self.assertIn('-cleanup-scan-only=false', json.loads(updated['args']))
        self.assertIn('-plugin-id=rainbond-enterprise-base', json.loads(updated['args']))
        self.assertIn('existing-journal', updated['volumes'])
        self.assertIn('/data/disk-cleanup', updated['volumeMounts'])
        volumes = {item['name']: item for item in json.loads(updated['volumes'])}
        mounts = {item['name']: item for item in json.loads(updated['volumeMounts'])}
        self.assertNotIn('legacy-registry', mounts)
        self.assertNotIn('legacy-state', volumes)
        self.assertIn('business', volumes)
        self.assertTrue(volumes['enterprise-base-disk-registry']['persistentVolumeClaim']['readOnly'])
        self.assertTrue(mounts['enterprise-base-disk-registry']['readOnly'])
        self.assertEqual(mounts['enterprise-base-disk-registry']['subPath'], 'registry/docker/registry/v2')
        self.assertEqual(json.loads(updated['nodeSelector'])['kubernetes.io/hostname'], 'target-node')

    def test_foreign_scope_in_initialization_response_is_not_applied(self):
        from console.services.cleanup_managed_installation import validate_installation_response
        tenant = SimpleNamespace(enterprise_id='enterprise', namespace='target')
        region = SimpleNamespace(region_name='region')
        with self.assertRaises(ValueError):
            validate_installation_response(
                tenant, region, {
                    'bean': {
                        'protocol': 1,
                        'phase': 'prepared',
                        'scope': {
                            'enterprise': 'foreign',
                            'region': 'region',
                            'namespace': 'target'
                        }
                    }
                })
