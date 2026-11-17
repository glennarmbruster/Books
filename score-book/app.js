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
  const restartNumber = current?.restartNumber ?? 0;
  const result = await transaction('games','readwrite',(store,done,abort) => {
    const req = store.get(id);
    req.onsuccess = () => {
      try {
        const game = req.result;
        if (!game || game.finished) throw Error('This game has already been finished or deleted. Reopen your scorecards.');
        if ((game.restartNumber ?? 0) !== restartNumber) throw Error('This game was restarted in another window. Reopen the scorecard to continue.');
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
  openDialog('Choose your Score Book PIN','<p>Use this PIN to restart a game or delete a scorecard on this device.</p><label>Choose a 4–8 digit PIN'+pinInput+'</label><label>Confirm PIN'+pinInput.replace('id="pin"','id="repeat"')+'</label>', 'Set PIN', async () => {
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
const retiredRound = (game, index) => game.retiredRounds?.[index];
const isActive = (game, index) => retiredRound(game, index) == null;
const joinedRound = (game, index) => game.joinedRounds?.[index] ?? 0;
function totals(game) {
  return game.rounds.reduce((sum,row)=>sum.map((n,i)=>n+(Number(row[i]) || 0)), game.names.map(()=>0));
}
function results(game) {
  const scores = totals(game), candidates = scores.map((score,i)=>({score,i})).filter(({i})=>isActive(game,i) && game.rounds.some(row=>filled(row[i])));
  if (!candidates.length) return '';
  const high = (game.order === 'low' ? Math.min : Math.max)(...candidates.map(p=>p.score));
  const leaders = candidates.filter(p=>p.score===high).map(p=>player(game,p.i));
  return leaders.join(' & ') + (leaders.length>1?' tied at ':' finished with ') + high + (high===1?' point.':' points.');
}
function scoreGoal(game) {
  if (game.order === 'low') return game.target ? 'Lowest score wins · stop at '+game.target : 'Lowest score wins';
  return game.target ? 'Play to '+game.target+' points' : 'Highest score wins';
}
const targetField = '<label>Point target (optional)<input id="target" type="number" inputmode="numeric" min="1" max="9999999" placeholder="Finish manually"></label>';
function changeTarget() {
  const id = current.id;
  openDialog('Change target', targetField + '<p class="hint">Leave blank to finish the game manually.</p>', 'Save target', async () => {
    const target = Number($('#target').value);
    await amend(id, game => { game.target = target; });
    await route();
  });
  $('#target').value = current.target || '';
  $('#target').select();
}
function newCard(preset) {
  const fields = '<label>Number of '+(preset?.teams ? 'teams' : 'players')+'<input id="count" type="number" inputmode="numeric" min="2" max="32" value="2" required></label>' +
    targetField;
  openDialog(preset?.name || 'New scorecard', fields, 'Start scorecard', async () => {
    const n = Number($('#count').value);
    const names = preset?.teams ? Array.from({length:n},(_,i)=>'Team '+(i+1)) : emptyRow(n);
    const game = {id:crypto.randomUUID(),created:new Date().toISOString(),finished:null,target:Number($('#target').value),
      order:preset?.order || 'high',gameName:preset?.name || '',names,location:'',rounds:[emptyRow(n)]};
    await transaction('games','readwrite',store=>store.add(game));
    channel?.postMessage(game.id);
    location.hash = 'card='+game.id;
  });
  $('#count').value = preset?.count || 2;
  $('#target').value = preset ? preset.target || '' : 500;
}
$('#new').onclick = () => newCard();
let cardOrder=[];
function scorecardOrder(a,b){
  return Number(!!a.finished)-Number(!!b.finished) ||
    (b.finished||b.created).localeCompare(a.finished||a.created) || a.id.localeCompare(b.id);
}
function listGames(games) {
  const host = $('#games');host.replaceChildren();
  for (const [title,finished] of [['In progress',false],['Finished scorecards',true]]) {
    const selected = games.filter(g=>Boolean(g.finished)===finished)
      .sort(scorecardOrder);
    host.append(node('h2',title));
    const list = node('ul',undefined,'games');
    if (!selected.length) list.append(node('li',finished?'Finished games will appear here.':'No games in progress.','hint'));
    for (const game of selected) {
      const li=node('li'),link=node('a',undefined,'game-link');
      link.href='#card='+game.id;
      const roster = game.names.map((_,i)=>player(game,i)).join(' · ');
      if (game.gameName?.trim()) link.append(node('strong', game.gameName.trim()), node('small', roster));
      else link.append(node('strong', roster));
      link.append(
        node('small',[shortDate(game.finished||game.created),game.location.trim(),scoreGoal(game)].filter(Boolean).join(' · ')));
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
      if (!game.rounds.some(row=>row.some(filled)) && game.names.some((_, i) => isActive(game, i))) throw Error('Enter at least one score before finishing.');
      if (game.rounds.some(row=>row.includes('-'))) throw Error('Finish entering the negative score or clear its minus sign.');
      game.location=place;game.finished=new Date().toISOString();
      if (!game.joinedRounds && !game.retiredRounds) game.rounds=game.rounds.filter(row=>row.some(filled));
    });
    await route();
  });
  $('#final-summary').textContent = shortDate(Date.now())+' · '+results(current);
  if (current.rounds.some(row=>row.some(filled) && row.some(v=>!filled(v)))) $('#missing').textContent='Blank scores will be saved as blank.';
  $('#finish-location').value=current.location;
}
async function verifyPin() {
  const input = $('#pin');
  if (await hashPin(input.value,pin.salt) !== pin.hash) {
    input.focus();input.select();
    throw Error('That PIN did not match. Try again.');
  }
}
function restartCard() {
  const id = current.id;
  openDialog('Restart this game?', '<p>Clear every round and start at Round 1 with the same players and target. Retired players stay retired.</p><label>Enter your PIN'+pinInput+'</label>', 'Restart game', async () => {
    await verifyPin();
    await amend(id, game => {
      game.rounds = [emptyRow(game.names.length)];
      delete game.joinedRounds;
      for (const index of Object.keys(game.retiredRounds || {})) {
        if (!isActive(game,index)) game.retiredRounds[index] = -1;
      }
      game.restartNumber = (game.restartNumber ?? 0) + 1;
    });
    await route();
  });
}
function deleteCard() {
  const id=current.id;
  openDialog('Delete this scorecard?', '<p id="delete-description"></p><label>Enter your PIN'+pinInput+'</label>', 'Delete scorecard', async ()=>{
    await verifyPin();
    await transaction('games','readwrite',store=>store.delete(id));
    channel?.postMessage(id);location.hash='';
  });
  $('#delete-description').textContent = current.names.map((_,i)=>player(current,i)).join(' · ')+' — '+shortDate(current.finished||current.created);
}
function addPlayer() {
  const id = current.id;
  openDialog('Add a player', '<label>Player name<input id="new-name" maxlength="40" required></label>', 'Add to game', async () => {
    const name = $('#new-name').value.trim();
    if (!name) throw Error('Enter a player name.');
    await amend(id, game => {
      if (game.names.filter((_, i) => isActive(game, i)).length >= 32) throw Error('Up to 32 players can play at a time.');
      const index = game.names.length;
      game.names.push(name);
      (game.joinedRounds ??= {})[index] = game.rounds.length - 1;
      for (const row of game.rounds) row.push('');
    });
    await route();
  });
}
function retirePlayer(index) {
  const id = current.id, name = player(current, index);
  openDialog('Retire ' + name + '?', '<p>Their scores and final total will stay on this card. Everyone else can keep playing.</p>', 'Retire player', async () => {
    await amend(id, game => {
      if (!isActive(game, index)) return;
      if (game.rounds.some(row => row[index] === '-')) throw Error('Finish entering the negative score or clear its minus sign first.');
      (game.retiredRounds ??= {})[index] = game.rounds.length - 1;
    });
    await route();
  });
}
function showRetired(host, game) {
  const retired = game.names.map((_, i) => i).filter(i => !isActive(game, i));
  if (!retired.length) return;
  const section = node('section', undefined, 'retired');
  section.append(node('h2', 'Retired players'));
  const scores = totals(game);
  for (const i of retired) {
    const details = node('details'), summary = node('summary');
    summary.append(node('strong', player(game, i)), node('span', scores[i] + ' pts', 'retired-total'),
      node('small', retiredRound(game,i) < 0 ? 'Retired before restart' : 'Finished in round ' + (retiredRound(game, i) + 1)));
    details.append(summary);
    const history = node('ul');
    for (let r = joinedRound(game, i); r <= retiredRound(game, i); r++) {
      const value = game.rounds[r][i];
      history.append(node('li', 'Round ' + (r + 1) + ' · ' + (filled(value) ? value : 'No score')));
    }
    details.append(history);
    section.append(details);
  }
  host.append(section);
}
async function nextRound() {
  try {
    const game=await amend(current.id,g=>{
      if (!g.names.some((_, i) => isActive(g, i))) throw Error('Add a player to continue the game.');
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
      if (!total) return;
      total.textContent=filled(raw)?String(sum[i]):'';
      total.setAttribute('aria-label','Running total for '+player(current,i)+': '+sum[i]);
    });
  }
  const target=sum.flatMap((v,i)=>current.target && isActive(current,i) && v>=current.target?[player(current,i)]:[]);
  $('#result').textContent = current.finished?results(current):target.length?'Reached '+current.target+' points: '+target.join(', ')+'.':'';
}
function scoreCell(rowIndex,i) {
  const td=node('td'),box=node('div',undefined,'cell'),raw=current.rounds[rowIndex][i];
  if (rowIndex < joinedRound(current, i)) {
    td.textContent = '—';
    td.setAttribute('aria-label', player(current, i) + ' had not joined');
    return td;
  }
  if(current.finished)box.append(node('span',filled(raw)?raw:'—','final-score'));
  else{
    const field=node('input',undefined,'number');
    field.type='text';field.inputMode='numeric';field.autocomplete='off';field.maxLength=8;field.value=raw;
    function fitScore(value){field.style.minWidth=value.length>3?'calc('+value.length+'ch + 1rem)':'';}
    fitScore(raw);
    field.dataset.player=i;field.dataset.round=rowIndex;
    const sign=button('±',()=>{
      field.value=field.value.startsWith('-')?field.value.slice(1):'-'+field.value;
      applyScore();field.focus();
    },'sign');
    sign.setAttribute('aria-pressed',String(raw.startsWith('-')));
    function applyScore(){
      const value=field.value.replace('−','-');
      if (!/^-?\d{0,7}$/.test(value)){field.value=current.rounds[rowIndex][i];return;}
      field.value=value;fitScore(value);
      sign.setAttribute('aria-pressed',String(value.startsWith('-')));
      saveEdit(g=>{
        if (!isActive(g, i)) throw Error('This player has retired.');
        g.rounds[rowIndex][i]=value;
      });
      updateTotals();
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
  if (current.finished) {
    if (current.gameName?.trim()) meta.append(node('strong', current.gameName.trim()));
  } else {
    const gameLabel = node('label', 'Game name (optional)');
    const gameInput = node('input');
    gameInput.maxLength = 80;
    gameInput.value = current.gameName || '';
    gameInput.placeholder = 'e.g. Farkle';
    gameInput.oninput = () => {
      const name = gameInput.value;
      saveEdit(game => { game.gameName = name; });
    };
    gameLabel.append(gameInput);
    meta.append(gameLabel);
  }
  const goal = node('div',undefined,'goal');
  goal.append(node('strong',scoreGoal(current)));
  if (!current.finished) goal.append(button('Change target',changeTarget));
  meta.append(goal);
  if(current.finished){if(current.location)meta.append(node('span',current.location));}
  else{
    const label=node('label','Location (optional)'),place=node('input');
    place.maxLength=120;place.value=current.location;place.placeholder='Viva lounge';
    place.oninput=()=>{const value=place.value;saveEdit(g=>{g.location=value;});};
    label.append(place);meta.append(label);
  }
  if (!current.finished) meta.append(button('Add player', addPlayer));
  host.append(meta);
  const active = current.names.map((_, i) => i).filter(i => isActive(current, i));
  if (active.length) host.append(node('p','Running totals appear in dark green.','hint'));
  const scroll=node('div',undefined,'scroll'),table=node('table',undefined,'sheet');
  table.setAttribute('aria-label','Round scores and running totals');scroll.tabIndex=0;scroll.setAttribute('aria-label','Score sheet, scroll sideways for more players');
  const head=table.createTHead().insertRow(),round=node('th','Round','round');round.scope='col';head.append(round);
  active.forEach(i=>{
    const value = current.names[i];
    const th=node('th');th.scope='col';
    if(current.finished)th.textContent=player(current,i);
    else{
      const name=node('input',undefined,'name');name.maxLength=40;name.placeholder='Player '+(i+1);name.value=value;name.setAttribute('aria-label','Player '+(i+1)+' name');
      const retire = button('× Retire', () => retirePlayer(i), 'retire-player');
      const labelRetire = () => retire.setAttribute('aria-label', 'Retire ' + player(current, i));
      name.oninput=()=>{
        const text=name.value;
        saveEdit(g=>{
          if (!isActive(g, i)) throw Error('This player has retired.');
          g.names[i]=text;
        });
        labelRetire();labelScores();updateTotals();
      };
      labelRetire();
      th.append(name, retire);
    }
    head.append(th);
  });
  const body=table.createTBody();
  current.rounds.forEach((row,r)=>{
    const tr=body.insertRow(),th=node('th',String(r+1),'round');th.scope='row';tr.append(th);
    active.forEach(i=>tr.append(scoreCell(r,i)));
  });
  scroll.append(table);
  if (active.length) host.append(scroll);
  else if (!current.finished) host.append(node('p','All players have retired. Add a player or finish the game.','hint'));
  showRetired(host, current);
  host.append(node('p','','result'));host.querySelector('.result').id='result';
  const footer=node('div',undefined,'foot');
  if(!current.finished){
    if (active.length) {
      const next = button('Add round', nextRound, 'primary');
      next.id = 'next-round';
      footer.append(next);
    }
    footer.append(button('Finish game', finishCard),button('Restart game', restartCard));
  }
  host.append(footer,button('Delete scorecard',deleteCard,'danger'));labelScores();updateTotals();
  const pager=document.createElement('book-pager');host.append(pager);
  pager.setPage(cardOrder.indexOf(current.id)+1,cardOrder.length,'scorecard',n=>location.hash='card='+cardOrder[n-1],()=>location.hash='');
}
async function route() {
  if(!db || !pin)return;
  const version=++viewNumber;
  const id=new URLSearchParams(location.hash.slice(1)).get('card');
  const list=await read('games');
  const game=id?list.find(item=>item.id===id):null;
  if(version!==viewNumber)return;
  $('#error').hidden=true;
  current=game;
  $('#library').hidden=!!game;$('#card').hidden=!game;
  if(game){
    cardOrder=list.sort(scorecardOrder).map(g=>g.id);
    drawCard();return;
  }
  listGames(list);
  const intent = new URLSearchParams(location.hash.slice(1));
  const name = intent.get('newGame')?.trim().slice(0,80);
  if (!name) return;
  const preset = {name, teams:intent.get('teams')==='yes', order:intent.get('order')==='low'?'low':'high',
    count:Math.max(2,Math.min(32,parseInt(intent.get('players'),10)||2)),
    target:Math.max(0,Math.min(9999999,parseInt(intent.get('target'),10)||0))};
  history.replaceState(null,'',location.pathname+location.search);
  if (dialog.open) dialog.addEventListener('close',()=>newCard(preset),{once:true});
  else newCard(preset);
}
window.addEventListener('hashchange',()=>route().catch(fail));
if(channel)channel.onmessage=event=>{
  if(current && current.id!==event.data) return;
  if(dialog.open) dialog.addEventListener('close', refreshAfterDialog, {once:true});
  else route().catch(fail);
};
function refreshAfterDialog() { route().catch(fail); }
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
