'use strict';
const chapters=window.GERMAN_CHAPTERS, $=id=>document.getElementById(id);
const store='books.german.saved.v1';
const normalize=s=>s.toLowerCase().replaceAll('ß','ss').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
const searchable=s=>normalize(s)+' '+normalize(s.toLowerCase().replaceAll('ä','ae').replaceAll('ö','oe').replaceAll('ü','ue'));
const phrases=chapters.flatMap(ch=>ch.phrases.map((p,i)=>({...p,id:ch.id+'-'+(i+1),chapter:ch.id,terms:searchable(p.en+' '+p.de+' '+ch.title)})));
function saved(){try{return new Set(JSON.parse(localStorage.getItem(store)||'[]'));}catch{return new Set();}}
function el(tag,text,cls){const item=document.createElement(tag);if(text!==undefined)item.textContent=text;if(cls)item.className=cls;return item;}
function button(label,fn,cls){const b=el('button',label,cls);b.type='button';b.onclick=fn;return b;}
for(const ch of chapters) {
  const a=el('a',ch.title);a.href='#'+ch.id;$('chapters').append(a);
}
let active=null, playing=null;
function stop(){if(playing){playing.pause();playing=null;}}
function play(p,rate=1) {
  stop();$('audio-error').textContent=$('notice').textContent='';
  const sound=new Audio('data:audio/mp4;base64,'+window.PHRASE_AUDIO[p.id]);
  playing=sound;sound.playbackRate=rate;
  sound.play().catch(e=>{
    if(e.name!=='AbortError')($('show').open?$('audio-error'):$('notice')).textContent='Audio could not play. The pronunciation is printed under the German phrase.';
  });
}
function bookmark(p,focusAfter) {
  const set=saved();if(set.has(p.id))set.delete(p.id);else set.add(p.id);
  try{localStorage.setItem(store,JSON.stringify([...set]));}catch{$('notice').textContent='This device could not save the phrase.';return;}
  render();if(active)setSaveLabel($('save-large'),active,set);
  if(focusAfter)(document.querySelector('[data-save="'+p.id+'"]')||$('heading')).focus();
}
function setSaveLabel(b,p,set) {
  const yes=set.has(p.id);b.textContent=yes?'★ Saved':'☆ Save phrase';b.setAttribute('aria-pressed',String(yes));
  b.setAttribute('aria-label',(yes?'Remove saved phrase: ':'Save phrase: ')+p.en);
}
function show(p) {
  active=p;stop();$('audio-error').textContent='';$('large-en').textContent=p.en;$('large-de').textContent=p.de;$('large-say').textContent=p.say;
  setSaveLabel($('save-large'),p,saved());if(!$('show').open)$('show').showModal();
  $('phrase-pages').setPage(phrases.indexOf(p)+1,phrases.length,'phrase',n=>show(phrases[n-1]),()=>{
    $('show').close();$('query').value='';location.hash='chapters';render();
  });
  $('close').focus();
}
$('listen').onclick=()=>play(active);$('slow').onclick=()=>play(active,.76);$('save-large').onclick=()=>bookmark(active,false);
$('close').onclick=()=>$('show').close();$('show').onclose=()=>{stop();active=null;};
function card(p,set) {
  const article=el('article',undefined,'phrase'),eng=el('p',p.en),ger=el('h3',p.de),sounds=el('p',p.say,'spelling');
  ger.lang='de';
  const actions=el('div',undefined,'actions'),listen=button('Listen',()=>play(p)),large=button('Show large',()=>show(p)),save=button('',()=>bookmark(p,true),'save');
  listen.setAttribute('aria-label','Listen: '+p.en);large.setAttribute('aria-label','Show large: '+p.en);
  setSaveLabel(save,p,set);save.dataset.save=p.id;
  actions.append(listen,large,save);article.append(eng,ger,sounds,actions);return article;
}
function render(){
  const hash=location.hash.slice(1),q=$('query').value.trim(),terms=normalize(q).split(' ').filter(Boolean),set=saved();
  const chapter=chapters.find(ch=>ch.id===hash),favorites=hash==='saved';
  const directory=!q&&!chapter&&!favorites;
  $('directory').hidden=!directory;$('reader').hidden=directory;
  for(const a of document.querySelectorAll('.tabs a'))a.removeAttribute('aria-current');
  if(!q&&(directory||favorites))document.querySelector('.tabs a[href="#'+(favorites?'saved':'chapters')+'"]').setAttribute('aria-current','page');
  $('saved-link').textContent='My phrases'+(set.size?' ('+set.size+')':'');
  const pager=$('chapter-pages');pager.hidden=directory||favorites||!!q||!chapter;
  if(!pager.hidden)pager.setPage(chapters.indexOf(chapter)+1,chapters.length,'chapter',n=>location.hash=chapters[n-1].id,()=>location.hash='chapters');
  const host=$('entries');host.replaceChildren();if(directory)return;
  const rows=q?phrases.filter(p=>terms.every(t=>p.terms.includes(t))):phrases.filter(p=>favorites?set.has(p.id):p.chapter===chapter?.id);
  $('heading').tabIndex=-1;$('heading').textContent=q?'Search results':favorites?'My phrases':chapter.title;
  $('count').textContent=rows.length+(rows.length===1?' phrase':' phrases');
  if(!rows.length)host.append(el('p',q?'No matches. Try another English or German word.':'Tap ☆ Save phrase on a phrase you want handy.'));
  for(const p of rows)host.append(card(p,set));
}
$('query').oninput=()=>{stop();render();};
for(const a of document.querySelectorAll('.tabs a'))a.onclick=()=>{$('query').value='';render();};
window.onhashchange=()=>{stop();$('query').value='';render();};
window.addEventListener('storage',e=>{if(e.key===store){render();if(active)setSaveLabel($('save-large'),active,saved());}});
render();
