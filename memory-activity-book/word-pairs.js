'use strict';

// Keep this order so saved progress follows each set.
const wordPairSets = [
  {
    title: 'The midnight crossing',
    pairs: [['Anchor', 'Lemon'], ['Ticket', 'Velvet'], ['Porthole', 'Button'], ['Suitcase', 'Feather']]
  },
  {
    title: 'Before the matinee',
    pairs: [['Curtain', 'Porcupine'], ['Balcony', 'Muffin'], ['Spotlight', 'Daisy'], ['Trumpet', 'Mitten']]
  },
  {
    title: 'The greenhouse delivery',
    pairs: [['Cactus', 'Crown'], ['Trowel', 'Peppermint'], ['Orchid', 'Sandal'], ['Watering can', 'Marble']]
  },
  {
    title: 'An early tee time',
    pairs: [['Putter', 'Apricot'], ['Flag', 'Thimble'], ['Glove', 'Acorn'], ['Visor', 'Pickle']]
  },
  {
    title: 'The red-eye special',
    pairs: [['Runway', 'Zipper'], ['Boarding pass', 'Peach'], ['Headset', 'Antler'], ['Tray table', 'Seashell']]
  },
  {
    title: 'At the county fair',
    pairs: [['Ferris wheel', 'Wafer'], ['Carousel', 'Tassel'], ['Ribbon', 'Walrus'], ['Corn dog', 'Necklace']]
  },
  {
    title: 'A quiet print shop',
    pairs: [['Ink', 'Toffee'], ['Paper', 'Badger'], ['Stapler', 'Mango'], ['Envelope', 'Pebble'], ['Stamp', 'Pancake']]
  },
  {
    title: 'Lanterns after dusk',
    pairs: [['Wick', 'Blueberry'], ['Flame', 'Brooch'], ['Lantern', 'Pretzel'], ['Matchbox', 'Kitten']]
  },
  {
    title: 'Saturday in the workshop',
    pairs: [['Hammer', 'Macaroon'], ['Chisel', 'Locket'], ['Vise', 'Sponge'], ['Pliers', 'Turnip'], ['Mallet', 'Scarf']]
  },
  {
    title: 'The afternoon rehearsal',
    pairs: [['Cello', 'Onion'], ['Flute', 'Slipper'], ['Harp', 'Spoon'], ['Banjo', 'Tulip'], ['Drum', 'Peacock']]
  },
  {
    title: 'A table by the window',
    pairs: [['Menu', 'Pinecone'], ['Napkin', 'Lobster'], ['Goblet', 'Ruler'], ['Platter', 'Skateboard']]
  },
  {
    title: 'Tracks at sunrise',
    pairs: [['Boot', 'Pearl'], ['Paw print', 'Bagel'], ['Hoof', 'Whisk'], ['Sled', 'Cupcake'], ['Snowshoe', 'Parrot']]
  },
  {
    title: 'The tiny tailor',
    pairs: [['Needle', 'Walnut'], ['Spool', 'Dragonfly'], ['Cuff', 'Radish'], ['Lapel', 'Seahorse'], ['Buckle', 'Crayon']]
  },
  {
    title: 'Opening day',
    pairs: [['Dugout', 'Biscuit'], ['Pitcher’s mound', 'Polka dot'], ['Cap', 'Beetle'], ['Scorecard', 'Hammock'], ['Bat', 'Earring'], ['Cleat', 'Tadpole']]
  },
  {
    title: 'Up in the bell tower',
    pairs: [['Rope', 'Pretzel stick'], ['Bell', 'Jellybean'], ['Ladder', 'Clam'], ['Clock', 'Pineapple']]
  },
  {
    title: 'The fossil drawer',
    pairs: [['Shell', 'Crumpet'], ['Fern', 'Chandelier'], ['Tooth', 'Lemonade'], ['Bone', 'Apron'], ['Footprint', 'Magnet']]
  },
  {
    title: 'First light at the marina',
    pairs: [['Rudder', 'Tuba'], ['Buoy', 'Pudding'], ['Mast', 'Peanut'], ['Oar', 'Butterfly'], ['Sail', 'Bangle'], ['Winch', 'Sandwich']]
  },
  {
    title: 'The night shift at the bakery',
    pairs: [['Oven', 'Flamingo'], ['Rolling pin', 'Satchel'], ['Bun', 'Horseshoe'], ['Loaf', 'Velcro strip'], ['Flour', 'Windmill']]
  },
  {
    title: 'High above the picnic',
    pairs: [['Kite', 'Teacup'], ['Basket', 'Corkscrew'], ['Blanket', 'Pencil'], ['Thermos', 'Robin'], ['Lid', 'Poppy seed'], ['Sunhat', 'Mushroom']]
  },
  {
    title: 'An hour at the museum',
    pairs: [['Bust', 'Marmalade'], ['Canvas', 'Goldfish'], ['Frame', 'Carrot'], ['Pedestal', 'Yo-yo']]
  },
  {
    title: 'Down at the allotment',
    pairs: [['Gate', 'Waffle'], ['Hoe', 'Pelican'], ['Wheelbarrow', 'Dice'], ['Radish leaf', 'Bow tie'], ['Hose', 'Tambourine']]
  },
  {
    title: 'A detour through town',
    pairs: [['Crosswalk', 'Peapod'], ['Bus stop', 'Tulip bulb'], ['Curb', 'Macaw'], ['Parking meter', 'Sundae'], ['Cone', 'Bowler hat'], ['Manhole', 'Sardine']]
  },
  {
    title: 'The travelling clockmaker',
    pairs: [['Gear', 'Raspberry'], ['Dial', 'Waxwing'], ['Pendulum', 'Cracker'], ['Spring', 'Broom'], ['Watch', 'Lilac']]
  },
  {
    title: 'In the photographer’s case',
    pairs: [['Lens', 'Cupcake liner'], ['Tripod', 'Marmot'], ['Flash', 'Clothespin'], ['Film', 'Windsock'], ['Strap', 'Grapefruit'], ['Filter', 'Sloth']]
  },
  {
    title: 'The last hand on deck',
    pairs: [['Joker', 'Saffron'], ['Diamond', 'Pocketknife'], ['Spade', 'Seagull'], ['Heart', 'Sugar cube'], ['Club', 'Sequin'], ['Ace', 'Tangerine']]
  }
];
