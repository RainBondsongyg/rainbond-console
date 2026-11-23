import json
import unittest
from types import SimpleNamespace
from unittest.mock import Mock


class CleanupPublishDiscoveryTests(unittest.TestCase):
    def test_current_packaged_version_is_detected_without_a_user_checkbox(self):
        from console.services.cleanup_publish_template import discover_cleanup_template
        template = {
            'platform_plugin': {
                'plugin_id': 'rainbond-enterprise-base',
                'frontend_component': 'base'
            },
            'apps': [{
                'service_cname': 'base',
                'service_id': 'service',
                'service_alias': 'alias',
                'deploy_version': 'version-two',
                'service_env_map_list': []
            }]
        }
        reader = Mock(return_value={'service': 'version-two'})
        api = Mock()
        api.get_service_pods.return_value = {
            'list': {
                'new_pods': [{
                    'pod_name': 'base-0',
                    'pod_status': 'RUNNING',
                    'container': {
                        'base': {}
                    }
                }]
            }
        }
        api.exec_component_pod.return_value = {
            'bean': {
                'exit_code': 0,
                'truncated': False,
                'stdout': json.dumps({
                    'protocol': 1,
                    'cleanup_installation_protocol': 1
                })
            }
        }
        team = SimpleNamespace(tenant_name='team', enterprise_id='enterprise')
        output = discover_cleanup_template(template, team, 'region', reader, api)
        self.assertEqual(output['platform_plugin']['cleanup_installation_protocol'], 1)
        self.assertTrue(output['platform_plugin']['bundled_disk_cleanup'])
        api.exec_component_pod.assert_called_once_with('team',
                                                       'region',
                                                       'alias',
                                                       'base-0',
                                                       'base', ['/bin/plugin', '-capabilities'],
                                                       timeout_seconds=5)
        reader.return_value = {'service': 'a-newer-version'}
        api.reset_mock()
        old = discover_cleanup_template(template, team, 'region', reader, api)
        self.assertNotIn('cleanup_installation_protocol', old['platform_plugin'])
        api.exec_component_pod.assert_not_called()

    def test_old_binary_and_failed_probe_do_not_acquire_the_new_install_protocol(self):
        from console.services.cleanup_publish_template import discover_cleanup_template
        template = {
            'platform_plugin': {
                'plugin_id': 'rainbond-enterprise-base',
                'frontend_component': 'base'
            },
            'apps': [{
                'service_cname': 'base',
                'service_id': 'service',
                'service_alias': 'alias',
                'deploy_version': 'version',
                'service_env_map_list': []
            }]
        }
        api = Mock()
        api.get_service_pods.return_value = {
            'list': {
                'new_pods': [{
                    'pod_name': 'base-0',
                    'pod_status': 'RUNNING',
                    'container': {
                        'base': {}
                    }
                }]
            }
        }
        api.exec_component_pod.return_value = {'bean': {'exit_code': 2, 'stdout': '', 'stderr': 'unsupported option'}}
        output = discover_cleanup_template(template, SimpleNamespace(tenant_name='team', enterprise_id='enterprise'), 'region',
                                           Mock(return_value={'service': 'version'}), api)
        self.assertNotIn('cleanup_installation_protocol', output['platform_plugin'])
