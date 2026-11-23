'use strict';

const page = document.getElementById('page');
const questions = new Map();
for (const [domain, chapter] of chapters.entries()) {
  chapter.items.forEach(([lesson, stem, correct, a, b, c, rationale, whyA, whyB, whyC, caseGroup], i) => {
    const id = (domain + 1) + '-' + (i + 1);
    questions.set(id, {id, domain, lesson, stem, caseGroup:caseGroup || id, options:[correct,a,b,c], reasons:[rationale,whyA,whyB,whyC]});
  });
}
const storageKey = 'books.ptmp-study.v1';
const blank = () => ({active:null, history:[], exposure:{}, missed:{}});
let state = blank();
let storageIssue = '';
let syncing = false;
try {
  const stored = localStorage.getItem(storageKey);
  if (stored) state = JSON.parse(stored);
} catch { storageIssue = 'Progress storage is unavailable on this device.'; }
function save() {
  try { localStorage.setItem(storageKey, JSON.stringify(state)); }
  catch { storageIssue = 'This device could not save your progress. Keep this page open to finish.'; }
  document.getElementById('storage').textContent = storageIssue;
}
const esc = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const byId = id => document.getElementById(id);
function routeTo(path) {
  if (location.hash === '#'+path) route();
  else location.hash=path;
}
const href = (path,label,style='') => '<a class="'+style+'" href="#'+path+'">'+esc(label)+'</a>';
const dateLabel = time => new Date(time).toLocaleString(undefined,{dateStyle:'medium',timeStyle:'short'});
function shuffle(items) {
  const list = [...items];
  for (let i=list.length-1; i>0; i--) {
    const j=Math.floor(Math.random()*(i+1));
    [list[i],list[j]]=[list[j],list[i]];
  }
  return list;
}
function available(scope) {
  return [...questions.values()].filter(q => scope==='all' || (scope==='missed' ? state.missed[q.id] : q.domain===Number(scope)));
}
// Allocate mixed sets by exam weight, while respecting the questions still available.
function draw(pool,count,prior=[]) {
  const occurrences = new Map();
  for (const q of prior) occurrences.set(q.caseGroup,(occurrences.get(q.caseGroup)||0)+1);
  const ranked = shuffle(pool).map(q=>{
    const exposure=state.exposure[q.id]||0;
    return {q,exposure};
  }).sort((a,b)=>a.exposure-b.exposure);
  // At equal exposure, use each case once before returning to its follow-up questions.
  for (const row of ranked) {
    const key=row.q.caseGroup;
    row.round=occurrences.get(key)||0;
    occurrences.set(key,row.round+1);
  }
  ranked.sort((a,b)=>a.exposure-b.exposure || a.round-b.round);
  const groups=chapters.map((_,i)=>ranked.filter(row=>row.q.domain===i).map(row=>row.q));
  const sizes=groups.map(()=>0);
  let remaining=count;
  while (remaining>0) {
    const open=shuffle([0,1,2,3].filter(i=>sizes[i]<groups[i].length));
    const totalWeight=open.reduce((sum,i)=>sum+chapters[i].weight,0);
    const batch=remaining;
    // A random offset also gives a one-question mixed quiz a chance at every domain.
    let boundary=Math.random();
    for (const i of open) {
      const previous=Math.floor(boundary);
      boundary+=batch*chapters[i].weight/totalWeight;
      const share=Math.min(Math.floor(boundary)-previous,groups[i].length-sizes[i]);
      sizes[i]+=share;
      remaining-=share;
    }
  }
  return shuffle(groups.flatMap((group,i)=>group.slice(0,sizes[i])));
}
function start(scope,count,mock) {
  if(state.active) return routeTo('test');
  const pool=available(scope);
  if(!Number.isInteger(count)||count<1||count>pool.length) return;
  const scored=draw(pool,mock ? 150 : count);
  const used=new Set(scored.map(q=>q.id));
  const unscored=mock ? draw(pool.filter(q=>!used.has(q.id)),15,scored) : [];
  const entries=shuffle([...scored,...unscored]).map(q=>{
    state.exposure[q.id]=(state.exposure[q.id]||0)+1;
    return {id:q.id,order:shuffle([0,1,2,3]),answer:null,flag:false,scored:used.has(q.id)};
  });
  state.active={started:Date.now(),endTime:mock?Date.now()+10800000:null,mock,entries,position:0};
  save();
  routeTo('test');
}
function finish(timedOut=false) {
  const a=state.active;
  if (!a) return;
  const blanks=a.entries.filter(x=>x.answer===null).length;
  if(!timedOut && !confirm(blanks ? 'Finish with '+blanks+' unanswered? Blank scored questions count as incorrect.' : 'Finish this test and review your answers?')) return;
  for(const x of a.entries) {
    if(x.answer===0) delete state.missed[x.id];
    else state.missed[x.id]=true;
  }
  a.finished=Date.now();
  a.timedOut=timedOut;
  state.history.unshift(a);
  state.active=null;
  save();
  routeTo('results/'+a.started);
}
function grade(a,domain) {
  const scored=a.entries.filter(x=>x.scored && (domain===undefined || questions.get(x.id).domain===domain));
  const right=scored.filter(x=>x.answer===0).length;
  return {right,total:scored.length,percent:scored.length ? Math.round(right/scored.length*100)+'%' : '—'};
}
function setup() {
  const hero='<div class="hero"><img class="cover" src="../shelf-art/ptmp-study.jpg" alt=""><div><p class="section-label">Parking, transportation &amp; mobility</p><h1>PTMP Study Companion</h1><p>Four study chapters and '+questions.size.toLocaleString('en-US')+' practice questions.</p></div></div>';
  const list=chapters.map((ch,i)=>'<li>'+href('chapter/'+i,ch.title+' · '+ch.weight+'%')+'</li>').join('');
  const a=state.active;
  let builder;
  if(a) {
    builder='<h2>Test in progress</h2><p>'+a.entries.filter(x=>x.answer!==null).length+' of '+a.entries.length+' answered. '+(a.mock?'The simulation clock continues while you are away.':'Your place is saved on this device.')+'</p>'+href('test','Resume test','button primary');
  } else {
    const missed=Object.keys(state.missed).length;
    builder='<h2>Create a practice test</h2><form id="builder"><label class="field"><span>Question pool</span><select id="pool"><option value="all">All four domains · exam-weighted</option>'+chapters.map((c,i)=>'<option value="'+i+'">'+esc(c.title)+'</option>').join('')+'<option value="missed" '+(!missed?'disabled':'')+'>Previously missed ('+missed+')</option></select></label><label class="field"><span>Number of questions</span><input id="count" required type="number" inputmode="numeric" step="1" min="1" value="20" aria-describedby="limit"> <small id="limit"></small></label><p class="small muted">Untimed, with explanations after you finish. New questions get priority.</p><button class="primary">Start practice test</button></form><details><summary>Full-length exam simulation</summary><p>165 mixed questions in three hours. As on the official exam, 150 count toward the score and 15 are unscored. All 165 have explanations after you finish.</p><button id="mock">Start timed simulation</button></details>';
  }
  page.innerHTML=hero+'<section class="panel">'+builder+'</section><h2>Study chapters</h2><p class="muted">The percentages show each domain’s share of the exam.</p><ol class="chapters">'+list+'</ol><details><summary>Worked calculations</summary><ol>'+workedExamples.map((ex,i)=>'<li>'+href('worked/'+i,ex.title)+'</li>').join('')+'</ol></details>'+href('history','Review past tests','button');
  if(!a) {
    const form=byId('builder'), scope=byId('pool'), count=byId('count');
    function setLimit() {
      const cap=available(scope.value).length;
      count.max=cap;
      byId('limit').textContent='1–'+cap+' available';
      if(Number(count.value)>cap) count.value=cap;
    }
    scope.onchange=setLimit;
    if(location.hash==='#home/missed' && Object.keys(state.missed).length) scope.value='missed';
    setLimit();
    form.onsubmit=e=>{e.preventDefault();start(scope.value,count.valueAsNumber,false);};
    byId('mock').onclick=()=>start('all',165,true);
  }
}
function pagerMarkup() { return '<book-pager top="#upper"></book-pager>'; }
function paging(pos,total,noun,move,index) {
  page.querySelector('book-pager').setPage(pos+1,total,noun,n=>move(n-1),index);
}
function study(domain,lessonNum,returnTo) {
  const ch=chapters[domain];
  if(!ch) return setup();
  const lessons=ch.lessons.map(([name,description,example,prompt],i)=>'<article class="lesson" id="lesson-'+i+'"><h2>'+esc(name)+'</h2><p>'+esc(description)+'</p><div class="worked"><b>Worked example</b>'+esc(example)+'</div><b>Check your understanding</b><p>'+esc(prompt)+'</p></article>').join('');
  page.innerHTML='<div id="upper"></div>'+href('home','‹ Study index')+'<p class="section-label">Domain '+(domain+1)+' · '+ch.weight+'% of the exam</p><h1>'+esc(ch.title)+'</h1>'+lessons+'<h2>References</h2><ul>'+ch.sources.map(([label,url])=>'<li><a target="_blank" rel="noopener" href="'+esc(url)+'">'+esc(label)+'</a></li>').join('')+'</ul>'+pagerMarkup();
  paging(domain,chapters.length,'chapter',n=>routeTo('chapter/'+n),()=>routeTo('home'));
  if(Number.isInteger(lessonNum)) {
    const lesson=byId('lesson-'+lessonNum);
    if(lesson && returnTo && /^review\/\d+\/(all|missed|flagged)\/\d+$/.test(returnTo)) {
      lesson.insertAdjacentHTML('afterbegin',href(returnTo,'‹ Return to question explanation'));
    }
    lesson?.scrollIntoView();
  }
}
function worked(pos) {
  const example=workedExamples[pos];
  if(!example) return setup();
  page.innerHTML='<div id="upper"></div>'+href('home','‹ Study index')+
    '<p class="section-label">Worked calculations</p><h1>'+esc(example.title)+'</h1>'+
    '<section class="lesson"><p>'+esc(example.problem)+'</p><details><summary>Work through the answer</summary><ol>'+
    example.steps.map(step=>'<li>'+esc(step)+'</li>').join('')+'</ol><p class="tip">'+esc(example.trap)+'</p></details></section>'+pagerMarkup();
  paging(pos,workedExamples.length,'example',n=>routeTo('worked/'+n),()=>routeTo('home'));
}
function questionIndex(a) {
  const counts = {
    all:a.entries.length,
    blank:a.entries.filter(x=>x.answer===null).length,
    flagged:a.entries.filter(x=>x.flag).length
  };
  page.innerHTML=`
    <div class="bar">${href('test','‹ Resume question')}<strong id="clock"></strong></div>
    <h1>Test questions</h1>
    <label class="field"><span>Show questions</span>
      <select id="question-filter">
        <option value="all">All (${counts.all})</option>
        <option value="blank">Unanswered (${counts.blank})</option>
        <option value="flagged">Flagged (${counts.flagged})</option>
      </select>
    </label>
    <p id="filter-status" role="status"></p>
    <ol class="index"></ol>
    <button id="finish" class="primary">Finish test</button>`;
  function list() {
    const filter=byId('question-filter').value;
    page.querySelector('.index').innerHTML=a.entries.map((x,i)=>{
      if(filter==='blank' && x.answer!==null || filter==='flagged' && !x.flag) return '';
      const status=(x.flag?'Flagged · ':'')+(x.answer===null?'Blank':'Answered');
      return `<li><a href="#test/${i}">
        <span>${i+1}. ${esc(questions.get(x.id).stem)}</span>
        <span class="small">${status}</span></a></li>`;
    }).join('');
    byId('filter-status').textContent=counts[filter]?'Select a question to revisit it before submitting.':'No questions match this filter.';
  }
  byId('question-filter').onchange=list;
  byId('finish').onclick=()=>finish();
  list();
  tick();
}
function tick() {
  const a=state.active;
  if(!a?.endTime) return;
  const seconds=Math.ceil((a.endTime-Date.now())/1000);
  if(seconds<=0){finish(true);return;}
  const clock=byId('clock');
  if(clock) clock.textContent=[Math.floor(seconds/3600),Math.floor(seconds/60)%60,seconds%60].map(v=>String(v).padStart(2,'0')).join(':')+' remaining';
}
function test(requested) {
  const a=state.active;
  if(!a) return setup();
  if(requested==='index') return questionIndex(a);
  const pos=Number(requested);
  if(requested!==undefined && Number.isInteger(pos) && pos>=0 && pos<a.entries.length) {a.position=pos;if(!syncing) save();}
  const x=a.entries[a.position], q=questions.get(x.id);
  page.innerHTML='<div id="upper"></div><div class="bar">'+href('home','‹ Study home')+'<strong id="clock"></strong></div><p class="section-label">Question '+(a.position+1)+' of '+a.entries.length+(a.mock?' · Exam simulation':' · '+esc(chapters[q.domain].title))+'</p><fieldset><legend class="qtitle">'+esc(q.stem)+'</legend><div class="choices">'+x.order.map(k=>'<label class="option"><input type="radio" name="answer" value="'+k+'" '+(x.answer===k?'checked':'')+'><span>'+esc(q.options[k])+'</span></label>').join('')+'</div></fieldset><label class="check"><input type="checkbox" id="flag" '+(x.flag?'checked':'')+'> Flag for review</label>'+pagerMarkup()+'<div class="actions"><button id="finish" class="primary">Finish test</button></div>';
  page.querySelectorAll('[name=answer]').forEach(el=>el.onchange=()=>{x.answer=Number(el.value);save();});
  byId('flag').onchange=e=>{x.flag=e.target.checked;save();};
  byId('finish').onclick=()=>finish();
  paging(a.position,a.entries.length,'question',n=>routeTo('test/'+n),()=>routeTo('test/index'));
  tick();
}
function history() {
  page.innerHTML=href('home','‹ Study home')+'<h1>Test history</h1>'+
    (state.history.length ? '<ol class="history">'+state.history.map(a=>{
      const g=grade(a);
      return '<li>'+href('results/'+a.started,dateLabel(a.finished)+' · '+a.entries.length+' questions · '+g.percent)+'</li>';
    }).join('')+'</ol>' : '<p>Finished tests and answer explanations will appear here.</p>');
}
function reviewSet(a,filter) {
  return a.entries.map((item,i)=>({item,i})).filter(({item})=>filter==='missed' ? item.answer!==0 : filter==='flagged' ? item.flag : true);
}
function results(a) {
  const g=grade(a);
  const skipped=a.entries.filter(x=>x.answer===null).length;
  let controls='';
  for(const [filter,label] of [['missed','Review missed'],['all','Review all'],['flagged','Review flagged']]) {
    const count=reviewSet(a,filter).length;
    if(count) controls+=href('review/'+a.started+'/'+filter+'/0',label+' ('+count+')','button '+(filter==='missed'?'primary':''));
  }
  page.innerHTML=href('history','‹ Test history')+'<h1>Test results</h1><p>'+esc(dateLabel(a.finished))+(a.timedOut?' · Time expired':'')+'</p><div class="panel"><strong class="score">'+g.percent+'</strong><p>'+g.right+' of '+g.total+' scored questions correct. '+skipped+' unanswered across the test.</p>'+(a.mock?'<p class="small">15 additional practice items were unscored. The percentage above is a raw practice score.</p>':'')+'<div class="actions">'+controls+'</div></div><table><caption>Performance by domain</caption><thead><tr><th scope="col">Domain</th><th scope="col">Correct</th><th scope="col">Score</th></tr></thead><tbody>'+chapters.map((ch,i)=>{const dg=grade(a,i);return '<tr><th scope="row">'+esc(ch.title)+'</th><td>'+dg.right+'/'+dg.total+'</td><td>'+dg.percent+'</td></tr>';}).join('')+'</tbody></table><div class="actions">'+href('home','Practice test setup','button')+(Object.keys(state.missed).length && !state.active?href('home/missed','Retest missed questions','button'):'')+'</div>';
}
function review(a,mode,pos) {
  const subset=reviewSet(a,mode);
  if(!subset[pos]) return results(a);
  const {item:x,i}=subset[pos];
  const q=questions.get(x.id), ch=chapters[q.domain];
  const lesson=ch.lessons[q.lesson];
  const chosen=x.answer;
  let analysis='';
  if(chosen!==0) {
    analysis=chosen===null?'<p><b>Your response</b>Unanswered</p>':'<p><b>Your response</b>'+esc(q.options[chosen])+'</p><p><b>Why this choice falls short</b>'+esc(q.reasons[chosen])+'</p>';
  }
  const others=x.order.filter(k=>k!==0 && k!==chosen);
  const alternatives='<details><summary>Why the other choices fall short</summary><ul class="details">'+others.map(k=>'<li><b>'+esc(q.options[k])+'</b>'+esc(q.reasons[k])+'</li>').join('')+'</ul></details>';
  page.innerHTML='<div id="upper"></div>'+href('results/'+a.started,'‹ Test results')+'<p class="section-label">Test question '+(i+1)+' · '+(chosen===0?'Correct':chosen===null?'Unanswered':'Missed')+(x.scored?'':' · Unscored')+'</p><h1 class="qtitle">'+esc(q.stem)+'</h1><div class="feedback">'+analysis+'<p><b>Best answer</b>'+esc(q.options[0])+'</p><p><b>Reasoning</b>'+esc(q.reasons[0])+'</p>'+alternatives+'</div><div class="tip"><b>Review this topic</b><br>'+href('chapter/'+q.domain+'/'+q.lesson+'/review/'+a.started+'/'+mode+'/'+pos,lesson[0])+'</div>'+pagerMarkup();
  paging(pos,subset.length,'review item',n=>routeTo('review/'+a.started+'/'+mode+'/'+n),()=>routeTo('results/'+a.started));
}
function route() {
  const parts=location.hash.slice(1).split('/');
  const [view,id,filter,pos]=parts;
  window.scrollTo(0,0);
  if(state.active?.endTime && Date.now()>=state.active.endTime) {finish(true);return;}
  if(view==='chapter') study(Number(id),filter===undefined?null:Number(filter),parts.slice(3).join('/'));
  else if(view==='worked') worked(Number(id));
  else if(view==='test') test(id);
  else if(view==='history') history();
  else if(view==='review'||view==='results') {
    const a=state.history.find(x=>String(x.started)===id);
    if(!a) history();
    else if(view==='review') review(a,filter,Number(pos));
    else results(a);
  } else setup();
}
window.addEventListener('storage',event=>{
  if(event.key!==storageKey || !event.newValue) return;
  try { state=JSON.parse(event.newValue); }
  catch { return; }
  syncing=true;
  try { route(); } finally { syncing=false; }
});
window.addEventListener('hashchange',route);
window.addEventListener('pageshow',route);
setInterval(tick,1000);
byId('storage').textContent=storageIssue;
route();

async function offline() {
  const status=byId('offline');
  try {
    const registration=await navigator.serviceWorker.register('./sw.js');
    const worker=registration.installing||registration.waiting||registration.active;
    const update=()=>{
      if(worker.state==='activated') status.textContent='Ready offline';
      if(worker.state==='redundant') status.textContent='Reopen online to finish downloading.';
    };
    worker.addEventListener('statechange',update);
    update();
  } catch { status.textContent='Open from your online bookshelf to save this book offline.'; }
}
offline();
