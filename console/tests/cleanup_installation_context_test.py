import unittest
from types import SimpleNamespace


class CleanupInstallationContextTests(unittest.TestCase):
    def test_installer_receives_request_origin_without_source_environment_bindings(self):
        from console.services.cleanup_installation_context import CleanupInstallationContextMiddleware, current_console_origin
        observed = []
        middleware = CleanupInstallationContextMiddleware(lambda request: observed.append(current_console_origin()))
        for origin in ('https://console.example:7443/', 'http://other.example:7070/'):
            middleware(SimpleNamespace(build_absolute_uri=lambda path, value=origin: value))
            self.assertEqual(current_console_origin(), '')
        self.assertEqual(observed, ['https://console.example:7443', 'http://other.example:7070'])

    def test_exception_does_not_leak_one_installation_origin_to_another_request(self):
        from console.services.cleanup_installation_context import CleanupInstallationContextMiddleware, current_console_origin

        def fail(request):
            self.assertEqual(current_console_origin(), 'https://console.example')
            raise RuntimeError('fixture')

        middleware = CleanupInstallationContextMiddleware(fail)
        with self.assertRaises(RuntimeError):
            middleware(SimpleNamespace(build_absolute_uri=lambda path: 'https://console.example/'))
        self.assertEqual(current_console_origin(), '')
