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
  }
];
