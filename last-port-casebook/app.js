'use strict';
const $ = s => document.querySelector(s);
const main = $('#main'), dlg = $('#dialog'), dialogbody = $('#dialogbody');
const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const num = n => String(n).padStart(2,'0');
const key = 'lastport.volume1.v1', pinKey = key+'.pin';
const defaults = () => ({pages:{},last:1,view:'shelf',id:1});
let book=defaults(), pin, startupError=false, pendingPin=false, timer;
try {
  const raw=localStorage.getItem(key);
  if(raw){const saved=JSON.parse(raw);validate(saved);book=saved;}
  pin=JSON.parse(localStorage.getItem(pinKey)||'null');
} catch {startupError=true;}
const pNow=()=>puzzles[book.id-1];
function page(){return book.pages[book.id] ||= {};}
function toast(message){$('#notice').textContent=message;clearTimeout(timer);timer=setTimeout(()=>$('#notice').textContent='',4500);}
function save(){try{localStorage.setItem(key,JSON.stringify(book));return true;}catch{toast('Storage is full or unavailable. Back up your work before closing.');return false;}}
function nav(view,id=book.id){
 for(const section of main.querySelectorAll('.index-section')){
  if(section.open)openSections.add(section.dataset.section);
  else openSections.delete(section.dataset.section);
 }
 if((view==='index'||view==='answers')&&(book.view==='puzzle'||book.view==='answer')){
  openSections.add(pNow().kind);
 }
 book.view=view;book.id=id;if(view==='puzzle')book.last=id;save();render();window.scrollTo(0,0);}
function btn(label,act,cls=''){return '<button type="button" class="'+cls+'" data-act="'+act+'">'+label+'</button>';}
function go(label,view,id,cls=''){return '<button class="'+cls+'" data-go="'+view+'" data-id="'+id+'">'+label+'</button>';}
function progress(id){const s=book.pages[id];if(s?.done)return 'Complete';if(s&&(s.notes||s.ink?.length||s.found?.length||Object.values(s.fields||{}).some(Boolean)||Object.values(s.letters||{}).some(Boolean)))return 'In progress';return 'Unopened';}
const sectionLabels = {
 'Crossword': 'Crosswords',
 'Word search': 'Word searches',
 'Detective skills': 'Detective skills',
 'Whodunit': 'Whodunits',
 'Logic': 'Logic puzzles',
 'Codebreaking': 'Codebreaking'
};
const openSections = new Set();

function numberJump(answer) {
 return '<book-number-jump noun="' + (answer ? 'answer' : 'puzzle') + '" max="' + puzzles.length + '"></book-number-jump>';
}
main.addEventListener('open-book-number', event => {
 const answers = book.view === 'answer' || book.view === 'answers';
 nav(answers ? 'answer' : 'puzzle', event.detail);
 const title = main.querySelector('h1');
 title.tabIndex = -1;
 title.focus({preventScroll:true});
});

