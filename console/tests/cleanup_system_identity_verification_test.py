import unittest
from unittest.mock import Mock, patch


class SystemIdentityVerificationTests(unittest.TestCase):
    def test_new_installation_verifies_in_region_without_exporting_a_key(self):
        from console.services.cleanup_system_coordination import verify_system_coordination_request
        api = Mock()
        api.verify_cleanup_system_identity.return_value = (200, {'bean': {'protocol': 1, 'verified': True}})
        path = '/console/cleanup/internal/system-coordination/enterprise/region'
        with patch.dict('os.environ', {'CLEANUP_SYSTEM_COORDINATION_FILE': ''}):
            self.assertTrue(verify_system_coordination_request(path, 'enterprise', 'region', '100', 'signature', b'{}', api))
            self.assertFalse(
                verify_system_coordination_request(path + '?unexpected=true', 'enterprise', 'region', '100', 'signature', b'{}',
                                                   api))
        api.verify_cleanup_system_identity.assert_called_once_with('enterprise', 'region', '100', 'signature', b'{}')

    def test_configured_legacy_identity_is_not_silently_replaced(self):
        from console.services.cleanup_system_coordination import verify_system_coordination_request
        from console.services.cleanup_gateway import CleanupGatewayUnavailable
        api = Mock()
        with patch.dict('os.environ', {'CLEANUP_SYSTEM_COORDINATION_FILE': '/missing-fixture'}), \
                patch('console.services.cleanup_system_coordination.resolve_system_coordination_key',
                      side_effect=CleanupGatewayUnavailable):
            with self.assertRaises(CleanupGatewayUnavailable):
                verify_system_coordination_request('/console/cleanup/internal/system-coordination/e/r', 'e', 'r', '100',
                                                   'signature', b'{}', api)
        api.verify_cleanup_system_identity.assert_not_called()
