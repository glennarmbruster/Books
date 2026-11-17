'use strict';
const $ = id => document.getElementById(id);
const {projects,methods,problems} = BenchGuide;
function el(tag,text,cls) {
  const item=document.createElement(tag);
  if(text != null) item.textContent=text;
  if(cls) item.className=cls;
  return item;
}
function link(text,href,cls) {const a=el('a',text,cls);a.href=href;return a;}
function picture(id) {const img=el('img');img.src='images/'+id+'.jpg';img.alt='';return img;}
function list(items,tag) {const group=el(tag);group.append(...items.map(item=>el('li',item)));return group;}
function projectOptions() {
  const groups=new Map();
  for(const p of projects) {
    if(!groups.has(p.category)) {const group=el('optgroup');group.label=p.category;groups.set(p.category,group);}
    groups.get(p.category).append(new Option(p.title,p.id));
  }
  return [...groups.values()];
}
$('choose-guide').append(new Option('Select a project…',''),...projectOptions());
$('another-guide').append(...projectOptions());
$('shape').append(...projectOptions());
for(const id of ['choose-guide','another-guide']) $(id).onchange=e=>{
  if(e.target.value) location.hash='project/'+e.target.value;
};
function references() {
  const query=$('find-guide').value.trim().toLowerCase(), host=$('lookups');host.replaceChildren();
  for(const [heading,rows] of [['Machine workflows',methods],['Troubleshooting',problems]]) {
    const matches=rows.filter(item=>Object.values(item).join(' ').toLowerCase().includes(query));
    if(matches.length) host.append(el('h3',heading));
    for(const item of matches) {
      const box=el('details');box.append(el('summary',item.title));
      if(item.body) box.append(el('p',item.body),link(item.source,item.url));
      else for(const line of [item.symptom,item.check,item.tryNext]) box.append(el('p',line));
      host.append(box);
    }
  }
  if(!host.childElementCount) host.append(el('p','No entries match. Try a machine, material, or symptom.'));
}
$('find-guide').oninput=references;references();
function exampleDesign(p) {
  const [width,height,hole]=p.size;
  return {...defaults,shape:p.id,width,height,hole,names:p.exampleName,motif:p.exampleMotif,
    placement:width>1.7*height?'left':'above',...p.exampleLayout};
}
function projectPage(p) {
  const layout=el('div',null,'guide-layout'), intro=el('div'), steps=el('div');
  let visual;
  if(p.base) {
    const d=exampleDesign(p);
    visual=el('figure',null,'guide-proof');const image=el('div');
    image.innerHTML=BenchArt.svg({...d,name:d.names},'print');
    image.setAttribute('role','img');image.setAttribute('aria-label','Design example for '+p.title);
    visual.append(image,el('figcaption',d.width+' × '+d.height+' mm'));
  } else visual=picture(p.id);
  intro.append(visual,el('h1',p.title),el('p',p.summary),link(p.base?'Start this example in studio ↗':'Customize in studio ↗','#studio/'+p.id,'action'));
  steps.append(el('h2','Make a sample'),list(p.steps,'ol'),el('h2','Before making a set'),list(p.checks,'ul'));
  layout.append(intro,steps);$('project-page').replaceChildren(layout);
}
const sizes=BenchArt.presets;
const machines={glowforge:'Glowforge',cricut:'Cricut',sublimation:'Sublimation printer',printer3d:'3D printer'};
const letterDefaults={nameFont:'atkinson',subtitleFont:'atkinson',nameHeight:0,subtitleHeight:0};
const heightIds=['nameHeight','subtitleHeight'];
const optionalSizes=[...heightIds,'motifWidth','extraMotifWidth'];
const familiarNames={arimo:'Arial-compatible',tinos:'Times New Roman-compatible',cousine:'Courier New-compatible',carlito:'Calibri-compatible'};
for(const id of ['nameFont','subtitleFont']) {
  const groups=new Map();
  for(const face of BenchArt.typefaces) {
    if(!groups.has(face.category)) {
      const group=el('optgroup');group.label=face.category;groups.set(face.category,group);
    }
    const alias=familiarNames[face.id];
    groups.get(face.category).append(new Option(face.label+(alias?' ('+alias+')':''),face.id));
  }
  $(id).append(...groups.values());
}
const dimensionIds=['width','height','hole','thickness','relief'];
const layoutDefaults={positions:{},motifLines:'auto',extraMotifLines:'auto'};
const defaults={...layoutDefaults,...letterDefaults,motifWidth:0,extraMotifWidth:0,shape:'tag',width:90,height:50,hole:5,thickness:3,relief:1,names:'Cindy',subtitle:'',motif:'wave',extraMotif:'none',placement:'above',ink:'#193e37',accent:'#a35335',paper:'#e8ce9f',machine:'glowforge',units:'mm',mirror:false,printFormat:'png',modelFormat:'stl'};
const draftKey='makers-bench-studio-v1';
let design={...defaults}, currentName=0, exporting=false, valid=false;
function names(d) {
  const lines=d.names.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
  if(lines.length>25) throw Error('Use up to 25 names in one set.');
  return lines.length?lines:[''];
}
function checked(input) {
  // Projects from the first edition have a single image above the name.
  input={...layoutDefaults,...letterDefaults,motifWidth:0,extraMotifWidth:0,extraMotif:'none',placement:'above',...input};
  const result={};
  for(const k of Object.keys(defaults)) {
    if(typeof input?.[k]!==typeof defaults[k]) throw Error('This project has incomplete design settings.');
    result[k]=input[k];
  }
  if(!Object.hasOwn(machines,result.machine)||!['in','mm'].includes(result.units)||!['png','pdf'].includes(result.printFormat)||!['3mf','profile','stl'].includes(result.modelFormat)||result.names.length>1600) throw Error('This project has unrecognized settings.');
  names(result).forEach(name=>BenchArt.validate({...result,name}));return result;
}
try {const stored=JSON.parse(localStorage.getItem(draftKey));if(stored) design=checked(stored);} catch {}
const unitFactor=()=>design.units==='in'?25.4:1;
function displayed(id) {return Number.isFinite(design[id])?Number((design[id]/unitFactor()).toFixed(design.units==='in'?5:3)):'';}
const artItems=[
  {id:'wave',label:'Wave',category:'Original motifs'}, {id:'sun',label:'Sun',category:'Original motifs'},
  {id:'leaf',label:'Leaf',category:'Original motifs'}, {id:'mountain',label:'Mountain',category:'Original motifs'},
  ...BenchCatalog.items
];
const artById=new Map(artItems.map(item=>[item.id,item]));
const categories=[...new Set(artItems.map(item=>item.category))].sort();
const featuredIds=['dachshund','fa-graduation-cap','ne-graduation-cap','diploma'];
function artworkPicker(host,key,title) {
  const heading=el('label',title);heading.htmlFor=key;
  const find=el('input');find.type='search';find.placeholder='Try dachshund, graduation, or flower';
  find.id=key+'-search';find.dataset.filter='true';find.setAttribute('aria-label','Search '+title.toLowerCase());
  const category=el('select');category.id=key+'-category';category.dataset.filter='true';
  category.setAttribute('aria-label',title+' category');
  category.append(new Option('All categories',''),...categories.map(c=>new Option(c,c)));
  const select=el('select');select.id=key;
  const controls=el('div',null,'art-filters');controls.append(category,find);
  const proof=el('div',null,'art-sample'), thumb=el('span'), caption=el('span');
  thumb.setAttribute('aria-hidden','true');proof.append(thumb,caption);
  const count=el('small',null,'art-count');count.setAttribute('role','status');
  const widthLabel=el('label',key==='motif'?'Image width ':'Second image width ');
  const widthUnit=el('span','(mm)','measure-unit'),widthInput=el('input');
  widthInput.id=key+'Width';widthInput.type='number';widthInput.step='any';widthInput.min='0';widthInput.placeholder='Auto';
  widthInput.setAttribute('inputmode','decimal');widthInput.setAttribute('aria-describedby','art-size-help');
  widthLabel.append(widthUnit,widthInput);
  const lineLabel=el('label','Side lines'),lines=el('select');lines.id=key+'Lines';
  lines.append(new Option('Automatic','auto'),new Option('Show side lines','on'),new Option('Hide side lines','off'));lineLabel.append(lines);
  host.append(heading,controls,select,count,proof,widthLabel,lineLabel);
  let lastSample;
  function preview() {
    const id=design[key], sig=id+design.accent;
    if(lastSample===sig) return;
    lastSample=sig;
    const item=artById.get(id);
    lineLabel.hidden=widthLabel.hidden=proof.hidden=!item;
    if(item) {thumb.innerHTML=BenchArt.swatch(id,design.accent);caption.textContent=item.label;}
  }
  function options() {
    const query=find.value.trim().toLowerCase().replace(/[-_]+/g,' ');
    const matches=artItems.filter(item=>(!category.value||category.value===item.category)&&
      [item.label,item.category,item.keywords || ''].join(' ').toLowerCase().replace(/[-_]+/g,' ').includes(query));
    const current=artById.get(design[key]), fragment=document.createDocumentFragment();
    fragment.append(new Option(key==='motif'?'No image':'No second image','none'));
    if(current&&!matches.some(item=>item.id===current.id)) fragment.append(new Option(current.label+' (current)',current.id));
    const groups=new Map();
    const featured=!query&&!category.value;
    function group(name) {
      if(!groups.has(name)) {const node=el('optgroup');node.label=name;groups.set(name,node);}
      return groups.get(name);
    }
    for(const item of matches) {
      const name=featured&&featuredIds.includes(item.id)?'Featured':item.category;
      group(name).append(new Option(item.label,item.id));
    }
    if(groups.has('Featured')) {fragment.append(groups.get('Featured'));groups.delete('Featured');}
    for(const name of [...groups.keys()].sort()) fragment.append(groups.get(name));
    select.replaceChildren(fragment);select.value=design[key];
    count.textContent=matches.length===0?'No matches. Try another search or category.':matches.length.toLocaleString()+' images';
  }
  find.oninput=options;category.onchange=options;
  return {options,preview};
}
const artPickers=[artworkPicker($('art-picker'),'motif','Artwork'),artworkPicker($('extra-picker'),'extraMotif','Second artwork')];

