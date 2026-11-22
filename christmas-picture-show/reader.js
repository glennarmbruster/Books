'use strict';
const $ = id => document.getElementById(id);
const make = tag => document.createElement(tag);
const normalizeWord = word => word.normalize('NFKD').toUpperCase().replace(/[^A-Z]/g,'');
const storage = 'books.christmas-picture-show.v1';
const pinKey = storage + '.pin';
let number = 0;
let selection = null, pointer = null, pressed = null, previous = null;
function book() {
  return JSON.parse(localStorage.getItem(storage) || '{}');
}
function write(data) {
  try { localStorage.setItem(storage, JSON.stringify(data)); return true; }
  catch { $('message').textContent = 'Storage is full or unavailable. This change could not be saved.'; return false; }
}
function openPuzzle(id) { location.hash = String(id); }
function appendText(parent, tag, value) {
  const el = make(tag); el.textContent = value; parent.append(el); return el;
}
function addSource(parent, url, label) {
  const a = appendText(parent,'a',label); a.href = url; a.target = '_blank'; a.rel = 'noopener';
}
const complete = (record,puzzle) => Object.keys(record || {}).length === puzzle.words.length;
function index() {
  const term = $('search').value.trim().toLocaleLowerCase();
  const data = book();
  const last = Number(localStorage.getItem(storage + '.last'));
  $('resume').href = '#' + (puzzles[last-1] ? last : 1);
  $('resume').textContent = puzzles[last-1] ? 'Resume puzzle '+last : 'Start puzzle 1';
  const openFilms = new Set([...$('chapters').querySelectorAll('details[open]')].map(el=>el.dataset.film));
  const chapters = document.createDocumentFragment(); let matches = 0, done = 0;
  films.forEach((film,filmId)=>{
    const entries = puzzles.map((p,i)=>({p,id:i+1})).filter(({p})=>p.film===filmId);
    const finished = entries.filter(({p,id})=>complete(data[id],p)).length;
    done += finished;
    const shortlist = entries.filter(({p,id})=>(film.title+' '+film.year+' '+p.title+' '+id).toLocaleLowerCase().includes(term));
    if (!shortlist.length) return;
    matches += shortlist.length;
    const details = make('details'); details.className='chapter'; details.dataset.film=String(filmId);
    details.open = Boolean(term) || openFilms.has(String(filmId));
    appendText(details,'summary',film.title+' ('+film.year+') · '+entries.length+' puzzles'+(finished?' · '+finished+' complete':''));
    const body=make('div'); body.className='chapter-body'; details.append(body);
    appendText(body,'p',film.hook);
    if(film.quotes.length) appendText(body,'p',film.quotes.map(q=>'“'+q+'”').join('   ·   '));
    const list=make('ul');body.append(list);
    for(const {p,id} of shortlist){
      const li=make('li');const a=appendText(li,'a','#'+id+' · '+p.title);a.href='#'+id;
      if(complete(data[id],p)){a.className='complete';a.setAttribute('aria-label',a.textContent+', completed');}
      list.append(li);
    }
    chapters.append(details);
  });
  $('chapters').replaceChildren(chapters);
  $('index-status').textContent = term ? matches+' matching puzzles' : done+' of '+puzzles.length+' puzzles complete on this device.';
}
function cellsBetween(a,b,n) {
  const x=a%n,y=Math.floor(a/n),dx=b%n-x,dy=Math.floor(b/n)-y;
  if(dx && dy && Math.abs(dx)!==Math.abs(dy)) return [];
  return Array.from({length:Math.max(Math.abs(dx),Math.abs(dy))+1},(_,i)=>(y+Math.sign(dy)*i)*n+x+Math.sign(dx)*i);
}
const svgNS='http://www.w3.org/2000/svg';
function addLine(svg, a, b, n, preview) {
  const el=document.createElementNS(svgNS,'line');
  el.setAttribute('x1',a%n+.5); el.setAttribute('y1',Math.floor(a/n)+.5);
  el.setAttribute('x2',b%n+.5); el.setAttribute('y2',Math.floor(b/n)+.5);
  if(preview) el.classList.add('selecting'); svg.append(el);
}
function preview(end) {
  const svg=$('board').querySelector('svg');svg.querySelector('.selecting')?.remove();
  if(selection!==null && end!==null && cellsBetween(selection,end,puzzles[number-1].grid.length).length)
    addLine(svg,selection,end,puzzles[number-1].grid.length,true);
}
function paint(status='') {
  const p=puzzles[number-1], hits=book()[number] || {}, found=Object.keys(hits);
  const svg=$('board').querySelector('svg');svg.replaceChildren();
  for(const key of found) addLine(svg,...hits[key],p.grid.length,false);
  const list=$('bank');list.replaceChildren();
  const concealed=p.kind==='superfan'||p.kind==='blanks';
  $('bank-title').hidden=concealed && found.length===0;
  $('bank-title').textContent=concealed?'Words you found':'Find these words';
  const visible=p.words.map((word,i)=>({word,i})).filter(({i})=>!concealed||Object.hasOwn(hits,i));
  for(const {word,i} of visible) {
    const li=appendText(list,'li',word);li.classList.toggle('found',Object.hasOwn(hits,i));
  }
  [...$('blanks').children].forEach((li,i)=>{
    li.textContent=Object.hasOwn(hits,i)?p.clues[i].replace('_____',p.words[i]):p.clues[i];
    li.classList.toggle('found',Object.hasOwn(hits,i));
  });
  const solved=complete(hits,p);
  $('feedback').textContent=(status?status+' · ':'')+(solved?'Complete · ':'')+found.length+' of '+p.words.length+' found';
  $('decoded').hidden=p.kind!=='hidden'||!solved;
  $('decoded').textContent=solved && p.kind==='hidden'?'Hidden message · '+p.message:'';
}
function finish(end) {
  const p=puzzles[number-1],n=p.grid.length,from=selection;
  const text=cellsBetween(from,end,n).map(k=>p.grid[Math.floor(k/n)][k%n]).join('');
  const reverse=[...text].reverse().join('');
  const hit=p.words.findIndex((w,i)=>{
    if(p.kind==='hidden'){
      const [a,b]=p.paths[i];return (a===from&&b===end)||(a===end&&b===from);
    }
    return normalizeWord(w)===text||normalizeWord(w)===reverse;
  });
  selection=null;
  if(hit===-1){paint('Try another pair of letters');return;}
  const data=book(), hits=data[number] ||= {};
  if(!Object.hasOwn(hits,hit)){hits[hit]=[from,end];write(data);}
  paint(p.words[hit]);
}
function activate(cell) {
  if(selection!==null) finish(cell);
  else { selection=cell; preview(cell); }
}
function pointAt(e) {
  const cell=document.elementFromPoint(e.clientX,e.clientY)?.closest('#board button[data-i]');
  return cell?Number(cell.dataset.i):null;
}
const board=$('board');
board.onpointerdown=e=>{
  if(pointer!==null||!e.target.matches('button[data-i]')||e.button!==0)return;
  e.preventDefault(); pointer=e.pointerId; pressed=Number(e.target.dataset.i); previous=selection;
  if(selection===null)selection=pressed;
  board.setPointerCapture(pointer);preview(pressed);
};
board.onpointermove=e=>{if(e.pointerId===pointer)preview(pointAt(e));};
board.onpointerup=e=>{
  if(pointer!==e.pointerId)return;
  const end=pointAt(e);
  if(end===null){selection=null;preview(null);}
  else if(end!==pressed || previous!==null)finish(end);
  pointer=null;pressed=null;previous=null;
};
board.onpointercancel=()=>{pointer=selection=pressed=previous=null;preview(null);};
board.onclick=e=>{if(e.detail===0 && e.target.matches('button[data-i]'))activate(Number(e.target.dataset.i));};
board.onkeydown=e=>{
  const cell=e.target.closest('button');if(!cell)return;
  const n=puzzles[number-1].grid.length,i=Number(cell.dataset.i);
  const moves={ArrowLeft:-1,ArrowRight:1,ArrowUp:-n,ArrowDown:n};
  if(e.key==='Escape'){selection=null;preview(null);return;}
  if(!(e.key in moves))return;e.preventDefault();
  let j=i;
  do {
    if((e.key==='ArrowLeft' && j%n===0)||(e.key==='ArrowRight' && j%n===n-1))return;
    j+=moves[e.key];if(j<0||j>=n*n)return;
  }while(!board.querySelector('button[data-i="'+j+'"]'));
  const next=board.querySelector('button[data-i="'+j+'"]');cell.tabIndex=-1;next.tabIndex=0;next.focus();
};
function drawGrid(p) {
  const n=p.grid.length;board.style.setProperty('--n',n);
  const svg=document.createElementNS(svgNS,'svg');svg.classList.add('tracks');svg.setAttribute('viewBox','0 0 '+n+' '+n);svg.setAttribute('aria-hidden','true');
  board.replaceChildren(svg);
  let first=true;
  for(let y=0;y<n;y++)for(let x=0;x<n;x++){
    const letter=p.grid[y][x];
    if(letter==='·'){const star=appendText(board,'span','·');star.className='star';star.setAttribute('aria-hidden','true');continue;}
    const b=appendText(board,'button',letter);b.type='button';b.dataset.i=String(y*n+x);b.tabIndex=first?0:-1;first=false;
    b.setAttribute('aria-label','Row '+(y+1)+', column '+(x+1)+', '+letter);
  }
}
const wide = matchMedia('(min-width:801px)');
function positionBank() {
  const facing = wide.matches && !$('spread').classList.contains('expanded');
  $(facing?'facing-bank':'near-bank').append($('word-panel'));
}
wide.addEventListener('change',positionBank);
$('expand').onclick=()=>{
  const expanded=$('spread').classList.toggle('expanded');
  $('expand').setAttribute('aria-pressed',String(expanded));
  $('expand').textContent=expanded?'Show facing pages':'Enlarge grid';
  positionBank();
};
function render() {
  positionBank();
  const p=puzzles[number-1],film=films[p.film];
  selection=pointer=pressed=previous=null;
  $('movie').textContent=film.title;$('folio').textContent='Puzzle '+number+' / '+puzzles.length;
  $('year').textContent=String(film.year);
  $('puzzle-title').textContent=p.title;$('rules').textContent=p.rule||'Drag across a word or tap its two ends. Words can run backwards and diagonally.';
  $('note-label').textContent=p.noteLabel;$('notes-title').textContent=p.noteTitle;$('note').textContent=p.note;
  $('quote').hidden=!p.quote;$('quote').textContent=p.quote?'“'+p.quote+'”':'';
  $('source').replaceChildren();addSource($('source'),film.source,'Film notes and credits ↗');
  if(p.quote && film.quoteSource){$('source').append(' · ');addSource($('source'),film.quoteSource,'Dialogue ↗');}
  $('key').open=false;$('help').open=false;
  $('clue-panel').hidden=p.kind!=='blanks';$('blanks').replaceChildren();
  for(const c of p.clues||[]) appendText($('blanks'),'li',c);
  const key=$('key').querySelector('ol');key.replaceChildren();
  const coords=k=>'R'+(Math.floor(k/p.grid.length)+1)+' C'+(k%p.grid.length+1);
  p.words.forEach((w,i)=>appendText(key,'li',w+' · '+p.paths[i].map(coords).join(' → ')));
  drawGrid(p);paint();
  document.querySelector('book-pager').setPage(number,puzzles.length,'puzzle',openPuzzle,()=>location.hash='index');
}
function route() {
  const hash=location.hash.slice(1),id=Number(hash);number=/^\d+$/.test(hash)&&puzzles[id-1]?id:0;
  $('reader').hidden=!number;$('catalog').hidden=Boolean(number);
  if(number){localStorage.setItem(storage+'.last',String(number));render();}else index();
  window.scrollTo(0,0);
}
$('search').oninput=index;
document.addEventListener('open-book-number',e=>openPuzzle(e.detail));
window.addEventListener('hashchange',route);
window.addEventListener('storage',e=>{if(e.key===storage){if(number)paint();else index();}});
