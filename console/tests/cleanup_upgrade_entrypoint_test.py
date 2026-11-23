import ast
import unittest
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import Mock, patch


class CleanupUpgradeEntrypointTests(unittest.TestCase):
    def test_managed_plugin_upgrade_uses_the_same_predeployment_path_as_the_ui(self):
        path = Path(__file__).resolve().parents[1] / 'services/upgrade_services.py'
        tree = ast.parse(path.read_text())
        cls = next(x for x in tree.body if isinstance(x, ast.ClassDef) and x.name == 'UpgradeService')
        method = next(x for x in cls.body if isinstance(x, ast.FunctionDef) and x.name == 'openapi_upgrade_app_models')
        method.decorator_list = []
        record = Mock(ID=1)
        component = SimpleNamespace(tenant_service_group_id=178)
        services = Mock()
        services.first.return_value = component
        app, region = object(), object()
        scope = {
            'Any':
            object,
            'Tenants':
            object,
            'group_service':
            SimpleNamespace(get_rainbond_services=Mock(return_value=services), get_app_by_id=Mock(return_value=app)),
            'PropertiesChanges':
            Mock(return_value=SimpleNamespace(current_version='0.0.3')),
            'get_upgrade_app_template':
            Mock(
                return_value={
                    'platform_plugin': {
                        'plugin_id': 'rainbond-enterprise-base',
                        'bundled_disk_cleanup': True,
                        'cleanup_installation_protocol': 1
                    }
                }),
            'AppUpgradeRecord':
            SimpleNamespace(objects=SimpleNamespace(get=Mock(return_value=record))),
            'RegionConfig':
            SimpleNamespace(objects=SimpleNamespace(get=Mock(return_value=region))),
            'upgrade_service':
            Mock(),
            'upgrade_repo':
            Mock(),
        }
        exec(compile(ast.fix_missing_locations(ast.Module(body=[method], type_ignores=[])), str(path), 'exec'), scope)
        manager = Mock()
        manager.get_upgrade_info.return_value = ({}, {})
        manager.get_or_create_upgrade_record.return_value = record
        team = SimpleNamespace(tenant_id='team')
        user = object()
        versions = [{'app_model_id': 'base-model', 'app_model_version': '0.0.3', 'market_name': ''}]
        with patch.dict('sys.modules', {'console.services.market_app_service': SimpleNamespace(market_app_service=Mock())}):
            result = scope['openapi_upgrade_app_models'](manager, user, team, 'region', None, 736, {
                'update_versions': versions
            })
        manager.upgrade.assert_called_once_with(team, region, user, app, '0.0.3', record)
        scope['upgrade_service'].send_upgrade_request.assert_not_called()
        self.assertEqual(result, [record])
