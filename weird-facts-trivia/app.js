'use strict';

const $=id=>document.getElementById(id);
const cards=new Map(), topics=new Map();
const normalize=text=>text.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
for(const batch of [...window.TRIVIA_CATEGORIES].sort((a,b)=>a.start-b.start)) {
  // Future batches can append cards to a category without changing its original ID.
  const topic=topics.get(batch.name)||{id:batch.start,name:batch.name,cards:[]};
  topics.set(topic.name,topic);
  batch.cards.forEach(([question,answer,detail,source,url,archive,featured],i)=>{
    const id=batch.start+i;
    if(cards.has(id))throw Error('Duplicate trivia number '+id);
    const letterAnswer=id<=1000?(window.TRIVIA_LETTER_ANSWERS[id]||''):answer;
    const answerKey=normalize(letterAnswer).replace(/[^a-z0-9]+/g,' ').trim();
    const initial=/^[a-z]/.test(answerKey)?answerKey[0].toUpperCase():'';
    const card={id,question,answer,detail,source,url,archive,featured,topic,letterAnswer,answerKey,initial,terms:normalize(topic.name+' '+question+' '+id)};
    topic.cards.push(card);cards.set(id,card);
  });
}
const allTopics=[...topics.values()], byTopic=new Map(allTopics.map(t=>[t.id,t]));
const numbers=[...cards.keys()].sort((a,b)=>a-b), latest=numbers.at(-1), roundSize=10;
const label=id=>'#'+String(id).padStart(3,'0');
const prefix='books.weird-trivia.v1.', memory=new Map();
function load(key,fallback) {
  if(memory.has(key))return memory.get(key);
  try {const value=localStorage.getItem(prefix+key);return value?JSON.parse(value):fallback;}
  catch {return fallback;}
}
function save(key,value) {
  try {localStorage.setItem(prefix+key,JSON.stringify(value));memory.delete(key);}
  catch {memory.set(key,value);$('notice').textContent='Storage is unavailable. Keep this page open to continue this round.';}
}
function el(tag,text,cls) {
  const node=document.createElement(tag);
  if(text!==undefined)node.textContent=text;
  if(cls)node.className=cls;
  return node;
}
function link(text,href,cls) {const a=el('a',text,cls);a.href=href;return a;}
function sourcesFor(card) {
  const sources=[[card.source,card.url]];
  if(card.archive) sources.push(['Original fact','https://en.wikipedia.org/w/index.php?oldid='+card.archive],['CC BY-SA 4.0','https://creativecommons.org/licenses/by-sa/4.0/']);
  return sources.map(([label,url])=>{const a=link(label+' ↗',url);a.target='_blank';a.rel='noopener';return a;});
}
function topicName(id) {return id?byTopic.get(id).name:'Mixed categories';}
$('book-count').textContent=cards.size.toLocaleString('en-US')+' questions · '+topics.size+' categories';
$('topic').append(new Option('Random mix · all categories','0'));
for(const t of [...allTopics].sort((a,b)=>a.name.localeCompare(b.name)))$('topic').append(new Option(t.name,t.id));
const jump=el('book-number-jump');jump.setAttribute('noun','question');jump.setAttribute('max',latest);$('number-tool').append(jump);
document.addEventListener('open-book-number',e=>{location.hash='question/'+e.detail;});

const cabinet=deckFor({limit:latest,topic:0,seed:1927}).filter(c=>c.featured);
const now=new Date();
let cabinetIndex=Math.floor(Date.UTC(now.getFullYear(),now.getMonth(),now.getDate())/86400000);
function displayCuriosity() {
  const anchor=$('cabinet-question');
  if(!cabinet.length){anchor.closest('aside').hidden=true;return;}
  const pick=cabinet[cabinetIndex%cabinet.length];
  anchor.href='#question/'+pick.id;anchor.textContent=pick.question;
}
$('cabinet-another').onclick=()=>{cabinetIndex++;displayCuriosity();};
displayCuriosity();

