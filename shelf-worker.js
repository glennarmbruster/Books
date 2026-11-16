const scope = self.registration.scope;
const shelf = new URL('index.html', scope).href;
const cacheName = 'books-shelf-v1:' + scope;
const assets = [shelf, ...['books.webmanifest', 'last-port-casebook/icon.png', 'last-port-casebook/icon-large.png'].map(path => new URL(path, scope).href)];

self.addEventListener('install', event => event.waitUntil((async () => {
  const cache = await caches.open(cacheName);
  await cache.addAll(assets);
  await self.skipWaiting();
})()));

self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  url.search = '';
  const target = url.href === scope ? shelf : url.href;
  if (!assets.includes(target)) return;
  event.respondWith((async () => {
    const cache = await caches.open(cacheName);
    try {
      const response = await fetch(event.request);
      if (response.ok) await cache.put(target, response.clone());
      return response;
    } catch {
      return await cache.match(target) || Response.error();
    }
  })());
});
