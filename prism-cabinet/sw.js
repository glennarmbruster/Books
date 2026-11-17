importScripts('./challenges.js');
const edition = 'prism-volume-1-500-browse';
const prefix = self.registration.scope + 'prism-cabinet:';
const cacheName = prefix + edition;
const localURL = path => new URL(path, self.registration.scope).href;
const figures = puzzles.flatMap(p => [p.figure, p.reveal]).filter(Boolean);
const assets = ['../book-pager.js',
  '../book-number.js', 'index.html', 'app.js', 'challenges.js', 'style.css', '../last-port-casebook/style.css',
  'manifest.webmanifest', 'icon.png', 'icon-large.png',
  ...new Set(figures.map(file => 'figures/' + file))
].map(localURL);

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    for (let start = 0; start < assets.length; start += 16) {
      const batch = assets.slice(start, start + 16);
      await cache.addAll(batch.map(url => new Request(url, {cache:'reload'})));
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const name of await caches.keys()) {
      if (name.startsWith(prefix) && name !== cacheName) await caches.delete(name);
    }
    await self.clients.claim();
  })());
});

self.addEventListener('message', event => {
  const request = event.data;
  if (request !== 'verify' && request?.type !== 'verify-edition') return;
  event.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    const stored = await cache.keys();
    const saved = new Set(stored.map(asset => asset.url));
    const matches = request === 'verify' || request.edition === edition;
    event.ports[0]?.postMessage(matches && assets.every(asset => saved.has(asset)));
  })());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  url.search = '';
  const target = url.href === self.registration.scope ? localURL('index.html') : url.href;
  if (!assets.includes(target)) return;
  event.respondWith((async () => {
    const cached = await (await caches.open(cacheName)).match(target);
    return cached || fetch(event.request);
  })());
});
