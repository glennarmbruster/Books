'use strict';
const CACHE_PREFIX = 'books-field-home:' + self.registration.scope + ':';
const EDITION = '2026.11.16-field-atlas-r2';
const CACHE = CACHE_PREFIX + EDITION;
const CORE = [
  './',
  './index.html',
  './field-figures.js',
  './Field-and-Home.epub',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './packs/manifest.json'
];

async function listPacks(cache) {
  const manifest = await (await cache.match('./packs/manifest.json')).json();
  if (manifest.version !== EDITION) throw Error('Unexpected book edition');
  return manifest.files.map(file => './packs/' + file);
}

async function listPlates(cache, packPaths) {
  const packs = await Promise.all(packPaths.map(async path => (await cache.match(path)).json()));
  const paths = new Set();
  for (const pack of packs) {
    if (pack.version !== EDITION) throw Error('Unexpected guide edition');
    for (const guide of pack.guides) {
      for (const figure of guide.illustrations || []) paths.add('./figures/' + figure.plate + '.svg');
    }
  }
  return [...paths];
}

self.addEventListener('message', event => {
  const request = event.data;
  if (request !== 'verify' && request?.type !== 'verify-edition') return;
  event.waitUntil((async () => {
    let ready = false;
    try {
      if (request === 'verify' || request.edition === EDITION) {
        const cache = await caches.open(CACHE);
        const packs = await listPacks(cache);
        const plates = await listPlates(cache, packs);
        const saved = new Set((await cache.keys()).map(key => key.url));
        ready = [...CORE, ...packs, ...plates].every(path => saved.has(new URL(path, self.registration.scope).href));
      }
    } finally {
      event.ports[0]?.postMessage(ready);
    }
  })());
});

self.addEventListener('install', e => {
  e.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      await cache.addAll(CORE);
      const packPaths = await listPacks(cache);
      await cache.addAll(packPaths);
      const paths = await listPlates(cache, packPaths);
      for (let start = 0; start < paths.length; start += 12) {
        await cache.addAll(paths.slice(start, start + 12));
      }
      await self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k.startsWith(CACHE_PREFIX) && k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

function networkWithTimeout(req, ms) {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('timeout')), ms);
    fetch(req).then(res => {
      clearTimeout(t);
      resolve(res);
    }, err => {
      clearTimeout(t);
      reject(err);
    });
  });
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (!url.href.startsWith(self.registration.scope)) return;

  e.respondWith(
    networkWithTimeout(req, 4000)
      .then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      })
      .catch(async () => await (await caches.open(CACHE)).match(req, { ignoreSearch: true }) || Response.error())
  );
});
