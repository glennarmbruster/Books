if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(()=>navigator.serviceWorker.ready).then(reg=>{
    if(reg.scope===new URL('./',location.href).href)document.getElementById('offline').textContent='Ready offline';
  }).catch(()=>{document.getElementById('offline').textContent='Open online to download';});
}
