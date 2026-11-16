'use strict';
const $ = selector => document.querySelector(selector);
const dialog = $('#dialog'), form = $('#form');
let db, current, pin, lockedDialog = false, submitAction, viewNumber = 0;
const channel = 'BroadcastChannel' in window ? new BroadcastChannel('books-score-book') : null;
function node(tag, text, className) {
  const item = document.createElement(tag);
  if (text !== undefined) item.textContent = text;
  if (className) item.className = className;
  return item;
}
function button(text, action, className) {
  const item = node('button', text, className);
  item.type = 'button';
  item.addEventListener('click', action);
  return item;
}
function fail(error) {
  const alert = $('#error');
  alert.hidden = false;
  alert.textContent = error.message || 'Unable to save on this device. Check available storage and try again.';
}
function database() {
  return new Promise((resolve,reject) => {
    const req = indexedDB.open('books.score-book', 1);
    req.onupgradeneeded = () => {
      req.result.createObjectStore('games', {keyPath:'id'});
      req.result.createObjectStore('settings');
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
// Resolve only when the transaction commits, including edits made from another open tab.
function transaction(store, mode, operation) {
  return new Promise((resolve,reject) => {
    const tx = db.transaction(store, mode), entries = tx.objectStore(store);
    let result, failure;
    const done = value => { result = value; };
    const abort = error => { failure = error; tx.abort(); };
    tx.oncomplete = () => resolve(result);
    tx.onabort = () => reject(failure || tx.error || Error('The change could not be saved.'));
    operation(entries, done, abort);
  });
}
function read(store, key) {
  return transaction(store, 'readonly', (entries,done) => {
    const request = key === undefined ? entries.getAll() : entries.get(key);
    request.onsuccess = () => done(request.result);
  });
}
async function amend(id, change) {
  const result = await transaction('games','readwrite',(store,done,abort) => {
    const req = store.get(id);
    req.onsuccess = () => {
      try {
        const game = req.result;
        if (!game || game.finished) throw Error('This game has already been finished or deleted. Reopen your scorecards.');
        change(game);
        store.put(game);done(game);
      } catch(error) { abort(error); }
    };
  });
  channel?.postMessage(id);
  return result;
}
function openDialog(title, fields, actionLabel, action, mandatory=false) {
  $('#dialog-title').textContent = title;
  $('#fields').innerHTML = fields;
  $('#message').textContent = '';
  $('#accept').textContent = actionLabel;
  $('#cancel').hidden = mandatory;
  lockedDialog = mandatory;submitAction = action;
  dialog.showModal();
  (form.querySelector('#fields input') || $('#accept')).focus();
}
$('#cancel').onclick = () => dialog.close();
dialog.oncancel = event => { if (lockedDialog || $('#accept').disabled) event.preventDefault(); };
form.onsubmit = async event => {
  event.preventDefault();
  if ($('#accept').disabled) return;
  $('#accept').disabled = $('#cancel').disabled = true;
  try { await submitAction();dialog.close(); }
  catch(error) { $('#message').textContent = error.message; }
  finally { $('#accept').disabled = $('#cancel').disabled = false; }
};
const pinInput = '<input id="pin" type="password" inputmode="numeric" minlength="4" maxlength="8" pattern="[0-9]{4,8}" autocomplete="off" required>';
async function hashPin(value, salt) {
  const bytes = new TextEncoder().encode(salt + ':' + value);
  return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes)), n=>n.toString(16).padStart(2,'0')).join('');
}
function setupPin() {
  openDialog('Choose your Score Book PIN','<p>Use this PIN to delete a scorecard saved on this device.</p><label>Choose a 4–8 digit PIN'+pinInput+'</label><label>Confirm PIN'+pinInput.replace('id="pin"','id="repeat"')+'</label>', 'Set PIN', async () => {
    if ($('#pin').value !== $('#repeat').value) throw Error('Enter the same PIN in both fields.');
    const salt = crypto.randomUUID();
    const record = {salt,hash:await hashPin($('#pin').value,salt)};
    await transaction('settings','readwrite',(store,done) => {
      const req=store.get('pin');
      req.onsuccess=()=>{if(!req.result)store.put(record,'pin');done(req.result || record);};
    }).then(value=>{pin=value;});
    await route();
  }, true);
}
const shortDate = date => new Date(date).toLocaleDateString(undefined,{year:'numeric', month:'short', day:'numeric'});
const player = (game,index) => game.names[index].trim() || 'Player '+(index+1);
const emptyRow = n => Array(n).fill('');
const filled = value => value !== '' && value !== '-';
function totals(game) {
  return game.rounds.reduce((sum,row)=>sum.map((n,i)=>n+(Number(row[i]) || 0)), game.names.map(()=>0));
}
function results(game) {
  const scores = totals(game), candidates = scores.map((score,i)=>({score,i})).filter(({i})=>game.rounds.some(row=>filled(row[i])));
  if (!candidates.length) return '';
  const high = Math.max(...candidates.map(p=>p.score));
  const leaders = candidates.filter(p=>p.score===high).map(p=>player(game,p.i));
  return leaders.join(' & ') + (leaders.length>1?' tied at ':' finished with ') + high + (high===1?' point.':' points.');
}
function newCard() {
  openDialog('New scorecard','<label>Number of players<input id="count" type="number" inputmode="numeric" min="2" max="32" value="2" required></label><label>Play to how many points?<input id="target" type="number" inputmode="numeric" min="1" max="9999999" value="500" required></label>', 'Start scorecard', async () => {
    const n = Number($('#count').value);
    const game = {id:crypto.randomUUID(),created:new Date().toISOString(),finished:null,target:Number($('#target').value),names:emptyRow(n),location:'',rounds:[emptyRow(n)]};
    await transaction('games','readwrite',store=>store.add(game));
    channel?.postMessage(game.id);
    location.hash = 'card='+game.id;
  });
}
$('#new').onclick = newCard;
function listGames(games) {
  const host = $('#games');host.replaceChildren();
  for (const [title,finished] of [['In progress',false],['Finished scorecards',true]]) {
    const selected = games.filter(g=>Boolean(g.finished)===finished)
      .sort((a,b)=>(b.finished||b.created).localeCompare(a.finished||a.created));
    host.append(node('h2',title));
    const list = node('ul',undefined,'games');
    if (!selected.length) list.append(node('li',finished?'Finished games will appear here.':'No games in progress.','hint'));
    for (const game of selected) {
      const li=node('li'),link=node('a',undefined,'game-link');
      link.href='#card='+game.id;
      link.append(node('strong',game.names.map((_,i)=>player(game,i)).join(' · ')),
        node('small',[shortDate(game.finished||game.created),game.location.trim(),'Play to '+game.target].filter(Boolean).join(' · ')));
      if (finished) link.append(node('small',results(game)));
      li.append(link);list.append(li);
    }
    host.append(list);
  }
}
function saveEdit(change) {
  const id = current.id;
  $('#error').hidden=true;
  change(current);
  amend(id,change).catch(async error=>{await route();fail(error);});
}
function finishCard() {
  const id = current.id;
  openDialog('Finish this game?', '<p id="final-summary"></p><p id="missing" class="hint"></p><label>Location (optional)<input id="finish-location" maxlength="120" placeholder="Viva lounge"></label>', 'Finish & save', async () => {
    const place=$('#finish-location').value.trim();
    await amend(id,game=>{
      if (!game.rounds.some(row=>row.some(filled))) throw Error('Enter at least one score before finishing.');
      if (game.rounds.some(row=>row.includes('-'))) throw Error('Finish entering the negative score or clear its minus sign.');
      game.location=place;game.finished=new Date().toISOString();
      game.rounds=game.rounds.filter(row=>row.some(filled));
    });
    await route();
  });
  $('#final-summary').textContent = shortDate(Date.now())+' · '+results(current);
  if (current.rounds.some(row=>row.some(filled) && row.some(v=>!filled(v)))) $('#missing').textContent='Blank scores will be saved as blank.';
  $('#finish-location').value=current.location;
}
function deleteCard() {
  const id=current.id;
  openDialog('Delete this scorecard?', '<p id="delete-description"></p><label>Enter your PIN'+pinInput+'</label>', 'Delete scorecard', async ()=>{
    if (await hashPin($('#pin').value,pin.salt)!==pin.hash) throw Error('That PIN did not match. Try again.');
    await transaction('games','readwrite',store=>store.delete(id));
    channel?.postMessage(id);location.hash='';
  });
  $('#delete-description').textContent = current.names.map((_,i)=>player(current,i)).join(' · ')+' — '+shortDate(current.finished||current.created);
}
async function nextRound() {
  try {
    const game=await amend(current.id,g=>{
      if (!g.rounds[g.rounds.length-1].some(filled)) throw Error('Enter a score in the current round first.');
      g.rounds.push(emptyRow(g.names.length));
    });
    if(current?.id===game.id){await route();$('#card tbody tr:last-child input')?.focus();}
  } catch(error){fail(error);}
}
function updateTotals() {
  const sum=current.names.map(()=>0);
  for (const [round,row] of current.rounds.entries()) {
    row.forEach((raw,i)=>{
      if (!filled(raw)) return;
      sum[i]+=Number(raw);
    });
    row.forEach((raw,i)=>{
      const total=document.getElementById('total-'+round+'-'+i);
      total.textContent=filled(raw)?String(sum[i]):'';
      total.setAttribute('aria-label','Running total for '+player(current,i)+': '+sum[i]);
    });
  }
  const target=sum.flatMap((v,i)=>v>=current.target?[player(current,i)]:[]);
  $('#result').textContent = current.finished?results(current):target.length?'Reached '+current.target+' points: '+target.join(', ')+'.':'';
}
function scoreCell(rowIndex,i) {
  const td=node('td'),box=node('div',undefined,'cell'),raw=current.rounds[rowIndex][i];
  if(current.finished)box.append(node('span',filled(raw)?raw:'—','final-score'));
  else{
    const field=node('input',undefined,'number');
    field.type='text';field.inputMode='numeric';field.autocomplete='off';field.maxLength=8;field.value=raw;
    field.dataset.player=i;field.dataset.round=rowIndex;
    const sign=button('±',()=>{
      field.value=field.value.startsWith('-')?field.value.slice(1):'-'+field.value;
      applyScore();field.focus();
    },'sign');
    sign.setAttribute('aria-pressed',String(raw.startsWith('-')));
    function applyScore(){
      const value=field.value.replace('−','-');
      if (!/^-?\d{0,7}$/.test(value)){field.value=current.rounds[rowIndex][i];return;}
      field.value=value;
      sign.setAttribute('aria-pressed',String(value.startsWith('-')));
      saveEdit(g=>{g.rounds[rowIndex][i]=value;});updateTotals();
    }
    field.oninput=applyScore;
    field.onfocus=()=>{if(field.value!=='-')field.select();};
    field.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();const fields=[...$('#card').querySelectorAll('.number')];(fields[fields.indexOf(field)+1] || $('#next-round')).focus();}};
    box.append(sign,field);
  }
  const total=node('em',undefined,'running');total.id='total-'+rowIndex+'-'+i;
  box.append(total);td.append(box);return td;
}
function labelScores() {
  for(const field of $('#card').querySelectorAll('.number')){
    const label=player(current,Number(field.dataset.player))+', round '+(Number(field.dataset.round)+1);
    field.setAttribute('aria-label','Score for '+label);
    field.previousElementSibling.setAttribute('aria-label','Toggle negative score for '+label);
  }
}
function drawCard() {
  const host=$('#card');host.replaceChildren();
  const top=node('div',undefined,'card-top'),back=node('a','‹ All scorecards','back');
  back.href='#';top.append(back,node('span',shortDate(current.finished||current.created),'stamp'));host.append(top);
  host.append(node('h1',current.finished?'Finished scorecard':'Scorecard'));
  const meta=node('div',undefined,'metadata');
  meta.append(node('strong','Play to '+current.target+' points'));
  if(current.finished){if(current.location)meta.append(node('span',current.location));}
  else{
    const label=node('label','Location (optional)'),place=node('input');
    place.maxLength=120;place.value=current.location;place.placeholder='Viva lounge';
    place.oninput=()=>{const value=place.value;saveEdit(g=>{g.location=value;});};
    label.append(place);meta.append(label);
  }
  host.append(meta,node('p','Round scores are followed by running totals in blue.','hint'));
  const scroll=node('div',undefined,'scroll'),table=node('table',undefined,'sheet');
  table.setAttribute('aria-label','Round scores and running totals');scroll.tabIndex=0;scroll.setAttribute('aria-label','Score sheet, scroll sideways for more players');
  const head=table.createTHead().insertRow(),round=node('th','Round','round');round.scope='col';head.append(round);
  current.names.forEach((value,i)=>{
    const th=node('th');th.scope='col';
    if(current.finished)th.textContent=player(current,i);
    else{
      const name=node('input',undefined,'name');name.maxLength=40;name.placeholder='Player '+(i+1);name.value=value;name.setAttribute('aria-label','Player '+(i+1)+' name');
      name.oninput=()=>{const text=name.value;saveEdit(g=>{g.names[i]=text;});labelScores();updateTotals();};
      th.append(name);
    }
    head.append(th);
  });
  const body=table.createTBody();
  current.rounds.forEach((row,r)=>{
    const tr=body.insertRow(),th=node('th',String(r+1),'round');th.scope='row';tr.append(th);
    row.forEach((v,i)=>tr.append(scoreCell(r,i)));
  });
  scroll.append(table);host.append(scroll,node('p','','result'));host.querySelector('.result').id='result';
  const footer=node('div',undefined,'foot');
  if(!current.finished){
    const next=button('Add round',nextRound,'primary');next.id='next-round';footer.append(next,button('Finish game',finishCard));
  }
  host.append(footer,button('Delete scorecard',deleteCard,'danger'));labelScores();updateTotals();
}
async function route() {
  if(!db || !pin)return;
  const version=++viewNumber;
  const id=new URLSearchParams(location.hash.slice(1)).get('card');
  const game=id?await read('games',id):null;
  if(version!==viewNumber)return;
  $('#error').hidden=true;
  current=game;
  $('#library').hidden=!!game;$('#card').hidden=!game;
  if(game){drawCard();return;}
  const list=await read('games');
  if(version===viewNumber)listGames(list);
}
window.addEventListener('hashchange',()=>route().catch(fail));
if(channel)channel.onmessage=event=>{
  if(!dialog.open && (!current || current.id===event.data))route().catch(fail);
};
(async()=>{
  try{
    db=await database();pin=await read('settings','pin');
    if(!pin)setupPin();else await route();
  }catch(error){fail(error);}
})();
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js').then(()=>navigator.serviceWorker.ready).then(reg=>{
    if(reg.scope===new URL('./',location.href).href)$('#offline').textContent='Ready offline';
  }).catch(()=>{ $('#offline').textContent='Open online to download'; });
}
