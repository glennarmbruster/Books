'use strict';
const byId = id => document.getElementById(id);
const lastPageKey = 'youre-kidding:last-fact';
const chunk = 40;
let offset = 0;
let current = 1;
function validPage(value) {
  return Number.isInteger(value) && value > 0 && value <= facts.length;
}
function remembered() {
  try { return Number(localStorage.getItem(lastPageKey)); } catch { return 1; }
}
function openPage(number) {
  location.hash = 'fact-' + number;
}
const topics = [...new Set(facts.map(fact => fact[0]))].sort();
for (const topic of topics) byId('topics').add(new Option(topic,topic));
function listFacts() {
  const query = byId('search').value.trim().toLocaleLowerCase();
  const id = /^#?\d+$/.test(query) ? Number(query.replace('#','')) : null;
  const selection = byId('topics').value;
  const matches = facts.map(([topic,title,body],i) => ({n:i+1,topic,title,body})).filter(item =>
    (!selection || item.topic === selection) &&
    (id !== null ? item.n === id : (item.title+' '+item.body+' '+item.topic).toLocaleLowerCase().includes(query)));
  const slice = matches.slice(offset,offset+chunk);
  const list = byId('results');
  list.replaceChildren();
  for (const {n,topic,title} of slice) {
    const li = document.createElement('li'), a = document.createElement('a'), meta = document.createElement('small');
    a.href = '#fact-'+n;
    meta.textContent = 'Fact '+n.toLocaleString('en-US')+' · '+topic;
    a.append(meta,document.createTextNode(title));
    li.append(a); list.append(li);
  }
  byId('count').textContent = matches.length ? (offset+1)+'–'+(offset+slice.length)+' of '+matches.length.toLocaleString('en-US')+' facts' : 'No matching facts.';
  byId('earlier').disabled = offset === 0;
  byId('later').disabled = offset+chunk >= matches.length;
}
function resetList() { offset=0; listFacts(); }
byId('search').oninput = byId('topics').onchange = resetList;
for (const [id,step] of [['earlier',-chunk],['later',chunk]]) {
  byId(id).onclick = () => { offset+=step; listFacts(); byId('search').scrollIntoView({block:'start'}); };
}
byId('random').onclick = () => openPage((current-1 + 1 + Math.floor(Math.random()*(facts.length-1))) % facts.length + 1);
function show() {
  const index = location.hash === '#index';
  byId('index').hidden = !index;
  byId('reader').hidden = index;
  if (index) {
    listFacts();
  } else {
    const route = /^#fact-(\d+)$/.exec(location.hash);
    const candidate = route ? Number(route[1]) : remembered();
    current = validPage(candidate) ? candidate : 1;
    try { localStorage.setItem(lastPageKey,String(current)); } catch {}
    const [topic,title,body,path,revision,archive,further] = facts[current-1];
    byId('number').textContent = 'Fact '+current.toLocaleString('en-US')+' of '+facts.length.toLocaleString('en-US');
    byId('topic').textContent = topic;
    byId('subject').textContent = title;
    byId('fact').textContent = body;
    byId('further').hidden = !further;
    if (further) byId('further-link').href = further;
    byId('sources').open = false;
    byId('credit').textContent = 'Wikipedia’s Did You Know archive · '+archive;
    byId('subject-link').href = 'https://en.wikipedia.org'+path;
    byId('source-link').href = 'https://en.wikipedia.org/w/index.php?oldid='+revision;
    document.querySelector('book-pager').setPage(current,facts.length,'fact',openPage,()=>{location.hash='index';});
  }
  window.scrollTo(0,0);
}
window.addEventListener('hashchange',show);
show();
