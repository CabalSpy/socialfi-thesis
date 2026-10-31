"""socialfi-thesis — token theses by CabalSpy ID.

Re-exports ``cabalspy_id.thesis``: Data API thesis methods, the public thesis
client (``ThesisClient``) and the theses stream.

    from socialfi_thesis import CabalSpyID, ThesisClient
"""

from typing import Any

import cabalspy_id.thesis as _source
from cabalspy_id.thesis import *  # noqa: F403
from cabalspy_id.thesis import __all__ as _source_all

__version__ = "0.6.0"
#: The version of the cabalspy-id package doing the work.
cabalspy_id_version: str = _source.__version__

__all__ = [*(n for n in _source_all if n != "__version__"), "__version__", "cabalspy_id_version"]  # noqa: PLE0604


def __getattr__(name: str) -> Any:
    # Names cabalspy_id.thesis loads lazily (the stream clients) are forwarded too.
    return getattr(_source, name)
