// Collection memberships let one illustration appear in several themed pickers.
// Existing artwork keeps its original ID in saved designs and export credits.
(() => {
  'use strict';
  const previous = window.BenchCatalog;
  const items = previous.items.slice();
  const byId = new Map(items.map(item => [item.id, item]));
  const aliases = new Map();
  const outlines = new Map();

  for (const item of items) {
    if (item.category === 'Baseball & softball') {
      item.category = 'Sports';
      item.sport = 'Baseball & Softball';
    }
  }

  function addArt(category, rows, sport = '') {
    for (const [id, label, source, keywords = ''] of rows) {
      let item = byId.get(source);
      if (!item) {
        if (!/^M[ .+\d-]/.test(source)) throw Error('Unknown collection artwork: ' + source);
        item = {id, label, category, sport, keywords};
        items.push(item);
        byId.set(id, item);
        outlines.set(id, source);
      }
      aliases.set(id, item.id);
      (item.collections ||= []).push({category, sport, label, keywords});
    }
  }

  function path(id) {
    if (!outlines.has(id)) return previous.path(id);
    const outline = outlines.get(id);
    if (typeof outline !== 'string') return outline;
    const segments = Array.from(outline.matchAll(/([MLCZ])([^MLCZ]*)/g), ([, op, coordinates]) => {
      const values = coordinates.trim();
      return values ? [op, ...values.split(/[\s,]+/).map(Number)] : [op];
    });
    outlines.set(id, segments);
    return segments;
  }

  const finishing = {
    tag: ['Loop the actual strap through a paper proof and pencil in the area it covers. Keep lettering outside that mark.', 'The strap turns freely and leaves the text visible.'],
    keyfob: ['Thread the intended split ring through a scrap cut to the final thickness. Adjust the hole before making the face.', 'The ring clears the artwork when it swings across the face.'],
    ornament: ['Hang a full-size paper proof with the intended ribbon and adjust the design with the knot in place.', 'The hanging piece faces forward and the ribbon clears its artwork.'],
    marker: ['Stand the paper proof at the intended depth and mark the soil line before placing the lettering.', 'The whole label can be read above the soil.'],
    bookmark: ['Slip a paper sample into the closed book to check its length and how far the ribbon will project.', 'The finished face and edges slide smoothly against paper.'],
    magnet: ['Place the paper shape on the board, then test the chosen backing on a finished sample.', 'The mounted sample stays in position and can be lifted by an edge.'],
    coaster: ['Trace the foot of the cup on a paper proof. Use flat decoration anywhere the cup bears on the face.', 'The cup sits level and the finished piece rests flat.'],
    sign: ['Set a paper proof in the actual stand or frame. Mark the lip and move text into the exposed area.', 'A reader can see the complete message from the intended location.'],
    plate: ['Lay a print at actual size over the mounting spot. Check both edges and the visible height before cutting.', 'The plate fits its holder with clearance at the corners.'],
    label: ['Tape a paper sample to the intended surface and try it through one normal use before choosing the final stock.', 'Edges clear neighboring parts and the type reads at actual size.']
  };

  function addProjects(category, palette, rows, sport = '') {
    for (const [id, title, base, width, height, hole, name, subtitle, motif, summary, start, make, check] of rows) {
      const [finish, fit] = finishing[base.startsWith('ornament-') ? 'ornament' : base];
      window.BenchGuide.projects.push({
        id, title, category, sport, base, size: [width, height, hole],
        exampleName: name, exampleMotif: motif,
        exampleLayout: {
          subtitle, nameFont: palette.font, ink: palette.ink, accent: palette.accent,
          paper: palette.paper, motifLines: 'off'
        },
        summary, steps: [start, make, finish], checks: [check, fit]
      });
    }
  }

  // A project can be registered before the artwork used by its example.
  function finish() {
    for (const project of window.BenchGuide.projects) {
      if (aliases.has(project.exampleMotif)) project.exampleMotif = aliases.get(project.exampleMotif);
    }
    window.BenchCatalog = Object.freeze({items, path});
  }

  window.BenchCollections = {addArt, addProjects, finish};
})();
