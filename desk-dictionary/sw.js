'use strict';
const edition='desk-2026-11-17-4';
const prefix='desk-dictionary:'+self.registration.scope+':', cacheName=prefix+edition;
const url=file=>new URL(file,self.registration.scope).href;
self.addEventListener('install',event=>event.waitUntil((async()=>{
  const cache=await caches.open(cacheName);
  const manifest=await fetch(url('offline-files.json'),{cache:'reload'});
  if(!manifest.ok)throw Error('Download list unavailable');
  const {files,release}=await manifest.clone().json();
  if(release!==edition)throw Error('Dictionary edition mismatch');
  const present=new Set((await cache.keys()).map(r=>r.url));
  const missing=files.filter(file=>!present.has(url(file)));
  for(let i=0;i<missing.length;i+=6){
    const batch=missing.slice(i,i+6);
    await cache.addAll(batch.map(file=>new Request(url(file),{cache:'reload'})));
    const percent=Math.floor(100*(files.length-missing.length+i+batch.length)/files.length);
    if(i%24===0||i+batch.length===missing.length){
      for(const client of await self.clients.matchAll({includeUncontrolled:true,type:'window'})){
        if(client.url.startsWith(self.registration.scope))client.postMessage({type:'dictionary-progress',percent});
      }
    }
  }
  await cache.put(url('offline-files.json'),manifest);await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  for(const key of await caches.keys())if(key.startsWith(prefix)&&key!==cacheName)await caches.delete(key);
  await self.clients.claim();
})()));
self.addEventListener('message',event=>{
  if(event.data!=='verify'&&event.data?.type!=='verify-edition')return;
  event.waitUntil((async()=>{
    try {
      const cache=await caches.open(cacheName);
      const manifest=await cache.match(url('offline-files.json'));
      if(!manifest || (event.data?.edition && event.data.edition!==edition))throw Error();
      const {files,release}=await manifest.json(),present=new Set((await cache.keys()).map(r=>r.url));
      event.ports[0]?.postMessage(release===edition&&files.every(f=>present.has(url(f))));
    }catch{event.ports[0]?.postMessage(false);}
  })());
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  if(!event.request.url.startsWith(self.registration.scope)&&event.request.url!==url('../book-pager.js'))return;
  const target=new URL(event.request.url);
  target.search='';target.hash='';
  if(target.href===self.registration.scope)target.pathname+='index.html';
  event.respondWith((async()=>await (await caches.open(cacheName)).match(target.href)||fetch(event.request))());
});