function displayIndex(expandId=0) {
  const tokens=normalize($('search').value.trim()).split(/\s+/).filter(Boolean);
  const list=$('directory');list.replaceChildren();
  for(const t of allTopics) {
    const rows=t.cards.filter(c=>tokens.every(term=>c.terms.includes(term)));if(!rows.length)continue;
    const section=el('details',undefined,'category'),heading=el('summary',t.name),body=el('div');
    heading.append(el('small',rows.length+(rows.length===1?' question':' questions')));
    section.id='group-'+t.id;section.append(heading,body);
    // Keep the index light as later editions add thousands of questions.
    const fill=()=>{
      if(body.childElementCount)return;
      const fragment=document.createDocumentFragment();
      for(const c of rows) {
        const a=link('','#question/'+c.id,'index-link');a.append(el('span',label(c.id)),document.createTextNode(c.question));fragment.append(a);
      }
      body.append(fragment);
    };
    section.ontoggle=()=>{if(section.open)fill();};
    if(tokens.length||t.id===expandId){fill();section.open=true;}
    list.append(section);
  }
  if(!list.children.length)list.append(el('p','No matching questions. Try another word or category.'));
}
$('search').oninput=()=>displayIndex();

// Four-part codes retain the original ten-card dealing rules. The optional suffix
// pins the letter and requested length alongside the edition, so both devices agree.
function decode(code) {
  const match=/^(\d{1,7})-(\d{1,7})-(\d{4})-([1-9]\d{0,6})(?:-(ANY|[A-Z])([1-9]\d{0,6}))?$/.exec(code.trim().toUpperCase());
  if(!match)throw Error('Enter the round code shown on the other device.');
  const [limit,topic,seed,hand]=match.slice(1,5).map(Number);
  if(limit>latest)throw Error('This round uses a newer book. Update this device’s copy online first.');
  if(!cards.has(limit)||(topic&&!byTopic.has(topic)))throw Error('Check the edition and category numbers in that code.');
  if(!match[5])return {limit,topic,seed,hand};
  return {limit,topic,seed,hand,letter:match[5]==='ANY'?'':match[5],size:Number(match[6])};
}
function encode(p) {
  const code=[p.limit,p.topic,String(p.seed).padStart(4,'0'),p.hand].join('-');
  return p.size?code+'-'+(p.letter||'ANY')+p.size:code;
}
function roundName(p) {return p.letter?topicName(p.topic)+' · Answers beginning with '+p.letter:topicName(p.topic);}
function shuffled(input,random) {
  const shuffled=[...input];
  for(let i=shuffled.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];}
  return shuffled;
}
function deckFor(p) {
  let state=(p.seed+1)>>>0;
  const random=()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state/4294967296;};
  if(p.letter) {
    const pool=p.topic?byTopic.get(p.topic).cards:numbers.map(id=>cards.get(id));
    const matches=shuffled(pool.filter(c=>c.id<=p.limit&&c.initial===p.letter),random);
    const seen=new Set();
    return matches.filter(c=>{if(seen.has(c.answerKey))return false;seen.add(c.answerKey);return true;});
  }
  if(p.topic)return shuffled(byTopic.get(p.topic).cards.filter(c=>c.id<=p.limit),random);
  const groups=allTopics.filter(t=>t.id<=p.limit).map(t=>shuffled(t.cards.filter(c=>c.id<=p.limit),random));
  const queues=shuffled(groups,random),deck=[];
  for(let row=0;queues.some(group=>group.length>row);row++)for(const group of queues)if(group[row])deck.push(group[row]);
  return deck;
}
function deal(p) {
  const size=p.size||roundSize,deck=deckFor(p),start=(p.hand-1)*size;
  if(start>=deck.length)throw Error('That round number is outside this deck. Check the code.');
  if(p.size>deck.length)throw Error('This round asks for more questions than are available.');
  const hand=deck.slice(start,start+size);
  // A new-format round always has the requested length, including at the end
  // of a deck. No question repeats inside the same round.
  return p.size&&hand.length<size?hand.concat(deck.slice(0,size-hand.length)):hand;
}
function startRound(topic,letter,size) {
  const key=['deck',latest,topic,letter||'any',size].join('.'),previous=load(key,null);
  let p=previous?{...previous,hand:previous.hand+1}:null;
  if(!p||(p.hand-1)*size>=deckFor(p).length) {
    let seed=crypto.getRandomValues(new Uint32Array(1))[0]%10000;
    for(let i=0;i<10000;i++){
      p={limit:latest,topic,seed,hand:1,letter,size};
      if(!load('round.'+encode(p),null))break;
      seed=(seed+1)%10000;
    }
  }
  save(key,p);location.hash='round/'+encode(p);
}
function updateSetup() {
  const topic=byTopic.get(Number($('topic').value));
  const pool=topic?topic.cards:[...cards.values()];
  const available=new Map(Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ',l=>[l,new Set()]));
  for(const c of pool)if(c.initial)available.get(c.initial).add(c.answerKey);
  const old=$('letter').value;
  $('letter').replaceChildren(new Option('Any letter',''));
  for(const [l,answers] of available){
    const option=new Option(l+' · '+answers.size.toLocaleString('en-US'),l);
    option.disabled=!answers.size;$('letter').append(option);
  }
  if(available.has(old))$('letter').value=old;
  const letter=$('letter').value;
  const count=letter?available.get(letter).size:pool.length;
  const length=$('length');length.max=count;
  length.disabled=!count;$('start-form').querySelector('button').disabled=!count;
  if(count&&length.valueAsNumber>count)length.value=count;
  if(!count)$('available').textContent='No '+letter+' answers in this category. Choose another category or letter.';
  else $('available').textContent=letter?count.toLocaleString('en-US')+' different answers begin with '+letter+'.':count.toLocaleString('en-US')+' questions available.';
}
$('topic').onchange=$('letter').onchange=updateSetup;updateSetup();
$('start-form').onsubmit=e=>{
  e.preventDefault();
  if(e.target.reportValidity())startRound(Number($('topic').value),$('letter').value,$('length').valueAsNumber);
};
$('join-form').onsubmit=e=>{
  e.preventDefault();$('join-error').textContent='';
  try {const p=decode($('code').value.trim().replace(/\s+/g,'').replace(/[–—]/g,'-'));deal(p);location.hash='round/'+encode(p);}
  catch(error){$('join-error').textContent=error.message;}
};
function remember(code) {
  const recent=load('recent',[]);
  if(recent[0]===code)return;
  const updated=[code,...recent.filter(item=>item!==code)].slice(0,5);
  save('recent',updated);
}
function recentRounds() {
  const host=$('recent-list');host.replaceChildren();
  for(const code of load('recent',[])) {
    try{
      const p=decode(code),hand=deal(p),state=load('round.'+code,null);if(!state)continue;
      const n=state.marks.length,score=state.marks.filter(Boolean).length;
      const a=link('','#round/'+code,'recent-link');
      a.append(el('strong',roundName(p)),el('small',code+' · '+(n===hand.length?score+' / '+n:'Resume at '+(n+1)+' of '+hand.length)));
      host.append(a);
    }catch{continue;}
  }
  $('recent').hidden=!host.children.length;
}
let currentLetter='';
let currentCode='',hand=[],round=null,card=null,revealed=false;
function screen(id) {for(const key of ['home','reader','finish'])$(key).hidden=key!==id;}
function updateQuestion() {
  screen('reader');
  const inRound=!!round;
  $('share-round').hidden=$('round-progress').hidden=!inRound;$('single-nav').hidden=inRound;
  $('mode').textContent=inRound?'Question '+(round.marks.length+1)+' of '+hand.length+(currentLetter?' · Letter '+currentLetter:''):'Question index';
  $('score').textContent=inRound?'Score '+round.marks.filter(Boolean).length+' / '+round.marks.length:'';
  if(inRound) {
    $('copy-code').textContent='Round code '+currentCode;
    $('round-progress').max=hand.length;$('round-progress').value=round.marks.length;
  }else{
    const index=numbers.indexOf(card.id);
    for(const [element,n] of [['previous',numbers[index-1]],['next',numbers[index+1]]]) {
      $(element).hidden=!n;if(n)$(element).href='#question/'+n;
    }
  }
  $('question').textContent=card.question;$('card-category').textContent=card.topic.name;$('folio').textContent=label(card.id);
  $('answer-panel').hidden=!revealed;$('reveal').hidden=revealed;$('marking').hidden=!inRound||!revealed;
  $('answer').textContent=revealed?(currentLetter?card.letterAnswer:card.answer):'';$('detail').textContent=revealed?card.detail:'';
  $('sources').replaceChildren(...(revealed?sourcesFor(card):[]));
}
function finishRound() {
  screen('finish');
  $('final-score').textContent=round.marks.filter(Boolean).length+' of '+hand.length+' correct';
  $('final-code').textContent=roundName(decode(currentCode))+' · '+currentCode;
  const recap=$('recap');recap.replaceChildren();
  hand.forEach((c,i)=>{
    const item=el('details'),summary=el('summary',(round.marks[i]?'✓ Got it':'× Missed')+' · '+label(c.id)+' · '+c.question);
    const detail=el('p');detail.append(el('strong',currentLetter?c.letterAnswer:c.answer),document.createTextNode(' '+c.detail+' '));
    const sources=el('span',undefined,'recap-sources');sources.append(...sourcesFor(c));detail.append(sources);
    item.append(summary,detail);recap.append(item);
  });
}
function openRound(raw) {
  const p=decode(raw);currentLetter=p.letter||'';currentCode=encode(p);hand=deal(p);
  round=load('round.'+currentCode,null);
  if(!round){round={marks:[],revealed:false};save('round.'+currentCode,round);}
  remember(currentCode);$('copy-status').textContent='';
  if(round.marks.length===hand.length){finishRound();return;}
  card=hand[round.marks.length];revealed=round.revealed;updateQuestion();
}
$('reveal').onclick=()=>{
  revealed=true;if(round){round.revealed=true;save('round.'+currentCode,round);}
  updateQuestion();$('answer').tabIndex=-1;$('answer').focus({preventScroll:true});
};
function mark(correct) {
  if(!round||!revealed)return;
  const stored=load('round.'+currentCode,round);
  if(stored.marks.length!==round.marks.length){openRound(currentCode);return;}
  round={marks:[...round.marks,correct],revealed:false};save('round.'+currentCode,round);revealed=false;
  if(round.marks.length===hand.length){finishRound();window.scrollTo(0,0);return;}
  card=hand[round.marks.length];updateQuestion();$('question').focus({preventScroll:true});window.scrollTo(0,0);
}
$('hit').onclick=()=>mark(true);$('miss').onclick=()=>mark(false);
$('copy-code').onclick=async()=>{
  try {await navigator.clipboard.writeText(currentCode);$('copy-status').textContent='Copied';}
  catch {$('copy-status').textContent='Read this code to your friend.';}
};
$('another').onclick=()=>{
  const p=decode(currentCode),eligible=deckFor({...p,limit:latest}).length;
  startRound(p.topic,p.letter||'',Math.min(p.size||roundSize,eligible));
};
function route() {
  const [view,arg]=location.hash.slice(1).split('/');round=null;currentCode='';currentLetter='';revealed=false;$('join-error').textContent='';
  try{
    if(view==='round'){openRound(arg||'');window.scrollTo(0,0);return;}
    if(view==='question'&&cards.has(Number(arg))){card=cards.get(Number(arg));updateQuestion();window.scrollTo(0,0);return;}
  }catch(error){$('join-error').textContent=error.message;}
  screen('home');recentRounds();
  const topic=view==='category'?Number(arg):0;
  if(byTopic.has(topic)){$('topic').value=topic;$('search').value='';updateSetup();}
  displayIndex(topic);
  if(view==='browse'||byTopic.has(topic))($(byTopic.has(topic)?'group-'+topic:'browse')).scrollIntoView();
  else window.scrollTo(0,0);
}
window.addEventListener('storage',e=>{
  if(round&&e.key===prefix+'round.'+currentCode)openRound(currentCode);
  else if(!$('home').hidden&&e.key===prefix+'recent')recentRounds();
});
window.addEventListener('hashchange',route);route();
