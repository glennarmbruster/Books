'use strict';
const find = id => document.getElementById(id);
const worker = new Worker('search-worker.js');
const pending = new Map();
let nextId = 0, generation = 0, timer, thesaurus = false;
function ask(action, fields = {}) {
  return new Promise((resolve,reject) => {
    const seq = ++nextId;
    pending.set(seq,{resolve,reject});
    worker.postMessage({seq,action,thesaurus,...fields});
  });
}
worker.onmessage = ({data}) => {
  const call = pending.get(data.seq);
  if (!call) return;
  pending.delete(data.seq);
  if (data.error) call.reject(Error(data.error)); else call.resolve(data.result);
};
worker.onerror = () => {
  for (const call of pending.values()) call.reject(Error('The word index could not open.'));
  pending.clear();
  find('index-status').textContent = 'The word index could not open. Reload to try again.';
};

const query = find('query'), matches = find('matches'), reader = find('reader');
function el(tag, text, cls) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (cls) node.className = cls;
  return node;
}
function hash(fields) { return '#' + new URLSearchParams({...thesaurus?{mode:'thesaurus'}:{},...fields}); }
function link(text,fields) {
  const a=el('a',text);a.href=hash(fields);return a;
}
function appendReference(node, text, word) {
  const index=text.toLowerCase().lastIndexOf(word.toLowerCase());
  if(index<0){node.append(document.createTextNode(text+' '),link(word,{word}));return;}
  node.append(document.createTextNode(text.slice(0,index)),link(text.slice(index,index+word.length),{word}),document.createTextNode(text.slice(index+word.length)));
}
function lists(items, current) {
  const ul=el('ul',undefined,'results-list');
  for (const it of items) {
    const li=el('li'),a=link(it.word,{word:it.word});
    if(it.word===current)a.setAttribute('aria-current','true');
    li.append(a);ul.append(li);
  }
  return ul;
}
function alphabetPanel() {
  const title=el('h2','A–Z','word-title');title.id='word-title';
  const nav=el('nav',undefined,'alphabet');nav.setAttribute('aria-label','Browse the alphabet');
  for(const c of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')nav.append(link(c,{letter:c}));
  reader.replaceChildren(title,el('p','Choose a letter to browse the dictionary.'),nav);
  document.querySelector('.columns').classList.remove('has-entry');
}
function home() {
  find('list-title').textContent='Explore words';
  matches.replaceChildren(lists(['serendipity','colour','flummox','wanderlust'].map(word=>({word}))));
  alphabetPanel();
  document.title=(thesaurus?'The Desk Thesaurus':'The Desk Dictionary')+' · Books';
}
function showMatches(result, term) {
  const nodes=[];
  find('list-title').textContent='Search results';
  if(result.exact)nodes.push(lists([result.exact],result.exact.word));
  if(result.similar.length) {
    nodes.push(el('h3',result.exact?'Suggested spelling':'Did you mean?','rubric'),lists(result.similar));
  }
  const used=new Set(result.similar.map(it=>it.id));
  const prefix=result.prefix.filter(it=>!used.has(it.id));
  if(prefix.length)nodes.push(el('h3','Starts with','rubric'),lists(prefix));
  if(!nodes.length)nodes.push(el('p','No close matches for “'+term+'”. Try a shorter spelling or browse by letter.','empty'));
  matches.replaceChildren(...nodes);
}
function notice(message) {find('announce').textContent=message;}
function unavailable(err) {
  find('list-title').textContent='Lookup unavailable';
  matches.replaceChildren(el('p','Open the bookshelf online and download the dictionary, then try again.','empty'));
  notice(err.message);
}
function groupSenses(senses) {
  const groups=new Map();
  for(const sense of senses) {
    if(!groups.has(sense[0]))groups.set(sense[0],[]);
    groups.get(sense[0]).push(sense);
  }
  const fragment=document.createDocumentFragment();
  for(const [pos,items] of groups){
    fragment.append(el('h3',pos,'pos'));
    const ol=el('ol',undefined,'senses');
    for(const [,labels,gloss,target] of items) {
      const li=el('li');
      if(labels)li.append(el('span',labels+' · ','usage'));
      if(target)appendReference(li,gloss,target);else li.append(document.createTextNode(gloss));
      ol.append(li);
    }
    fragment.append(ol);
  }
  return fragment;
}
function showThesaurus(data) {
  const title=el('h2',data.word,'word-title');title.id='word-title';
  reader.replaceChildren(title);
  if(!data.groups.length){
    reader.append(el('p','This edition has no thesaurus group for “'+data.word+'”.'));
    if(data.references.length){
      const note=el('p','Explore the related base word or spelling.','context');
      reader.append(note,lists(data.references.map(word=>({word}))));
    }
    reader.append(link('Read the definition',{word:data.word,mode:'dictionary'}));
  }
  const meanings=new Map();
  for(const [pos,gloss,...relations] of data.groups){
    const [meaning,usage]=gloss.split(' · Alternatives marked ');
    const key=pos+'\n'+meaning;
    if(!meanings.has(key))meanings.set(key,{pos,meaning,groups:[]});
    meanings.get(key).groups.push({usage,relations});
  }
  const extra=el('details');
  extra.append(el('summary','More meanings ('+Math.max(0,meanings.size-6)+')'));
  [...meanings.values()].forEach(({pos,meaning,groups},index)=>{
    const section=el('section',undefined,'thesaurus-sense');
    section.append(el('p',pos,'pos'),el('h3',meaning,'sense-meaning'));
    const variants=el('details');
    variants.append(el('summary','Regional and usage variants'));
    for(const {usage,relations} of groups){
      const container=usage?el('section',undefined,'usage-variants'):section;
      if(usage){container.append(el('p',usage,'usage'));variants.append(container);}
      for(const [relation,items] of relations.entries()){
        if(!items.length)continue;
        container.append(el('h4',['Synonyms','Antonyms','Related words'][relation],'word-group-label'));
        const list=el('ul',undefined,'word-links');
        for(const word of items){const li=el('li');li.append(link(word,{word}));list.append(li);}
        container.append(list);
      }
    }
    if(variants.children.length>1)section.append(variants);
    (index<6?reader:extra).append(section);
  });
  if(meanings.size>6)reader.append(extra);
  const source=el('p',undefined,'attribution'),credit=el('a','Thesaurus sources and usage');
  credit.href='credits.html#thesaurus';source.append(credit);
  const original=el('a','Wiktionary entry and history');
  original.href='https://en.wiktionary.org/wiki/'+encodeURIComponent(data.word.replaceAll(' ','_'))+'#English';
  source.append(document.createTextNode(' · '),original);reader.append(source);
  document.querySelector('.columns').classList.add('has-entry');
  document.title=data.word+' · The Desk Thesaurus';
  notice('Thesaurus for '+data.word);
}
function showEntry(data) {
  const title=el('h2',data.word,'word-title');title.id='word-title';
  reader.replaceChildren(title);
  if(data.british.length || data.american.length){
    const notes=el('aside',undefined,'related');
    for(const [pairs,side] of [[data.british,'US'],[data.american,'British']]){
      for(const pair of pairs){
        const other=side==='US'?pair.us:pair.uk;
        const p=el('p');appendReference(p,pair.note,other);notes.append(p);
      }
    }
    reader.append(notes);
  }
  const [initial,more]=[data.senses.slice(0,5),data.senses.slice(5)];
  reader.append(groupSenses(initial));
  if(more.length) {
    const details=el('details');
    details.append(el('summary','More meanings ('+more.length+')'),groupSenses(more));reader.append(details);
  }
  const source=el('div',undefined,'attribution');
  if(data.wiktionary){
    const a=el('a','Wiktionary entry and history');
    a.href='https://en.wiktionary.org/wiki/'+encodeURIComponent(data.word.replaceAll(' ','_'))+'#English';
    source.append(a,document.createTextNode(' · '));
  }
  const credit=el('a','Dictionary sources');credit.href='credits.html';source.append(credit);
  reader.append(source);
  document.querySelector('.columns').classList.add('has-entry');
  document.title=data.word+' · The Desk Dictionary';
  notice('Definition for '+data.word);
}
async function route() {
  clearTimeout(timer);
  const version=++generation, params=new URLSearchParams(location.hash.slice(1));
  const term=(params.get('word')||params.get('q')||'').trim().slice(0,256);
  const letter=(params.get('letter')||'').toUpperCase();
  thesaurus=params.get('mode')==='thesaurus';
  const dictionaryTab=find('dictionary-mode'),thesaurusTab=find('thesaurus-mode');
  const target=term?{word:term}:letter?{letter}:{};
  dictionaryTab.href=hash({...target,mode:'dictionary'});
  thesaurusTab.href=hash({...target,mode:'thesaurus'});
  dictionaryTab.setAttribute('aria-current',String(!thesaurus));
  thesaurusTab.setAttribute('aria-current',String(thesaurus));
  query.value=term;
  try {
    const info=await ask('init');
    if(version!==generation)return;
    find('index-status').textContent=info.count.toLocaleString()+(thesaurus?' thesaurus entries':' headwords and phrases');
    if(/^[A-Z]$/.test(letter) && !term){
      alphabetPanel();
      const requested=Number(params.get('offset'))||0;
      const r=await ask('browse',{letter,offset:Math.max(0,Math.floor(requested))});
      if(version!==generation)return;
      find('list-title').textContent='Words beginning with '+letter;
      const pager=el('nav',undefined,'pager');pager.setAttribute('aria-label','Word list pages');
      if(r.offset)pager.append(link('‹ Previous',{letter,offset:Math.max(0,r.offset-32)}));
      if(r.offset+r.items.length<r.total)pager.append(link('Next ›',{letter,offset:r.offset+32}));
      const range=r.total ? (r.offset+1).toLocaleString()+'–'+(r.offset+r.items.length).toLocaleString()+' of '+r.total.toLocaleString():'0 entries';
      matches.replaceChildren(el('p',range,'context'),lists(r.items),pager);
      notice('Browsing '+letter);return;
    }
    if(!term){home();return;}
    const result=await ask('search',{query:term,submitted:true});
    if(version!==generation)return;
    showMatches(result,term);
    if(result.exact){
      const data=await ask('entry',{word:result.exact.word});
      if(version!==generation)return;
      if(thesaurus)showThesaurus(data);else showEntry(data);
      if(data.page){
        const pager=el('book-pager');reader.append(pager);
        pager.setPage(data.page,info.count,'entry',async n=>{
          const word=await ask('wordAt',{number:n});
          if(version===generation&&word){location.hash=hash({word});window.scrollTo(0,0);}
        },()=>location.hash=hash({}));
      }
    } else {
      const title=el('h2','No exact entry','word-title');title.id='word-title';
      const p=el('p','No entry found for “'+term+'”. ');
      if(result.similar.length)p.append(document.createTextNode('Try '),link(result.similar[0].word,{word:result.similar[0].word}),document.createTextNode('.'));
      else if(result.prefix.length)p.append(document.createTextNode('Choose a longer match from the results.'));
      reader.replaceChildren(title,p,link('Browse A–Z',{}));
      document.querySelector('.columns').classList.remove('has-entry');notice(p.textContent);
    }
  }catch(err){if(version===generation)unavailable(err);}
}
query.addEventListener('input',()=>{
  clearTimeout(timer);const version=++generation,term=query.value.trim();
  document.querySelector('.columns').classList.remove('has-entry');
  if(!term){home();return;}
  timer=setTimeout(async()=>{
    try{
      const result=await ask('search',{query:term,submitted:false});
      if(version===generation)showMatches(result,term);
    }catch(err){if(version===generation)unavailable(err);}
  },210);
});
find('lookup').addEventListener('submit',event=>{
  event.preventDefault();const q=query.value.trim();
  const target=hash(q?{q}:{});
  navigate(target);
});
function navigate(target) {
  if(location.hash!==target)history.pushState(null,'',target);
  route();
}
document.addEventListener('click',event=>{
  const anchor=event.target.closest('a[href^="#"]');
  if(anchor && event.button===0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey){
    event.preventDefault();navigate(anchor.getAttribute('href'));
  }
});
window.addEventListener('popstate',route);
window.addEventListener('hashchange',route);

route();

async function waitActive(reg) {
  const sw=reg.installing||reg.waiting||reg.active;
  if(!sw)throw Error('Missing download');
  if(sw.state==='activated')return sw;
  return new Promise((resolve,reject)=>{
    function changed(){if(sw.state==='activated'||sw.state==='redundant'){sw.removeEventListener('statechange',changed);if(sw.state==='activated')resolve(sw);else reject(Error('Download incomplete'));}}
    sw.addEventListener('statechange',changed);changed();
  });
}
async function offlineControls(){
  if(!('serviceWorker' in navigator))return;
  const button=find('download'),status=find('offline-status'),workerURL=new URL('sw.js',location.href);
  function saved(){button.hidden=true;status.textContent='Ready offline';}
  function verify(sw){return new Promise(resolve=>{
    const channel=new MessageChannel();
    const timer=setTimeout(()=>{channel.port1.close();resolve(false);},3500);
    channel.port1.onmessage=e=>{clearTimeout(timer);channel.port1.close();resolve(e.data===true);};
    sw.postMessage({type:'verify-edition',edition:document.body.dataset.edition},[channel.port2]);
  });}
  button.onclick=async()=>{
    button.disabled=true;status.textContent='Downloading…';
    try{
      const reg=await navigator.serviceWorker.register(workerURL,{updateViaCache:'none'});
      if(reg.active&&!reg.installing&&!reg.waiting)await reg.update();
      if(!await verify(await waitActive(reg)))throw Error('Incomplete download');
      saved();
    }catch{status.textContent='Download incomplete. Connect to the internet and retry.';}
    finally{button.disabled=false;}
  };
  navigator.serviceWorker.addEventListener('message',e=>{
    if(e.data?.type==='dictionary-progress'&&button.disabled)status.textContent='Downloading… '+e.data.percent+'%';
  });
  try{
    const reg=await navigator.serviceWorker.getRegistration(location.href);
    if(reg?.active&&reg.scope===new URL('./',location.href).href && await verify(reg.active)){saved();return;}
  }catch{}
  button.hidden=false;
}
offlineControls();
