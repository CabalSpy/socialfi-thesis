# socialfi-thesis — token theses for any crypto app

[![npm](https://img.shields.io/npm/v/socialfi-thesis.svg)](https://www.npmjs.com/package/socialfi-thesis) [![ci](https://github.com/CabalSpy/socialfi-thesis/actions/workflows/ci.yml/badge.svg)](https://github.com/CabalSpy/socialfi-thesis/actions/workflows/ci.yml) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**socialfi-thesis** brings SocialFi token theses to your app: holders-only opinions on a token, each with the author's real position and live PnL, replies, reactions, moderation — shared across every platform that uses CabalSpy ID. Use the drop-in SocialFi widget, or build your own UI on the thesis API.

Part of **[CabalSpy ID](https://id.cabalspy.xyz)** — the SocialFi layer for crypto apps. [Website](https://www.cabalspy.xyz/cabalspy-id/) · [Docs](https://docs.cabalspy.xyz/cabalspy-id) · [API dashboard](https://apidashboard.cabalspy.xyz) · [Full SDK: cabalspy-id](https://github.com/CabalSpy/cabalspy-id-js)

```bash
npm install socialfi-thesis
```

**React widget**

```tsx
import { CabalSpyTheses } from 'socialfi-thesis/react';

<CabalSpyTheses chain="solana" mint={mint} clientId="csid_..." theme="dark" accessToken={accessToken} />
```

**Your own UI** (public thesis API with the user's access token, no API key)

```ts
import { ThesisClient } from 'socialfi-thesis';

const theses = new ThesisClient({ accessToken, clientId: 'csid_...' });
const { items, summary } = await theses.list('solana', mint, { sort: 'top' });
if ((await theses.me('solana', mint)).can_post) await theses.post('solana', mint, { body: 'Strong community.', stance: 'bull' });
const live = theses.live('solana', mint);
live.on('thesis', (t) => render(t));
await live.connect();
```

**Server** (Data API key: read everything, write in your users' names, live theses for up to 200 tokens)

```ts
import { CabalSpyID } from 'socialfi-thesis';

const csid = new CabalSpyID({ apiKey: process.env.CABALSPY_API_KEY });
await csid.postThesis({ blockchain: 'solana', mint, body: 'Accumulating here.', stance: 'bull', csid_id: userSub });
const ts = csid.thesesStream();
ts.on('thesis', (t) => addMarker(t));
await ts.connect();
ts.subscribe([{ blockchain: 'solana', mint }]);
```

Contents: the `cabalspy-id/thesis` entry point (`CabalSpyID` thesis methods, `ThesisClient`, `ThesisLive`, `ThesesStream`, thesis types) and `socialfi-thesis/react` (`<CabalSpyTheses />`, `useCabalSpyID()`). Full reference: [cabalspy-id README — Token theses](https://github.com/CabalSpy/cabalspy-id-js#token-theses).

Versions follow `cabalspy-id`: 0.5.0 depends on `cabalspy-id` 0.5.0. This package contains no code of its own — it re-exports part of `cabalspy-id`, so behaviour, fixes and types are always the same.

## License

MIT
