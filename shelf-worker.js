const scope = self.registration.scope;
const shelf = new URL('index.html', scope).href;
const cacheName = 'books-shelf-v1:' + scope;
const covers = ['casebook', 'prism', 'survival', 'dictionary', 'score', 'wordplay', 'cards', 'bench', 'sudoku', 'german', 'trivia', 'memory', 'curiosities', 'history', 'clue', 'dad', 'christmas-picture-show', 'word-of-the-day', 'joke-of-the-day', 'adult-joke-of-the-day', 'ptmp-study'].map(name => new URL('shelf-art/' + name + '.jpg', scope).href);
const assets = [shelf, ...covers, ...['shelf-order.js', 'books.webmanifest', 'last-port-casebook/icon.png', 'last-port-casebook/icon-large.png', 'field-and-home/icon-192.png', 'prism-cabinet/icon.png', 'desk-dictionary/icon.png', 'score-book/icon.png'].map(path => new URL(path, scope).href)];

self.addEventListener('install', event => event.waitUntil((async () => {
  const cache = await caches.open(cacheName);
  await cache.addAll(assets.map(url => new Request(url, {cache: 'reload'})));
  await self.skipWaiting();
})()));

self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  url.search = '';
  const target = url.href === scope ? shelf : url.href;
  // Downloads started on the shelf are handled by the shelf's worker.
  if (target === new URL('field-and-home/Field-and-Home.epub', scope).href) {
    event.respondWith((async () => {
      try {
        const response = await fetch(event.request);
        if (response.ok) return response;
        return await caches.match(target) || response;
      } catch {
        return await caches.match(target) || Response.error();
      }
    })());
    return;
  }
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
