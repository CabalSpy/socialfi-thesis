# socialfi-thesis — token theses for any crypto app (Python)

[![PyPI](https://img.shields.io/pypi/v/socialfi-thesis.svg)](https://pypi.org/project/socialfi-thesis/) [![ci](https://github.com/CabalSpy/socialfi-thesis/actions/workflows/ci.yml/badge.svg)](https://github.com/CabalSpy/socialfi-thesis/actions/workflows/ci.yml) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**socialfi-thesis** brings SocialFi token theses to your app: holders-only opinions on a token, each with the author's real position and live PnL, replies, reactions and moderation — shared across every platform that uses CabalSpy ID. Sync and async.

Part of **[CabalSpy ID](https://id.cabalspy.xyz)** — the SocialFi layer for crypto apps. [Website](https://www.cabalspy.xyz/cabalspy-id/) · [Docs](https://docs.cabalspy.xyz/cabalspy-id) · [API dashboard](https://apidashboard.cabalspy.xyz) · [Full SDK: cabalspy-id](https://github.com/CabalSpy/cabalspy-id-js)

```bash
pip install socialfi-thesis         # live theses: pip install "socialfi-thesis[stream]"
```

```python
from socialfi_thesis import CabalSpyID, ThesisClient

csid = CabalSpyID()  # Data API key: read everything, write in your users' names
theses = csid.list_theses(blockchain="solana", mint=mint, sort="top")
csid.post_thesis(blockchain="solana", mint=mint, body="Accumulating here.", stance="bull", csid_id=user_sub)

with ThesisClient(access_token, client_id="csid_...") as tc:  # public thesis API: your public client_id + the user's token
    page = tc.list("solana", mint)
```

Contents: the `cabalspy_id.thesis` module. Full reference: [cabalspy-id README — Token theses](https://github.com/CabalSpy/cabalspy-id-python#token-theses).

Versions follow `cabalspy-id`: 0.5.0 depends on `cabalspy-id` 0.5.0. This package contains no code of its own — it re-exports part of `cabalspy-id`, so behaviour, fixes and types are always the same.

## License

MIT
