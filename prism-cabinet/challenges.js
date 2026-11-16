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
  },
  {
    "title": "Four holes in a ticket",
    "level": "Easy",
    "intro": "A six-by-six sheet is folded exactly along the two dotted center lines. Punch once through all four layers at the marked point in the folded stack, then open it flat.",
    "questions": [
      "Which four cells have holes?"
    ],
    "hints": [
      "Unfold just the horizontal crease. How far is row 1 from the lower edge of the sheet?",
      "The folds pair rows 1 and 6, and pair columns at equal distances from the vertical crease."
    ],
    "answer": "B1, E1, B6 and E6.",
    "why": "Across the horizontal center, row 1 reflects to row 6. Across the vertical center, column B reflects to E. The four combinations give the four punctures.",
    "figure": "vp-fold.svg",
    "alt": "A six-by-six grid has columns A–F and rows 1–6. Fold right onto left, then bottom onto top. The punch is at B1.",
    "id": 21,
    "kind": "Visual reasoning"
  },
  {
    "title": "Rails at the vanishing point",
    "level": "Easy",
    "intro": "Two copper gauges lie across a drawing of a receding rail line. The track supplies the depth cues; the gauges are flat marks on the page.",
    "questions": [
      "Which copper gauge takes up more width on the page?"
    ],
    "hints": [
      "Compare only the colored ends.",
      "Imagine dropping vertical threads from A’s two ends."
    ],
    "answer": "Neither. Each is 138 units wide.",
    "why": "Both extend from horizontal coordinate 251 to 389. The converging rails can make the upper gauge look larger because it appears farther away.",
    "figure": "cab-sleepers.svg",
    "alt": "Two horizontal copper bars on railway lines narrowing toward the top. A is higher than B.",
    "reveal": "cab-sleepers-proof.svg",
    "revealAlt": "The rails disappear. The same two vertical guides touch the ends of both bars.",
    "choices": [
      "A",
      "B",
      "Same width"
    ],
    "id": 22,
    "kind": "Optical illusions"
  },
  {
    "title": "The staircase that went down",
    "level": "Medium",
    "intro": "From a boat floating between two stone walls, Eden can touch the lowest tread of an iron ladder. Four minutes later, still standing on the same deck board, she can touch its sixth tread. The ladder is bolted to the wall. The boat has no lifting gear. A leaf floating beside the hull has stayed level with the same painted stripe on the hull, yet it too is five treads higher on the wall. Loud gates swing open ahead.",
    "questions": [
      "What has carried Eden upward, and what does the leaf reveal?"
    ],
    "hints": [
      "Choose two landmarks: one fixed to the wall and one fixed to the water.",
      "Closing gates can turn a stretch of canal into a basin whose level can change."
    ],
    "answer": "The boat was in a filling canal lock. Water carried the boat, Eden and the leaf upward together.",
    "why": "Water admitted between the closed gates raised the surface past five ladder intervals. The leaf and the boat both floated on that surface, so their relative heights stayed steady. A lift acting only on the boat would have left the leaf behind.",
    "id": 23,
    "kind": "Lateral thinking"
  },
  {
    "title": "Three saucers on the scale",
    "level": "Easy",
    "intro": "A baker pairs three little saucers of sugar on a scale. Rose and Iris together weigh 23 grams. Iris and Fern weigh 31. Fern and Rose weigh 28. The saucers have already been allowed for in every reading.",
    "questions": [
      "How much sugar is in each saucer?"
    ],
    "hints": [
      "When you add all three readings, how often does each saucer appear?",
      "The three readings total 82 grams. Subtract an appropriate pair from half that total."
    ],
    "answer": "Rose has 10 grams, Iris 13 and Fern 18.",
    "why": "Each saucer appears in two readings, so all three together weigh 41 grams. Taking away Iris and Fern leaves 10 for Rose. Taking away Fern and Rose leaves 13 for Iris, and the remaining 18 is Fern’s.",
    "id": 24,
    "kind": "Logic"
  },
  {
    "title": "The folded beam",
    "level": "Hard",
    "intro": "A light ray enters row 3 from the left, traveling along cell centers. Each diagonal mirror turns the ray through a right angle. Empty cells let it pass straight through.",
    "questions": [
      "On which side and in which row or column will the ray leave?"
    ],
    "hints": [
      "At B3 the rising slash turns an eastbound ray north. Keep following it through empty squares.",
      "The first four mirrors it meets are B3, B1, A1 and A4."
    ],
    "answer": "Through the left side of row 5.",
    "why": "The reflections, in order, occur at B3, B1, A1, A4, C4, C2, E2, E5. At E5 the final slash turns the southbound ray west. Row 5 has no more mirrors.",
    "figure": "vp-light.svg",
    "alt": "5×5 grid. Mirrors rising to right at B3, A1, C4, C2 and E5; mirrors falling to right at B1, A4 and E2. Ray enters A3 from left.",
    "id": 25,
    "kind": "Visual reasoning"
  },
  {
    "title": "The quill cutter’s gauge",
    "level": "Medium",
    "intro": "A cutter ornamented the ends of two measuring sticks with fins. Study the horizontal copper shafts between the fin junctions.",
    "questions": [
      "Which actual shaft is longer?"
    ],
    "hints": [
      "The tips of the fins extend the silhouette outside some shaft endpoints.",
      "Both shafts share a horizontal midpoint. Compare the left and right junctions vertically."
    ],
    "answer": "A is longer by 14 drawing units.",
    "why": "A runs from 206 to 434, a length of 228. B spans 213 to 427, or 214. The fins can exaggerate B and shorten A to the eye.",
    "figure": "cab-quills.svg",
    "alt": "Stacked copper shafts. The fins at A’s ends point inward and those at B’s ends outward.",
    "reveal": "cab-quills-proof.svg",
    "revealAlt": "Removing the fins leaves A extending seven units beyond each end of B.",
    "choices": [
      "A",
      "B",
      "Same length"
    ],
    "id": 26,
    "kind": "Optical illusions"
  },
  {
    "title": "The coin with two birthdays",
    "level": "Easy",
    "intro": "A festival program says the piece of silver in the glass case was made into a coin in 1910. Yet the coin in the case bears the date 1948. Both dates are correct; it is a single solid coin, with no insert or glued-on face. The casting ledger for 1948 records that a particular worn 1910 coin was the only metal in a little crucible. The new blank made from that pour was then stamped with the festival design.",
    "questions": [
      "What was already a coin in 1910, and what dates from 1948?"
    ],
    "hints": [
      "What exactly is the program tracing through the years?",
      "A process in the casting ledger preserves metal while destroying an earlier shape."
    ],
    "answer": "The silver was previously a 1910 coin. It was melted, made into a new blank and struck as the 1948 festival coin.",
    "why": "The metal has a history that continues across the melting. The stamped object now in the case began in 1948. A second set of markings hidden under the design would not be needed: pouring the metal erased the first form.",
    "id": 27,
    "kind": "Lateral thinking"
  },
  {
    "title": "Two ovens before opening",
    "level": "Medium",
    "intro": "Five clay tiles need 8, 11, 13, 15 and 17 minutes apiece in a kiln. Two identical kilns can run side by side, one tile per kiln. Both are hot at 9:00, and changing tiles takes no time. A tile must stay in the same kiln for its whole firing.",
    "questions": [
      "How early can every tile be ready?",
      "Which tiles would you assign to each kiln?"
    ],
    "hints": [
      "Add up all the firing time and divide by the number of kilns.",
      "Look for two groups with the same total. Try pairing the longest tile with another."
    ],
    "answer": "9:32. Fire the 15- and 17-minute tiles in one kiln, and the 8-, 11- and 13-minute tiles in the other.",
    "why": "The tiles require 64 kiln-minutes. In anything under 32 minutes, even two busy kilns cannot supply that much firing time. Both proposed groups total 32, so the lower bound is attainable.",
    "id": 28,
    "kind": "Logic"
  },
  {
    "title": "The dyer’s second impression",
    "level": "Easy",
    "intro": "Two stamps print onto exactly the same four-by-four patch, in the orientations shown. Any square inked by both stamps turns purple.",
    "questions": [
      "How many purple squares will there be?"
    ],
    "hints": [
      "Use the upper left of each stamp as the same corner.",
      "Count shared marks one row at a time rather than adding all the marks."
    ],
    "answer": "5 purple squares.",
    "why": "Using columns A–D from the left and rows 1–4 from the top, the double prints are C1, A2, D2, C3, C4. Every other square takes at most one ink.",
    "figure": "vp-layers.svg",
    "alt": "The left stamp has marked columns AC, ABD, CD, BC in successive rows; the right stamp has BCD, AD, BC, AC.",
    "id": 29,
    "kind": "Visual reasoning"
  },
  {
    "title": "Straightening the sunburst",
    "level": "Easy",
    "intro": "A pair of copper strips stands against a fan of ruled lines. Scan them from top to bottom.",
    "questions": [
      "Does the gap between the strips grow, shrink, or stay constant through the middle?"
    ],
    "hints": [
      "Try following just one copper edge.",
      "Compare the gap at three heights."
    ],
    "answer": "The gap stays constant.",
    "why": "The strips lie on vertical lines 120 units apart. Rays crossing at changing angles can make straight edges seem to bow. The three crossbars in the proof have equal length.",
    "figure": "cab-fan.svg",
    "alt": "Copper strips cross a spray of gray lines radiating from a central point.",
    "reveal": "cab-fan-proof.svg",
    "revealAlt": "Three crossbars measure the same distance between the uprights.",
    "choices": [
      "Grows at the middle",
      "Shrinks at the middle",
      "Stays constant"
    ],
    "id": 30,
    "kind": "Optical illusions"
  },
  {
    "title": "The loaf full of initials",
    "level": "Medium",
    "intro": "For opening night, a baker slices a plain-looking loaf into twelve thick rounds. Every round has the same little dark letter R in its center. Even a thin shaving removed from the middle of a round contains the letter. The baker cut all the rounds herself with an unmarked knife. At the heel, a torn patch shows one leg of the R running lengthwise into the bread. Both colors taste like bread.",
    "questions": [
      "How could the baker sign every slice before knowing where the knife would fall?"
    ],
    "hints": [
      "A stamp on either face of a slice would disappear when you shaved the surface away.",
      "Think of a stick of lettering running along the long axis of the loaf."
    ],
    "answer": "She shaped dark dough into a long R-shaped core, filled the gaps with pale dough, and wrapped the whole length in more pale dough.",
    "why": "Each crosscut meets the same letter-shaped cross section. The slender track at the torn heel is a lengthwise glimpse of one stroke. Because the design runs through the loaf, slicing at a different point still reveals an R.",
    "id": 31,
    "kind": "Lateral thinking"
  },
  {
    "title": "Four rooms by four",
    "level": "Medium",
    "intro": "The cabinet has sixteen drawers. Put each number from 1 to 4 once in each row, once in each column and once in each two-by-two corner block. The dots are empty drawers.",
    "questions": [
      "What are the four finished rows, read from left to right?"
    ],
    "hints": [
      "In the top-left block, 3 and 4 are already in the bottom two drawers. Which two numbers must occupy the top two?",
      "Column 2 already has 4 and 1. That forces the second number in the first row. In column 3, use the bottom-left and top-right blocks to finish."
    ],
    "answer": "1234 / 3412 / 2143 / 4321.",
    "why": "Row 1 starts with 1 and 2 in some order. Column 2 already has a 1, so the row begins 12 and ends 34. The top-right block now lacks 1 and 2; column 3 already has 2, forcing row 2 to end 12. In row 4 column 2, only 3 is available. The bottom-left block then forces row 4 column 1 to be 4, leaving 2 for row 3 column 1. Column 3 needs 4 in row 3. The last column follows.",
    "tables": [
      [
        "Drawer plan",
        [
          "Row",
          "1",
          "2",
          "3",
          "4"
        ],
        [
          [
            "A",
            "·",
            "·",
            "3",
            "·"
          ],
          [
            "B",
            "3",
            "4",
            "·",
            "·"
          ],
          [
            "C",
            "·",
            "1",
            "·",
            "·"
          ],
          [
            "D",
            "·",
            "·",
            "2",
            "·"
          ]
        ]
      ]
    ],
    "id": 32,
    "kind": "Logic"
  },
  {
    "title": "A rug for the reading nook",
    "level": "Easy",
    "intro": "The border on this woven floor plan follows the grid. Each small square covers one square metre. The rug will cover exactly the gold region.",
    "questions": [
      "What area must the weaver cover?"
    ],
    "hints": [
      "Imagine cutting a strip for each horizontal row.",
      "The top two strips both run the full five-square width."
    ],
    "answer": "15 square metres.",
    "why": "From top to bottom the strips contain 5, 5, 3 and 2 square metres. Adding these disjoint pieces gives 15.",
    "figure": "vp-rug.svg",
    "alt": "The gold shape covers five squares in the first row, five in the second, the leftmost three in the third, and the middle-left two in the last row.",
    "id": 33,
    "kind": "Visual reasoning"
  },
  {
    "title": "Four rakes on the wall",
    "level": "Hard",
    "intro": "An apprentice set four long handles beside rows of slanted teeth. Exactly one handle drops toward the right.",
    "questions": [
      "Which handle actually drops?"
    ],
    "hints": [
      "Opposite tooth directions can make parallel handles seem tilted.",
      "Ignore the teeth and compare each right endpoint with the height of its own left endpoint."
    ],
    "answer": "Handle C drops.",
    "why": "A, B and D finish at their starting heights. C ends 12 units lower. The dashed level through its left endpoint makes that small difference visible.",
    "figure": "cab-rakes.svg",
    "alt": "Four labeled, nearly horizontal handles have short teeth alternating in slant from row to row.",
    "reveal": "cab-rakes-proof.svg",
    "revealAlt": "The teeth disappear; a level guide at C shows a drop of 12 units.",
    "choices": [
      "A",
      "B",
      "C",
      "D"
    ],
    "id": 34,
    "kind": "Optical illusions"
  },
  {
    "title": "The guest at the end of the roll",
    "level": "Hard",
    "intro": "A station photographer made a single long picture of nine people in a row. In the print, Nessa waves at the left end and folds her arms at the right. Her distinctive torn cuff appears both times. The other eight people appear only once. The image was never joined or edited. During the shot a narrow upright slit swept steadily from the left end of the row to the right. Behind the people a low wall hid a service path.",
    "questions": [
      "How did one person enter the picture twice without leaving a streak across its middle?"
    ],
    "hints": [
      "The left and right ends of this photograph were recorded at different moments.",
      "What route avoids the slit while letting Nessa get ahead of it?"
    ],
    "answer": "After the slit recorded her on the left, Nessa ducked behind the wall, ran ahead of the sweep and posed again on the right.",
    "why": "The moving slit captured one narrow strip at a time. Along the hidden path she contributed no visible strips to the middle. On the right she waited for the slit, which recorded her second pose. This is one exposure process with two appearances at different times.",
    "id": 35,
    "kind": "Lateral thinking"
  },
  {
    "title": "One lamp left burning",
    "level": "Hard",
    "intro": "Five lamps in a row start dark. Each button flips every lamp named beside it: lit becomes dark and dark becomes lit. Use each button at most once. The caretaker wants only lamp 3 to finish lit.",
    "questions": [
      "Which buttons should you press?"
    ],
    "hints": [
      "Lamp 2 appears on just one button. To leave that lamp dark, avoid that button.",
      "Lamp 3 must now be lit by C. Work outward to lamps 1 and 5, which C will also change."
    ],
    "answer": "Press A, C and D, in any order.",
    "why": "B would turn on lamp 2 with no way to turn it off, so leave B alone. C must turn on lamp 3. C also lights 1 and 5, requiring A and D to cancel them. A and D both flip lamp 4, leaving it dark.",
    "tables": [
      [
        "Button panel",
        [
          "Button",
          "Lamps it flips"
        ],
        [
          [
            "A",
            "1, 4"
          ],
          [
            "B",
            "2, 3"
          ],
          [
            "C",
            "1, 3, 5"
          ],
          [
            "D",
            "4, 5"
          ]
        ]
      ]
    ],
    "id": 36,
    "kind": "Logic"
  },
  {
    "title": "Edging the ink tray",
    "level": "Medium",
    "intro": "The teal tiles form one piece with an internal opening. A thin brass rim must follow every exposed tile edge, including the edges of the opening. Each tile side is two centimetres long.",
    "questions": [
      "How many centimetres of rim are needed?"
    ],
    "hints": [
      "A side shared by two teal tiles is hidden on both of them.",
      "Start with four edges per tile and deduct two for every shared side."
    ],
    "answer": "56 centimetres.",
    "why": "There are 14 tiles, hence 56 tile sides before seams are removed. There are 14 neighboring pairs, each hiding two sides. That leaves 28 exposed edges at two centimetres apiece.",
    "figure": "vp-edging.svg",
    "alt": "Four rows of five tiles. From the top, teal columns are ABCDE, AE, ABCE, and CDE.",
    "id": 37,
    "kind": "Visual reasoning"
  },
  {
    "title": "The surveyor’s T",
    "level": "Easy",
    "intro": "The upright touches the exact middle of the copper crosspiece. Compare the entire crosspiece with the entire upright.",
    "questions": [
      "Which segment is longer as drawn?"
    ],
    "hints": [
      "A half of the crosspiece is not a whole segment.",
      "Mentally hinge the upright sideways from its lower endpoint."
    ],
    "answer": "They are equal, 160 units each.",
    "why": "The upright extends from height 72 to 232. The crosspiece stretches from 240 to 400. Turning one horizontal and aligning their starts reveals the equality.",
    "figure": "cab-mast.svg",
    "alt": "An upright navy segment rises from the midpoint of a copper horizontal crosspiece.",
    "reveal": "cab-mast-proof.svg",
    "revealAlt": "The rotated upright sits directly above the full crosspiece, sharing both endpoint guides.",
    "choices": [
      "Upright",
      "Crosspiece",
      "Same length"
    ],
    "id": 38,
    "kind": "Optical illusions"
  },
  {
    "title": "The pencil through the red ring",
    "level": "Easy",
    "intro": "An art class paints a stiff red ring on a sheet of clear plastic. While the class watches, the tutor passes a pencil straight through the center of the ring. She neither tears nor pierces the plastic, and the red circle stays whole. A bead dropped on the red line rests there. A bead dropped inside the ring falls into the bowl underneath. Both beads are wider than the pencil.",
    "questions": [
      "What had the class overlooked about the sheet?"
    ],
    "hints": [
      "The bead on the paint and the bead at the center are testing different places.",
      "Painting a circle does not tell you what material lies inside it."
    ],
    "answer": "The sheet already had a hole at the center. The class painted the ring around its rim.",
    "why": "The ring of plastic still supports a bead on the paint. The open middle lets a pencil or bead pass freely. The tutor needed to make no new opening during the demonstration.",
    "id": 39,
    "kind": "Lateral thinking"
  },
  {
    "title": "The compass supper",
    "level": "Medium",
    "intro": "Six people sit at the vertices of a hexagonal table, with Ada at the north vertex. Bram sits directly opposite Ada. Clockwise from Ada, Cy is exactly two seats away. Dana is immediately clockwise of Bram. Eli sits beside Ada, but not beside Cy.",
    "questions": [
      "Starting at Ada and reading clockwise, where do the six guests sit? The sixth guest is Fay."
    ],
    "hints": [
      "Pencil a dot at the top for Ada and another at the bottom for Bram.",
      "Ada has two neighbors. The clockwise neighbor sits next to Cy, so Eli must take the other place."
    ],
    "answer": "Ada, Fay, Cy, Bram, Dana, Eli.",
    "why": "Number the vertices clockwise 1 to 6 from Ada. Bram takes 4 and Cy takes 3. Dana takes 5. Eli could neighbor Ada at 2 or 6, but 2 also neighbors Cy. Eli takes 6 and Fay fills 2.",
    "id": 40,
    "kind": "Logic"
  },
  {
    "title": "The needlework tally",
    "level": "Medium",
    "intro": "A number beside a row gives the lengths of its consecutive stitched runs, read from left to right. Above each column the runs are read top to bottom. Separate successive runs by at least one blank.",
    "questions": [
      "Which two squares in the bottom row are stitched? Give their positions from the left."
    ],
    "hints": [
      "A clue of 5 fills its entire line. Find the row and column with that clue.",
      "Columns one and five each have a single stitch, already supplied by row three. Column four needs two runs."
    ],
    "answer": "The third and fourth squares from the left.",
    "why": "The third column is stitched throughout. Row three fills all five columns. In columns one and five that is the only stitch. Column two has one run of two; column four has a run of two and a later single. Row two needs its central three squares. The first run of column four is therefore in rows two and three, so its later single can only be in row five (row four has just its center stitch).",
    "figure": "vp-needle.svg",
    "alt": "A 5×5 empty grid. Row run clues are 1, 3, 5, 1, 2. Column clues are 1; 2; 5; 2 then 1; 1.",
    "id": 41,
    "kind": "Visual reasoning"
  },
  {
    "title": "Two scraps of an arch",
    "level": "Medium",
    "intro": "A pattern cutter places one bent strip just below another. Both strips have square-cut radial ends.",
    "questions": [
      "Could one strip cover the other by sliding it, without turning or stretching it?"
    ],
    "hints": [
      "Compare an outer edge with the other outer edge.",
      "The same offset should carry both left corners to their partners."
    ],
    "answer": "Yes. Slide the upper strip 24 units left and 67 down.",
    "why": "Each is the same 66-degree sector between radii 118 and 167. The placement invites a comparison of one inner arc with the other outer arc. The proof marks one matching outline with a dashed edge.",
    "figure": "cab-arches.svg",
    "alt": "A navy curved band sits above and a little right of a copper curved band.",
    "reveal": "cab-arches-proof.svg",
    "revealAlt": "The two outlines coincide after one translation.",
    "choices": [
      "Yes, a slide is enough",
      "No, a turn is required",
      "No, their sizes differ"
    ],
    "id": 42,
    "kind": "Optical illusions"
  },
  {
    "title": "The wrong end of the timetable",
    "level": "Medium",
    "intro": "Two sisters take a twenty-minute tram ride together. Mara writes “Boarded 09:52” and Nell writes “Stepped off 09:12.” Both copied correctly from station clocks. They made no stops, changed no watches and did not cross midnight. A ticket inspector stamps the boarding stub with both station clock readings for that instant: ORCHARD 09:52 / SUMMIT 08:52. Each clock runs at the usual rate.",
    "questions": [
      "Which clock did each sister read, and how do the ticket stamps settle the apparent backward trip?"
    ],
    "hints": [
      "Put the departure and arrival on one clock before subtracting.",
      "At boarding, what time did the summit clock already show?"
    ],
    "answer": "Mara read Orchard’s clock and Nell read Summit’s. Summit is one hour behind Orchard.",
    "why": "At the moment of boarding, Summit showed 08:52. Twenty minutes later it showed 09:12. Comparing Orchard’s departure directly with Summit’s arrival creates the apparent loss of forty minutes.",
    "id": 43,
    "kind": "Lateral thinking"
  },
  {
    "title": "The ribbon with two joins",
    "level": "Easy",
    "intro": "A spool held 42 centimeters of ribbon. Nia cut it into three whole-centimeter lengths. The middle-sized length is twice the shortest. The longest is six centimeters longer than the middle-sized length. The cuts waste no ribbon.",
    "questions": [
      "Can the spool label and the cutting account both be right? Show the arithmetic."
    ],
    "hints": [
      "First remove the extra six centimeters that make the longest piece different from the middle one.",
      "The remaining 36 centimeters would have to split into five equal units. Check what that tells you about the label."
    ],
    "answer": "There is no whole-centimeter solution.",
    "why": "If the shortest piece is x, the pieces are x, 2x and 2x + 6. That leaves 36 centimeters for 5x. The shortest would have to be 7.2 centimeters, which contradicts the whole-centimeter condition. The spool label and the cutting account cannot both be right.",
    "id": 44,
    "kind": "Logic"
  },
  {
    "title": "Three wheels in the toyshop",
    "level": "Medium",
    "intro": "Three external toothed wheels mesh in a chain. The center numbers are the tooth counts; the drawing is schematic. Turn A clockwise through six full revolutions. There is no slipping.",
    "questions": [
      "How far and in which direction does C turn?"
    ],
    "hints": [
      "One tooth moving past a contact pushes exactly one tooth on the neighboring wheel.",
      "Count how many A teeth pass B. The middle wheel reverses direction twice along the whole chain."
    ],
    "answer": "C makes three full clockwise turns.",
    "why": "Six turns of the 12-tooth wheel pass 72 teeth. B passes the same 72 teeth to C; 72 divided by 24 is three. B turns counterclockwise and C turns clockwise.",
    "figure": "vp-wheel.svg",
    "alt": "Three meshing gears A, B and C have 12, 18 and 24 teeth, respectively.",
    "id": 45,
    "kind": "Visual reasoning"
  },
  {
    "title": "The glazier’s panes",
    "level": "Medium",
    "intro": "A square pane stands flat on a ledge and a second square stands on a corner. Which would need more glass?",
    "questions": [
      "Which pane has the greater area?"
    ],
    "hints": [
      "The tilted pane’s width is its diagonal.",
      "Mentally rotate B until the sides of the two panes are parallel."
    ],
    "answer": "Pane A uses more glass.",
    "why": "A has side 112 and area 12,544 square units. B has side 104 and area 10,816. The diagonal of B is about 147 units, which makes its overall reach a poor guide to the amount of glass.",
    "figure": "cab-windows.svg",
    "alt": "A is an upright green square. B is a rust square turned 45 degrees.",
    "reveal": "cab-windows-proof.svg",
    "revealAlt": "With B set upright, its sides are eight units shorter than A’s.",
    "choices": [
      "A",
      "B",
      "Equal area"
    ],
    "id": 46,
    "kind": "Optical illusions"
  },
  {
    "title": "The potter’s borrowed fingerprint",
    "level": "Medium",
    "intro": "A potter’s thumb left a shallow hollow in the rim of a soft clay cup. That cup was later broken. On a plaster object made before the break, the curator finds the exact thumb mark in the exact place, but it bulges out. A tiny notch chipped out of the cup’s lip also appears as a little plaster tooth. The plaster object fits over an intact cup of the same shape like a cap.",
    "questions": [
      "What part did the plaster object play in the life of the original cup?"
    ],
    "hints": [
      "Two unrelated defects both change from depressions into protrusions.",
      "What would fill a hollow while touching the outside of the soft cup?"
    ],
    "answer": "It was a negative mold taken from the cup. The plaster filled the thumb hollow and the chip in the lip.",
    "why": "Plaster setting against the original surface takes its complementary shape. The thumb depression therefore became a raised patch and the chipped lip a small tooth. A negative mold also accounts for the cap-like fit over a similar cup.",
    "id": 47,
    "kind": "Lateral thinking"
  },
  {
    "title": "The eighth paper crown",
    "level": "Medium",
    "intro": "Eight paper crowns stand in a ring numbered 1 through 8 clockwise. Starting with crown 1, count “keep, remove” around the ring, taking away each crown counted “remove.” Continue the count without restarting when you pass the starting point. Skip empty places.",
    "questions": [
      "Which crown survives, and in what order do the others leave?"
    ],
    "hints": [
      "After the first full circuit, only odd numbers remain.",
      "The next “keep” lands on 1. Count around the surviving crowns just as before."
    ],
    "answer": "Crown 1 survives. The removal order is 2, 4, 6, 8, 3, 7, 5.",
    "why": "The first sweep removes all four evens. Counting on among 1, 3, 5, 7 removes 3 and 7. The last pass keeps 1 and removes 5.",
    "id": 48,
    "kind": "Logic"
  },
  {
    "title": "The traveling paperweight",
    "level": "Hard",
    "intro": "A numbered cube starts at the lower-left dot. Its top is 1, bottom 6, east face 2, west 5, north 3 and south 4. Roll it one quarter-turn per arrow, keeping its edges aligned with the grid. North is up the page.",
    "questions": [
      "Which number faces upward on the last square?"
    ],
    "hints": [
      "An eastward roll brings the west face to the top; a northward roll brings the south face up.",
      "Use a scrap of paper to track top, east and north after each turn. Opposite numbers sum to seven."
    ],
    "answer": "3 faces upward.",
    "why": "Starting with 1 on top, the successive top faces are 5, 4, 6, 2, 3. After the penultimate northward roll, the west face is 3, so the last eastward roll lifts it.",
    "figure": "vp-roll.svg",
    "alt": "A five-step stair route goes east, north, east, north, east.",
    "id": 49,
    "kind": "Visual reasoning"
  },
  {
    "title": "The double-fronted lantern",
    "level": "Medium",
    "intro": "A transparent frame has two offset square faces. There are no shadows, hidden strokes or labeled distances. Try first seeing the lower-left square in front, then the upper-right.",
    "questions": [
      "Which face does the drawing force to be nearer?"
    ],
    "hints": [
      "All connecting edges are present, even where a solid back panel would hide them.",
      "Try treating each offset in turn as a step away from you."
    ],
    "answer": "Neither face is forced to the front.",
    "why": "The same wire drawing supports two depth assignments. In each proof thumbnail the rust square is the proposed near face. The square corners and connectors are identical under both readings.",
    "figure": "cab-wire.svg",
    "alt": "Two equally sized overlapping square frames, one offset up and right, are joined corner to corner.",
    "reveal": "cab-wire-proof.svg",
    "revealAlt": "Two copies of the same frame highlight opposite candidate front squares.",
    "choices": [
      "L must be nearer",
      "R must be nearer",
      "Either can be nearer"
    ],
    "id": 50,
    "kind": "Optical illusions"
  },
  {
    "title": "One apple, three bites",
    "level": "Hard",
    "intro": "In a shadow-play workshop one real apple on a skewer casts three separate round shadows across a white cloth. An actor takes a bite. All three shadows lose a crescent instantly. Covering the red lamp removes the left shadow only. Covering the blue lamp removes the middle shadow only. There are no projected films or mirrors. Three lamps stand well apart behind the apple.",
    "questions": [
      "Why can three shadows lose the same bite, and which lamp makes the right-hand shadow?"
    ],
    "hints": [
      "Count paths from the lamps to the cloth, rather than apples on the skewer.",
      "Each time a lamp is covered, one apple-shaped gap in the illumination loses its contrast."
    ],
    "answer": "Each lamp casts its own shadow of the single apple. The remaining third lamp casts the right-hand shadow.",
    "why": "Separated sources send light past the apple at different angles. At each shadow position one source is blocked by the apple while the others still light the cloth. Remove that source and its particular patch stops contrasting with its surroundings. The bite changes the outline seen from all three lights.",
    "id": 51,
    "kind": "Lateral thinking"
  },
  {
    "title": "The cabinet code slips",
    "level": "Hard",
    "intro": "A three-digit cabinet dial uses distinct digits from 0 through 7. A leading zero is allowed. Four trial slips record exact counts. “Right place” means a digit is correct and in its own column; “elsewhere” counts a correct digit in another column. All other guessed digits are absent.",
    "questions": [
      "Which three digits open the cabinet, in order?"
    ],
    "hints": [
      "Look at the digits shared by the last three guesses. In 732, both matches are out of position.",
      "Try each possible digit set first. For any surviving set, test its six orders against the placement counts."
    ],
    "answer": "270.",
    "why": "For 270 the trial 567 includes just 7, elsewhere. In 732, 7 and 2 are present and displaced. In 750, 0 is in place and 7 is elsewhere. In 126, 2 is elsewhere. To check uniqueness, take the six permutations of each three-digit set. Filtering by the slips in order leaves 120, 13, 2 and finally 1 admissible codes.",
    "tables": [
      [
        "Trial slips",
        [
          "Guess",
          "Right place",
          "Elsewhere"
        ],
        [
          [
            "567",
            "0",
            "1"
          ],
          [
            "732",
            "0",
            "2"
          ],
          [
            "750",
            "1",
            "1"
          ],
          [
            "126",
            "0",
            "1"
          ]
        ]
      ]
    ],
    "id": 52,
    "kind": "Logic"
  },
  {
    "title": "The glazier’s missing leads",
    "level": "Medium",
    "intro": "Two short lead strips are missing from a square window. A square counts if all four sides remain continuous. Divider strips inside a square are allowed.",
    "questions": [
      "How many complete squares of all sizes can you trace?"
    ],
    "hints": [
      "Count small, middle and outer squares separately.",
      "A missing short strip can destroy the outlines of several squares while leaving a larger one intact."
    ],
    "answer": "8 squares.",
    "why": "There are 5 intact one-pane outlines, 2 two-by-two outlines and one outer three-by-three outline. These are all the possible side lengths; the frame has no diagonal leads.",
    "figure": "vp-squares.svg",
    "alt": "A 3×3 grid of square panes. Counting lattice coordinates from the upper left at (0,0), remove horizontal edge (1,1) to (2,1) and vertical edge (2,2) to (2,3). All other edges remain.",
    "id": 53,
    "kind": "Visual reasoning"
  },
  {
    "title": "A vessel between two sitters",
    "level": "Easy",
    "intro": "A printmaker saved ink by letting adjacent objects share an outline. Look once at the dark areas and again at the light area between them.",
    "questions": [
      "What are the two main readings of the print?"
    ],
    "hints": [
      "Each dark shape has a forehead, nose, lips and chin facing inward.",
      "Follow the outer edge of the unprinted region as a single object."
    ],
    "answer": "Two profiles facing each other, or a pale vase between them.",
    "why": "The nose and lip edges of the profiles are also the indented sides of the vessel. The proof fills just the enclosed-width central region; its zigzag sides lie on exactly the original profile boundaries.",
    "figure": "cab-portraits.svg",
    "alt": "Two symmetrical dark vertical shapes frame a pale, shaped central space.",
    "reveal": "cab-portraits-proof.svg",
    "revealAlt": "Gold identifies the vase occupying the space between the dark profiles.",
    "id": 54,
    "kind": "Optical illusions"
  },
  {
    "title": "The seam that changed sides",
    "level": "Hard",
    "intro": "Rui wraps a narrow paper band into a loop and glues its ends. An ant-sized toy rolls down the center of the band, leaving a fine track on the surface it touches. After going around the loop once, it arrives directly beneath its starting dot, on the other face of the paper. It never crosses an edge or leaves the paper. After a second circuit it reaches the dot itself. No part of the band moved after the glue set.",
    "questions": [
      "What simple change to an ordinary paper loop explains both arrivals?"
    ],
    "hints": [
      "Try marking opposite faces of a loose strip before joining the ends.",
      "Turn just one end over before you bring the two short ends together."
    ],
    "answer": "An odd half-turn in the band, most simply one half-twist, makes a Möbius band.",
    "why": "At the seam the front of one end meets the back of the other. One trip along the center thus arrives on the reverse of the starting patch. A second trip restores the original orientation. More odd half-twists give the same test result.",
    "id": 55,
    "kind": "Lateral thinking"
  },
  {
    "title": "The uncut quilt",
    "level": "Medium",
    "intro": "A quilt top is a six-by-six checkerboard of light and dark squares. The maker removes the top-left corner square and the bottom-right corner square. She has seventeen patches, each the exact shape of two edge-sharing squares. Patches may turn but cannot overlap or extend beyond the quilt.",
    "questions": [
      "Can all the surviving squares be covered perfectly? Explain."
    ],
    "hints": [
      "Ignore the total area for a moment. What colors must one patch cover?",
      "The two opposite corner squares of a six-by-six board have the same color."
    ],
    "answer": "No. The remaining two colors are present in different amounts.",
    "why": "Each patch covers one light and one dark square. The full quilt had eighteen of each. Removing two squares of one color leaves sixteen of that color and eighteen of the other. Seventeen two-square patches would require seventeen of each.",
    "id": 56,
    "kind": "Logic"
  },
  {
    "title": "Ribbon over two faces",
    "level": "Hard",
    "intro": "A ribbon must run from corner A to the diagonally opposite corner B of a rectangular box. It must lie on exactly two adjacent faces and can cross their shared edge once. The box measures 6 by 4 by 3 cm.",
    "questions": [
      "What is the shortest ribbon length, and which two edge lengths form the combined side of the best unfolded rectangle?"
    ],
    "hints": [
      "Flatten a pair of faces about its common edge. A straight diagonal is shortest on the resulting rectangle.",
      "There are three distinct rectangle sizes, depending on which edge length stays single."
    ],
    "answer": "√85 cm (about 9.22 cm). Combine 3 and 4 to make 7, with 6 as the single side.",
    "why": "The squared diagonal lengths are (3+4)²+6² = 85, (3+6)²+4² = 97, and (4+6)²+3² = 109. The first is the least. Its straight diagonal crosses the join between the unfolded faces.",
    "figure": "vp-parcel.svg",
    "alt": "A rectangular box has width 6, depth 4 and height 3 cm. A is the lower front left corner; B is the upper rear right corner.",
    "id": 57,
    "kind": "Visual reasoning"
  },
  {
    "title": "A ribbon across twilight",
    "level": "Easy",
    "intro": "An unbroken ribbon crosses a backdrop that fades from charcoal to pale stone. Look at its two ends.",
    "questions": [
      "Does the ribbon’s own ink become darker, become lighter, or stay uniform from left to right?"
    ],
    "hints": [
      "The background does change continuously. Separate it from the foreground.",
      "Imagine placing the end samples side by side on neutral paper."
    ],
    "answer": "The ribbon is uniform.",
    "why": "The full strip has the same red, green and blue values (146, 150, 153). Its left end contrasts with a dark field and the right end contrasts with a light field. The proof puts the strip and both end samples on one flat ground.",
    "figure": "cab-ribbon.svg",
    "alt": "One horizontal gray ribbon crosses a smooth dark-to-light background.",
    "reveal": "cab-ribbon-proof.svg",
    "revealAlt": "The same ribbon on a uniform ground, and two identical end samples joined below.",
    "choices": [
      "Darker",
      "Lighter",
      "Uniform"
    ],
    "id": 58,
    "kind": "Optical illusions"
  },
  {
    "title": "One snip on the milliner’s table",
    "level": "Easy",
    "intro": "A milliner cuts a strip of cloth exactly twice as long as her worktable. She lays it on the table with both short ends flush with the near edge. Only two layers cover the table. The top end has a coffee stain; the bottom end has a blue tailor’s mark. From a point halfway down the table she snips straight across both layers, then unfolds everything. Three pieces fall apart, although her scissors made just one straight cut. The stain and the blue mark land on different pieces.",
    "questions": [
      "Why are there three pieces, and which one is twice as long as either of the others?"
    ],
    "hints": [
      "Track the strip from its stained end, around the fold at the far edge, then back to the blue mark.",
      "A single snip through two layers reaches two different positions along the original strip."
    ],
    "answer": "The strip was folded in half. The middle piece containing the far-edge fold is the longest.",
    "why": "Call the table length one unit. The cut halfway down the table meets the strip at positions 0.5 and 1.5 along its full two units. The pieces have lengths 0.5, 1 and 0.5. The stain and blue mark are on the short end pieces.",
    "id": 59,
    "kind": "Lateral thinking"
  },
  {
    "title": "The guild’s greetings",
    "level": "Medium",
    "intro": "At a guild meeting everyone shakes hands with every other person exactly once, except that the chair arrives late and misses exactly three handshakes. The secretary records 25 handshakes in total.",
    "questions": [
      "How many people attended, including the chair?"
    ],
    "hints": [
      "Restore the three missed handshakes and count unordered pairs.",
      "Seven people would make 21 pairs. How many new pairs does an eighth person create?"
    ],
    "answer": "Eight people.",
    "why": "With the missing three restored, there would be 28 greetings. Seven people form 21 pairs. Adding an eighth creates seven more pairs, taking the full total to 28. Subtract the three the chair missed to get 25.",
    "id": 60,
    "kind": "Logic"
  },
  {
    "title": "The clockwork grasshopper",
    "level": "Hard",
    "intro": "The hopper jumps exactly two squares along one axis and one square along the other. It may leap over inked squares but cannot land on one. S marks its start and F its finish.",
    "questions": [
      "What is the fewest jumps from S to F? Give one route."
    ],
    "hints": [
      "Mark every legal first landing. The hopper always changes square color on a checkerboard.",
      "Try expanding the reachable squares outward one jump at a time. Keep newly reached squares separate from squares already visited."
    ],
    "answer": "4 jumps. One route is A2 → B4 → D3 → C5 → E4.",
    "why": "From the start, the fresh squares in each layer before the finish are jump 1: B4, C1; jump 2: D3, D5, E2; jump 3: B2, C5, E1, E3, E5. The finish first appears in layer 4.",
    "figure": "vp-jumper.svg",
    "alt": "5×5 board. S is A2, F is E4, and B3, C2, C3 and D4 are blocked.",
    "id": 61,
    "kind": "Visual reasoning"
  },
  {
    "title": "Shadows at the crossroads",
    "level": "Easy",
    "intro": "Look at several bright intersections amongst the dark blocks without fixing on any one for too long. Some people notice fleeting darker spots away from their point of focus. It is fine if you do not.",
    "questions": [
      "Are darker gray dots printed in any of the intersections?"
    ],
    "hints": [
      "Fix your eyes directly on an intersection where you thought you saw a dot.",
      "Consider which colors would remain in a magnified view of just one crossing."
    ],
    "answer": "There are no printed dots.",
    "why": "The spaces between blocks are one unbroken cream ground. The magnified intersection shows the four nearby dark corners and a clear 12-unit-wide cross. The changing spots some observers see are perceptual.",
    "figure": "cab-crossroads.svg",
    "alt": "Twenty dark rectangles in four rows with light lanes crossing between them.",
    "reveal": "cab-crossroads-proof.svg",
    "revealAlt": "A magnified light crossing has uninterrupted cream at the center.",
    "choices": [
      "Yes, every crossing",
      "Yes, selected crossings",
      "No dots"
    ],
    "id": 62,
    "kind": "Optical illusions"
  },
  {
    "title": "The pianist’s one-handed duet",
    "level": "Medium",
    "intro": "At rehearsal, a pianist plays a low pattern with his left hand, then folds that hand behind his back. The exact same low figure keeps sounding while his right hand plays a new high tune. The low figure includes his tiny accidental extra note at exactly the same point every eight seconds. During a pause, he steps on a red pedal and the entire low part ceases at once. No other musician is present.",
    "questions": [
      "What did the first eight seconds of rehearsal supply for the rest of the duet?"
    ],
    "hints": [
      "A second performer would have to reproduce the same slip at the same instant every time.",
      "The pedal controls a whole phrase rather than a single note."
    ],
    "answer": "He recorded the first left-hand phrase into a repeating loop, then played the high line over its playback.",
    "why": "One stored eight-second performance supplies every repetition, including the accidental note. Stopping that loop by pedal silences the whole low line while leaving the right hand free to play. The audible parts do not require two hands to be active at the same moment.",
    "id": 63,
    "kind": "Lateral thinking"
  },
  {
    "title": "Two bells after noon",
    "level": "Hard",
    "intro": "At noon the brass bell sounds and then rings every 14 minutes. The glass bell first sounds at 12:07 and then every 9 minutes. The caretaker hears both bells together somewhere in the afternoon.",
    "questions": [
      "When is the first simultaneous ring after noon?"
    ],
    "hints": [
      "Use minutes after noon. A match must be a multiple of 14 and seven more than a multiple of 9.",
      "Subtract seven from 14, 28, 42, 56 and so on. Stop when the remainder is divisible by nine."
    ],
    "answer": "1:10 p.m.",
    "why": "Subtract seven from the first five positive multiples of 14. The results are 7, 21, 35, 49 and 63. Only 63 is divisible by nine, so the first match is 70 minutes after noon, at 1:10.",
    "id": 64,
    "kind": "Logic"
  },
  {
    "title": "Two mirrors on a map",
    "level": "Medium",
    "intro": "Reflect the center of the navy dot across the diagonal from the upper-left corner to the lower-right. Then reflect its new position across the vertical center line. The grid stays fixed.",
    "questions": [
      "In which cell does the dot finish?"
    ],
    "hints": [
      "The first mirror swaps the column index and the row index. Number both from one.",
      "The first reflection lands in column E. The second one keeps that row."
    ],
    "answer": "B2.",
    "why": "B5 has numeric indices (2,5). Reflection in the main diagonal swaps them to (5,2), or E2. Reflecting column 5 across a six-column board puts it in column 2, leaving row 2 unchanged.",
    "figure": "vp-mirrors.svg",
    "alt": "A six-by-six grid holds a dot at B5. A teal mirror line runs from upper left to lower right, and a rust mirror line runs vertically between C and D.",
    "id": 65,
    "kind": "Visual reasoning"
  },
  {
    "title": "A dimple in the brass",
    "level": "Medium",
    "intro": "Imagine that the light comes from the top of this brass plate. Three circular marks have the same shading; one has the reverse.",
    "questions": [
      "Which mark is shaded like a hollow under that lighting assumption?"
    ],
    "hints": [
      "Compare the upper edge of each disc, rather than the whole impression of relief.",
      "On a bump, the side facing the light tends to look brighter; a depression reverses this cue."
    ],
    "answer": "C is shaded as the hollow.",
    "why": "C alone is dark above and light below. An inverted lighting assumption can reverse your depth reading. The diagram fixes the assumption so that the question has a determinate answer.",
    "figure": "cab-dimples.svg",
    "alt": "Four round marks A to D appear on a copper panel; A, B and D are light above, C is light below.",
    "reveal": "cab-dimples-proof.svg",
    "revealAlt": "Labels pick out the three light upper edges and the single dark upper edge at C.",
    "choices": [
      "A",
      "B",
      "C",
      "D"
    ],
    "id": 66,
    "kind": "Optical illusions"
  },
  {
    "title": "The painter of clean letters",
    "level": "Easy",
    "intro": "At noon the workshop door is unlettered pale wood. By one it bears the word OPEN in pale wood on a blue field. The painter used only a broad roller and blue paint. No blade, brush or abrasive touched the door. In the bin lie four thin sticky shapes with blue tops and dry, unpainted undersides. Set on the four letters, they fit exactly.",
    "questions": [
      "How did the painter produce the pale letters using only blue paint?"
    ],
    "hints": [
      "Consider the parts of the door that never met the roller.",
      "The sticky shapes would have protected the wood while the surrounding field was being painted."
    ],
    "answer": "She masked the four letters before rolling the blue field, then peeled off the masks.",
    "why": "Paint landed on the surrounding wood and on the masks’ upper faces. Removing the shapes exposed clean wood in the outlines of the letters. That also explains the matching blue tops and unpainted undersides in the bin.",
    "id": 67,
    "kind": "Lateral thinking"
  },
  {
    "title": "A handful of moonstones",
    "level": "Hard",
    "intro": "Two players share a pile of 23 counters. On your turn you must remove one, two or three. Whoever takes the LAST counter loses. You play first.",
    "questions": [
      "How many counters should you take to guarantee a win?",
      "After that, what rule should you follow?"
    ],
    "hints": [
      "Work backward from a pile of one. The player whose turn it is cannot win there.",
      "Which piles can only be reduced to two, three or four? Look for a pattern repeating every four."
    ],
    "answer": "Take two, leaving 21. Then take enough to make your opponent’s turn and your turn total four counters.",
    "why": "Piles of 1, 5, 9, 13, 17 and 21 are losing positions for the player about to move. Your first turn leaves 21. Whatever the other player takes, respond with the complement to four. Eventually you leave one and they must take it.",
    "id": 68,
    "kind": "Logic"
  },
  {
    "title": "The ribbon sorter",
    "level": "Easy",
    "intro": "Each ribbon runs straight across a crossing, moving to the next lane. A crossing never splits a ribbon. Trace the ribbon attached to C on the left.",
    "questions": [
      "At which numbered spool does C finish?"
    ],
    "hints": [
      "Work through one pair of crossing lines at a time.",
      "At the second crossing C and D exchange places."
    ],
    "answer": "Spool 3.",
    "why": "After the successive exchanges, the four ribbons finish top to bottom in the order D, A, C, B. Following C alone, it enters the lowest lane at crossing two and trades lanes again at the last crossing.",
    "figure": "vp-ribbon.svg",
    "alt": "Four lanes start A, B, C, D from the top. Six crossings swap adjacent lanes in this order: 1–2, 3–4, 2–3, 1–2, 2–3, 3–4. Spools 1–4 are numbered top to bottom.",
    "choices": [
      "Spool 1",
      "Spool 2",
      "Spool 3",
      "Spool 4"
    ],
    "id": 69,
    "kind": "Visual reasoning"
  },
  {
    "title": "The lathe operator’s swirl",
    "level": "Medium",
    "intro": "Short sloping cuts appear to wind outward on a turned disc. Treat the center point of each cut as its position.",
    "questions": [
      "Do the cut centers outline a single outward spiral or a set of closed circles? How many closed tracks can you trace?"
    ],
    "hints": [
      "Follow points at a constant distance from the middle instead of following the tilt of each individual mark.",
      "Start at the outermost right-hand mark and look for marks at the same radius above and below."
    ],
    "answer": "Four closed circular tracks.",
    "why": "The cut centers have only four distances from the hub: 41, 71, 101 and 131 units. Their tilt and phase offsets supply the impression of turning; no chain of centers gradually increases in radius within a track.",
    "figure": "cab-lathe.svg",
    "alt": "Concentric-looking bands of short oblique cuts curl around a common hub.",
    "reveal": "cab-lathe-proof.svg",
    "revealAlt": "Four continuous guide circles run exactly through the centers of the cuts.",
    "id": 70,
    "kind": "Optical illusions"
  },
  {
    "title": "The runner who stayed on her square",
    "level": "Medium",
    "intro": "An actor must appear to walk through a mile of patterned corridor in a silent stage scene. From the front row her shoes stay inside the same chalk square on the stage. Nevertheless, a painted door marked 6 passes her, a column passes, and only then does door 6 pass again. The interval is always nineteen seconds. At the wing, a stagehand watches a row of tiny studs disappear around a vertical roller.",
    "questions": [
      "What moves, and what does the recurring door tell you about its construction?"
    ],
    "hints": [
      "Take the chalk square as your fixed landmark.",
      "Follow a particular painted door after it disappears into the wing."
    ],
    "answer": "A continuous painted backdrop travels around rollers while the actor walks in place.",
    "why": "The procession of door and column provides the apparent passage through the corridor. Door 6 comes back when the same length of scenery completes its circuit. The studs turning around the roller are visible evidence for the moving loop.",
    "id": 71,
    "kind": "Lateral thinking"
  },
  {
    "title": "The backwards stamp album",
    "level": "Medium",
    "intro": "On Monday a collector gave away half her stamps and then one more. On Tuesday she again gave away half of what remained and one more. On Wednesday she did the same thing. Four stamps remained after Wednesday; she never split a stamp.",
    "questions": [
      "How many stamps did she have before Monday?"
    ],
    "hints": [
      "Undo the extra stamp first, then undo the halving.",
      "The four stamps left on Wednesday came from a pile of twice (4 + 1). Apply the same operation two more times."
    ],
    "answer": "46 stamps.",
    "why": "Work backward. Before Wednesday she had 2 × (4 + 1) = 10. Before Tuesday she had 2 × (10 + 1) = 22. Before Monday she had 2 × (22 + 1) = 46. Running the gifts forward leaves 22, 10 and 4.",
    "id": 72,
    "kind": "Logic"
  },
  {
    "title": "The bookbinder’s straps",
    "level": "Easy",
    "intro": "Three flat straps lie over one another. Each stays at the same depth along its length; none is woven through another. A strap with an unbroken edge at a crossing lies on top there.",
    "questions": [
      "In what order did the binder lay the straps, first to last?"
    ],
    "hints": [
      "Begin at the crossing between the slanting and vertical straps.",
      "The horizontal strap hides part of each of the others."
    ],
    "answer": "U, then T, then S.",
    "why": "U disappears beneath T at their crossing, so U was laid earlier. T disappears beneath S at their crossing, so T was laid earlier than S. The third crossing also puts S above U.",
    "figure": "vp-under.svg",
    "alt": "S runs horizontally, T vertically and U diagonally. At their crossings the S edges continue across T and U; the T edges continue across U.",
    "id": 73,
    "kind": "Visual reasoning"
  },
  {
    "title": "The typesetter’s two trays",
    "level": "Medium",
    "intro": "Every button is identical. In each tray, decide which direction joins a button to its nearest neighbors.",
    "questions": [
      "Which tray favors grouping into vertical columns, and why?"
    ],
    "hints": [
      "Take a single interior button. Compare the gap to its right with the gap below it.",
      "The layout with a smaller top-to-bottom center spacing favors columns."
    ],
    "answer": "Tray B favors columns.",
    "why": "In A the horizontal and vertical center spacings are 33 and 55. In B they are 48 and 34. Each tray has four rows and five columns; the shorter distance changes which alignment tends to stand out.",
    "figure": "cab-rows.svg",
    "alt": "Two grids of equally sized buttons; A has narrow horizontal spacing while B has narrow vertical spacing.",
    "reveal": "cab-rows-proof.svg",
    "revealAlt": "Rows in A and columns in B are connected along their shorter gaps.",
    "choices": [
      "Tray A",
      "Tray B",
      "Both favor columns"
    ],
    "id": 74,
    "kind": "Optical illusions"
  },
  {
    "title": "Eight places on a seven-chair stage",
    "level": "Medium",
    "intro": "During a dress rehearsal the stage manager sees seven separate seats from above. At the cue, all eight cast members must sit on individual chairs. The carpenter says they can keep every chair onstage the whole time. He lifts one seat; its four apparent feet stay on the floor, while a second set of feet slides up from just inside the first. Nobody brings a chair through the wings.",
    "questions": [
      "How can eight actors now sit down, and why had the manager counted only seven seats?"
    ],
    "hints": [
      "Look at which set of feet rises with the seat.",
      "One chair can occupy almost the same patch of floor as another."
    ],
    "answer": "Two of the chairs were nested. Separating that stack exposes the eighth seat.",
    "why": "The feet that stayed on the floor belong to the lower chair. The upper chair brings its own feet up with it and can be placed separately. Only the upper seat was visible from above before the lift.",
    "id": 75,
    "kind": "Lateral thinking"
  },
  {
    "title": "The chalk runner",
    "level": "Hard",
    "intro": "A chalk runner marks six passages between four courtyards. There is one passage for each pair of courts A, B, C and D. A second, separate passage is then built between A and B. The runner wants to mark all seven passages in one walk, using each passage exactly once.",
    "questions": [
      "Which two courts must be the ends of the walk?",
      "Give one valid sequence of courts."
    ],
    "hints": [
      "Count how many passages meet at each courtyard, treating the two A–B passages separately.",
      "At an intermediate courtyard an arrival pairs with a departure. Only the starting and finishing courts can have an unpaired passage."
    ],
    "answer": "The walk must begin at C and end at D, or vice versa. One route is C–A–B–C–D–A–B–D.",
    "why": "A and B each have four passages. C and D each have three. An unbroken walk using every passage leaves an odd count at each end, so the endpoints must be C and D. In the example, the two A–B moves use the two distinct passages.",
    "id": 76,
    "kind": "Logic"
  },
  {
    "title": "The marquetry repair",
    "level": "Easy",
    "intro": "A pale three-square recess interrupts the dark inlay. Each copper insert is shown face up, with its grain running in the required direction. It may slide into the recess but may neither turn nor flip.",
    "questions": [
      "Which insert will fit?"
    ],
    "hints": [
      "Compare the short row of the recess to the long row.",
      "Two missing squares are side by side at the bottom. Which of them also has an empty square above it?"
    ],
    "answer": "C.",
    "why": "The recess lacks one square over the left end of a pair. C has that orientation. A and B put the pair on top; D puts the top square over the right end of the pair.",
    "figure": "vp-inset.svg",
    "alt": "In a four-by-four solid panel, the recess removes C2, C3 and D3. In the candidates: A is a top pair with bottom left; B is a top pair with bottom right; C is a bottom pair with top left; D is a bottom pair with top right.",
    "choices": [
      "A",
      "B",
      "C",
      "D"
    ],
    "id": 77,
    "kind": "Visual reasoning"
  },
  {
    "title": "The drafter’s two desk tops",
    "level": "Hard",
    "intro": "The drafter rotated one of these tabletops on the page and added new legs. Judge the two colored quadrilaterals alone.",
    "questions": [
      "Would one colored top fit exactly over the other if you could rotate and slide it?"
    ],
    "hints": [
      "The legs introduce an up direction that the flat shapes themselves do not possess.",
      "Compare corresponding long sides, short sides and the angle where a long and a short side meet."
    ],
    "answer": "Yes. They are congruent parallelograms.",
    "why": "Each top was built from side vectors of lengths 142 and about 70.7 meeting at the same acute angle of 45 degrees. B is A turned a further 72 degrees and translated. Rotating it back makes all four corners coincide.",
    "figure": "cab-desks.svg",
    "alt": "Two oblique four-sided colored tabletops, each with downward legs but differently tilted long edges.",
    "reveal": "cab-desks-proof.svg",
    "revealAlt": "A dashed rust outline coincides with all four edges of the green top.",
    "choices": [
      "Yes, exact fit",
      "No, B is longer",
      "No, A is wider"
    ],
    "id": 78,
    "kind": "Optical illusions"
  },
  {
    "title": "A landscape along the edge",
    "level": "Hard",
    "intro": "A closed sketchbook has a plain cream edge opposite its spine. A bookseller presses the cover sideways, sliding the leaves into a shallow fan. A tiny blue cottage among green trees appears along the sloping edge of the block. The leaves stay in order. Examined separately, each page has a very narrow colored band on one face just inside its outer margin. The color stops short of the actual cut edge. Closing the book square hides the entire landscape again.",
    "questions": [
      "Where was the book when the artist painted the cottage, and what becomes of the paint when the pages lie square?"
    ],
    "hints": [
      "A single sloping surface can be made of very narrow strips from many different leaves.",
      "Hold the pages in their fanned position. Which narrow strips can a brush now reach at the same time?"
    ],
    "answer": "The artist painted across the exposed strips while the pages were held fanned. Squaring the pages covers those strips with the leaves above them.",
    "why": "In the fanned block each leaf exposes a sliver of its face. Together the slivers form a continuous surface for the painting. Repeating the fan lines those colored strips up again. The square block shows the unpainted cut edges, while the bands rest just inside the book.",
    "id": 79,
    "kind": "Lateral thinking"
  },
  {
    "title": "A strip for the bookbinder",
    "level": "Medium",
    "intro": "A bookbinder fills a single straight strip of length seven with tiles of length one or two. All tiles have the same width. Read arrangements from the gilt left edge; a reversed arrangement is different if it puts joints in different places.",
    "questions": [
      "How many arrangements fill the strip exactly?"
    ],
    "hints": [
      "Classify arrangements by the length of their last tile.",
      "For length three there are three arrangements. A strip of length four can end with a single added to length three, or a double added to length two."
    ],
    "answer": "21 arrangements.",
    "why": "Let a(n) count length n. Ending with a one-unit tile contributes a(n−1), and ending with a two-unit tile contributes a(n−2). The empty strip has one arrangement, and length one has one. Lengths two through seven then give 2, 3, 5, 8, 13 and 21.",
    "id": 80,
    "kind": "Logic"
  },
  {
    "title": "The sailmaker’s pegboard",
    "level": "Medium",
    "intro": "A taut cord encloses a four-sided patch on a pegboard. The surrounding rectangle is six centimetres wide and four high. Consecutive pegs in each row or column are one centimetre apart.",
    "questions": [
      "What is the area inside the cord?"
    ],
    "hints": [
      "Compute the full rectangle and subtract the four triangular corners.",
      "The upper-left corner triangle has legs two and three, so its area is three square centimetres."
    ],
    "answer": "14 square centimetres.",
    "why": "The 6-by-4 bounding rectangle covers 24 square centimetres. The four corner triangles have areas 3, 2, 3 and 2 going clockwise from upper left. Together they remove 10, leaving 14.",
    "figure": "vp-pegs.svg",
    "alt": "The enclosing rectangle has corners (0,0), (6,0), (6,4), (0,4), using coordinates rightward and downward. The cord joins (2,0), (6,1), (4,4), (0,3) in order.",
    "id": 81,
    "kind": "Visual reasoning"
  },
  {
    "title": "A deceptive interval",
    "level": "Medium",
    "intro": "A line runs from P to R. The part from P to Q is divided into five equal intervals. The part from Q to R is empty.",
    "questions": [
      "Is the empty stretch closer to three, four, or five small intervals?"
    ],
    "hints": [
      "The crowded and empty parts can make equal distances look unequal.",
      "Estimate by carrying one small gap repeatedly along the empty part."
    ],
    "answer": "Four small intervals.",
    "why": "Each small spacing is 48 units. Q to R is 196 units, or about 4.08 spacings. Four would total 192, while three and five would total 144 and 240.",
    "figure": "cab-intervals.svg",
    "alt": "Five little ruled intervals fill P to Q, followed by an unmarked interval from Q to R.",
    "reveal": "cab-intervals-proof.svg",
    "revealAlt": "Four extra 48-unit spacings fit in the empty segment, leaving a sliver.",
    "choices": [
      "Three",
      "Four",
      "Five"
    ],
    "id": 82,
    "kind": "Optical illusions"
  },
  {
    "title": "The backwards mill wheel",
    "level": "Hard",
    "intro": "A row of still photographs shows a paddle wheel with eight identical paddles. The photographer took the pictures at equal intervals. In the first picture a paddle tip is at twelve o’clock. In the next it seems to have slipped a quarter of a paddle spacing counterclockwise, and it keeps seeming to do that. A side camera shows a chalk mark on one particular paddle. Between successive pictures that marked paddle actually travels clockwise by exactly 31/32 of a revolution.",
    "questions": [
      "Why does matching each paddle with its nearest apparent successor give the wrong direction? How large is that apparent backward jump?"
    ],
    "hints": [
      "One full turn brings an eight-paddle pattern back to the same appearance.",
      "Thirty-one thirty-seconds clockwise stops just before one full revolution. Compare its endpoint with the starting position."
    ],
    "answer": "A clockwise turn of 31/32 lands 1/32 of a turn counterclockwise from the start. The stills omit the intervening rotation.",
    "why": "The paddle was almost a full turn ahead, although its endpoint lies just behind its old place. One paddle spacing is 1/8 of a turn, so 1/32 is a quarter spacing. The nearest match is 1/32 backward; the nearest forward tip is 3/32 away. The chalk mark seen through the intervening motion settles which way the real wheel went.",
    "id": 83,
    "kind": "Lateral thinking"
  },
  {
    "title": "One light spool",
    "level": "Medium",
    "intro": "Nine identical-looking spools lie in three trays of three. Exactly one spool is too light; the other eight weigh the same. A two-pan balance only tells lighter, heavier or equal. You have two weighings.",
    "questions": [
      "Can you guarantee finding the light spool, even if the first weighing balances? Give the plan."
    ],
    "hints": [
      "You can arrange matters so that each possible first result leaves exactly three candidates.",
      "Use a tray against a tray first. Then single out the light spool within the suspected tray."
    ],
    "answer": "Yes. Weigh tray A’s three spools against tray B’s three. Then weigh one suspect spool against a second.",
    "why": "Use only spools on the pans, with the trays left on the table. If the first comparison balances, use the three from C; otherwise use the lighter group. In the final comparison the lighter spool is the answer. If they balance, the unweighed third spool is light.",
    "id": 84,
    "kind": "Logic"
  },
  {
    "title": "The map around the canister",
    "level": "Medium",
    "intro": "This label goes around a straight canister. Its left and right dotted edges meet, with no overlap or twist. An ant starts on H. It walks three cells in the direction from G toward H, then one row downward, then two cells back the other way.",
    "questions": [
      "On which letter does it finish?"
    ],
    "hints": [
      "Only left-to-right steps wrap. The top and bottom remain separate edges.",
      "From H the three forward steps take the ant to A, B and C."
    ],
    "answer": "J.",
    "why": "H crosses the seam into A and reaches C after three steps. Directly below C is L. Going back two cells passes K and lands on J.",
    "figure": "vp-cylinder.svg",
    "alt": "Three rows of eight letters, left to right: A B C D E F G H; J K L M N P Q R; S T U V W X Y Z. The right edge meets the left.",
    "id": 85,
    "kind": "Visual reasoning"
  },
  {
    "title": "The shape behind the slot",
    "level": "Hard",
    "intro": "A rust-colored paper object is partly visible through a rectangular opening in an opaque folder. Inside the opening it fills a horizontal strip and has straight top and bottom edges. The side edges disappear under the folder.",
    "questions": [
      "Does the visible evidence uniquely determine that the hidden object is a rectangle? Give two possible outlines."
    ],
    "hints": [
      "Which edges actually end in view, and which are cut off by the folder?",
      "Try changing the shape only beyond the left and right edges of the opening."
    ],
    "answer": "No. A long rectangle and a long strip with pointed ends both fit.",
    "why": "Both proofs have the same straight central 240-unit stretch and height 40. One has square ends farther out, the other tapers to points. The folder conceals every pixel where they differ.",
    "figure": "cab-slot.svg",
    "alt": "A rectangular opening in a dark folder shows a rust strip with straight top and bottom edges and cropped ends.",
    "reveal": "cab-slot-proof.svg",
    "revealAlt": "A rectangle and a double-pointed strip match exactly between two guides.",
    "id": 86,
    "kind": "Optical illusions"
  },
  {
    "title": "The bun that won by coming second",
    "level": "Medium",
    "intro": "At the village bake-off, fifteen judges each rank three buns. Citrus heads six cards, ginger heads five, and plum heads four. No judge changes a card, and nobody ranks two buns equally. Only one bun wins. After the count, the clerk takes the pile belonging to the least popular first choice and deals every card in it onto the ginger pile. All four of those cards have ginger written on their second line.",
    "questions": [
      "What counting rule explains ginger’s win, and what is the final tally?"
    ],
    "hints": [
      "A ranking supplies another preference if the first one drops out.",
      "Leave the six citrus cards and five ginger cards where they are. Follow the four plum cards."
    ],
    "answer": "The lowest first choice was eliminated and its supporters’ next preferences were counted. Ginger beat citrus nine to six.",
    "why": "Plum had four first choices, the fewest. Those four judges all preferred ginger to citrus, so transferring their unchanged cards raises ginger from five to nine. A first-choice lead need not be a majority when there are three entries.",
    "id": 87,
    "kind": "Lateral thinking"
  },
  {
    "title": "The blind badge line",
    "level": "Hard",
    "intro": "There are three amber badges and two blue ones. Three players each wear one hidden badge, sampled without replacement. Rear sees Middle and Front. Middle sees Front. Front sees nobody. All players know the inventory and each answer is honest. Rear says, “I cannot tell my color.” After hearing that, Middle says, “Neither can I.”",
    "questions": [
      "Can Front now tell their color? Explain the deduction."
    ],
    "hints": [
      "What would Rear know if both badges ahead were blue?",
      "If Front were blue, what color would Middle infer for their own badge after Rear spoke?"
    ],
    "answer": "Yes. Front wears amber.",
    "why": "Two visible blue badges would force Rear’s own badge to be amber. Rear’s uncertainty rules out that pair. If Front were blue, Middle would therefore know that their own badge was amber. Middle’s uncertainty rules out blue for Front.",
    "id": 88,
    "kind": "Logic"
  },
  {
    "title": "The lantern walk",
    "level": "Hard",
    "intro": "Each line is one walking path between lantern posts. A keeper wants to use every path exactly once in one continuous walk. She may revisit a post.",
    "questions": [
      "At which two posts must the walk start and finish, in either order?"
    ],
    "hints": [
      "Every visit to an intermediate post pairs one path arriving with one path leaving.",
      "Count all the paths incident on each post, including the sweeping outer path."
    ],
    "answer": "A and F.",
    "why": "A has three paths and F has five; every other post has an even count. Only the endpoints can have one unpaired path. For example, the walk A–E–B–F–C–B–A–F–D–E–F uses every path exactly once.",
    "figure": "vp-bridges.svg",
    "alt": "Posts A through F are connected by these paths: AB, BC, DE, EA, AF, BF, CF, DF, EF, BE. The curve connects B to E without touching A.",
    "id": 89,
    "kind": "Visual reasoning"
  },
  {
    "title": "The coin inside the rim",
    "level": "Medium",
    "intro": "A jeweler drew a copper circle inside a navy hoop. One side looks roomy and the other tight. Decide which adjustment would center the coin.",
    "questions": [
      "Which way must the copper circle move to become concentric with the hoop? By how many units, if the two extreme horizontal gaps between centerlines are 36 and 60?"
    ],
    "hints": [
      "A sideways move adds to one gap and subtracts the same amount from the other.",
      "The smaller gap is on the right. Halve the difference between the gaps."
    ],
    "answer": "Move it 12 units left.",
    "why": "The hoop has center x = 320 and radius 112. The copper ring has center x = 332 and radius 64. The right gap is 36 and the left is 60. Moving left 12 makes both gaps 48.",
    "figure": "cab-doublerim.svg",
    "alt": "An off-center copper circle sits inside a larger hoop. The gap on the right is narrower than the gap on the left.",
    "reveal": "cab-doublerim-proof.svg",
    "revealAlt": "The corrected copper circle shares the center and has identical horizontal clearance on both sides.",
    "id": 90,
    "kind": "Optical illusions"
  },
  {
    "title": "The parcel that filled two tins",
    "level": "Easy",
    "intro": "A gardener packs dry potting mix tightly into a square tin and fastens the lid. At a demonstration she removes every last bit, crumbles it and pours the loose mix back without pressing. A mound remains after the tin is full. She pours the whole lot into a bigger box. Apart from their containers, the two weighings, before and after, match to the gram. There was no water or new material. Tapping the big box makes the top of the mix sink.",
    "questions": [
      "Where did the extra bulk come from, and why does the weighing matter?"
    ],
    "hints": [
      "Compare what fills the gaps between the crumbs in the two arrangements.",
      "Mass can stay the same while the spacing of the same pieces changes."
    ],
    "answer": "Loosening the mix left more empty space between its crumbs. The same material now takes up more room.",
    "why": "Mass compares the quantity of mix, including the part that overflowed. Volume also counts the spaces between pieces. Gentle tapping lets the crumbs settle into some of those spaces, which is why the surface sinks.",
    "id": 91,
    "kind": "Lateral thinking"
  },
  {
    "title": "The coins on their edges",
    "level": "Medium",
    "intro": "In a row of twelve counters, only numbers 1, 4, 7 and 10 show gold. The other faces are silver. One move flips exactly three counters of your choice, all at once. You want all twelve to show silver using exactly two moves.",
    "questions": [
      "Can you do it? If so, name the three counters in each move.",
      "What must be true about the overlap between the two moves?"
    ],
    "hints": [
      "There are six flips but only four gold counters need a net change.",
      "Every counter touched twice returns to its starting color. How many such double touches are needed?"
    ],
    "answer": "Yes. Flip 1, 4, 2; then flip 7, 10, 2. The moves must share exactly one counter.",
    "why": "Two groups of three that overlap once give four counters touched once and one touched twice. The four single touches must be the four original gold counters; the shared one must be an originally silver counter. It returns to silver.",
    "id": 92,
    "kind": "Logic"
  },
  {
    "title": "The fanmaker’s ribs",
    "level": "Hard",
    "intro": "Five straight ribs meet at the fan’s pivot. Two crossbars touch all five ribs; a short third one joins only the middle three. A triangle counts whenever its outline is present, even if other lines pass through its interior.",
    "questions": [
      "How many distinct triangles can be traced?"
    ],
    "hints": [
      "No two crossbars intersect. Every triangle must use two ribs and one crossbar.",
      "How many different pairs can you choose from five ribs? Now repeat for three."
    ],
    "answer": "23 triangles.",
    "why": "On either long bar, any pair of five contact points forms a base. There are 5 × 4 ÷ 2 = 10 pairs. The short bar meets only three ribs, giving three more pairs. All use the pivot as apex, so the total is 10 + 10 + 3.",
    "figure": "vp-fan.svg",
    "alt": "Five ribs radiate from one apex. Their endpoints lie on a straight long base. A second parallel bar spans all five; a third parallel bar only spans ribs 2 through 4.",
    "id": 93,
    "kind": "Visual reasoning"
  },
  {
    "title": "Which ribbon goes underneath?",
    "level": "Easy",
    "intro": "A weaver painted the crossing of a green diagonal ribbon and a straight copper ribbon. At first glance you might follow either colored strip through the junction.",
    "questions": [
      "Which ribbon is drawn on top at this crossing? Which visible contour tells you?"
    ],
    "hints": [
      "Trace the edges of one ribbon all the way through the junction.",
      "At an ordinary opaque crossing the nearer edge stays continuous and the farther edge stops against it."
    ],
    "answer": "The copper ribbon is on top.",
    "why": "Both vertical copper edges run uninterrupted. The green outline disappears where it meets each of them. The dashed lines in the proof extend the hidden part of the green ribbon through the copper one.",
    "figure": "cab-weave.svg",
    "alt": "A vertical copper strip crosses a diagonal green strip. Both sides of the copper strip are drawn continuously.",
    "reveal": "cab-weave-proof.svg",
    "revealAlt": "A pale copper overlay shows dashed green edges through the crossing.",
    "id": 94,
    "kind": "Optical illusions"
  },
  {
    "title": "The porter’s impossible initials",
    "level": "Medium",
    "intro": "A porter holds up a pocket watch by its rim for a photographer. The photo shows both the dial and the engraved initials on the back of that same watch. It is one exposure, the watch has no transparent parts, and the porter kept its back facing the camera. The photographer’s lettering on the studio wall reads normally. A small clock face visible just above the porter’s knuckles has its 3 where a 9 ordinarily sits. A narrow silver frame surrounds only that little clock face.",
    "questions": [
      "How did both sides of the watch enter the photograph? Why do the initials and dial disagree about left and right?"
    ],
    "hints": [
      "Find the boundary inside which writing and numbers change handedness.",
      "A separate reflecting surface can send light from the far side of an object toward the camera."
    ],
    "answer": "The camera saw the engraved back directly. An angled mirror beyond the watch supplied a view of its dial.",
    "why": "Light from the dial could reach the mirror, then the lens, even though the back faced the lens. Only the reflected dial is reversed. Reversing the entire photograph would reverse the wall lettering and the initials too.",
    "id": 95,
    "kind": "Lateral thinking"
  },
  {
    "title": "The circular enamel pin",
    "level": "Hard",
    "intro": "A round pin has six equally spaced bead sockets. Exactly two beads are red and four are white. The sockets have no marks. Two finished pins count as the same design if a rotation makes them match.",
    "questions": [
      "How many different designs are there? Describe each without numbering the sockets."
    ],
    "hints": [
      "Fix one red bead at the top and look at the shorter route around the rim to the other red bead.",
      "The red beads can be neighbors, have one white bead on the shorter arc, or lie opposite each other."
    ],
    "answer": "Three designs: touching reds, reds separated by one white on the short arc, and opposite reds.",
    "why": "The smaller distance between the red positions is one, two or three rim steps. Positions four and five steps clockwise can be described as two and one steps by choosing the other red as the start. Rotation preserves this smaller distance and relates all arrangements with the same value.",
    "id": 96,
    "kind": "Logic"
  },
  {
    "title": "The tilted lacquer tray",
    "level": "Medium",
    "intro": "Each counter slides within its own row or column until it meets a wall or another counter. First tilt the tray fully left, let it settle, then tilt it fully down. Counters never overtake one another. Rust counters have a pale dash; navy counters are plain.",
    "questions": [
      "Which cells contain rust counters at the end?"
    ],
    "hints": [
      "Compress every row toward A, preserving the left-to-right order of the colors.",
      "After that first tilt, column A has four counters and column B has three. Read each column from top to bottom and slide it to the bottom."
    ],
    "answer": "A2, B2, A3.",
    "why": "After the left tilt, the nonempty colors in rows 1 through 4 read navy–rust, rust–navy, rust–navy, and navy. Nothing in column A can descend, while the group in column B drops one cell. Its rust counter ends at B2.",
    "figure": "vp-slide.svg",
    "alt": "Five columns A–E and four rows 1–4. Navy at B1, E2, D3 and A4. Rust at D1, A2 and C3. Tilt left, then down.",
    "id": 97,
    "kind": "Visual reasoning"
  },
  {
    "title": "The embroiderer’s missing stitch",
    "level": "Medium",
    "intro": "Two rows of dark stitches cross at the middle. The marks themselves do not specify which thread made which stitch. Now add one condition: each thread continued straight through the center.",
    "questions": [
      "Which right-hand end belongs with P under the straight-through condition? Would the marks alone rule out a turn at the center?"
    ],
    "hints": [
      "Follow the spacing and direction of the first two steps from P.",
      "Treat the central stitch as a junction with more than one possible departure."
    ],
    "answer": "P goes to S if its thread stayed straight. Without that condition it could turn and meet R.",
    "why": "P advances 48 units right and 22 down at each step. Repeating that step exits toward S. Endpoints alone do not encode whether a real thread bent. The colored paths in the proof display the extra straightness assumption.",
    "figure": "cab-crossstitch.svg",
    "alt": "Evenly spaced dots form an X. P and Q label the upper and lower left arms; R and S label the upper and lower right.",
    "reveal": "cab-crossstitch-proof.svg",
    "revealAlt": "Two straight colored stitch paths show P joining S and Q joining R.",
    "id": 98,
    "kind": "Optical illusions"
  },
  {
    "title": "A missing strip of music",
    "level": "Hard",
    "intro": "A composer cuts a section out of a paper roll that operates a little music box. She joins the two remaining ends and cranks the roll at the same steady speed. A listener hears every original note in its original order, at its original pitch and for its full duration. Yet the piece ends six seconds sooner. Two matching pencil slashes once bracketed the removed strip. Now they touch. Between the two slashes the original roll had no holes of any kind. The box plays a note only when a hole goes past a feeler.",
    "questions": [
      "What did the composer cut from the piece, and why would a list of notes miss the edit?"
    ],
    "hints": [
      "The box does something even while a blank length of roll moves through it.",
      "Think of what separates two phrases as part of the performance."
    ],
    "answer": "She shortened a rest by removing six seconds’ worth of blank paper.",
    "why": "Every sounding note still has its original hole and length. The blank paper between phrases used to take time to pass the feelers. Removing it brings the second phrase forward while preserving the order, pitch and duration of all the notes. A list that records only the notes omits that silence.",
    "id": 99,
    "kind": "Lateral thinking"
  },
  {
    "title": "The date on the ticket stub",
    "level": "Easy",
    "intro": "The first day of a 30-day exhibition was a Tuesday. The catalog was unveiled on a Friday after the 13th. The final lecture was exactly nine days after the unveiling, still in the same exhibition. Its date was odd.",
    "questions": [
      "On which dates did the unveiling and lecture fall?"
    ],
    "hints": [
      "Count forward three days from Tuesday the first to find the first Friday.",
      "List Fridays after the 13th. Eliminate any that put the lecture beyond day 30."
    ],
    "answer": "The unveiling was Friday the 18th. The lecture was on the 27th.",
    "why": "The Fridays are the 4th, 11th, 18th and 25th. Adding nine to the last two gives 27 and 34. Only 27 is within the exhibition and it is odd.",
    "id": 100,
    "kind": "Logic"
  },
  {
    "id": 101,
    "kind": "Visual reasoning",
    "title": "The mosaic courier",
    "level": "Medium",
    "intro": "The courier moves one square east or south at each step. Black tiles are closed.",
    "questions": [
      "How many different routes reach F from S?"
    ],
    "hints": [
      "Write 1 in S. A tile inherits routes from the tile above it and the tile on its left.",
      "The tallies in row three, left to right, are 1, 1, 2, 0, 1."
    ],
    "answer": "4 routes.",
    "why": "Add the tallies from the west and north at every open tile. The last row reads 0, 1, 3, 3, 4, so its final tally counts every allowed route exactly once.",
    "figure": "p2v-paths.svg",
    "alt": "Rows read S · · blocked · / · blocked · · · / · · · blocked · / blocked · · · F."
  },
  {
    "id": 102,
    "kind": "Optical illusions",
    "title": "The weaver’s gray shuttles",
    "level": "Medium",
    "intro": "Two short gray shuttles interrupt the striped cloth. A lies in a light stripe and B in the dark stripe immediately below it.",
    "questions": [
      "Do the shuttles use different grays? Name the two ways each shuttle meets its background."
    ],
    "hints": [
      "Inspect the short ends of each shuttle, then its long edges.",
      "A and B trade the roles of the colors at their ends and along their sides."
    ],
    "answer": "They use the same gray. A ends in light and borders dark; B ends in dark and borders light.",
    "why": "Each shuttle uses the identical solid fill. The stripes interrupted at the short ends and the neighboring long bands provide competing context. Isolating the shuttles reveals their match.",
    "figure": "p2o-weft.svg",
    "alt": "Eight alternating light and dark horizontal stripes. Gray A interrupts a light stripe; gray B interrupts the next dark stripe.",
    "reveal": "p2o-weft-proof.svg",
    "revealAlt": "The surrounding stripes disappear; the two gray rectangles retain identical ink."
  },
  {
    "id": 103,
    "kind": "Lateral thinking",
    "title": "The applause before the landing",
    "level": "Medium",
    "intro": "In a recording from a balcony overlooking a long outdoor stage, the first claps sound before the thump of Tessa catching a falling prop. The balcony spectators all insist they waited until they saw the catch. A microphone beside Tessa recorded the thump half a second earlier than the balcony microphone did. Both clocks were synchronized.",
    "questions": [
      "The replay used the balcony sound for Tessa’s catch. Why can the nearby spectators on that recording seem too quick?"
    ],
    "hints": [
      "Identify what had to travel to the balcony microphone.",
      "Compare the path from the hands in the balcony with the path from the stage."
    ],
    "answer": "The nearby claps reached the balcony microphone before the much more distant sound from the stage.",
    "why": "The camera sees the catch essentially at once. People can react to that sight and clap beside the microphone while the sound of the catch is still crossing the distance to the balcony. The claps can precede the recorded thump, although they follow the visible catch."
  },
  {
    "id": 104,
    "kind": "Logic",
    "title": "The marble border",
    "level": "Medium",
    "intro": "A border exactly six units long is built from ivory tiles of length one and green tiles of length two. Green tiles may never touch. Tiles of the same color are identical. Count from the marked left end, so a pattern and its reverse count separately if they differ.",
    "questions": [
      "How many different finished borders are there?"
    ],
    "hints": [
      "Group the borders by how many green tiles they contain.",
      "With two green tiles, two ivory tiles remain. List the ways the green tiles can occupy two nonadjacent positions in that four-tile line."
    ],
    "answer": "Nine borders.",
    "why": "All ivory gives one. One green tile can start at any of five positions along the six-unit border. With two green tiles the four-tile orders are GIGI, GIIG and IGIG. Three green tiles would touch. That gives 1 + 5 + 3 = 9."
  },
  {
    "id": 105,
    "kind": "Visual reasoning",
    "title": "The alphabet dominoes",
    "level": "Medium",
    "intro": "Lay all seven tiles in a single chain with matching letters touching. Tiles may be turned end for end.",
    "questions": [
      "Which two letters must be exposed at the ends?"
    ],
    "hints": [
      "Count the total appearances of each letter.",
      "Interior joins consume occurrences in pairs."
    ],
    "answer": "A and F, in either order.",
    "why": "A occurs five times and F once. All the other letters occur twice. A working chain reads AB–BD–DA–AC–CE–EA–AF.",
    "figure": "p2v-ends.svg",
    "alt": "Seven dominoes read AB, BD, DA, AC, CE, EA and AF."
  },
  {
    "id": 106,
    "kind": "Optical illusions",
    "title": "The measuring hoops",
    "level": "Easy",
    "intro": "Each black hoop encloses a rust-colored ring. One inner ring almost fills its hoop.",
    "questions": [
      "Which black hoop spans more of the page? How could you compare them without judging the empty centers?"
    ],
    "hints": [
      "Ignore the rust-colored rings.",
      "A caliper touching the left and right extremes would measure only the outer hoop."
    ],
    "answer": "The black hoops have equal diameters.",
    "why": "Both black circular centerlines have a radius of 50 drawing units. The different inner rings change the width of empty space and can influence apparent size. The answer plate marks equal diameters.",
    "figure": "p2o-rings.svg",
    "alt": "Two black hoops enclose concentric rust rings, one large and one small.",
    "reveal": "p2o-rings-proof.svg",
    "revealAlt": "Each black hoop is shown with a teal diameter, both measuring 100 units."
  },
  {
    "id": 107,
    "kind": "Lateral thinking",
    "title": "The hotel with a traveling lobby",
    "level": "Easy",
    "intro": "A guest’s key card reads 412. At breakfast her window faces a clock tower. At lunch the same window faces an orchard. Her suitcase has never left the room. A receipt was stamped ‘north pier’ at breakfast and ‘upper lock’ at lunch. The walls and the window do not rotate, and both views are real.",
    "questions": [
      "What kind of hotel room fits all the evidence?"
    ],
    "hints": [
      "Ask what the pier and lock have in common.",
      "The room can stay in exactly the same place relative to its own lobby."
    ],
    "answer": "It is a cabin aboard a traveling hotel boat.",
    "why": "The entire hotel moved along the waterway between the two stops. The guest, the window and the suitcase stayed in the same positions aboard it."
  },
  {
    "id": 108,
    "kind": "Logic",
    "title": "The dyer’s two measures",
    "level": "Hard",
    "intro": "A dyer has empty rigid measures holding exactly seven cups and four cups. Neither has intermediate marks. A tap and a drain are available. A move is a full fill, a full empty, or a pour from one measure to the other until the first empties or the other fills.",
    "questions": [
      "Give a sequence that leaves exactly two cups in the seven-cup measure in eight moves or fewer."
    ],
    "hints": [
      "The small measure can be used to leave three cups behind after one pour.",
      "Put those three cups into the smaller measure. The next time the larger measure is full, only one cup can leave on its first pour."
    ],
    "answer": "Reading (large, small): (7,0), (3,4), (3,0), (0,3), (7,3), (6,4), (6,0), (2,4).",
    "why": "Fill the large measure, pour four out into the small one, empty the small one, then transfer the remaining three. Refill the large measure. Only one cup fits in the small one this time. Empty that measure and pour four cups into it again, leaving exactly two in the large one."
  },
  {
    "id": 109,
    "kind": "Visual reasoning",
    "title": "The pattern punch",
    "level": "Easy",
    "intro": "Place the punch card over the letter board with its printed face up. Rotate the card a quarter-turn clockwise without turning it over.",
    "questions": [
      "Which five letters show through the holes?"
    ],
    "hints": [
      "Track the top-left hole first: it ends at the top right.",
      "The diagonal through the center maps onto the opposite diagonal."
    ],
    "answer": "B, C, D, E and G.",
    "why": "Reading the original holes by rows gives A, D, E, H and I. A clockwise turn sends those positions to C, B, E, D and G.",
    "figure": "p2v-pinboard.svg",
    "alt": "Left card has holes in the first column of row 1, columns 1 and 2 of row 2, and columns 2 and 3 of row 3. Right board reads ABC / DEF / GHI."
  },
  {
    "id": 110,
    "kind": "Optical illusions",
    "title": "The comb and the bare ruler",
    "level": "Easy",
    "intro": "A single rule has three long marks. The space on the left is filled with short teeth; the space on the right is open.",
    "questions": [
      "Is the central long mark exactly halfway between the end marks?"
    ],
    "hints": [
      "Compare endpoint to endpoint. Counting the short ticks tells you little about the empty region on its own.",
      "Imagine folding the line at the central mark."
    ],
    "answer": "Yes. The long mark is at the midpoint.",
    "why": "The marks sit at 75, 300 and 525 units horizontally. Each half measures 225. The filled interval can occupy more visual attention than the empty interval.",
    "figure": "p2o-ticks.svg",
    "alt": "Three long ticks on a rule. Only the left interval contains short ticks.",
    "reveal": "p2o-ticks-proof.svg",
    "revealAlt": "Identical 225-unit measurements are printed above both halves."
  },
  {
    "id": 111,
    "kind": "Lateral thinking",
    "title": "A second name under glass",
    "level": "Medium",
    "intro": "An archivist slides a white card behind an apparently blank sheet. Nothing. She holds the sheet against a lamp, and the name MINNOW appears. A lens shows thinner paper fibers in the letters. Both surfaces are clean. The maker says the name was already there before the sheet dried.",
    "questions": [
      "How was the name put into the paper?"
    ],
    "hints": [
      "There is no colored substance to look for.",
      "Think about the thickness of the wet pulp when a sheet is formed."
    ],
    "answer": "It was made as a watermark while the paper was being formed.",
    "why": "Raised letters on a papermaking screen leave less pulp in those areas. The thinner letters transmit more light. A white card behind the sheet in ordinary reflected light gives much less contrast."
  },
  {
    "id": 112,
    "kind": "Logic",
    "title": "Four enamel plaques",
    "level": "Medium",
    "intro": "A token lies in exactly one box: Red, Green, Blue or Gold. Four plaques make the claims listed below. Exactly one of the four claims is true.",
    "questions": [
      "Which box holds the token?"
    ],
    "hints": [
      "The first and last plaques contradict each other exactly.",
      "One truth is already guaranteed by those two plaques. What must that make each of the middle two claims?"
    ],
    "answer": "Blue.",
    "why": "‘In Green’ and ‘outside Green’ always contribute exactly one truth. Both other plaques must therefore be false. ‘Outside Blue’ being false puts the token in Blue, which also makes ‘In Red or Gold’ false.",
    "tables": [
      [
        "Plaques in display order",
        [
          "Plaque",
          "Claim"
        ],
        [
          [
            "1",
            "In Green"
          ],
          [
            "2",
            "Outside Blue"
          ],
          [
            "3",
            "In Red or Gold"
          ],
          [
            "4",
            "Outside Green"
          ]
        ]
      ]
    ]
  },
  {
    "id": 113,
    "kind": "Visual reasoning",
    "title": "Paint on the plinth",
    "level": "Hard",
    "intro": "Each number gives the height of a solid stack of unit cubes. Paint every exposed vertical face, including faces along the outside. Leave horizontal faces bare.",
    "questions": [
      "How many unit faces receive paint?"
    ],
    "hints": [
      "For stacks sharing an edge, only the difference in heights contributes.",
      "The outside perimeter contributes 36 faces. Add the six horizontal and six vertical differences inside."
    ],
    "answer": "62 vertical faces.",
    "why": "The four outside edges contribute 11, 11, 7, 7 faces. Differences between neighbors along the three rows add 5, 5, 4 more. Between successive rows they add 5, 7. The total is 62.",
    "figure": "p2v-cubes.svg",
    "alt": "Stack heights from back row to front row read 1,4,6 / 2,5,3 / 4,1,2."
  },
  {
    "id": 114,
    "kind": "Optical illusions",
    "title": "The clockmaker’s lozenges",
    "level": "Easy",
    "intro": "Each engraved lozenge is hatched on two opposite quadrants. The direction of the fine strokes changes between the panels.",
    "questions": [
      "Which outline is wider than it is tall?"
    ],
    "hints": [
      "Find the four extreme points of each outline.",
      "Compare the two diagonals of each lozenge."
    ],
    "answer": "Neither. Both outlines have equal horizontal and vertical spans.",
    "why": "Each lozenge is a square rotated 45 degrees, with both diagonals 156 units long. Hatching draws the eye along different slants without moving any corner.",
    "figure": "p2o-diamond.svg",
    "alt": "Two diamond-shaped outlines with different diagonal hatch orientations.",
    "reveal": "p2o-diamond-proof.svg",
    "revealAlt": "Rust lines join opposite corners; the two diagonals of each diamond have matching lengths."
  },
  {
    "id": 115,
    "kind": "Lateral thinking",
    "title": "The train that passed itself",
    "level": "Easy",
    "intro": "In a rail museum a boy sees the engine of his own moving train pass his window, traveling the other way. He can read its unique brass number normally. No mirror, photograph or second engine is involved. The route map shows two closely spaced straight tracks joined at their far end by a tight loop.",
    "questions": [
      "Where on the train is the boy, and how can he see this?"
    ],
    "hints": [
      "An engine can be ahead of a carriage without facing in the same direction.",
      "Compare the length of a long train with the length of the turning loop."
    ],
    "answer": "He is far enough back that his carriage is approaching the loop while the engine is already coming back down the parallel track.",
    "why": "A long train can occupy both sides of a hairpin at once. The engine leads continuously along the rails but temporarily passes its own rear carriages."
  },
  {
    "id": 116,
    "kind": "Logic",
    "title": "Five bays in the winter garden",
    "level": "Medium",
    "intro": "A rectangular floor is two squares deep and five squares wide. Cover it completely with unmarked 1-by-2 tiles, laid parallel to the walls, with no gaps or overlaps. The entrance marks the left side, and tilings that differ at any location count separately.",
    "questions": [
      "How many tilings can the floor take?"
    ],
    "hints": [
      "At the left edge, either one tile stands upright or two horizontal tiles occupy the first two columns.",
      "For a strip of width n, add the counts for widths n−1 and n−2."
    ],
    "answer": "Eight tilings.",
    "why": "A one-column floor has one tiling and a two-column floor has two. At the first column, a vertical tile leaves a floor one column shorter. A horizontal top tile forces a horizontal bottom tile, leaving a floor two shorter. The counts for widths 3, 4 and 5 are therefore 3, 5 and 8."
  },
  {
    "id": 117,
    "kind": "Visual reasoning",
    "title": "The typesetter’s snail",
    "level": "Easy",
    "intro": "Starting at A, trace the outer edge clockwise, reading each cell once. Whenever the next cell is outside the board or already read, turn right. Continue into the center.",
    "questions": [
      "What are the final five letters, in order?"
    ],
    "hints": [
      "The first corner is E. The second is O.",
      "Once you reach K, work your way back to the interior."
    ],
    "answer": "K, F, G, H, I.",
    "why": "The full spiral is A B C D E J O N M L K F G H I. The last turn at F sends you across the middle row.",
    "figure": "p2v-walk.svg",
    "alt": "A three-row letter tray reads ABCDE / FGHIJ / KLMNO."
  },
  {
    "id": 118,
    "kind": "Optical illusions",
    "title": "The off-center sun dial",
    "level": "Medium",
    "intro": "A fine sunburst and a rust-colored ring have different centers. The shifting angle of each spoke can make the ring look irregular.",
    "questions": [
      "Is the ring circular, and does the center of the sunburst lie inside it?"
    ],
    "hints": [
      "Separate the shape of the outline from the placement of its center.",
      "The centers are 25 units apart and the radius is 72 units."
    ],
    "answer": "It is a circle, with the sunburst center inside it.",
    "why": "The radius stays at 72 in every direction. The sunburst center is displaced 25 units to the left, well inside the circle. The spokes create a varying context around the circumference.",
    "figure": "p2o-sunring.svg",
    "alt": "An off-center rust ring is superimposed on straight spokes radiating from a point inside it.",
    "reveal": "p2o-sunring-proof.svg",
    "revealAlt": "The ring is isolated; dots show the two centers and a line shows its radius."
  },
  {
    "id": 119,
    "kind": "Lateral thinking",
    "title": "Letters on the dry side",
    "level": "Medium",
    "intro": "An exhibition label reads RAIN in white on a blue field. A visitor wets the R with clear water, and the letter disappears. It returns when it dries. No color comes off on a cloth. A sample cross-section shows a solid blue board covered, only in the letter shapes, by a thin milky layer full of tiny air spaces.",
    "questions": [
      "What should wetting that milky film do, and why can that make a white letter disappear?"
    ],
    "hints": [
      "The solid blue is behind the film.",
      "A wet layer that becomes transparent reveals its backing."
    ],
    "answer": "The wet white letter becomes transparent enough to show the same blue as its surroundings.",
    "why": "When dry, the porous letter scatters light and looks pale. Water fills the pores and reduces the scattering. The blue backing then shows through, erasing the contrast. Drying restores it."
  },
  {
    "id": 120,
    "kind": "Logic",
    "title": "Nineteen counters at closing time",
    "level": "Hard",
    "intro": "Two players share a heap of 19 counters. On each turn remove exactly 1, 3 or 4, never more than remain. Whoever takes the last counter wins. You play first against an opponent who always takes a winning move if one exists.",
    "questions": [
      "Which opening move guarantees you can win?"
    ],
    "hints": [
      "Call a heap losing when the player to move has no winning reply. An empty heap is losing for that player.",
      "The losing heaps through 10 are 0, 2, 7 and 9. Continue by checking where each legal subtraction leads."
    ],
    "answer": "Remove three counters, leaving sixteen.",
    "why": "Working upward from zero, a heap is losing if every legal move leads to a winning heap. Through 19 the losing sizes are 0, 2, 7, 9, 14 and 16. Your options from 19 leave 18, 16 or 15. Only 16 is losing for the next player. On later turns return the opponent to a losing size."
  },
  {
    "id": 121,
    "kind": "Visual reasoning",
    "title": "The reversible tile panel",
    "level": "Medium",
    "intro": "Flip just the upper two rows as one rigid rectangle, left to right, then flip just the middle two columns as one rigid rectangle, top to bottom. Read their numbers as labels even if a tile turns upside down.",
    "questions": [
      "Which tile ends in row 3, column 2?"
    ],
    "hints": [
      "Undo the last operation first. Where did row 3, column 2 come from?",
      "Its position before the column flip was row 2, column 2."
    ],
    "answer": "Tile 7.",
    "why": "Undoing the column flip sends row 3 to row 2. Undoing the earlier horizontal flip in the upper rectangle sends column 2 to column 3. The original row 2, column 3 contains 7.",
    "figure": "p2v-halves.svg",
    "alt": "Tiles read 1 to 16 in four rows of four, from top left to bottom right."
  },
  {
    "id": 122,
    "kind": "Optical illusions",
    "title": "The misfiled staff line",
    "level": "Medium",
    "intro": "Four ink rules cross rows of short slanted strokes. The draftsperson promises that exactly one long rule rises slightly from left to right.",
    "questions": [
      "Which rule truly rises?"
    ],
    "hints": [
      "Judge the endpoints of the long rule, ignoring the short strokes.",
      "Carry the left endpoint height horizontally across to the right."
    ],
    "answer": "Rule C.",
    "why": "Rules A, B and D have matching endpoint heights. C ends nine drawing units above its starting height. Removing the hatches and adding horizontal guides exposes the rise.",
    "figure": "p2o-lean.svg",
    "alt": "Four labeled long rules A to D cross short strokes with alternating tilts. Only C’s right endpoint is higher than its left.",
    "reveal": "p2o-lean-proof.svg",
    "revealAlt": "Each rule is compared with a light horizontal line through its left endpoint; only C rises."
  },
  {
    "id": 123,
    "kind": "Lateral thinking",
    "title": "The missing middle of a tune",
    "level": "Hard",
    "intro": "An old mechanical street organ plays the first and third phrases of a waltz, with a perfectly timed silence between them. Its paper roll has holes for every note in all three phrases. The bellows and pipes work. The tune returns intact if the player flattens a crease that runs lengthwise through just the middle stretch of paper. The tracker bar reads a note only when a hole lies directly over one of its air ports.",
    "questions": [
      "Why did the silence last exactly one phrase without putting the third phrase out of time?"
    ],
    "hints": [
      "Separate the roll’s travel along its length from the holes’ alignment across its width.",
      "The paper can keep moving while it is pulled sideways over the tracker bar."
    ],
    "answer": "The crease drew the middle phrase’s holes out of line with the air ports while that stretch continued feeding normally.",
    "why": "The paper advanced by the right distance at the usual speed, so a phrase’s worth of time elapsed. Misaligned holes never opened the required ports. When the uncreased part arrived, alignment and sound returned on the original beat."
  },
  {
    "id": 124,
    "kind": "Logic",
    "title": "The painter’s narrow stencil",
    "level": "Medium",
    "intro": "Every locker from 1 through 120 is labeled once in ordinary decimal numerals, with no leading zeros. The sign painter issues a separate stencil stamp for every digit impression, including both 1s in 11.",
    "questions": [
      "How many impressions use the digit 1?"
    ],
    "hints": [
      "Count impressions in the units, tens and hundreds positions separately.",
      "In 100–120, the tens digit is 1 only in the ten labels from 110 to 119."
    ],
    "answer": "53 impressions.",
    "why": "The units digit is 1 on 1, 11, …, 111, giving 12. The tens digit is 1 on 10–19 and 110–119, giving 20. Every number from 100 to 120 has a hundreds digit of 1, giving 21. Their sum is 53."
  },
  {
    "id": 125,
    "kind": "Visual reasoning",
    "title": "The stairmaker’s edging",
    "level": "Easy",
    "intro": "A green molding follows a stair profile. It moves only right or up, from its lower-left end to its upper-right end.",
    "questions": [
      "What is the total length of the molding?"
    ],
    "hints": [
      "There is no need to measure the individual steps.",
      "Slide all the vertical segments together, then all the horizontal ones."
    ],
    "answer": "36 cm.",
    "why": "The rightward segments together cover the 24 cm span and the upward segments together cover the 12 cm rise. The total is 24 + 12 = 36 cm.",
    "figure": "p2v-stairs.svg",
    "alt": "An ascending green staircase has horizontal span 24 cm and total rise 12 cm."
  },
  {
    "id": 126,
    "kind": "Optical illusions",
    "title": "A pair of clay buttons",
    "level": "Easy",
    "intro": "A potter sets two clay buttons into colored sample boards, one greenish and one rose.",
    "questions": [
      "Were the buttons tinted differently? What could make one appear rosier to some viewers?"
    ],
    "hints": [
      "Look at how each background differs from its button.",
      "A surrounding greenish hue can shift the impression of a neighboring neutral toward its opponent."
    ],
    "answer": "The buttons have the same printed color. The greenish surround can make its button look rosier.",
    "why": "Both discs use the same muted clay fill. Color judgments depend partly on nearby color. The strength and direction of the impression can vary with the screen and viewer.",
    "figure": "p2o-pigment.svg",
    "alt": "Two clay-colored discs on different colored backgrounds, greenish on the left and rose on the right.",
    "reveal": "p2o-pigment-proof.svg",
    "revealAlt": "The two discs are isolated against the same paper background."
  },
  {
    "id": 127,
    "kind": "Lateral thinking",
    "title": "A long way to spell Tuesday",
    "level": "Medium",
    "intro": "The club prints its whole daily message using only the individual letter tiles in one small tray. Tonight’s message calls Tuesday ‘the day following Monday’. The typesetter has plenty of room and normally writes the shorter weekday. A glance at the tray after printing shows every original tile back in place except a single kind that is away for repair. No punctuation or spelling tricks are allowed. The repair receipt is for a vowel.",
    "questions": [
      "Which missing letter forces the long wording?"
    ],
    "hints": [
      "Find letters in Tuesday that the substitute wording never needs.",
      "The receipt narrows the search to vowels. Which vowels remain available in the substitute phrase?"
    ],
    "answer": "U. The substitute wording avoids U, while Tuesday requires it.",
    "why": "The other vowels in Tuesday are E and A. Both occur in ‘the day following Monday’. Of the vowels in the normal wording, U alone is unnecessary in the substitute."
  },
  {
    "id": 128,
    "kind": "Logic",
    "title": "The square-market rendezvous",
    "level": "Medium",
    "intro": "The market is a square grid of streets. Coordinates run east and north from (0,0) to (4,4). A courier walks only along streets, and the distances below are shortest walking distances measured in blocks. A stall is five blocks from (0,0) and three from (4,0).",
    "questions": [
      "What are the stall’s coordinates?"
    ],
    "hints": [
      "From the southwest corner, a stall at (x,y) is x+y blocks away.",
      "From the southeast corner the distance is 4−x+y. Subtract the two equations."
    ],
    "answer": "(3,2).",
    "why": "The distances give x+y=5 and 4−x+y=3. Subtracting the second from the first gives 2x−4=2, so x=3. Then y=2. Both coordinates lie inside the market."
  },
  {
    "id": 129,
    "kind": "Visual reasoning",
    "title": "The four little panes",
    "level": "Medium",
    "intro": "A two-by-two square window slides over the letter tray. It never extends beyond the tray.",
    "questions": [
      "How many window positions show both G and K? Which other letters can share those windows?"
    ],
    "hints": [
      "G and K line up vertically. They must occupy the two rows of the window.",
      "Its other column can be on either side of them."
    ],
    "answer": "Two positions. They show H and J, or F and L.",
    "why": "G sits directly above K in column 3. A window around them spans rows 2 and 3 and includes either column 2 (H, J) or column 4 (F, L).",
    "figure": "p2v-nine.svg",
    "alt": "The four rows read ABCD / EHGF / IJKL / MNOP."
  },
  {
    "id": 130,
    "kind": "Optical illusions",
    "title": "Red tracks across the sampler",
    "level": "Medium",
    "intro": "Across the sampler, colored dashes seem to connect into diagonal tracks. Follow one track with your eye.",
    "questions": [
      "Which part of each visible track is actually diagonal: an individual dash, the alignment of dash centers, or both?"
    ],
    "hints": [
      "Inspect just one red dash.",
      "Then compare which row and column the next red dash occupies."
    ],
    "answer": "Only the alignment of the centers is diagonal.",
    "why": "Every dash is horizontal. Red centers shift one column right for each row down, so grouping by color suggests diagonal tracks. Removing the dark dashes preserves that grouping.",
    "figure": "p2o-drift.svg",
    "alt": "A rectangular array of horizontal dashes has rust-colored dashes arranged along descending diagonals.",
    "reveal": "p2o-drift-proof.svg",
    "revealAlt": "Only the red horizontal dashes remain, with centers stepping diagonally."
  },
  {
    "id": 131,
    "kind": "Lateral thinking",
    "title": "The fourth side of the postcard",
    "level": "Medium",
    "intro": "A postcard printer quotes a price for ‘four printed faces per finished piece’. The client receives a card with only two faces visible, and neither has a fold. At one corner a thumbnail can lift the picture without tearing it. Underneath is more printing. The lifted layer also carries instructions on its underside. Each layer is ordinary two-sided stock.",
    "questions": [
      "Where are all four printed faces when the postcard is delivered?"
    ],
    "hints": [
      "The printer counted pieces of stock, not the solid shape they make together.",
      "Consider both faces at the join."
    ],
    "answer": "Two printed layers have been attached face to face with a peelable join.",
    "why": "Their outward faces make the ordinary front and back. The other two faces touch inside until the picture layer is lifted. Each of the two sheets contributes two printed faces."
  },
  {
    "id": 132,
    "kind": "Logic",
    "title": "The small exhibition crate",
    "level": "Medium",
    "intro": "A crate can hold nine kilograms. Five exhibits have the weights and audience scores on the packing list. Each can be packed at most once, whole. The curator wants the highest total score.",
    "questions": [
      "Which exhibits should go in, and what is their combined score?"
    ],
    "hints": [
      "Try the best packages with and without the five-kilogram atlas.",
      "If the atlas stays behind, all four other exhibits weigh ten kilograms. Which single omission loses the least score?"
    ],
    "answer": "The bell, cup and die, scoring 22.",
    "why": "With the atlas, four kilograms remain. The best score for those four is 9, giving at most 19. Without the atlas all four remaining pieces weigh ten and score 24. Leaving out the one-kilogram egg loses only 2, fits the crate exactly and beats every larger omission.",
    "tables": [
      [
        "Packing list",
        [
          "Exhibit",
          "kg",
          "Score"
        ],
        [
          [
            "Atlas",
            "5",
            "10"
          ],
          [
            "Bell",
            "4",
            "9"
          ],
          [
            "Cup",
            "3",
            "7"
          ],
          [
            "Die",
            "2",
            "6"
          ],
          [
            "Egg",
            "1",
            "2"
          ]
        ]
      ]
    ]
  },
  {
    "id": 133,
    "kind": "Visual reasoning",
    "title": "The thread through five eyes",
    "level": "Easy",
    "intro": "One thread connects the five labeled eyelets into a closed circuit. Crossings away from eyelets are simple overlaps.",
    "questions": [
      "Start at D and leave toward B. Which three eyelets come next after B, before you return to D?"
    ],
    "hints": [
      "At B follow its other thread segment, even when it crosses an unrelated segment.",
      "B joins D and E."
    ],
    "answer": "E, C, A.",
    "why": "The complete circuit in this direction is D–B–E–C–A–D. None of the interior crossings changes the direction of the thread.",
    "figure": "p2v-star.svg",
    "alt": "Five eyelets are labeled A at lower left, B at upper left, C at upper right, D at lower right and E near lower center. Thread links A–C, C–E, E–B, B–D and D–A."
  },
  {
    "id": 134,
    "kind": "Optical illusions",
    "title": "The crooked fourth corner",
    "level": "Hard",
    "intro": "Four cut discs nearly suggest a light rectangle. Use their sharp inner notches as the four marked corners.",
    "questions": [
      "Would a true rectangle with a horizontal top edge fit all four notch centers exactly? Which corner breaks the alignment?"
    ],
    "hints": [
      "Compare the heights of the two bottom notches.",
      "A horizontal top edge would require a horizontal bottom edge."
    ],
    "answer": "No. The lower-right notch is five units higher than the lower-left notch.",
    "why": "The top notches are both at height 72. The bottom notches have heights 188 and 183. A convincing implied surface can survive this small inconsistency.",
    "figure": "p2o-missing.svg",
    "alt": "Four inward-notched dark discs suggest a rectangle. The lower-right notch sits slightly above the lower-left notch.",
    "reveal": "p2o-missing-proof.svg",
    "revealAlt": "Horizontal guides show the upper notches in register and the lower-right notch above the bottom guide."
  },
  {
    "id": 135,
    "kind": "Lateral thinking",
    "title": "An address between towns",
    "level": "Medium",
    "intro": "A parcel addressed to ‘Kilometer 42, eastbound’ was delivered correctly. The delivery photograph shows a small repair kiosk in a mountain tunnel. A westbound driver who saw a 42 marker on the same road could not find it. The tunnel has one bore and the same route is driven in both directions. Its posts give distance from the entrance used by each driver. The tunnel is 70 kilometers long.",
    "questions": [
      "What number should the westbound driver look for to find the kiosk?"
    ],
    "hints": [
      "The signs count from opposite ends.",
      "Walk 42 kilometers in from one entrance. How much tunnel remains?"
    ],
    "answer": "28 on the westbound scale.",
    "why": "The kiosk is 42 km from the eastbound entrance and 70 − 42 = 28 km from the other entrance. The direction is part of the address."
  },
  {
    "id": 136,
    "kind": "Logic",
    "title": "The exhibition’s narrow gates",
    "level": "Hard",
    "intro": "Groups must go from Entrance to Gallery. Each group chooses a directed route and uses one space on each gate along it. The gate capacities below are for the whole morning. Rooms have unlimited waiting space. No other gates connect them.",
    "questions": [
      "What is the greatest number of groups that can enter the Gallery that morning? Give routes that achieve it."
    ],
    "hints": [
      "Start by counting the final gates into the Gallery.",
      "Hall N can send six. Four can come directly from the entrance; a side gate can supply the rest."
    ],
    "answer": "Nine groups.",
    "why": "The two final gates together permit at most 3 + 6 = 9. Send three via M directly to Gallery, four via N directly, and two via M then N. That uses five of the six entrance-to-M places and respects every other limit.",
    "tables": [
      [
        "One-way gates",
        [
          "From",
          "To",
          "Capacity"
        ],
        [
          [
            "Entrance",
            "Hall M",
            "6"
          ],
          [
            "Entrance",
            "Hall N",
            "4"
          ],
          [
            "Hall M",
            "Gallery",
            "3"
          ],
          [
            "Hall N",
            "Gallery",
            "6"
          ],
          [
            "Hall M",
            "Hall N",
            "2"
          ]
        ]
      ]
    ]
  },
  {
    "id": 137,
    "kind": "Visual reasoning",
    "title": "Postcards on the press",
    "level": "Medium",
    "intro": "The printer cuts the sheet along all grid lines. Each individual postcard has four equal-length edges. All cut lines are shared until the outer boundary is reached.",
    "questions": [
      "How many distinct postcard-length edges are on the sheet, including its boundary?"
    ],
    "hints": [
      "Count horizontal lines in postcard lengths, then vertical lines.",
      "Four horizontal grid lines run across four cards each."
    ],
    "answer": "31 edges.",
    "why": "Four horizontal lines each span four cards, giving 16 edges. Five vertical lines each span three cards, giving 15 more. Total 31.",
    "figure": "p2v-post.svg",
    "alt": "Twelve square postcards are arranged in three rows of four."
  },
  {
    "id": 138,
    "kind": "Optical illusions",
    "title": "The arrows that face in pairs",
    "level": "Easy",
    "intro": "Rows alternate right-pointing rust arrows and left-pointing green arrows. Inspect the gaps between neighboring arrows in a single row.",
    "questions": [
      "Are the centers packed closer for the pairs pointing toward one another?"
    ],
    "hints": [
      "The gap between arrow tips differs from the gap between their backs.",
      "Judge the centers, halfway across each arrow’s bounding box."
    ],
    "answer": "No. Successive centers are equally spaced.",
    "why": "All centers advance by 47 drawing units. Orientation changes which contour faces the gap and which arrows seem to belong together. The answer plate adds center marks in the middle two rows.",
    "figure": "p2o-arrows.svg",
    "alt": "A four-row array alternates right-facing rust and left-facing green arrowheads.",
    "reveal": "p2o-arrows-proof.svg",
    "revealAlt": "Dots mark the centers in two rows, showing a regular column spacing."
  },
  {
    "id": 139,
    "kind": "Lateral thinking",
    "title": "The orchestra of empty chairs",
    "level": "Medium",
    "intro": "A theater sells 120 admissions for a concert with 80 fixed seats. Nobody stands or shares a seat, no one misses a note of the music promised on their ticket, and no extra seats are brought in. A blue ticket lists pieces 1–4; a gold ticket lists pieces 5–8. Between pieces 4 and 5 the usher opens both the exit doors and the entrance doors.",
    "questions": [
      "How can the concert honor all 120 admissions?"
    ],
    "hints": [
      "Does every ticket promise the entire program?",
      "A seat is reusable as soon as one ticket’s program is over."
    ],
    "answer": "The theater admitted one audience for the first half and a partly or wholly different audience for the second.",
    "why": "Two blocks of 60, for example, fit comfortably in 80 seats. Each ticket covers a particular block of pieces, so all 120 ticket holders can hear everything they purchased."
  },
  {
    "id": 140,
    "kind": "Logic",
    "title": "Two choirs, one procession",
    "level": "Easy",
    "intro": "Three altos, Ada, Bea and Cora, must enter a hall in that order. Two tenors, Dan and Eli, must also keep their own order. The singers enter one at a time, and the tenors must have at least one alto between them.",
    "questions": [
      "How many entrance orders are possible?"
    ],
    "hints": [
      "Write down the altos first. They make four slots for the tenors.",
      "Choosing the two slots decides everything else because Dan must be earlier than Eli."
    ],
    "answer": "Six orders.",
    "why": "The slots are before Ada, between Ada and Bea, between Bea and Cora, and after Cora. Choose two distinct slots; the earlier must hold Dan. There are 4 × 3 ÷ 2 = 6 pairs of slots."
  },
  {
    "id": 141,
    "kind": "Visual reasoning",
    "title": "Two flashes on a plaque",
    "level": "Medium",
    "intro": "Overlay two distinct plaques without turning them. A lamp glows at each corner covered by exactly one dot. Corners with zero or two dots stay dark.",
    "questions": [
      "Which pair lights all four corners?"
    ],
    "hints": [
      "Find a pair with no dots sharing a position.",
      "One plaque must cover the entire upper row and the other the entire lower row, unless the diagonal complement is present."
    ],
    "answer": "B and D.",
    "why": "B covers both upper corners; D covers both lower corners. A would need the opposite diagonal, which is absent. C would need both left corners, also absent.",
    "figure": "p2v-toggle.svg",
    "alt": "A marks upper left and lower right. B marks both upper corners. C marks both right corners. D marks both lower corners."
  },
  {
    "id": 142,
    "kind": "Optical illusions",
    "title": "The two quiet turbines",
    "level": "Medium",
    "intro": "These printed wheels may seem to stir when your gaze moves across them. The plate uses only still shapes.",
    "questions": [
      "Read clockwise from the top. Is the sequence of four tones repeated in the same order on both wheels?"
    ],
    "hints": [
      "Begin at any dark segment. Find the next pale cream segment two wedges away.",
      "Which intermediate color comes immediately after dark on each wheel?"
    ],
    "answer": "The tone cycles are reversed.",
    "why": "On the left the clockwise cycle from dark is blue, cream, ochre, then dark. On the right it is ochre, cream, blue, then dark. Directional lightness transitions can contribute to a motion impression in a stationary pattern.",
    "figure": "p2o-motion.svg",
    "alt": "Two static segmented wheels use repeated cycles of dark, blue, cream and ochre. The order around the second is reversed.",
    "reveal": "p2o-motion-proof.svg",
    "revealAlt": "Two strips unwrap the wheels into matching four-wedge samples starting at dark."
  },
  {
    "id": 143,
    "kind": "Lateral thinking",
    "title": "The innkeeper’s glass bead",
    "level": "Hard",
    "intro": "An inn displays a tiny readable menu inside a clear glass bead. Under a magnifier the letters look curved. A conservator finds the bead contains no ink, no hollow cavity and no carved letters. When she lifts it off the white counter, the menu vanishes. A naked-eye reader can barely make out a patch of microprinting on the counter where it stood.",
    "questions": [
      "Where is the menu, and what was the bead doing?"
    ],
    "hints": [
      "The menu disappears when the bead moves, although the bead is unchanged.",
      "A curved transparent surface can form a magnified image."
    ],
    "answer": "The menu is printed on the counter. The glass bead acts as a small magnifier.",
    "why": "The bead bends light from the nearby microprinting. With the print close enough, the lettering appears enlarged and seems to sit inside or behind the curved glass. Lifting the bead out of position removes that image."
  },
  {
    "id": 144,
    "kind": "Logic",
    "title": "The recipe on three scales",
    "level": "Medium",
    "intro": "A baker weighed three sealed ingredient pots in pairs, using accurate scales with no tray weight. Flour and sugar together weighed 670 g. Sugar and spice together weighed 390 g. Flour and spice together weighed 520 g.",
    "questions": [
      "How much did each sealed pot weigh?"
    ],
    "hints": [
      "Add all three readings. How many times have you counted each pot?",
      "Half the total is the weight of all three. Remove each known pair."
    ],
    "answer": "Flour 400 g, sugar 270 g, spice 120 g.",
    "why": "The pair readings total 1,580 g, counting each pot twice. All three together weigh 790 g. Subtracting 390, 520 and 670 gives 400, 270 and 120 respectively."
  },
  {
    "id": 145,
    "kind": "Visual reasoning",
    "title": "The unbroken seven-part seal",
    "level": "Medium",
    "intro": "Start at A. Mark every second station clockwise, counting the next station as one. Keep going until you first return to A.",
    "questions": [
      "Which station is marked immediately before you return to A, and how many different stations are marked including A?"
    ],
    "hints": [
      "The first three marked stations are A, C and E.",
      "Seven and two have no common divisor above one, so you visit every station."
    ],
    "answer": "F is last, and there are seven stations.",
    "why": "The marks follow A, C, E, G, B, D, F, then A. Crossing the top of the dial does not reset the count.",
    "figure": "p2v-ring.svg",
    "alt": "Seven stations A through G are arranged clockwise starting at the top."
  },
  {
    "id": 146,
    "kind": "Optical illusions",
    "title": "The tapering bead curtains",
    "level": "Easy",
    "intro": "In one column the beads grow larger toward the bottom; in the next they shrink. Look across the rows of bead centers.",
    "questions": [
      "Are the rows of centers level or do they form a shallow zigzag?"
    ],
    "hints": [
      "The tops of neighboring beads sit at different heights.",
      "A bead’s center is halfway between its top and bottom edges."
    ],
    "answer": "All six rows of centers are level.",
    "why": "Each row shares one center height. Changing radius shifts the upper and lower edges but leaves the centers still. The proof replaces every bead with a same-size center dot.",
    "figure": "p2o-beads.svg",
    "alt": "Nine columns of beads taper in alternating directions; their centers occupy six rows.",
    "reveal": "p2o-beads-proof.svg",
    "revealAlt": "All bead centers are represented by identical dots in a regular array."
  },
  {
    "id": 147,
    "kind": "Lateral thinking",
    "title": "Two cups and a silent scale",
    "level": "Medium",
    "intro": "A cook sets two identical cups, each filled to the same line, on the two pans of a kitchen balance. One contains a frozen floating cube made entirely from that cup’s water. The other contains a clear cube held halfway above the surface by a fine thread attached to the ceiling. Though the cups and cubes look alike, only one cube’s entire weight is borne by the scale. The ceiling thread remains taut.",
    "questions": [
      "Which cup could the cook be describing as ‘holding a cube without weighing all of it’, and where does the remaining load go?"
    ],
    "hints": [
      "The balance registers forces transmitted to the cup, including forces the cube exerts through the water.",
      "A cube supported partly from the ceiling has two upward forces on it."
    ],
    "answer": "The cup under the suspended cube. The ceiling, through the thread, supports part of that cube’s weight.",
    "why": "The freely floating ice is supported entirely by the water, which passes its whole weight to the cup. The suspended cube is supported partly by the water and partly by the thread. Only the water-supported share reaches the balance through that cup."
  },
  {
    "id": 148,
    "kind": "Logic",
    "title": "The felt bags by the window",
    "level": "Hard",
    "intro": "Two sealed bags are equally likely to be selected. Bag A contains two white buttons. Bag B contains one white and one blue. A button, chosen uniformly from the selected bag, proves to be white. It is set aside. No other information is available.",
    "questions": [
      "What is the probability that the remaining button in that bag is white?"
    ],
    "hints": [
      "Label the four originally drawable buttons A1, A2, B1 and B2.",
      "Eliminate the one initial result that could not have shown white. The other three initial results were equally likely."
    ],
    "answer": "Two thirds.",
    "why": "Before observing the color, each of the four labeled buttons was equally likely. Of the three white ones, two come from Bag A and leave another white button. The one white button from Bag B leaves blue. Thus two of the three compatible initial draws give white again."
  },
  {
    "id": 149,
    "kind": "Visual reasoning",
    "title": "The red quarter of the flag",
    "level": "Easy",
    "intro": "The flag is a rectangle. Two straight diagonals meet at its center. The red region is the entire triangle between the left edge and the center.",
    "questions": [
      "How much red cloth does the flag require, excluding seams?"
    ],
    "hints": [
      "Use the left edge as the triangle’s base.",
      "The perpendicular distance from the center to the left edge is half of 12 cm."
    ],
    "answer": "18 square centimetres.",
    "why": "The triangle has a 6 cm base and a 6 cm height. Its area is half of 6 × 6, or 18 square centimetres. This is one quarter of the rectangle.",
    "figure": "p2v-diags.svg",
    "alt": "A 12 cm wide and 6 cm high rectangle has crossed diagonals. Its left triangle is red."
  },
  {
    "id": 150,
    "kind": "Optical illusions",
    "title": "Two fans of filing cards",
    "level": "Medium",
    "intro": "The edges of five opaque cards make a short diagonal flight in each panel. Each card is the same height.",
    "questions": [
      "Which card is in front in each panel: the highest visible card or the lowest? What edge gives it away?"
    ],
    "hints": [
      "At a meeting of three contour segments, find which edge ends and which continues.",
      "Trace the top edge of each lower card across the card above it."
    ],
    "answer": "The lowest visible card is in front in both panels.",
    "why": "Each lower card has an uninterrupted top border that cuts off the vertical sides of the previous one. The left-right direction of the fan changes, but the overlap order is the same.",
    "figure": "p2o-cards.svg",
    "alt": "Two offset stacks of rectangular white cards fan diagonally in opposite horizontal directions.",
    "reveal": "p2o-cards-proof.svg",
    "revealAlt": "A colored line marks the uninterrupted top border of the lowest card in each stack."
  },
  {
    "id": 151,
    "kind": "Lateral thinking",
    "title": "One photograph, two seasons",
    "level": "Medium",
    "intro": "A visitor photographs a pear tree with a bare branch and a branch full of blossom. The exposure is a single instant. On closer inspection, the bare branch continues backward past the apparent fork and ends at the frame edge. In the next photograph, taken one step sideways, the fork has split in two and a strip of sky lies between the branches.",
    "questions": [
      "What created the apparent two-season tree?"
    ],
    "hints": [
      "The fork changes when the camera moves sideways.",
      "Nearby objects shift against distant ones when the viewing position changes."
    ],
    "answer": "Branches from two different trees lined up in the original view.",
    "why": "Their outlines happened to meet in the first photograph. A small sideways move lets the nearer branch shift relative to the farther one, revealing the gap. The trees can be at different stages of bloom."
  },
  {
    "id": 152,
    "kind": "Logic",
    "title": "Five stalls around the carousel",
    "level": "Easy",
    "intro": "Five stalls form a closed ring. Each stall touches only its two neighbors. Touching stalls must have different awning colors. You can order as many awnings as you like in any color you choose.",
    "questions": [
      "What is the fewest different colors that can meet the rule?"
    ],
    "hints": [
      "Try alternating just two colors from one chosen stall.",
      "Before accepting the last stall, compare it with the first as well."
    ],
    "answer": "Three colors.",
    "why": "Two alternating colors produce A, B, A, B, A. The last A touches the first A. Three colors suffice, for instance A, B, A, B, C around the ring."
  },
  {
    "id": 153,
    "kind": "Visual reasoning",
    "title": "The weighted footbridges",
    "level": "Medium",
    "intro": "Each bridge is labeled with its crossing time in minutes. The courier must travel from A to F via any connected bridges.",
    "questions": [
      "What is the unique fastest route, and how long does it take?"
    ],
    "hints": [
      "Compare the cheapest way to reach D and the cheapest way to reach E.",
      "D is reached in 6 minutes via B. E is reached in 4 via C."
    ],
    "answer": "A–C–E–F, in 7 minutes.",
    "why": "The upper exit via D costs at least 6 + 2 = 8 minutes. Via E the cost is 2 + 2 + 3 = 7. The diagonal B–E would make the trip longer.",
    "figure": "p2v-postbag.svg",
    "alt": "Bridges and times: AB 3, AC 2, BD 3, BE 4, CE 2, DF 2, EF 3."
  },
  {
    "id": 154,
    "kind": "Optical illusions",
    "title": "The brooch maker’s pearl",
    "level": "Easy",
    "intro": "The enamel strip pattern changes both color and tilt. Hidden among its strips is a tiny pale circular inlay. Count rows from the top and columns from the left.",
    "questions": [
      "Which strip contains the inlay, and which way does its long axis tilt?"
    ],
    "hints": [
      "Search one row at a time and ignore the outline of each strip.",
      "The inlay is in the lower half and to the right of center."
    ],
    "answer": "Row 4, column 7. Its long axis rises toward the right.",
    "why": "Only that strip contains a small pale disc. The strip is rotated 25 degrees counterclockwise on the page, so its right end sits higher. Crowding by colored and tilted neighbors can delay detection.",
    "figure": "p2o-pearl.svg",
    "alt": "Six rows of eleven tilted bars. A pale dot is set into the bar in row four, column seven, which slopes upward to the right.",
    "reveal": "p2o-pearl-proof.svg",
    "revealAlt": "A dark ring isolates the inlaid strip."
  },
  {
    "id": 155,
    "kind": "Lateral thinking",
    "title": "A page that asks for silence",
    "level": "Hard",
    "intro": "A silent-film restorer spots a run of plain rectangular frames between two strips of vivid action. These rectangles have no scene images, yet the projection cue sheet instructs the pianist to hold one chord there. On the projection print the frames are identical and each bears the same readable sentence. The original camera negative contains none of them.",
    "questions": [
      "What are those frames, and why repeat the same sentence?"
    ],
    "hints": [
      "Blank of scenery does not mean blank of information.",
      "A projector normally advances even while the viewer reads."
    ],
    "answer": "They are successive frames of a printed title card inserted during editing.",
    "why": "A card photographed separately can be spliced between scenes even though it was never part of the scene negative. Repeating an identical frame holds the words still on screen for the duration of those frames."
  },
  {
    "id": 156,
    "kind": "Logic",
    "title": "The clockwork bead chain",
    "level": "Hard",
    "intro": "Nine beads are indexed clockwise on a closed ring. Each is R, G or B. From every bead read its color and its clockwise neighbor’s color as an ordered pair. Each of the nine possible ordered pairs must occur exactly once. The maker’s list in order is ?, R, G, ?, ?, B, R, B, G. The final G leads back to the first bead.",
    "questions": [
      "Restore the three missing colors in list order."
    ],
    "hints": [
      "Each color must occur three times because it must start three different pairs. Your three blanks therefore need one R, one G and one B.",
      "The known pairs already include RG, BR, RB and BG. Trying B in the first blank would repeat BR immediately."
    ],
    "answer": "R, G, B. The completed ring reads R R G G B B R B G.",
    "why": "If the first blank were G, the wrap and next pair would use GG and GR. Putting R in the fourth position would repeat GR; putting B there would force BR at positions four and five. A first B repeats BR at the start, so the first bead is R. With G and B left, a fourth-position B would repeat BG. The restored pairs are RR, RG, GG, GB, BB, BR, RB, BG and GR."
  },
  {
    "id": 157,
    "kind": "Visual reasoning",
    "title": "The gallery carousel",
    "level": "Medium",
    "intro": "Around the border, every letter moves one cell clockwise at the same time. The center stays still. Repeat the move five times.",
    "questions": [
      "Which letters now occupy the top row, left to right?"
    ],
    "hints": [
      "The clockwise cycle is A, B, C, F, I, H, G, D.",
      "To learn what arrived at a spot, trace five positions backward."
    ],
    "answer": "F, I, H.",
    "why": "Five steps back around an eight-position ring equal three steps forward. From original A, B and C, the sources three positions forward are F, I and H respectively.",
    "figure": "p2v-carousel.svg",
    "alt": "Three-by-three grid reads ABC / DEF / GHI."
  },
  {
    "id": 158,
    "kind": "Optical illusions",
    "title": "The gray stone between pillars",
    "level": "Medium",
    "intro": "A broad gray stone sits between a dark slab and a pale slab. Concentrate on the gray immediately beside each boundary.",
    "questions": [
      "Does the center stone actually contain a lighter strip at its left edge or a darker strip at its right?"
    ],
    "hints": [
      "Keep both comparisons inside the broad central region.",
      "The eye is sensitive to differences at boundaries."
    ],
    "answer": "Neither strip is printed. The center stone is uniform.",
    "why": "There is one solid middle rectangle with the same gray at both edges. The contrast with a dark neighbor can make the near edge look lighter; a light neighbor can produce the opposite impression.",
    "figure": "p2o-bands.svg",
    "alt": "Three solid vertical slabs touch: dark, medium gray, pale. The central slab is widest.",
    "reveal": "p2o-bands-proof.svg",
    "revealAlt": "The uniform center slab is shown with both flanking slabs removed."
  },
  {
    "id": 159,
    "kind": "Lateral thinking",
    "title": "One ticket short",
    "level": "Medium",
    "intro": "A raffle clerk counts 40 detached stubs but only 39 loose ticket bodies in the room. Every ticket was sold, all buyers stayed, and nothing was lost. Each ticket was printed as a page in a souvenir booklet, with one perforation beside the spine and a second around the drawing stub. One patron says she made only the smaller tear and kept her souvenir intact.",
    "questions": [
      "How can the patron be holding the body without it appearing in the clerk’s count of loose ticket bodies?"
    ],
    "hints": [
      "What is the clerk physically counting?",
      "Look at what the coat pocket contains besides paper."
    ],
    "answer": "The last ticket body is still bound into its booklet.",
    "why": "Tearing off its stub separated the drawing slip but did not detach the body from its binding. Thirty-nine loose bodies plus the one bound body account for all forty stubs."
  },
  {
    "id": 160,
    "kind": "Logic",
    "title": "The frame shop promise",
    "level": "Medium",
    "intro": "One framing job starts at 09:00. Cutting rails takes 25 minutes. Glazing takes 18 and can start immediately. Joining takes 12 and must follow cutting. Mounting takes 9 and must follow both joining and glazing. Inspection takes 4 and must follow mounting. Each task has its own worker; every worker starts as soon as allowed.",
    "questions": [
      "At what time can inspection finish? Which unfinished task would hold up mounting?"
    ],
    "hints": [
      "Draw two branches converging at mounting.",
      "Glazing finishes at 09:18. Joining starts only at 09:25."
    ],
    "answer": "09:50. Joining is the final prerequisite for mounting.",
    "why": "Joining ends at 09:37; glazing is already done. Mounting then runs to 09:46, and inspection ends at 09:50. Time on the glazing branch does not delay the longer cutting-and-joining branch."
  },
  {
    "id": 161,
    "kind": "Visual reasoning",
    "title": "The mat of sixty corners",
    "level": "Hard",
    "intro": "The mat has four rows and five columns. Consider every rectangle made of whole cells with its sides on the grid lines.",
    "questions": [
      "How many of those rectangles are exactly two cells tall, with any positive width?"
    ],
    "hints": [
      "There are three possible pairs of neighboring rows.",
      "For each pair, choose any two of the six vertical grid lines for the left and right ends."
    ],
    "answer": "45 rectangles.",
    "why": "Choose the top row in three ways. For each height-two strip, widths 1 through 5 occur 5, 4, 3, 2 and 1 times, totaling 15. Three strips give 45.",
    "figure": "p2v-rects.svg",
    "alt": "A mat has four rows and five columns of alternating light and teal rectangles."
  },
  {
    "id": 162,
    "kind": "Optical illusions",
    "title": "The arch with long legs",
    "level": "Medium",
    "intro": "Two rust contours are printed side by side. Pale legs continue from the ends of the left contour; the right one stands alone.",
    "questions": [
      "Which rust contour has the higher crest above its own endpoints?"
    ],
    "hints": [
      "Compare their endpoints first, then the highest point in each arch.",
      "Cover the faint legs with two fingers."
    ],
    "answer": "Both crests have equal height.",
    "why": "The same two curved segments are placed at the same height in both panels. Continuing the slope of one arch past its endpoints changes the implied object, without changing its rust contour.",
    "figure": "p2o-arch.svg",
    "alt": "Two rust arches share a level baseline. Pale legs extend below the ends of the left arch.",
    "reveal": "p2o-arch-proof.svg",
    "revealAlt": "The legs are gone and identical horizontal references appear below both arches."
  },
  {
    "id": 163,
    "kind": "Lateral thinking",
    "title": "The quicker-than-quickstep player",
    "level": "Hard",
    "intro": "At a dance archive a listener identifies a waltz as being played too quickly. The technician slows the playback, and both the dance tempo and the singer’s unnaturally high voice return to normal. The instrument backing and voice had been recorded together onto one disc. Its sleeve says 60 revolutions per minute. The unlabeled drive had been set to 75 revolutions per minute. No digital pitch correction is used.",
    "questions": [
      "Can one error account for both changes? What speed setting restores the intended performance?"
    ],
    "hints": [
      "Consider how many groove vibrations pass the needle each second.",
      "Playing a disc faster makes both beats and sound-wave cycles arrive more frequently."
    ],
    "answer": "Yes. Set the drive to 60 rpm. The excessive speed raised both tempo and pitch.",
    "why": "At 75 rpm the needle encountered 75/60, or 1.25, times as much groove per second. A phrase became shorter and every sound frequency rose by the same ratio. Restoring 60 rpm removes both effects at once."
  },
  {
    "id": 164,
    "kind": "Logic",
    "title": "The eight-mark counter",
    "level": "Medium",
    "intro": "A counter’s wheels all carry consecutive symbols from 0 through the same largest digit. After each wheel reaches its largest digit, the very next individual click changes it to 0 and advances the wheel on its left. An attendant sees adjacent readings 37, 40. Later the counter reads 74.",
    "questions": [
      "What will it display six individual clicks after 74?"
    ],
    "hints": [
      "A carry immediately after a units digit of 7 identifies the largest digit.",
      "Write each of the next few readings and remember that the tens wheel also carries after 7."
    ],
    "answer": "102.",
    "why": "The wheels use base eight. The six readings are 75, 76, 77, 100, 101 and 102. The carry at 77 passes through both of the occupied wheels."
  },
  {
    "id": 165,
    "kind": "Visual reasoning",
    "title": "The stamp in translation",
    "level": "Medium",
    "intro": "Imagine copies of this four-by-four pattern tiled edge to edge forever, all in the same orientation. Rows and columns start at 1 at the top left and continue to the right and down.",
    "questions": [
      "In row 11, which is the first marked column strictly to the right of column 13?"
    ],
    "hints": [
      "Rows 3, 7 and 11 carry the same pattern.",
      "Row 3 marks columns 4, 8, 12 and so on."
    ],
    "answer": "Column 16.",
    "why": "Row 11 has the same marks as row 3, with a dot at every positive multiple of four. The first such number beyond 13 is 16.",
    "figure": "p2v-stride.svg",
    "alt": "The four rows place one dot each in columns 3, 1, 4 and 2 respectively."
  },
  {
    "id": 166,
    "kind": "Optical illusions",
    "title": "A clearing in the grass",
    "level": "Medium",
    "intro": "The whole field uses short strokes of one color and length, yet a central patch seems to separate from the background.",
    "questions": [
      "Which property defines the patch, and is its border actually drawn?"
    ],
    "hints": [
      "Look at just one blade inside the patch and one outside.",
      "The patches have the same grid spacing and ink."
    ],
    "answer": "Orientation defines it. There is no drawn border.",
    "why": "Blades in the central patch slope down toward the right; surrounding blades slope up toward the right. Grouping like orientations creates a texture boundary. The proof dots mark only the patch centers.",
    "figure": "p2o-field.svg",
    "alt": "A regular field of small strokes, all equally dark; an oval patch at center has the opposite tilt.",
    "reveal": "p2o-field-proof.svg",
    "revealAlt": "Only centers of strokes belonging to the central oval appear."
  },
  {
    "id": 167,
    "kind": "Lateral thinking",
    "title": "The ticket punched tomorrow",
    "level": "Medium",
    "intro": "A cloakroom ticket was stamped 00:06 on Sunday. The checker insists it belongs with Saturday’s receipts. Nobody set a clock incorrectly. The printed schedule says ‘Saturday performance, doors 23:30, curtain 23:55, cloakroom closes after encore’. The theater files each receipt with the event during which it was issued.",
    "questions": [
      "Why should the checker leave the date stamp alone?"
    ],
    "hints": [
      "The filing rule names an event, whereas the stamp names a calendar day.",
      "What happens at midnight during a late show?"
    ],
    "answer": "The Saturday performance continued past midnight into Sunday.",
    "why": "The ticket correctly records the civil date of the deposit. The receipt belongs to the Saturday event under the theater’s filing rule; the two labels describe different things."
  },
  {
    "id": 168,
    "kind": "Logic",
    "title": "The four switched portfolios",
    "level": "Hard",
    "intro": "A clerk places four different portraits into four named portfolios, one per portfolio. She later learns that every portrait went into a portfolio belonging to someone else. Treat arrangements as different whenever at least one recipient changes.",
    "questions": [
      "How many such arrangements are possible?"
    ],
    "hints": [
      "Follow the portrait from one recipient to the next until you return to the starting person.",
      "With no one receiving their own portrait, the exchanges can form two pairs or one cycle of all four."
    ],
    "answer": "Nine arrangements.",
    "why": "For two swapped pairs, choose the partner of a fixed person in three ways. The remaining pair is forced. For a four-person cycle, start at a fixed person and order the other three around the cycle in 3 × 2 × 1 = 6 ways. These cases do not overlap, giving 3 + 6 = 9."
  },
  {
    "id": 169,
    "kind": "Visual reasoning",
    "title": "The taxicab frame",
    "level": "Medium",
    "intro": "Start at D, the outlined center tile. Walk between tiles sharing an edge. A frame consists of tiles whose shortest walking distance from D is exactly two steps.",
    "questions": [
      "Name all eight tiles in the frame."
    ],
    "hints": [
      "The four straight-out points are two steps away.",
      "The four diagonal neighbors also take exactly two steps by an L-shaped route with one turn."
    ],
    "answer": "3, 7, 9, B, F, H, J and N.",
    "why": "Two steps straight reach 3, B, F and N. A step in one direction followed by a perpendicular step reaches 7, 9, H and J. A reversed pair would return to the center.",
    "figure": "p2v-diamond.svg",
    "alt": "Five rows read 12345 / 6789A / BCDEF / GHIJK / LMNOP. D is marked at the center."
  },
  {
    "id": 170,
    "kind": "Optical illusions",
    "title": "The pearl dealer’s intervals",
    "level": "Medium",
    "intro": "Five beads sit in one straight row. Their centers are equally spaced. The outside beads are small and the middle bead is largest.",
    "questions": [
      "Which neighboring pair or pairs leave the smallest visible gap between bead edges?"
    ],
    "hints": [
      "Center spacing is fixed, so add the radii of the two beads next to each gap.",
      "The radius sequence in drawing units is 15, 24, 32, 24, 15."
    ],
    "answer": "The second–third and third–fourth pairs tie.",
    "why": "With an 80-unit center interval, each inner gap is 80 − 24 − 32 = 24. Each outer gap is 80 − 15 − 24 = 41. Equal center spacing does not imply equal edge clearance.",
    "figure": "p2o-gaps.svg",
    "alt": "Five equally spaced centers carry beads of radii 15, 24, 32, 24 and 15.",
    "reveal": "p2o-gaps-proof.svg",
    "revealAlt": "Centerlines remain fixed as outlines reveal the two equal smallest inner gaps."
  },
  {
    "id": 171,
    "kind": "Lateral thinking",
    "title": "Segment B",
    "level": "Medium",
    "intro": "A sculptor takes a client’s order for a portrait, makes a complete likeness, and delivers only the region from the nose to the chin. The client happily pays in full. The written order says ‘replacement segment B’. Segments A and C are already mounted above and below a gap in a ceramic wall. The gap’s jagged edge exactly matches the delivered piece.",
    "questions": [
      "Why did the sculptor need the complete likeness?"
    ],
    "hints": [
      "Look at what the buyer already owns.",
      "A full model can establish the shape and scale of one damaged part."
    ],
    "answer": "The sculptor modeled the whole face as a reference, then supplied the missing section of an existing relief.",
    "why": "The complete model establishes how the new features should align with the surviving ones. Only segment B belongs in the wall’s gap, so the partial delivery completes the commission."
  },
  {
    "id": 172,
    "kind": "Logic",
    "title": "The box-office duplicate",
    "level": "Medium",
    "intro": "The ticket office prints every number from 1 through 60 once. The clerk puts an amber dot on multiples of 4, a green dot on multiples of 6, and both dots when both rules apply. Every ticket gets printed.",
    "questions": [
      "How many tickets have exactly one dot?"
    ],
    "hints": [
      "Count the amber and green tickets separately, then find tickets counted both times.",
      "Every multiple of 12 has two dots and must contribute zero to the final count."
    ],
    "answer": "15 tickets.",
    "why": "There are 15 multiples of 4, 10 multiples of 6 and 5 multiples of 12. The single-dot groups contain 15 − 5 = 10 amber-only tickets and 10 − 5 = 5 green-only tickets."
  },
  {
    "id": 173,
    "kind": "Visual reasoning",
    "title": "The broken biscuit mold",
    "level": "Medium",
    "intro": "The mold began as four rows of six squares. Two adjacent squares are missing from each of two opposite corners. Cover the surviving cells with dominoes, two neighboring squares per domino.",
    "questions": [
      "Can you cover it using only vertical dominoes? If not, give a covering that uses just two horizontal dominoes."
    ],
    "hints": [
      "Inspect the heights of the four shortened columns.",
      "Use one horizontal domino in each pair of shortened columns, at the end away from its notch."
    ],
    "answer": "An all-vertical covering is impossible. A mixed covering uses two horizontal dominoes.",
    "why": "Columns 1, 2, 5 and 6 each have three cells, so vertical dominoes alone cannot fill them. Put a horizontal domino across columns 1–2 in row 4 and across columns 5–6 in row 1. Every remaining column splits into vertical pairs.",
    "figure": "p2v-domino.svg",
    "alt": "A four-by-six board is missing columns 1 and 2 of the top row and columns 5 and 6 of the bottom row."
  },
  {
    "id": 174,
    "kind": "Optical illusions",
    "title": "The tilted copper squares",
    "level": "Easy",
    "intro": "A copper square is set level in one panel and on a corner in the other. One appears to fill more vertical space.",
    "questions": [
      "Which occupies more ink area, and which spans more height on the page?"
    ],
    "hints": [
      "Distinguish the side of a square from its corner-to-corner diagonal.",
      "Rotation preserves area; it can change the height of the smallest upright bounding box."
    ],
    "answer": "They have equal ink area. The right square spans more height.",
    "why": "Both are 90-unit squares. The first is 90 units high on the page. The second stands on a corner and its height is the diagonal, about 127 units.",
    "figure": "p2o-area.svg",
    "alt": "A solid rust square beside a copy turned 45 degrees.",
    "reveal": "p2o-area-proof.svg",
    "revealAlt": "Guide lines touch the top and bottom of each square, showing the greater span on the right."
  },
  {
    "id": 175,
    "kind": "Lateral thinking",
    "title": "A ceiling full of footprints",
    "level": "Medium",
    "intro": "A plaster panel fixed overhead bears what look like animal footprints crossing its underside. It has never been taken down since the exhibition opened. The builder’s notes say ‘set hard first; hoist on Thursday’. The prints are hollows in the plaster, and the side they mark is the side that now faces the floor.",
    "questions": [
      "When could an ordinary animal have made them without climbing a wall?"
    ],
    "hints": [
      "The note describes an installation step before opening day.",
      "A panel’s upward-facing side can face down later."
    ],
    "answer": "The animal walked across that side while the unset panel lay flat, before it was hoisted and turned into position.",
    "why": "The footprints could harden with the plaster. Installing the panel with the marked face downward brought the already finished trail to the ceiling."
  },
  {
    "id": 176,
    "kind": "Logic",
    "title": "The silk roll and the ruler",
    "level": "Medium",
    "intro": "A long strip of printed silk repeats RED, BLUE, GOLD, in that order, one equal-width stripe at a time. A 17-stripe sample is cut out. No stripe is sliced lengthwise; the cut follows boundaries. A clerk counts six red and five blue stripes in the sample.",
    "questions": [
      "What colors were the first and last stripes of the sample, in the printed reading direction?"
    ],
    "hints": [
      "Fifteen consecutive stripes contain exactly five of each color, regardless of where the sample starts.",
      "Remove the first fifteen. The extra pair contains red and gold but no blue. In what order can those two occur next to each other?"
    ],
    "answer": "First gold, last red.",
    "why": "The two leftover stripes must be gold then red, since red is always followed by blue. The sixteenth stripe is the same color as the first because their positions differ by fifteen, a multiple of three. Thus the sample starts gold and ends red."
  },
  {
    "id": 177,
    "kind": "Visual reasoning",
    "title": "The letter between two pins",
    "level": "Medium",
    "intro": "On this lattice, only steps up, down, left and right are allowed. Count shortest walking distances between letters.",
    "questions": [
      "Which of C, D and E is equally far from A and B? If none is, where must such a letter lie?"
    ],
    "hints": [
      "A and B are on the same row. Vertical motion adds the same distance to both journeys.",
      "Only the column halfway between the two pins gives equal horizontal distances."
    ],
    "answer": "None. It must lie in column 3.",
    "why": "The two pins are in columns 1 and 5. A point is equally far from those columns only in column 3. C, D and E occupy columns 2, 4 and 1.",
    "figure": "p2v-locus.svg",
    "alt": "Four rows read A · · · B / · C · · · / · · · D · / E · · · ·."
  },
  {
    "id": 178,
    "kind": "Optical illusions",
    "title": "A reversible frieze",
    "level": "Easy",
    "intro": "One frieze points right and the other left. Both repeat teal and rust units. Imagine laying a transparent tracing of the top frieze on the bottom.",
    "questions": [
      "Would a horizontal mirror flip alone, about the common vertical midpoint, match the shape directions AND the colors after moving it down?"
    ],
    "hints": [
      "A mirror flip exchanges the first and last units.",
      "There are ten units. Compare the color of the top right unit with that of the bottom left unit."
    ],
    "answer": "No. Directions match, but every color lands on the opposite color.",
    "why": "A left-right reflection reverses the ten units and the arrow shapes. Since the alternating row has even length, its last unit is rust, while the bottom row begins teal. All ten positions are mismatched in color.",
    "figure": "p2o-chevrons.svg",
    "alt": "Two rows of ten chevrons alternate teal and rust, starting teal at the left. Top chevrons point right and bottom chevrons left.",
    "reveal": "p2o-chevrons-proof.svg",
    "revealAlt": "The full two rows remain visible with a reminder that reflecting swaps endpoints."
  },
  {
    "id": 179,
    "kind": "Lateral thinking",
    "title": "The painting split at the viewing rail",
    "level": "Hard",
    "intro": "A painting seems to contain a bright crescent floating in front of its frame, but only one visitor sees it. Switching places with her companion does not pass the effect on. When she covers her left eye the crescent vanishes. With that eye open she can still see a pale crescent on a blank wall. Moments earlier she had studied a dark crescent on a brightly lit white demonstration card with only her left eye. It fades after a short while.",
    "questions": [
      "Where is the second crescent coming from, and which observation rules out a mark on the painting?"
    ],
    "hints": [
      "An effect that follows one person to a blank wall can travel with the observer.",
      "Think of a lingering contrast after looking away from a high-contrast shape."
    ],
    "answer": "It is an afterimage from viewing the demonstration card. Seeing the crescent on a blank wall rules out a mark on the painting.",
    "why": "Visual adaptation can leave a short-lived, contrast-reversed impression after a viewer looks away. The shape follows the adapted eye, appears against different backgrounds, and fades. No additional paint or projection is needed."
  },
  {
    "id": 180,
    "kind": "Logic",
    "title": "Twelve portraits on the wall",
    "level": "Medium",
    "intro": "A long gallery wall has twelve frames in one row, labeled 1–12. A guard chooses some frames for a tour. Each chosen frame must have at least two unchosen frames between it and the next chosen frame. Both end frames may be chosen if the spacing rule holds.",
    "questions": [
      "How many frames can the tour include at most? Give one possible selection."
    ],
    "hints": [
      "Once you pick a frame, how far away can the next eligible number be at minimum?",
      "Picking the earliest possible four gives 1, 4, 7 and 10. Where would a fifth have to go?"
    ],
    "answer": "Four frames, for example 1, 4, 7 and 10.",
    "why": "Five chosen frames would need four gaps of at least two unchosen frames each. That requires at least 5 + 8 = 13 positions. Four fit in twelve, so four is optimal."
  },
  {
    "id": 181,
    "kind": "Visual reasoning",
    "title": "The brass inspection frame",
    "level": "Easy",
    "intro": "A two-by-two frame covers four neighboring numbers. The frame may start in either of the top two rows.",
    "questions": [
      "Which position gives the greatest sum, and what is it?"
    ],
    "hints": [
      "Compare three sums along the top strip and three along the bottom.",
      "The top strip sums are 12, 12 and 12."
    ],
    "answer": "The lower middle position, totaling 13.",
    "why": "Top-row frames give 12, 12 and 12. Lower frames give 11, 13 and 11. The best covers 5, 1, 3 and 4.",
    "figure": "p2v-windows.svg",
    "alt": "Three rows of numbers read 4 1 5 2 / 2 5 1 4 / 1 3 4 2."
  },
  {
    "id": 182,
    "kind": "Optical illusions",
    "title": "The two gatherings",
    "level": "Medium",
    "intro": "Two orderly crowds occupy differently sized patches. Without counting each head in isolation, compare their populations.",
    "questions": [
      "Which gathering contains more heads, and which is more densely packed?"
    ],
    "hints": [
      "Count rows and columns in one group, then in the other.",
      "Density describes how many heads fit into a given area."
    ],
    "answer": "Each has 63 heads. The left crowd is denser.",
    "why": "Both arrays have nine columns and seven rows, hence 63 dots. The left lattice uses 18 units between neighboring centers and the right uses 24. The larger footprint can suggest greater quantity at a glance.",
    "figure": "p2o-crowds.svg",
    "alt": "Two rectangular arrays of equally sized heads, with nine columns and seven rows each. The left array is more tightly spaced.",
    "reveal": "p2o-crowds-proof.svg",
    "revealAlt": "The two rectangular footprints are outlined around their equal populations."
  },
  {
    "id": 183,
    "kind": "Lateral thinking",
    "title": "The club that lost while winning twice",
    "level": "Hard",
    "intro": "Two players submit all their puzzle scores in two divisions. In Easy, Lina solves 9 of 10 and Bo solves 80 of 100. In Hard, Lina solves 30 of 100 and Bo solves 2 of 10. Lina has the better percentage in both divisions. The club still awards Bo the trophy for the better percentage across all attempts. Every attempt counts once.",
    "questions": [
      "What happened when the scorekeeper pooled the divisions?"
    ],
    "hints": [
      "Add the solved totals and attempted totals before taking each overall percentage.",
      "Which player spent most of their attempts in the division where both players scored better?"
    ],
    "answer": "Bo solved 82 of 110 overall; Lina solved 39 of 110. Bo played disproportionately many Easy challenges.",
    "why": "Lina beats Bo within both divisions, 90% against 80% and 30% against 20%. The overall rate weights each division by each player’s actual number of attempts. Most of Bo’s attempts were in Easy, while most of Lina’s were in Hard."
  },
  {
    "id": 184,
    "kind": "Logic",
    "title": "Three entries in the minute book",
    "level": "Hard",
    "intro": "A clerk knows there were more than 20 and fewer than 60 delegates. When seated in rows of four, exactly two remained. When seated in rows of five, exactly three remained. When seated in rows of seven, three remained.",
    "questions": [
      "How many delegates were there?"
    ],
    "hints": [
      "A number leaving 2 after division by 4 and 3 after division by 5 is two short of a multiple of both 4 and 5.",
      "In the allowed range, the first two clues leave 38 or 58. Check the row of seven."
    ],
    "answer": "Thirty-eight.",
    "why": "Adding two gives a common multiple of 4 and 5, hence a multiple of 20. Within the limits the possibilities for the original number are 38 and 58. Since 38 = 5 × 7 + 3 while 58 = 8 × 7 + 2, only 38 fits the last clue."
  },
  {
    "id": 185,
    "kind": "Visual reasoning",
    "title": "The stagehand’s scene change",
    "level": "Medium",
    "intro": "Slide row 2 two positions right, wrapping around at the edge. Then slide column 3 one position down, wrapping at the bottom. All other letters stay put.",
    "questions": [
      "Which letter is now at H’s original position, and where did H finish?"
    ],
    "hints": [
      "After the row movement, row 2 reads I, J, F, G, H.",
      "The former center of row 2 now receives the letter from the top of column 3."
    ],
    "answer": "C occupies H’s original position. H is in row 2, column 5.",
    "why": "H shifts from column 3 to column 5 in the first move, so the column movement misses it. The originally printed C drops into row 2, column 3.",
    "figure": "p2v-shift.svg",
    "alt": "The four rows read ABCDE / FGHIJ / KLMNO / PQRST."
  },
  {
    "id": 186,
    "kind": "Optical illusions",
    "title": "The assayer’s balance mark",
    "level": "Easy",
    "intro": "Each black rod crosses a pale kite. The two kites distribute their area differently above and below the rods.",
    "questions": [
      "Do the rust marks bisect the black rods, the total height of the kites, both, or neither?"
    ],
    "hints": [
      "First compare the two rod lengths on either side of a mark.",
      "Compare the distances from the mark to the top and bottom of its own kite."
    ],
    "answer": "They bisect the rods only.",
    "why": "Each mark leaves 65 units of rod on either side. In A the kite extends 92 above the rod and 68 below. In B it extends 68 above and 92 below. A strong corner cue can suggest more kinds of balance than are present.",
    "figure": "p2o-balance.svg",
    "alt": "A and B each show a horizontal rod centered left-to-right in a kite. The top kite apex is displaced in height by 12 units, as is the bottom apex.",
    "reveal": "p2o-balance-proof.svg",
    "revealAlt": "Isolated rods have rust midpoint ticks and equal 65-unit half lengths."
  },
  {
    "id": 187,
    "kind": "Lateral thinking",
    "title": "An echo in a sealed envelope",
    "level": "Hard",
    "intro": "A poet mails a friend a sheet with one handwritten line visible and the faint outline of an earlier line above it. The upper line is a field of dents, with no graphite or ink. Every dent faces the same way as a stroke of handwriting. Under a slanting lamp the strokes cast tiny shadows. The poet’s pad had contained ordinary loose sheets stacked face up.",
    "questions": [
      "How could the poet have written the upper line without ever touching this sheet with a pen?"
    ],
    "hints": [
      "A pen applies pressure as well as ink.",
      "Imagine writing on the sheet that lay immediately above this one."
    ],
    "answer": "The upper line was written on an overlying sheet while the two were stacked.",
    "why": "Pen pressure indented the sheet beneath. Removing the upper sheet left the impressions, which raking light makes legible through shadows without any deposited ink."
  },
  {
    "id": 188,
    "kind": "Logic",
    "title": "The umbrella in the middle",
    "level": "Medium",
    "intro": "Seven drying times in minutes were copied in ascending order: 8, 11, 14, a smudge, 23, 26, 29. The attendant remembers that the median of the seven was exactly two minutes less than the arithmetic mean. Every recorded time was an integer.",
    "questions": [
      "Can a whole number fit the smudge and both remembered conditions? Justify your answer."
    ],
    "hints": [
      "The median of seven sorted entries is the fourth entry.",
      "Let the missing time be x. The six visible times add to 111, so the mean is (111+x)/7."
    ],
    "answer": "No integer fits those notes.",
    "why": "The equation x + 2 = (111+x)/7 gives 6x = 97. That is not divisible by six, so the claimed mean and median cannot both be right. A smudged numeral alone does not explain the record."
  },
  {
    "id": 189,
    "kind": "Visual reasoning",
    "title": "The narrow flap",
    "level": "Easy",
    "intro": "Fold the two left columns to the right along the marked crease between columns 2 and 3. The other three columns stay flat.",
    "questions": [
      "Which stationary letters are covered by F and Q, respectively? Which column remains uncovered?"
    ],
    "hints": [
      "The moving column next to the crease lands on the stationary column next to the crease.",
      "Column 1 lands on column 4. Folding keeps the row unchanged."
    ],
    "answer": "F covers I, Q covers R, and column 5 stays uncovered.",
    "why": "F begins in row 2, column 1 and lands in row 2, column 4. Q begins in row 4, column 2 and lands in row 4, column 3. The flap is only two columns wide.",
    "figure": "p2v-crease.svg",
    "alt": "Four rows read ABCDE / FGHIJ / KLMNO / PQRST. A vertical crease is marked between columns 2 and 3."
  },
  {
    "id": 190,
    "kind": "Optical illusions",
    "title": "The silent music roll",
    "level": "Medium",
    "intro": "Eleven channels each carry one rust mark. From across the room the marks suggest a smooth wave.",
    "questions": [
      "Is any curved stroke printed? If you connect consecutive centers by straight segments, how many segments do you draw?"
    ],
    "hints": [
      "Inspect the space between neighboring marks.",
      "A chain joining two marks needs one link. Each additional mark adds one more."
    ],
    "answer": "There is no curved stroke. Ten straight segments join the eleven marks.",
    "why": "Only vertical channel lines and separate discs are present. Smooth continuation is supplied by the viewer. Joining eleven ordered centers with straight links produces ten segments, an angular approximation to the implied curve.",
    "figure": "p2o-wave.svg",
    "alt": "Eleven discs in successive vertical channels trace a trough then a crest, without any lines between discs.",
    "reveal": "p2o-wave-proof.svg",
    "revealAlt": "Ten straight links now connect the eleven centers."
  },
  {
    "id": 191,
    "kind": "Lateral thinking",
    "title": "The page beyond the back cover",
    "level": "Medium",
    "intro": "The library copy of an old book contains a handwritten reference to page 248. The printer’s final numbered page is 240, and comparison with a second copy establishes that no printed leaves are missing. The library copy’s rear cover has a flat paper pocket. Inside is a folded map. Unfolded, its printed panels carry the numbers 241 through 248 in small type. The note says ‘see 248 for the south entrance’.",
    "questions": [
      "How could the reader follow that reference without turning past page 240 of the bound text?"
    ],
    "hints": [
      "The page number sequence may continue on something detachable.",
      "Think about what can be put back in the pocket after consulting it."
    ],
    "answer": "Unfold the map from the rear pocket and consult panel 248.",
    "why": "Although the bound text ends at 240, the publisher continued its numbering on eight sections of the map. The note points to the last of those panels."
  },
  {
    "id": 192,
    "kind": "Logic",
    "title": "The last three envelopes",
    "level": "Hard",
    "intro": "Four drawers are labeled A, B, C and D. Exactly one envelope belongs in each. A return label restricts Iris to A or B. Jules must use A or B as well. Kavi can use B or C. Luz can use C or D. Each person brings one envelope. The clerk need not distinguish Iris from Jules to finish part of the job.",
    "questions": [
      "Which two envelopes can be filed in definite drawers immediately?"
    ],
    "hints": [
      "Two people between them already need two particular drawers.",
      "Remove A and B from consideration for the other people."
    ],
    "answer": "Kavi must use C. Luz must use D.",
    "why": "Iris and Jules must occupy A and B in some order; neither other person can use either drawer. Kavi’s only remaining choice is C, leaving only D for Luz. Swapping Iris and Jules yields two valid completions, so neither of their individual drawers is forced."
  },
  {
    "id": 193,
    "kind": "Visual reasoning",
    "title": "The copper brace",
    "level": "Medium",
    "intro": "A rectangular cabinet is twelve units wide and five units tall. A copper brace spans the diagonal from lower left to upper right. The drawing shows half of the cabinet.",
    "questions": [
      "An identical brace is added along the other diagonal. How far apart are their midpoints, and how far is the crossing from each corner?"
    ],
    "hints": [
      "The two diagonals of a rectangle bisect one another.",
      "The entire brace has length equal to the square root of 12 squared plus 5 squared."
    ],
    "answer": "The midpoints coincide. The crossing is 6½ units from every corner.",
    "why": "Both braces have midpoint at the center of the rectangle. Each diagonal is 13 units long by the 5–12–13 right triangle, giving four equal half-diagonals of 6½.",
    "figure": "p2v-triangles.svg",
    "alt": "A right triangle has horizontal base 12 and vertical rise 5, with a copper diagonal from lower left to upper right."
  },
  {
    "id": 194,
    "kind": "Optical illusions",
    "title": "Two fans of brass bars",
    "level": "Easy",
    "intro": "The upper edges of the green bars rise in one fan and fall in the other. A rust wire crosses each fan.",
    "questions": [
      "If you extended the two wires into the gap, would they meet at an angle, continue as one straight line, or pass at different heights?"
    ],
    "hints": [
      "The green bars are centered on the wires.",
      "Look only at the ends sticking out of each fan."
    ],
    "answer": "They continue as one straight line.",
    "why": "Each wire has both ends at page height 130. All the taper comes from the bars growing or shrinking symmetrically about that shared horizontal axis.",
    "figure": "p2o-fanbars.svg",
    "alt": "Two groups of vertical bars, increasing in height to the right in the left group and decreasing in the right group, are pierced by rust wires.",
    "reveal": "p2o-fanbars-proof.svg",
    "revealAlt": "A teal segment bridges the aligned wires."
  },
  {
    "id": 195,
    "kind": "Lateral thinking",
    "title": "The hill that went indoors",
    "level": "Medium",
    "intro": "A traveler moves a level model railway from a courtyard into a hall. Without changing the rails’ shape he makes a carriage roll from station A to B under gravity alone. In the courtyard the board rested on four identical feet on a level floor. The hall floor is also level. At dinner the owner finds a thick catalog missing, and its rectangular outline is visible in dust beneath the board’s A end.",
    "questions": [
      "How did a previously level track acquire a downhill direction?"
    ],
    "hints": [
      "Gravity cares about height in the room, not shape relative to the board.",
      "The catalog could have raised one pair of feet."
    ],
    "answer": "The traveler propped up the A end of the entire board with the catalog.",
    "why": "The rails retained their positions on the model. Raising one end tilted the model as a whole and gave a carriage higher gravitational potential at A than at B."
  },
  {
    "id": 196,
    "kind": "Logic",
    "title": "The ink maker’s reserve",
    "level": "Medium",
    "intro": "Two sealed bottles contain blue and clear liquid mixed uniformly. Bottle A holds 12 measures, one quarter of them blue. Bottle B holds 12 measures, three quarters of them blue. The ink maker pours some whole measures of B into all of A, without removing anything from A. The new mixture is exactly three eighths blue.",
    "questions": [
      "How many measures were poured from B?"
    ],
    "hints": [
      "Start with three measures of blue in A. Each measure from B adds three quarters of a measure of blue.",
      "If x measures move, the blue amount is 3 + 3x/4 and the new total is 12 + x."
    ],
    "answer": "Four measures.",
    "why": "Set 3 + 3x/4 equal to 3(12+x)/8. Multiplying by eight gives 24 + 6x = 36 + 3x, so x = 4. This pours three blue measures into the original three, giving six blue measures out of sixteen."
  },
  {
    "id": 197,
    "kind": "Visual reasoning",
    "title": "The pen plotter’s return",
    "level": "Medium",
    "intro": "The pen plotter starts at bottom left and follows the green route. Its return program must use only horizontal or vertical moves between adjacent cell centers.",
    "questions": [
      "What is the smallest number of one-cell return moves, and how many shortest return programs exist?"
    ],
    "hints": [
      "After the four long segments it ends at the center.",
      "To reach the lower-left start from the center it needs one left move and one down move."
    ],
    "answer": "Two moves, with two shortest programs.",
    "why": "The outward segments carry the pen up two, right two, down one and left one. It is then one column right and one row above the start. Left then down, or down then left, both return in two moves.",
    "figure": "p2v-vector.svg",
    "alt": "The green route begins at lower left on a three-by-three grid, goes up two, right two, down one, then left one."
  },
  {
    "id": 198,
    "kind": "Optical illusions",
    "title": "The five gray terraces",
    "level": "Medium",
    "intro": "Five adjoining slabs step from dark to light. Their borders can look as though they have narrow extra bands, especially when seen at a distance.",
    "questions": [
      "How many different interior gray fills are printed, and do the steps increase by a constant or a changing amount in the drawing’s RGB values?"
    ],
    "hints": [
      "Count slabs first. For the numerical part, their gray channel values are 71, 100, 129, 158 and 187.",
      "Subtract neighboring values; printed values and perceived differences are separate questions."
    ],
    "answer": "Five fills, increasing by 29 at every step.",
    "why": "Each slab is completely flat in value. The four jumps are 29 channel units apiece. Neighbor contrast can accentuate edges, and equal numeric jumps need not look equally large. The proof separates all five samples.",
    "figure": "p2o-terrace.svg",
    "alt": "Five solid adjacent gray rectangles from dark to light. Their channel values are 71, 100, 129, 158 and 187.",
    "reveal": "p2o-terrace-proof.svg",
    "revealAlt": "Gaps separate the five flat gray samples."
  },
  {
    "id": 199,
    "kind": "Lateral thinking",
    "title": "The waltz beside the march",
    "level": "Hard",
    "intro": "An old record sometimes plays the waltz and sometimes the march when started from its outer rim. Both tunes play forwards, at the same speed, from beginning to end. The needle never jumps once a tune begins. Under a lens the lead-in shows two separate starting cuts; tracing either one circles inward without ever joining the other.",
    "questions": [
      "How can a single side offer two complete tunes?"
    ],
    "hints": [
      "One side of a disc can carry more than one continuous path.",
      "Look at which cut the needle enters at the rim."
    ],
    "answer": "It has two interleaved spiral grooves, with a different tune recorded in each.",
    "why": "A landing needle can enter either starting cut. The spirals wind alongside each other toward the center, keeping the needle in its chosen recording for the entire tune."
  },
  {
    "id": 200,
    "kind": "Logic",
    "title": "The conservator’s postcard test",
    "level": "Hard",
    "intro": "A conservator lays four cards on a desk. Each has a letter on one side and a number on the other. The faces showing are A, T, 4 and 7. The claim to test is ‘Every card with a vowel on one side has an even number on the other’. Cards come from no special distribution.",
    "questions": [
      "Which cards must be turned over to test the claim on these four, while turning as few cards as possible?"
    ],
    "hints": [
      "What single combination would disprove the claim?",
      "An even number is allowed behind any letter. An odd number is allowed only behind a nonvowel if the claim is true."
    ],
    "answer": "Turn over A and 7.",
    "why": "A could have an odd number hidden behind it, and 7 could hide a vowel. Either would disprove the claim. T cannot violate a rule applying only to vowels; 4 already has an even number regardless of its hidden letter."
  },
  {
    "title": "The right-handed clockwork crab",
    "kind": "Visual reasoning",
    "level": "Hard",
    "intro": "The crab starts on S facing east. Each time it moves one square, it can go straight or turn right and step. It can revisit squares, but may never enter a dark tile or turn in place.",
    "questions": [
      "Find a shortest route to F. How many steps does it take?"
    ],
    "hints": [
      "Track which way the crab faces when it reaches a square.",
      "An apparent dead end for a left turn can be escaped by making three rights around a block."
    ],
    "answer": "12 steps. E E S S S S W N E E E S.",
    "why": "Follow the compass letters, one square per step. A shortest-route check expands every allowed straight or right step from S, keeping a separate record for each facing direction. F first appears at step 12.",
    "figure": "p3v-crab.svg",
    "alt": "Five rows, top to bottom: S.... / ..... / ...## / ..... / #..#F. A hash is blocked. Start facing east.",
    "id": 201
  },
  {
    "title": "An argument at the crossing",
    "kind": "Optical illusions",
    "level": "Easy",
    "intro": "Two sign painters disagree about the dark symbol at the crossing of two sequences. Each painter followed a different street.",
    "questions": [
      "What did the painter coming from the left call it? What did the painter coming from above call it?"
    ],
    "hints": [
      "Read one street at a time.",
      "Cover the vertical numbers and read across; then cover the flanking letters."
    ],
    "answer": "Across it is B. Down it is 13.",
    "why": "The detached upright stroke can join the double curve as the stem of B, or stand alone as the digit 1 beside a 3. The surrounding sequence steers the grouping.",
    "figure": "p3o-cross.svg",
    "alt": "A vertical line stands just left of a double-lobed stroke. A and C flank it; 12 and 14 sit above and below.",
    "reveal": "p3o-cross-proof.svg",
    "revealAlt": "The two component strokes are isolated, with readings B and 13 printed underneath.",
    "id": 202
  },
  {
    "title": "Three readings at table nine",
    "level": "Easy",
    "intro": "A compositor carries a line of seven uppercase letters from the dining room to a rehearsal to the arts desk. At dinner it answers “Can you seat us?” At rehearsal it answers “Can the understudy dance?” At the arts desk it describes a performance worth mentioning. The letters never move. Only spaces are inserted or removed. The arts editor pronounces the first syllable like the word NOTE.",
    "questions": [
      "What is the line, and how does each reader divide it?"
    ],
    "hints": [
      "Start with an adjective that an editor might use for something worth mentioning.",
      "The dinner reading ends with a piece of furniture. The rehearsal reading ends with a word meaning capable."
    ],
    "answer": "NOTABLE: NO TABLE, NOT ABLE, NOTABLE.",
    "why": "Read all seven letters straight through for the editor’s adjective. Separating after the second letter gives the host’s answer. Separating after the third gives the stage manager’s answer.",
    "kind": "Lateral thinking",
    "id": 203
  },
  {
    "title": "The token with two faces",
    "level": "Easy",
    "intro": "A two-digit token number is larger than the number made by exchanging its digits. Adding the two readings gives 99. Subtracting the smaller reading from the larger gives 27. Neither begins with zero.",
    "questions": [
      "What number was stamped on the token?"
    ],
    "hints": [
      "Add the two equations “large plus small” and “large minus small.”",
      "Alternatively, the digits add to 9 and differ by 3."
    ],
    "answer": "63.",
    "why": "The two readings together make 99, and the larger receives 27 extra. Twice the larger is 126, so it is 63. Reversing gives 36, and the difference is exactly 27.",
    "kind": "Logic",
    "id": 204
  },
  {
    "title": "The missing gingerbread cutter",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "A baker traced her lost cutter at the top. A replacement can turn on the counter, but its sharp side must stay down.",
    "questions": [
      "Which replacement has exactly the traced outline?"
    ],
    "hints": [
      "Start at the single square on the short end.",
      "Follow the bend to the run at the far end. A reflection swaps the hand of the bend."
    ],
    "answer": "Cutter B.",
    "why": "Half a turn takes B back to the tracing. A is a mirror image. C moves the short end by one square.",
    "figure": "p3v-ginger.svg",
    "alt": "The trace has cells (0,0), (1,0), (1,1), (1,2), (2,2), (3,2). A reflects it left to right, B turns it through 180 degrees, and C moves (0,0) to (0,1).",
    "id": 205
  },
  {
    "title": "The naturalist’s disputed specimen",
    "kind": "Optical illusions",
    "level": "Easy",
    "intro": "A field sketch has one eye and two long points. The keeper of the pond and the keeper of the hutch both want it for their signs.",
    "questions": [
      "What two animals can share this outline? Which end serves two completely different purposes?"
    ],
    "hints": [
      "Look at the left-hand points as a pair.",
      "Imagine one animal facing left, then another facing right."
    ],
    "answer": "A duck facing left and a rabbit facing right.",
    "why": "For the duck, the two points are the upper and lower bill. For the rabbit they are two ears laid back; the rounded right edge becomes a muzzle. The eye stays put in both readings.",
    "figure": "p3o-shorebird.svg",
    "alt": "A profile with a rounded head on the right, an eye near the left, and two long flattened projections pointing left.",
    "reveal": "p3o-shorebird-proof.svg",
    "revealAlt": "Leaders identify the same two projections as bill or ears and the rounded edge as head or muzzle.",
    "id": 206
  },
  {
    "title": "The boatman’s shrinking hill",
    "level": "Easy",
    "intro": "A map in a boat cabin has a row of numbers along the channel: 12, 9, 6, 3. The boatman says the floor beneath him climbs as those numbers get smaller. His deck stays exactly the same height above a painted line on the shore. The lake is perfectly still. A surveyor’s note says a weight on a cord touched bottom at each mark.",
    "questions": [
      "What do the numbers measure, and what “floor” climbs?"
    ],
    "hints": [
      "The printed numbers measure distances, all from the same starting level.",
      "Imagine paying out the cord from the surface until its weight touches the bottom."
    ],
    "answer": "They are water depths. The lakebed rises toward the surface.",
    "why": "The surface is level. A fall in depth from 12 to 3 means the bed rises by nine units. The floating deck follows the unchanged surface.",
    "kind": "Lateral thinking",
    "id": 207
  },
  {
    "title": "The tea-tray siding",
    "level": "Medium",
    "intro": "Four numbered trays arrive in order 1, 2, 3, 4. The steward can place the next arriving tray on top of a single stack or take the top tray from the stack to serve it. A tray can go directly from arrival to service by being placed on top and immediately removed. Once served, a tray stays served.",
    "questions": [
      "Which proposed order is impossible: 2–1–4–3 or 3–1–4–2? Point to the first blocked request."
    ],
    "hints": [
      "To serve 3 first, where must you put trays 1 and 2?",
      "After you remove 3, what is sitting immediately above 1?"
    ],
    "answer": "3–1–4–2 is impossible. Its second request is blocked.",
    "why": "Serving 3 first leaves 2 above 1. Bringing in 4 only adds another obstruction. The other order works: stack 1 and 2, serve 2 and 1, then stack 3 and 4 and serve 4 and 3.",
    "choices": [
      "2–1–4–3",
      "3–1–4–2"
    ],
    "kind": "Logic",
    "id": 208
  },
  {
    "title": "The six-pin kite badge",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "A cord outlines the boundary of a kite badge on a square pegboard. Neighboring pegs are one unit apart.",
    "questions": [
      "What area does the badge enclose?"
    ],
    "hints": [
      "Enclose the badge in a four-by-four square.",
      "The outside pieces are three right triangles. Use half of base times height."
    ],
    "answer": "12 square units.",
    "why": "The bounding square has area 16. At the top left a 2-by-2 triangle takes away 2. At the two right corners 2-by-1 triangles take away 1 each. The remaining area is 12.",
    "figure": "p3v-charm.svg",
    "alt": "Vertices in order: A (0,0), B (2,0), C (4,1), D (4,3), E (2,4), F (0,2).",
    "id": 209
  },
  {
    "title": "The delivery firm’s unpainted sign",
    "kind": "Optical illusions",
    "level": "Easy",
    "intro": "A retired sign painter used only two black areas. Her delivery company wanted a direction mark without paying for any colored lettering.",
    "questions": [
      "Which direction does the unpainted sign point? Name the two shapes that make its shaft and head."
    ],
    "hints": [
      "Look at the narrow empty band through the middle.",
      "The highest and lowest points of the empty shape form the back corners of a triangular head."
    ],
    "answer": "Right. A rectangular shaft feeds a triangular arrowhead.",
    "why": "The large dark pieces can read as independent panels. Taking the gap between them as figure reveals a right-pointing arrow. The overlay colors its central shape.",
    "figure": "p3o-sign.svg",
    "alt": "Two opposing dark panels enclose a pale horizontal band that expands into a chevron near the middle.",
    "reveal": "p3o-sign-proof.svg",
    "revealAlt": "The rectangular shaft and right-facing arrowhead in the gap are now colored gold.",
    "id": 210
  },
  {
    "title": "The cone at Mulberry Fair",
    "level": "Hard",
    "intro": "A wooden toy shaped like two cones joined base to base sits across a pair of rails, with its axis across the track. At the starting end the rails run close together and touch thick parts of the toy. They spread farther apart as they rise gently. Released from rest, the toy rolls toward the high end. It has no motor or hidden weight.",
    "questions": [
      "How can gravity make it roll toward the higher rail ends? What point would you track to test your explanation?"
    ],
    "hints": [
      "Watching the rail tops tells you only where contact takes place.",
      "Near the toy’s pointed ends the radius is smaller. Compare the height of its central axle above the rail contacts."
    ],
    "answer": "Its center can descend while its contact points move onto higher rails. Track the midpoint of the axle.",
    "why": "Farther apart, the rails support the toy nearer its narrow tips. That brings the axle closer to rail height. If this drop exceeds the rise of the rails, the center of mass moves downhill and the toy rolls that way.",
    "kind": "Lateral thinking",
    "id": 211
  },
  {
    "title": "The lamp that becomes a tile",
    "level": "Hard",
    "intro": "The word rack contains exactly LAMP, LIMP, LIME, TIME, TAME, TAMP, RAMP, RIME, DIME, LAME, TIRE and TILE. A move changes exactly one letter in place to form another rack word.",
    "questions": [
      "What is the fewest moves from LAMP to TILE? Find every route of that length."
    ],
    "hints": [
      "After one move the reachable words are LIMP, TAMP, RAMP and LAME.",
      "To reach TILE at the fourth move you must first reach TIME at the third. Which second-step words can reach TIME?"
    ],
    "answer": "Four moves, with four shortest routes.",
    "why": "LAMP–LIMP–LIME–TIME–TILE; LAMP–LAME–LIME–TIME–TILE; LAMP–LAME–TAME–TIME–TILE; LAMP–TAMP–TAME–TIME–TILE. Only LIME and TAME appear as new words on the second move. Neither reaches TILE directly. Of the third-move possibilities, only TIME can then reach TILE.",
    "kind": "Logic",
    "id": 212
  },
  {
    "title": "Five tiles in a biscuit tin",
    "kind": "Visual reasoning",
    "level": "Hard",
    "intro": "Five numbered tiles slide in a two-row frame. Only a tile sharing an edge with the empty space may slide into it.",
    "questions": [
      "Turn the left layout into the right in the fewest slides. Which tiles move?"
    ],
    "hints": [
      "Work backward from the target as well as forward from the start.",
      "On one shortest solution, the first tile moved is 4."
    ],
    "answer": "8 slides: 4, 1, 5, 2, 3, 5, 2, 3.",
    "why": "Move the listed tile into the gap each time. Exploring all one-slide neighbors at each distance, discarding layouts already seen, first reaches the target at distance 8.",
    "figure": "p3v-slider.svg",
    "alt": "Start rows 415 / .32. Target 123 / 45 dot. A dot is the gap.",
    "id": 213
  },
  {
    "title": "Coins in the shuttered booth",
    "kind": "Optical illusions",
    "level": "Medium",
    "intro": "The booth’s shutter looks striped from end to end. A different grain hides a collection of round counters inside it.",
    "questions": [
      "How many counters are in the shutter? What outlines their edges before the reveal?"
    ],
    "hints": [
      "Look where the strokes change direction.",
      "Try following one patch of vertical strokes around its entire edge."
    ],
    "answer": "Eight counters, in two rows of four.",
    "why": "There are no ink rings around the counters in the original. The line direction changes at eight circular boundaries. The proof adds the missing contours.",
    "figure": "p3o-coffer.svg",
    "alt": "A field of horizontal lines contains two rows of patches with vertical lines and curved edges.",
    "reveal": "p3o-coffer-proof.svg",
    "revealAlt": "Eight copper rings mark the boundaries of the circular patches.",
    "id": 214
  },
  {
    "title": "The lantern without a porter",
    "level": "Medium",
    "intro": "Sumi photographs the same empty courtyard twice from a tripod. In the second picture a glowing line curves from the gate to the steps. Her porter insists he carried one small lantern along that route during the photograph. The background bricks have crisp edges. He wore dark clothes and never paused. A moth tapped the open shutter twice, several seconds apart.",
    "questions": [
      "Why is a line clear in the picture while the person carrying its source is almost invisible?"
    ],
    "hints": [
      "The two shutter taps show how long the camera collected light.",
      "Compare a bright point moving across a dark background with a dark coat briefly passing in front of each brick."
    ],
    "answer": "One long exposure recorded the lantern at successive positions as a light trail.",
    "why": "The stationary bricks contributed light for almost the entire exposure. The coat occupied any one patch for only a brief part of it. The much brighter lantern left a distinct mark even in each brief instant.",
    "kind": "Lateral thinking",
    "id": 215
  },
  {
    "title": "The photographer’s six weighings",
    "level": "Hard",
    "intro": "Four different camera accessories have positive whole-number weights. The photographer weighed every possible pair, once each. Sorted from lightest to heaviest, the six pair weights are 6, 9, 13, 14, 18 and 21 units.",
    "questions": [
      "What are the four weights?"
    ],
    "hints": [
      "Adding all six results counts each accessory three times.",
      "Call the smallest weight a. The next two weights are 6 − a and 9 − a, so the largest is 12 + a."
    ],
    "answer": "1, 5, 8 and 13 units.",
    "why": "All four sum to 81 ÷ 3 = 27. The smallest-plus-largest pair weighs 12 + 2a. It must be one of the two middle pair totals, 13 or 14. Only 14 gives a whole-number a, namely 1. The other three weights follow, and their six pairings reproduce the list.",
    "kind": "Logic",
    "id": 216
  },
  {
    "title": "The skyline vendor’s missing postcard",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "Each number is the height of a tower of unit blocks. A camera looks horizontally straight down each column from the bottom edge. Towers hide anything behind them up to their own height.",
    "questions": [
      "What three heights form the camera’s skyline, left to right? How many unit-square windows fill that silhouette?"
    ],
    "hints": [
      "A photograph flattens each column into one stack.",
      "Pick the tallest tower along each of the three lines of sight."
    ],
    "answer": "3, 2, 4; 9 windows.",
    "why": "The left line contains heights 2, 3, 1 and gives 3. The middle line contains 1, 2, 2 and gives 2. The right line contains 4, 1, 3 and gives 4. The silhouette covers 3 + 2 + 4 = 9 squares.",
    "figure": "p3v-skyline.svg",
    "alt": "Rows from back to front: 1 2 3; 3 2 1; 2 1 4. Camera at front.",
    "id": 217
  },
  {
    "title": "The harbor stamp in the thatch",
    "kind": "Optical illusions",
    "level": "Medium",
    "intro": "A thatcher hid a harbor emblem in a field of little strokes. All marks use the same ink and length.",
    "questions": [
      "What emblem do the strokes that lean against the prevailing grain form?"
    ],
    "hints": [
      "Most strokes fall as you read from left to right.",
      "Follow the rising strokes. Look for a small crosspiece above two upturned flukes."
    ],
    "answer": "An anchor.",
    "why": "The rising strokes make a central shank, a short crossbar and two curved flukes. The proof fades all the falling strokes.",
    "figure": "p3o-slanted.svg",
    "alt": "A field of diagonal strokes; the minority rise to the right and sketch a vertical shank with two hooked arms.",
    "reveal": "p3o-slanted-proof.svg",
    "revealAlt": "The rising strokes are colored copper, revealing an anchor silhouette.",
    "id": 218
  },
  {
    "title": "The bookshop’s backwards index",
    "level": "Medium",
    "intro": "A bookbinder is sorting slips reading BEND, LEND, SEND, BOWL, FOUL, SOUL. A customer asks why BOWL does not sit with BEND and why SOUL is well away from SEND. The indexer compares the last letter first. On a tie she compares the letters immediately to its left, and so on, using ordinary alphabetical order at each comparison.",
    "questions": [
      "Put the six slips in her order. What tempting grouping by sound would give a different result?"
    ],
    "hints": [
      "All the cards ending in D come before all the cards ending in L.",
      "For the last three, compare the letter before L. For two of those you will need to look even farther left."
    ],
    "answer": "BEND, LEND, SEND, FOUL, SOUL, BOWL. Matching the spelling from the end governs the order.",
    "why": "The reversed spellings are DNEB, DNEL, DNES, LUOF, LUOS and LWOB. FOUL and SOUL sit together in the index even though FOUL rhymes with HOWL while SOUL rhymes with BOWL in these words’ usual pronunciations.",
    "kind": "Lateral thinking",
    "id": 219
  },
  {
    "title": "One wrong pair in the type case",
    "level": "Hard",
    "intro": "Five type blocks start A B C D E. One legal move chooses any three blocks and rotates them round their three positions in either direction. The printer wants to exchange just A and B, leaving C, D and E where they began.",
    "questions": [
      "Can any sequence of legal moves do it? Explain a way to detect the obstruction."
    ],
    "hints": [
      "One three-way rotation can be performed as two ordinary exchanges of pairs.",
      "Count inversions: pairs whose left-to-right order disagrees with alphabetical order. A single exchange changes whether that count is odd or even."
    ],
    "answer": "No. The requested arrangement has odd parity, while every legal move preserves even parity.",
    "why": "An exchange of two positions reverses their mutual order and changes an even number of other pair relationships in total, so it flips the parity of the inversion count. A three-way rotation uses two exchanges. Starting at zero inversions, the printer can never reach B A C D E, which has one.",
    "kind": "Logic",
    "id": 220
  },
  {
    "title": "The festival streamer comb",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "Five streamers enter a braiding comb. Each strand goes straight through any crossing. The loose tips are numbered at the bottom.",
    "questions": [
      "A prize ticket asks for BEAD. In which order must its four numbered tips be pulled?"
    ],
    "hints": [
      "Trace B first and write its bottom number beneath the B on the ticket.",
      "A colored line continues on its own diagonal through a crossing."
    ],
    "answer": "3, 2, 4, 1.",
    "why": "From 1 to 5, the tips are D, E, B, A, C. Read their numbers in B, E, A, D order.",
    "figure": "p3v-cables.svg",
    "alt": "Top labels A through E. Adjacent lanes swap in this order from top down: 1–2, 3–4, 2–3, 4–5, 3–4, 1–2, 2–3.",
    "id": 221
  },
  {
    "title": "A postcard nobody printed",
    "kind": "Optical illusions",
    "level": "Easy",
    "intro": "Four black seals look as if a pale postcard covers part of each one. Follow the apparent postcard edge with your finger.",
    "questions": [
      "How many of the postcard’s four long connecting sides were actually drawn in ink? What marks suggest its corners?"
    ],
    "hints": [
      "Examine the middle of the top edge.",
      "Each dark disc is missing an inward-facing quarter."
    ],
    "answer": "None. The four inward-facing quarter-notches define the corners.",
    "why": "The empty quarters line up like the corners of an opaque rectangle. The brain can supply the continuous edges across the blank areas. The proof draws the inferred rectangle in copper.",
    "figure": "p3o-postcard.svg",
    "alt": "Four black discs occupy the corners of a rectangle, each missing the quarter that faces inward.",
    "reveal": "p3o-postcard-proof.svg",
    "revealAlt": "A thin rectangle connects the four disc notches and marks the inferred edges.",
    "id": 222
  },
  {
    "title": "An entire hem in her hand",
    "level": "Medium",
    "intro": "A seam sample has an uninterrupted row of loops on its reverse. Each loop of a single thread passes through the preceding loop before the fabric moves ahead. Vera removes the final securing knot, pulls the free end, and takes a whole unbroken thread from the sample. The cloth stays flat and never tears.",
    "questions": [
      "Why does the seam vanish from one end? Why would tugging a random loop in the middle look different?"
    ],
    "hints": [
      "Trace what holds the final loop in place after the knot comes out.",
      "Removing the last loop leaves its predecessor in exactly the same position the last one occupied."
    ],
    "answer": "It is a single-thread chain stitch. Pulling the free last loop releases its predecessor, and the process repeats.",
    "why": "The final thread end can retrace each loop in reverse order. A loop in the middle still has its successor passing through it. Tugging there initially draws neighboring stitches tight or pulls up a loop instead of providing the free finishing end.",
    "kind": "Lateral thinking",
    "id": 223
  },
  {
    "title": "The stamp machine’s last refusal",
    "level": "Medium",
    "intro": "A machine sells stamps in strips of four and strips of seven. You may buy as many whole strips of either size as you like. It can satisfy every order above a certain size.",
    "questions": [
      "What is the largest positive number of stamps it cannot sell exactly?"
    ],
    "hints": [
      "Check 17, then try to build 18, 19, 20 and 21.",
      "Once there are four consecutive possible sizes, adding a strip of four covers every larger size."
    ],
    "answer": "17 stamps.",
    "why": "With zero, one or two sevens inside 17, the remainders are 17, 10 and 3; none is divisible by four. Meanwhile 18 = 7 + 7 + 4, 19 = 7 + 4 + 4 + 4, 20 = five fours, and 21 = three sevens. Adding fours extends these four sequences indefinitely.",
    "kind": "Logic",
    "id": 224
  },
  {
    "title": "The stubborn station digit",
    "kind": "Visual reasoning",
    "level": "Easy",
    "intro": "The sign painter has six glowing bars arranged as 6. Move one lit bar to one unlit position. Keep the others fixed and form an ordinary digit in the same seven positions.",
    "questions": [
      "Which digits can you make? Find them all."
    ],
    "hints": [
      "The new digit must still use exactly six bars.",
      "Among standard digits, only 0, 6 and 9 use six bars."
    ],
    "answer": "0 and 9.",
    "why": "Move the middle bar to the vacant upper-right position for 0. Instead move the lower-left bar to that position for 9.",
    "figure": "p3v-display.svg",
    "alt": "The 6 is lit everywhere except its upper-right bar. The digit positions form the standard seven-segment display.",
    "id": 225
  },
  {
    "title": "The juggler’s traveling shadow",
    "kind": "Optical illusions",
    "level": "Medium",
    "intro": "Two stills of a green ball were drawn from a fixed camera. In the second, the ball may seem to leap sideways or forward.",
    "questions": [
      "Which object actually changed position between the stills? Use the ball’s center and a panel border as references."
    ],
    "hints": [
      "Compare the green center to its own picture frame.",
      "The soft oval on the ground supplies a clue about depth."
    ],
    "answer": "Only the shadow moved. The green ball stays at the same coordinates within each panel.",
    "why": "The ball keeps its retinal size and picture position while the displaced oval suggests a different relation to the ground. A centerline through each ball makes the fixed placement visible.",
    "figure": "p3o-floating.svg",
    "alt": "Two panels show equally placed green balls above a ground line. The oval shadow shifts right in the second.",
    "reveal": "p3o-floating-proof.svg",
    "revealAlt": "Vertical copper guides show the green balls centered in the same place in each panel.",
    "id": 226
  },
  {
    "title": "The tower with an upside-down flag",
    "level": "Medium",
    "intro": "Inside a dark booth, a flag on a sunlit tower appears upside down on a white screen. The screen is blank when a tiny hole in the opposite wall is covered. There is no lens, mirror or moving picture. Outside, the red finial is higher than the flag and stands to its left.",
    "questions": [
      "On which side of the flag’s image will the red finial appear, and why?"
    ],
    "hints": [
      "Imagine running a straight thread from the finial through the hole and on to the screen.",
      "Do the same for a point farther down and to the right on the tower."
    ],
    "answer": "Below and to the right. The hole makes a pinhole image.",
    "why": "Rays from the high, left-hand finial cross the opening and continue downward and rightward. Rays from lower, more rightward points end up above and to their left on the screen. The crossing reverses both directions.",
    "kind": "Lateral thinking",
    "id": 227
  },
  {
    "title": "The host who chooses the encore",
    "level": "Medium",
    "intro": "Three council members rank three songs. Jo ranks Ash above Blue above Crow. Kavi ranks Blue above Crow above Ash. Nell ranks Crow above Ash above Blue. Two songs first face a head-to-head vote; its winner then faces the remaining song. Everyone always votes for the higher song in their own list.",
    "questions": [
      "If the host wants Crow to win the final, which two songs should meet first? Could the host arrange a win for either other song too?"
    ],
    "hints": [
      "Compare Ash against Blue separately from Blue against Crow.",
      "Find the song Crow can beat in a head-to-head final. Can that opponent win the preliminary?"
    ],
    "answer": "Start Ash against Blue. Yes, any of the three can win with the right preliminary.",
    "why": "Ash beats Blue by two votes to one, Blue beats Crow by the same margin, and Crow beats Ash. For a Crow win, let Ash remove Blue. For an Ash win, let Blue remove Crow. For a Blue win, let Crow remove Ash.",
    "kind": "Logic",
    "id": 228
  },
  {
    "title": "The fractured ice window",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "A single green crack crosses each pane corner to corner. Cracks meeting at a shared point belong to the same fracture, even if several meet there.",
    "questions": [
      "How many separate green fractures must the glazier repair?"
    ],
    "hints": [
      "Treat the pale pane edges as background.",
      "Start with one green segment. Trace every green branch connected to it before starting a new color."
    ],
    "answer": "2 separate fractures.",
    "why": "Tracing outward from one unused crack at a time partitions the nine green segments into 2 connected groups. A shared corner joins cracks; neighboring panes alone do not.",
    "figure": "p3v-branches.svg",
    "alt": "Three rows of diagonals: rising falling rising, falling rising rising, rising rising falling.",
    "id": 229
  },
  {
    "title": "One bead escaped the string",
    "kind": "Optical illusions",
    "level": "Medium",
    "intro": "Seven black beads seem to lie on a rising strand. Pale slanted stitches keep pulling the eye away from the real alignment.",
    "questions": [
      "Stretch a straight thread from the center of A to the center of G. Which bead center misses it, and on which side?"
    ],
    "hints": [
      "Check alternating beads first.",
      "Compare D to the midpoint between C and E."
    ],
    "answer": "D lies below the thread.",
    "why": "The centers advance 44 units right and 25 units up at every step except D, which is 13 units below its expected position. The proof stitches an actual line through the six aligned centers.",
    "figure": "p3o-beads.svg",
    "alt": "Seven labeled bead centers arranged on an ascending diagonal. A at (91,203), G at (355,53); D is at (223,141).",
    "reveal": "p3o-beads-proof.svg",
    "revealAlt": "The straight thread passes above D and through the other six bead centers.",
    "id": 230
  },
  {
    "title": "The footprints that came back white",
    "level": "Easy",
    "intro": "A velvet offcut lies flat on a bench. Luca draws a star across it with a clean fingertip. At one end of the bench the star looks dark against pale cloth. At the opposite end it looks pale against dark cloth. A soft brush stroked uniformly across the whole offcut erases the star. No pigment comes off on a white tissue.",
    "questions": [
      "What did Luca change so the star could reverse its contrast?"
    ],
    "hints": [
      "A tissue tests for pigment. The brush tests for something else.",
      "Look at which way the tiny upright fibers lean where the finger passed."
    ],
    "answer": "The finger changed the direction of the velvet’s pile.",
    "why": "Bent fibers reflect different amounts of light toward each observer. Looking from the opposite direction exchanges which set of fibers appears brightest. Brushing all the fibers the same way removes the difference.",
    "kind": "Lateral thinking",
    "id": 231
  },
  {
    "title": "The engraver’s second throw",
    "level": "Medium",
    "intro": "The engraver throws a fair six-sided die once. If it shows 1 or 2 she must throw again and accept the second result. Otherwise she keeps the first result. A 5 or 6 on the accepted result wins a tiny silver leaf.",
    "questions": [
      "What fraction of plays win a leaf?"
    ],
    "hints": [
      "A win on the first throw and a win after a forced rethrow are separate cases.",
      "Picture 36 equally likely pairs of potential throws, even when the second throw goes unused."
    ],
    "answer": "4/9.",
    "why": "Twelve of the 36 pairs start with 5 or 6 and win outright. Four start with 1 or 2 and then show 5 or 6. The total is 16 out of 36.",
    "kind": "Logic",
    "id": 232
  },
  {
    "title": "The pastry chef’s two straight cuts",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "The pastry is a rectangle. Cut once along each colored line, all the way across. The two lines intersect inside it. Any one resulting piece gets a sugar rose only if it touches two ORIGINAL corners.",
    "questions": [
      "How many pieces receive a rose, and which original corners do they touch?"
    ],
    "hints": [
      "Track the original corners, one at a time.",
      "The first line removes a triangle around A; the second removes a triangle around B, but the cuts cross."
    ],
    "answer": "One piece receives a rose. It touches C and D.",
    "why": "Both lower corners lie below both cuts and share one piece. A is beyond the line that runs from the left edge to the top. B is beyond the line running from the top to the right edge. The two cuts cross, so the small top-center piece has no original corner.",
    "figure": "p3v-cut.svg",
    "alt": "Rectangle A top left, B top right, C bottom left, D bottom right. One cut joins the left edge to the top near B; the other joins the top near A to the right edge. They cross inside.",
    "id": 233
  },
  {
    "title": "Three planks that cannot lie flat",
    "kind": "Optical illusions",
    "level": "Hard",
    "intro": "Three straight planks make a triangle. All three are supposed to sit level, each at a single height. At each corner the uninterrupted pair of outlines belongs to the upper plank.",
    "questions": [
      "Can a carpenter assemble the drawing at three fixed heights? Explain using all three corners."
    ],
    "hints": [
      "Trace the top corner first.",
      "Read the three statements as a loop of above-relations."
    ],
    "answer": "No. Teal lies above rust, rust above gold, and gold above teal.",
    "why": "The junctions are locally plausible. Taken together they require teal to be higher than itself. A cut or bend could realize parts of the effect, but three level planks cannot.",
    "figure": "p3o-stack.svg",
    "alt": "A teal left plank crosses over rust at the apex. Rust crosses over gold at the lower right, and gold crosses over teal at lower left.",
    "reveal": "p3o-stack-proof.svg",
    "revealAlt": "The upper member is named separately at each crossing, exposing the circular stacking order.",
    "id": 234
  },
  {
    "title": "The raffle that returns its winner",
    "level": "Hard",
    "intro": "At an art fair the draw steward takes a numbered disk from a drum, awards one print, and drops the disk straight back in before the next draw. She is equally adamant that the same visitor cannot win twice. The forty disk numbers never change. A helper holds a separate forty-slot rack and a box of blank cards. Just after a win you see the helper taking a handwritten name from a slot, although the winner keeps her admission ticket. Every draw of an occupied slot awards its print. Each visitor has one name card in the rack.",
    "questions": [
      "What does a disk actually select? Predict what the steward must do if she later pulls a winning number again and its slot has stayed empty."
    ],
    "hints": [
      "The moving part can retain the same number while the thing it refers to changes.",
      "Where are the names stored between draws?"
    ],
    "answer": "Each disk selects a numbered slot holding a visitor’s name. The helper empties a winning slot. A repeat draw of that empty number must be passed over.",
    "why": "There is one entry card per visitor, filed in a numbered slot. Replacing a numbered disk restores only the pointer. Removing the visitor’s card eliminates the possibility of awarding another prize to that same entry. The next occupied number can still select a winner.",
    "kind": "Lateral thinking",
    "id": 235
  },
  {
    "title": "The two stamps on the packing slip",
    "level": "Medium",
    "intro": "Four display objects have the features shown below. The clerk must choose exactly two of the four feature questions and print their yes/no answers on every packing slip. The same two questions are used for every object.",
    "questions": [
      "Which pair identifies all four objects uniquely?"
    ],
    "hints": [
      "Two yes/no questions can distinguish four objects only when all four answer pairs occur.",
      "Look for a feature that splits the objects one versus three. Pairing it with one more question will still leave two of the three together."
    ],
    "answer": "Ask “Round?” and “Striped?”",
    "why": "Their answers give No/No, No/Yes, Yes/No and Yes/Yes. The chipped and glazed questions each split one object from three. With either of those chosen, one further yes/no answer cannot separate all three.",
    "tables": [
      [
        "Object catalog",
        [
          "Object",
          "Round",
          "Striped",
          "Chipped",
          "Glazed"
        ],
        [
          [
            "A",
            "No",
            "No",
            "Yes",
            "No"
          ],
          [
            "B",
            "No",
            "Yes",
            "No",
            "Yes"
          ],
          [
            "C",
            "Yes",
            "No",
            "No",
            "Yes"
          ],
          [
            "D",
            "Yes",
            "Yes",
            "No",
            "Yes"
          ]
        ]
      ]
    ],
    "kind": "Logic",
    "id": 236
  },
  {
    "title": "The fountain with a dry well",
    "kind": "Visual reasoning",
    "level": "Easy",
    "intro": "A model fountain rests on a table. Eight of its nine square columns are three cubes high. The central column is one cube high. Water is poured into the central well up to the rim.",
    "questions": [
      "How many cube-volumes of water fit? How many cube faces touch the water, excluding its top?"
    ],
    "hints": [
      "The center well has one square of floor.",
      "Each layer of water touches four side walls."
    ],
    "answer": "2 cube-volumes, touching 9 cube faces.",
    "why": "The center floor is two cube-heights below the rim. Two layers give eight side faces, plus one square on the center cube.",
    "figure": "p3v-shell.svg",
    "alt": "Three rows of column heights: 3 3 3; 3 1 3; 3 3 3.",
    "id": 237
  },
  {
    "title": "The fence with a slow heartbeat",
    "kind": "Optical illusions",
    "level": "Hard",
    "intro": "Two fine picket screens are laid over one another. The broad recurring bands look like another screen printed in very thick stripes. The first pickets are aligned at the left.",
    "questions": [
      "One set has a ten-unit pitch and the other an eleven-unit pitch. How many units apart are exact alignments? Is there a third set of stripes?"
    ],
    "hints": [
      "Find the first distance that contains a whole number of both pitches.",
      "Eleven dark gaps occupy as much width as ten green gaps."
    ],
    "answer": "Exact alignments repeat every 110 units. There is no third set.",
    "why": "The least common multiple of 10 and 11 is 110. Between coincidences the narrow stripes drift in and out of alignment; their changing density creates the broad beat pattern.",
    "figure": "p3o-beats.svg",
    "alt": "Two overlaid sets of narrow vertical lines: dark lines every 10 drawing units and green lines every 11, both starting at x=65.",
    "reveal": "p3o-beats-proof.svg",
    "revealAlt": "Five markers show exact coincidences at offsets 0, 110, 220, 330 and 440.",
    "id": 238
  },
  {
    "title": "The blue dot on the red label",
    "level": "Medium",
    "intro": "Under white light one paper label is white with a blue dot and the other is red with a black dot. Under a lamp emitting only red light they look strikingly alike. The white and red papers both reflect the lamp’s red light. The blue and black pigments absorb nearly all of it.",
    "questions": [
      "Predict the appearance of each label under the red lamp. Why does swapping the lamp settle a dispute about whether they were printed alike?"
    ],
    "hints": [
      "A pigment cannot send blue light to your eye if no blue light reaches it.",
      "Assess the unprinted paper and the dot separately."
    ],
    "answer": "Each looks like a red field with a very dark dot. Under white light their different reflections become visible again.",
    "why": "The field of each label returns red light. Neither dot returns much red light. When white light supplies blue and other wavelengths again, the white paper and blue pigment recover appearances the other label cannot match.",
    "kind": "Lateral thinking",
    "id": 239
  },
  {
    "title": "Six moves in the sandwich shop",
    "level": "Hard",
    "intro": "Two identical sandwich orders each need a bun opened (O), a filling added (F), then a wrapper closed (W). One person does one action at a time. Orders and buns carry no identifying marks. Count sequences of six action letters. An F may use any opened, unfilled bun and a W may use any filled, unwrapped bun.",
    "questions": [
      "How many different legal letter sequences are there?"
    ],
    "hints": [
      "At every point the number of openings must be at least the number of fillings, which must be at least the number of wrappings.",
      "Every sequence begins with O. Separate the ones beginning OO from the ones beginning OF."
    ],
    "answer": "Five sequences.",
    "why": "They are OOFFWW, OOFWFW, OFOFWW, OFOWFW and OFWOFW. After OO, the first F is forced, then either F or W can follow. After OF, the next action is O or W. Following those branches gives precisely the listed endings.",
    "kind": "Logic",
    "id": 240
  },
  {
    "title": "The bishops’ cloakroom",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "A token starts at A. It moves any number of open squares diagonally in one move and may not cross the black square. Only the three labeled exits count.",
    "questions": [
      "How many moves are needed to reach F? Find a route that avoids the center."
    ],
    "hints": [
      "The only first stopping square is row 2, column 2.",
      "Work backward from F and find its only possible previous square."
    ],
    "answer": "4 moves.",
    "why": "A shortest route is A → row 2 column 2 → row 1 column 3 → row 2 column 4 → F. In two moves the only possible meeting place is the blocked center. A three-move route would have to go from the only first stop (row 2, column 2) to the only last stop (row 2, column 4), which are not diagonal neighbors.",
    "figure": "p3v-diagonal.svg",
    "alt": "A and F are the top corners; B and E are bottom corners of a five-by-five board. Only the central cell is blocked.",
    "id": 241
  },
  {
    "title": "The kite caught in the scaffold",
    "kind": "Optical illusions",
    "level": "Easy",
    "intro": "At first the drawing looks like crossing scaffolding poles. Three rust-colored pins hold a shape whose entire border runs on existing poles.",
    "questions": [
      "What shape do the pins outline? How many of its corners sit on a pole that extends beyond that corner?"
    ],
    "hints": [
      "Connect the pins two at a time with your eye.",
      "Look past each pin; the long pole does not stop there."
    ],
    "answer": "A triangle. All three corners sit on poles extending past them.",
    "why": "The triangle shares its sides with much longer lines. Good continuation makes the long poles more conspicuous than the closed figure. The proof traces only the three sides between pins.",
    "figure": "p3o-lace.svg",
    "alt": "Three rust pins at (130,209), (242,58) and (379,209) lie on straight scaffold lines with extensions.",
    "reveal": "p3o-lace-proof.svg",
    "revealAlt": "A thick rust border follows the three existing lines between the pins.",
    "id": 242
  },
  {
    "title": "The quiet bell in the second booth",
    "level": "Medium",
    "intro": "Two matching suspended tuning forks sit on opposite sides of a narrow gap. A musician strikes the first and immediately damps it with a felt pad. A faint matching tone continues at the second fork. Damping the second stops it. An otherwise similar fork tuned to a different note stays quiet in the same test. The stands never touch.",
    "questions": [
      "How did the second fork acquire its motion, and which test distinguishes its tone from a lingering echo?"
    ],
    "hints": [
      "The matching pitches are evidence. Look for a repeated push delivered at just the right time.",
      "Consider what touching a fork would do to a reflected sound already traveling around the room."
    ],
    "answer": "Sound from the first drove the matching fork into vibration. Touching the second then silenced the remaining source.",
    "why": "Air pressure varies at the first fork’s frequency. Matching pushes add to the second fork’s vibration over many cycles. The mistuned fork responds much less. An ordinary room echo would not stop specifically when the second fork was damped.",
    "kind": "Lateral thinking",
    "id": 243
  },
  {
    "title": "The blue counter at the coatroom",
    "level": "Medium",
    "intro": "Exactly one third of the counters in a drawer are blue. A helper removes four blue counters and changes nothing else. Now exactly one quarter of the counters left are blue.",
    "questions": [
      "How many counters were originally in the drawer?"
    ],
    "hints": [
      "The number of nonblue counters stays fixed.",
      "Originally there were two nonblue counters for every blue. Afterwards there are three for every blue."
    ],
    "answer": "36 counters.",
    "why": "If there were b blue counters initially, there were 2b nonblue. Afterwards the same 2b equals 3(b − 4). This gives b = 12 and 36 total. Removing four leaves eight blue among 32.",
    "kind": "Logic",
    "id": 244
  },
  {
    "title": "The souvenir block’s hidden face",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "The left and right pictures show the same block after a turn. Its six faces have six different letters, A through F.",
    "questions": [
      "Which letter is opposite A?"
    ],
    "hints": [
      "A has only four edge neighbors.",
      "The two pictures expose four different faces alongside A."
    ],
    "answer": "F.",
    "why": "A touches B and C in the first picture and D and E in the second. F is the only remaining face and must sit across the block.",
    "figure": "p3v-dice.svg",
    "alt": "Two views of one cube. First shows A atop, B at left, C at right. Second shows A atop, D at left, E at right.",
    "id": 245
  },
  {
    "title": "The pickets that change partners",
    "kind": "Optical illusions",
    "level": "Easy",
    "intro": "A designer shaded eight identical upright strokes and asked the eye to pair them without drawing any connecting rails.",
    "questions": [
      "Which partner will stroke 3 most naturally acquire by proximity alone? Could rails force stroke 3 to pair with stroke 2 instead? Number from the left."
    ],
    "hints": [
      "Inspect the gap on each side of stroke 3.",
      "The proof shows what happens when endpoints are connected across the wider gaps."
    ],
    "answer": "By proximity, stroke 3 pairs with 4. Yes, connecting 2 and 3 can reverse the grouping.",
    "why": "The 3–4 gap is 32 units while the 2–3 gap is 71. The proof draws rails across the large gaps, showing how a physical connection competes with proximity.",
    "figure": "p3o-pillars.svg",
    "alt": "Strokes numbered 1 to 8 have x values 145,177,248,280,351,383,454,486.",
    "reveal": "p3o-pillars-proof.svg",
    "revealAlt": "The copper rails link the formerly separated strokes across the three wider gaps.",
    "id": 246
  },
  {
    "title": "Two prices for a smaller bouquet",
    "level": "Medium",
    "intro": "A florist advertises “yesterday 60; today 70” next to a ribbon reading “less to pay for exactly the same twelve tulips.” Yesterday’s tag went on full bundles of eight; today’s tag goes on full bundles of ten. The florist always charges for loose stems at the corresponding exact per-stem rate. Currency is in cents.",
    "questions": [
      "What do twelve stems cost on each day? Why could the ribbon and the two labels all be honest?"
    ],
    "hints": [
      "The unit that attracted the higher printed price also grew larger.",
      "First reduce both offers to the price of one stem."
    ],
    "answer": "Yesterday 90 cents; today 84 cents.",
    "why": "The old 60-cent bundle works out at 7½ cents per stem. The new 70-cent bundle works out at 7 cents per stem. Multiplying each by twelve makes the cheaper bouquet come from the higher-priced bundle.",
    "kind": "Lateral thinking",
    "id": 247
  },
  {
    "title": "The three visits to the print room",
    "level": "Hard",
    "intro": "Six artists each leave a proof in the print room for a span of whole hours: Alder 2–4, Bo 3–6, Cleo 5–7, Dov 7–8, Elin 9–12 and Fay 11–14. Both endpoints count. The curator can see all proofs present at a single hour and need not stay between visits.",
    "questions": [
      "What is the fewest visits that let her see all six proofs? Give an itinerary and prove it is shortest."
    ],
    "hints": [
      "A visit at an endpoint can count for a proof whose window begins or ends there.",
      "Find three artists whose windows share no hour with one another."
    ],
    "answer": "Three visits, for example at 4, 7 and 12.",
    "why": "Hour 4 covers Alder and Bo, hour 7 covers Cleo and Dov, and hour 12 covers Elin and Fay. Alder, Cleo and Elin occupy disjoint windows, so no pair of visits could reach all three.",
    "kind": "Logic",
    "id": 248
  },
  {
    "title": "Tokens on the star ferry",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "Five passengers sit clockwise around a star. On the bell, every passenger passes their token TWO seats clockwise. Nobody moves.",
    "questions": [
      "After seven bells, which starting token is at the north seat?"
    ],
    "hints": [
      "After five bells every token returns to its starting seat.",
      "Seven bells advance a token fourteen seats, equivalent to four clockwise."
    ],
    "answer": "The east-upper token B.",
    "why": "Four clockwise steps from B land on A’s north seat. Equivalently, track one seat counterclockwise for the inverse of four clockwise steps and start at B.",
    "figure": "p3v-tokens.svg",
    "alt": "Five seats in clockwise order A (north), B, C, D, E. All tokens move two seats clockwise per bell.",
    "id": 249
  },
  {
    "title": "The harbor view through the blinds",
    "kind": "Optical illusions",
    "level": "Easy",
    "intro": "Narrow slits break a colored picture into separate slices. The white interruptions are parts of a blind in front of the picture.",
    "questions": [
      "What single object do the surviving slices fit? Identify the three large colored parts."
    ],
    "hints": [
      "Follow the green baseline through the slits.",
      "The yellow and copper slices taper upward toward a central mast."
    ],
    "answer": "A sailboat with a green hull, a yellow sail and a copper sail.",
    "why": "The straight waterline and sloping sail edges continue from one slit to the next, so the fragments group into one familiar object. Raising the blind shows all three colored shapes.",
    "figure": "p3o-shutters.svg",
    "alt": "Narrow vertical openings show a long green tapered base and yellow and copper triangular fragments above it.",
    "reveal": "p3o-shutters-proof.svg",
    "revealAlt": "The blind is raised to reveal a complete two-sailed boat.",
    "id": 250
  },
  {
    "title": "The chalk stripe on the folding fan",
    "level": "Medium",
    "intro": "A restorer makes one pencil dot halfway out on each of a folding fan’s twelve evenly spaced sticks. With the fan open, the dots appear to form a smooth curved stripe across the paper. When she closes it and looks squarely at the front, she sees a single dot. She has neither erased nor transferred a mark. Each stick rotates about the same pivot.",
    "questions": [
      "Where have the eleven other marks gone, and why did all the dots need the same distance from the pivot?"
    ],
    "hints": [
      "Describe the open dots as points on one circle.",
      "Closing the fan changes each stick’s angle while preserving the length from the hinge."
    ],
    "answer": "The marks stack behind the front mark when the sticks align.",
    "why": "Their equal distances from the hinge put them on the same arc when open. Once the sticks share a direction, the marks coincide in front view. Unequal distances would leave some marks at different heights along the closed fan.",
    "kind": "Lateral thinking",
    "id": 251
  },
  {
    "title": "The three teeth at noon",
    "level": "Medium",
    "intro": "Three gears with 12, 18 and 15 teeth engage in a straight chain. Each has one tooth marked red. Through a clear cover you mark the starting position of each red tooth. A tooth-step means turning the first gear by exactly one tooth, which advances each meshing gear by one tooth around its own rim past a fixed point.",
    "questions": [
      "After how many positive tooth-steps will all three marks first be back at their starting positions? Which gears then have made a whole even number of turns?"
    ],
    "hints": [
      "Each gear needs a number of steps divisible by its tooth count.",
      "Use enough factors of 2, 3 and 5 to make all three counts divide the same number."
    ],
    "answer": "180 tooth-steps. The 18- and 15-tooth gears have made even numbers of turns.",
    "why": "The smallest common multiple of 12, 18 and 15 is 180. The turn counts are respectively 15, 10 and 12. The middle gear turns in the opposite direction, which does not affect returning to its mark.",
    "kind": "Logic",
    "id": 252
  },
  {
    "title": "One ribbon for two pennants",
    "kind": "Visual reasoning",
    "level": "Easy",
    "intro": "A rectangular pennant measures 10 by 6. One cut runs from the upper-left corner to the midpoint of the bottom edge. A second cut joins that midpoint to the upper-right corner.",
    "questions": [
      "What fraction of the rectangle belongs to the middle triangle, and what fraction to each corner scrap?"
    ],
    "hints": [
      "The middle triangle has the entire top edge for its base.",
      "All three triangles have the same height."
    ],
    "answer": "One half for the middle and one quarter for each side.",
    "why": "The middle triangle has area 10 × 6 ÷ 2 = 30. Each side triangle has a five-unit base and area 15, out of 60 in the full rectangle.",
    "figure": "p3v-pennant.svg",
    "alt": "A 10-by-6 rectangle with two cuts from its top corners to the midpoint of the bottom edge.",
    "id": 253
  },
  {
    "title": "The potter’s turning wreath",
    "kind": "Optical illusions",
    "level": "Medium",
    "intro": "A circle of triangular leaves can give the impression of a little wheel turning. Study their positions rather than their tips.",
    "questions": [
      "Do the leaf centers spiral toward the middle or lie on one circle? How many diametrically opposite pairs of centers are there?"
    ],
    "hints": [
      "Look at the radius to the center of a leaf, not to a corner.",
      "A partner half a turn away is eight leaves farther around."
    ],
    "answer": "One circle, with eight opposite pairs.",
    "why": "There are sixteen centers at equal angular steps of one sixteenth of a turn. Their radius stays fixed. Turning the triangular marks produces a directional bias without making a spiral.",
    "figure": "p3o-wreath.svg",
    "alt": "Sixteen green triangular leaves surround a common center, rotating their orientation successively.",
    "reveal": "p3o-wreath-proof.svg",
    "revealAlt": "One copper circle goes through all sixteen centers. A diameter connects an example pair.",
    "id": 254
  },
  {
    "title": "The clerk’s missing twenty-fourth second",
    "level": "Hard",
    "intro": "A film restorer logs an event at 00:10:18 and another at 00:12:06. Watching the last pair of digits carefully, she sees 00:10:23 followed immediately by 00:11:00. Every middle-unit change takes one real second. The last pair advances in uniform steps.",
    "questions": [
      "What does the last pair count, and how many steps lie between those two events?"
    ],
    "hints": [
      "Read the clock behavior before deciding how many units make the next place.",
      "Convert both readings to a total count of the smallest unit."
    ],
    "answer": "It counts frames, with 24 frames to a second. The events are 36 frame intervals apart.",
    "why": "A count from 00 through 23 has 24 positions. The readings are 10 × 24 + 18 = 258 and 12 × 24 + 6 = 294. Their difference of 36 frames spans one and a half seconds.",
    "kind": "Lateral thinking",
    "id": 255
  },
  {
    "title": "A gap in the numbered bunting",
    "level": "Medium",
    "intro": "At a festival, each number from 1 to 39 was printed on one pennant, without leading zeroes. One whole pennant blew away. The remaining display has one fewer printed 3 and one fewer printed 8 than the complete set.",
    "questions": [
      "Which pennant blew away? How many printed 3s are left?"
    ],
    "hints": [
      "Both missing digits must have been on the same pennant.",
      "Count the 3s in the tens and units positions separately."
    ],
    "answer": "Pennant 38. Thirteen printed 3s remain.",
    "why": "Only 38 contains both digits in the range 1–39. The full set has ten 3s in the tens position and four in the units position (3, 13, 23, 33). Losing the one in 38 leaves thirteen.",
    "kind": "Logic",
    "id": 256
  },
  {
    "title": "The picket painter’s shortcut",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "Eight lettered posts sit on a rectangular lattice. The fence crew needs one straight rail that passes through as many lettered posts as possible. Diagonal rails are permitted.",
    "questions": [
      "What is the maximum number of posts, and how many different lines achieve it?"
    ],
    "hints": [
      "Count the occupied rows.",
      "An oblique or vertical line meets each occupied row at most once."
    ],
    "answer": "Four posts. Exactly two lines do it.",
    "why": "The upper row and lower row each contain four collinear posts. Any line that is not horizontal crosses each of those rows only once, giving it at most two posts.",
    "figure": "p3v-fences.svg",
    "alt": "Row 1 reads A dot B dot C dot D; row 2 is empty; row 3 reads E dot F dot G dot H.",
    "id": 257
  },
  {
    "title": "The compositor’s mixed sorts",
    "kind": "Optical illusions",
    "level": "Easy",
    "intro": "At arm’s length the grid can look like one block of ink. The compositor used two different pieces of type throughout.",
    "questions": [
      "Read only the ROUND marks as ink. Which capital letter appears, and which feature distinguishes it from P?"
    ],
    "hints": [
      "Ignore the squares, even though their weight is similar.",
      "Trace the round marks at lower right; they make a diagonal leg."
    ],
    "answer": "R. The diagonal leg below the bowl distinguishes it from P.",
    "why": "Circles build the stem and bowl, then move one column right per row to build the leg. The proof fades the square distractors.",
    "figure": "p3o-ink.svg",
    "alt": "Five columns and seven rows of circles and squares. Circles by row: 1234; 15; 15; 1234; 13; 14; 15.",
    "reveal": "p3o-ink-proof.svg",
    "revealAlt": "Copper circles read as the capital R against pale square distractors.",
    "id": 258
  },
  {
    "title": "The duet in different ink",
    "level": "Medium",
    "intro": "A proofreader receives two parts for a duet. In one passage a written D in the blue part must sound as a C. In the green part a written C already sounds as C. During rehearsal the two players sound in unison throughout the passage. The green player reads C, D, E, in that order. On the blue instrument every written note sounds one whole tone lower. For this puzzle C to D, D to E and E to F-sharp are each whole tones.",
    "questions": [
      "What must be written in the blue part? Why would making the sheets look identical introduce an error?"
    ],
    "hints": [
      "Work from the sound that the audience should hear.",
      "For each sounding note, choose a written note a whole tone above it for the blue player."
    ],
    "answer": "D, E, F-sharp. The blue part is transposed for its instrument.",
    "why": "The blue instrument lowers each written note by a whole tone, producing C, D and E. Giving it the green part would lower all three intended notes instead of matching them.",
    "kind": "Lateral thinking",
    "id": 259
  },
  {
    "title": "The silver medalist’s reel",
    "level": "Hard",
    "intro": "Eight short films enter a fixed knockout bracket of three complete rounds. In each head-to-head screening the better film always wins, and no two are of equal quality. Seven screenings identify the best film. The organizer kept every result and now wants to identify the second-best overall with as few extra head-to-head screenings as possible.",
    "questions": [
      "How many extra screenings suffice in the worst case, and which films should enter them?"
    ],
    "hints": [
      "Anyone who lost to a film other than the champion has at least two films above them.",
      "How many different opponents did the champion personally eliminate?"
    ],
    "answer": "Two extra screenings. Compare the three opponents beaten directly by the champion.",
    "why": "The true runner-up could lose only to the champion. Those three eliminated opponents never met each other in the bracket. Each is still a possible runner-up, so one comparison cannot settle all three possibilities. Two comparisons find the best of the three.",
    "kind": "Logic",
    "id": 260
  },
  {
    "title": "A square inside the tablecloth",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "Joining the midpoints of a square tablecloth makes a diamond. Joining the diamond’s own side midpoints makes the smaller green square. The cloth measures 8 by 8.",
    "questions": [
      "How much cloth lies outside the green square but INSIDE the diamond?"
    ],
    "hints": [
      "A midpoint diamond occupies half the area of its parent square.",
      "Apply that halving a second time before subtracting."
    ],
    "answer": "16 square units.",
    "why": "The original cloth has area 64. Its midpoint diamond has area 32 and the smaller square has area 16. The four slivers between them total 16.",
    "figure": "p3v-fourth.svg",
    "alt": "An 8-by-8 square contains its midpoint diamond. A second square joins the diamond’s four side midpoints.",
    "id": 261
  },
  {
    "title": "One coast, two countries",
    "kind": "Optical illusions",
    "level": "Medium",
    "intro": "Two countries meet at one stepped frontier. A customs clerk counts only rectangular peninsulas that extend beyond the baseline into the other country.",
    "questions": [
      "How many peninsulas does the gold country have, and how many does the teal country have?"
    ],
    "hints": [
      "The straight portions near the left and right edges mark the baseline.",
      "A gold peninsula points upward, and a teal one points downward."
    ],
    "answer": "Gold has two; teal has one.",
    "why": "The left and right upward steps belong to gold. The single downward middle step belongs to teal. The same outline creates protrusions for one figure and bays for the other.",
    "figure": "p3o-coast.svg",
    "alt": "A horizontal frontier has an upward rectangular step, then a downward one, then another upward one. Teal is above and gold below.",
    "reveal": "p3o-coast-proof.svg",
    "revealAlt": "A copper baseline separates the two gold protrusions above it and the one teal protrusion below it.",
    "id": 262
  },
  {
    "title": "The advertisement with three skins",
    "level": "Easy",
    "intro": "An old sign alternates among an elephant, a violin and a sailing ship. From behind, a repairer turns one handle through a third of a turn and the entire picture changes. Through a gap you can see dozens of upright pieces. A spare piece on the bench has three long flat painted faces. Each face shows only a narrow sliver of a picture.",
    "questions": [
      "How does one handle choose an entire picture, and why must all the pieces turn together?"
    ],
    "hints": [
      "Think about the face of each spare piece that a person standing in front could see.",
      "Arrange many copies side by side with their elephant slivers pointing forward."
    ],
    "answer": "Each upright piece is a three-sided prism. One picture is assembled from the forward face of every prism.",
    "why": "Turning all the prisms together through a third-turn presents all the violin strips or all the ship strips. Turning one piece alone would replace just a narrow strip, leaving a visibly mixed picture.",
    "kind": "Lateral thinking",
    "id": 263
  },
  {
    "title": "Three jars and the restless beads",
    "level": "Hard",
    "intro": "Three jars begin with 2, 3 and 4 beads. On a move, take one bead from each of two different nonempty jars and put both beads into the third. An artist wants 3, 3 and 3. Another wants 1, 2 and 6, in that order.",
    "questions": [
      "Which arrangement can be reached? Find a property that rules out the other even after many moves."
    ],
    "hints": [
      "Subtract the second jar’s count from the first before and after a possible move.",
      "If the jars are both donors their difference stays fixed. If one receives, their difference changes by three."
    ],
    "answer": "1, 2, 6 is reached in one move. Three equal jars are impossible.",
    "why": "Donate from the first two into the third to reach the second target. At every move the first-minus-second difference changes by 0, 3 or −3. It starts at −1 and can never become zero, which equality would require.",
    "kind": "Logic",
    "id": 264
  },
  {
    "title": "The four arguing gulls",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "Four gulls refuse to share a row, column or diagonal. One has already perched in the top row. Three more must perch on the board.",
    "questions": [
      "Which columns do the three remaining gulls occupy, from row 2 downward?"
    ],
    "hints": [
      "The first gull rules out columns 1, 2 and 3 in row 2.",
      "After row 2, try the two unused columns in row 3."
    ],
    "answer": "D, A, C.",
    "why": "Row 2 must use D. The unused columns are A and C, but C in row 3 is diagonal to the gull on D. That places row 3 at A and row 4 at C.",
    "figure": "p3v-queens.svg",
    "alt": "Four rows and four columns A–D. A gull occupies B in the first row.",
    "id": 265
  },
  {
    "title": "The projectionist’s third slide",
    "kind": "Optical illusions",
    "level": "Medium",
    "intro": "The projectionist says two rectangular color slides overlap. The artist who painted this imitation used flat fields and deliberately gave the overlap its own tint.",
    "questions": [
      "How many differently colored rectangular intersection regions do the two slides share? Can their overlap tint alone prove which slide was placed first?"
    ],
    "hints": [
      "Trace the four straight edges that bound their common area.",
      "The artist chose a single fixed overlap color; it carries no information about the painting order."
    ],
    "answer": "One overlap region. Its tint cannot establish an order.",
    "why": "The slides share the region from x=267 to 337 and y=83 to 216. The muted patch supports an impression of transparency, but either putative slide order fits the same painted result.",
    "figure": "p3o-film.svg",
    "alt": "A teal rectangle lies upper left and a gold rectangle lower right. Their common area is filled with a third uniform olive tint.",
    "reveal": "p3o-film-proof.svg",
    "revealAlt": "A copper outline marks exactly one rectangular patch shared by both shapes.",
    "id": 266
  },
  {
    "title": "White marks from a polishing tool",
    "level": "Hard",
    "intro": "An artist starts with a metal plate covered in tiny pits. She smooths a white swan shape into it, rolls black ink over the whole plate, and wipes the flat surfaces clean. Damp paper pressed against the plate comes away showing a white swan on a dark field. No white ink was used.",
    "questions": [
      "What prints the dark field, and why did smoothing make the swan white?"
    ],
    "hints": [
      "Look for places ink can remain after a flat surface has been wiped.",
      "Which parts of the pressed paper receive very little ink?"
    ],
    "answer": "The pits retain black ink for the dark field. The polished swan holds little ink, leaving that part of the paper light.",
    "why": "Pressure makes the damp paper take up ink from the rough recesses. The smooth polished area wipes clean, so the swan takes its brightness from the paper itself.",
    "kind": "Lateral thinking",
    "id": 267
  },
  {
    "title": "Market day with no small change",
    "level": "Medium",
    "intro": "A fair exchanges exactly three mats for five hats, or exactly two hats for seven bells. Both exchanges may be run in either direction. No goods can be split. A performer begins with only mats and wants to finish with only bells.",
    "questions": [
      "What is the smallest positive number of starting mats that can be converted completely? How many bells result?"
    ],
    "hints": [
      "As values, one mat equals five thirds of a hat and one hat equals seven halves of a bell.",
      "Whatever trades are made must conserve the total value, including trades in reverse."
    ],
    "answer": "Six mats yield 35 bells.",
    "why": "A mat is worth 35/6 bells. Because 35 and 6 have no common divisor above one, a whole number of bells requires a multiple of six mats. Six convert to ten hats and then to 35 bells in five full hat exchanges.",
    "kind": "Logic",
    "id": 268
  },
  {
    "title": "The minute hand’s little shadow",
    "kind": "Visual reasoning",
    "level": "Easy",
    "intro": "At exactly 3:00, the minute hand stands upright and the hour hand points right. Imagine both hands jumping forward by a quarter turn, without any change in their separation.",
    "questions": [
      "Give both new directions. If it were an ordinary clock, why could it not show exactly that pair of directions?"
    ],
    "hints": [
      "Each hand rotates 90 degrees clockwise.",
      "A real hour hand creeps forward as the minute hand completes a quarter hour."
    ],
    "answer": "The minute hand points at 3 and the hour hand at 6.",
    "why": "At 6:15 an ordinary hour hand has already moved one quarter of the gap from 6 to 7. This clock face would keep the hour hand exactly at 6.",
    "figure": "p3v-clock.svg",
    "alt": "Clock at 3:00. Long green hand up; short red hand right.",
    "id": 269
  },
  {
    "title": "The prop master’s reversible window",
    "kind": "Optical illusions",
    "level": "Hard",
    "intro": "The theater needs a picture that can look like a rectangular window seen at an angle or a flat trapezoidal prop viewed head-on. There are no shadows or depth marks.",
    "questions": [
      "Which upright is taller ON THE PAGE? Can that measurement alone prove that the real window has unequal uprights?"
    ],
    "hints": [
      "Use the two top and two bottom endpoints.",
      "A drawing’s vertical extent is measurable even when the sizes of the scene objects are unknown."
    ],
    "answer": "The right upright is taller on the page. No conclusion about the physical uprights follows without knowing the projection or prop.",
    "why": "The drawing heights are 207 and 118 units. Perspective can make equally tall jambs project to different heights, while a flat prop can have those unequal heights physically. The picture alone fits both accounts.",
    "figure": "p3o-window.svg",
    "alt": "A window-shaped trapezoid has vertical edges: left from y=70 to 188 and right from y=29 to 236.",
    "reveal": "p3o-window-proof.svg",
    "revealAlt": "Two rulers mark the projected vertical heights of 118 and 207 drawing units.",
    "id": 270
  },
  {
    "title": "The lifting of the brass pear",
    "level": "Medium",
    "intro": "A brass pear rests in a little floating boat in a straight-sided tank. A hand transfers it gently into the water and lets it settle on the bottom. Nothing spills. When submerged, the pear takes up the space of 30 grams of water, although it weighs ninety grams. The waterline moves.",
    "questions": [
      "Which way does the waterline go, and by how much does the total displaced water volume change, in grams-of-water equivalent?"
    ],
    "hints": [
      "While it floats, the boat and its load displace their combined weight of water.",
      "Compare the pear’s contribution while it rides in the boat with its contribution resting on the tank floor."
    ],
    "answer": "The line falls. The occupied volume falls by the volume of 60 grams of water.",
    "why": "The loaded boat had to displace an extra 90 grams of water to support the pear. On the bottom the pear occupies only the volume of 30 grams of water. Unloading the boat removes more displacement than sinking the pear adds.",
    "kind": "Lateral thinking",
    "id": 271
  },
  {
    "title": "The loose sheet from a winter songbook",
    "level": "Hard",
    "intro": "A forty-page booklet is printed on ten sheets, folded once and nested inside one another. Pages are numbered 1 through 40 in normal reading order, including covers. The outer sheet has pages 40 and 1 on one face, and 2 and 39 on the other. An entire inner sheet falls loose. Page 17 is on it.",
    "questions": [
      "Which three other page numbers fall out with 17? Which one of them shares its face of the sheet?"
    ],
    "hints": [
      "Removing one outer sheet strips the two smallest remaining numbers and the two largest.",
      "Just before you reach 17, eight lower-numbered pairs have been removed."
    ],
    "answer": "18, 23 and 24. Pages 17 and 24 are on the upward face, 18 and 23 on the reverse.",
    "why": "The sheet containing 17 also carries its next page 18 on the reverse. The opposed numbers across the fold on a face sum to 41, so 17 faces across to 24 and 18 to 23. The four pages form one physical sheet.",
    "kind": "Logic",
    "id": 272
  },
  {
    "title": "The customs officer’s longest fence",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "Three districts share a tiled map. A frontier consists of unit edges where tiles with different letters touch. Ignore the boundary around the map.",
    "questions": [
      "Which district pair or pairs share the longest frontier? Give its length."
    ],
    "hints": [
      "Trace the edges of C first.",
      "Check only the right and lower neighbor of each tile to avoid double-counting."
    ],
    "answer": "B–C with 6 edges.",
    "why": "The frontier totals are A–B: 1, A–C: 5, B–C: 6.",
    "figure": "p3v-border.svg",
    "alt": "Four rows: AABBB, ACCCB, AACCB, AACBB.",
    "id": 273
  },
  {
    "title": "The paint clerk’s contrary labels",
    "kind": "Optical illusions",
    "level": "Easy",
    "intro": "The paint clerk says that some labels are printed in the very ink they name. Read in ordinary order, top left first. Use teal, rust, gold and dark ink as the four color names.",
    "questions": [
      "Which numbered labels match their own ink? Count them without saying the other labels aloud."
    ],
    "hints": [
      "Inspect ink color before reading the word.",
      "The labels are numbered 1–3 in the upper row and 4–6 in the lower row."
    ],
    "answer": "Three labels: 2, 5 and 6.",
    "why": "The rust word RUST, dark word INK and gold word GOLD match. Reading a familiar word can interfere with identifying its printing color, which is why the other three invite a quick error.",
    "figure": "p3o-engraver.svg",
    "alt": "The six word/ink pairs are GOLD in teal, RUST in rust, TEAL in gold, RUST in dark ink, INK in dark ink, GOLD in gold.",
    "reveal": "p3o-engraver-proof.svg",
    "revealAlt": "Boxes mark the three correct matches.",
    "id": 274
  },
  {
    "title": "The echo with two birthdays",
    "level": "Hard",
    "intro": "A handclap is recorded beside a straight wall on an empty field. The microphone stays beside the clapper. The original clap is followed by two softer copies 0.20 and 0.32 seconds later. There are exactly two broad reflecting walls, one in each direction along a straight lane, and these are the first direct echoes from the two walls. Sound travels 340 meters per second.",
    "questions": [
      "How far apart are the walls? Why would assigning 68 and 108.8 meters to the two wall distances give the wrong answer?"
    ],
    "hints": [
      "Each delay includes the outward and returning journeys.",
      "Find each one-way distance, then place the walls on opposite sides of the microphone."
    ],
    "answer": "88.4 meters apart.",
    "why": "The first echo traveled 68 meters in total and the second 108.8 meters. Halving gives distances of 34 and 54.4 meters to the walls. The clapper stands between them, so those distances add.",
    "kind": "Lateral thinking",
    "id": 275
  },
  {
    "title": "A border that balances its picture",
    "level": "Hard",
    "intro": "A rectangular mosaic is made of whole square tiles. Its border is precisely one tile wide all the way around, corners counted once. There are as many border tiles as interior tiles. Both side lengths exceed four. The curator recalls that neither side was longer than ten tiles.",
    "questions": [
      "What are the two side lengths? Give a way to exclude every other rectangle."
    ],
    "hints": [
      "If the outer dimensions are m and n, the interior contains (m − 2)(n − 2) tiles.",
      "Twice the interior equals the whole rectangle. Rearrange that equation into (m − 4)(n − 4) = 8."
    ],
    "answer": "6 by 8 tiles.",
    "why": "The positive factor pairs of 8 are 1 and 8, or 2 and 4. Restoring four to each side yields rectangles 5 by 12 and 6 by 8. Only 6 by 8 fits the limit. Its interior has 4 × 6 = 24 tiles, half its total.",
    "kind": "Logic",
    "id": 276
  },
  {
    "title": "Six shutters on the puppet booth",
    "kind": "Visual reasoning",
    "level": "Hard",
    "intro": "A stagehand can flip any adjacent pair of shutters in one move, changing each marked side to blank and each blank side to marked. Shutters are numbered 1 through 6 from left to right.",
    "questions": [
      "Change the top pattern into the bottom with the fewest moves. Which pairs flip?"
    ],
    "hints": [
      "The first shutter can only be changed by flipping 1–2.",
      "Once the first shutter matches, settle the next shutter from left to right."
    ],
    "answer": "Flip 1–2, 3–4 and 4–5, in any order.",
    "why": "Shutter 1 demands the first pair. After that, shutter 2 agrees. Shutter 3 demands 3–4, and shutter 4 then demands 4–5. The last two agree. Each forced pair must be used an odd number of times, so three is minimal.",
    "figure": "p3v-shutters.svg",
    "alt": "Marked sides listed as 1: start 100101, target 011111.",
    "id": 277
  },
  {
    "title": "The harp with a curved string",
    "kind": "Optical illusions",
    "level": "Medium",
    "intro": "At the string-art stall, a fan of threads seems to enclose one smoothly curving edge. The maker tied each thread taut between two fixed pegs.",
    "questions": [
      "How many threads actually bend to follow the curve? Explain why a curved boundary can appear."
    ],
    "hints": [
      "Choose any pair of endpoints that belong to one thread.",
      "Follow just that strand all the way from peg to peg."
    ],
    "answer": "None of them bend.",
    "why": "Each taut strand is straight. Each touches a different part of an apparent envelope. Looking across short pieces of successive strands creates the contour of a curve. One whole straight strand is highlighted in the proof.",
    "figure": "p3o-threadcurve.svg",
    "alt": "Straight strings join successive pegs on a horizontal row to successive pegs on a vertical row. Their slopes vary from steep to shallow.",
    "reveal": "p3o-threadcurve-proof.svg",
    "revealAlt": "One complete strand between its two pegs is highlighted in copper.",
    "id": 278
  },
  {
    "title": "The drummer’s three-finger glove",
    "level": "Medium",
    "intro": "Behind a screen someone taps a rhythm on a tabletop. The investigator sees three separate fingertip marks in soft chalk. The performer says she used only one finger and never moved it sideways. On a second run the marks appear in the same order but farther apart when an assistant pulls a strip faster. The three finger marks are identical down to a little nick.",
    "questions": [
      "What moved between taps? How can the assistant affect the spacing without affecting the tempo?"
    ],
    "hints": [
      "A mark records relative position between the fingertip and the surface.",
      "The fingertip can return to the same place in the room each time while meeting new material."
    ],
    "answer": "The assistant drew a chalk-coated strip under the tapping finger.",
    "why": "Successive parts of the strip passed the stationary tapping position. Pulling faster carries the previous impression farther away between taps, increasing distance on the strip while preserving the musical interval.",
    "kind": "Lateral thinking",
    "id": 279
  },
  {
    "title": "The encore with too many voices",
    "level": "Easy",
    "intro": "Seven short numbers make up an encore. Each is a solo, a duet or a trio. Counting one appearance for each singer in each number, the stage manager records twelve appearances in all. There are three times as many duets as trios.",
    "questions": [
      "How many numbers of each kind were performed?"
    ],
    "hints": [
      "Giving each number one singer accounts for seven of the twelve appearances.",
      "A duet then needs one extra singer and a trio two extra singers. One trio plus its three matching duets uses five extras."
    ],
    "answer": "Three solos, three duets and one trio.",
    "why": "There are five extra appearances to distribute above the one-singer baseline. If t is the number of trios, the duets contribute 3t extras and the trios 2t extras. Thus t = 1. The remaining three numbers are solos.",
    "kind": "Logic",
    "id": 280
  },
  {
    "title": "A corner visits the lily pond",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "A square sheet has side 12. Fold its upper-right corner onto the center. The crease meets the top and right edges.",
    "questions": [
      "How much area is in the triangular flap above the crease before folding?"
    ],
    "hints": [
      "Every crease point is equally far from the corner and the center.",
      "The top-edge midpoint is six units from both points. Try the right-edge midpoint too."
    ],
    "answer": "18 square units.",
    "why": "The crease follows the perpendicular bisector between the corner and the center. It joins the two side midpoints adjoining the corner. The flap is a right triangle with legs 6 and 6.",
    "figure": "p3v-lilypad.svg",
    "alt": "Square side 12, with an arrow from the upper-right corner to the square’s center.",
    "id": 281
  },
  {
    "title": "The watercolor that never reached the middle",
    "kind": "Optical illusions",
    "level": "Medium",
    "intro": "A double-colored outline surrounds a pale shape. A warm wash may seem to reach into the enclosed space. The paper is flat and untextured.",
    "questions": [
      "Compare the broad center with the background far outside the outline. Where did the printer actually lay orange ink?"
    ],
    "hints": [
      "Look for the narrow orange stroke beside the purple.",
      "The proof places a paper-colored bridge across the outline. Check where the bridge disappears."
    ],
    "answer": "Only on the narrow orange contour. The broad center and outer background use the same paper color.",
    "why": "The proof erases a little of the double outline with a strip of background color. Its ends merge both inside and outside. Color at a boundary can suggest a faint tint spreading into the enclosed region.",
    "figure": "p3o-wash.svg",
    "alt": "An irregular closed double contour has a purple band and a narrower orange stroke; its center contains no texture.",
    "reveal": "p3o-wash-proof.svg",
    "revealAlt": "A paper-colored bridge cuts through the double outline and blends into both broad areas.",
    "id": 282
  },
  {
    "title": "The archivist’s youthful face",
    "level": "Medium",
    "intro": "A child standing beside a sapling made a mark on the trunk level with her chin. Years later she stands on the same paving stone. The old mark is now below her shoulder. A newer branch is far above the site of the original treetop. The ground has stayed level. In this species height gain occurs at growing shoot tips; older trunk chiefly thickens.",
    "questions": [
      "How could the tree gain several meters while the old mark stayed near its original height?"
    ],
    "hints": [
      "Which part supplied the tree’s extra height?",
      "Imagine adding lengths of tubing to the top of a fixed post. Would a mark near its base travel upward?"
    ],
    "answer": "The shoots above the mark elongated while the child grew taller from the ground.",
    "why": "Most new height was added beyond the older trunk section. That section could widen without carrying its mark upward by anything like the growth at the tips. The child’s shoulder eventually rose past the old chin level.",
    "kind": "Lateral thinking",
    "id": 283
  },
  {
    "title": "The product on the peppermint wrapper",
    "level": "Medium",
    "intro": "A stall rolls two ordinary fair dice and prints their product on the wrapper. A special product lies strictly between 9 and 15, is divisible by 4, and can be made using either of two different unordered pairs of faces.",
    "questions": [
      "Which product is special? What is its chance on one roll of both dice?"
    ],
    "hints": [
      "Find the multiple of four first, then list factor pairs that fit on dice.",
      "Swapping unequal die faces supplies another ordered outcome."
    ],
    "answer": "12, with probability 1/9.",
    "why": "Only 12 is a multiple of four between 9 and 15. The valid pairs are 2 × 6 and 3 × 4. Their reverses give four ordered outcomes out of the 36 equally likely results.",
    "kind": "Logic",
    "id": 284
  },
  {
    "title": "The fairground’s indispensable kiosk",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "Paths connect the seven kiosks. The council will close one kiosk and every path meeting it, leaving all other paths in place.",
    "questions": [
      "Which single closure would split the remaining fairground into two disconnected groups?"
    ],
    "hints": [
      "A kiosk with several entrances may still have a route around it.",
      "Look for a crossing between the left and right halves that cannot be bypassed."
    ],
    "answer": "Kiosk D.",
    "why": "Every path from A, B or C to E, F or G goes through D. Closing D leaves two connected trios. Closing any other single kiosk leaves its neighbors connected by an alternate route.",
    "figure": "p3v-junction.svg",
    "alt": "Paths AB, BC, CA, BD, CD, DE, DF, EF, EG, FG. No other connections.",
    "id": 285
  },
  {
    "title": "The jeweler counts the empty centers",
    "kind": "Optical illusions",
    "level": "Easy",
    "intro": "The apprentice calls every round patch in the tray a bead. The jeweler counts green pieces, while the apprentice counts enclosed spots of bare paper.",
    "questions": [
      "How many green pieces are there, how many enclosed bare-paper spots, and why do their counts differ?"
    ],
    "hints": [
      "Treat each green ring as one piece.",
      "The central piece is the only one with no hole."
    ],
    "answer": "Eight green pieces and seven enclosed bare-paper spots.",
    "why": "Seven annular pieces each enclose one bare center. The eighth piece is a solid disc. Bare paper spreading around the entire group is outside, not an enclosed hole.",
    "figure": "p3o-holes.svg",
    "alt": "Seven separate hollow green rings surround one solid green disc.",
    "reveal": "p3o-holes-proof.svg",
    "revealAlt": "The seven empty centers are numbered; a white dot identifies the separate solid piece in the middle.",
    "id": 286
  },
  {
    "title": "The subtraction that fills a room",
    "level": "Medium",
    "intro": "At a print auction the catalog describes an image as “twelve rooms around one courtyard.” A guest sees only a square board with twelve separate large wooden blocks on its surface. No marks are painted between them. On a raised rubbing in black, a network of white corridors appears. A second rubbing made after removing one block joins two white regions. Assume only raised surfaces receive the black rubbing.",
    "questions": [
      "How can removing something add a visible connection? Which features in the rubbing stand for floor one can walk on?"
    ],
    "hints": [
      "Choose what the black impression represents: the open gaps or the wooden tops.",
      "Follow the region where the paper received no black at all."
    ],
    "answer": "The white gaps represent walkable space. Removing a block creates a new white opening between old gaps.",
    "why": "Black marks correspond to the solid tops that contact the rubbing paper. Space between those tops stays white. Removing a block keeps its former area white as well, so that area can act as a corridor linking two regions.",
    "kind": "Lateral thinking",
    "id": 287
  },
  {
    "title": "Which coupon reached the till first?",
    "level": "Medium",
    "intro": "The museum shop applies a twenty-percent discount and a five-dollar voucher to one ticket. The price is high enough for both discounts in either order. After both, one possible checkout total is $31 and the other is $32. The clerk always uses the same original price and never rounds.",
    "questions": [
      "What was the original price? Which discount was applied first for the $31 total?"
    ],
    "hints": [
      "A percentage discount shrinks every dollar still on the ticket when it is applied.",
      "If the percentage comes first, the full five dollars can then be removed."
    ],
    "answer": "The ticket cost $45. The twenty-percent discount came first for the $31 total.",
    "why": "Twenty percent off $45 gives $36, then the voucher makes $31. If the voucher goes first, 80 percent of the remaining $40 is $32. Applying the percentage last reduces the voucher’s eventual saving to $4.",
    "kind": "Logic",
    "id": 288
  },
  {
    "title": "Two skaters on opposite edges",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "The rink is 8 units long and 6 wide. One skater starts at the lower-left corner, the other at the upper-right. Both follow the rink edge clockwise at one unit per second, starting together.",
    "questions": [
      "After five seconds, how far apart are they in a straight line?"
    ],
    "hints": [
      "From the lower-left corner, clockwise travel goes up the left side.",
      "At five seconds the skaters are horizontally eight units apart. Find their vertical separation."
    ],
    "answer": "√80 units, about 8.94.",
    "why": "The left skater is five units above the bottom. The right skater is one above the bottom. Their separation has horizontal leg 8 and vertical leg 4, giving √(64 + 16).",
    "figure": "p3v-lanes.svg",
    "alt": "Rectangle width 8, height 6. Green starts bottom left and goes up. Red starts top right and goes down.",
    "id": 289
  },
  {
    "title": "The kingfisher sentries",
    "kind": "Optical illusions",
    "level": "Easy",
    "intro": "A pair of paper birds stands guard. One is said to be a simple copy shifted across the page. Another observer claims it was reflected. Their long backs can draw attention away from their tiny beaks.",
    "questions": [
      "Which transformation matches them: horizontal shift, half turn or reflection in a vertical line? How can you distinguish all three?"
    ],
    "hints": [
      "The birds face each other. A plain slide cannot reverse that.",
      "Check the eye height and the fact that the backs remain above the bellies."
    ],
    "answer": "A reflection in a vertical line.",
    "why": "A shift preserves the facing direction; a half turn would invert the head and body. The birds face each other while keeping the same upright orientation. The guide in the proof locates the mirror axis.",
    "figure": "p3o-sentries.svg",
    "alt": "Two dark upright bird silhouettes face one another. Their eye heights and backs match.",
    "reveal": "p3o-sentries-proof.svg",
    "revealAlt": "A vertical mirror axis bisects the distance between matching eye positions.",
    "id": 290
  },
  {
    "title": "The hoop that slipped the rail",
    "level": "Medium",
    "intro": "A straight rail is sealed into a solid wall at both ends. A metal “hoop” about the size of a coin hangs on it. Keeping the rail fixed, the demonstrator winds the hoop off into her hand without tools or damage. Viewed face-on the hoop looks like a closed circle. Seen edge-on, its wire runs around the rail a little more than twice, and two distinct wire ends can be felt.",
    "questions": [
      "Describe the hoop and the motion. What observation rules out an ordinary welded ring?"
    ],
    "hints": [
      "Follow one wire end rather than tracing the circular silhouette.",
      "Think about putting a new key onto a key ring."
    ],
    "answer": "It is a split ring: a spiral of overlapping wire. Feed the rail between the overlapping ends and wind the ring around until it comes free.",
    "why": "The rail stays put while the spiral runs past it, turn by turn. A welded single loop has no free wire end to begin the transfer. The side view and two ends distinguish the mechanisms.",
    "kind": "Lateral thinking",
    "id": 291
  },
  {
    "title": "The warm seat between the poets",
    "level": "Medium",
    "intro": "Five performers hold a straight row of seats, facing the audience. From the audience’s left to its right, Jo sits exactly two places before Fay. Ada sits immediately before Luz. Kit has neither end seat. Ada is somewhere before Jo.",
    "questions": [
      "List the five from left to right. Which performer sits directly between Jo and Fay?"
    ],
    "hints": [
      "Ada and Luz must both be before Jo. They cannot overlap the seat reserved for Jo.",
      "Jo cannot be later than third if Fay must be two seats after Jo."
    ],
    "answer": "Ada, Luz, Jo, Kit, Fay. Kit is between Jo and Fay.",
    "why": "Ada’s adjacent pair requires two seats before Jo, and Fay requires two positions after Jo. Jo is therefore third. The pair occupies seats one and two, Fay occupies five and Kit gets four.",
    "kind": "Logic",
    "id": 292
  },
  {
    "title": "Four peeps through the theater curtain",
    "kind": "Visual reasoning",
    "level": "Easy",
    "intro": "A painted sign behind a slit moves one letter left between sightings. Each view shows three consecutive letters. The views are in time order.",
    "questions": [
      "What six-letter word slid past the curtain?"
    ],
    "hints": [
      "Most letters in one view appear again in the next.",
      "Keep the first view and append only the new letter at the right of each later view."
    ],
    "answer": "PARADE.",
    "why": "PAR overlaps ARA on AR; the next windows start with RA and AD. The successive new letters are A, D and E, extending PAR into PARADE.",
    "figure": "p3v-peep.svg",
    "alt": "Four successive three-letter windows: PAR, ARA, RAD, ADE.",
    "id": 293
  },
  {
    "title": "The snowman made of one shadow",
    "kind": "Optical illusions",
    "level": "Medium",
    "intro": "Two equal opaque discs of the same dark teal sit partly in front of one another. Their seam disappears where the colors meet. The twin-lobed silhouette is all that remains.",
    "questions": [
      "Can the silhouette tell you which disc is in front? What happens to the outer contour if their stacking order is reversed without moving their centers?"
    ],
    "hints": [
      "Try imagining the right circle printed first.",
      "Look for a visible T-junction or a differently colored rim inside the united shape."
    ],
    "answer": "Either disc can be in front. The outer contour stays exactly the same.",
    "why": "Both discs use identical opaque ink. The visible shape is their combined footprint, which is independent of painting order. The added rims trace the hidden boundaries.",
    "figure": "p3o-snowman.svg",
    "alt": "Two overlapping identical dark teal discs have no visible seam in their overlap.",
    "reveal": "p3o-snowman-proof.svg",
    "revealAlt": "Two differently colored circular outline guides pick out the hidden separate disc boundaries.",
    "id": 294
  },
  {
    "title": "The bubble in the ferry window",
    "level": "Medium",
    "intro": "A child levels a clear horizontal tube containing liquid and one air bubble. A small central hump in the tube keeps the bubble at the highest point. She raises the left end enough that it becomes higher than the right, then waits. The bubble goes left while a loose dense bead in an identical tube rolls right. Neither tube has a moving divider.",
    "questions": [
      "Why can both movements be responses to gravity? Predict the effect of raising the right end instead."
    ],
    "hints": [
      "The bubble is a pocket of less dense material surrounded by heavier liquid.",
      "Think about where the liquid can go as the bubble changes places with it."
    ],
    "answer": "Dense liquid moves toward the low end and the bubble occupies the high end. The bead settles low.",
    "why": "The exchange lowers the heavier material overall. Raising the opposite end reverses the tilt and switches the ends sought by the bubble and bead, provided the tilt is enough to overcome the small central hump.",
    "kind": "Lateral thinking",
    "id": 295
  },
  {
    "title": "The lamp code with one bad bulb",
    "level": "Medium",
    "intro": "Each delivery cart carries a strip of six bulbs (1 lit, 0 dark). Each cart has its own assigned pattern. At inspection exactly one bulb on the arriving cart shows the opposite of its assigned state. The strip reads 100100 from left to right.",
    "questions": [
      "Which cart has arrived? Which bulb failed, and was it supposed to be lit?"
    ],
    "hints": [
      "Count differing positions between the observed strip and each catalog row.",
      "A candidate must differ in exactly one position, even if some other row looks similar."
    ],
    "answer": "Eel cart. Bulb five should be lit.",
    "why": "Eel’s assigned 100110 differs only in position five. Owl differs in two positions, Bee in three and Fox in more than one. The single-fault rule singles out Eel.",
    "tables": [
      [
        "Cart patterns",
        [
          "Cart",
          "Pattern"
        ],
        [
          [
            "Owl",
            "000000"
          ],
          [
            "Bee",
            "111000"
          ],
          [
            "Eel",
            "100110"
          ],
          [
            "Fox",
            "011101"
          ]
        ]
      ]
    ],
    "kind": "Logic",
    "id": 296
  },
  {
    "title": "The baker’s L-shaped counter",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "A baker trims a counter made of unit squares with paper ribbon. An assistant says cutting a rectangular notch out of the upper-right corner must reduce the ribbon she needs.",
    "questions": [
      "Is the assistant right for this counter? Give the perimeter of the counter and of the original rectangle."
    ],
    "hints": [
      "The original rectangle is three units wide and four high.",
      "Compare the outer edges removed by the notch with the new edges inside it."
    ],
    "answer": "Both perimeters are 14 units.",
    "why": "The 2-by-2 corner notch removes 2 units of top and 2 of right-hand edge. Its two new inside edges add those same four units. The intact 3-by-4 rectangle has perimeter 2 × (3 + 4) = 14.",
    "figure": "p3v-bakery.svg",
    "alt": "A three-column, four-row rectangle. Only the left cell is green in each of the top two rows; all three are green in each bottom row.",
    "id": 297
  },
  {
    "title": "The conjurer’s three black cords",
    "kind": "Optical illusions",
    "level": "Hard",
    "intro": "The conjurer drew three smooth black cords. They cross but never join. At an intersection keep following the smooth direction you arrived on.",
    "questions": [
      "Which numbered tip belongs to cord A? Which tip belongs to B?"
    ],
    "hints": [
      "Start at the leftmost A. Its first bend heads down and right.",
      "A reaches the lowest lane briefly, then climbs back up."
    ],
    "answer": "A reaches 1. B reaches 3.",
    "why": "A travels through upper, middle, middle, lower, lower, middle and upper lanes. B ends in the lower lane, leaving C at tip 2. A is picked out in copper in the reveal.",
    "figure": "p3o-serpents.svg",
    "alt": "Three black curves connect A, B and C on the left to tips 1, 2 and 3. Smooth continuations are preserved at crossings.",
    "reveal": "p3o-serpents-proof.svg",
    "revealAlt": "Cord A is highlighted in copper from its upper-left start to tip 1 at upper right.",
    "id": 298
  },
  {
    "title": "The book that grew in the bath",
    "level": "Hard",
    "intro": "A binder cuts two identical strips from one sheet of paper, one along its length and one across. Each dry strip is 100 units long. After both absorb the same damp air, the first measures 101 and the second 104. They dry back to 100. The sheet was made with most long fibers aligned in one direction. Each individual fiber swells much more across its width than along its length.",
    "questions": [
      "Which strip ran mainly along the fibers? Which way should a replacement strip be cut to match its modest expansion?"
    ],
    "hints": [
      "Both strips are made of the same material. Their directions differ.",
      "A measurement along the fiber axes builds up changes in length, while a crosswise measurement builds up changes in width."
    ],
    "answer": "The 101-unit strip ran along the fibers. Cut its replacement parallel to the same grain.",
    "why": "Greater swelling across each fiber produces the sheet’s larger cross-grain expansion. The smaller reversible change identifies the lengthwise direction, so matching grain helps the new strip move with the old one.",
    "kind": "Lateral thinking",
    "id": 299
  },
  {
    "title": "The shutters on the last cabinet",
    "level": "Hard",
    "intro": "Five shutters stand in a straight row labeled A through E. Exactly two are open. A tally for shutters A, C and E reports one open. A tally for B, D and E also reports one open. A third tally for just A and B reports one open. At least one closed shutter lies between the two open ones.",
    "questions": [
      "Which shutters are open? Explain why E can be ruled out before using the third tally."
    ],
    "hints": [
      "Add the first two tallies. Every shutter is counted once except E, which is counted twice.",
      "With E closed, select one from A/C and one from B/D. The third tally eliminates two combinations."
    ],
    "answer": "A and D are open.",
    "why": "The first tallies sum to two, already the exact open count, so the doubly counted E is closed. The first two rules now allow AB, AD, CB or CD. Exactly one open among A and B leaves AD or CB. C and B are adjacent, while A and D have closed shutters between them.",
    "kind": "Logic",
    "id": 300,
    "figure": "p3l-finalcabinet.svg",
    "alt": "Five cabinet positions A through E appear with question marks. Three plaques record one open shutter in each group: A/C/E, B/D/E and A/B.",
    "reveal": "p3l-finalcabinet-proof.svg",
    "revealAlt": "Shutters A and D reveal brass stars. Each of the three groups contains exactly one open shutter, and B and C separate the two open positions."
  },
  {
    "title": "The ticket roller’s two dials",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "Each impression comes from two connected dials. The arrow turns a quarter-turn clockwise each time, while the letter cycles A, B, C. The strip shows impressions 1 to 6.",
    "questions": [
      "At which later impression does the very first arrow-and-letter pair return for the first time?"
    ],
    "hints": [
      "Look for the returns of A first.",
      "Only some of the A impressions also have an upward arrow."
    ],
    "answer": "Impression 13.",
    "why": "The arrow returns after 4 steps and the letter after 3. Their first joint return is after 12 steps, which moves impression 1 to impression 13.",
    "figure": "p4v-wheelmark.svg",
    "alt": "Six upright ticket frames show up A, right B, down C, left A, up B, right C.",
    "id": 301
  },
  {
    "title": "The lounge sign hung upside down",
    "kind": "Optical illusions",
    "level": "Medium",
    "intro": "A caretaker gave this geometric word sign a half-turn in its own plane. The N is built from two upright strokes and a diagonal. The O is symmetric.",
    "questions": [
      "What word will the turned sign read, and which two changes are responsible?"
    ],
    "hints": [
      "A half-turn moves each letter to the opposite end.",
      "Inspect what a half-turn does to each individual N and O."
    ],
    "answer": "It still reads NOON.",
    "why": "Each glyph maps onto itself under a half-turn. The order reverses as well, but reversing NOON also gives NOON. Both the letter shapes and their arrangement are needed.",
    "figure": "p4o-noon.svg",
    "alt": "Four block letters read N O O N, with symmetric rectangular O shapes and diagonal-stroke N shapes.",
    "reveal": "p4o-noon-proof.svg",
    "revealAlt": "The rotated geometry still spells NOON; an arc indicates the half-turn.",
    "id": 302
  },
  {
    "title": "The label on the traveling puddle",
    "level": "Easy",
    "intro": "A museum puddle is a flat blue shape on the floor. From the striped mat by the door it reads POND in neat upright letters. Walk around to the side and the letters stretch into unrecognizable streaks. Each streak is painted straight onto the floor, and visitors have no special glasses.",
    "questions": [
      "Why has the artist put the striped mat at precisely that spot? How should the far ends of the letters look from directly overhead?"
    ],
    "hints": [
      "Compare how long a floor tile looks from the mat and from a ladder.",
      "From a low, slanting viewpoint, distances running away from you are strongly compressed."
    ],
    "answer": "The mat identifies the intended viewpoint. The letters extend far back across the floor and spread wider at their far ends.",
    "why": "The artist traced the rays from one eye position through the outline of each desired letter onto the floor. Farther portions must be larger to subtend the same angle. From the mat, perspective undoes the stretching; from overhead, the drawing shows its long, flared shape.",
    "kind": "Lateral thinking",
    "id": 303
  },
  {
    "title": "The picture dealer’s drying racks",
    "level": "Medium",
    "intro": "Six freshly numbered prints arrive in the order 2, 6, 3, 5, 1, 4. The dealer sends each directly to a drying rack. Within any one rack, the numbers must increase in arrival order. No rack may be rearranged.",
    "questions": [
      "How few racks can she use? Show how to fill them and explain why one fewer cannot work."
    ],
    "hints": [
      "Look for three prints arriving in strictly decreasing numerical order.",
      "A decreasing trio must occupy three different racks, even if other prints arrive between them."
    ],
    "answer": "Three racks. One arrangement is 2–3–5, 6, and 1–4.",
    "why": "The displayed allocation respects the arrival order on every rack. The subsequence 6, 3, 1 occurs in that order and decreases at every step, so no two of those prints can share a rack.",
    "kind": "Logic",
    "id": 304
  },
  {
    "title": "The seven-cell tea strainer",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "The tinsmith outlines a flower of seven regular hexagons. Wherever cells touch, they use one common brass strip. All internal and external edges must be present.",
    "questions": [
      "How many strips does the tinsmith cut?"
    ],
    "hints": [
      "Counting six per cell charges twice for any border inside the flower.",
      "Look separately at borders touching the dark center and borders between its neighbors."
    ],
    "answer": "30 strips.",
    "why": "Seven cells give 42 edge appearances. The center shares six borders. The six outer cells make six further shared borders around the ring. Subtract one duplicate for each of those 12 borders: 42 − 12 = 30.",
    "figure": "p4v-honeyframe.svg",
    "alt": "One central hexagon surrounded by six identical hexagons; adjacent outer cells touch along full edges.",
    "id": 305
  },
  {
    "title": "The balloon seller’s imaginary shelf",
    "kind": "Optical illusions",
    "level": "Easy",
    "intro": "The two teal balloons have different diameters; the red knots are tied on afterward. The larger balloon’s center is also higher.",
    "questions": [
      "If a level shelf rose from below, which teal balloon skin would it touch first? Ignore knots and strings."
    ],
    "hints": [
      "Compare the bottoms of the teal disks, rather than their centers.",
      "Imagine one horizontal guide tangent to the left disk from below."
    ],
    "answer": "It would touch both at once.",
    "why": "The smaller center is 36 drawing units above the guide; the larger is 54 units above. Each distance equals that disk’s radius, so their bottom points share one horizontal line.",
    "figure": "p4o-float.svg",
    "alt": "Two balloons of different sizes float beside each other, with the larger center higher and knots attached below.",
    "reveal": "p4o-float-proof.svg",
    "revealAlt": "One copper horizontal guide touches both teal disks at their lowest point.",
    "id": 306
  },
  {
    "title": "A staircase for a snail",
    "level": "Medium",
    "intro": "On a flat roll of wallpaper, one red line runs diagonally from edge to edge. The shopkeeper wraps the entire rectangular sheet once around a cylindrical drum, with its two vertical edges touching. The ends of the red line arrive at the seam, one exactly 6 cm higher than the other. A snail follows the line from its lower end.",
    "questions": [
      "How many times does the snail go around the drum? Does it return to its starting point on reaching the seam?"
    ],
    "hints": [
      "The touching edges were one sheet-width apart before wrapping.",
      "A complete turn restores the snail’s compass direction but need not restore its height."
    ],
    "answer": "One complete turn. The snail arrives at the seam 6 cm above its start.",
    "why": "The diagonal crossed the full width of a sheet that makes exactly one wrap. Around the drum that width is a circumference. The diagonal’s rise survives the wrapping and turns the line into one turn of a helix.",
    "kind": "Lateral thinking",
    "id": 307
  },
  {
    "title": "Two gold knots in the cord",
    "level": "Easy",
    "intro": "A craft bag contains two gold knots and three black knots. They are drawn at random and fastened in a straight line in draw order. Each pair of positions is equally likely to receive the two gold knots.",
    "questions": [
      "What is the probability that exactly one black knot separates the gold ones?"
    ],
    "hints": [
      "Number the five positions and consider only the two occupied by gold.",
      "For the desired gap the second position number must exceed the first by two."
    ],
    "answer": "Three tenths.",
    "why": "There are ten unordered pairs of positions. The favorable ones are (1,3), (2,4) and (3,5); the position between either pair must be black.",
    "kind": "Logic",
    "id": 308
  },
  {
    "title": "The enamel worker’s double glaze",
    "kind": "Visual reasoning",
    "level": "Easy",
    "intro": "Both square masks fit the same nine-cell tile, exactly as shown. A cell covered by one colored patch becomes blue. A cell covered by both turns clear, just like an uncovered cell.",
    "questions": [
      "Which row has all three cells blue? How many blue cells are there in total?"
    ],
    "hints": [
      "Compare corresponding positions, one row at a time.",
      "The center patches cancel one another."
    ],
    "answer": "No row has three. Six cells are blue.",
    "why": "The top row has blue at left and right. The middle row has blue at left and right, since the center cancels. The bottom row has blue at center and right. That is two blue in each row.",
    "figure": "p4v-enamel.svg",
    "alt": "First mask occupies top left, middle left and center, bottom right. Second occupies top right, middle center and right, bottom center.",
    "id": 309
  },
  {
    "title": "A tent behind the parcel label",
    "kind": "Optical illusions",
    "level": "Medium",
    "intro": "Only two rising green strokes show beside the opaque label. A child says they must meet at a single sharp peak underneath. The artist was free to draw any continuous line under the label.",
    "questions": [
      "Does the visible picture force a sharp, two-sided peak? Give a different hidden path that would produce the very same view."
    ],
    "hints": [
      "Which part did you actually see?",
      "Try joining the left and right ends with a short horizontal segment or an extra bend."
    ],
    "answer": "No. A plateau or a roof with extra bends also fits.",
    "why": "The ends facing the label can be joined by many continuous curves or polylines. Any differences lying entirely behind the label disappear in the original view. The reveal shows one alternative with an extra bend on each side.",
    "figure": "p4o-archway.svg",
    "alt": "A large paper label covers the center of a panel. A thick diagonal stroke climbs toward it on each side.",
    "reveal": "p4o-archway-proof.svg",
    "revealAlt": "With the label removed, the exposed sections are connected by a shallow central roof with two additional bends.",
    "id": 310
  },
  {
    "title": "The last clap on the disc",
    "level": "Medium",
    "intro": "An editor plays two recordings at once. Through the left speaker alone a single sharp handclap is clear. Through the right speaker alone the same clap is clear. Her equipment adds the two recorded waveforms before sending them to one speaker. With both tracks selected, just that clap vanishes. At every instant during the clap the two recorded signals have equal size; the editor changed the sign of every sample on one track.",
    "questions": [
      "Why does the clap vanish in the combined track, and what would doubling just the left track produce?"
    ],
    "hints": [
      "A speaker can move its cone both forward and backward.",
      "Write the two simultaneous track values as x and −x."
    ],
    "answer": "The two clap signals cancel. Doubling the left track leaves one ordinary left-track clap.",
    "why": "Sample by sample, x plus −x is zero. After changing the left track to 2x, the sum is x. The recording is still present on each individual track.",
    "kind": "Lateral thinking",
    "id": 311
  },
  {
    "title": "The critic who lost a scorecard",
    "level": "Medium",
    "intro": "Five judges each awarded an integer from 1 to 9. Four surviving cards read 2, 4, 7 and 8. A newspaper printed the mean rounded to the nearest whole number as 5. The official certificate gives the middle score, after sorting all five, as exactly 6.",
    "questions": [
      "What was on the lost card? Would the rounded mean on its own have settled the question?"
    ],
    "hints": [
      "Write the unknown score on a spare scrap and try inserting it among the four known numbers.",
      "There must be an actual 6 among the scores for the middle one to equal 6."
    ],
    "answer": "6. The rounded mean alone is insufficient.",
    "why": "Only the missing card can supply the middle 6; inserting it gives 2, 4, 6, 7, 8. The mean is 27/5 = 5.4. Missing scores 2 through 6 all make means from 4.6 through 5.4, which all round to 5.",
    "kind": "Logic",
    "id": 312
  },
  {
    "title": "The three-finger tally stamp",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "A stamp picks up three numbers in an L. Put its elbow on a number and its other fingers on the numbers immediately to the right and immediately below. All fingers must lie on the board.",
    "questions": [
      "Where should the elbow go for the highest total, without turning the stamp?"
    ],
    "hints": [
      "There are only six legal elbow positions.",
      "Check the second row as well as the first; the six can join a neighboring elbow."
    ],
    "answer": "Row 2, column 3; the total is 9.",
    "why": "Across the first legal row the totals are 5, 6, 8. Across the second they are 4, 8, 9. The largest occurs just once.",
    "figure": "p4v-trinity.svg",
    "alt": "Grid rows 3 1 4 2; 1 1 2 6; 2 5 1 2. A three-square L covers an elbow, the square right and the square below.",
    "id": 313
  },
  {
    "title": "The concertina that pinches in the middle",
    "kind": "Optical illusions",
    "level": "Easy",
    "intro": "A black screen contains six cream openings. Their heights pinch inward and then spread out. Imagine fitting a horizontal rod through the exact centers of all six.",
    "questions": [
      "Would the rod need to bend, rise or dip? How can you tell without comparing the top edges alone?"
    ],
    "hints": [
      "Pair the tops of the slits with their bottoms.",
      "A taller slit extends equally far on both sides of one common line."
    ],
    "answer": "A straight, level rod fits.",
    "why": "Every opening is symmetric above and below the same horizontal axis. The descending tops are paired with rising bottoms; the midpoint stays still.",
    "figure": "p4o-bellows.svg",
    "alt": "Six cream slits have heights tall, medium, short, short, medium and tall against a dark panel.",
    "reveal": "p4o-bellows-proof.svg",
    "revealAlt": "A level copper line passes through the centers of all six slits.",
    "id": 314
  },
  {
    "title": "Two inn signs for one cold night",
    "level": "Easy",
    "intro": "The innkeeper sets two identical brass signs outside. One is painted dull black on the face; the other is polished to a mirror. In daylight both carry the same raised lettering. In the dark a narrow flashlight beam from the street makes the black sign’s face visible from several angles. The polished face gives one dazzling flash from a particular spot, then seems to show the dark sky again.",
    "questions": [
      "Which sign would you choose as a mirror to signal one specific window? Why can the darker sign be easier to locate from the side?"
    ],
    "hints": [
      "The amount of light returned and the directions it takes are different issues.",
      "A rough surface scatters a fraction of the beam into many directions."
    ],
    "answer": "Use the polished sign for a directed flash. The dull face scatters some light toward off-angle viewers.",
    "why": "The polished face sends a concentrated reflection in a predictable direction. Move away from that direction and the eye can miss the beam entirely. The black face absorbs much of the light, but its scattered remainder reaches a wider set of observers.",
    "kind": "Lateral thinking",
    "id": 315
  },
  {
    "title": "The jam baskets with matching handles",
    "level": "Medium",
    "intro": "Seven sealed jars weigh 2, 3, 4, 5, 6, 7 and 9 units. The maker packs all of them into two baskets of equal jar weight. Three jars go in the white basket; the others go in the blue. The jars of weights 2 and 9 have blue ribbons and both go into the blue basket.",
    "questions": [
      "Which jars go in the white basket?"
    ],
    "hints": [
      "The total is 36, so each basket holds 18 units.",
      "Look for three different numbers among 3, 4, 5, 6 and 7 that add to 18."
    ],
    "answer": "5, 6 and 7.",
    "why": "They are the three largest eligible weights and already sum to exactly 18. Replacing any of them with a smaller eligible weight makes the white basket too light. The remaining four jars also sum to 18.",
    "kind": "Logic",
    "id": 316
  },
  {
    "title": "The accordion on the desk",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "A nine-panel brochure lies face up. Fold the left column right onto the middle. Fold the right column left onto that same stack. Finally fold the whole top row down onto the middle row.",
    "questions": [
      "At the middle square, in the resulting pile of six panels, which panel touches E from directly above?"
    ],
    "hints": [
      "Track the stack at E before the top row comes down.",
      "A later fold can change its top without inserting paper between two layers already touching."
    ],
    "answer": "D touches E from above.",
    "why": "The first fold lays D directly on E. The second places F above D. Folding the top stack onto this pile adds three more layers above F. Nothing ever goes between D and E.",
    "figure": "p4v-brochure.svg",
    "alt": "Nine panels in three rows A B C, D E F, G H I.",
    "id": 317
  },
  {
    "title": "The postcard seen from the gangway",
    "kind": "Optical illusions",
    "level": "Medium",
    "intro": "A postcard is printed entirely with dots. Examine it at arm’s length or imagine averaging each little square of sixteen dots into a single tone.",
    "questions": [
      "What capital letter appears? Did the printer change the number of dots per square or their size?"
    ],
    "hints": [
      "Look for the darker strokes formed by groups of dots.",
      "Compare a dark patch and a light patch in the top row."
    ],
    "answer": "H. The printer changed dot size.",
    "why": "Every patch contains four rows of four dots. Larger dots cover more paper, making two dark uprights and the connecting center bar. The reveal replaces each patch with its average light or dark category.",
    "figure": "p4o-halftone.svg",
    "alt": "Five by five patches of evenly spaced dots. Some patches are made of much heavier dots.",
    "reveal": "p4o-halftone-proof.svg",
    "revealAlt": "Averaged tiles show two vertical bars joined across the center to form H.",
    "id": 318
  },
  {
    "title": "The button that became a moon",
    "level": "Medium",
    "intro": "A button lies in an empty, opaque tea bowl. From her fixed seat, Iris can just see the far rim but cannot see the button below it. Her friend pours in clear water. The bowl and button stay still, the water has no bubbles, and Iris now sees the button through the flat water surface.",
    "questions": [
      "What changed along the path from the button to Iris? Would a straight sighting rod from her eye along the apparent direction necessarily touch the button?"
    ],
    "hints": [
      "A water surface can change the direction in which a light ray travels.",
      "Trace a ray from the button to the surface, then from the surface over the rim to the eye."
    ],
    "answer": "Light bends at the water–air boundary and can now clear the rim. A straight rod along that final direction can miss the button.",
    "why": "The eye traces the arriving ray backward as if the entire path had been straight, so the button appears raised. The submerged portion of the actual path follows a different slope.",
    "kind": "Lateral thinking",
    "id": 319
  },
  {
    "title": "Two spoons across the tea table",
    "level": "Medium",
    "intro": "Ada fills a cup with 100 ml of tea and another cup with 100 ml of milk. She moves 10 ml of tea into the milk, stirs thoroughly, then takes 10 ml of that mixture back to the tea cup. Assume volumes add exactly.",
    "questions": [
      "Which is greater at the end: milk in the tea cup or tea in the milk cup? Give the amount of either."
    ],
    "hints": [
      "The tea cup returns to its original 100 ml. Every missing bit of tea there must have been replaced.",
      "The mixture drawn back has milk fraction 100/110."
    ],
    "answer": "They are equal: 100/11 ml of each.",
    "why": "The returning spoon contains 10 × 100/110 = 100/11 ml of milk. The tea cup ends with exactly its original volume, so it is also short exactly 100/11 ml of its original tea. That tea remains in the other cup.",
    "kind": "Logic",
    "id": 320
  },
  {
    "title": "Three cuts in the dial cake",
    "kind": "Visual reasoning",
    "level": "Easy",
    "intro": "Three straight cuts run from the center of a circular cake to the rim at 10, 2 and 5 on the clock dial. The icing is uniform.",
    "questions": [
      "What fraction of the cake is the largest slice?"
    ],
    "hints": [
      "Count intervals between hour marks, including those across 12.",
      "The three interval counts must add to twelve."
    ],
    "answer": "Five twelfths.",
    "why": "Clockwise from 10 to 2 is four intervals, from 2 to 5 is three, and from 5 to 10 is five. Equal central angles give equal fractions of the circle.",
    "figure": "p4v-cakeknife.svg",
    "alt": "A twelve-hour dial with radial lines from the center to 10, 2 and 5.",
    "id": 321
  },
  {
    "title": "The stripe that stops on the yellow door",
    "kind": "Optical illusions",
    "level": "Easy",
    "intro": "A printer pasted one plain horizontal strip across three color panels. There are no holes in the strip. On the center panel its long edges seem to disappear.",
    "questions": [
      "What makes the apparent break possible? Would trimming away the side panels reveal the strip’s outline in the middle?"
    ],
    "hints": [
      "An edge becomes visible through a change on its two sides.",
      "Compare the strip’s ink with the center panel’s ink."
    ],
    "answer": "The strip and center use identical yellow. Cropping the sides leaves no visible central outline.",
    "why": "The strip keeps its width and color. Only the contrast changes where it reaches the matching panel. The proof draws an artificial boundary around the same strip.",
    "figure": "p4o-vanishing.svg",
    "alt": "A narrow gold band passes over rust, gold and teal panels; only on the gold panel are its edges indistinguishable.",
    "reveal": "p4o-vanishing-proof.svg",
    "revealAlt": "A thin new outline marks the entire band across all three panels.",
    "id": 322
  },
  {
    "title": "The cook’s backward shopping list",
    "level": "Easy",
    "intro": "Mira has one card that reads DRAW in four large black letters. The drama teacher wants an instruction for an artist. The hospital porter wants the name of a hospital area. Neither will accept a mirror image, and neither is allowed to rewrite a letter. Each letter is on its own removable square tile.",
    "questions": [
      "What should the porter do? Why would turning the entire card over fail the rule?"
    ],
    "hints": [
      "The tiles can move without turning around.",
      "The porter needs the last letter to become the first, still facing the reader normally."
    ],
    "answer": "Slide the tiles into reverse order to spell WARD.",
    "why": "Reversing positions gives W, A, R, D with all four letterforms still upright and forward-facing. Turning over the whole card shows its back or a mirrored impression, not that sequence of ordinary letterforms.",
    "kind": "Lateral thinking",
    "id": 323
  },
  {
    "title": "The tops that take turns being best",
    "level": "Hard",
    "intro": "Each of three fair spinner tops has three equally likely numbers. Jasper bears 1, 5, 9. Coral bears 3, 4, 8. Pearl bears 2, 6, 7. Each player spins their chosen top once, and the higher number wins. Jo chooses second and is free to select either remaining top.",
    "questions": [
      "For each possible first choice, which top should Jo take, and with what chance of winning?"
    ],
    "hints": [
      "For two tops there are nine equally likely head-to-head number pairs.",
      "List how many opposing numbers each face beats rather than comparing average face values."
    ],
    "answer": "Against Jasper choose Pearl; against Coral choose Jasper; against Pearl choose Coral. Each response wins 5/9.",
    "why": "Jasper’s three faces beat 0, 2 and 3 Coral faces. Coral’s beat 1, 1 and 3 Pearl faces. Pearl’s beat 1, 2 and 2 Jasper faces. Thus the preferred choices form a circle, each with five winning pairs out of nine.",
    "kind": "Logic",
    "id": 324
  },
  {
    "title": "The corner trimmed for the column",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "The decorator pins a rug pattern to a lattice with one-unit spacing. The sloping edge joins two grid points.",
    "questions": [
      "What area does the rug cover? If the sloping cut is sewn back in, how much area is added to complete the surrounding rectangle?"
    ],
    "hints": [
      "Draw a rectangle enclosing the entire pattern.",
      "The missing corner is half of a two-by-two square."
    ],
    "answer": "The pattern covers 10 square units. The cut corner adds 2.",
    "why": "The bounding rectangle is 4 by 3, area 12. The upper-right triangle has base 2 and height 2, area 2. Subtracting gives 10.",
    "figure": "p4v-clippedrug.svg",
    "alt": "Within a four-by-three rectangle, the top edge ends two units from the left. A diagonal joins that point to the right edge one unit above the bottom.",
    "id": 325
  },
  {
    "title": "The medal row with only one whole rim",
    "kind": "Optical illusions",
    "level": "Medium",
    "intro": "Four circular medals overlap like roof shingles. None has been cut. A front medal interrupts the outline of one immediately behind it.",
    "questions": [
      "Which medal has its complete circular edge visible? Which is farthest behind?"
    ],
    "hints": [
      "Follow a paper-colored rim through a meeting between two disks.",
      "Do all three interruptions agree on the same stacking direction?"
    ],
    "answer": "The sage medal at far right has the full rim; the rust medal at far left is behind all the others.",
    "why": "At each overlap the medal on the right has the uninterrupted arc. This creates a consistent back-to-front sequence from left to right. Only the last medal has nobody covering any of its rim.",
    "figure": "p4o-medals.svg",
    "alt": "Four overlapping disks run left to right in rust, gold, teal and sage, each with a thin cream rim.",
    "reveal": "p4o-medals-proof.svg",
    "revealAlt": "The four disks are labeled 1, 2, 3, 4 from the rear left to the front right.",
    "id": 326
  },
  {
    "title": "The sleeve that borrowed a second breath",
    "level": "Medium",
    "intro": "Pia has two light fabric sleeves, both open at both ends. She holds one narrow sleeve right against her lips and blows a single breath; roughly one breath’s worth of air comes out the far end. With the wide sleeve she holds its mouth a little in front of her face. Much more air leaves its far end during one breath. Tissue streamers just outside that mouth swing inward while she blows.",
    "questions": [
      "Where did the extra air enter? Why does pressing the sleeve tightly around her lips reduce this effect?"
    ],
    "hints": [
      "Keep an eye on the streamers outside the mouth.",
      "Her fast moving stream shares motion with the surrounding room air."
    ],
    "answer": "Extra room air entered beside her breath through the open gap. A tight seal removes that inlet.",
    "why": "The moving jet draws nearby air along with it. Both streams travel through the wide sleeve. The experiment counts all the air leaving the far end, whereas only part of that air came from Pia’s lungs.",
    "kind": "Lateral thinking",
    "id": 327
  },
  {
    "title": "The three-wick clock",
    "level": "Medium",
    "intro": "Three identical candles each last exactly 60 minutes when lit at one end. Each burns uniformly with time. At noon Ria lights one. She lights the second 15 minutes later and the third 15 minutes after that. The clock stops, and she next looks when the three remaining lengths together equal exactly one original candle.",
    "questions": [
      "What time is it? Are any of the candles already out?"
    ],
    "hints": [
      "At 12:30 the three candles have 30, 45 and 60 minutes of wax left.",
      "While all three burn, one minute removes three candle-minutes of wax."
    ],
    "answer": "12:55. All three are still burning.",
    "why": "At 12:30 their combined wax is 135 candle-minutes. Reducing that to 60 consumes 75 candle-minutes, taking 25 minutes at rate three. The remaining lengths then correspond to 5, 20 and 35 minutes.",
    "kind": "Logic",
    "id": 328
  },
  {
    "title": "The scanner at the long showcase",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "A scanner sweeps across six displays left to right and then back again. On reversing, it immediately moves to the neighboring display, without reading the endpoint twice. Its first reading is B.",
    "questions": [
      "Which letter is reading 28?"
    ],
    "hints": [
      "List the readings until you are just about to read B in the same direction as at the start.",
      "One full there-and-back cycle takes ten moves."
    ],
    "answer": "D.",
    "why": "Readings 1 through 10 are B E A D F C F D A E. Reading 11 starts the pattern again. Reading 28 is its eighth position, D.",
    "figure": "p4v-scanner.svg",
    "alt": "The six displays read B E A D F C from left to right.",
    "id": 329
  },
  {
    "title": "Two handles in the tea-room shadow show",
    "kind": "Optical illusions",
    "level": "Medium",
    "intro": "Two teal mug silhouettes each seem to have a handle with a pale hole. Treat the picture as a flat map, with pale ink walkable and teal ink a wall.",
    "questions": [
      "From which apparent handle hole can a tiny walker escape to the background without crossing teal? Are both pale patches enclosed holes?"
    ],
    "hints": [
      "Trace the far-right edge of each handle carefully.",
      "Even a narrow pale passage connects areas that look separate at first glance."
    ],
    "answer": "Only B permits escape. A has a true enclosed hole; B has a notch open to the background.",
    "why": "The small horizontal break in B joins the interior pale patch to the surrounding field. At A the teal rim is continuous. The eye may complete the near-circle in B and perceive an enclosed handle like A.",
    "figure": "p4o-zigzag.svg",
    "alt": "Two teal mug cutouts, labeled A and B, show pale openings in their handles; B has a narrow pale slit in the right edge.",
    "reveal": "p4o-zigzag-proof.svg",
    "revealAlt": "A copper arrow exits the opening in B through a narrow gap. A copper dot inside A remains surrounded by teal.",
    "id": 330
  },
  {
    "title": "The jug that stays cool in the sun",
    "level": "Medium",
    "intro": "At the summer fair, Neri hangs two identical glazed pitchers of water in a warm breeze. She wraps one in a wet cloth and the other in a dry cloth of the same color. By the time the wet cloth dries, the water inside its pitcher is cooler. A thin waterproof film wrapped outside a fresh wet cloth almost eliminates the effect. The pitchers are sealed against leaks.",
    "questions": [
      "What crossed from the first wet cloth into the surrounding air, and why does the film change the result?"
    ],
    "hints": [
      "The water inside the pitcher need not leave it. Follow the missing water from the cloth.",
      "Turning liquid water into vapor takes energy."
    ],
    "answer": "Water vapor escaped from the cloth, carrying away energy. The film largely stops that evaporation into the breeze.",
    "why": "The wet cloth needs heat to evaporate, and draws some of it from the pitcher and its contents. The film keeps the damp layer in contact with air that soon becomes humid instead of exposing it continually to fresh moving air.",
    "kind": "Lateral thinking",
    "id": 331
  },
  {
    "title": "The pearl dealer’s two-ended tray",
    "level": "Hard",
    "intro": "Four purses sit in a row worth 5, 10, 2 and 3 coins from the left. You and the dealer alternate taking one purse from either current end. You go first and both try to maximize your own total.",
    "questions": [
      "Which end should you take, and how many coins can you guarantee?"
    ],
    "hints": [
      "If you take 5, what becomes available immediately to the dealer?",
      "After taking 3, compare the dealer’s choices of 5 and 2."
    ],
    "answer": "Take the right-hand 3. You can guarantee 13 coins.",
    "why": "The dealer then has 5 or 2 available. Either choice exposes the 10 for your second turn, giving you 3 + 10. Starting with 5 instead lets the dealer take 10; the best you can then collect is 3, for only 8.",
    "kind": "Logic",
    "id": 332
  },
  {
    "title": "One weight for the display beam",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "A weight at distance 3 has three times the turning effect of one at distance 1. Three equal blocks stand two notches left of the pivot. One stands three notches right. The bare beam balances.",
    "questions": [
      "At which empty notch could a single additional equal block balance the beam? If the needed notch is occupied, what then?"
    ],
    "hints": [
      "Calculate the existing turning totals on each side.",
      "How many notch-units are still needed on the right?"
    ],
    "answer": "No empty notch works. Stack the new block on the block three notches right.",
    "why": "The left gives 3 × 2 = 6 units of turning effect. The right starts at 1 × 3 = 3. A single new block has to contribute three more, requiring the same right-hand notch.",
    "figure": "p4v-balancependant.svg",
    "alt": "A level diagram marks three notches on each side of a central pivot. Three blocks occupy left notch 2 and one occupies right notch 3.",
    "id": 333
  },
  {
    "title": "The stencil reader’s interrupted word",
    "kind": "Optical illusions",
    "level": "Medium",
    "intro": "A sign painter has scraped two straight, level strips of ink off three block letters. Read the surviving marks as a single English word.",
    "questions": [
      "What word did the sign say? Why can the first letter not be E in this letter style?"
    ],
    "hints": [
      "Follow surviving strokes straight across each empty band.",
      "Look below the lower band for the bottom horizontal of a possible E."
    ],
    "answer": "FIT.",
    "why": "The first letter has top and middle arms, with no lower arm on the surviving baseline. The middle column has the top and bottom bars of I. The last has only the top bar and upright of T. Closure lets the eye bridge the missing bands.",
    "figure": "p4o-fit.svg",
    "alt": "Three teal stencil letters remain in fragments above, below and between two scraped-out level bands.",
    "reveal": "p4o-fit-proof.svg",
    "revealAlt": "Restoring the strips joins the original teal strokes into FIT.",
    "id": 334
  },
  {
    "title": "The dance card with only two stamps",
    "level": "Medium",
    "intro": "A dance caller has just two stamps, one reading ON and one reading E. She prints ON, then E, four times on a card without spaces: ONEONEONEONE. The clerk can slide dividers into three of the eleven gaps without changing the ink. The caller wants a bill containing, in order, a scrap, one word naming a glow-discharge gas, one word meaning a very long age, and a final scrap. A gas called NEON and an age spelled EON both appear in her glossary.",
    "questions": [
      "Where can the clerk put three dividers to isolate NEON followed immediately by EON, with a nonempty scrap at each end? Find both ways."
    ],
    "hints": [
      "Find a NEON that is immediately followed by EON, rather than marking the repeated ONE units.",
      "The N characters recur every three places. For each one, ask whether seven letters fit with some ink left at each end."
    ],
    "answer": "O | NEON | EON | EONE, or ONEO | NEON | EON | E.",
    "why": "NEONEON fits starting at character 2 or 5. Dividers after characters 1, 5 and 8 yield the first grouping; after 4, 8 and 11 yield the second. Starting at the next N, character 8, leaves too little ink. The printed stamp boundaries do not determine the later word boundaries.",
    "kind": "Lateral thinking",
    "id": 335
  },
  {
    "title": "The walking tour’s disputed pace",
    "level": "Medium",
    "intro": "Alma walks 6 km out to the harbor at 3 km/h, then returns the same 6 km at 6 km/h. Dev walks the same complete route steadily at one speed and takes exactly as long. Neither stops.",
    "questions": [
      "What steady speed does Dev use? Which leg accounts for the greater share of Alma’s time?"
    ],
    "hints": [
      "Work out the number of hours on each leg separately.",
      "Dev’s distance is the sum of both legs; divide it by Alma’s total time."
    ],
    "answer": "4 km/h. The outward leg takes two thirds of Alma’s time.",
    "why": "The slower 6 km takes 2 hours and the faster 6 km takes 1 hour. Across 3 hours they cover 12 km. The ordinary mean of 3 and 6 would incorrectly give equal weight to unequal amounts of time.",
    "kind": "Logic",
    "id": 336
  },
  {
    "title": "The specimen slide’s little window",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "The right panel is a magnified two-by-two patch of the sheet at left. The slide has no way to turn or reflect.",
    "questions": [
      "How many places could have supplied the patch? Give the upper-left square of each using row, column."
    ],
    "hints": [
      "Begin at each B that has room to its right and below.",
      "Check the entire bottom pair after matching the top pair."
    ],
    "answer": "One place: row 3, column 1.",
    "why": "Slide the little square over the nine possible two-by-two positions. A match must have BA directly over AC; finding just BA in one row is insufficient.",
    "figure": "p4v-specimen.svg",
    "alt": "Sheet rows ABAC, CABA, BACA, ACAB. Target rows BA, AC.",
    "id": 337
  },
  {
    "title": "The peaks the postcard artist numbered",
    "kind": "Optical illusions",
    "level": "Easy",
    "intro": "The teal silhouette can be seen as one jagged strip or as several overlapping hills. Count a local summit whenever the visible skyline goes up to a point and immediately down. Ignore the outer edges.",
    "questions": [
      "How many local summits are visible? Does that prove that exactly that many separate hills were drawn?"
    ],
    "hints": [
      "Trace just the boundary between sky and teal.",
      "A change of slope reveals a summit, while a filled silhouette hides any boundaries behind it."
    ],
    "answer": "Five visible summits. The number of separate hills is undetermined.",
    "why": "The five turns from rising to falling can be marked from left to right. A single cutout with five peaks, or several overlapping cutouts, can make the identical outer boundary.",
    "figure": "p4o-headlands.svg",
    "alt": "A single teal silhouette has a jagged skyline with alternating higher and lower peaks.",
    "reveal": "p4o-headlands-proof.svg",
    "revealAlt": "Five copper markers and numbers identify the distinct local summit points.",
    "id": 338
  },
  {
    "title": "Two clear lids at the ticket booth",
    "level": "Medium",
    "intro": "Two dark but transparent film squares each let light through from a white light panel that emits equally in all vibration directions. Stacked with their little arrows parallel, the display remains visible. Keeping them flat and rotating one square a quarter-turn makes the stack almost black. A label explains that each film passes only the component of light vibration along its arrow.",
    "questions": [
      "Why does a quarter-turn matter? If both films are turned a quarter-turn together from their parallel position, should their relative blocking change?"
    ],
    "hints": [
      "Consider the direction of the light after the first film.",
      "What component does a vibration parallel to one arrow have along an arrow perpendicular to it?"
    ],
    "answer": "The second film crosses the first film’s vibration direction and blocks it. Turning both together keeps the two arrows parallel.",
    "why": "The vibration that emerges from the first film lies along its arrow. A perpendicular second film passes essentially none of that vibration. On an unpolarized white source, a pair that rotates together stays similarly bright because its relative angle stays zero.",
    "kind": "Lateral thinking",
    "id": 339
  },
  {
    "title": "The mobile above the little stage",
    "level": "Hard",
    "intro": "A weightless beam is level. A hanging ornament cluster 2 units to the left of the pivot balances a single moon 3 units to the right. The cluster itself hangs from its own level weightless beam: a bird 2 units left of that smaller pivot balances a bell 3 units right. Bird, bell and moon together weigh 25 units. A level beam balances when weight times arm length is equal on both sides.",
    "questions": [
      "What do the bird, bell and moon weigh?"
    ],
    "hints": [
      "Treat the bird and bell as one load on the upper beam.",
      "A load on a 2-unit arm needs one and a half times the weight on a 3-unit arm."
    ],
    "answer": "Bird 9, bell 6, moon 10.",
    "why": "If the total cluster is 3 shares, the moon is 2 shares. Five shares weigh 25, so the cluster weighs 15 and moon 10. Inside the cluster the same 3:2 ratio splits 15 into bird 9 and bell 6.",
    "kind": "Logic",
    "id": 340
  },
  {
    "title": "The tram inspector’s return ticket",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "A tram inspector must traverse each track exactly once. She can start at any letter and may revisit stations. A route need not end where it started.",
    "questions": [
      "Which two stations must be the endpoints? Find one route beginning at the earlier letter."
    ],
    "hints": [
      "Count tracks touching each station.",
      "Every intermediate visit uses one arrival and one departure."
    ],
    "answer": "B and E. One route is B–A–F–E–D–C–B–E.",
    "why": "Only B and E have three incident tracks. All other stations have two, so entries and departures can pair there. The listed trip uses the six perimeter tracks and the B–E track exactly once.",
    "figure": "p4v-tramline.svg",
    "alt": "Tracks form hexagon A–B–C–D–E–F–A and a single extra track from B to E.",
    "id": 341
  },
  {
    "title": "The pennants pointing home and away",
    "kind": "Optical illusions",
    "level": "Easy",
    "intro": "A fleet of small pennants forms a larger direction sign. First read a single pennant, then step back and read the group.",
    "questions": [
      "Which direction does each scale indicate? How many small pennants make the middle row?"
    ],
    "hints": [
      "Read a small shape by its own pointed tip.",
      "For the whole sign, use the outside contour of all the rows together."
    ],
    "answer": "Small pennants point left. The group points right. The middle row contains seven.",
    "why": "The seven pennants in the middle make a long horizontal shaft. The shorter rows above and below widen near the right into a larger head. Local direction and global direction disagree.",
    "figure": "p4o-fleet.svg",
    "alt": "Several left-pointing pennants arranged in rows of one, two, seven, two and one suggest a larger sign.",
    "reveal": "p4o-fleet-proof.svg",
    "revealAlt": "Small left arrows appear in copper, with a separate gold right arrow showing the direction of the whole cluster.",
    "id": 342
  },
  {
    "title": "The clock face on a curtain call",
    "level": "Medium",
    "intro": "A stage clock has a normal face and two thin black hands. At noon the prop maker removes its longer minute hand without disturbing the short hour hand. She switches the mechanism on. A spectator returns later, sees one hand at exactly 3, and says “I cannot tell whether it is three o’clock or a quarter past something.” The short hand travels smoothly, once around in twelve hours.",
    "questions": [
      "Can the prop maker recover the minute of the hour from that one hand exactly at 3? What would the same hand show at 3:15?"
    ],
    "hints": [
      "The hour hand moves continuously between adjacent numerals.",
      "A quarter of an hour carries the hour hand a quarter of the distance toward the next numeral."
    ],
    "answer": "Yes. It is exactly three o’clock within the twelve-hour cycle. At 3:15 the hand lies one quarter of the way from 3 to 4.",
    "why": "A known hour hand gives a continuous position around a twelve-hour dial. Exactly aligned with the 3 means no part of the next hour has elapsed. The remaining ambiguity is which twelve-hour cycle it is.",
    "kind": "Lateral thinking",
    "id": 343
  },
  {
    "title": "Three counters before the gallery opens",
    "level": "Hard",
    "intro": "Three attendants, Ana, Bo and Cora, each take a different counter. Each must finish setting up one counter before the doors open. They start together, and their minutes for each possible counter are printed below.",
    "questions": [
      "Assign the counters so the doors can open as early as possible. Why can they not open one minute sooner?"
    ],
    "hints": [
      "The doors wait for the slowest of the three, regardless of the sum of their times.",
      "At a deadline of five minutes, which single counter can Ana take? Where must Bo and Cora both go?"
    ],
    "answer": "Ana takes stamps, Bo takes maps and Cora takes keys. The doors open at six minutes.",
    "why": "These assignments take 6, 6 and 4 minutes. At a five-minute deadline, Ana must take maps. Bo and Cora would both require keys, a conflict. Thus six is the earliest possible opening.",
    "tables": [
      [
        "Setup time in minutes",
        [
          "Attendant",
          "Keys",
          "Maps",
          "Stamps"
        ],
        [
          [
            "Ana",
            8,
            4,
            6
          ],
          [
            "Bo",
            5,
            6,
            8
          ],
          [
            "Cora",
            4,
            8,
            7
          ]
        ]
      ]
    ],
    "kind": "Logic",
    "id": 344
  },
  {
    "title": "The fairground’s flip-flop chute",
    "kind": "Visual reasoning",
    "level": "Hard",
    "intro": "Each of the three forks sends its first marble left, its second right, and alternates on later visits to that fork. Start all forks fresh and drop ten marbles at S.",
    "questions": [
      "Which two bins receive three marbles each?"
    ],
    "hints": [
      "The top fork sends five to each lower fork.",
      "Ask which way a lower fork sends the first, third and fifth of its own visitors."
    ],
    "answer": "Bins 1 and 3.",
    "why": "Five marbles reach each lower fork. Three of those go to that fork’s left bin, two to its right. The left bins below L and R are 1 and 3.",
    "figure": "p4v-pinboard.svg",
    "alt": "A branching tree: S feeds L on left and R on right; L feeds bins 1 and 2, R feeds bins 3 and 4, in left-to-right order.",
    "id": 345
  },
  {
    "title": "The sign read at a grazing angle",
    "kind": "Optical illusions",
    "level": "Medium",
    "intro": "The scenery shop stretched a three-letter sign sideways for an audience viewing it at a steep angle from the side. Imagine squeezing the illustration left to right while leaving its height fixed.",
    "questions": [
      "Which word becomes easier to read? What feature distinguishes its final letter from V?"
    ],
    "hints": [
      "Treat the upright and slanted strokes in each of three groups as one letter.",
      "The two diagonal branches of the last group meet above the baseline; a stem continues down."
    ],
    "answer": "KEY. In the last letter two diagonals meet partway down, and the vertical stem beneath them makes a Y.",
    "why": "Horizontal compression restores more familiar letter proportions. It changes widths, not how the segments join. The first letter has two diagonals off a vertical, the middle has three arms, and the last is forked above a stem.",
    "figure": "p4o-runs.svg",
    "alt": "Three very wide, low groups of strokes span the sheet; one has a diagonal pair and upright, one three horizontal arms, and one a fork over a short stem.",
    "reveal": "p4o-runs-proof.svg",
    "revealAlt": "With the proportions normalized, the strokes form the word KEY.",
    "id": 346
  },
  {
    "title": "A pocket mirror for the station clock",
    "level": "Medium",
    "intro": "A visitor reads a dial showing a long hand on 12 and a short hand on 9. The clock is painted onto a glass panel, with plain ticks instead of numerals. A brass arrow fixed to the real dial points toward what people on the intended front would call 3. In the visitor’s sketch this arrow points left. The visitor copied the clock directly from one side of the glass and did not rotate the sketch.",
    "questions": [
      "What hour did the artist actually paint, as seen from the intended front? Why is the minute reading unchanged?"
    ],
    "hints": [
      "Use the brass arrow as a left–right reference.",
      "A view through the back reflects left and right but leaves the top tick at the top."
    ],
    "answer": "Three o’clock. The long hand still points to the top on either side.",
    "why": "The arrow points left in the sketch although it points right on the front, establishing a back view. The short hand seen to the left therefore appears on the right from the front. The hour reverses from 9 to 3, but the minute hand lies on the vertical reflection axis.",
    "kind": "Lateral thinking",
    "id": 347
  },
  {
    "title": "The chorus that erases pairs",
    "level": "Medium",
    "intro": "A puppet show prints this line of costume tags: ABCDDCBAFE. Whenever two adjacent tags show the same letter, both may be removed; the neighbors on either side then close the gap. Keep removing pairs until no move remains.",
    "questions": [
      "What survives? How many removals are made?"
    ],
    "hints": [
      "Begin at the only identical neighbors in the original line.",
      "The center keeps exposing a fresh matching pair."
    ],
    "answer": "FE survives after four pair removals.",
    "why": "Remove DD, exposing CC; remove CC, exposing BB; remove BB, exposing AA. Removing AA leaves F next to E. At every stage there was just one possible matching pair.",
    "kind": "Logic",
    "id": 348
  },
  {
    "title": "The miniature billiard saloon",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "Two points are the same distance from a straight cushion, two units inland. They are six units apart along the cushion. A ball must travel from A to B by bouncing on that cushion once with equal incoming and outgoing angles.",
    "questions": [
      "How far along the cushion from the foot of A does the ball strike? How long is the whole path, to one decimal place?"
    ],
    "hints": [
      "Reflect B to the far side of the cushion.",
      "The straight reflected path crosses halfway between the two perpendicular feet."
    ],
    "answer": "Three units along; about 7.2 units in total.",
    "why": "Symmetry places the bounce midway. Each half is the hypotenuse of a 3-by-2 right triangle, so the total is twice the square root of 13, about 7.21.",
    "figure": "p4v-billiard.svg",
    "alt": "Two marked points A and B lie level, equally far above a horizontal cushion. Their horizontal separation is six units.",
    "id": 349
  },
  {
    "title": "The rhythm under the fence paint",
    "kind": "Optical illusions",
    "level": "Medium",
    "intro": "The carpenter planted pickets at equal horizontal spacing and then cut every fifth one tall, starting with the very first. The tall pickets group the fence into visual beats.",
    "questions": [
      "How many small gaps separate the centers of neighboring tall pickets? How many full beats run from the first tall picket to the last?"
    ],
    "hints": [
      "Gaps and pickets do not have the same count.",
      "Treat each tall picket as a beat boundary."
    ],
    "answer": "Five gaps per beat; four complete beats.",
    "why": "The tall pickets are numbers 1, 6, 11, 16 and 21. The five boundaries enclose four beats. Each beat spans five little gaps, although only four short pickets stand between its tall ends.",
    "figure": "p4o-metre.svg",
    "alt": "Twenty-one equal-spaced vertical pickets form a repeating arrangement of a tall one followed by four shorter ones.",
    "reveal": "p4o-metre-proof.svg",
    "revealAlt": "The five tall pickets are colored copper; four separately numbered brackets show the four intervals.",
    "id": 350
  },
  {
    "title": "The tug that has longer legs at noon",
    "level": "Medium",
    "intro": "A child watches a tug move past evenly spaced red poles along a canal. In the morning she counts three gaps in one minute. At noon she counts six in one minute. The tug’s speed through the water and the spacing of the poles are the same. The boat travels downstream at noon and upstream in the morning; the current has a constant speed and direction.",
    "questions": [
      "If a gap is 100 m, how fast are the tug through the water and the current?"
    ],
    "hints": [
      "The poles measure motion relative to the bank.",
      "Add the upstream and downstream ground speeds to cancel the current terms."
    ],
    "answer": "Tug 450 m per minute through the water; current 150 m per minute.",
    "why": "Three gaps give 300 m/min upstream and six give 600 m/min downstream. These are tug minus current and tug plus current. Their average is 450; half their difference is 150.",
    "kind": "Lateral thinking",
    "id": 351
  },
  {
    "title": "The mayor of three picnic tables",
    "level": "Hard",
    "intro": "Three picnic tables seat 5, 7 and 9 voters. Everyone chooses plum or ginger. Each table gives its one ribbon to its own majority. The flavor with two or more table ribbons becomes the festival special.",
    "questions": [
      "What is the smallest possible number of plum voters that can make plum the special? Could ginger still have more individual votes?"
    ],
    "hints": [
      "Each table has its own cheapest winning majority.",
      "Win the two least expensive tables and spend no plum votes on the third."
    ],
    "answer": "Seven plum voters suffice: three at the five-seat table and four at the seven-seat table. Ginger can have fourteen.",
    "why": "Winning majorities cost 3, 4 or 5 votes at the respective tables. Two wins therefore require at least 3 + 4. With none at the largest table, plum takes two ribbons while ginger takes 14 of 21 individual votes.",
    "kind": "Logic",
    "id": 352
  },
  {
    "title": "The paint mark on the hatbox rim",
    "kind": "Visual reasoning",
    "level": "Easy",
    "intro": "A round hatbox has a circumference of 24 cm. Its painted point starts at the top. It rolls to the right without slipping along a shelf.",
    "questions": [
      "After the center has moved 30 cm, where is the mark relative to the center: above, below, left or right?"
    ],
    "hints": [
      "Remove one whole circumference from the distance.",
      "Six centimeters is a quarter of a turn. Which way does a right-rolling wheel rotate?"
    ],
    "answer": "Directly right of the center.",
    "why": "The first 24 cm brings the mark back to the top. The remaining 6 cm turns the box a quarter-turn clockwise, carrying its top point to the right.",
    "figure": "p4v-hatboxwheel.svg",
    "alt": "A circular box rests on a horizontal shelf. A red radius points up to a paint mark and an arrow shows the box rolling right.",
    "id": 353
  },
  {
    "title": "The map pins on the swaying road",
    "kind": "Optical illusions",
    "level": "Easy",
    "intro": "Five printed sign bars appear to sway left and right. A teal map pin is drawn on each. A trainee says the pins must sway with the signs.",
    "questions": [
      "Could one taut vertical thread pass through all five pins? Are they all at the centers of their bars?"
    ],
    "hints": [
      "Trace just the pins while ignoring arrow tips.",
      "For the second question compare the sign bars’ endpoints between neighboring rows."
    ],
    "answer": "Yes to the thread; no to the centers.",
    "why": "Every pin is at the same horizontal coordinate, 284. The bars alternate between midpoint 270 and midpoint 295, so the pins even fall on opposite sides of those midpoints. The attachments create a misleading reference frame.",
    "figure": "p4o-pins.svg",
    "alt": "Five horizontal sign bars shift left and right in alternating rows. Each carries a teal pin.",
    "reveal": "p4o-pins-proof.svg",
    "revealAlt": "One vertical copper guide passes through all five pins despite the staggered signs.",
    "id": 354
  },
  {
    "title": "The alphabet that dropped its capital",
    "level": "Easy",
    "intro": "A brass directory gives these two consecutive entries: “Polish — nationality” and “polish — make shiny.” The proofreader insists there is one spelling on the board but two pronunciations in ordinary English. A replacement printer uses only block capitals.",
    "questions": [
      "What clue to pronunciation will vanish on the replacement? Which spoken distinction could you still hear with the lights off?"
    ],
    "hints": [
      "Notice the initial letter shapes before converting both labels to capitals.",
      "Say the nationality, then say the verb for buffing a shoe."
    ],
    "answer": "Initial capitalization disappears. The nationality begins with the vowel sound of “pole”; the verb begins like “pollen” in many accents.",
    "why": "The all-capitals printer produces POLISH twice. The glosses still communicate the meanings, and speech preserves the vowel distinction even when printed case cannot distinguish the entries.",
    "kind": "Lateral thinking",
    "id": 355
  },
  {
    "title": "The bellhop’s skipping carousel",
    "level": "Medium",
    "intro": "Twelve key hooks numbered 1 through 12 form a circle. From hook 1 a pointer repeatedly moves forward four hooks, wrapping after 12. The bellhop can change the fixed step to either 5 or 6 before starting a fresh round at 1.",
    "questions": [
      "Which new setting visits every hook before returning to 1? How many distinct hooks did the original setting reach?"
    ],
    "hints": [
      "Write the original path starting 1, 5, 9.",
      "A step that shares a factor with 12 can trap the pointer in a smaller cycle."
    ],
    "answer": "Use step 5. The original step reached three distinct hooks.",
    "why": "Step 4 gives 1, 5, 9, then 1. Step 6 alternates between 1 and 7. Step 5 gives 1, 6, 11, 4, 9, 2, 7, 12, 5, 10, 3, 8, then 1.",
    "kind": "Logic",
    "id": 356
  },
  {
    "title": "The two breakfast napkins",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "Two square napkins, each 4 cm on a side, lie flat with their edges parallel. Their overlap is a 2-by-2 square. Trace only the edges separating paper from bare table.",
    "questions": [
      "What area of table is covered? How long is the outline?"
    ],
    "hints": [
      "For area, count the overlap once.",
      "Four edge pieces of length 2 from the two original perimeters are inside the union."
    ],
    "answer": "28 square centimeters covered; 24 centimeters of outline.",
    "why": "The union has area 16 + 16 − 4 = 28. The two perimeters total 32; subtract four buried lengths of 2 to obtain 24.",
    "figure": "p4v-napkins.svg",
    "alt": "Two parallel four-unit squares offset downward and right by two units; the overlap at their adjacent corners is a two-unit square.",
    "id": 357
  },
  {
    "title": "The crescent cut with one punch",
    "kind": "Optical illusions",
    "level": "Medium",
    "intro": "A scrap of teal paper shows a crescent. It was made from one circular disk by removing everything covered by one circular punch of exactly the same radius. The tips are where the two circle edges met.",
    "questions": [
      "Was the punch center to the left or right of the original center? Is the straight line joining the two tips horizontal or vertical?"
    ],
    "hints": [
      "Ask which side of the original disk is missing.",
      "For equal circles, the common chord lies perpendicular to the line joining their centers."
    ],
    "answer": "The punch was to the right; the tips lie on a vertical line.",
    "why": "Most of the surviving paper lies at left, with the inward arc opening toward the right. The cutter and disk centers are level. Their tip-to-tip chord therefore runs vertically, halfway between the two centers.",
    "figure": "p4o-bite.svg",
    "alt": "A teal crescent with a curved outer left edge and a concave arc opening to the right.",
    "reveal": "p4o-bite-proof.svg",
    "revealAlt": "Outlines complete the two equal circles with the punch center on the right and both intersections on one vertical.",
    "id": 358
  },
  {
    "title": "A train that brings the view closer",
    "level": "Medium",
    "intro": "At the traveling theater, a miniature cart rolls toward the camera down a straight track. A fixed-size painted window on its side doubles its height in the image. The operator also zooms out until the window is back to its original apparent height. A distant church behind the cart now looks smaller relative to that window.",
    "questions": [
      "Why can the near window keep its old size while the distant church shrinks?"
    ],
    "hints": [
      "A zoom change applies to the entire picture. Moving the cart changes only one object’s distance.",
      "Separate the movement step from the later zoom step."
    ],
    "answer": "The cart’s approach enlarges the window alone. Zooming out then shrinks both images, cancelling the window’s enlargement while reducing the church.",
    "why": "A stationary camera sees the fixed church at the same angle before and after the cart moves. Zooming out reduces its image on the sensor. The cart has already gained the opposing increase in angular size.",
    "kind": "Lateral thinking",
    "id": 359
  },
  {
    "title": "The indexer’s seventeenth card",
    "level": "Hard",
    "intro": "A type drawer holds the letters A, A, B, B, C. The indexer prints every distinct five-letter arrangement and sorts the cards alphabetically, using A before B before C. Card 1 is AABBC.",
    "questions": [
      "What appears on card 17? Account for the cards that come before it."
    ],
    "hints": [
      "First count the arrangements beginning with A. The remaining letters there are A, B, B, C.",
      "Once the first letter is B, examine prefixes BAA, BAB and BAC in order."
    ],
    "answer": "BACAB.",
    "why": "Twelve cards start with A: the remaining four letters have 24/2 arrangements. Among the B cards, BAA can end in BC or CB; BAB can end in AC or CA. These take positions 13–16. The next prefix is BAC and its first ending is AB, making BACAB.",
    "kind": "Logic",
    "id": 360
  },
  {
    "title": "The caramel cube’s shortest ribbon",
    "kind": "Visual reasoning",
    "level": "Hard",
    "intro": "Fold the net into a cube with letters facing outward. A ribbon starts at the center of C and ends at the center of D, walking between centers of adjacent faces. It must make exactly two steps.",
    "questions": [
      "Which single intermediate letters can it visit?"
    ],
    "hints": [
      "C and D fold up from opposite edges of A.",
      "On a cube, how many distinct faces touch both members of an opposite pair?"
    ],
    "answer": "A, B, E or F.",
    "why": "C and D face away from one another after folding. The four remaining faces form the belt around that pair. Each is adjacent both to C and to D, so each makes one valid two-step route.",
    "figure": "p4v-confection.svg",
    "alt": "Cube net with B above A, C left of A, D right of A, E below A and F below E.",
    "id": 361
  },
  {
    "title": "Two stars and a missing center",
    "kind": "Optical illusions",
    "level": "Easy",
    "intro": "The jeweler calls A a solid star and B a thin wire star. Their interiors look very different. Examine the outlines and the paper-colored region at B’s center.",
    "questions": [
      "Does B have fewer outward tips? Could paper inside its center reach the surrounding paper without crossing a wire stroke?"
    ],
    "hints": [
      "Compare outward corners on the boundary in order.",
      "The wire forms a complete loop, even across the inward corners."
    ],
    "answer": "Both have five outward tips. The paper-colored interior of B is enclosed.",
    "why": "Identical outlines contain five outer points each. The wire is unbroken, so a path from the center to the outside must cross it. The shared background color can make those paper regions look connected.",
    "figure": "p4o-starshine.svg",
    "alt": "A filled teal five-point star and a matching teal outline star appear side by side.",
    "reveal": "p4o-starshine-proof.svg",
    "revealAlt": "Copper dots mark five outer corners on each star. The wire star still has a continuous closed boundary.",
    "id": 362
  },
  {
    "title": "The biscuit with a double address",
    "level": "Medium",
    "intro": "A biscuit maker has one flat, upright, two-color label: a gold swan on a black square. She copies it at twice the original width and twice the original height using the same proportions throughout. A customer now orders four times as much gold paint but only twice as much gold edging cord. Both orders are exactly right.",
    "questions": [
      "What two different features of the swan is the customer measuring?"
    ],
    "hints": [
      "Think of filling the bird and then tracing around its boundary.",
      "Doubling each length multiplies a small square of paint in two dimensions."
    ],
    "answer": "Paint covers the area of the bird. Cord follows the length of its outline.",
    "why": "Every little painted patch grows twofold in each direction, so the area becomes four times as large at the same paint thickness. Each piece of the outline is simply twice as long.",
    "kind": "Lateral thinking",
    "id": 363
  },
  {
    "title": "The treasurer’s change of boxes",
    "level": "Medium",
    "intro": "The treasurer has loose brass stars and empty boxes of the same size. Packing three loose stars earns one sealed small box, which is worth three stars. Three small boxes may be exchanged for one large box worth nine stars. She starts with 38 loose stars and makes exchanges until neither kind is possible.",
    "questions": [
      "How many large boxes, small boxes and loose stars remain? How many exchanges did she make?"
    ],
    "hints": [
      "First exchange as many groups of three loose stars as possible.",
      "Do the same with the resulting small boxes. Count the two exchange stages separately."
    ],
    "answer": "Four large boxes, zero small boxes and two loose stars. Sixteen exchanges.",
    "why": "Thirty-six loose stars produce twelve small boxes in twelve exchanges. The twelve small boxes produce four large boxes in four more. The two loose stars cannot be exchanged, and the new inventory still represents 38 stars.",
    "kind": "Logic",
    "id": 364
  },
  {
    "title": "The inspector’s misglazed tile",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "The design rules require an even number of teal tiles in every row and in every column. One tile has the wrong color. Rows and columns both start at 1 at the upper-left.",
    "questions": [
      "Which tile should change, and what will its new color be?"
    ],
    "hints": [
      "Find a row that fails the rule.",
      "Now find the only column that fails; a single correction must fix both."
    ],
    "answer": "Row 3, column 4 changes from teal to cream.",
    "why": "The row counts are 2, 2, 3 and 2. The column counts are 2, 2, 2 and 3. The two odd counts meet on a teal tile, so clearing it restores both.",
    "figure": "p4v-oddstitch.svg",
    "alt": "Teal positions by row: 1 and 4; 2 and 3; 1, 2 and 4; 3 and 4.",
    "id": 365
  },
  {
    "title": "The horizon in the three portholes",
    "kind": "Optical illusions",
    "level": "Medium",
    "intro": "An illustrator drew three views allegedly taken through the side of a stationary ship at the same instant. In this flat elevation the ship is upright, and all three pictures must show the same level horizon.",
    "questions": [
      "Which view has a correctly level horizon? Which other two disagree in opposite directions?"
    ],
    "hints": [
      "Use the edge of the page as a reference, instead of the circular frames.",
      "Compare the heights of both ends of each dark segment."
    ],
    "answer": "Only the center view is level. Left slopes down to the right; right slopes up to the right.",
    "why": "All three segments pass through the centers of their portholes, but that alone does not make them level. Only the center segment coincides along its full length with the proof’s horizontal guide.",
    "figure": "p4o-portholes.svg",
    "alt": "In a row of three circular portholes, dark horizon segments pass through their centers at subtly different tilts.",
    "reveal": "p4o-portholes-proof.svg",
    "revealAlt": "A copper level line touches the center of all three segments but overlays only the horizontal middle one.",
    "id": 366
  },
  {
    "title": "The singing bowl at the lantern fair",
    "level": "Hard",
    "intro": "In a lantern workshop, a performer lightly rubs a dry fingertip around a fixed glass bowl. It makes little sound. She wets the same finger and moves at the same average speed. This time the rim produces a steady musical note. In a close-up film the skin repeatedly catches, stretches, slips forward, and catches again.",
    "questions": [
      "What starts the note, and why can it sustain a single pitch even though the finger makes a continuous circle?"
    ],
    "hints": [
      "The close-up reveals a repeated action within the apparent steady motion.",
      "The rim has preferred vibration frequencies of its own."
    ],
    "answer": "Repeated sticking and slipping supplies energy to vibration of the glass rim. A resonant mode of the rim supplies the pitch.",
    "why": "Friction briefly drags the rim and skin together and then releases them. Many such small pushes sustain the rim’s vibration. The note need not equal the slow rate at which the finger completes an entire circuit.",
    "kind": "Lateral thinking",
    "id": 367
  },
  {
    "title": "The torch bearer’s four deliveries",
    "level": "Medium",
    "intro": "A handcart leaves the bakery at minute 0. It can carry two orders at once. On a run it visits one stall and returns, taking 5 minutes for the pier or 8 minutes for the hill. The pier orders are ready at minutes 0 and 6; the hill orders are ready at 0 and 2. A run may start only after every order it carries is ready. The baker wants the cart back after all deliveries.",
    "questions": [
      "What is the earliest finish time? Should the cart leave immediately?"
    ],
    "hints": [
      "Batching both hill orders and both pier orders uses only two runs. Count what happens if the cart instead serves one pier order alone at minute 0.",
      "If you use three or more runs, the shortest conceivable pattern includes two pier runs and one hill run."
    ],
    "answer": "Wait until minute 2, take both hill orders, and return at 10. Take both pier orders and return at 15.",
    "why": "A two-run solution needs both orders for each destination; the hill batch can leave at 2 and the pier batch at 6. Hill first finishes at 15, pier first at 19. Any three-run plan takes at least 5 + 5 + 8 = 18 minutes of travel alone.",
    "kind": "Logic",
    "id": 368
  },
  {
    "title": "The triangular pennant offcut",
    "kind": "Visual reasoning",
    "level": "Hard",
    "intro": "A cut joins the midpoints of the two sloping edges of a triangular pennant. The lower, four-sided piece has an area of 18 square centimeters.",
    "questions": [
      "How large was the uncut pennant?"
    ],
    "hints": [
      "The little top triangle is a scaled copy of the whole.",
      "A scale of one half in both dimensions means one quarter of the area."
    ],
    "answer": "24 square centimeters.",
    "why": "The top triangle occupies one quarter of the original area, so the lower piece occupies three quarters. If three quarters is 18, one quarter is 6 and the whole is 24.",
    "figure": "p4v-pennantstripe.svg",
    "alt": "A triangular pennant with a horizontal segment joining side midpoints. The region below the cut is marked 18 square centimeters.",
    "id": 369
  },
  {
    "title": "The wheel between two camera flashes",
    "kind": "Optical illusions",
    "level": "Hard",
    "intro": "A wheel has six perfectly identical spokes equally spaced. The second exposure puts a spoke ten degrees clockwise from each first-exposure spoke. No spoke is specially marked.",
    "questions": [
      "If the wheel moved less than one sixth of a turn, must it have moved clockwise? Name the two signed turns consistent with the pictures."
    ],
    "hints": [
      "A different spoke can occupy the position you think belongs to the original.",
      "Count the angular spacing of adjacent identical spokes."
    ],
    "answer": "Either 10° clockwise or 50° counterclockwise.",
    "why": "The spokes repeat every 60°. A counterclockwise turn of 50° gives the same set of endpoints as a clockwise turn of 10°. Both fit a movement smaller than 60°. The snapshots alone cannot follow an individual spoke.",
    "figure": "p4o-strobe.svg",
    "alt": "Two six-spoke wheels. A spoke was straight up in the first picture; in the second a spoke is ten degrees clockwise from up.",
    "reveal": "p4o-strobe-proof.svg",
    "revealAlt": "The same final spoke arrangement is labeled with both possible rotations, ten degrees clockwise and fifty counterclockwise.",
    "id": 370
  },
  {
    "title": "The visitor who could smell a photograph",
    "level": "Medium",
    "intro": "In one dark gallery a visitor smells oranges exactly when a photograph of an orange grove appears. The picture is a plain paper print in a sealed frame. A roll under the moving walkway has alternating exposed strips of scented wax and plain wax; a fixed brush grazes each passing strip and a fan blows across the brush toward the walkway. Before opening the frame, the curator stops just the roll and leaves the belt, fan and pictures running. The synchronized puffs cease.",
    "questions": [
      "What had kept the smell in time with the grove? If the roll stops on plain wax, why might the last puff linger anyway?"
    ],
    "hints": [
      "Look for a sequence with the same period as the pictures.",
      "Air already scented at the brush needs time to reach the visitor and disperse."
    ],
    "answer": "The passing scented strips periodically refreshed the brush, timed to the repeating photographs. Previously released vapor can remain in the air or on the brush.",
    "why": "The sealed frame need supply no scent. The moving roll creates a time pattern and the fan carries it. Stopping the roll removes that pattern, but stopping a source does not instantly remove vapor already traveling toward a visitor.",
    "kind": "Lateral thinking",
    "id": 371
  },
  {
    "title": "The tile cutter’s two prices",
    "level": "Medium",
    "intro": "A shop sells an uncut square tile for 12 coins. A straight cut all the way across one existing piece costs 2 coins. Several pieces cannot be stacked for one cut. A patron needs six equal rectangles arranged as two rows of three inside the original square, with no waste.",
    "questions": [
      "What minimum total should the patron pay, including the tile? Give a cutting plan."
    ],
    "hints": [
      "Whenever one existing piece is cut in two, the number of pieces rises by exactly one.",
      "Cut three equal strips, then halve each strip."
    ],
    "answer": "22 coins: 12 for the tile and 10 for five cuts.",
    "why": "Six finished pieces require at least five cuts from one starting piece. Two cuts make the three strips, and three further cuts halve them individually. The lower bound is attained.",
    "kind": "Logic",
    "id": 372
  },
  {
    "title": "The basket with the extra spoke",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "A weaver sends one ribbon round seven spokes, continuously alternating over and under at every encounter. On lap one she first goes over A, then under B, working clockwise.",
    "questions": [
      "On lap two, does the ribbon go over or under A? What would change if an eighth spoke were inserted between G and A before starting?"
    ],
    "hints": [
      "Keep counting encounters as you pass the starting point.",
      "A full lap changes the parity of the encounter count only when the spoke count is odd."
    ],
    "answer": "Under A on lap two. With an eighth spoke, lap two would go over A again.",
    "why": "With seven spokes the first two visits to A are encounters 1 and 8, which have opposite parity. With eight spokes they are encounters 1 and 9, both odd. The extra spoke changes how successive rows interlace at every position.",
    "figure": "p4v-barre.svg",
    "alt": "Seven evenly spaced basket spokes labeled A through G clockwise, beginning with A at the top.",
    "id": 373
  },
  {
    "title": "The striped paper behind a slit",
    "kind": "Optical illusions",
    "level": "Hard",
    "intro": "Only a thin horizontal slit is visible in each frame. The diagonal stripe fragments appear to slide right from the first to the second. The stripes are painted on a single rigid sheet.",
    "questions": [
      "Could the sheet have moved straight down with no sideways motion? Explain why the apparent movement of the fragments can differ from the motion of the sheet."
    ],
    "hints": [
      "The slit reveals new points of each stripe as the sheet moves.",
      "Follow where an upward-to-the-right stripe intersects a fixed horizontal line."
    ],
    "answer": "Yes. A downward move of the sheet carries the apparent crossing of each stripe to the right.",
    "why": "The downward shift brings a more rightward, originally higher part of each diagonal into the slit. The material points move down while the intersections with the stationary slit move right. The proof uncovers the full stripes.",
    "figure": "p4o-port.svg",
    "alt": "Two identical horizontal slits reveal pieces of diagonal lines. In the second frame the pieces have shifted right.",
    "reveal": "p4o-port-proof.svg",
    "revealAlt": "The covers are removed. Full parallel stripes in the second panel are translated downward; a vertical arrow shows the actual motion.",
    "id": 374
  },
  {
    "title": "A pointer on the wooden river",
    "level": "Hard",
    "intro": "An exhibition crank turns a painted wooden river beneath a fixed bridge. The river is a circular disk whose center is under the bridge’s central pillar. Two leaves fastened to the disk sit along the same painted radius. One leaf is twice as far from the center as the other. A reporter says one leaf is twice as fast and the other says they have the same speed.",
    "questions": [
      "Which precise measurement makes each reporter correct?"
    ],
    "hints": [
      "Both leaves belong to one rigid disk.",
      "Distinguish the angle swept per second from the length of arc covered per second."
    ],
    "answer": "The outer leaf has twice the linear speed; both have the same angular speed.",
    "why": "In one turn the outer leaf covers a circumference twice as long, in the same time. An observer timing a fixed angle or an entire revolution gets exactly the same rate for both.",
    "kind": "Lateral thinking",
    "id": 375
  },
  {
    "title": "The little town’s equal chimes",
    "level": "Hard",
    "intro": "At the toy town square a musician has three distinct chimes, low, middle and high. She plays a sequence of four notes. Consecutive notes may not match and she must use all three chimes somewhere.",
    "questions": [
      "How many different four-note tunes can she play? Reversing a tune generally counts as another tune."
    ],
    "hints": [
      "First count all four-note sequences that avoid an immediate repeat.",
      "Subtract tunes that use exactly two chimes. For each chosen pair only two alternating sequences are possible."
    ],
    "answer": "18 tunes.",
    "why": "The first note has three choices and each later note has two, making 24. Choose a pair of chimes in three ways; alternating that pair can begin on either chime, giving six tunes to remove. One-chime tunes already violate the repeat rule.",
    "kind": "Logic",
    "id": 376
  },
  {
    "title": "Three spectators on a bench",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "Six numbered seats form a straight row. Three identical reservation cards must be placed so no two cards occupy neighboring seats. The bench ends are not neighbors.",
    "questions": [
      "How many distinct sets of occupied seats can the usher choose?"
    ],
    "hints": [
      "If seat 1 is empty, see how tightly the remaining three cards must fit.",
      "If seat 1 is occupied, list the next possible marked seat."
    ],
    "answer": "Four sets: 135, 136, 146 and 246.",
    "why": "Without seat 1, the only pattern is 2,4,6. With seat 1, the next marked seat can be 3 followed by 5 or 6, or 4 followed only by 6. No later start leaves enough space.",
    "figure": "p4v-emptyarmrest.svg",
    "alt": "Six seats in one horizontal row numbered 1 to 6.",
    "id": 377
  },
  {
    "title": "The postcard you can look around",
    "kind": "Optical illusions",
    "level": "Hard",
    "intro": "Two views from slightly different eye positions are lined up on the same distant ridge. The three little flags are fixed in a model. In this setup a nearer object shifts more against the ridge.",
    "questions": [
      "Rank the flags from nearest to farthest. Which single view would let you measure that shift?"
    ],
    "hints": [
      "Compare each pole to its own location within the other picture frame.",
      "The copper flag moves much more than the teal flag."
    ],
    "answer": "Copper, gold, teal. Neither view alone measures the shift.",
    "why": "The copper pole shifts 39 drawing units, gold 17 and teal 4 against the fixed backdrop. Comparing the two viewpoints supplies the parallax; pole sizes are not needed.",
    "figure": "p4o-parallax.svg",
    "alt": "Teal, gold and copper flags appear over the same ridge in a pair of frames; their horizontal positions differ between views.",
    "reveal": "p4o-parallax-proof.svg",
    "revealAlt": "Three colored horizontal strokes in the right-eye view mark the relative shifts, longest for copper.",
    "id": 378
  },
  {
    "title": "The coaster that escaped its pencil line",
    "level": "Hard",
    "intro": "A performer traces the rim of a round coaster on paper and draws a small arrow on the coaster pointing straight up the page. Keeping the coaster flat, she rolls its edge all the way around the outside of a fixed circular tin of exactly the same radius, without slipping. It returns to its starting position. A witness says the arrow rotated only once because the tin has one circumference.",
    "questions": [
      "How many full turns did the arrow make relative to the page? Where did the witness lose a turn?"
    ],
    "hints": [
      "Track the center of the moving coaster. Its distance from the fixed center is two radii.",
      "For rolling without slip, the center’s path length equals the coaster circumference times the number of turns."
    ],
    "answer": "Two full turns. The center travels around a circle of radius twice the tin’s radius.",
    "why": "If each radius is r, the center covers 4πr while a rolling turn accounts for 2πr. The witness counted one wrap relative to the turning line of centers; that line itself revolves once relative to the page.",
    "kind": "Lateral thinking",
    "id": 379
  },
  {
    "title": "The patchwork lantern windows",
    "level": "Hard",
    "intro": "Nine windows make a three-by-three square. From top to bottom the rows contain 2, 1 and 2 lit windows. From left to right the columns contain 1, 2 and 2. The middle window is lit and the upper-left window is dark.",
    "questions": [
      "Give the entire pattern, one row at a time."
    ],
    "hints": [
      "The middle row is now complete. What must fill the top row?",
      "Subtract what the first two rows already contribute from each column total."
    ],
    "answer": "Dark–lit–lit; dark–lit–dark; lit–dark–lit.",
    "why": "The middle is its row’s single light. The two top lights must take the other two positions beside the dark upper-left. The columns then still need one light, zero lights and one light respectively, fixing the bottom row.",
    "kind": "Logic",
    "id": 380
  },
  {
    "title": "The paper mountain’s third ridge",
    "kind": "Visual reasoning",
    "level": "Hard",
    "intro": "A sign maker replaces each straight segment by four segments, each one third of its former length, with a little triangular peak in the middle. Round 0 is one 27 cm line. Repeat the replacement on every segment.",
    "questions": [
      "After three rounds, how many segments are there and what is their combined length?"
    ],
    "hints": [
      "Track the number of pieces separately from the length of each piece.",
      "Each round multiplies the count by four and divides the individual length by three."
    ],
    "answer": "64 segments, with combined length 64 cm.",
    "why": "The counts go 1, 4, 16, 64. Individual lengths go 27, 9, 3, 1 cm. At round 3 there are 64 lengths of 1 cm each.",
    "figure": "p4v-toothed.svg",
    "alt": "A straight line is followed by its replacement: horizontal third, rising third, falling third and horizontal third.",
    "id": 381
  },
  {
    "title": "The customs clerk’s broken animal stamp",
    "kind": "Optical illusions",
    "level": "Easy",
    "intro": "The customs clerk dropped a paper-cut stamp. Pale seams now divide it into islands of ink. Group the outside edges and ignore the narrow cracks.",
    "questions": [
      "What animal is suggested? Name two outside features that identify it without using an eye or a nose."
    ],
    "hints": [
      "First look for two pointed projections near the upper edge.",
      "Follow the long narrow part that curls up on the right."
    ],
    "answer": "A cat, suggested by pointed ears and the curling tail.",
    "why": "The cracks encourage the eye to read the print as separate polygons. Bridging them restores the silhouette of a seated cat; eye dots in the reveal only confirm what the contour already suggests.",
    "figure": "p4o-cat.svg",
    "alt": "Teal pieces share a broken outside contour, with two points at the top and a long narrow curling stroke at the right.",
    "reveal": "p4o-cat-proof.svg",
    "revealAlt": "The cream seams disappear, revealing a cat with pointed ears and a raised curved tail.",
    "id": 382
  },
  {
    "title": "A photo finish for the front wheel",
    "level": "Hard",
    "intro": "At the toy velodrome a wheel rolls on a level track without sliding. Two specks of luminous paint lie on opposite points of the rim, one momentarily at the top and the other at the bottom. The axle moves to the right at 1 m/s. Relative to the axle, the rim also moves at 1 m/s.",
    "questions": [
      "At this instant which speck is stationary relative to the track, and how fast is the other moving?"
    ],
    "hints": [
      "Add the axle’s velocity to each speck’s velocity around the axle.",
      "For a right-rolling wheel the top of the rim moves right relative to the axle."
    ],
    "answer": "The bottom speck is instantaneously stationary; the top speck moves right at 2 m/s.",
    "why": "The bottom’s leftward 1 m/s cancels the axle’s rightward 1 m/s. Both velocities point right at the top. The stationary speck starts moving again as soon as it leaves the point of contact.",
    "kind": "Lateral thinking",
    "id": 383
  },
  {
    "title": "The first empty display bowl",
    "level": "Medium",
    "intro": "Two bowls start with 11 and 7 shells. A move takes exactly three shells from one bowl and drops one of those into the other bowl; the other two are packed away. You may move only from a bowl containing at least three.",
    "questions": [
      "If you continue until neither bowl can supply three, what must be left in each?"
    ],
    "hints": [
      "The difference between the two counts starts at 4; each move changes it by 4 or −4. What differences are possible at the end?",
      "For a second invariant, give a shell in the first bowl a score of three and a shell in the second bowl a score of one. Which multiples of eight can that total reach at the end?"
    ],
    "answer": "Two shells in each bowl.",
    "why": "At the end both counts are 0, 1 or 2. Their difference is divisible by four because the initial difference is 4 and each move changes it by four. Hence they finish equal. Three times the first count plus the second starts at 40 and changes by either −8 or zero, so it stays divisible by eight. Equal counts of one would score 4 and are impossible. Equal counts of zero cannot follow a last move that deposits a shell. Only 2 and 2 remain. Each move packs two shells away, so play must end.",
    "kind": "Logic",
    "id": 384
  },
  {
    "title": "The gallery guards who can wave",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "A guard can see another only along a straight row or column with no dark pillar between them. Another guard also blocks the view beyond that guard.",
    "questions": [
      "How many unordered pairs of guards can wave to one another?"
    ],
    "hints": [
      "Count horizontal pairs first and then vertical pairs.",
      "Along the leftmost column count consecutive guards, not every possible pair."
    ],
    "answer": "Five pairs.",
    "why": "Horizontally A–B, C–D and E–F are visible. In the first column A–C and C–E can wave; C blocks A–E. B and F are separated by pillars. No other two guards share an unobstructed line.",
    "figure": "p4v-docents.svg",
    "alt": "Grid rows A..B., .#.#., C...D, .###., E..F.; dots are open squares, number signs are pillars.",
    "id": 385
  },
  {
    "title": "The moon phases in the frieze",
    "kind": "Optical illusions",
    "level": "Easy",
    "intro": "The frieze uses the same crescent repeated in three rows. A visitor standing at the opposite wall thinks the whole middle row must have been shifted by half a tile.",
    "questions": [
      "Could a sideways translation alone turn the top row’s crescents into the middle row’s? Which two rows have the same facing?"
    ],
    "hints": [
      "Choose just one endpoint pair and the hollow curve between them.",
      "A translation moves ink without changing which side holds the hollow."
    ],
    "answer": "No. The top and bottom hollows open right; the middle ones open left.",
    "why": "Removing the surrounding repetition shows the difference in handedness. Sliding a crescent preserves which way its hollow faces. A reflection or a half-turn can reverse the facing.",
    "figure": "p4o-moonphase.svg",
    "alt": "Three rows of dark crescents; in the middle row the hollows face the opposite direction from those above and below.",
    "reveal": "p4o-moonphase-proof.svg",
    "revealAlt": "Copper arrows point toward the open side of each row: right, left, right.",
    "id": 386
  },
  {
    "title": "The tailor who shortened an inch",
    "level": "Medium",
    "intro": "A stage tailor needs a hatband just a little shorter than the old one. She measures the old band as 20 divisions with a stretched elastic ruler. She then releases the ruler to its shorter ordinary length and cuts new unstretchable ribbon at the same 20-division mark. The original band itself never changes length.",
    "questions": [
      "Is the replacement longer or shorter? Does the result rely on the ruler slipping while she cuts?"
    ],
    "hints": [
      "Compare the physical distances between successive marks in the two states.",
      "The number of divisions stays fixed while the size of each division changes."
    ],
    "answer": "Shorter, even if the ruler is perfectly still while she cuts.",
    "why": "The first measurement uses 20 long intervals. The cut uses 20 shorter ones. Matching readings do not match lengths when the measuring unit itself has changed.",
    "kind": "Lateral thinking",
    "id": 387
  },
  {
    "title": "The pastry relay’s paper flags",
    "level": "Hard",
    "intro": "Four runners A, B, C and D run clockwise laps independently. A records an order of three handoffs: first the red flag went to B, then the blue to C, then the red to D. C remembers watching the gold flag reach A sometime after the blue reached C. There was one handoff of each mentioned event and no others.",
    "questions": [
      "How many chronological orders fit? Name a fact about the last handoff that both possible histories share."
    ],
    "hints": [
      "Red-to-B precedes blue-to-C. Both the gold handoff and the second red handoff must follow blue-to-C.",
      "The last two events have no known order relative to one another."
    ],
    "answer": "Two orders. The last event is either gold to A or red to D; it cannot be blue to C or red to B.",
    "why": "Red to B and blue to C must come first and second. The remaining two handoffs can occur in either order, giving exactly two histories.",
    "kind": "Logic",
    "id": 388
  },
  {
    "title": "The puddle in the printed courtyard",
    "kind": "Visual reasoning",
    "level": "Easy",
    "intro": "Teal squares are waterproof. A drop spreads across cream squares by shared edges only. Drip water onto the central ring of cream, just inside the teal wall.",
    "questions": [
      "How many cream squares get wet, and can the drop reach the paper edge?"
    ],
    "hints": [
      "Treat the square wall as continuous.",
      "The interior measures three by three, with one teal tile in its middle."
    ],
    "answer": "Eight squares get wet; the edge stays dry.",
    "why": "Inside the wall there are 9 positions. One is teal, so the other 8 form one connected cream loop. None shares a cream edge with the outer margin.",
    "figure": "p4v-wetpaper.svg",
    "alt": "Seven-by-seven sheet with a five-by-five square wall of teal one cell inside its edge, and a single teal square at the center.",
    "id": 389
  },
  {
    "title": "The necklace hidden in a necklace",
    "kind": "Optical illusions",
    "level": "Medium",
    "intro": "The display shows a continuous oval of beads repeating teal, copper, gold. If you join only teal beads in their order around the oval, the eye discovers a second figure.",
    "questions": [
      "How many sides will the new figure have? How many beads lie strictly between consecutive teal corners along the original oval?"
    ],
    "hints": [
      "Follow one color all the way round before counting again.",
      "Every group of three beads supplies exactly one corner."
    ],
    "answer": "Eight sides, with two beads between consecutive teal corners.",
    "why": "There are 24 positions. Taking every third one gives eight distinct vertices before returning to the first. Copper and gold lie between each neighboring pair of teal vertices. The oval stretches the resulting octagon.",
    "figure": "p4o-necklace.svg",
    "alt": "A ring of 24 beads repeats teal, copper and gold around an ellipse.",
    "reveal": "p4o-necklace-proof.svg",
    "revealAlt": "Thin teal lines connect the eight teal beads into an elongated octagon.",
    "id": 390
  },
  {
    "title": "The silent column in the playbill",
    "level": "Medium",
    "intro": "A compositor’s line begins with a space, followed by the seven printed letters CURTAIN. The typesetter uses equal-width cells, one for each letter or space. A second proof has exactly the same visible letters but ends one cell earlier, and still has eight cells in all. Nothing was squeezed and the paper did not shift.",
    "questions": [
      "Where can the blank cell have gone if the seven letters still touch one another in order?"
    ],
    "hints": [
      "Consider the line’s occupied cells rather than the letters’ shapes.",
      "Seven adjoining letters in a line of eight can begin only in cell 1 or cell 2."
    ],
    "answer": "The blank moved to the end of the line.",
    "why": "The first proof fills cells 2–8. Ending one cell earlier puts CURTAIN in cells 1–7. The eighth cell remains, but it now contains trailing space that has no ink.",
    "kind": "Lateral thinking",
    "id": 391
  },
  {
    "title": "The puppeteer who wins the dress rehearsal",
    "level": "Hard",
    "intro": "Each rehearsal scene independently has an equal chance of ending with a bell or a bow. They stop as soon as either ending has occurred twice. The first scene ended with a bell.",
    "questions": [
      "What is the chance the rehearsal ends with bells winning? Is there more than one way for bells to win?"
    ],
    "hints": [
      "The next scene can end the whole rehearsal immediately.",
      "If the next scene is a bow, the third scene decides the tie."
    ],
    "answer": "Three quarters. Bells can win after two scenes or after three.",
    "why": "Given the first bell, a second bell wins immediately with chance 1/2. Bow then bell contributes another 1/2 × 1/2 = 1/4. The only way for bows to win is two consecutive bows.",
    "kind": "Logic",
    "id": 392
  },
  {
    "title": "The stage tour that cannot start",
    "kind": "Visual reasoning",
    "level": "Hard",
    "intro": "On the nine-square stage, a dancer wants to visit each cell once, moving only between cells with a shared edge. The manager wants the tour to start at B and finish at H. The E on the plan is the stage center.",
    "questions": [
      "Can those endpoints work? Give a reason that covers every possible route."
    ],
    "hints": [
      "Color the stage like a checkerboard.",
      "Which color needs the extra visit in a route through nine cells?"
    ],
    "answer": "No. B and H are on the four-cell color; the endpoints must be on the five-cell color.",
    "why": "A nine-cell route alternates five visits of one color with four of the other. The first and last visits must belong to the five-cell group A, C, E, G, I. B and H belong to the other group.",
    "figure": "p4v-rehearsal.svg",
    "alt": "Nine cells in three rows A B C, D E F, G H I. Proposed endpoints B and H are top and bottom middle.",
    "id": 393
  },
  {
    "title": "The ticket inspector’s brush alphabet",
    "kind": "Optical illusions",
    "level": "Medium",
    "intro": "The printer used little bundles of strokes all in the same ink. Some bundles lean the other way. Treat those as dark tiles and the common orientation as blank paper.",
    "questions": [
      "Which platform number appears? How many reversed bundles make it?"
    ],
    "hints": [
      "Ignore the colors; the two classes differ only in slant.",
      "Read the middle three columns over the five middle rows."
    ],
    "answer": "Platform 2, made from eleven reversed bundles.",
    "why": "The five digit rows contain 3, 1, 3, 1 and 3 reversed tiles. Their top, middle and bottom bars join at upper right and lower left to draw a block 2.",
    "figure": "p4o-two.svg",
    "alt": "Seven rows of seven hatched patches; selected patches lean in the opposite direction from the rest.",
    "reveal": "p4o-two-proof.svg",
    "revealAlt": "The reversed patches are solid copper, revealing a block-shaped numeral 2.",
    "id": 394
  },
  {
    "title": "The umbrella that casts two circles",
    "level": "Hard",
    "intro": "A sculptor holds two rigid hoops of equal diameter, one a little nearer to a point-like lamp than the other. They lie parallel to a white wall and face the lamp directly. Only one hoop casts a neat shadow exactly twice its own diameter. The lamp is 3 meters from the wall.",
    "questions": [
      "How far from the lamp is that hoop? Would sliding it toward the wall make the shadow grow or shrink?"
    ],
    "hints": [
      "Trace the rays from the lamp past the two edges of a hoop.",
      "Similar triangles give shadow diameter divided by hoop diameter = lamp-to-wall distance divided by lamp-to-hoop distance."
    ],
    "answer": "1.5 meters from the lamp. Its shadow shrinks as the hoop slides toward the wall.",
    "why": "At half the lamp-to-wall distance, the cone of rays doubles in width by the time it reaches the wall. Moving the hoop farther from the source intercepts a narrower angle for that same hoop diameter.",
    "kind": "Lateral thinking",
    "id": 395
  },
  {
    "title": "The watchmaker’s fifteenth tick",
    "level": "Hard",
    "intro": "A toy watch starts with the number 1 recorded. Each tap records the sum of any two numbers already recorded; using a number twice is allowed. Old numbers remain available. The watchmaker wants to record exactly 15.",
    "questions": [
      "Show how five taps suffice. Why could four taps never suffice?"
    ],
    "hints": [
      "To get close to 15 in four taps, notice the largest possible number after three taps.",
      "To make 15 on tap four you would need 8 and 7 already present. Could three taps supply both?"
    ],
    "answer": "Five taps: record 2, 3, 6, 12, 15. Four taps are insufficient.",
    "why": "Three taps can reach at most 8. Thus the only possible two addends for 15 on the fourth tap are 7 and 8. To reach 8 in three taps every tap must double the current maximum: the recorded numbers would be 1, 2, 4, 8. The required 7 is missing.",
    "kind": "Logic",
    "id": 396
  },
  {
    "title": "The plaster casting’s borrowed layers",
    "kind": "Visual reasoning",
    "level": "Medium",
    "intro": "The three trays show a casting in horizontal slices. A colored cell represents one solid cube. Stack the slices without turning them. A miniature flag goes on the top face of every occupied column.",
    "questions": [
      "How many flags stand exactly two cubes above the table? How many cubes make up the model?"
    ],
    "hints": [
      "The middle slice covers every column of height two or more.",
      "Subtract any column that continues into the top layer before counting the two-cube flags."
    ],
    "answer": "Three flags at height two; twelve cubes in the model.",
    "why": "The bottom slice has seven cubes, the middle four and the top one. Of the four middle positions, one also has a top cube. That leaves three exposed middle cubes for flags.",
    "figure": "p4v-plasterlayers.svg",
    "alt": "Bottom rows ##., ###, .##; middle rows .#., .##, ..#; top rows empty, last cell colored, empty. Each # is one cube. Grids are shown in the same orientation.",
    "id": 397
  },
  {
    "title": "The wreath with a restless outer edge",
    "kind": "Optical illusions",
    "level": "Medium",
    "intro": "The beads around a clock wreath have different sizes. The outer silhouette swells twice around the rim. The question concerns the path through bead centers.",
    "questions": [
      "Are those centers on a circle, an ellipse, or a path that swells with the bead sizes? What causes the uneven outside edge?"
    ],
    "hints": [
      "Pick out the center of each bead, ignoring its radius.",
      "Compare pairs on opposite clock positions."
    ],
    "answer": "The centers lie on one circle. Different bead radii change the outside edge.",
    "why": "Every bead center sits at the same distance from the clock center and at a 30-degree step. Adding the local bead radius to that distance gives a different outer reach. The reveal traces the circle through the bead centers.",
    "figure": "p4o-wreath.svg",
    "alt": "Twelve differently sized colored beads form a clock wreath; size grows in two cycles around the perimeter.",
    "reveal": "p4o-wreath-proof.svg",
    "revealAlt": "A thin circle passes through the center dot of every bead.",
    "id": 398
  },
  {
    "title": "The bulbs that spell the encore",
    "level": "Medium",
    "intro": "Four separate enamel letters read LIVE above the stage. The stage manager wants a word meaning “bad” for the villain’s entrance and a word meaning “a face covering” for the wedding scene. She can rearrange the four letters but may never invert, replace or partially cover one.",
    "questions": [
      "Find two possible words for the villain’s entrance and the word for the wedding. Does any of them keep the first two letters of LIVE adjacent in their original order?"
    ],
    "hints": [
      "Try E or V as a starting letter.",
      "Look for L immediately followed by I after you have found both words."
    ],
    "answer": "EVIL and VILE for the villain, VEIL for the wedding. None keeps LI together.",
    "why": "EVIL and VILE can each mean bad, and a VEIL is a face covering. Each word uses the four original letters exactly once. In all three, I comes before L, so the original adjoining pair LI disappears.",
    "kind": "Lateral thinking",
    "id": 399
  },
  {
    "title": "Four cards for the cabinet’s four hundredth night",
    "level": "Hard",
    "intro": "At closing, the cabinet keeper unhooks four painted cards. PINE has three stars, GLOW one, FOAM four and QUAY two. To recreate tonight’s sign, place the cards in four slots from left to right, each exactly once. The stars at the two ends totaled five. Those in slots 2 and 4 totaled three. The star counts in the two middle slots differed by three. A tiny note underneath reads: “Take letter 1 of card 1, letter 2 of card 2, letter 3 of card 3, and letter 4 of card 4.”",
    "questions": [
      "Rebuild the row. What invitation does the sign leave you?"
    ],
    "hints": [
      "The counts in slots 2 and 4 must be 1 and 2 in some order. Try each possibility at the right-hand end.",
      "If the last card had one star, the end sum would put four at the left. Check whether the two remaining middle counts would differ by three."
    ],
    "answer": "PINE, GLOW, FOAM, QUAY. The invitation is PLAY.",
    "why": "If slot 4 has one star, the numbers in slots 1–4 must be 4, 2, 3, 1, whose middle counts differ by one. If slot 4 has two stars, they are 3, 1, 4, 2 and the middle difference is three. The diagonally chosen letters are P from PINE, L from GLOW, A from FOAM and Y from QUAY.",
    "kind": "Logic",
    "id": 400,
    "figure": "p4l-cabinetcards.svg",
    "alt": "Four loose painted cards in no particular order: FOAM has four stars, QUAY two, PINE three and GLOW one.",
    "reveal": "p4l-cabinetcards-proof.svg",
    "revealAlt": "The restored sign reads PINE, GLOW, FOAM, QUAY. A gold frame around the first, second, third and fourth letters in sequence reveals PLAY."
  }
];
