// Keep the same editors and export controls in both editions.
(() => {
  if (!location.hash) history.replaceState(null, '', '#studio');
  const form = document.querySelector('#settings');
  const panels = [...form.children].filter(node => node.tagName === 'FIELDSET');
  const tools = document.createElement('div');
  tools.className = 'tool-picker';
  tools.setAttribute('role', 'group');
  tools.setAttribute('aria-label', 'Studio tools');
  const buttons = panels.map((panel, index) => {
    const button = document.createElement('button');
    panel.id = 'desktop-panel-' + index;
    button.type = 'button';
    button.textContent = panel.querySelector('legend').textContent;
    button.setAttribute('aria-controls', panel.id);
    button.onclick = () => select(index);
    tools.append(button);
    return button;
  });
  function select(index) {
    panels.forEach((panel, i) => {
      panel.hidden = i !== index;
      buttons[i].setAttribute('aria-pressed', String(i === index));
    });
    form.scrollTop = 0;
  }
  form.prepend(tools);
  select(0);

  const proof = document.querySelector('.proof');
  const inspector = document.createElement('aside');
  inspector.className = 'inspector';
  inspector.setAttribute('aria-label', 'Object and export controls');
  const heading = document.createElement('h2');
  heading.textContent = 'Object controls';
  inspector.append(heading, proof.querySelector('.arrange'), proof.querySelector('.output'), document.querySelector('#studio-message'));
  proof.after(inspector);

  const keyboardSave = /Mac/.test(navigator.platform) ? '⌘S' : 'Ctrl+S';
  document.querySelector('#save-open').title = 'Save to my workshop (' + keyboardSave + ')';
  document.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 's' &&
        !document.querySelector('#studio').hidden && !document.querySelector('dialog[open]')) {
      event.preventDefault();
      document.querySelector('#save-open').click();
    }
  });
})();
