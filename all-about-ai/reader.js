const portable = window.portableAiBook;
const assetURL = path => portable?.media[path] || path;
const byId = id => document.getElementById(id);
const chapters = [];
let groups = [];
const referenceChapters = [];
const guideChapters = [];
let illustrations = [];
let worked = new Map();
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
  const guidesOnly = location.hash === '#start';
  byId('contents-title').textContent = labsOnly ? 'Hands-on labs' : guidesOnly ? 'Illustrated lessons' : 'Contents';
  byId('guide-door').hidden = labsOnly || guidesOnly;
  byId('guide-note').hidden = !guidesOnly;
  byId('lab-note').hidden = !labsOnly;
  byId('lab-door').hidden = labsOnly || guidesOnly;
  document.querySelector('.front').hidden = labsOnly || guidesOnly;
  let count = 0;
  for (const group of groups) {
    if (labsOnly && !group.track) continue;
    if (guidesOnly && !group.guide) continue;
    if (!labsOnly && !guidesOnly && (group.track || group.guide) && !query.length) continue;
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

function diagnosticTrial(tools, title) {
  const columns = ['Product', 'Mode and date', 'Points', 'Evidence and misses'];
  const wrap = makeTable({columns, rows:tools.map(tool => [tool, '', '', ''])}, title);
  const notice = element('p');
  notice.setAttribute('role','status');
  wrap.querySelectorAll('tbody tr').forEach((row,i) => {
    for (let col = 1; col < columns.length; col++) {
      const control = element(col === 2 ? 'select' : 'textarea');
      control.setAttribute('aria-label', tools[i] + ' · ' + columns[col]);
      if (col === 2) {
        control.add(new Option('',''));
        for (let n=0; n<=5; n++) control.add(new Option(String(n), String(n)));
      } else control.rows = 2;
      const key = 'all-about-ai.diagnostic.' + tools[i] + '.' + col;
      try { control.value = localStorage.getItem(key) || ''; }
      catch { notice.textContent = 'Keep a copy of your results before leaving.'; }
      control.addEventListener(col === 2 ? 'change' : 'input', () => {
        try { localStorage.setItem(key,control.value); }
        catch { notice.textContent = 'This browser could not save the worksheet.'; }
      });
      row.cells[col].append(control);
    }
  });
  wrap.classList.add('diagnostic-sheet');
  wrap.append(notice);
  return wrap;
}

function buildScorecards(table, checks) {
  const cards = element('div', undefined, 'build-cards');
  for (const tool of ['ChatGPT', 'Claude', 'Gemini', 'Grok']) {
    const card = element('details');
    card.append(element('summary', tool + ' scorecard'));
    const notice = element('p');
    notice.setAttribute('role', 'status');
    function remember(control, field) {
      const key = 'all-about-ai.harbor-relay.' + tool + '.' + field;
      try { control.value = localStorage.getItem(key) || ''; }
      catch { notice.textContent = 'These entries will last only while this page is open.'; }
      control.addEventListener(control.tagName === 'SELECT' ? 'change' : 'input', () => {
        try { localStorage.setItem(key, control.value); }
        catch { notice.textContent = 'This browser could not save the card. Copy your results before leaving.'; }
      });
    }
    function picker(values, label, field) {
      const select = element('select');
      select.setAttribute('aria-label', tool + ' · ' + label);
      for (const [value, text] of values) select.add(new Option(text, value));
      remember(select, field);
      return select;
    }
    const run = element('label', 'Mode, model, date and device ');
    const setup = element('input');
    setup.type = 'text';
    remember(setup, 'setup');
    run.append(setup);
    card.append(run);
    const group = element('fieldset');
    group.append(element('legend', 'First-try checks'));
    const outcomes = checks.map((check, i) => {
      const label = check.split(':')[0];
      const control = picker([['','Untested'],['1','Pass'],['0','Fail']], label, 'check-' + i);
      const row = element('label', (i + 1) + '. ' + label);
      row.append(control);
      group.append(row);
      return control;
    });
    card.append(group);
    const grid = makeTable(table, tool);
    const rows = grid.querySelectorAll('tbody tr');
    const total = element('output');
    total.setAttribute('aria-label', tool + ' first-try points');
    function showPoints() {
      const tested = outcomes.filter(input => input.value !== '');
      const passed = tested.filter(input => input.value === '1').length;
      total.textContent = tested.length === checks.length ? passed + ' / ' + checks.length :
        passed + ' passed · ' + (checks.length - tested.length) + ' untested';
    }
    rows.forEach((row, i) => {
      const cells = row.cells;
      const name = cells[0].textContent;
      const points = i === 0 ? total : picker([['','Unrated'],['0','0'],['1','1'],['2','2']], name + ' points', 'rating-' + i);
      const notes = element('textarea');
      notes.rows = 2;
      notes.placeholder = cells[3].textContent;
      notes.setAttribute('aria-label', tool + ' · ' + name + ' notes');
      remember(notes, 'notes-' + i);
      cells[2].replaceChildren(points);
      cells[3].replaceChildren(notes);
    });
    for (const select of outcomes) select.addEventListener('change', showPoints);
    showPoints();
    card.append(grid, notice);
    cards.append(card);
  }
  return cards;
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

function practiceQuestion(question, groupName) {
  const field = element('fieldset', undefined, 'practice-question');
  field.append(element('legend', question.prompt));
  const feedback = element('p');
  feedback.setAttribute('role', 'status');
  for (const [index, choice] of question.choices.entries()) {
    const label = element('label');
    const radio = element('input');
    radio.type = 'radio';
    radio.name = groupName;
    radio.addEventListener('change', () => {
      const result = index === question.correct ? 'Correct. ' : 'Try another mode. ';
      feedback.textContent = result + question.why;
    });
    label.append(radio, document.createTextNode(choice));
    field.append(label);
  }
  field.append(feedback);
  return field;
}

function chapterIntroduction(intro) {
  const block = element('section', undefined, 'chapter-intro');
  block.setAttribute('aria-label', 'Chapter introduction');
  const roles = [
    ['Exchange', intro.exchange],
    ['Microsoft 365', intro.m365],
    ['Personal App', intro.developer]
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

function writeYourOwn(lab, example, supplied) {
  const panel = element('details', undefined, 'write-prompt');
  panel.append(element('summary','Optional · Now write your own'));
  const task = lab.writeYourOwn;
  panel.append(element('p',task.goal), element('p',task.given), element('h3','Checks your prompt should cover'));
  const checks = element('ul');
  for (const test of lab.check) checks.append(element('li',test));
  const label = element('label','Write a prompt in your own words.');
  const draft = element('textarea');
  draft.rows = 5;
  label.append(draft);
  const status = element('p','Use practice facts only. Your draft is saved in this browser.');
  status.setAttribute('role','status');
  const key = 'all-about-ai.prompt-draft.' + lab.id;
  try { draft.value = localStorage.getItem(key) || ''; }
  catch { status.textContent = 'Copy your draft before leaving this page.'; }
  draft.addEventListener('input', () => {
    try { localStorage.setItem(key, draft.value); }
    catch { status.textContent = 'This browser could not save the draft. Copy it before leaving.'; }
  });
  const compare = element('details');
  compare.append(element('summary','Compare with the supplied prompt'), snippet(lab.prompt,'supplied prompt'),element('p',task.compare));
  panel.append(checks,label,status,compare);
  panel.addEventListener('toggle', () => {
    example.hidden = panel.open;
    supplied.hidden = panel.open;
    if (!panel.open) compare.open = false;
  });
  return panel;
}

function labBody(lab) {
  const about = element('section', undefined, 'chapter-intro');
  const roleInfo = element('details', undefined, 'sources');
  roleInfo.append(element('summary', 'Applications for your work'));
  const roles = element('dl', undefined, 'role-list');
  ['Exchange', 'Microsoft 365', 'Personal App'].forEach((role,i) => {
    roles.append(element('dt',role),element('dd',lab.roles[i]));
  });
  roleInfo.append(roles);
  about.append(element('h2','What you’ll use'),element('p',lab.features),roleInfo,
    element('h2','Before you start'),element('p',lab.requires));
  const setup = element('details', undefined, 'sources');
  setup.append(element('summary','How to open this tool'), element('p',lab.comparison ? lab.steps[0].text : lab.group.gettingStarted));
  const setupLink = element('a',lab.group.startLabel);
  setupLink.href = lab.group.startUrl;
  if (!lab.group.startUrl.startsWith('#')) setupLink.target = '_blank';
  setupLink.rel = 'noopener noreferrer';
  setup.append(setupLink);
  about.append(setup);
  if (lab.kit) {
    const link = element('a','Download the practice kit (.zip)','lab-action');
    link.href = assetURL('./' + lab.kit);
    link.download = lab.kit.split('/').pop();
    about.append(link);
  }
  for (const file of lab.caseFiles || []) {
    const details = element('details', undefined, 'step-help');
    details.append(element('summary', 'Open practice file · ' + file));
    details.addEventListener('toggle', async () => {
      if (!details.open || details.dataset.loaded) return;
      details.dataset.loaded = 'yes';
      const path = './practice/exchange-inventory/cases/' + file;
      try {
        let text = portable?.cases?.[path];
        if (text === undefined) {
          const response = await fetch(path);
          if (!response.ok) throw Error('Missing practice file');
          text = await response.text();
        }
        details.append(snippet(text, 'practice file'));
      } catch {
        delete details.dataset.loaded;
        const message = 'Open this file in the practice kit, or close and reopen to try again.';
        if (!details.querySelector('p')) details.append(element('p', message));
      }
    });
    about.append(details);
  }
  const prompt = element('section',undefined,'section');
  prompt.append(element('h2','Your prompt'),element('p',lab.comparison ? 'In a fresh session, paste just this prompt.' : 'Prepare the sample in the walkthrough, then paste this prompt when instructed.'),snippet(lab.prompt,'prompt'));
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
  instructions.append(element('h2','Walkthrough'), stepControls(list, false), list);
  const checks = element('details',undefined,'result-check');
  checks.append(element('summary','Check your result'));
  const answers = element(lab.comparison ? 'ol' : 'ul');
  lab.check.forEach(value => answers.append(element('li',value)));
  checks.append(answers);
  if (lab.comparison) {
    checks.open = true;
    const link = element('a','Open the four-tool scorecards');
    link.href = '#' + lab.comparison;
    checks.append(link);
  }
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
  const example = workedExample(worked.get(lab.id));
  const sections = [about];
  if (lab.writeYourOwn) sections.push(writeYourOwn(lab, example, prompt));
  sections.push(example, prompt, instructions);
  if (lab.sampleApp) {
    const sample = element('section',undefined,'section');
    const title = 'Try the finished example';
    const frame = element('iframe');
    frame.title = title + ' · ' + lab.title;
    frame.setAttribute('sandbox','allow-scripts');
    frame.className = 'app-preview';
    const fileUrl = assetURL('./' + lab.sampleApp);
    // Read through the book's own offline cache before opening the isolated example.
    // A frame with an opaque origin cannot fetch its initial page while offline.
    fetch(fileUrl).then(response => {
      if (!response.ok) throw Error('Missing practice page');
      return response.text();
    }).then(html => { frame.srcdoc = html; }).catch(() => {
      frame.replaceWith(element('p','The example could not open. Save it below, or reopen the book online to finish its download.'));
    });
    const link = element('a','Save example (.html)','lab-action');
    link.href = fileUrl;
    link.download = lab.sampleApp.split('/').pop();
    sample.append(element('h2',title),frame,link);
    sections.push(sample);
  }
  sections.push(finish);
  return sections;
}

function openLocation(moveFocus) {
  const id = location.hash.slice(1);
  const chapter = chapters.find(item => item.id === id);
  byId('index').hidden = Boolean(chapter);
  byId('chapter').hidden = !chapter;
  document.title = chapter ? chapter.title + ' · All About AI' : 'All About AI · Books';
  if (!chapter) {
    const mode = ['start','labs','pictures'].includes(id) ? id : 'contents';
    if (indexMode !== mode) byId('query').value = '';
    indexMode = mode;
    showContents();
    const gallery = mode === 'pictures';
    byId('catalog').hidden = gallery;
    byId('gallery').hidden = !gallery;
    if (gallery) {
      for (const selector of ['.front','#guide-door','#lab-door']) document.querySelector(selector).hidden = true;
      if (!byId('thumbs').childElementCount) drawGallery();
    }
    if (moveFocus) byId(gallery ? 'gallery-title' : 'contents-title').focus({preventScroll:true});
  } else {
    const lab = Boolean(chapter.group.track);
    if (lab) currentTrack = chapter.group.track;
    byId('group-name').textContent = lab ? chapter.group.title + '  /  Lab ' + chapter.number + ' of ' + chapter.group.items.length + ' · ' + chapter.level : chapter.group.title + (chapter.group.guide ? '  /  Lesson ' : '  /  Chapter ') + chapter.number;
    byId('chapter-title').textContent = chapter.title;
    byId('summary').textContent = chapter.summary;
    byId('review-date').textContent = 'Reviewed ' + dateLabel(chapter.group.reviewed);
    const sections = chapter.group.guide ? guideBody(chapter) : lab ? labBody(chapter) : chapter.sections.map((section, sectionIndex) => {
      const block = element('section', undefined, 'section');
      block.append(element('h2',section.title));
      for (const paragraph of section.paragraphs) block.append(element('p',paragraph));
      if (section.trialTools) block.append(diagnosticTrial(section.trialTools, section.title));
      if (section.buildPart === 'prompt') block.append(snippet(chapter.buildSpec.prompt, 'prompt'));
      if (section.buildPart === 'followUp') block.append(snippet(chapter.buildSpec.followUp, 'follow-up'));
      if (section.buildPart === 'scorecard') {
        const list = element('ol', undefined, 'shared-checks');
        for (const check of chapter.buildSpec.check) list.append(element('li', check));
        block.append(list, buildScorecards(section.table, chapter.buildSpec.check));
      } else if (section.table) block.append(makeTable(section.table, section.title));
      if (section.exercise) {
        const practice = element('aside', undefined, 'practice');
        practice.append(element('h3', 'Try it'), element('p', section.exercise.prompt));
        for (const [i, question] of (section.exercise.questions || []).entries()) {
          practice.append(practiceQuestion(question, chapter.id + '-' + sectionIndex + '-' + i));
        }
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
    if (chapter.buildSpec || chapter.relatedLabs) {
      const links = element('nav', undefined, 'quick-links');
      links.setAttribute('aria-label','Related hands-on labs');
      for (const item of chapters.filter(item => item.comparison === chapter.id || chapter.relatedLabs?.includes(item.id))) {
        const label = chapter.relatedLabs ? 'Lab ' + item.number + ' · ' + item.title : item.group.title + ' · Lab ' + item.number;
        const link = element('a', label);
        link.href = '#' + item.id;
        links.append(link);
      }
      sections.push(links);
    }
    if (!lab && !chapter.group.guide) sections.unshift(workedExample(worked.get(chapter.id)),chapterIntroduction(chapter.intro));
    if (!chapter.group.guide) {
      sections.unshift(launchHelp(chapter));
      const figures = chapterPictures(chapter.id);
      sections.splice(2,0,...figures.map(picture));
    }
    if (chapter.catalogSources.length) sections.push(sourceLinks(chapter.catalogSources));
    const terms = glossary(chapter.search);
    if (terms) sections.unshift(terms);
    byId('body').replaceChildren(...sections);
    const pages = lab ? chapter.group.items : chapter.group.guide ? guideChapters : referenceChapters;
    document.querySelector('book-pager').setPage(chapter.number,pages.length,lab ? 'lab' : chapter.group.guide ? 'lesson' : 'chapter',
      number => { location.hash = pages[number-1].id; }, () => { location.hash = lab ? 'labs' : chapter.group.guide ? 'start' : 'contents'; });
    if (moveFocus) byId('chapter-title').focus({preventScroll:true});
  }
  window.scrollTo(0,0);
}

async function prepareOffline() {
  const status = byId('offline');
  if (portable) { status.textContent = 'Offline book'; return; }
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
  if (portable) return portable.json[path];
  const res = await fetch(path);
  if (!res.ok) throw Error('Missing book content');
  return res.json();
}
// Resolve catalog fields before text reaches headings, search, tables or copy buttons.
function fillModelFields(value, catalog, used) {
  if (typeof value === 'string') return value.replace(/\{\{model\.([a-z0-9.-]+)\}\}/g, (_, key) => {
    const field = catalog.values[key];
    if (!field) throw Error('Missing catalog field ' + key);
    used.add(key);
    return field.text;
  });
  if (Array.isArray(value)) return value.map(item=>fillModelFields(item, catalog, used));
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key,item])=>[key,fillModelFields(item,catalog,used)]));
  return value;
}

async function start() {
  const edition = await json('./edition.json');
  const [pictures, examples, catalog] = await Promise.all([json('./content/figures.json'), json('./content/worked.json'), json('./content/models.json')]);
  illustrations = fillModelFields(pictures, catalog, new Set());
  worked = new Map(examples.map(example=>[example.id,fillModelFields(example,catalog,new Set())]));
  groups = await Promise.all(edition.groups.map(async group => {
    const rows = await json('./content/' + group.file);
    const items = rows.map(row => {
      const used = new Set();
      const item = fillModelFields(row,catalog,used);
      item.catalogSources = [...new Set([...used].map(key=>catalog.values[key].source))].map(url=>[new URL(url).hostname + ' · model details',url]);
      return item;
    });
    return {...group,items};
  }));
  for (const group of groups) {
    for (const [i, ch] of group.items.entries()) {
      ch.search = (group.title + ' ' + JSON.stringify(ch) + ' ' + JSON.stringify(worked.get(ch.id) || '')).toLowerCase();
      if (group.guide) guideChapters.push(ch);
      else if (!group.track) referenceChapters.push(ch);
      ch.number = group.track ? i + 1 : group.guide ? guideChapters.length : referenceChapters.length;
      ch.group = group;
      chapters.push(ch);
    }
  }
  const labCount = chapters.length - referenceChapters.length - guideChapters.length;
  byId('lab-count').textContent = labCount + ' guided labs · ' + groups.filter(g=>g.track).length + ' tracks';
  byId('edition').textContent = 'Edition ' + edition.version + ' · ' + referenceChapters.length + ' chapters · ' + labCount + ' labs · ' + guideChapters.length + ' beginner lessons · Updated ' + dateLabel(edition.reviewed);
  byId('query').addEventListener('input',showContents);
  window.addEventListener('hashchange',() => openLocation(true));
  openLocation(false);
}
prepareOffline();
start().catch(() => {
  byId('problem').textContent = 'This copy could not load all its chapters. Open the book online and reload to finish the download.';
  byId('problem').hidden = false;
});
