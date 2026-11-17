'use strict';

const $=id=>document.getElementById(id);
const cards=new Map(), topics=new Map();
const normalize=text=>text.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
for(const batch of [...window.TRIVIA_CATEGORIES].sort((a,b)=>a.start-b.start)) {
  // Future batches can append cards to a category without changing its original ID.
  const topic=topics.get(batch.name)||{id:batch.start,name:batch.name,cards:[]};
  topics.set(topic.name,topic);
  batch.cards.forEach(([question,answer,detail,source,url,archive,featured,level,choices,hint],i)=>{
    const id=batch.start+i;
    if(cards.has(id))throw Error('Duplicate trivia number '+id);
    const letterAnswer=id<=1000?(window.TRIVIA_LETTER_ANSWERS[id]||''):answer;
    const answerKey=normalize(letterAnswer).replace(/[^a-z0-9]+/g,' ').trim();
    const initial=/^[a-z]/.test(answerKey)?answerKey[0].toUpperCase():'';
    level=level||difficulties[Number(window.TRIVIA_LEVELS[id-1])];
    const card={id,level,choices,hint,question,answer,detail,source,url,archive,featured,topic,letterAnswer,answerKey,initial,terms:normalize(topic.name+' '+question+' '+id)};
    topic.cards.push(card);cards.set(id,card);
  });
}
const allTopics=[...topics.values()], byTopic=new Map(allTopics.map(t=>[t.id,t]));
// The cards now own the data; release the duplicate source arrays.
window.TRIVIA_CATEGORIES=undefined;
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

const cabinet=[...cards.values()].filter(c=>c.featured);
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
    const requestedNumber=/^#?\d+$/.test(tokens[0])&&tokens.length===1?Number(tokens[0].replace('#','')):null;
    const rows=t.cards.filter(c=>requestedNumber!==null?c.id===requestedNumber:tokens.every(term=>c.terms.includes(term)));if(!rows.length)continue;
    const section=el('details',undefined,'category'),heading=el('summary',t.name),body=el('div');
    heading.append(el('small',rows.length+(rows.length===1?' question':' questions')));
    section.id='group-'+t.id;section.append(heading,body);
    // Keep the index light as later editions add thousands of questions.
    let shown=0;
    const more=el('button','Show more questions');more.type='button';
    const fill=()=>{
      const fragment=document.createDocumentFragment(), end=Math.min(shown+100,rows.length);
      for(;shown<end;shown++) {
        const c=rows[shown],a=link('','#question/'+c.id,'index-link');a.append(el('span',label(c.id)),document.createTextNode(c.question));fragment.append(a);
      }
      more.remove();body.append(fragment);
      if(shown<rows.length){more.textContent='Show more · '+shown.toLocaleString('en-US')+' of '+rows.length.toLocaleString('en-US');body.append(more);}
    };
    more.onclick=fill;
    section.ontoggle=()=>{if(section.open&&!shown)fill();};
    if(tokens.length||t.id===expandId){fill();section.open=true;}
    list.append(section);
  }
  if(!list.children.length)list.append(el('p','No matching questions. Try another word or category.'));
}
let searchTimer;
$('search').oninput=()=>{clearTimeout(searchTimer);searchTimer=setTimeout(()=>displayIndex(),160);};

