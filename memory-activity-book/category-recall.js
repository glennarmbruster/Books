'use strict';

const categoryRecallSets = [
  {
    title: 'Three stalls at the market',
    groups: [
      {name: 'fruits', seen: ['Pear', 'Plum'], decoys: ['Peach', 'Mango']},
      {name: 'cheeses', seen: ['Gouda', 'Brie'], decoys: ['Cheddar', 'Feta']},
      {name: 'flowers', seen: ['Tulip', 'Daisy'], decoys: ['Rose', 'Lily']}
    ]
  },
  {
    title: 'The harbor noticeboard',
    groups: [
      {name: 'boats', seen: ['Ferry', 'Tugboat'], decoys: ['Canoe', 'Yacht']},
      {name: 'seabirds', seen: ['Puffin', 'Gull'], decoys: ['Tern', 'Albatross']},
      {name: 'knots', seen: ['Bowline', 'Square knot'], decoys: ['Clove hitch', 'Figure eight']}
    ]
  },
  {
    title: 'The tailor’s window',
    groups: [
      {name: 'fabrics', seen: ['Denim', 'Velvet'], decoys: ['Satin', 'Tweed']},
      {name: 'fasteners', seen: ['Zipper', 'Button'], decoys: ['Snap', 'Buckle']},
      {name: 'hats', seen: ['Beret', 'Fedora'], decoys: ['Bonnet', 'Beanie']}
    ]
  },
  {
    title: 'Backstage at the bandstand',
    groups: [
      {name: 'brass instruments', seen: ['Tuba', 'Trombone'], decoys: ['Trumpet', 'French horn']},
      {name: 'percussion instruments', seen: ['Tambourine', 'Cymbal'], decoys: ['Bongo', 'Triangle']},
      {name: 'string instruments', seen: ['Cello', 'Harp'], decoys: ['Violin', 'Banjo']}
    ]
  },
  {
    title: 'A corner of the community garden',
    groups: [
      {name: 'root vegetables', seen: ['Carrot', 'Radish'], decoys: ['Parsnip', 'Beet']},
      {name: 'garden tools', seen: ['Trowel', 'Hoe'], decoys: ['Rake', 'Pruning shears']},
      {name: 'butterflies', seen: ['Monarch', 'Swallowtail'], decoys: ['Painted lady', 'Red admiral']}
    ]
  },
  {
    title: 'The hotel breakfast tray',
    groups: [
      {name: 'drinks', seen: ['Coffee', 'Orange juice'], decoys: ['Tea', 'Milk']},
      {name: 'pastries', seen: ['Croissant', 'Danish'], decoys: ['Turnover', 'Éclair']},
      {name: 'utensils', seen: ['Teaspoon', 'Butter knife'], decoys: ['Fork', 'Ladle']}
    ]
  },
  {
    title: 'The model railroad',
    groups: [
      {name: 'railroad cars', seen: ['Boxcar', 'Caboose'], decoys: ['Flatcar', 'Dining car']},
      {name: 'farm animals', seen: ['Goat', 'Cow'], decoys: ['Donkey', 'Pig']},
      {name: 'buildings', seen: ['Barn', 'Church'], decoys: ['Schoolhouse', 'Windmill']}
    ]
  },
  {
    title: 'Rehearsal at the castle',
    groups: [
      {name: 'chess pieces', seen: ['Bishop', 'Knight'], decoys: ['Rook', 'Pawn']},
      {name: 'gems', seen: ['Ruby', 'Emerald'], decoys: ['Sapphire', 'Opal']},
      {name: 'dances', seen: ['Waltz', 'Minuet'], decoys: ['Polka', 'Foxtrot']}
    ]
  },
  {
    title: 'A message from the weather desk',
    groups: [
      {name: 'cloud types', seen: ['Cirrus', 'Cumulus'], decoys: ['Stratus', 'Cumulonimbus']},
      {name: 'forms of precipitation', seen: ['Hail', 'Drizzle'], decoys: ['Snow', 'Sleet']},
      {name: 'compass directions', seen: ['North', 'Southwest'], decoys: ['West', 'Southeast']}
    ]
  },
  {
    title: 'One afternoon at the ballpark',
    groups: [
      {name: 'baseball positions', seen: ['Catcher', 'Shortstop'], decoys: ['Pitcher', 'Left fielder']},
      {name: 'ballpark snacks', seen: ['Pretzel', 'Peanuts'], decoys: ['Popcorn', 'Nachos']},
      {name: 'uniform items', seen: ['Jersey', 'Cap'], decoys: ['Cleats', 'Belt']}
    ]
  },
  {
    title: 'An illustrator’s desk',
    groups: [
      {name: 'colors', seen: ['Scarlet', 'Turquoise'], decoys: ['Indigo', 'Beige']},
      {name: 'geometric shapes', seen: ['Oval', 'Hexagon'], decoys: ['Square', 'Triangle']},
      {name: 'drawing tools', seen: ['Chalk', 'Pencil'], decoys: ['Marker', 'Crayon']}
    ]
  },
  {
    title: 'A sign at the tide pool',
    groups: [
      {name: 'crustaceans', seen: ['Crab', 'Shrimp'], decoys: ['Lobster', 'Barnacle']},
      {name: 'mollusks', seen: ['Mussel', 'Octopus'], decoys: ['Clam', 'Squid']},
      {name: 'marine mammals', seen: ['Dolphin', 'Seal'], decoys: ['Walrus', 'Porpoise']}
    ]
  },
  {
    title: 'Lost and found at the bookshop',
    groups: [
      {name: 'literary genres', seen: ['Mystery', 'Fantasy'], decoys: ['Romance', 'Horror']},
      {name: 'writing implements', seen: ['Fountain pen', 'Quill'], decoys: ['Ballpoint pen', 'Pencil']},
      {name: 'eyewear', seen: ['Sunglasses', 'Monocle'], decoys: ['Reading glasses', 'Goggles']}
    ]
  },
  {
    title: 'The trailhead bulletin',
    groups: [
      {name: 'trees', seen: ['Birch', 'Cedar', 'Willow'], decoys: ['Oak', 'Maple']},
      {name: 'woodland mammals', seen: ['Fox', 'Badger'], decoys: ['Deer', 'Squirrel']},
      {name: 'camping gear', seen: ['Tent', 'Sleeping bag'], decoys: ['Camp stove', 'Groundsheet']}
    ]
  },
  {
    title: 'Tickets to the county fair',
    groups: [
      {name: 'fairground rides', seen: ['Carousel', 'Ferris wheel'], decoys: ['Roller coaster', 'Bumper cars']},
      {name: 'sweets', seen: ['Fudge', 'Cotton candy', 'Toffee'], decoys: ['Taffy', 'Caramel apple']},
      {name: 'circus performers', seen: ['Juggler', 'Trapeze artist'], decoys: ['Clown', 'Tightrope walker']}
    ]
  },
  {
    title: 'Postcards from the night train',
    groups: [
      {name: 'German cities', seen: ['Hamburg', 'Munich', 'Bremen'], decoys: ['Berlin', 'Dresden']},
      {name: 'Swiss cities', seen: ['Zurich', 'Geneva'], decoys: ['Basel', 'Bern']},
      {name: 'Austrian cities', seen: ['Vienna', 'Innsbruck'], decoys: ['Salzburg', 'Graz']}
    ]
  },
  {
    title: 'The handwritten supper menu',
    groups: [
      {name: 'pasta shapes', seen: ['Penne', 'Fusilli'], decoys: ['Farfalle', 'Rigatoni']},
      {name: 'culinary herbs', seen: ['Basil', 'Thyme', 'Parsley'], decoys: ['Sage', 'Dill']},
      {name: 'desserts', seen: ['Tiramisu', 'Sorbet'], decoys: ['Cheesecake', 'Custard tart']}
    ]
  },
  {
    title: 'Three jars at the candy counter',
    groups: [
      {name: 'nuts', seen: ['Pistachio', 'Cashew', 'Almond'], decoys: ['Walnut', 'Pecan']},
      {name: 'dried fruits', seen: ['Raisin', 'Prune'], decoys: ['Dried apricot', 'Dried fig']},
      {name: 'candies', seen: ['Lollipop', 'Jelly bean'], decoys: ['Gumdrop', 'Candy cane']}
    ]
  },
  {
    title: 'Bicycle shop inventory',
    groups: [
      {name: 'bicycle parts', seen: ['Pedal', 'Saddle', 'Spoke'], decoys: ['Handlebar', 'Crank']},
      {name: 'hand tools', seen: ['Wrench', 'Pliers'], decoys: ['Screwdriver', 'Hacksaw']},
      {name: 'units of length', seen: ['Inch', 'Millimeter'], decoys: ['Foot', 'Centimeter']}
    ]
  },
  {
    title: 'A night at the planetarium',
    groups: [
      {name: 'planets', seen: ['Venus', 'Mars', 'Neptune'], decoys: ['Jupiter', 'Saturn']},
      {name: 'constellations', seen: ['Orion', 'Cassiopeia'], decoys: ['Draco', 'Leo']},
      {name: 'phases of the moon', seen: ['First quarter', 'Full moon'], decoys: ['New moon', 'Last quarter']}
    ]
  },
  {
    title: 'The watchmaker’s drawers',
    groups: [
      {name: 'metals', seen: ['Brass', 'Silver', 'Steel'], decoys: ['Copper', 'Gold']},
      {name: 'timepieces', seen: ['Sundial', 'Hourglass'], decoys: ['Stopwatch', 'Pocket watch']},
      {name: 'units of time', seen: ['Second', 'Decade'], decoys: ['Minute', 'Century']}
    ]
  },
  {
    title: 'Notes from the wildlife hide',
    groups: [
      {name: 'big cats', seen: ['Tiger', 'Jaguar'], decoys: ['Lion', 'Leopard']},
      {name: 'primates', seen: ['Gorilla', 'Baboon', 'Lemur'], decoys: ['Chimpanzee', 'Gibbon']},
      {name: 'reptiles', seen: ['Iguana', 'Cobra'], decoys: ['Gecko', 'Tortoise']}
    ]
  },
  {
    title: 'Boxes at the quilt show',
    groups: [
      {name: 'stitches', seen: ['Running stitch', 'Backstitch', 'Cross-stitch'], decoys: ['Blanket stitch', 'Chain stitch']},
      {name: 'fabric patterns', seen: ['Plaid', 'Polka dots'], decoys: ['Stripes', 'Houndstooth']},
      {name: 'sewing tools', seen: ['Thimble', 'Seam ripper'], decoys: ['Needle', 'Embroidery hoop']}
    ]
  },
  {
    title: 'The theater program',
    groups: [
      {name: 'voice types', seen: ['Soprano', 'Tenor', 'Bass'], decoys: ['Baritone', 'Contralto']},
      {name: 'theater jobs', seen: ['Usher', 'Stage manager'], decoys: ['Director', 'Costume designer']},
      {name: 'theatrical genres', seen: ['Tragedy', 'Farce'], decoys: ['Comedy', 'Melodrama']}
    ]
  },
  {
    title: 'Game night on the upper deck',
    groups: [
      {name: 'card games', seen: ['Rummy', 'Bridge', 'Hearts'], decoys: ['Spades', 'Canasta']},
      {name: 'board games', seen: ['Checkers', 'Backgammon'], decoys: ['Chess', 'Reversi']},
      {name: 'pencil puzzles', seen: ['Crossword', 'Sudoku'], decoys: ['Word search', 'Cryptogram']}
    ]
  }
];