function list(answer = false) {
 return numberJump(answer) + Object.entries(sectionLabels).map(([kind, label]) => {
  const cases = puzzles.filter(p => p.kind === kind);
  const complete = cases.filter(p => book.pages[p.id]?.done).length;
  const rows = cases.map(p => {
   const done = Boolean(book.pages[p.id]?.done);
   const status = progress(p.id);
   const action = answer ? (done ? 'Complete · Solution' : 'Solution') : (status === 'Unopened' ? 'Open' : status);
   const title = done ? '<s>' + esc(p.title) + '</s>' : esc(p.title);
   const row = '<span class="num">' + num(p.id) + '</span><span><strong>' + title +
    '</strong><small>' + p.level + '</small></span><span class="status">' + action + ' ›</span>';
   return go(row, answer ? 'answer' : 'puzzle', p.id, 'indexrow');
  }).join('');
  return '<details class="index-section" data-section="' + kind + '"' + (openSections.has(kind) ? ' open' : '') +
   '><summary><span>' + label + '</span><small>' + complete + ' of ' + cases.length +
   ' complete</small></summary>' + rows + '</details>';
 }).join('');
}
function library(){
 const answers=book.view==='answers', index=book.view==='index';
 if(answers||index)return '<div class="page"><div class="pager">'+go('‹ Bookshelf','shelf',book.id)+'</div><div class="filehead"><p class="eyebrow">Volume I · '+(answers?'Companion book':'Puzzle book')+'</p><h1>'+(answers?'The Answer Book':'Puzzle index')+'</h1><p>'+(answers?'Choose a case to open its solution.':'Choose a case to work on.')+'</p></div>'+list(answers)+'</div>';
 const opened=Object.values(book.pages).some(s=>Object.keys(s).length);
 return '<p class="eyebrow">Volume I · Travel edition</p><h1>Your bookshelf</h1><div class="shelf">'+go('<span class="bookinner"><span class="eyebrow">Puzzle book · '+puzzles.length+' cases</span><strong>The Last Port<br>Casebook</strong><small>'+(opened?'Resume case '+num(book.last):'Open the first case')+' &nbsp; →</small></span>','puzzle',book.last,'book')+go('<span class="bookinner"><span class="eyebrow">Companion volume</span><strong>The Answer<br>Book</strong><small>Browse solutions &nbsp; →</small></span>','answers',book.id,'book answer')+'</div><div class="sectionhead"><h2>Puzzle index</h2><span>'+puzzles.filter(p=>book.pages[p.id]?.done).length+' of '+puzzles.length+' complete</span></div>'+list();
}
const shape={Anchor:'⚓︎',Bell:'♧',Shell:'◒',Key:'⚿',Coin:'◉',Ring:'◎'};
function evidence(p){
 const tables=(p.tables||[]).map(([title,columns,rows])=>'<section class="exhibit"><h2 class="cap">'+title+'</h2><div class="scroll"><table><thead><tr>'+columns.map(c=>'<th scope="col">'+c+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map(c=>'<td>'+c+'</td>').join('')+'</tr>').join('')+'</tbody></table></div></section>').join('');
 const trays=p.trays?'<div class="trays">'+p.trays.map(([name,items])=>'<section class="exhibit"><h2 class="cap">'+name+'</h2><div class="tray">'+items.map(s=>'<span><b aria-hidden="true">'+shape[s.split(' ')[0]]+'</b>'+s+'</span>').join('')+'</div></section>').join('')+'</div>':'';
 return tables+trays+(p.exhibit?'<div class="exhibit"><span class="cap">Intercepted note</span><div class="cipher">'+p.exhibit+'</div></div>':'')+(p.clues?'<h2 class="cap">Case notes</h2><ol>'+p.clues.map(c=>'<li>'+c+'</li>').join('')+'</ol>':'');
}
function gridform(p,s){const f=p.tableform;return '<section class="field"><h2 class="cap">Your reconstruction</h2><div class="scroll"><table><thead><tr><th>Entry</th>'+f.cols.map(c=>'<th>'+c[0]+'</th>').join('')+'</tr></thead><tbody>'+f.rows.map((name,r)=>'<tr><th scope="row">'+name+'</th>'+f.cols.map((opts,c)=>{const k=r+'-'+c;return '<td><select aria-label="'+name+' '+opts[0]+'" data-field="'+k+'"><option value="">Choose…</option>'+opts.slice(1).map(o=>'<option '+(s.fields?.[k]===o?'selected':'')+'>'+o+'</option>').join('')+'</select></td>';}).join('')+'</tr>').join('')+'</tbody></table></div></section>';}
function entries(p){let result=p.entries.map(e=>({...e,cells:Array.from(e.word,(_,i)=>(e.x+(e.dir==='Across'?i:0))+','+(e.y+(e.dir==='Down'?i:0)))}));let pos=[...new Set(result.map(e=>e.cells[0]))].sort((a,b)=>{const [x,y]=a.split(',').map(Number),[u,v]=b.split(',').map(Number);return y-v||x-u;});for(const e of result)e.n=pos.indexOf(e.cells[0])+1;return result.sort((a,b)=>a.n-b.n);}
let crossDir='Across',selectedCell='',activeEntry;
function cross(p,s,solution=false){
 const rings=new Set((p.rings||[]).map(point=>point.join(',')));
 const es=entries(p), board=new Map(), heads=new Map();
 for(const e of es){heads.set(e.cells[0],e.n);e.cells.forEach((k,i)=>board.set(k,e.word[i]));}
 const coords=[...board.keys()].map(k=>k.split(',').map(Number)),w=1+Math.max(...coords.map(a=>a[0])),h=1+Math.max(...coords.map(a=>a[1]));
 let cells='';
 for(let y=0;y<h;y++)for(let x=0;x<w;x++){
  const k=x+','+y, ring=rings.has(k);
  cells+=!board.has(k)?'<span class="cell void"></span>':'<label class="cell'+(ring?' circled':'')+'" data-gridcell="'+k+'">'+(heads.has(k)?'<i>'+heads.get(k)+'</i>':'')+(solution?board.get(k):'<input class="square" aria-label="Row '+(y+1)+', column '+(x+1)+(ring?', circled':'')+'" data-cross="'+k+'" value="'+esc(s.letters?.[k])+'" autocapitalize="characters" autocomplete="off" autocorrect="off" spellcheck="false">')+'</label>';
 }
 const clues=['Across','Down'].map(d=>'<h3 class="cap">'+d+'</h3>'+es.filter(e=>e.dir===d).map(e=>solution?'<p><b>'+e.n+'. '+e.word+'</b> · '+e.clue+'</p>':'<button data-entry="'+e.n+'" data-direction="'+d+'">'+e.n+'. '+e.clue+' ('+e.word.length+')</button>').join('')).join('');
 return '<section class="field"><h2 class="cap">'+(solution?'Completed grid':'Crossword')+'</h2>'+(!solution?'<p class="subtle">Tap a clue, then type in its squares. Tap a crossing twice to change direction.</p><p id="currentclue" aria-live="polite"></p>':'')+'<div class="crosslayout"><div><div class="puzzlegrid" style="--cols:'+w+';--max:560px">'+cells+'</div></div><div class="cluelist">'+clues+'</div></div></section>';
}
function chooseCell(k,dir,focus=false){
 const es=entries(pNow()).filter(e=>e.cells.includes(k));activeEntry=es.find(e=>e.dir===dir)||es[0];if(!activeEntry)return;
 selectedCell=k;crossDir=activeEntry.dir;
 document.querySelectorAll('[data-gridcell]').forEach(el=>{el.classList.toggle('selected',el.dataset.gridcell===k);el.classList.toggle('active',el.dataset.gridcell!==k&&activeEntry.cells.includes(el.dataset.gridcell));});
 document.querySelectorAll('[data-entry]').forEach(b=>b.classList.toggle('chosen',b.dataset.entry==activeEntry.n&&b.dataset.direction===crossDir));
 $('#currentclue').textContent=activeEntry.n+' '+crossDir+' · '+activeEntry.clue;
 const i=$('[data-cross="'+k+'"]');if(focus)i.focus({preventScroll:true});if(i===document.activeElement)i.select();
}
function moveCell(delta){const i=activeEntry.cells.indexOf(selectedCell)+delta;if(i>=0&&i<activeEntry.cells.length)chooseCell(activeEntry.cells[i],crossDir,true);}
function setupCross(){
 const es=entries(pNow()), first=es.find(e=>e.dir==='Across')||es[0];chooseCell(first.cells[0],first.dir);
 let previousFocus;
 main.querySelectorAll('.square').forEach(input=>{
  input.onpointerdown=()=>{previousFocus=document.activeElement===input;};
  input.onfocus=()=>chooseCell(input.dataset.cross,crossDir);
  input.onclick=()=>chooseCell(input.dataset.cross,previousFocus?(crossDir==='Across'?'Down':'Across'):crossDir);
  input.oninput=()=>{const v=input.value.replace(/[^A-Za-z]/g,'').toUpperCase().slice(-1);input.value=v;(page().letters||={})[input.dataset.cross]=v;save();if(v)moveCell(1);};
  input.onkeydown=e=>{if(e.key==='Backspace'&&!input.value){e.preventDefault();moveCell(-1);}else if(['ArrowLeft','ArrowRight','ArrowDown','ArrowUp'].includes(e.key)){e.preventDefault();const [x,y]=input.dataset.cross.split(',').map(Number);const k=(x+(e.key==='ArrowRight')-(e.key==='ArrowLeft'))+','+(y+(e.key==='ArrowDown')-(e.key==='ArrowUp'));if($('[data-cross="'+k+'"]'))chooseCell(k,['ArrowLeft','ArrowRight'].includes(e.key)?'Across':'Down',true);}};
 });
 main.querySelectorAll('[data-entry]').forEach(b=>b.onclick=()=>{const e=es.find(e=>e.n==b.dataset.entry&&e.dir===b.dataset.direction);chooseCell(e.cells.find(k=>!page().letters?.[k])||e.cells[0],e.dir,true);});
}
function line(a,b){const dx=b[0]-a[0],dy=b[1]-a[1];if(dx&&dy&&Math.abs(dx)!==Math.abs(dy))return [];return Array.from({length:1+Math.max(Math.abs(dx),Math.abs(dy))},(_,i)=>[a[0]+i*Math.sign(dx),a[1]+i*Math.sign(dy)].join(','));}
function searchGrid(p,s,solution=false){
 const rings=new Set((p.rings||[]).map(point=>point.join(',')));
 const words=Object.keys(p.locations),marked=new Set((solution?words:s.found||[]).flatMap(w=>line(...p.locations[w])));
 return '<section class="field"><h2 class="cap">'+(solution?'Word locations':'Inventory grid')+'</h2>'+(!solution?'<p class="subtle">Drag from the first letter to the last, or tap the two ends. Either direction works. Tap a crossed-off word below to remove its highlight.</p>':'')+'<div class="puzzlegrid ws" style="--cols:'+p.grid.length+';--max:545px">'+p.grid.map((r,y)=>Array.from(r,(c,x)=>'<'+(solution?'span':'button type="button"')+' class="cell '+(marked.has(x+','+y)?'found':'')+(rings.has(x+','+y)?' circled':'')+'" data-ws="'+x+','+y+'" aria-label="Row '+(y+1)+', column '+(x+1)+', '+c+(rings.has(x+','+y)?', circled':'')+'">'+c+'</'+(solution?'span':'button')+'>').join('')).join('')+'</div>'+(solution?'<ol>'+words.map(w=>{const [a,b]=p.locations[w];return '<li><b>'+w+'</b> · row '+(a[1]+1)+', col '+(a[0]+1)+' → row '+(b[1]+1)+', col '+(b[0]+1)+'</li>';}).join('')+'</ol>':'<div class="wordlist">'+words.sort().map(w=>'<button type="button" aria-pressed="'+Boolean(s.found?.includes(w))+'" class="'+(s.found?.includes(w)?'done':'')+'" data-word="'+w+'">'+w+'</button>').join('')+'</div><p class="wordfound" aria-live="polite">'+(s.found?.length||0)+' of '+words.length+' found</p>')+'</section>';
}
function setupSearch(p){
 const grid=$('.ws');let start=null,press=null,previous=null,pointer=null;
 const point=k=>k.split(',').map(Number);
 function paint(k){const cells=start&&k?line(point(start),point(k)):[];grid.querySelectorAll('button').forEach(b=>b.classList.toggle('preview',cells.includes(b.dataset.ws)));}
 function finish(k){if(!start||!k)return;const hit=Object.keys(p.locations).find(w=>{const [a,b]=p.locations[w].map(pt=>pt.join(','));return (a===start&&b===k)||(a===k&&b===start);});
  if(hit){const found=page().found||=[];if(!found.includes(hit))found.push(hit);save();line(...p.locations[hit]).forEach(pos=>$('[data-ws="'+pos+'"]').classList.add('found'));$('[data-word="'+hit+'"]').classList.add('done');$('[data-word="'+hit+'"]').setAttribute('aria-pressed','true');$('.wordfound').textContent=hit+' · '+found.length+' of '+Object.keys(p.locations).length+' found';}
  else $('.wordfound').textContent='No inventory word on that line. Try another pair of ends.';
  start=null;paint(null);
 }
 main.querySelectorAll('[data-word]').forEach(button=>button.onclick=()=>{const w=button.dataset.word;const found=page().found||[];if(!found.includes(w)){toast('Find '+w+' in the grid.');return;}page().found=found.filter(word=>word!==w);save();const marks=new Set(page().found.flatMap(word=>line(...p.locations[word])));grid.querySelectorAll('[data-ws]').forEach(b=>b.classList.toggle('found',marks.has(b.dataset.ws)));button.classList.remove('done');button.setAttribute('aria-pressed','false');$('.wordfound').textContent=w+' removed · '+page().found.length+' found';});
 const at=e=>document.elementFromPoint(e.clientX,e.clientY)?.closest('[data-ws]')?.dataset.ws;
 grid.onpointerdown=e=>{if(pointer!==null||!e.target.dataset.ws)return;e.preventDefault();pointer=e.pointerId;previous=start;press=e.target.dataset.ws;start=start||press;grid.setPointerCapture(pointer);paint(press);};
 grid.onpointermove=e=>{if(e.pointerId===pointer)paint(at(e));};
 grid.onpointerup=e=>{if(e.pointerId!==pointer)return;const end=at(e);if(end&&(end!==press||previous))finish(end);else if(!end){start=null;paint(null);}pointer=null;press=null;};
 grid.onpointercancel=()=>{pointer=start=press=null;paint(null);};
 grid.onclick=e=>{if(e.detail!==0||!e.target.dataset.ws)return;const k=e.target.dataset.ws;if(start)finish(k);else{start=k;paint(k);}};
}
function notebook(s){
 return '<section class="field"><h2 class="cap">Field notebook</h2><label for="notes">Typed notes</label><textarea id="notes" placeholder="Jot down a lead…">'+esc(s.notes)+'</textarea><div class="toolsline"><span>Scratch paper · finger or Pencil</span><div>'+btn('Pen','pen','primary')+' '+btn('Eraser','eraser')+' '+btn('Undo stroke','undo')+'</div></div><svg xmlns="http://www.w3.org/2000/svg" class="inkpad" viewBox="0 0 1000 360" preserveAspectRatio="none" aria-label="Handwriting area"></svg></section>';
}
let inkTool='pen',inkHistory=[];
function drawInk(){const svg=$('.inkpad');if(!svg)return;svg.replaceChildren();for(const stroke of page().ink||[])appendStroke(svg,stroke);}
function appendStroke(svg,stroke){const el=document.createElementNS('http://www.w3.org/2000/svg','polyline');el.setAttribute('fill','none');el.setAttribute('stroke','#234c52');el.setAttribute('stroke-width','2');el.setAttribute('vector-effect','non-scaling-stroke');el.setAttribute('stroke-linecap','round');el.setAttribute('stroke-linejoin','round');el.setAttribute('points',stroke.map(p=>p.join(',')).join(' '));svg.appendChild(el);return el;}
function setupInk(){
 const svg=$('.inkpad');inkTool='pen';inkHistory=[];drawInk();let pointer=null,stroke,node;
 const pos=e=>{const b=svg.getBoundingClientRect();return [Math.round(Math.max(0,Math.min(1,(e.clientX-b.left)/b.width))*1000),Math.round(Math.max(0,Math.min(1,(e.clientY-b.top)/b.height))*360)];};
 function erase(pt){const ink=page().ink||[];const i=ink.findIndex(st=>st.some((end,j)=>{const a=st[Math.max(0,j-1)],dx=end[0]-a[0],dy=end[1]-a[1],t=Math.min(1,Math.max(0,((pt[0]-a[0])*dx+(pt[1]-a[1])*dy)/(dx*dx+dy*dy||1)));return Math.hypot(pt[0]-a[0]-t*dx,pt[1]-a[1]-t*dy)<13;}));if(i>=0){inkHistory.push({deleted:ink[i],i});ink.splice(i,1);drawInk();save();}}
 svg.onpointerdown=e=>{if(pointer!==null)return;e.preventDefault();pointer=e.pointerId;svg.setPointerCapture(pointer);const pt=pos(e);if(inkTool==='eraser'){erase(pt);return;}stroke=[pt,[Math.min(1000,pt[0]+.1),pt[1]]];node=appendStroke(svg,stroke);};
 svg.onpointermove=e=>{if(e.pointerId!==pointer)return;const pt=pos(e);if(inkTool==='eraser'){erase(pt);return;}if(stroke.length<5000){stroke.push(pt);node.setAttribute('points',stroke.map(p=>p.join(',')).join(' '));}};
 function finish(e){if(e.pointerId!==pointer)return;pointer=null;if(inkTool==='pen'&&stroke){(page().ink||=[]).push(stroke);inkHistory.push({added:true});save();stroke=null;}}
 svg.onpointerup=finish;svg.onpointercancel=finish;
}
function pageBody(){
 const p=pNow(),s=book.pages[p.id]||{},answer=book.view==='answer',view=book.view;
 let content;
 if(answer){content='<section class="solution"><h2 class="cap">Solution · '+num(p.id)+'</h2>'+(p.answer?'<strong>'+p.answer+'</strong><p>'+p.why+'</p>':p.entries?'<p>The filled grid and its clues are below.</p>':'<p>Coordinates count from the top left.</p>')+'</section>'+(p.entries?cross(p,s,true):p.grid?searchGrid(p,s,true):'')+go('‹ Return to puzzle '+num(p.id),'puzzle',p.id,'primary');}
 else{content='<p class="intro">'+p.intro+'</p>'+evidence(p)+(p.tableform?gridform(p,s):'')+(p.entries?cross(p,s):'')+(p.grid?searchGrid(p,s):'')+(p.questions?'<section class="field"><h2 class="cap">Your deduction</h2>'+p.questions.map((q,i)=>'<label class="question" for="q'+i+'">'+q+'</label><textarea id="q'+i+'" data-field="q'+i+'">'+esc(s.fields?.['q'+i])+'</textarea>').join('')+'</section>':'')+notebook(s)+'<div class="answerbar">'+'<label class="complete-control"><input type="checkbox" id="puzzle-complete"'+(s.done?' checked':'')+'> Complete</label>'+go('Puzzle index','index',p.id)+go('Open answer '+num(p.id)+' ↗','answer',p.id)+btn('Clear this page','clearpage','danger')+'</div>';}
 return '<article class="page"><div class="pager">'+go('‹ '+(answer?'Answer index':'Puzzle index'),answer?'answers':'index',p.id)+'<div class="navright">'+(p.id>1?go('← Previous',view,p.id-1):'')+(p.id<puzzles.length?go('Next →',view,p.id+1):'')+'</div></div>'+numberJump(answer)+'<div class="filehead"><p class="eyebrow">'+(answer?'Answer':'Case')+' '+num(p.id)+' / '+num(puzzles.length)+' &nbsp; · &nbsp; '+p.kind+' &nbsp; · &nbsp; '+p.level+'</p><h1>'+p.title+'</h1></div>'+content+'</article>';
}
function render(){
 if(startupError){main.innerHTML='<h1>Saved book needs attention</h1><p>Your stored progress could not be read. Keep this copy of the app open and retain your latest backup.</p>';return;}
 const inside=['puzzle','answer'].includes(book.view);main.innerHTML=inside?pageBody():library();
 if(book.view==='puzzle'){
  if(pNow().entries)setupCross();if(pNow().grid)setupSearch(pNow());setupInk();
  $('#puzzle-complete').onchange = event => {
   const checkbox = event.currentTarget;
   const state = page();
   const previous = Boolean(state.done);
   state.done = checkbox.checked;
   if (!save()) {
    state.done = previous;
    checkbox.checked = previous;
   }
  };
  $('#notes').oninput=e=>{page().notes=e.target.value;save();};
  main.querySelectorAll('[data-field]').forEach(el=>el.addEventListener(el.tagName==='SELECT'?'change':'input',()=>{(page().fields||={})[el.dataset.field]=el.value;save();}));
 }
}
function openDialog(title,body){dialogbody.innerHTML='<h2 id="dialogtitle">'+title+'</h2>'+body;if(!dlg.open)dlg.showModal();}
function closeDialog(){if(!pendingPin)dlg.close();}
dlg.addEventListener('cancel',e=>{if(pendingPin)e.preventDefault();});
function toolsMenu(){openDialog('Book tools','<p>Progress is saved on this device as you work.</p><div class="actions">'+btn('Back up my book','backup','primary')+btn('Restore a backup','restore')+btn('Set up for offline use','install')+btn('Clear all '+puzzles.length+' puzzles','clearall','danger')+btn('Close','close')+'</div>');}
function backupMenu(){
 openDialog('Back up your book','<p>The file includes your answers, highlights, handwriting and place in the book.</p><p>Choose <b>Mail</b> in the share sheet to email the attachment. Offline, save the message as a draft or tap Send and check Mail’s Outbox. You can also save the file on your iPad.</p><div class="actions">'+btn('Share backup for email','share','primary')+btn('Save backup file','download')+btn('Close','close')+'</div><p class="error" id="sharestatus" role="status"></p>');
}
function backupFile(){const data={format:'last-port-casebook',version:1,created:new Date().toISOString(),book};return new File([JSON.stringify(data)],'Last-Port-backup-'+new Date().toISOString().slice(0,10)+'.txt',{type:'text/plain'});}
async function shareBackup(){
 const file=backupFile();if(!navigator.canShare?.({files:[file]})){ $('#sharestatus').textContent='File sharing is unavailable here. Save the backup file, then attach it in your mail app.';return;}
 try{await navigator.share({files:[file],title:'Last Port casebook backup'});}catch(e){if(e.name!=='AbortError')$('#sharestatus').textContent='Mail sharing could not open. Save the file and attach it in Mail.';}
}
function download(){const url=URL.createObjectURL(backupFile());const a=document.createElement('a');a.href=url;a.download=backupFile().name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);}
function validate(b){
 const fail=()=>{throw Error('Invalid backup');},obj=v=>v!==null&&typeof v==='object'&&!Array.isArray(v),id=i=>Number.isInteger(i)&&puzzles.some(p=>p.id===i);
 if(!obj(b)||!obj(b.pages)||!id(b.last)||!id(b.id)||!['shelf','index','answers','puzzle','answer'].includes(b.view))fail();
 for(const [k,s] of Object.entries(b.pages)){
  const p=puzzles.find(p=>String(p.id)===k);if(!p||!obj(s))fail();
  if(Object.keys(s).some(k=>!['done','notes','fields','letters','ink','found'].includes(k)))fail();
  if('done'in s&&typeof s.done!=='boolean'||'notes'in s&&typeof s.notes!=='string')fail();
  if('fields'in s){if(!obj(s.fields))fail();for(const [name,val] of Object.entries(s.fields)){
   if(typeof val!=='string')fail();const q=p.questions?.some((_,i)=>name==='q'+i);
   const pick=p.tableform?.rows.some((_,r)=>p.tableform.cols.some((options,c)=>name===r+'-'+c&&(val===''||options.slice(1).includes(val))));
   if(!q&&!pick)fail();
  }}
  if('letters'in s){if(!p.entries||!obj(s.letters))fail();const valid=new Set(entries(p).flatMap(e=>e.cells));if(Object.entries(s.letters).some(([k,v])=>!valid.has(k)||typeof v!=='string'||!/^[A-Z]?$/.test(v)))fail();}
  if('found'in s&&(!p.locations||!Array.isArray(s.found)||new Set(s.found).size!==s.found.length||s.found.some(w=>!Object.hasOwn(p.locations,w))))fail();
  if('ink'in s&&(!Array.isArray(s.ink)||s.ink.some(st=>!Array.isArray(st)||!st.length||st.some(pt=>!Array.isArray(pt)||pt.length!==2||pt.some((n,i)=>!Number.isFinite(n)||n<0||n>(i?360:1000))))))fail();
 }
}
async function restoreFile(file){if(!file)return;
 try{const data=JSON.parse(await file.text());if(data.format!=='last-port-casebook'||data.version!==1)throw Error();validate(data.book);
  pinForm('Restore this backup?','This replaces the work on this device with the selected backup. Your current PIN stays in place.',()=>{const prev=book;book=data.book;if(!save()){book=prev;throw Error('There is not enough storage to restore this backup.');}render();toast('Backup restored.');},'Restore book');
 }catch{$('#restorestatus').textContent='This file is not a valid backup for this volume. Your work is still here.';}
}
async function digest(value,salt){const material=await crypto.subtle.importKey('raw',new TextEncoder().encode(value),'PBKDF2',false,['deriveBits']);const bits=await crypto.subtle.deriveBits({name:'PBKDF2',salt:new TextEncoder().encode(salt),iterations:90000,hash:'SHA-256'},material,256);return Array.from(new Uint8Array(bits),n=>n.toString(16).padStart(2,'0')).join('');}
function pinForm(title,info,action,label,setup=false){
 pendingPin=setup;openDialog(title,'<p>'+info+'</p><form id="pinform"><label for="pin">'+(setup?'Choose a 4–8 digit PIN':'Enter your PIN')+'</label><input type="password" class="pin" inputmode="numeric" pattern="[0-9]{4,8}" minlength="4" maxlength="8" id="pin" autocomplete="off" required>'+(setup?'<label for="repeat">Confirm PIN</label><input type="password" class="pin" inputmode="numeric" id="repeat" minlength="4" maxlength="8" autocomplete="off" required>':'')+'<p id="pinerror" class="error" role="alert"></p><div class="dialogbuttons"><button type="submit" class="primary">'+label+'</button>'+(!setup?btn('Cancel','close'):'')+'</div></form>');
 $('#pinform').onsubmit=async e=>{e.preventDefault();const form=e.currentTarget,submit=form.querySelector('[type="submit"]');if(submit.disabled)return;submit.disabled=true;const value=$('#pin').value;
 try{if(setup){if(value!==$('#repeat').value)throw Error('The PINs differ. Enter the same PIN twice.');const salt=Array.from(crypto.getRandomValues(new Uint8Array(16))).join('-');const record={salt,hash:await digest(value,salt)};localStorage.setItem(pinKey,JSON.stringify(record));pin=record;}
  else if(!pin||await digest(value,pin.salt)!==pin.hash)throw Error('That PIN did not match. Try again.');
  if(!dlg.open||!form.isConnected)return;action();pendingPin=false;dlg.close();
 }catch(err){if(form.isConnected)$('#pinerror').textContent=err.name==='QuotaExceededError'?'Storage is unavailable. Free device space and try again.':err.message;}finally{submit.disabled=false;}};
}
function installInfo(){openDialog('Take the book offline','<ol><li>Open the book in Safari while online.</li><li>Tap Share, then Add to Home Screen. Enable Open as Web App if offered.</li><li>Launch the Home Screen copy while online, set your PIN there, and wait for “Ready offline.” Use this copy for your trip.</li><li>Turn on Airplane Mode, turn Wi-Fi off, close the book and reopen it from its icon. Try a puzzle and its answer.</li></ol><p>Keep a backup in Files so you can restore your work if device storage is cleared.</p>'+btn('Close','close'));}
function handleAction(a){
 switch(a){
 case 'close':closeDialog();break;
 case 'install':installInfo();break;
 case 'backup':backupMenu();break;
 case 'share':shareBackup();break;
 case 'download':download();break;
 case 'restore':openDialog('Restore your book','<p>Select a Last Port backup from Files. You’ll review the replacement before it takes effect.</p><input type="file" id="restorefile" accept=".txt,.json,text/plain,application/json"><p id="restorestatus" role="alert" class="error"></p>'+btn('Cancel','close'));$('#restorefile').onchange=e=>restoreFile(e.target.files[0]);break;
 case 'clearall':case 'clearpage':{const all=a==='clearall',id=book.id;pinForm(all?'Clear the whole book?':'Clear case '+num(id)+'?',all?'All answers, notes, highlights and handwriting in this volume will be erased.':'Only the answers, notes, highlights and handwriting for “'+pNow().title+'” will be erased.',()=>{const previous=book;book=JSON.parse(JSON.stringify(previous));if(all){book.pages={};book.last=1;book.view='shelf';book.id=1;}else delete book.pages[id];if(!save()){book=previous;throw Error('Unable to save the cleared book.');}render();toast(all?'Book cleared.':'Page cleared.');},all?'Clear whole book':'Clear page');break;}
 case 'pen':case 'eraser':inkTool=a;for(const m of ['pen','eraser']){const b=$('[data-act="'+m+'"]');b.classList.toggle('primary',m===a);b.setAttribute('aria-pressed',String(m===a));}break;
 case 'undo':{const h=inkHistory.pop(),ink=page().ink||[];if(h?.deleted)ink.splice(h.i,0,h.deleted);else ink.pop();save();drawInk();break;}
 }
}
document.addEventListener('click',e=>{const t=e.target.closest('button');if(!t||startupError)return;if(t.dataset.go)nav(t.dataset.go,Number(t.dataset.id));else if(t.dataset.act)handleAction(t.dataset.act);});
$('#home').onclick=()=>{if(!startupError)nav('shelf');};$('#tools').onclick=()=>{if(!startupError)toolsMenu();};
render();
if(!startupError&&!pin)pinForm('Choose your book PIN','Use this PIN to clear a page, clear the book, or restore a backup. You can open and solve cases freely.',()=>{}, 'Set PIN',true);
// Report readiness only after this page is controlled and the worker confirms its complete offline cache.
async function checkOffline(){
 const label=$('#offline');
 try{
  if(!('serviceWorker' in navigator))throw Error();
  const reg=await navigator.serviceWorker.register('./sw.js');
  if(reg.installing){const worker=reg.installing;worker.addEventListener('statechange',()=>{if(worker.state==='redundant'&&!navigator.serviceWorker.controller)label.textContent='Offline setup failed · reopen online';});}
  await navigator.serviceWorker.ready;
  const check=()=>{const sw=navigator.serviceWorker.controller;if(!sw){label.textContent='Reopen for offline use';return;}const channel=new MessageChannel();channel.port1.onmessage=e=>{label.textContent=e.data===true?'Ready offline':'Offline copy incomplete';channel.port1.close();};sw.postMessage('verify', [channel.port2]);};
  navigator.serviceWorker.addEventListener('controllerchange',check);check();
 }catch{label.textContent='Offline setup unavailable';}
}
checkOffline();