function objectLabel(key) {
  if(key==='name') return 'Name';
  if(key==='subtitle') return 'Second line';
  return (key==='motif'?'First image · ':'Second image · ')+(artById.get(design[key])?.label||'');
}
const arranger=arrangePreview(()=>design,positions=>{
  if(!Object.keys(positions).length) {
    try {BenchArt.svg({...design,positions,name:names(design)[currentName]});} catch(error) {
      $('studio-message').textContent='Automatic layout: '+error.message;return;
    }
  }
  design.positions=positions;refresh();
},objectLabel);
function form() {
  for(const k of ['shape','units','names','subtitle','motifLines','extraMotifLines','nameFont','subtitleFont','placement','ink','accent','paper','machine']) $(k).value=design[k];
  for(const id of dimensionIds) $(id).value=displayed(id);
  for(const id of optionalSizes) $(id).value=design[id]===0?'':displayed(id);
  document.querySelectorAll('.measure-unit').forEach(node=>node.textContent='('+design.units+')');
  for(const picker of artPickers) picker.options();
  if(design.extraMotif!=='none') $('second-image').open=true;
  $('mirror').checked=design.mirror;$('print-format').value=design.printFormat;$('model-format').value=design.modelFormat;
}
function setShape(id) {design.positions={};design.shape=id;[design.width,design.height,design.hole]=sizes[id];}
const fileExt={cricut:'svg',glowforge:'svg',profile:'svg',stl:'stl','3mf':'3mf',pdf:'pdf',png:'png'};
function format(d=design) {return d.machine==='printer3d'?d.modelFormat:d.machine==='sublimation'?d.printFormat:d.machine;}
const outputNotes={
 glowforge:'Assign the black art to Engrave, blue lines to Score when present, and the red outline to Cut. Ignore the outline for a precut blank.',
 cricut:'Colored cut layers contain the lettering and motif. Check their size and placement on your blank in Design Space.',
 png:'The transfer prints at 300 ppi. Check that your printer and this studio mirror the artwork only once.',
 pdf:'Print at Actual size or 100%. Measure the paper proof against your blank.',
 stl:'A single solid with a flat back and raised artwork. Import into your slicer in millimeters.',
 '3mf':'A single solid with the size recorded in millimeters. Choose your printer and material in your slicer.',
 profile:'An editable flat SVG with the blank outline, any strap hole, and artwork paths. Select profiles in CAD and set the extrusion depth there.'
};
function refresh() {
  const fmt=format();
  $('type-error').hidden=true;
  $('art-size-error').hidden=true;
  for(const id of optionalSizes) $(id).placeholder='Auto';
  $('model-type').hidden=$('depths').hidden=design.machine!=='printer3d';
  $('print-type').hidden=$('mirror-row').hidden=$('transfer-proof').hidden=design.machine!=='sublimation';
  $('hole-row').hidden=!BenchArt.hasHole(design.shape);
  for(const picker of artPickers) picker.preview();
  $('output-title').textContent=machines[design.machine]+' file';$('output-note').textContent=outputNotes[fmt];
  $('export').textContent='Download '+fileExt[fmt].toUpperCase();
  $('studio-guide').href='#project/'+design.shape;$('size-caption').textContent=displayed('width')+' × '+displayed('height')+' '+design.units;
  try {
    const people=names(design);currentName=Math.min(currentName,people.length-1);
    const options=people.map((s,i)=>new Option(s||'Blank',i));$('name-index').replaceChildren(...options);$('name-index').value=currentName;
    $('which-name').hidden=$('export-set').hidden=people.length<2;
    const d={...design,name:people[currentName]};
    // The export engine emits path geometry and validated colors only.
    $('drawing').innerHTML=BenchArt.svg(d);
    if(design.machine==='sublimation') $('transfer').innerHTML=BenchArt.svg(d,'print');
    checked(design);
    const preview=$('drawing').querySelector('svg');
    for(const key of ['motif','extraMotif']) {
      const mm=preview.getAttribute('data-'+key.toLowerCase()+'-width');
      if(mm!==null) $(key+'Width').placeholder='Auto · '+Number((Number(mm)/unitFactor()).toFixed(design.units==='in'?3:2));
    }
    const visibleLines=$('drawing').querySelectorAll('#Lettering path');
    const fields=[d.name?'nameHeight':'subtitleHeight','subtitleHeight'];
    visibleLines.forEach((node,i)=>{
      const height=node.getBBox().height/unitFactor();
      $(fields[i]).placeholder='Auto · '+Number(height.toFixed(design.units==='in'?3:2));
    });
    if(fmt==='cricut') BenchArt.svg(d,'cricut');
    valid=true;$('studio-message').textContent='';
    try {localStorage.setItem(draftKey,JSON.stringify(design));} catch {}
  } catch(e) {
    if(/artwork|image width/i.test(e.message)) {
      $('art-size-error').hidden=false;$('art-size-error').textContent=e.message;
    }
    if(/font|letter|two lines/i.test(e.message)) {
      $('type-error').hidden=false;$('type-error').textContent=e.message;
    }
    valid=false;$('studio-message').textContent=e.message;$('drawing').replaceChildren();$('transfer').replaceChildren();
  }
  arranger.sync();
  for(const id of ['save-open','export','export-set']) $(id).disabled=!valid||exporting;
}
$('settings').onsubmit=e=>e.preventDefault();
$('settings').oninput=e=>{
  const id=e.target.id;
  if(e.target.dataset.filter) return;
  if(id==='shape') {setShape(e.target.value);form();}
  else if(id==='units') {design.units=e.target.value;form();}
  else if(optionalSizes.includes(id)) design[id]=e.target.validity.badInput?NaN:e.target.value===''?0:Number(e.target.value)*unitFactor();
  else if(dimensionIds.includes(id)) design[id]=e.target.value===''?NaN:Number(e.target.value)*unitFactor();
  else if(id==='placement') {design.placement=e.target.value;design.positions={};}
  else if(id==='mirror') design.mirror=e.target.checked;
  else if(Object.hasOwn(defaults,id)) design[id]=e.target.value;
  refresh();
};
$('name-index').onchange=e=>{currentName=Number(e.target.value);refresh();};
$('model-format').onchange=e=>{design.modelFormat=e.target.value;refresh();};
$('print-format').onchange=e=>{design.printFormat=e.target.value;refresh();};
async function download(batch) {
  if(exporting||!valid) return;
  const source={...design}, fmt=format(source), all=names(source), people=batch?all:[all[currentName]];
  exporting=true;refresh();
  try {
    const entries=[];
    for(const [i,name] of people.entries()) {
      $('studio-message').textContent='Preparing file '+(i+1)+' of '+people.length+'…';
      const stem=BenchFiles.slug(name||source.shape)+'-'+fmt+(source.mirror&&source.machine==='sublimation'?'-mirrored':'');
      const filename=(batch?String(i+1).padStart(2,'0')+'-':'')+stem+'.'+fileExt[fmt];
      entries.push([filename,await BenchFiles.output({...source,name},fmt)]);
    }
    if(batch) BenchFiles.save(await BenchFiles.zip(entries),source.shape+'-'+fmt+'-set.zip');
    else BenchFiles.save(entries[0][1],entries[0][0]);
    exporting=false;refresh();$('studio-message').textContent=batch?'Name set downloaded.':'Design file downloaded.';
  } catch(e) {exporting=false;refresh();$('studio-message').textContent=e.message;}
}
$('export').onclick=()=>download(false);$('export-set').onclick=()=>download(true);
let onAccept;
function dialog(title,accept,body,submit) {
  $('dialog-title').textContent=title;$('dialog-body').replaceChildren(body);$('accept').textContent=accept;
  $('dialog-message').textContent='';$('accept').disabled=false;onAccept=submit;$('dialog').showModal();
}
$('close-dialog').onclick=()=>$('dialog').close();
$('dialog-form').onsubmit=async e=>{
  e.preventDefault();$('accept').disabled=true;
  try {await onAccept();$('dialog').close();}
  catch(err) {$('dialog-message').textContent=err.message;}
  finally {$('accept').disabled=false;}
};
const logFields={title:'Project name',material:'Material or blank',equipment:'Machine or press',settings:'Machine settings',notes:'Results and notes'};
$('save-open').onclick=()=>{
  const d=checked(design), body=el('div');
  for(const [key,label] of Object.entries(logFields)) {
    const wrap=el('label',label), input=el(['settings','notes'].includes(key)?'textarea':'input');
    input.id='job-'+key;input.maxLength=key==='title'?120:3000;
    if(key==='title') {input.required=true;input.value=(names(d)[0]+' '+projects.find(p=>p.id===d.shape).title).trim();}
    if(key==='equipment') input.value=machines[d.machine];
    wrap.append(input);body.append(wrap);
  }
  const wrap=el('label','Photo of the test piece (optional)'),file=el('input');file.type='file';file.accept='image/*';wrap.append(file);body.append(wrap);
  dialog('Save to my workshop','Save project',body,async()=>{
    const entry={id:crypto.randomUUID(),date:new Date().toISOString(),design:d,photo:await BenchFiles.photo(file.files[0])};
    for(const key of Object.keys(logFields)) entry[key]=$('job-'+key).value.trim();
    if(!entry.title) throw Error('Enter a project name.');
    await BenchFiles.records(entry);location.hash='workshop';$('workshop-message').textContent='Project saved on this device.';
  });
};
function button(label,fn) {const b=el('button',label,'secondary');b.type='button';b.onclick=fn;return b;}
async function workshop() {
  const host=$('records');
  try {
    const entries=(await BenchFiles.records()).sort((a,b)=>b.date.localeCompare(a.date));
    host.replaceChildren();
    if(!entries.length) host.append(el('p','Save a design from the studio to start your workshop log.'));
    for(const run of entries) {
      const card=el('article',null,'record');
      card.append(el('h2',run.title),el('p',new Date(run.date).toLocaleDateString()+' · '+machines[run.design.machine],'muted'));
      for(const [key,label] of Object.entries(logFields)) if(key!=='title' && run[key]) {
        const line=el('p');line.append(el('strong',label+' · '),run[key]);card.append(line);
      }
      if(run.photo) {const img=el('img');img.alt='Saved test piece';img.src=run.photo;card.append(img);}
      const actions=el('div',null,'actions');
      actions.append(button('Open in studio',()=>{design=checked(run.design);currentName=0;form();refresh();location.hash='studio';}),
        button('Download project file',()=>BenchFiles.save(new Blob([JSON.stringify({version:1,workshop:run})],{type:'application/json'}),BenchFiles.slug(run.title)+'.bench.json')));
      card.append(actions);host.append(card);
    }
  } catch(e) {$('workshop-message').textContent='Could not open the local workshop. '+e.message;}
}
$('import').onchange=async e=>{
  try {
    const file=e.target.files[0];if(!file) return;
    if(file.size>4*1024*1024) throw Error('Choose a Maker’s Bench project file smaller than 4 MB.');
    const data=JSON.parse(await file.text()), entry=data.workshop;
    if(data.version!==1||!entry||Object.keys(logFields).some(key=>typeof entry[key]!=='string'||entry[key].length>3000)||!entry.title.trim()||
       typeof entry.date!=='string'||!Number.isFinite(Date.parse(entry.date))||typeof entry.photo!=='string'||
       (entry.photo && !/^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(entry.photo))) throw Error('Choose a saved Maker’s Bench project file.');
    const run={id:crypto.randomUUID(),design:checked(entry.design),date:new Date(entry.date).toISOString(),photo:entry.photo};
    for(const k of Object.keys(logFields)) run[k]=entry[k];
    await BenchFiles.records(run);await workshop();$('workshop-message').textContent='Project imported on this device.';
  } catch(err) {$('workshop-message').textContent='Import failed. '+err.message;}
  finally {e.target.value='';}
};
function route() {
  const [area,id]=location.hash.slice(1).split('/'), p=projects.find(project=>project.id===id);
  const page=area==='project'&&p?'project':['studio','workshop'].includes(area)?area:'guide';
  document.querySelectorAll('.view').forEach(section=>section.hidden=section.id!==page);
  document.querySelectorAll('[data-tab]').forEach(a=>{
    if(a.dataset.tab===(page==='project'?'guide':page)) a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');
  });
  if(page==='guide') $('choose-guide').value='';
  if(page==='project') { $('another-guide').value=p.id; projectPage(p); }
  if(page==='studio') {
    if(p) {
      if(p.base) {design={...exampleDesign(p),machine:design.machine,units:design.units};currentName=0;}
      else setShape(p.id);
      history.replaceState(null,'','#studio');
    }
    form();refresh();
  }
  if(page==='workshop') workshop();
  window.scrollTo(0,0);
}
window.addEventListener('hashchange',route);route();
let installPrompt;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installPrompt=e;});
$('install').hidden=matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
window.addEventListener('appinstalled',()=>{$('install').hidden=true;installPrompt=null;});
$('install').onclick=async()=>{
  if(installPrompt) {await installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;return;}
  const body=el('div');body.append(el('p','Windows PC: open this page in Edge. From the … menu choose More tools → Apps → Install this site as an app. In Chrome, use the install icon in the address bar when available.'),
    el('p','iPad: open the page in Safari, tap Share, then Add to Home Screen.'));
  dialog('Install The Maker’s Bench','Done',body,()=>{});
};
async function offline() {
  try {
    const reg=await navigator.serviceWorker.register('sw.js',{updateViaCache:'none'});
    const worker=reg.installing||reg.waiting||reg.active;
    if(!worker) throw Error();
    if(worker.state!=='activated') await new Promise((resolve,reject)=>{
      const changed=()=>{if(worker.state==='activated') resolve();if(worker.state==='redundant') reject(Error());};
      worker.addEventListener('statechange',changed);changed();
    });
    const ready=await new Promise(resolve=>{
      const channel=new MessageChannel(),timer=setTimeout(()=>{channel.port1.close();resolve(false);},5000);
      channel.port1.onmessage=e=>{clearTimeout(timer);channel.port1.close();resolve(e.data===true);};
      worker.postMessage({type:'verify-edition',edition:'makers-bench-4'},[channel.port2]);
    });
    if(!ready) throw Error();
    $('offline').textContent='Ready offline';
  } catch {$('offline').textContent='Offline setup incomplete. Reopen online to try again.';}
}
offline();
