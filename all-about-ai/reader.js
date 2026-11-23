const byId = id => document.getElementById(id);
const chapters = [];
let groups = [];
const referenceChapters = [];
let indexMode;
let currentTrack = 'devin';
const dateLabel = iso => new Intl.DateTimeFormat('en-US', {dateStyle:'long', timeZone:'UTC'}).format(new Date(iso + 'T12:00:00Z'));

function element(tag, value, className) {
  const node = document.createElement(tag);
  if (value !== undefined) node.textContent = value;
  if (className) node.className = className;
  return node;
}

function showContents() {
  const query = byId('query').value.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const result = document.createDocumentFragment();
  const labsOnly = location.hash === '#labs';
  byId('contents-title').textContent = labsOnly ? 'Hands-on labs' : 'Contents';
  byId('lab-note').hidden = !labsOnly;
  byId('lab-door').hidden = labsOnly;
  document.querySelector('.front').hidden = labsOnly;
  let count = 0;
  for (const group of groups) {
    if (labsOnly && !group.track) continue;
    if (!labsOnly && group.track && !query.length) continue;
    const found = group.items.filter(ch => query.every(term => ch.search.includes(term)));
    if (!found.length) continue;
    const block = element(group.track ? 'details' : 'section', undefined, group.track ? 'group track' : 'group');
    if (group.track) {
      block.open = query.length > 0 || group.track === currentTrack;
      const completed = group.items.filter(item => isComplete(item.id)).length;
      block.append(element('summary',group.title + ' · ' + group.items.length + ' labs' + (completed ? ' · ' + completed + ' complete' : '')));
    } else block.append(element('h3', group.title, 'group-heading'));
    const list = element('ol');
    for (const chapter of found) {
      const row = element('li');
      const link = element('a', undefined, 'entry');
      link.href = '#' + chapter.id;
      const name = element('span');
      name.append(element('span',chapter.title,'lab-entry-title'));
      if (group.track) {
        const done = isComplete(chapter.id);
        link.classList.toggle('done',done);
        name.append(element('small',chapter.level + (done ? ' · Complete' : '')));
      }
      link.append(element('span', String(chapter.number).padStart(2,'0'), 'num'),name);
      row.append(link);
      list.append(row);
    }
    count += found.length;
    block.append(list);
    result.append(block);
  }
  byId('groups').replaceChildren(result);
  byId('matches').textContent = query.length ? (count ? count + (count === 1 ? ' result.' : ' results.') : 'No results. Try a model name, tool or shorter phrase.') : '';
}

function makeTable(table, title) {
  const wrap = element('div', undefined, 'table-wrap');
  wrap.tabIndex = 0;
  wrap.setAttribute('role','region');
  wrap.setAttribute('aria-label',title + ' comparison table');
  const grid = element('table');
  const row = grid.createTHead().insertRow();
  for (const label of table.columns) {
    const cell = element('th',label);
    cell.scope = 'col';
    row.append(cell);
  }
  const body = grid.createTBody();
  for (const cells of table.rows) {
    const line = body.insertRow();
    cells.forEach((value, index) => {
      const cell = element(index ? 'td' : 'th',value);
      if (!index) cell.scope = 'row';
      line.append(cell);
    });
  }
  wrap.append(grid);
  return wrap;
}

function sourceLinks(references) {
  const details = element('details', undefined, 'sources');
  details.append(element('summary','Sources (' + references.length + ')'));
  const sources = element('ul');
  for (const [name, url] of references) {
    const li = element('li');
    const link = element('a',name);
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    li.append(link);
    sources.append(li);
  }
  details.append(sources);
  return details;
}

function chapterIntroduction(intro) {
  const block = element('section', undefined, 'chapter-intro');
  block.setAttribute('aria-label', 'Chapter introduction');
  const roles = [
    ['Exchange engineer', intro.exchange],
    ['Microsoft 365 engineer', intro.m365],
    ['Personal app developer', intro.developer]
  ];
  block.append(element('h2', 'What is it?'), element('p', intro.what),
    element('h2', 'What features does it have?'), element('p', intro.features),
    element('h2', 'Where it fits in your work'));
  const list = element('dl', undefined, 'role-list');
  for (const [name, value] of roles) list.append(element('dt', name), element('dd', value));
  block.append(list, sourceLinks(intro.sources));
  return block;
}

