# socialfi-thesis — token theses for any crypto app

[![npm](https://img.shields.io/npm/v/socialfi-thesis.svg)](https://www.npmjs.com/package/socialfi-thesis) [![PyPI](https://img.shields.io/pypi/v/socialfi-thesis.svg)](https://pypi.org/project/socialfi-thesis/) [![ci](https://github.com/CabalSpy/socialfi-thesis/actions/workflows/ci.yml/badge.svg)](https://github.com/CabalSpy/socialfi-thesis/actions/workflows/ci.yml) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**socialfi-thesis** brings SocialFi token theses to any crypto app: holders-only opinions on a token — only people whose verified wallet holds it can post — each with the author's real position and live PnL, plus replies, reactions, moderation and live updates. One shared feed across every platform that uses CabalSpy ID, as a drop-in SocialFi widget or through the API.

Part of **[CabalSpy ID](https://id.cabalspy.xyz)** — the SocialFi layer for crypto apps. [Website](https://www.cabalspy.xyz/cabalspy-id/) · [Docs](https://docs.cabalspy.xyz/cabalspy-id) · [API dashboard](https://apidashboard.cabalspy.xyz) · [Full SDK: cabalspy-id](https://github.com/CabalSpy/cabalspy-id-js)

| Language | Install | Folder |
|---|---|---|
| TypeScript / JavaScript (+ React widget) | `npm install socialfi-thesis` | [`js/`](js) |
| Python | `pip install socialfi-thesis` | [`python/`](python) |

```tsx
import { CabalSpyTheses } from 'socialfi-thesis/react';
<CabalSpyTheses chain="solana" mint={mint} clientId="csid_..." />
```

No build step? The plain HTML widget: `<div data-csid-thesis data-chain="solana" data-mint="..."></div>` with `<script src="https://id.cabalspy.xyz/widget.js" async></script>` — or [socialfi-widget](https://github.com/CabalSpy/socialfi-widget).

## Packages

| Package | npm | PyPI |
|---|---|---|
| [cabalspy-id](https://github.com/CabalSpy/cabalspy-id-js) (everything) | `cabalspy-id` | `cabalspy-id` |
| [socialfi-api](https://github.com/CabalSpy/socialfi-api) | `socialfi-api` | `socialfi-api` |
| [socialfi-thesis](https://github.com/CabalSpy/socialfi-thesis) | `socialfi-thesis` | `socialfi-thesis` |
| [socialfi-widget](https://github.com/CabalSpy/socialfi-widget) | `socialfi-widget` | – |

Versions follow `cabalspy-id`: 0.5.0 depends on `cabalspy-id` 0.5.0. This package contains no code of its own — it re-exports part of `cabalspy-id`, so behaviour, fixes and types are always the same.

## Releasing

The two packages are released independently from this repository with GitHub releases (trusted publishing, no tokens):

- tag `js-vX.Y.Z` → npm (`js/`)
- tag `py-vX.Y.Z` → PyPI (`python/`)

Release `cabalspy-id` first; CI tests against the current `cabalspy-id` from GitHub.

## License

MIT
