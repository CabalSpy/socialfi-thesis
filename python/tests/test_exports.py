from __future__ import annotations

import cabalspy_id.thesis as source

import socialfi_thesis


def test_reexports_the_same_objects() -> None:
    for name in source.__all__:
        if name == "__version__":
            continue
        assert getattr(socialfi_thesis, name) is getattr(source, name), name


def test_entry_points() -> None:
    for name in ["CabalSpyID", "AsyncCabalSpyID", "ThesisClient", "AsyncThesisClient", "ThesisLive", "ThesesStream"]:
        assert getattr(socialfi_thesis, name) is getattr(source, name), name
    assert socialfi_thesis.__version__ == "0.5.0"
    assert socialfi_thesis.cabalspy_id_version == source.__version__


def test_star_import() -> None:
    ns: dict[str, object] = {}
    exec("from socialfi_thesis import *", ns)
    for name in ["CabalSpyID", "AsyncCabalSpyID", "ThesisClient", "AsyncThesisClient", "ThesisLive", "ThesesStream"]:
        assert ns[name] is getattr(source, name), name
