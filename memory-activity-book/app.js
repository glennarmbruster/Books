'use strict';
const $ = id => document.getElementById(id);
const prefix = 'books.memory.v1.';
const total = outings.length * activityTypes.length;
const stage = $('stage');
let current, state, pinAction;

function read(id) {
  try { return JSON.parse(localStorage.getItem(prefix + id)); } catch { return null; }
}
function fresh() { return {phase:'study', picked:[], matched:[], turned:[], question:0}; }
function persist() {
  try { localStorage.setItem(prefix + current.number, JSON.stringify(state)); }
  catch { $('save-error').textContent = 'This device could not save your place.'; }
}
function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
}
function button(text, fn, className) {
  const node = element('button', text, className);
  node.type = 'button';
  node.onclick = fn;
  return node;
}
function contents() {
  const entries = document.createDocumentFragment();
  let count = 0;
  for (let i = 1; i <= total; i++) {
    const a = activity(i), saved = read(i);
    const done = saved?.phase === 'done';
    if (done) count++;
    if ($('filter').value !== '' && +$('filter').value !== a.kind) continue;
    const link = element('a', undefined, 'entry' + (done?' done':''));
    link.href = '#activity-' + i;
    link.append(element('small', '#' + i + ' · ' + activityTypes[a.kind]),element('strong', a.title));
    if (saved) link.append(element('span', done?'✓ Complete':'In progress'));
    entries.append(link);
  }
  $('entries').replaceChildren(entries);
  $('progress').textContent = count + ' of ' + total + ' complete';
}

function draw(message = '', focusId) {
  const hadFocus = stage.contains(document.activeElement);
  stage.replaceChildren();
  $('feedback').textContent = message;
  if (state.phase === 'done') {
    stage.append(element('h2','✓ Activity complete'), element('p','Your place is marked in the activity index.'));
  } else {
    [pairs, sequence, missing, mapMemory, storyRecall][current.kind]();
  }
  if (hadFocus) {
    const target = (focusId && document.getElementById(focusId)) || stage.querySelector('button:not(:disabled)') || $('next');
    target.focus({preventScroll:true});
  }
}
function update(message, focusId) { persist(); draw(message, focusId); }
function done() { state.phase = 'done'; update(); }
function block(title, instruction) {
  stage.append(element('h2',title),element('p',instruction));
}
function group(className) {
  const container = element('div',undefined,className);
  stage.append(container);
  return container;
}
function decorate(node, item) {
  const split = item.indexOf(' ');
  const picture = element('span', item.slice(0,split));
  picture.setAttribute('aria-hidden','true');
  node.append(picture, document.createTextNode(item.slice(split+1)));
  return node;
}
function displayItems(items, ordered = false) {
  const box = element(ordered?'ol':'div', undefined, ordered?'sequence':'collection');
  items.forEach(item => box.append(decorate(element(ordered?'li':'div', undefined,'token'),item)));
  stage.append(box);
}
function hideStudy(label) {
  stage.append(button(label,() => {state.phase = 'recall'; update();},'action'));
}
function pairs() {
  const {deck} = current;
  const mismatch = state.turned.length === 2;
  block('Find the matching pairs', 'Turn over two cards at a time. ' + state.matched.length / 2 + ' of ' + deck.length / 2 + ' pairs found.');
  const board = group('board');
  deck.forEach((item, i) => {
    const matched = state.matched.includes(i), up = matched || state.turned.includes(i);
    const tile = button(up?'':'?', () => {
      state.turned.push(i);
      const [first,second] = state.turned;
      if (second !== undefined && deck[first] === deck[second]) {
        state.matched.push(first,second);
        state.turned = [];
        if (state.matched.length === deck.length) return done();
        update('You found a pair.');
      } else update(second === undefined?'Turn over one more card.':'Two different cards. Take a look, then turn them back.');
    }, 'tile ' + (matched?'matched':up?'':'backside'));
    if (up) decorate(tile,item);
    tile.disabled = up || mismatch;
    tile.setAttribute('aria-label','Card ' + (i+1) + (up?', '+item.slice(item.indexOf(' ')+1):', face down') + (matched?', matched':''));
    board.append(tile);
  });
  if (mismatch) stage.append(button('Turn both back',()=>{state.turned=[];update();},'action'));
}
function sequence() {
  if (state.phase === 'study') {
    block('Remember the order','Study the objects from first to last. Take as long as you like.');
    displayItems(current.items,true);
    hideStudy('Hide the sequence');
    return;
  }
  block('Rebuild the sequence','Tap the objects in the order you saw them.');
  if (state.picked.length) displayItems(state.picked,true);
  const choices = group('choices');
  current.choices.forEach((item, i) => {
    const pick = button('',() => {
      state.picked.push(item);
      update('', 'object-'+i);
    },'token');
    pick.id = 'object-'+i;
    decorate(pick,item);
    pick.disabled = state.picked.includes(item) || state.picked.length === current.items.length;
    choices.append(pick);
  });
  addSelectionActions(current.items.length, () => state.picked.every((v,i)=>v===current.items[i]));
}
function addSelectionActions(count, correct) {
  const controls = group('reader-actions');
  const check = button('Check answer',()=>{
    if (correct()) done();
    else {
      state.phase = 'study';
      state.picked = [];
      update('Give it another try. Study the original again.');
    }
  },'action');
  check.disabled = state.picked.length !== count;
  const undo = button('Undo last choice',()=>{state.picked.pop();update();});
  undo.disabled = !state.picked.length;
  controls.append(check,undo);
}
function missing() {
  if (state.phase === 'study') {
    block('Study the collection','One object will disappear. Remember what is here.');
    displayItems(current.items);
    hideStudy('Remove an object');
    return;
  }
  block('What disappeared?','Compare the objects that remain with the collection you remember.');
  displayItems(current.items.filter(item=>item!==current.missing));
  stage.append(element('h3','Choose the missing object'));
  const box = group('choices');
  const decoys = current.choices.filter(item=>!current.items.includes(item));
  shuffle([...decoys,current.missing],current.seed+57).forEach(item=>{
    box.append(decorate(button('',()=>{
      if (item === current.missing) return done();
      state.phase = 'study'; update('Try another look at the full collection.');
    },'token'),item));
  });
}
function mapMemory() {
  const study = state.phase === 'study';
  block(study?'Study the pattern':'Rebuild the pattern',study?'Remember the locations of the stars.':'Tap the '+current.cells.length+' squares that held stars. Tap a square again to unmark it.');
  const board = group('board');
  for (let i=0;i<16;i++) {
    const marked = (study?current.cells:state.picked).includes(i);
    const tile = button(marked?'★':'·',()=>{
      if (marked) state.picked = state.picked.filter(v=>v!==i);
      else if (state.picked.length < current.cells.length) state.picked.push(i);
      else { $('feedback').textContent = 'Unmark a square to choose a different one.'; return; }
      update('', 'cell-'+i);
    },'square'+(marked?' marked':''));
    tile.id='cell-'+i;
    tile.setAttribute('aria-label','Row '+(Math.floor(i/4)+1)+', column '+(i%4+1));
    tile.setAttribute('aria-pressed',String(marked));
    tile.disabled=study;
    board.append(tile);
  }
  if (study) hideStudy('Hide the pattern');
  else addSelectionActions(current.cells.length,()=>state.picked.every(i=>current.cells.includes(i)));
}
function storyRecall() {
  const story = current.story;
  if (state.phase === 'study') {
    block('Read the scene','Three questions will ask about details in this scene.');
    stage.append(element('p',story.text,'story'));
    hideStudy('Close the story');
    return;
  }
  const index = state.question, q = story.questions[index];
  block('Question '+(index+1)+' of '+story.questions.length,q.prompt);
  const box = group('choices');
  shuffle(q.choices,current.seed+index).forEach(choice=>box.append(button(choice,()=>{
    if (choice !== q.choices[0]) {
      state.phase = 'study'; state.question = 0; update('Read the scene again, then try the questions.'); return;
    }
    if (++state.question === story.questions.length) return done();
    update('Correct.');
  })));
}