function isComplete(id) {
  try { return localStorage.getItem('all-about-ai.completed.' + id) === 'yes'; }
  catch { return false; }
}

function snippet(value, label) {
  const block = element('div', undefined, 'lab-snippet');
  const pre = element('pre', value);
  const button = element('button', 'Copy ' + label, 'copy-lab');
  button.type = 'button';
  button.onclick = async () => {
    try {
      await navigator.clipboard.writeText(value);
      button.textContent = 'Copied';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(pre);
      const selection = getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      button.textContent = 'Text selected · copy using your device';
    }
  };
  block.append(pre, button);
  return block;
}

function labBody(lab) {
  const about = element('section', undefined, 'chapter-intro');
  const roleInfo = element('details', undefined, 'sources');
  roleInfo.append(element('summary', 'Applications for your work'));
  const roles = element('dl', undefined, 'role-list');
  ['Exchange engineer', 'Microsoft 365 engineer', 'Personal app developer'].forEach((role,i) => {
    roles.append(element('dt',role),element('dd',lab.roles[i]));
  });
  roleInfo.append(roles);
  about.append(element('h2','What you’ll use'),element('p',lab.features),roleInfo,
    element('h2','Before you start'),element('p',lab.requires));
  const setup = element('details', undefined, 'sources');
  setup.append(element('summary','How to open this tool'), element('p',lab.group.gettingStarted));
  const setupLink = element('a',lab.group.startLabel);
  setupLink.href = lab.group.startUrl;
  setupLink.target = '_blank';
  setupLink.rel = 'noopener noreferrer';
  setup.append(setupLink);
  about.append(setup);
  if (lab.kit) {
    const link = element('a','Download the practice kit (.zip)','lab-action');
    link.href = './' + lab.kit;
    link.download = lab.kit.split('/').pop();
    about.append(link);
  }
  const prompt = element('section',undefined,'section');
  prompt.append(element('h2','Your prompt'),element('p','Prepare the sample in the walkthrough, then paste this prompt when instructed.'),snippet(lab.prompt,'prompt'));
  const instructions = element('section',undefined,'section');
  const list = element('ol',undefined,'lab-steps');
  for (const step of lab.steps) {
    const item = element('li');
    item.append(element('h3',step.title),element('p',step.text));
    if (step.code) item.append(snippet(step.code,'example'));
    const help = element('details',undefined,'step-help');
    help.append(element('summary','Help with this step'),element('p',step.help));
    item.append(help);
    list.append(item);
  }
  instructions.append(element('h2','Walkthrough'),list);
  const checks = element('details',undefined,'result-check');
  checks.append(element('summary','Check your result'));
  const answers = element('ul');
  lab.check.forEach(value => answers.append(element('li',value)));
  checks.append(answers);
  const finish = element('section',undefined,'section');
  const label = element('label',undefined,'complete-lab');
  const checkbox = element('input');
  checkbox.type = 'checkbox';
  checkbox.checked = isComplete(lab.id);
  const status = element('span');
  status.setAttribute('role','status');
  checkbox.onchange = () => {
    try {
      if (checkbox.checked) localStorage.setItem('all-about-ai.completed.' + lab.id,'yes');
      else localStorage.removeItem('all-about-ai.completed.' + lab.id);
      status.textContent = '';
    } catch { status.textContent = 'This browser could not save your progress.'; }
  };
  label.append(checkbox,document.createTextNode('Mark lab complete on this device'));
  finish.append(element('h2','Finish the lab'),checks,label,status,sourceLinks(lab.sources));
  return [about,prompt,instructions,finish];
}

