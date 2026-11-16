const CACHE='last-port-sampler-1.0.1';
const assets=['./index.html','./puzzles.js','./app.js','./style.css','./icon.png','./icon-large.png','./manifest.webmanifest'];
const urlOf=path=>new URL(path,self.registration.scope).href;
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(CACHE);
 for(const path of assets){
  const url=urlOf(path);const response=await fetch(url,{cache:'reload',credentials:'same-origin'});
  if(!response.ok||response.redirected)throw Error('Unable to cache '+path);
  const type=response.headers.get('content-type')||'';
  if(path.endsWith('.js')&&!type.includes('javascript')||path.endsWith('.css')&&!type.includes('css')||path.endsWith('.png')&&!type.includes('image/png'))throw Error('Unexpected resource '+path);
  await cache.put(url,response);
 }
 await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 for(const name of await caches.keys())if(name.startsWith('last-port-sampler-')&&name!==CACHE)await caches.delete(name);
 await self.clients.claim();
})()));
self.addEventListener('message',event=>{if(event.data==='verify')event.waitUntil((async()=>{const cache=await caches.open(CACHE);const hits=await Promise.all(assets.map(a=>cache.match(urlOf(a))));event.ports[0]?.postMessage(hits.every(Boolean));})());});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
 const target=event.request.mode==='navigate'?urlOf('./index.html'):event.request.url;
 event.respondWith((async()=>{const cached=await (await caches.open(CACHE)).match(target);return cached||fetch(event.request);})());
});
