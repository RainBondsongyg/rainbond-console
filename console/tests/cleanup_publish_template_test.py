import copy
import json
import unittest


class CleanupPublishTemplateTests(unittest.TestCase):
    def template(self):
        return {
            'platform_plugin': {
                'plugin_id': 'rainbond-enterprise-base',
                'bundled_disk_cleanup': True,
                'frontend_component': 'base',
                'cleanup_installation_protocol': 1
            },
            'apps': [{
                'service_cname':
                'base',
                'service_env_map_list': [{
                    'attr_name': 'CLEANUP_SOURCE_ENTERPRISE_ID',
                    'attr_value': 'source-enterprise'
                }, {
                    'attr_name': 'CLEANUP_NODE_EXECUTOR_IMAGE',
                    'attr_value': 'source.example/base:old'
                }, {
                    'attr_name': 'REGION_NAME',
                    'attr_value': 'source-region'
                }, {
                    'attr_name': 'BUSINESS_SETTING',
                    'attr_value': 'keep'
                }],
                'component_k8s_attributes': [{
                    'name':
                    'nodeSelector',
                    'attribute_value':
                    json.dumps({
                        'kubernetes.io/hostname': 'source-node',
                        'kubernetes.io/arch': 'amd64'
                    })
                }, {
                    'name':
                    'volumes',
                    'attribute_value':
                    json.dumps([{
                        'name': 'registry',
                        'persistentVolumeClaim': {
                            'claimName': 'rainbond-disk-registry-readonly'
                        }
                    }, {
                        'name': 'business',
                        'configMap': {
                            'name': 'business'
                        }
                    }])
                }, {
                    'name':
                    'volumeMounts',
                    'attribute_value':
                    json.dumps([{
                        'name': 'registry',
                        'mountPath': '/registry',
                        'readOnly': True
                    }, {
                        'name': 'business',
                        'mountPath': '/business'
                    }])
                }]
            }],
            'k8s_resources': [{
                'kind': 'Secret',
                'name': 'enterprise-base-registry-auth',
                'content': json.dumps({
                    'kind': 'Secret',
                    'metadata': {
                        'name': 'enterprise-base-registry-auth'
                    }
                })
            }]
        }

    def test_publish_template_contains_no_source_installation_bindings(self):
        from console.services.cleanup_publish_template import portable_cleanup_template
        original = self.template()
        template = portable_cleanup_template(original)
        self.assertEqual(original, self.template())
        component = template['apps'][0]
        self.assertEqual(component['service_env_map_list'], [{'attr_name': 'BUSINESS_SETTING', 'attr_value': 'keep'}])
        attrs = {a['name']: json.loads(a['attribute_value']) for a in component['component_k8s_attributes']}
        self.assertEqual(attrs['nodeSelector'], {'kubernetes.io/arch': 'amd64'})
        self.assertEqual(attrs['volumes'], [{'name': 'business', 'configMap': {'name': 'business'}}])
        self.assertEqual(attrs['volumeMounts'], [{'name': 'business', 'mountPath': '/business'}])
        self.assertEqual(template['k8s_resources'], [])
        self.assertEqual(component['extend_method'], 'state')
        self.assertEqual(portable_cleanup_template(template), template)

    def test_old_plugin_version_does_not_acquire_new_capabilities_during_export(self):
        from console.services.cleanup_publish_template import portable_cleanup_template
        template = self.template()
        del template['platform_plugin']['cleanup_installation_protocol']
        self.assertEqual(portable_cleanup_template(template), copy.deepcopy(template))

    def test_yaml_resources_are_filtered_without_exporting_installation_credentials(self):
        from console.services.cleanup_publish_template import portable_cleanup_template
        template = self.template()
        template['k8s_resources'] = [{
            'content': 'kind: Secret\nmetadata:\n  name: rainbond-disk-system-control\n'
        }, {
            'content': 'kind: ConfigMap\nmetadata:\n  name: business-config\n'
        }]
        result = portable_cleanup_template(template)
        self.assertEqual(len(result['k8s_resources']), 1)
        self.assertIn('business-config', result['k8s_resources'][0]['content'])
