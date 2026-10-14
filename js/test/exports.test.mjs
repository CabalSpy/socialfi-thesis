import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { test } from 'node:test';

import * as core from 'cabalspy-id/thesis';
import * as coreReact from 'cabalspy-id/react';

import * as pkg from '../index.js';
import * as pkgReact from '../react.js';

const require = createRequire(import.meta.url);

test('re-exports cabalspy-id/thesis as the same objects', () => {
  assert.deepEqual(Object.keys(pkg).sort(), Object.keys(core).sort());
  for (const name of Object.keys(core)) assert.equal(pkg[name], core[name], name);
  for (const name of ['CabalSpyID', 'ThesisClient', 'ThesisLive', 'ThesesStream', 'THESIS_EMOJIS']) assert.ok(name in pkg, name);
  assert.equal('CabalSpyIDAuth' in pkg, false);
});

test('socialfi-thesis/react exports the theses widget', () => {
  assert.deepEqual(Object.keys(pkgReact).sort(), ["CabalSpyTheses", "WIDGET_SRC", "loadCabalSpyIDWidget", "useCabalSpyID"]);
  for (const name of Object.keys(pkgReact)) assert.equal(pkgReact[name], coreReact[name], name);
  const cjs = require('../react.cjs');
  assert.equal(cjs.CabalSpyTheses, require('cabalspy-id/react').CabalSpyTheses);
});

test('CommonJS', () => {
  const cjs = require('../index.cjs');
  assert.equal(cjs.ThesisClient, require('cabalspy-id').ThesisClient);
});

test('the public thesis client works through the package', async () => {
  const body = { success: true, data: { theses: 2, bull: 1, bear: 1, authors: 2, token: {} } };
  const tc = new pkg.ThesisClient({ fetch: async () => new Response(JSON.stringify(body)) });
  assert.equal((await tc.summary('solana', 'So11111111111111111111111111111111111111112')).theses, 2);
});
