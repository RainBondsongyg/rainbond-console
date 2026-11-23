"""Carry the current Console origin into installation, never into market exports."""
from contextvars import ContextVar
from urllib.parse import urlsplit, urlunsplit

_console_origin = ContextVar('cleanup_console_origin', default='')


def current_console_origin() -> str:
    return _console_origin.get()


class CleanupInstallationContextMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Django validates the incoming host and applies the platform's proxy
        # policy. Only its root origin is used; no request path/query is retained.
        parsed = urlsplit(request.build_absolute_uri('/'))
        origin = ''
        if parsed.scheme in ('http', 'https') and parsed.hostname and parsed.username is None and parsed.password is None:
            origin = urlunsplit((parsed.scheme, parsed.netloc, '', '', ''))
        token = _console_origin.set(origin)
        try:
            return self.get_response(request)
        finally:
            _console_origin.reset(token)