// Four-part codes retain the original ten-card dealing rules. The optional suffix
// pins the letter and requested length alongside the edition, so both devices agree.
function decode(code) {
  const match=/^(\d{1,7})-(\d{1,7})-(\d{4})-([1-9]\d{0,6})(?:-(ANY|[A-Z])([1-9]\d{0,6})(?:-D([AP0-9.]+))?)?$/.exec(code.trim().toUpperCase());
  if(!match)throw Error('Enter the round code shown on the other device.');
  const [limit,topic,seed,hand]=match.slice(1,5).map(Number);
  if(limit>latest)throw Error('This round uses a newer book. Update this device’s copy online first.');
  if(!cards.has(limit)||(topic&&!byTopic.has(topic)))throw Error('Check the edition and category numbers in that code.');
  if(!match[5])return {limit,topic,seed,hand};
  const mix=match[7]?.toLowerCase().split('.').map(v=>v.replace('p','.'));
  if(mix){readMix(mix);if(limit<20000)throw Error('This edition does not contain difficulty rounds.');}
  return {limit,topic,seed,hand,mix,letter:match[5]==='ANY'?'':match[5],size:Number(match[6])};
}
function encode(p) {
  const code=[p.limit,p.topic,String(p.seed).padStart(4,'0'),p.hand].join('-');
  return p.size?code+'-'+(p.letter||'ANY')+p.size+(p.mix?'-D'+p.mix.map(v=>v.replace('.','P')).join('.').toUpperCase():''):code;
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
  let queues=shuffled(groups,random);const deck=[];
  for(let row=0;queues.length;row++){
    queues=queues.filter(group=>group.length>row);
    for(const group of queues)deck.push(group[row]);
  }
  return deck;
}
function mixPool(p){
  return (p.topic?byTopic.get(p.topic).cards:[...cards.values()]).filter(c=>c.id<=p.limit&&(!p.letter||c.initial===p.letter));
}
function deal(p) {
  if(p.mix){
    const pool=mixPool(p);
    const capacity=p.letter?new Set(pool.map(c=>c.answerKey)).size:pool.length;
    if(p.size>capacity)throw Error('This round asks for more questions than are available.');
    if((p.hand-1)*p.size>=capacity)throw Error('That round number is outside this deck.');
    let state=(p.seed+1)>>>0;
    return mixedHand(p,pool,()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state/4294967296;});
  }
  const size=p.size||roundSize,deck=deckFor(p),start=(p.hand-1)*size;
  if(start>=deck.length)throw Error('That round number is outside this deck. Check the code.');
  if(p.size>deck.length)throw Error('This round asks for more questions than are available.');
  const hand=deck.slice(start,start+size);
  // A new-format round always has the requested length, including at the end
  // of a deck. No question repeats inside the same round.
  return p.size&&hand.length<size?hand.concat(deck.slice(0,size-hand.length)):hand;
}
function startRound(topic,letter,size,mix) {
  const key=['deck',latest,topic,letter||'any',size].concat(mix||[]).join('.'),previous=load(key,null);
  let p=previous?{...previous,hand:previous.hand+1}:null;
  if(!p||(p.hand-1)*size>=deckFor(p).length) {
    let seed=crypto.getRandomValues(new Uint32Array(1))[0]%10000;
    for(let i=0;i<10000;i++){
      p={limit:latest,topic,seed,hand:1,letter,size,mix};
      if(!load('round.'+encode(p),null))break;
      seed=(seed+1)%10000;
    }
  }
  save(key,p);location.hash='round/'+encode(p);
}
const letterAvailability=new Map();
function updateSetup() {
  const topic=byTopic.get(Number($('topic').value));
  const pool=topic?topic.cards:[...cards.values()];
  const topicId=topic?.id||0;
  let available=letterAvailability.get(topicId);
  if(!available){
    const answers=new Map(Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ',l=>[l,new Set()]));
    for(const c of pool)if(c.initial)answers.get(c.initial).add(c.answerKey);
    available=new Map([...answers].map(([l,items])=>[l,items.size]));letterAvailability.set(topicId,available);
  }
  const old=$('letter').value;
  $('letter').replaceChildren(new Option('Any letter',''));
  for(const [l,count] of available){
    const option=new Option(l+' · '+count.toLocaleString('en-US'),l);
    option.disabled=!count;$('letter').append(option);
  }
  if(available.has(old))$('letter').value=old;
  const letter=$('letter').value;
  const count=letter?available.get(letter):pool.length;
  const length=$('length');length.max=count;
  length.disabled=!count;$('start-round').disabled=!count;
  if(count&&length.valueAsNumber>count)length.value=count;
  if(!count)$('available').textContent='No '+letter+' answers in this category. Choose another category or letter.';
  else $('available').textContent=letter?count.toLocaleString('en-US')+' different answers begin with '+letter+(topic?' in '+topic.name:' across all categories')+'.':count.toLocaleString('en-US')+' questions available.';
}
const mixInputs=difficulties.map(name=>$('mix-'+name));
function requestedMix(){
  const values=mixInputs.map(input=>input.value===''?'a':String(input.valueAsNumber));
  return values.every(v=>v==='a')?undefined:values;
}
// Cache counts for setup changes; drawing/shuffling a full deck is only needed
// when a player actually starts a game.
const mixCapacities=new Map();
function checkMixCapacity(p,counts){
  const key=[p.limit,p.topic,p.letter].join(':');
  let capacity=mixCapacities.get(key);
  if(!capacity){
    const pool=mixPool(p),levels=[0,0,0,0],masks=new Map();
    for(const c of pool){
      const level=difficulties.indexOf(c.level);levels[level]++;
      if(p.letter)masks.set(c.answerKey,(masks.get(c.answerKey)||0)|(1<<level));
    }
    const groups=Array.from({length:16},()=>({length:0}));
    for(const mask of masks.values())groups[mask].length++;
    capacity={levels,groups};mixCapacities.set(key,capacity);
  }
  if(p.letter)assignAnswerGroups(capacity.groups,counts);
  else for(let i=0;i<4;i++)if(counts[i]>capacity.levels[i])throw Error('This round needs '+counts[i]+' '+difficulties[i]+' questions. Only '+capacity.levels[i]+' are available. Shorten the round or change its mix.');
}
function previewMix(){
  const button=$('start-round'),preview=$('mix-preview'),mix=requestedMix();
  for(const input of mixInputs)input.placeholder='Auto';
  button.disabled=$('length').disabled;
  if(!mix){preview.textContent='Any mix';return;}
  try{
    const percent=readMix(mix),size=$('length').valueAsNumber;
    percent.forEach((value,i)=>{if(mix[i]==='a')mixInputs[i].placeholder=Number(value.toFixed(2))+'%';});
    if(!Number.isInteger(size)||size<1||size>Number($('length').max)){preview.textContent='';return;}
    const counts=portionCounts(percent,size);
    checkMixCapacity({limit:latest,topic:Number($('topic').value),letter:$('letter').value},counts);
    preview.textContent=counts.map((n,i)=>n+' '+difficulties[i]).join(' · ');
  }catch(err){preview.textContent=err.message+' Use Any mix to play without difficulty percentages.';button.disabled=true;}
}
$('topic').onchange=$('letter').onchange=()=>{updateSetup();previewMix();};
for(const input of [...mixInputs,$('length')])input.oninput=previewMix;
$('mix-default').onclick=()=>{mixInputs.forEach((input,i)=>input.value=i===0?'70':'');previewMix();};
$('mix-any').onclick=()=>{mixInputs.forEach(input=>input.value='');previewMix();};
updateSetup();previewMix();
$('start-form').onsubmit=e=>{
  e.preventDefault();
  if(e.target.reportValidity())startRound(Number($('topic').value),$('letter').value,$('length').valueAsNumber,requestedMix());
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
let currentLetter='',browseRound='';
let currentCode='',hand=[],round=null,card=null,revealed=false;
function screen(id) {for(const key of ['home','reader','finish'])$(key).hidden=key!==id;}
function updateQuestion() {
  screen('reader');
  const inRound=!!round;
  $('share-round').hidden=$('round-progress').hidden=!inRound;
  $('mode').textContent=inRound?'Question '+(round.marks.length+1)+' of '+hand.length+(currentLetter?' · Letter '+currentLetter:''):'Question index';
  $('score').textContent=inRound?'Score '+round.marks.filter(Boolean).length+' / '+round.marks.length:'';
  if(inRound) {
    $('copy-code').textContent='Round code '+currentCode;
    $('round-progress').max=hand.length;$('round-progress').value=round.marks.length;
  }
  // Stepping away from a scored question opens its numbered browse page.
  // Saved round progress stays at the last scored card.
  $('browse-round-note').hidden=!inRound;
  const resume=$('resume-browsed-round');resume.hidden=inRound||!browseRound;
  if(browseRound)resume.href='#round/'+browseRound;
  $('single-nav').setPage(card.id,latest,'question',n=>{
    if(inRound)browseRound=currentCode;
    location.hash='question/'+n;
  },()=>location.hash='browse');
  $('question-hint').hidden=!card.hint;$('question-hint').textContent=card.hint||'';
  const visibleChoices=currentLetter?[]:(card.choices||[]);
  $('choices').hidden=!visibleChoices.length;
  $('choices').replaceChildren(...visibleChoices.map(choice=>el('li',choice)));
  $('question').textContent=currentLetter?(window.TRIVIA_LETTER_PROMPTS[card.id]||card.question):card.question;$('card-category').textContent=card.topic.name+' · '+card.level;$('folio').textContent=label(card.id);
  $('answer-panel').hidden=!revealed;$('reveal').hidden=revealed;$('marking').hidden=!inRound||!revealed;
  $('answer').textContent=revealed?(currentLetter?card.letterAnswer:card.answer):'';$('detail').hidden=!card.detail;$('detail').textContent=revealed?card.detail:'';
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
  startRound(p.topic,p.letter||'',Math.min(p.size||roundSize,eligible),p.mix);
};
function route() {
  const [view,arg]=location.hash.slice(1).split('/');round=null;currentCode='';currentLetter='';revealed=false;$('join-error').textContent='';
  try{
    if(view==='round'){openRound(arg||'');window.scrollTo(0,0);return;}
    if(view==='question'&&cards.has(Number(arg))){card=cards.get(Number(arg));updateQuestion();window.scrollTo(0,0);return;}
  }catch(error){$('join-error').textContent=error.message;}
  screen('home');browseRound='';recentRounds();
  const topic=view==='category'?Number(arg):0;
  if(byTopic.has(topic)){$('topic').value=topic;$('search').value='';updateSetup();previewMix();}
  displayIndex(topic);
  if(view==='browse'||byTopic.has(topic))($(byTopic.has(topic)?'group-'+topic:'browse')).scrollIntoView();
  else window.scrollTo(0,0);
}
window.addEventListener('storage',e=>{
  if(round&&e.key===prefix+'round.'+currentCode)openRound(currentCode);
  else if(!$('home').hidden&&e.key===prefix+'recent')recentRounds();
});
window.addEventListener('hashchange',route);route();
