(() => {
  const shelf = document.querySelector('#shelf');
  const menu = document.querySelector('#shelf-menu');
  const panel = document.querySelector('#order-panel');
  const status = document.querySelector('#order-help');
  const key = 'books.shelf.order.v1';
  const cards = Array.from(shelf.children);
  const order = () => Array.from(shelf.children, card => card.dataset.book);
  const instruction = 'Tap a cover, then tap the position where you want it.';
  let previous, selected;

  function restore(ids) {
    const remaining = new Map(cards.map(card => [card.dataset.book, card]));
    for (const id of ids) {
      if (remaining.has(id)) shelf.append(remaining.get(id));
      remaining.delete(id);
    }
    shelf.append(...remaining.values());
  }

  try {
    const saved = JSON.parse(localStorage.getItem(key));
    if (Array.isArray(saved)) restore(saved);
  } catch { /* Use the printed shelf order when device storage is unavailable. */ }

  function refresh() {
    Array.from(shelf.children).forEach((card, index) => {
      const name = card.querySelector('h2').textContent;
      const button = card.querySelector('.pick-position');
      button.setAttribute('aria-label', name + ', position ' + (index + 1));
      button.setAttribute('aria-pressed', String(card === selected));
    });
  }

  const picks = new Map();
  for (const card of cards) {
    const pick = document.createElement('button');
    pick.type = 'button';
    pick.className = 'pick-position';
    picks.set(card, pick);
    pick.onclick = () => {
      if (!selected) {
        selected = card;
        status.textContent = 'Moving ' + card.querySelector('h2').textContent + '. Tap its new position.';
      } else {
        const moved = selected;
        if (moved !== card) {
          const positions = order();
          if (positions.indexOf(moved.dataset.book) < positions.indexOf(card.dataset.book)) card.after(moved);
          else card.before(moved);
          status.textContent = moved.querySelector('h2').textContent + ' moved to position ' + (order().indexOf(moved.dataset.book) + 1) + '. ' + instruction;
        } else status.textContent = instruction;
        selected = null;
        moved.querySelector('.pick-position').focus({preventScroll:true});
      }
      refresh();
    };
  }

  function arrange(active) {
    selected = null;
    panel.hidden = !active;
    shelf.classList.toggle('arranging', active);
    menu.open = false;
    menu.hidden = active;
    document.querySelector('#downloads').hidden = active;
    for (const [card, pick] of picks) {
      card.querySelector('.cover').inert = active;
      if (active) card.append(pick);
      else pick.remove();
    }
    if (active) {
      previous = order();
      status.textContent = instruction;
      refresh();
      shelf.querySelector('.pick-position').focus({preventScroll:true});
    } else menu.querySelector('summary').focus({preventScroll:true});
  }

  document.querySelector('#arrange').onclick = () => arrange(true);
  document.querySelector('#save-order').onclick = () => {
    try { localStorage.setItem(key, JSON.stringify(order())); }
    catch { status.textContent = 'This device could not save the order. Try again or tap Cancel.'; return; }
    arrange(false);
  };
  document.querySelector('#cancel-order').onclick = () => { restore(previous); arrange(false); };
})();