function openLocation(moveFocus) {
  const id = location.hash.slice(1);
  const chapter = chapters.find(item => item.id === id);
  byId('index').hidden = Boolean(chapter);
  byId('chapter').hidden = !chapter;
  document.title = chapter ? chapter.title + ' · All About AI' : 'All About AI · Books';
  if (!chapter) {
    const mode = id === 'labs' ? 'labs' : 'contents';
    if (indexMode !== mode) byId('query').value = '';
    indexMode = mode;
    showContents();
    if (moveFocus) byId('contents-title').focus({preventScroll:true});
  } else {
    const lab = Boolean(chapter.group.track);
    if (lab) currentTrack = chapter.group.track;
    byId('group-name').textContent = lab ? chapter.group.title + '  /  Lab ' + chapter.number + ' of ' + chapter.group.items.length + ' · ' + chapter.level : chapter.group.title + '  /  Chapter ' + chapter.number;
    byId('chapter-title').textContent = chapter.title;
    byId('summary').textContent = chapter.summary;
    byId('review-date').textContent = 'Reviewed ' + dateLabel(chapter.group.reviewed);
    const sections = lab ? labBody(chapter) : chapter.sections.map(section => {
      const block = element('section', undefined, 'section');
      block.append(element('h2',section.title));
      for (const paragraph of section.paragraphs) block.append(element('p',paragraph));
      if (section.table) block.append(makeTable(section.table, section.title));
      if (section.exercise) {
        const practice = element('aside', undefined, 'practice');
        practice.append(element('h3', 'Try it'), element('p', section.exercise.prompt));
        const answer = element('details');
        answer.append(element('summary', 'Check your reasoning'));
        for (const step of section.exercise.answer) answer.append(element('p', step));
        practice.append(answer);
        block.append(practice);
      }
      if (section.sources?.length) {
        block.append(sourceLinks(section.sources));
      }
      return block;
    });
    if (!lab) sections.unshift(chapterIntroduction(chapter.intro));
    byId('body').replaceChildren(...sections);
    const pages = lab ? chapter.group.items : referenceChapters;
    document.querySelector('book-pager').setPage(chapter.number,pages.length,lab ? 'lab' : 'chapter',
      number => { location.hash = pages[number-1].id; }, () => { location.hash = lab ? 'labs' : 'contents'; });
    if (moveFocus) byId('chapter-title').focus({preventScroll:true});
  }
  window.scrollTo(0,0);
}

async function prepareOffline() {
  const status = byId('offline');
  if (!('serviceWorker' in navigator)) {
    status.textContent = 'Offline download unavailable';
    return;
  }
  status.textContent = 'Preparing offline copy…';
  try {
    const reg = await navigator.serviceWorker.register('./sw.js', {updateViaCache:'none'});
    const worker = reg.installing || reg.waiting || reg.active;
    if (!worker) throw Error('Missing worker');
    await new Promise((resolve,reject) => {
      function changed() {
        if (worker.state === 'activated') resolve();
        if (worker.state === 'redundant') reject(Error('Download interrupted'));
      }
      worker.addEventListener('statechange',changed);
      changed();
    });
    const ready = await new Promise(resolve => {
      const channel = new MessageChannel();
      const finish = result => { clearTimeout(timer); channel.port1.close(); resolve(result); };
      const timer = setTimeout(() => finish(false), 5000);
      channel.port1.onmessage = event => finish(event.data === true);
      worker.postMessage('verify',[channel.port2]);
    });
    status.textContent = ready ? 'Ready offline' : 'Reopen online to finish download';
  } catch {
    status.textContent = 'Reopen online to finish download';
  }
}

async function json(path) {
  const res = await fetch(path);
  if (!res.ok) throw Error('Missing book content');
  return res.json();
}
async function start() {
  const edition = await json('./edition.json');
  groups = await Promise.all(edition.groups.map(async group => ({...group, items:await json('./content/' + group.file)})));
  for (const group of groups) {
    for (const [i, ch] of group.items.entries()) {
      ch.search = (group.title + ' ' + JSON.stringify(ch)).toLowerCase();
      if (!group.track) referenceChapters.push(ch);
      ch.number = group.track ? i + 1 : referenceChapters.length;
      ch.group = group;
      chapters.push(ch);
    }
  }
  const labCount = chapters.length - referenceChapters.length;
  byId('lab-count').textContent = labCount + ' guided labs · ' + groups.filter(g=>g.track).length + ' tools';
  byId('edition').textContent = referenceChapters.length + ' chapters · ' + labCount + ' labs · Updated ' + dateLabel(edition.reviewed);
  byId('query').addEventListener('input',showContents);
  window.addEventListener('hashchange',() => openLocation(true));
  openLocation(false);
}
prepareOffline();
start().catch(() => {
  byId('problem').textContent = 'This copy could not load all its chapters. Open the book online and reload to finish the download.';
  byId('problem').hidden = false;
});
