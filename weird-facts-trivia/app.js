'use strict';

const $=id=>document.getElementById(id);
const cards=new Map(), topics=new Map();
const normalize=text=>text.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
for(const batch of [...window.TRIVIA_CATEGORIES].sort((a,b)=>a.start-b.start)) {
  // Future batches can append cards to a category without changing its original ID.
  const topic=topics.get(batch.name)||{id:batch.start,name:batch.name,cards:[]};
  topics.set(topic.name,topic);
  batch.cards.forEach(([question,answer,detail,source,url],i)=>{
    const id=batch.start+i;
    if(cards.has(id))throw Error('Duplicate trivia number '+id);
    const card={id,question,answer,detail,source,url,topic,terms:normalize(topic.name+' '+question+' '+id)};
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
function sourceLink(card) {
  const a=link(card.source+' ↗',card.url);a.target='_blank';a.rel='noopener';return a;
}
function topicName(id) {return id?byTopic.get(id).name:'Mixed categories';}
$('book-count').textContent=cards.size+' questions · '+topics.size+' categories';
$('topic').append(new Option('Random mix · all categories','0'));
for(const t of [...allTopics].sort((a,b)=>a.name.localeCompare(b.name)))$('topic').append(new Option(t.name,t.id));
const jump=el('book-number-jump');jump.setAttribute('noun','question');jump.setAttribute('max',latest);$('number-tool').append(jump);
document.addEventListener('open-book-number',e=>{location.hash='question/'+e.detail;});

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

// A code records the edition's last question, the topic's permanent ID, a shuffle seed,
// and the hand from that deck. Adding a later batch leaves older codes reproducible.
function decode(code) {
  const match=/^(\d{1,7})-(\d{1,7})-(\d{4})-([1-9]\d{0,6})$/.exec(code.trim());
  if(!match)throw Error('Enter the four groups of numbers shown on the other device.');
  const [limit,topic,seed,hand]=match.slice(1).map(Number);
  if(limit>latest)throw Error('This round uses a newer book. Update this device’s copy online first.');
  if(!cards.has(limit)||(topic&&!byTopic.has(topic)))throw Error('Check the edition and category numbers in that code.');
  return {limit,topic,seed,hand};
}
function encode(p) {return [p.limit,p.topic,String(p.seed).padStart(4,'0'),p.hand].join('-');}
function shuffled(input,random) {
  const shuffled=[...input];
  for(let i=shuffled.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];}
  return shuffled;
}
function deckFor(p) {
  let state=(p.seed+1)>>>0;
  const random=()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state/4294967296;};
  if(p.topic)return shuffled(byTopic.get(p.topic).cards.filter(c=>c.id<=p.limit),random);
  const groups=allTopics.filter(t=>t.id<=p.limit).map(t=>shuffled(t.cards.filter(c=>c.id<=p.limit),random));
  const queues=shuffled(groups,random),deck=[];
  for(let row=0;queues.some(group=>group.length>row);row++)for(const group of queues)if(group[row])deck.push(group[row]);
  return deck;
}
function deal(p) {
  const start=(p.hand-1)*roundSize;
  const hand=deckFor(p).slice(start,start+roundSize);
  if(!hand.length)throw Error('That round number is outside this deck. Check the code.');
  return hand;
}
function startRound(topic) {
  const key='deck.'+latest+'.'+topic,previous=load(key,null);
  let p=previous?{...previous,hand:previous.hand+1}:null;
  if(!p||(p.hand-1)*roundSize>=deckFor(p).length) {
    let seed=crypto.getRandomValues(new Uint32Array(1))[0]%10000;
    // Skip already played codes even after cycling through a full category.
    for(let i=0;i<10000;i++){
      p={limit:latest,topic,seed,hand:1};
      if(!load('round.'+encode(p),null))break;
      seed=(seed+1)%10000;
    }
  }
  save(key,p);location.hash='round/'+encode(p);
}
$('start-form').onsubmit=e=>{e.preventDefault();startRound(Number($('topic').value));};
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
      a.append(el('strong',topicName(p.topic)),el('small',code+' · '+(n===hand.length?score+' / '+n:'Resume at '+(n+1)+' of '+hand.length)));
      host.append(a);
    }catch{continue;}
  }
  $('recent').hidden=!host.children.length;
}
let currentCode='',hand=[],round=null,card=null,revealed=false;
function screen(id) {for(const key of ['home','reader','finish'])$(key).hidden=key!==id;}
function updateQuestion() {
  screen('reader');
  const inRound=!!round;
  $('share-round').hidden=$('round-progress').hidden=!inRound;$('single-nav').hidden=inRound;
  $('mode').textContent=inRound?'Question '+(round.marks.length+1)+' of '+hand.length:'Question index';
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
  $('answer').textContent=revealed?card.answer:'';$('detail').textContent=revealed?card.detail:'';
  $('source').textContent=revealed?card.source+' ↗':'';if(revealed)$('source').href=card.url;else $('source').removeAttribute('href');
}
function finishRound() {
  screen('finish');
  $('final-score').textContent=round.marks.filter(Boolean).length+' of '+hand.length+' correct';
  $('final-code').textContent=topicName(decode(currentCode).topic)+' · '+currentCode;
  const recap=$('recap');recap.replaceChildren();
  hand.forEach((c,i)=>{
    const item=el('details'),summary=el('summary',(round.marks[i]?'✓ Got it':'× Missed')+' · '+label(c.id)+' · '+c.question);
    const detail=el('p');detail.append(el('strong',c.answer),document.createTextNode(' '+c.detail+' '),sourceLink(c));
    item.append(summary,detail);recap.append(item);
  });
}
function openRound(raw) {
  const p=decode(raw);currentCode=encode(p);hand=deal(p);
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
$('another').onclick=()=>startRound(decode(currentCode).topic);
function route() {
  const [view,arg]=location.hash.slice(1).split('/');round=null;currentCode='';revealed=false;$('join-error').textContent='';
  try{
    if(view==='round'){openRound(arg||'');window.scrollTo(0,0);return;}
    if(view==='question'&&cards.has(Number(arg))){card=cards.get(Number(arg));updateQuestion();window.scrollTo(0,0);return;}
  }catch(error){$('join-error').textContent=error.message;}
  screen('home');recentRounds();
  const topic=view==='category'?Number(arg):0;
  if(byTopic.has(topic)){$('topic').value=topic;$('search').value='';}
  displayIndex(topic);
  if(view==='browse'||byTopic.has(topic))($(byTopic.has(topic)?'group-'+topic:'browse')).scrollIntoView();
  else window.scrollTo(0,0);
}
window.addEventListener('storage',e=>{
  if(round&&e.key===prefix+'round.'+currentCode)openRound(currentCode);
  else if(!$('home').hidden&&e.key===prefix+'recent')recentRounds();
});
window.addEventListener('hashchange',route);route();
