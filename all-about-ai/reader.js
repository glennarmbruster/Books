const byId = id => document.getElementById(id);
const chapters = [];
let groups = [];
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
  let count = 0;
  for (const group of groups) {
    const found = group.items.filter(ch => query.every(term => ch.search.includes(term)));
    if (!found.length) continue;
    const block = element('section', undefined, 'group');
    block.append(element('h3', group.title, 'group-heading'));
    const list = element('ol');
    for (const chapter of found) {
      const row = element('li');
      const link = element('a', undefined, 'entry');
      link.href = '#' + chapter.id;
      link.append(element('span', String(chapter.number).padStart(2,'0'), 'num'), element('span', chapter.title));
      row.append(link);
      list.append(row);
    }
    count += found.length;
    block.append(list);
    result.append(block);
  }
  byId('groups').replaceChildren(result);
  byId('matches').textContent = query.length ? (count ? count + (count === 1 ? ' chapter matches.' : ' chapters match.') : 'No chapters match. Try a model name, tool or shorter phrase.') : '';
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

function openLocation(moveFocus) {
  const id = location.hash.slice(1);
  const chapter = chapters.find(item => item.id === id);
  byId('index').hidden = Boolean(chapter);
  byId('chapter').hidden = !chapter;
  document.title = chapter ? chapter.title + ' · All About AI' : 'All About AI · Books';
  if (!chapter) {
    showContents();
    if (moveFocus) byId('contents-title').focus({preventScroll:true});
  } else {
    byId('group-name').textContent = chapter.group.title + '  /  Chapter ' + chapter.number;
    byId('chapter-title').textContent = chapter.title;
    byId('summary').textContent = chapter.summary;
    byId('review-date').textContent = 'Reviewed ' + dateLabel(chapter.group.reviewed);
    const sections = chapter.sections.map(section => {
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
    byId('body').replaceChildren(chapterIntroduction(chapter.intro), ...sections);
    document.querySelector('book-pager').setPage(chapter.number,chapters.length,'chapter',
      number => { location.hash = chapters[number-1].id; }, () => { location.hash = 'contents'; });
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
    for (const ch of group.items) {
      ch.search = [group.title,ch.title,ch.summary,ch.intro.what,ch.intro.features,ch.intro.exchange,ch.intro.m365,ch.intro.developer,...ch.sections.flatMap(s => [s.title,...s.paragraphs,...(s.table?.rows.flat() || []), s.exercise?.prompt || '', ...(s.exercise?.answer || [])])].join(' ').toLowerCase();
      ch.number = chapters.length + 1;
      ch.group = group;
      chapters.push(ch);
    }
  }
  byId('edition').textContent = chapters.length + ' chapters  ·  Updated ' + dateLabel(edition.reviewed);
  byId('query').addEventListener('input',showContents);
  window.addEventListener('hashchange',() => openLocation(true));
  openLocation(false);
}
prepareOffline();
start().catch(() => {
  byId('problem').textContent = 'This copy could not load all its chapters. Open the book online and reload to finish the download.';
  byId('problem').hidden = false;
});