function route() {
  const id = Number(/^#activity-(\d+)$/.exec(location.hash)?.[1]);
  const reading = id>=1 && id<=total;
  $('directory').hidden=reading;
  $('reader').hidden=!reading;
  $('feedback').textContent='';
  if (reading) {
    current=activity(id);
    state=read(id)||fresh();
    $('kind').textContent='Activity #'+id+' · '+activityTypes[current.kind];
    $('title').textContent=current.title;
    $('next').textContent=id===total?'Activity index →':'Next activity →';
    $('next').href=id===total?'#contents':'#activity-'+(id+1);
    draw();
    $('title').focus({preventScroll:true});
  } else { current=null; contents(); }
  window.scrollTo(0,0);
}
activityTypes.forEach((type,i)=>$('filter').add(new Option(type,i)));
$('filter').onchange=contents;
addEventListener('open-book-number',event=>{location.hash='activity-'+event.detail;});
addEventListener('hashchange',route);
route();

const lock = $('lock');
function askPin(title, info, action) {
  const first = !read('pin');
  pinAction = action;
  $('lock-title').textContent=first?'Choose your memory book PIN':title;
  $('pin-info').textContent=first?'Choose 4–8 digits to protect saved activities on this device.':info;
  $('pin-form').reset();
  $('pin-error').textContent='';
  $('confirm-label').hidden=!first;
  $('confirm').required=first;
  $('accept').textContent=first?'Set PIN':title;
  $('cancel-pin').hidden=first;
  lock.showModal();
  $('pin').focus();
}
lock.oncancel=e=>{if (!read('pin')) e.preventDefault();};
$('cancel-pin').onclick=()=>lock.close();
async function hash(pin,salt) {
  const digest=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(salt+':'+pin));
  return Array.from(new Uint8Array(digest),b=>b.toString(16).padStart(2,'0')).join('');
}
$('pin-form').onsubmit=async e=>{
  e.preventDefault();
  $('accept').disabled=true;
  try {
    const saved=read('pin'), value=$('pin').value;
    if (!saved) {
      if (value!==$('confirm').value) throw Error('Enter the same PIN twice.');
      const salt=crypto.randomUUID();
      localStorage.setItem(prefix+'pin',JSON.stringify({salt,digest:await hash(value,salt)}));
    } else if (await hash(value,saved.salt)!==saved.digest) throw Error('That PIN did not match.');
    if (pinAction) pinAction();
    lock.close();
  } catch (error) { $('pin-error').textContent=error.message; }
  finally { $('accept').disabled=false; }
};
$('restart').onclick=()=>askPin('Restart activity','Enter your PIN to clear this activity.',()=>{
  localStorage.removeItem(prefix+current.number);state=fresh();draw('Ready to play again.');
});
$('clear-all').onclick=()=>askPin('Clear book progress','Enter your PIN to clear all '+total+' activities on this device.',()=>{
  for (let i=1;i<=total;i++) localStorage.removeItem(prefix+i);
  contents();
});
if (!read('pin')) askPin('','','');
