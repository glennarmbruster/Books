'use strict';
const activityTypes = ['Picture pairs', 'In order', 'The missing object', 'Map memory', 'Story recall'];
// Each numbered outing has a fixed collection. Keep the order stable for shared play.
const outings = [
  ['At the harbor','⚓ Anchor','🛟 Life ring','🪢 Rope','🐚 Shell','🧭 Compass','🐟 Fish','🛶 Canoe','🔔 Bell','🪣 Bucket'],
  ['The market basket','🍋 Lemon','🧀 Cheese','🥖 Baguette','🍐 Pear','🧅 Onion','🥕 Carrot','🥨 Pretzel','🍒 Cherries','🍯 Honey'],
  ['Under the big top','🎪 Tent','🎟️ Ticket','🎈 Balloon','🥁 Drum','🤡 Clown','🎺 Trumpet','🎩 Top hat','🍿 Popcorn','🚲 Bicycle'],
  ['A day in the garden','🌷 Tulip','🐌 Snail','🪴 Pot','🦋 Butterfly','🐞 Ladybug','🌱 Seedling','🧤 Gloves','🌻 Sunflower','🐝 Bee'],
  ['The station platform','🕰️ Clock','🧳 Suitcase','📰 Newspaper','🪙 Coin','☂️ Umbrella','🚂 Engine','🗺️ Map','🧣 Scarf','🛤️ Tracks'],
  ['The music room','🎸 Guitar','🎤 Microphone','🎻 Violin','🪇 Maracas','🪈 Flute','🎷 Saxophone','🪕 Banjo','🎹 Keyboard','🪗 Accordion'],
  ['The potting shed','🪜 Ladder','🔑 Key','🔨 Hammer','🪚 Saw','🔦 Torch','🧹 Broom','🪛 Screwdriver','🧲 Magnet','🔒 Lock'],
  ['On the beach','🪁 Kite','🦀 Crab','🕶️ Sunglasses','🩴 Sandal','🏐 Volleyball','⭐ Star','🪸 Coral','🪨 Pebble','⛱️ Parasol'],
  ['A baker’s morning','🥣 Bowl','🥄 Spoon','🥐 Croissant','🥚 Egg','🧈 Butter','🥛 Milk','🧇 Waffle','🍞 Loaf','🍪 Cookie'],
  ['Mountain camp','⛺ Tent','🎒 Backpack','🧦 Socks','🥾 Boot','🪵 Log','🔥 Campfire','🌲 Pine','🔭 Telescope','🛷 Sled'],
  ['The art table','🎨 Palette','🖌️ Brush','✂️ Scissors','✏️ Pencil','🧵 Thread','📏 Ruler','🖍️ Crayon','🖼️ Frame','📌 Pushpin'],
  ['A night at the theater','🎭 Masks','🌹 Rose','🕯️ Candle','🎬 Clapperboard','👑 Crown','🎀 Ribbon','💎 Jewel','🪭 Fan','🔮 Crystal ball'],
  ...extraOutings
];
function shuffle(items, seed) {
  const result = [...items];
  let n = seed >>> 0;
  for (let i = result.length - 1; i > 0; i--) {
    n = (Math.imul(n, 1664525) + 1013904223) >>> 0;
    const j = Math.floor(n / 4294967296 * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
function activity(number) {
  const kind = (number - 1) % 5;
  const round = Math.floor((number - 1) / 5);
  const seed = 7919 * number;
  const [setting, ...objects] = outings[round];
  const pool = shuffle(objects, seed);
  // Keep the first edition intact; later outings cycle through four difficulty levels.
  const level = round < 12 ? Math.floor(round / 4) : (round - 12) % 4;
  const base = {number, kind, title:setting, seed};
  if (kind === 4) {
    const story = window.MEMORY_STORIES[round];
    return {...base, title:story.title, story};
  }
  if (kind === 3) {
    const cells = shuffle(Array.from({length:16}, (_, i) => i),seed+31).slice(0,3+level);
    return {...base, cells};
  }
  const count = [4,3,5][kind] + level;
  const items = pool.slice(0,count);
  if (kind === 0) return {...base, deck:shuffle([...items,...items],seed+241)};
  const choices = shuffle(pool.slice(0,count+2),seed+191);
  if (kind === 1) return {...base, items, choices};
  return {...base, items, choices, missing:items[seed % count]};
}
