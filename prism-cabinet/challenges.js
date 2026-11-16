const puzzles = [
  {
    "id": 1,
    "title": "The stampmaker’s parcel",
    "level": "Medium",
    "intro": "Six stamps are printed on a flat box pattern. Fold along the shared edges until the stamps face outward.",
    "questions": [
      "Which set of three stamps can meet at a single corner?"
    ],
    "hints": [
      "Hold Sun still as the bottom of the box. Fold its four neighbors up.",
      "The far-right Rain face becomes the lid. At a corner, you need one face from each of the three opposite pairs."
    ],
    "answer": "Moon, Wave and Rain.",
    "why": "Leaf faces Wave, Moon faces Star, and Sun faces Rain. Each of the other options contains an opposite pair. Moon and Wave meet along one wall edge, with Rain touching both at the top.",
    "figure": "visual-net.svg",
    "alt": "A horizontal strip reads Leaf, Sun, Wave, Rain from left to right. Moon is directly above Sun and Star directly below Sun.",
    "choices": [
      "Leaf, Wave and Sun",
      "Star, Rain and Moon",
      "Moon, Wave and Rain",
      "Sun, Rain and Leaf"
    ],
    "kind": "Visual reasoning"
  },
  {
    "id": 2,
    "title": "The engraver’s seals",
    "level": "Easy",
    "intro": "An engraver set two round copper seals into different patterns. At the original viewing size, compare only the two copper centers.",
    "questions": [
      "Which seal has the larger diameter: A, B, or neither?"
    ],
    "hints": [
      "Ignore the total width of each pattern. Look only from one copper edge to the other.",
      "Imagine two horizontal guides, one touching the very top of A and one touching its base. Where would they meet B?"
    ],
    "answer": "The two copper seals have the same diameter.",
    "why": "Both copper discs measure 50 drawing units across. Small neighboring discs can make A look relatively large; the larger neighbors can make B look small. Removing the neighbors lets one pair of tangent guides touch both centers at their outer edges.",
    "figure": "seals-challenge.svg",
    "alt": "Two copper discs labeled A and B, each surrounded by six navy discs. A has small neighbors and B has large neighbors.",
    "reveal": "seals-proof.svg",
    "revealAlt": "Both copper discs sit between the same two horizontal tangent lines after their neighboring discs have been removed.",
    "kind": "Optical illusions",
    "choices": [
      "A",
      "B",
      "Neither"
    ]
  },
  {
    "id": 3,
    "title": "The bloom with a dry stem",
    "level": "Easy",
    "intro": "In a six-second film, fourteen loose paper petals fly up from a tabletop and fasten themselves to a bare stem. The filmmaker used one continuous take, an ordinary camera and real paper. No strings, magnets or adhesive were involved. Watch the corner of the frame: a kitchen timer goes from 11:07 to 11:08 to 11:09. It is a countdown timer.",
    "questions": [
      "What did the filmmaker actually do in front of the camera?",
      "Why is the timer better evidence than the flying petals?"
    ],
    "hints": [
      "The numbers are easy to overlook if you watch only the flower.",
      "During the event itself the timer could only count down. Which way are you seeing time pass?"
    ],
    "answer": "Pull the petals off a paper flower, let them fall, then show the take backward.",
    "why": "The petals can simply be tucked into slits before filming. As they drop, the timer counts from 11:09 toward 11:07. Playing the take backward reverses the drops and makes a working countdown timer appear to gain seconds. The timer gives an independent check on the trick.",
    "kind": "Lateral thinking"
  },
  {
    "id": 4,
    "title": "Five figures from the kiln",
    "level": "Easy",
    "intro": "A potter lifted five different ornaments out of a kiln, one at a time: a mask, a crown, a bird, a lantern and a fish. A smudged photograph shows only the empty shelf. Her assistant remembers three things.",
    "questions": [
      "In what order did the potter remove the five figures?"
    ],
    "hints": [
      "Put down five empty spaces. There are only two possible pairs of positions for the fish and the mask.",
      "If the fish were first, where could the lantern go?"
    ],
    "answer": "Lantern, fish, crown, bird, mask.",
    "why": "With two ornaments between fish and mask, the pair must occupy 1 and 4 or 2 and 5. The lantern was earlier than the fish, so fish must be second and mask fifth. Only the lantern can take first, leaving the middle pair for crown then bird.",
    "clues": [
      "She lifted the lantern before the fish.",
      "Exactly two ornaments came between the fish and the mask, in that order.",
      "She lifted the bird immediately after the crown."
    ],
    "kind": "Logic"
  },
  {
    "id": 5,
    "title": "The lantern bracket",
    "level": "Easy",
    "intro": "A brassworker traces the front of a seven-square bracket with one round hole. She turns the bracket flat on the bench and traces the front again.",
    "questions": [
      "Which tracing could she have made without flipping the bracket?"
    ],
    "hints": [
      "Begin at the hole and trace the connected strip toward the other end.",
      "A turn preserves your sequence of left and right bends; a reflection reverses them. The hole must travel with its square."
    ],
    "answer": "D.",
    "why": "Turn the original a quarter turn clockwise. The hole moves to the upper right end, and both bends match D. A and C reverse the handedness. B has the correct outline but puts the hole at the other end.",
    "figure": "visual-plate.svg",
    "alt": "Read each row from left to right. X is brass, O is brass with a hole, and a dash is empty. Original rows: O--- / X-XX / XXX-. A: -X- / XX- / X-- / XXO. B: XXX / X-- / XX- / -O-. C: XXX- / X-XX / O---. D: XXO / X-- / XX- / -X-.",
    "choices": [
      "A",
      "B",
      "C",
      "D"
    ],
    "kind": "Visual reasoning"
  },
  {
    "id": 6,
    "title": "Two washes of ink",
    "level": "Easy",
    "intro": "A printer laid square samples of gray ink on two sheets of paper. Judge the ink inside each square before looking at the proof.",
    "questions": [
      "Which square actually uses darker ink: A, B, or neither?"
    ],
    "hints": [
      "Your eye sees each small square against a very different surrounding brightness.",
      "Picture a strip of ink from A stretched across the page until it reaches B. Would there be a seam?"
    ],
    "answer": "Both squares use the same gray ink.",
    "why": "Each square is drawn with red, green and blue values of 147. Local contrast can make the sample on the dark sheet appear lighter. The proof uses the same ink to join the squares against one neutral ground; the join is seamless.",
    "figure": "ink-challenge.svg",
    "alt": "A square of gray ink sits on dark blue-gray paper and a second gray square sits on cream paper.",
    "reveal": "ink-proof.svg",
    "revealAlt": "The two squares sit on a common neutral background, connected by a narrow strip of matching gray ink.",
    "kind": "Optical illusions",
    "choices": [
      "A",
      "B",
      "Neither"
    ]
  },
  {
    "id": 7,
    "title": "The minus sign at table four",
    "level": "Medium",
    "intro": "Over breakfast, Lina watches a waiter fill a cup on a tray. A digital scale directly beneath the tray starts at zero. As the cup fills, the number falls smoothly to −120 g. The scale is working and nobody presses a button during the pour. Lina can slide a menu between the cup and the tray without lifting the cup. When the waiter tips the kettle upright and lets go of its handle, the display stays at −120 g.",
    "questions": [
      "Which vessel’s contents was the scale measuring, and how could the cup look as if it belonged on the tray?"
    ],
    "hints": [
      "If tea simply moved between two vessels supported by the same scale, the total reading would stay put.",
      "A hook can be mounted to a stand on a tray. A cup seen against the tray can be supported from somewhere else."
    ],
    "answer": "The scale was weighing the kettle assembly. The cup was held independently just above the tray.",
    "why": "One setup is a kettle on a tilting hook fixed to the weighing tray and a cup on a small bracket fixed to the table. Zero the loaded tray before pouring. The scale then reports the change from that weight. Moving 120 g of tea off the tray into the separately supported cup gives −120 g. The menu passing underneath explains the misleading sight line.",
    "kind": "Lateral thinking"
  },
  {
    "id": 8,
    "title": "The rehearsal envelope",
    "level": "Medium",
    "intro": "The understudy’s sealed cue sheet is in exactly one of four drawers labeled A, B, C and D. The stage manager wrote down four statements, exactly three of which are true.",
    "questions": [
      "Which drawer holds the sheet?",
      "Who made the false statement?"
    ],
    "hints": [
      "Tess is making a claim about the truth values of two statements. She is right only if one is true and the other false.",
      "Try B first. Repeat the count for A, C and D. You need exactly three true statements."
    ],
    "answer": "Drawer C. Mina made the false statement.",
    "why": "For A, Mina and Remy are true and the other two are false. For B, Mina and Tess are true. For D, Remy and Tess are true. Only C gives three: Remy is right that it is outside B, Cai correctly names C, and Tess correctly says that Mina and Remy disagree.",
    "clues": [
      "Mina: “It’s in A or B.”",
      "Remy: “It’s outside B.”",
      "Cai: “It’s in C.”",
      "Tess: “Exactly one of Mina and Remy is right.”"
    ],
    "choices": [
      "Drawer A",
      "Drawer B",
      "Drawer C",
      "Drawer D"
    ],
    "kind": "Logic"
  },
  {
    "id": 9,
    "title": "The punch-card cabinet",
    "level": "Medium",
    "intro": "A sorter combines cards one dot position at a time. It uses the same rule across each row and down each column. Filled and hollow marks are the two possible states.",
    "questions": [
      "Which card belongs in the empty space?"
    ],
    "hints": [
      "Choose one corner of a small card. Compare only that corner on the first two cards and the result.",
      "Two filled marks cancel. Two hollow marks stay hollow. What happens when just one input is filled?"
    ],
    "answer": "C — only the upper-left dot is filled.",
    "why": "A position is filled exactly when the two inputs disagree. The final row begins with three filled dots and then four, so only its upper-left dots disagree. In the last column, the upper-right dot cancels and the upper-left survives, giving the same result.",
    "figure": "visual-punch.svg",
    "alt": "Nine cards form a three-by-three matrix with the bottom-right card missing. Reading positions as top-left, top-right, lower-left, lower-right, the filled positions are: row 1, 1/2/4, 1/4, 2; row 2, 1/3, 2/3, 1/2; row 3, 2/3/4, all four, unknown. Options A through D show 1/2, 4, 1, and 2/3/4 respectively.",
    "choices": [
      "A",
      "B",
      "C",
      "D"
    ],
    "kind": "Visual reasoning"
  },
  {
    "id": 10,
    "title": "The tiler’s plumb line",
    "level": "Medium",
    "intro": "A tiler staggered alternate courses by half a tile. Stand back or shrink the picture slightly, then trace one thin line of gray mortar.",
    "questions": [
      "Do adjacent horizontal mortar joints converge toward the left, converge toward the right, or stay equally far apart?"
    ],
    "hints": [
      "Follow a single gray joint all the way to the far edge, without jumping to an edge of a dark tile.",
      "Compare the height of one whole course at the left, its middle and the right."
    ],
    "answer": "The horizontal joints are parallel and evenly spaced.",
    "why": "Each course has 40 units of tile followed by a 2-unit joint. The gray centerlines therefore remain exactly 42 units apart across the wall. Alternating dark and light edges can bias the direction those narrow gray lines appear to take.",
    "figure": "tilework-challenge.svg",
    "alt": "A panel of five staggered rows of dark and light square tiles separated by thin gray joints.",
    "reveal": "tilework-proof.svg",
    "revealAlt": "Four horizontal mortar centerlines with equal-height measuring marks at the left, middle and right.",
    "kind": "Optical illusions",
    "choices": [
      "Converge left",
      "Converge right",
      "Stay equally far apart"
    ]
  },
  {
    "id": 11,
    "title": "An address in the dark",
    "level": "Medium",
    "intro": "The top leaf of an unprinted writing pad is torn away from the receptionist’s desk. Imani takes the next sheet, lays it flat and reads the missing delivery address without adding a mark. The lobby lights are off. Her phone torch makes the words appear when she sets it on the desktop; when she holds it straight above the sheet, the words almost vanish. She reads the address in the usual direction.",
    "questions": [
      "How did the writing reach a sheet the pen never touched, and why does the position of the torch matter?"
    ],
    "hints": [
      "The pen could leave something other than ink on the lower sheet.",
      "Light skimming across a surface makes tiny changes in height cast long shadows."
    ],
    "answer": "Pressure from the pen indented the sheet underneath. Light from the side makes the grooves legible.",
    "why": "The writer pressed the sheets together, tracing the address into the second leaf. A low light catches the ridges on one side and leaves shadows on the other. Overhead light fills those shadows. Unlike a wet-ink transfer between facing pages, the impression reads the same way as the original.",
    "kind": "Lateral thinking"
  },
  {
    "id": 12,
    "title": "Two trios in the dark",
    "level": "Medium",
    "intro": "A velvet bag contains six teal buttons, five gold ones, three plum ones and two ivory ones, all identical to the touch. The dresser draws buttons without looking and keeps every button she draws. She needs a set of three buttons of one color and another set of three of a different color.",
    "questions": [
      "What is the smallest number of draws that guarantees success?",
      "Give an unlucky draw one button shorter that leaves her short of her goal."
    ],
    "hints": [
      "Imagine trying to draw as many buttons as possible while allowing only one color to reach three.",
      "The best color to take in full is teal. How many can you also take from each other color?"
    ],
    "answer": "Thirteen draws. Twelve could give six teal, two gold, two plum and two ivory.",
    "why": "As long as only one color has reached three, that color can supply at most six, and each of the other three at most two: a total of twelve. The example actually attains twelve. A thirteenth button must complete a second trio.",
    "kind": "Logic"
  },
  {
    "id": 13,
    "title": "The eight-mark clock",
    "level": "Medium",
    "intro": "A clockmaker built a dial with eight equally spaced marks. Between readings each hand makes its own fixed turn, always in the same direction and by the same amount. The navy hand is long; the rust hand is short.",
    "questions": [
      "Which dial shows the fifth reading?"
    ],
    "hints": [
      "Track the long hand alone. Count marks rather than degrees.",
      "The long hand advances three marks clockwise. The short hand moves one mark counterclockwise."
    ],
    "answer": "B — long hand down, short hand right.",
    "why": "The long hand points up, lower right, left, upper right, then down. The short hand points left, lower left, down, lower right, then right. A and C each follow only one of these two progressions.",
    "figure": "visual-dials.svg",
    "alt": "Four readings show long/short directions: up/left, lower right/lower left, left/down, upper right/lower right. Options A through D are down/down, down/right, up/right and right/down.",
    "choices": [
      "A",
      "B",
      "C",
      "D"
    ],
    "kind": "Visual reasoning"
  },
  {
    "id": 14,
    "title": "A stroke behind the screen",
    "level": "Medium",
    "intro": "A drawing screen covers part of a straight navy stroke. Three parallel fragments appear on the far side. Only one continues the stroke without a bend or a sideways jump.",
    "questions": [
      "Which fragment is the continuation: A, B, or C?"
    ],
    "hints": [
      "All three fragments have the right slant, so comparing their angles alone cannot settle it.",
      "The visible stroke climbs one unit for every two units to the right. Carry that rise across the full width of the screen."
    ],
    "answer": "B continues the original stroke.",
    "why": "The screen is 110 drawing units wide. At this slope the hidden stroke must rise 55 units between the two edges. B starts exactly 55 units above the entry point; A starts 85 above it and C starts 31 above it. The dashed bridge shows the unbroken alignment.",
    "figure": "screen-challenge.svg",
    "alt": "An oblique stroke ends at the left edge of a vertical screen. Three parallel fragments on its right are labeled A, B and C.",
    "reveal": "screen-proof.svg",
    "revealAlt": "A dashed rust stroke crosses the screen and links the original stroke directly to B; A and C remain separate.",
    "kind": "Optical illusions",
    "choices": [
      "A",
      "B",
      "C"
    ]
  },
  {
    "id": 15,
    "title": "Applause for the last skater",
    "level": "Easy",
    "intro": "Three children enter a single-lane skating trial. Each skates the same course exactly once, with no penalties. Every start and finish is announced. Willow starts first and finishes first. Jo starts second and finishes second. Etta starts last and finishes last. The official awards Etta the prize for the fastest skate. The finish announcer’s notebook shows Willow, 10:04; Jo, 10:06; Etta, 10:07. The starter sent them off at 10:00, 10:02 and 10:04.",
    "questions": [
      "How could Etta earn the prize, and by what margin did she win?"
    ],
    "hints": [
      "Read the starter’s notebook alongside the finish announcer’s.",
      "Each skater has her own starting time. Subtract it from her finish time."
    ],
    "answer": "The prize was for elapsed time. Etta skated for three minutes and beat each of the others by one minute.",
    "why": "Willow used 10:00–10:04 and Jo used 10:02–10:06, four minutes each. Etta’s run was 10:04–10:07. Finishing last on the clock is consistent with covering the course fastest.",
    "kind": "Lateral thinking"
  },
  {
    "id": 16,
    "title": "The upside-down price",
    "level": "Hard",
    "intro": "A market stall uses three-digit tags with prices in cents. On one tag the clerk used three different digits. After the tag was accidentally turned upside down, it still showed a three-digit price, exactly 72 cents higher. The typeface has only five digits that remain digits under a half-turn.",
    "questions": [
      "What was the original three-digit price?"
    ],
    "hints": [
      "Turning the tag around also reverses the order of its digits. Compare the final digits first.",
      "An increase of 72 means the new units digit minus the old one is either 2 or −8. Try the allowed digits at those two ends."
    ],
    "answer": "896 cents. Viewed upside down, it reads 968 cents.",
    "why": "For a units difference of −8, the rotated first digit would have to be 1 and the old last digit 9 (the alternative would require a leading zero). That would change the hundreds digit from 1 to 6, already too large a jump. For a difference of 2, the only usable pair is 8 and 6. The original is 8?6 and the rotated tag 9?8. Hundreds and units contribute a gain of 102, so the tens must fall by 30. Only 9 turning into 6 works.",
    "clues": [
      "Under a half-turn, 0, 1 and 8 keep their shapes; 6 and 9 trade places. Neither price has a leading zero."
    ],
    "kind": "Logic"
  },
  {
    "id": 17,
    "title": "The lightest skyline",
    "level": "Hard",
    "intro": "A model builder stacked identical cubes on a three-by-three board. Every dotted square holds a solid stack at least one cube high. A dash is empty. Each silhouette shows the tallest stack in each named column or row.",
    "questions": [
      "What is the smallest possible number of cubes, and which three stacks must then be taller than one cube?"
    ],
    "hints": [
      "Begin with one cube on each of the seven occupied squares. Where can the only necessary three-high stack go?",
      "Row B and column 1 must both reach three. Rows A and C also need height two; can those two stacks supply the remaining column heights at the same time?"
    ],
    "answer": "11 cubes. Put three at B1, two at A2 and two at C3; put one everywhere else that has a dot.",
    "why": "Start with seven base cubes. Only B1 can reach three, so it needs two more. Rows A and C each require another cube. To meet both remaining column heights with those same cubes, the stacks must occupy columns 2 and 3. A3 and C2 are empty, forcing A2 and C3. This arrangement attains the lower bound of eleven.",
    "figure": "visual-stacks.svg",
    "alt": "The footprint has rows A, B, C and columns 1 to 3. A3 and C2 are empty; the other seven positions are occupied. The silhouettes have maximum heights 3, 2, 2 by columns 1 to 3, and 2, 3, 2 by rows A to C.",
    "kind": "Visual reasoning"
  },
  {
    "id": 18,
    "title": "The unprinted lantern",
    "level": "Hard",
    "intro": "Look at the gap enclosed by these four notched discs. Let your eye settle on the light shape in the middle, then trace one of its sides from corner to corner.",
    "questions": [
      "What four-sided shape do the notches suggest?",
      "Along the middle of any one side, do you cross a drawn border or bare paper?"
    ],
    "hints": [
      "Each notch faces the center. Pair its two straight edges with edges of its neighbors.",
      "Cover the discs with your fingertips and look at the strip of page between two adjacent discs."
    ],
    "answer": "A tilted square (a diamond) appears. The middle of each apparent side is bare paper.",
    "why": "The cut edges point along the sides of a square. The brain can complete the missing boundary across the gap, creating an illusory contour. Each side spans roughly 144 drawing units; only the two 36-unit cut edges touch ink. About 72 units in the middle are empty.",
    "figure": "paperlight-challenge.svg",
    "alt": "Four dark notched discs sit above, below, left and right of a blank central space; their openings point inward.",
    "reveal": "paperlight-proof.svg",
    "revealAlt": "An enlarged side diagram labels two short ink edges and the longer bare-paper gap between them.",
    "kind": "Optical illusions"
  },
  {
    "id": 19,
    "title": "One moon for three nights",
    "level": "Hard",
    "intro": "A stage designer shows a bound paper model, one illustrated scene per right-hand page. On the first page a gold moon rises above a desert. Turn the page and precisely the same moon hangs above a bathhouse. Turn again and it appears above a train. Only one piece of gold foil went into the whole book. It is glued permanently in place. With all three pages tilted up together, you can feel foil on the third illustration and only plain paper around the moon on the first two. The gold seen in each scene is the foil itself.",
    "questions": [
      "How did the designer put one stationary moon into all three scenes?",
      "What would happen if you slipped a black card immediately in front of the train page?"
    ],
    "hints": [
      "Turning a page can reveal some of the sheet below before the rest of it becomes visible.",
      "Imagine stacking the three scenes so that their moons occupy the same spot."
    ],
    "answer": "The foil moon is on the train page. Matching windows in the first two pages frame it; a black card would replace the moon with a dark patch in both earlier scenes.",
    "why": "The pages are registered to put the same point of sky in the same position. The desert and bathhouse pages each have a moon-shaped opening. With the pages stacked, light from the foil passes through both. Turning the first page leaves one opening; turning the second exposes the foil directly.",
    "kind": "Lateral thinking"
  },
  {
    "id": 20,
    "title": "A detour for wet paint",
    "level": "Hard",
    "intro": "The mural crew marked out a square grid of paths: four vertical lines crossing four horizontal lines, making nine square beds. You start at the southwest corner and finish at the northeast. You may walk one block east (E) or north (N) per move. Two wet intersections are blocked: one block east and one north of the start, and two blocks east and two north of the start.",
    "questions": [
      "How many different routes remain?",
      "Write the routes as six-letter strings of E and N."
    ],
    "hints": [
      "You must make three moves each way. Starting east and then north lands on the first wet intersection.",
      "If you begin east, your first two moves must be EE. List what can follow, then swap E and N to get the reflected routes."
    ],
    "answer": "Four routes: EEENNN, EENENN, NNNEEE and NNENEE.",
    "why": "After EE you can go east a third time and finish with NNN. If you go north instead, you are at (2,1). Another north step would land on the second wet crossing, so E must follow, and NN finishes the journey. By symmetry there are exactly two more routes beginning north.",
    "kind": "Logic",
    "figure": "wet-paint-map.svg",
    "alt": "Four by four intersections. Start at the lower left (0,0) and finish at the upper right (3,3). Crosses mark the blocked intersections (1,1) and (2,2)."
  }
];
