const puzzles = [
  {
    "id": 1,
    "title": "The twice-used ticket",
    "kind": "Detective skills",
    "level": "Easy",
    "intro": "The last tender carried six passengers. The purser counted six punched tickets, but the ticket drawer came up one fare short. Someone had used the same ticket twice.",
    "tables": [
      [
        "Tender register",
        [
          "Passenger",
          "Issue desk",
          "Serial",
          "Punch"
        ],
        [
          [
            "Ada Wynn",
            "East",
            "6038",
            "Star"
          ],
          [
            "Jules Pike",
            "West",
            "6083",
            "Moon"
          ],
          [
            "Nell Orme",
            "East",
            "6083",
            "Star"
          ],
          [
            "Leon Fox",
            "East",
            "6038",
            "Moon"
          ],
          [
            "Cora Lane",
            "West",
            "6038",
            "Star"
          ],
          [
            "Bea Finch",
            "East",
            "6308",
            "Moon"
          ]
        ]
      ]
    ],
    "clues": [
      "Each desk starts its own sequence. A ticket is identified by its issue desk AND its four-digit serial.",
      "The punch shows the boarding gate. Both gates accept tickets from either desk. Rows are in boarding order."
    ],
    "questions": [
      "Which two passengers presented the same ticket?",
      "Which tempting match can you rule out, and why?"
    ],
    "answer": "Ada Wynn and Leon Fox.",
    "why": "Both presented East 6038. Their different punches tell us they boarded at different gates. Cora also had 6038, but hers was issued at West. Jules and Nell likewise share a serial but have different issue desks."
  },
  {
    "id": 2,
    "title": "Six minutes at Bell Quay",
    "kind": "Whodunit",
    "level": "Medium",
    "intro": "At 9:20 the tide bell rang over Bell Quay. A minute later the night porter found the harbor surveyor dead in the locked chart room. A torn strip from a recorder roll was still curling out of the machine.",
    "tables": [
      [
        "Recorder strip",
        [
          "Event",
          "Clock reading"
        ],
        [
          [
            "Surveyor answers a live question by intercom",
            "21:16"
          ],
          [
            "Chart-room door opens from outside",
            "21:18"
          ],
          [
            "Same door opens from inside",
            "21:20"
          ]
        ]
      ],
      [
        "Witnessed continuously",
        [
          "Person",
          "Harbor time"
        ],
        [
          [
            "Ellis, at the ticket hatch",
            "21:12–21:16"
          ],
          [
            "Mara, in the engine room",
            "21:18–21:22"
          ],
          [
            "Ivo, in the signal loft",
            "21:10–21:18"
          ]
        ]
      ]
    ],
    "clues": [
      "The recorder runs exactly three minutes fast. Witnesses used the harbor clock.",
      "The surveyor was alone when he answered. The fatal blow was delivered in person by the single visitor who entered next. The door was the only way in.",
      "All three stations are one minute’s walk from the chart room. The three people in the witness log are the only suspects."
    ],
    "questions": [
      "Who could have delivered the blow?",
      "Reconstruct the visit in harbor time. Which alibis cover the visitor’s entry?"
    ],
    "answer": "Mara was the only possible visitor.",
    "why": "Subtract three minutes from each strip reading. The surveyor spoke at 21:13, the visitor entered at 21:15 and left at 21:17. Ellis and Ivo were both under observation at 21:15. Mara could leave at 21:17 and reach the engine room just as her alibi began at 21:18."
  },
  {
    "id": 3,
    "title": "Parcels on the platform",
    "kind": "Logic",
    "level": "Medium",
    "intro": "A fog delay separated three travelers from their parcels. Match each traveler to a parcel and a collection time. Each parcel and time was used once.",
    "clues": [
      "Alma collected immediately before the traveler with the hatbox.",
      "The map tube left before Bram did.",
      "Cleo did not take the first slot.",
      "The satchel was the last parcel collected.",
      "Bram came after Cleo."
    ],
    "tableform": {
      "rows": [
        "Alma",
        "Bram",
        "Cleo"
      ],
      "cols": [
        [
          "Parcel",
          "Hatbox",
          "Map tube",
          "Satchel"
        ],
        [
          "Collection",
          "8:10",
          "8:20",
          "8:30"
        ]
      ]
    },
    "answer": "8:10 — Alma, map tube. 8:20 — Cleo, hatbox. 8:30 — Bram, satchel.",
    "why": "Cleo was not first and Bram came after her, so Alma was first, Cleo second and Bram third. The hatbox followed Alma immediately. Bram had the last parcel, the satchel, leaving the map tube for Alma."
  },
  {
    "id": 4,
    "title": "Along the waterline",
    "kind": "Crossword",
    "level": "Easy",
    "intro": "Fill this harbor crossword. Every crossing shares a letter.",
    "entries": [
      {
        "x": 5,
        "y": 4,
        "dir": "Across",
        "word": "ANCHOR",
        "clue": "It holds its ground while the ship swings."
      },
      {
        "x": 5,
        "y": 3,
        "dir": "Down",
        "word": "GALE",
        "clue": "Wind that might keep a ferry in port"
      },
      {
        "x": 2,
        "y": 6,
        "dir": "Across",
        "word": "TIDE",
        "clue": "The harbor rises with it."
      },
      {
        "x": 10,
        "y": 1,
        "dir": "Down",
        "word": "STERN",
        "clue": "Where the wake begins"
      },
      {
        "x": 8,
        "y": 0,
        "dir": "Down",
        "word": "BERTH",
        "clue": "A bed or a place to dock"
      },
      {
        "x": 2,
        "y": 3,
        "dir": "Down",
        "word": "PORT",
        "clue": "Left side when facing the bow"
      },
      {
        "x": 4,
        "y": 6,
        "dir": "Down",
        "word": "DECK",
        "clue": "A ship’s floor"
      },
      {
        "x": 4,
        "y": 9,
        "dir": "Across",
        "word": "KEEL",
        "clue": "Backbone of a hull"
      },
      {
        "x": 6,
        "y": 7,
        "dir": "Down",
        "word": "REEF",
        "clue": "A shallow hazard on a nautical chart"
      },
      {
        "x": 0,
        "y": 4,
        "dir": "Across",
        "word": "BUOY",
        "clue": "Floating channel marker"
      }
    ]
  },
  {
    "id": 5,
    "title": "The purser’s inventory",
    "kind": "Word search",
    "level": "Medium",
    "intro": "Ten words from the crossing are tucked into this inventory. Find them in straight lines, in any of eight directions.",
    "grid": [
      "SEOFRMPEPTHR",
      "NUMKGENZINTE",
      "NFLLZGMCCMRH",
      "RJUIMHKJRAEM",
      "ECWEAENJANBI",
      "TCRETROPEIPD",
      "NEAXUIFLPFUH",
      "ACHBDUTFKERE",
      "LXBIISIQASSK",
      "DEMMINBWCTEJ",
      "JRRHQCSJHMRE",
      "FUWOCOMPASSU"
    ],
    "locations": {
      "LANTERN": [
        [
          0,
          8
        ],
        [
          0,
          2
        ]
      ],
      "MANIFEST": [
        [
          9,
          2
        ],
        [
          9,
          9
        ]
      ],
      "TICKET": [
        [
          9,
          0
        ],
        [
          4,
          5
        ]
      ],
      "PORTER": [
        [
          7,
          5
        ],
        [
          2,
          5
        ]
      ],
      "CABIN": [
        [
          1,
          5
        ],
        [
          5,
          9
        ]
      ],
      "WHISTLE": [
        [
          2,
          11
        ],
        [
          8,
          5
        ]
      ],
      "COMPASS": [
        [
          4,
          11
        ],
        [
          10,
          11
        ]
      ],
      "TAFFRAIL": [
        [
          9,
          9
        ],
        [
          2,
          2
        ]
      ],
      "BERTH": [
        [
          10,
          4
        ],
        [
          10,
          0
        ]
      ],
      "PURSER": [
        [
          10,
          5
        ],
        [
          10,
          10
        ]
      ]
    }
  },
  {
    "id": 6,
    "title": "The turned tray",
    "kind": "Detective skills",
    "level": "Medium",
    "intro": "Six museum pieces crossed the harbor in a fitted tray. The clerk sketched the tray on departure and again on arrival, standing at the opposite end. One piece had been exchanged.",
    "trays": [
      [
        "Departure",
        [
          "Anchor · 2",
          "Bell · 3",
          "Shell · 1",
          "Key · 4",
          "Coin · 2",
          "Ring · 3"
        ]
      ],
      [
        "Arrival",
        [
          "Ring · 3",
          "Coin · 2",
          "Key · 4",
          "Shell · 1",
          "Bell · 2",
          "Anchor · 2"
        ]
      ]
    ],
    "clues": [
      "The dot number is the count of maker’s marks cut into the underside of each piece.",
      "A half-turn reverses both the order of the rows and the order within each row."
    ],
    "questions": [
      "Which piece was exchanged?",
      "Where did it sit in each sketch, and what changed?"
    ],
    "answer": "The bell was exchanged.",
    "why": "Mentally turn the arrival tray through 180°. Its bottom middle pocket lines up with the top middle pocket at departure. Both contain a bell, but the original had three maker’s marks and the replacement has two. The other five pieces match in both position and marks."
  },
  {
    "id": 7,
    "title": "The understudy’s cue",
    "kind": "Whodunit",
    "level": "Hard",
    "intro": "Everyone in the ship’s theater heard Vera sing her solo from 8:40 until the applause at 8:42. Vera said it proved she was onstage when the producer was killed in his office one deck below. Detective Sal picked a curl of blue paper off the sound desk and asked for the rehearsal score.",
    "tables": [
      [
        "Three exhibits",
        [
          "Exhibit",
          "What Sal found"
        ],
        [
          [
            "Rehearsal score",
            "In rehearsal Vera sang “silver sea” twice. For the show she changed the second line to “sleepless sea.”"
          ],
          [
            "House recording",
            "At 8:40 the audience heard “silver sea” twice. That vocal channel can carry either the live microphone or a recorded rehearsal."
          ],
          [
            "Blue paper roll",
            "Cabinets automatically punch the time and a unique cabinet number whenever a door opens. Cabinet 3 opened at 8:39 and shut at 8:42."
          ]
        ]
      ]
    ],
    "clues": [
      "Cabinet 3 is a shallow door built into the passage between the stage and the office. Its solid open door blocks that passage completely. The office has a second door to the promenade.",
      "The producer was alive at 8:39 and died at 8:41. Only Vera, Kit or Sol could have killed him, acting alone.",
      "Kit was seen at the stage end of the blocked passage continuously from 8:39 to 8:42. Sol played piano in full view of the audience throughout. Vera was last seen on the promenade at 8:38. The office was a one-minute walk from there."
    ],
    "questions": [
      "Who killed the producer, and by which door could they enter?",
      "Does the repeated lyric alone prove that a recording played? Explain what the other evidence adds."
    ],
    "answer": "Vera, through the promenade door.",
    "why": "The cabinet door kept Kit on the stage side, and Sol was in view. Only Vera could reach the office during the interval. The repeated lyric fits a rehearsal playback, but a live singer could also repeat an old lyric. It is the timing, the blocked passage and the eyewitnesses that eliminate the others. Since Vera was in the office for the killing, the solo heard through 8:42 was the rehearsal playback."
  },
  {
    "id": 8,
    "title": "Flags before the fog",
    "kind": "Logic",
    "level": "Hard",
    "intro": "Five flag hoists went up one at a time before the fog closed in. Reconstruct the signal log from earliest to latest. Each color appears once.",
    "clues": [
      "Amber rose exactly two places before Green.",
      "Blue rose immediately after White.",
      "Red rose before White.",
      "Green was neither first nor last."
    ],
    "tableform": {
      "rows": [
        "First",
        "Second",
        "Third",
        "Fourth",
        "Fifth"
      ],
      "cols": [
        [
          "Flag",
          "Amber",
          "Blue",
          "Green",
          "Red",
          "White"
        ]
      ]
    },
    "answer": "Amber → Red → Green → White → Blue.",
    "why": "Amber and Green can occupy slots 1 and 3 or slots 2 and 4. The latter leaves no adjacent spaces for White and Blue. With Amber first and Green third, the adjacent pair must fill slots 4 and 5. Red takes slot 2."
  },
  {
    "id": 9,
    "title": "In the evidence room",
    "kind": "Crossword",
    "level": "Medium",
    "intro": "Work the evidence-room crossword. Some clues point to the object, others to the job it does.",
    "entries": [
      {
        "x": 5,
        "y": 6,
        "dir": "Across",
        "word": "SEAL",
        "clue": "Evidence bag fastener"
      },
      {
        "x": 6,
        "y": 1,
        "dir": "Down",
        "word": "MOTIVE",
        "clue": "The reason behind a crime"
      },
      {
        "x": 8,
        "y": 5,
        "dir": "Down",
        "word": "ALIBI",
        "clue": "A suspect’s somewhere-else story"
      },
      {
        "x": 2,
        "y": 3,
        "dir": "Across",
        "word": "PRINT",
        "clue": "A whorl might be part of one."
      },
      {
        "x": 3,
        "y": 2,
        "dir": "Down",
        "word": "TRACE",
        "clue": "A tiny bit of evidence"
      },
      {
        "x": 6,
        "y": 2,
        "dir": "Across",
        "word": "OATH",
        "clue": "A witness takes one"
      },
      {
        "x": 8,
        "y": 0,
        "dir": "Down",
        "word": "NOTE",
        "clue": "A ransom demand may arrive as one."
      },
      {
        "x": 8,
        "y": 7,
        "dir": "Across",
        "word": "INK",
        "clue": "A forger might match its color."
      },
      {
        "x": 0,
        "y": 6,
        "dir": "Across",
        "word": "CLUE",
        "clue": "Something a sleuth follows up"
      },
      {
        "x": 6,
        "y": 9,
        "dir": "Across",
        "word": "ALIAS",
        "clue": "Another name on the register"
      },
      {
        "x": 0,
        "y": 6,
        "dir": "Down",
        "word": "CASE",
        "clue": "It may be closed at the end of an investigation."
      }
    ]
  },
  {
    "id": 10,
    "title": "The two-watch cipher",
    "kind": "Codebreaking",
    "level": "Medium",
    "intro": "A penciled instruction was tucked behind the station clock. Its author used two alternating shifts, one for each watch on duty.",
    "exhibit": "NTQP WSFJT YJJ VMKWF XGFV",
    "clues": [
      "A practice slip reads MAP → OFR. Each letter was moved forward in the alphabet, wrapping Z back to A.",
      "The first and third letters use the same shift. The second uses the other watch’s shift. Spaces do not advance the watch.",
      "Recover the instruction, then name the place to search."
    ],
    "questions": [
      "What does the note say?",
      "What are the two encoding shifts?"
    ],
    "answer": "Look under the third seat.",
    "why": "M to O is +2, A to F is +5, and P to R is +2. Decode each successive letter by subtracting 2, then 5, repeating across word breaks. For example, NTQP becomes LOOK. Search beneath the third seat."
  },
  {
    "id": 11,
    "title": "When the gull sat still",
    "kind": "Detective skills",
    "level": "Medium",
    "intro": "A print in the harbor master's album shows a gull on a yellow buoy. The photographer left the date but no time. The tiny details behind the gull are more useful than the bird.",
    "tables": [
      [
        "What the print shows",
        [
          "Feature",
          "Visible detail"
        ],
        [
          [
            "Swing bridge",
            "Span fully shut"
          ],
          [
            "Ferry mast",
            "Blue pennant flying"
          ],
          [
            "Bakery awning",
            "Still rolled up"
          ]
        ]
      ],
      [
        "That morning’s log",
        [
          "Feature",
          "Times"
        ],
        [
          [
            "Swing bridge",
            "Shut 08:02–08:16 and 08:28–08:45"
          ],
          [
            "Blue pennant",
            "Up 08:12–08:36"
          ],
          [
            "Bakery awning",
            "First unrolled at 08:10, rolled up at 08:24, unrolled again at 08:32"
          ]
        ]
      ]
    ],
    "clues": [
      "Treat each start time as included and each end time as excluded. The photograph was taken between 08:00 and 08:45."
    ],
    "questions": [
      "What is the narrowest possible time window?",
      "Which detail rules out the earlier period when the pennant and closed bridge also coincided?"
    ],
    "answer": "08:28 up to, but not including, 08:32.",
    "why": "The bridge and pennant agree from 08:12 to 08:16 and again from 08:28 to 08:36. During the first overlap the awning was already out. It was rolled up throughout the first four minutes of the second overlap."
  },
  {
    "id": 12,
    "title": "The borrowed ending",
    "kind": "Whodunit",
    "level": "Medium",
    "intro": "At breakfast the harbor gazette printed the ending of a mystery play that had yet to open. Its editor admitted that one of four readers had sent in a photograph of a rehearsal script. The playwright brought Detective Sal the distribution slips.",
    "clues": [
      "Each reader received one script and kept it until breakfast. No one else handled it. The gazette printed the photograph without alteration.",
      "In the photograph the last door is green, and the final speaker says “Good evening.”"
    ],
    "questions": [
      "Whose copy did the editor receive?",
      "Which detail would leave two possible sources if considered alone?"
    ],
    "answer": "Robin supplied the photograph.",
    "why": "The green door belongs to either Robin or Clem. The greeting appears in Robin’s and Tess’s copies. Only Robin’s copy has both. Either detail alone leaves two possibilities.",
    "tables": [
      [
        "Rehearsal copies",
        [
          "Reader",
          "Last door",
          "Final line"
        ],
        [
          [
            "Clem",
            "Green",
            "Good night"
          ],
          [
            "Tess",
            "Blue",
            "Good evening"
          ],
          [
            "Robin",
            "Green",
            "Good evening"
          ],
          [
            "Val",
            "Blue",
            "Good night"
          ]
        ]
      ]
    ]
  },
  {
    "id": 13,
    "title": "Bells through the mist",
    "kind": "Logic",
    "level": "Hard",
    "intro": "Six coast stations rang their call bells one at a time. Fog swallowed the lights, but the watch officer wrote down these relationships.",
    "clues": [
      "There is one entry between Beacon and Flint.",
      "Drift comes immediately after Gull.",
      "Drift comes neither first nor last.",
      "There is one entry between Gull and Beacon.",
      "Ash comes earlier than Drift."
    ],
    "tableform": {
      "rows": [
        "First",
        "Second",
        "Third",
        "Fourth",
        "Fifth",
        "Sixth"
      ],
      "cols": [
        [
          "Station",
          "Ash",
          "Beacon",
          "Cove",
          "Drift",
          "Flint",
          "Gull"
        ]
      ]
    },
    "answer": "Ash → Gull → Drift → Beacon → Cove → Flint.",
    "why": "Set aside the clue “Drift comes neither first nor last.” and fill the slots using the other clues. The possible orders, using the first letter of each name, are AGDBCF, FABCGD, FCBAGD. Apply the set-aside clue: only Ash → Gull → Drift → Beacon → Cove → Flint survives."
  },
  {
    "id": 14,
    "title": "The birds in the ferry log",
    "kind": "Word search",
    "level": "Easy",
    "intro": "The ferryman ticked off eight birds between first light and breakfast. Recover his list from the letter grid. Look across to the right, down, or diagonally down.",
    "grid": [
      "VFNPLOVERK",
      "JWIIHCGWAU",
      "GEZEJTZUSM",
      "PARIERXPLB",
      "WONRGENUPL",
      "NTNNRTNFZQ",
      "RIYYENVFJM",
      "RSFLTTKIEO",
      "XRVSTKTNPW",
      "PPVKEIDERW"
    ],
    "locations": {
      "PUFFIN": [
        [
          7,
          3
        ],
        [
          7,
          8
        ]
      ],
      "PLOVER": [
        [
          3,
          0
        ],
        [
          8,
          0
        ]
      ],
      "GANNET": [
        [
          0,
          2
        ],
        [
          5,
          7
        ]
      ],
      "HERON": [
        [
          4,
          1
        ],
        [
          0,
          5
        ]
      ],
      "EGRET": [
        [
          4,
          3
        ],
        [
          4,
          7
        ]
      ],
      "EIDER": [
        [
          4,
          9
        ],
        [
          8,
          9
        ]
      ],
      "GULL": [
        [
          6,
          1
        ],
        [
          9,
          4
        ]
      ],
      "TERN": [
        [
          5,
          2
        ],
        [
          2,
          5
        ]
      ]
    }
  },
  {
    "id": 15,
    "title": "The lamp keeper’s ledger",
    "kind": "Crossword",
    "level": "Easy",
    "intro": "In the lighthouse log, the keeper recorded everything from the flame to the fog. Rebuild her inventory from these clues.",
    "entries": [
      {
        "x": 2,
        "y": 5,
        "dir": "Across",
        "word": "BRASS",
        "clue": "Yellow alloy the keeper polishes"
      },
      {
        "x": 6,
        "y": 1,
        "dir": "Down",
        "word": "GLASS",
        "clue": "Material in a lantern pane"
      },
      {
        "x": 3,
        "y": 1,
        "dir": "Down",
        "word": "TOWER",
        "clue": "Tall structure supporting the lantern room"
      },
      {
        "x": 6,
        "y": 4,
        "dir": "Across",
        "word": "STAIR",
        "clue": "One step on the way up the tower"
      },
      {
        "x": 2,
        "y": 5,
        "dir": "Down",
        "word": "BEACON",
        "clue": "A light meant to guide travelers"
      },
      {
        "x": 0,
        "y": 1,
        "dir": "Across",
        "word": "SOOT",
        "clue": "Black deposit on a smoky chimney"
      },
      {
        "x": 1,
        "y": 0,
        "dir": "Down",
        "word": "FOG",
        "clue": "It can hide a headland from view"
      },
      {
        "x": 6,
        "y": 2,
        "dir": "Across",
        "word": "LENS",
        "clue": "Curved glass that bends a beam"
      },
      {
        "x": 2,
        "y": 9,
        "dir": "Across",
        "word": "OIL",
        "clue": "Fuel poured into an old lamp"
      },
      {
        "x": 10,
        "y": 3,
        "dir": "Down",
        "word": "PRISM",
        "clue": "Glass solid that fans white light into colors"
      },
      {
        "x": 0,
        "y": 7,
        "dir": "Across",
        "word": "FLAME",
        "clue": "What a gust can blow out"
      }
    ]
  },
  {
    "id": 16,
    "title": "The mirror alphabet",
    "kind": "Codebreaking",
    "level": "Easy",
    "intro": "The milliner found a label stitched inside a secondhand coat. The maker’s initials on a second label, AZ, had been signed ZA.",
    "exhibit": "XSVXP GSV IVW ORMRMT",
    "clues": [
      "Pair the first and last letters of the alphabet, then the second and next-to-last, and so on. Spaces stay put."
    ],
    "questions": [
      "What message did the sender leave?"
    ],
    "answer": "Check the red lining.",
    "why": "Read each letter through the paired alphabet. X is C, S is H, V is E, X is C and P is K. That gives CHECK, and the remaining groups identify the lining."
  },
  {
    "id": 17,
    "title": "A parcel light by two",
    "kind": "Detective skills",
    "level": "Easy",
    "intro": "The marine museum lends out its brass measuring weights in wooden cases. Four cases arrived sealed. The lender's list and the scales agree on three of them.",
    "tables": [
      [
        "Packing-room ledger",
        [
          "Case",
          "Empty case",
          "Listed contents",
          "Sealed weight"
        ],
        [
          [
            "Ash",
            "18 oz",
            "8 oz + 4 oz + 2 oz",
            "32 oz"
          ],
          [
            "Beech",
            "20 oz",
            "8 oz + 2 oz + 1 oz",
            "29 oz"
          ],
          [
            "Cedar",
            "17 oz",
            "4 oz + 2 oz + 1 oz",
            "24 oz"
          ],
          [
            "Elm",
            "19 oz",
            "8 oz + 4 oz + 1 oz",
            "32 oz"
          ]
        ]
      ]
    ],
    "clues": [
      "Exactly one listed weight was omitted before sealing. Every seal weighs too little to register. All other figures are accurate."
    ],
    "questions": [
      "Which case is short, and which weight is missing?",
      "What should that case have weighed?"
    ],
    "answer": "Beech is missing its 2 oz weight. It should weigh 31 oz.",
    "why": "Beech's listed weights add to 11 oz. Its empty case weighs 20 oz, giving 31 oz packed. The scale reads 29 oz, exactly 2 oz short. The other packed totals are 32, 24 and 32 oz as recorded."
  },
  {
    "id": 18,
    "title": "The last crossing to Gull Rock",
    "kind": "Whodunit",
    "level": "Hard",
    "intro": "Four people had a quarrel with the keeper of Gull Rock. At 18:00 he was killed in his cottage. Each suspect had to leave a witnessed appointment, reach the cottage, then arrive on time at another appointment. Sal drew up the shortest journeys for the prevailing tide.",
    "clues": [
      "Times in the table are verified. The first appointment occupied each suspect up to the stated end, and witnesses saw each arrive precisely on time for the next.",
      "Travel times are the shortest possible by any route. For this reconstruction allow one full minute in the cottage, from 18:00 until 18:01. One of the four acted alone."
    ],
    "questions": [
      "Who could be in the cottage for the required minute?",
      "Which suspect could get there on time but could not leave in time?"
    ],
    "answer": "Mei could make both journeys. Dara could make only the outward journey.",
    "why": "Mei could reach the cottage at 17:59 and her next appointment at 18:10. Dara could reach it at 17:58 but could not return before 18:08. Luca would reach the cottage at 18:01, and Ren at 18:02.",
    "tables": [
      [
        "Witnessed appointments and routes",
        [
          "Suspect",
          "First ends",
          "Minutes to cottage",
          "Minutes from cottage to next",
          "Next begins"
        ],
        [
          [
            "Dara",
            "17:49",
            "9",
            "7",
            "18:07"
          ],
          [
            "Luca",
            "17:52",
            "9",
            "5",
            "18:12"
          ],
          [
            "Mei",
            "17:51",
            "8",
            "9",
            "18:10"
          ],
          [
            "Ren",
            "17:55",
            "7",
            "4",
            "18:09"
          ]
        ]
      ]
    ]
  },
  {
    "id": 19,
    "title": "The single open wicket",
    "kind": "Logic",
    "level": "Hard",
    "intro": "The clerk opens exactly one ticket wicket each day, working in an unbroken repeating cycle of North, East, South, West. The market bell rings every third day. On Monday the North wicket opened and the bell rang.",
    "clues": [
      "The week has seven days. Today (Monday) is day zero. Neither cycle pauses for weekends."
    ],
    "questions": [
      "On which weekday will the bell next ring while West is open?",
      "When after that will West and the bell coincide again?"
    ],
    "answer": "Thursday, three days later. The following coincidence is on Tuesday, twelve days after that Thursday.",
    "why": "West opens on days 3, 7, 11 and 15. Bell days are 3, 6, 9, 12 and 15. The first overlap is day 3, Thursday. The combined pattern repeats every 12 days, so the next overlap is day 15, a Tuesday."
  },
  {
    "id": 20,
    "title": "Counter at the spice quay",
    "kind": "Word search",
    "level": "Medium",
    "intro": "A merchant’s packing slip lost its ruled lines in the rain. Ten spice names still run through the blotched letters. Look in any of eight directions.",
    "grid": [
      "FBLWDGHFVZYC",
      "BXANISEEUISE",
      "DPNOMANNICFN",
      "MSWMWAJNMZSH",
      "SAFFRONEMQPT",
      "NTRTPNZLUHYR",
      "IPZEUALRIUEQ",
      "MMWTVSPTTGKY",
      "UHMBHOHRNJCE",
      "CENPLHLIIFUW",
      "GJQQJOGCVKIJ",
      "YXKCAMUSUTAO"
    ],
    "locations": {
      "CINNAMON": [
        [
          9,
          2
        ],
        [
          2,
          2
        ]
      ],
      "SAFFRON": [
        [
          0,
          4
        ],
        [
          6,
          4
        ]
      ],
      "PAPRIKA": [
        [
          4,
          5
        ],
        [
          10,
          11
        ]
      ],
      "NUTMEG": [
        [
          5,
          5
        ],
        [
          0,
          10
        ]
      ],
      "GINGER": [
        [
          6,
          10
        ],
        [
          11,
          5
        ]
      ],
      "FENNEL": [
        [
          7,
          0
        ],
        [
          7,
          5
        ]
      ],
      "CLOVE": [
        [
          7,
          10
        ],
        [
          3,
          6
        ]
      ],
      "CUMIN": [
        [
          0,
          9
        ],
        [
          0,
          5
        ]
      ],
      "SUMAC": [
        [
          7,
          11
        ],
        [
          3,
          11
        ]
      ],
      "ANISE": [
        [
          2,
          1
        ],
        [
          6,
          1
        ]
      ]
    }
  },
  {
    "id": 21,
    "title": "Fresh off the press",
    "kind": "Crossword",
    "level": "Hard",
    "intro": "A folded broadside led Sal to a printer above the quay. Every answer belongs somewhere between the first line of type and the finished paper.",
    "entries": [
      {
        "x": 4,
        "y": 4,
        "dir": "Across",
        "word": "SERIF",
        "clue": "A little foot on the end of a letter stroke"
      },
      {
        "x": 6,
        "y": 4,
        "dir": "Down",
        "word": "ROLLER",
        "clue": "Cylinder that distributes color across type"
      },
      {
        "x": 4,
        "y": 4,
        "dir": "Down",
        "word": "SORT",
        "clue": "A single piece of metal type"
      },
      {
        "x": 5,
        "y": 0,
        "dir": "Down",
        "word": "CHASE",
        "clue": "The metal frame around a form of type"
      },
      {
        "x": 3,
        "y": 2,
        "dir": "Across",
        "word": "REAM",
        "clue": "Five hundred sheets ordered together"
      },
      {
        "x": 5,
        "y": 9,
        "dir": "Across",
        "word": "PRESS",
        "clue": "The machine that makes the impression"
      },
      {
        "x": 0,
        "y": 5,
        "dir": "Across",
        "word": "FOLIO",
        "clue": "A sheet folded once to make two leaves"
      },
      {
        "x": 2,
        "y": 3,
        "dir": "Down",
        "word": "GALLEY",
        "clue": "A long tray of type that shares its name with a shipboard kitchen"
      },
      {
        "x": 8,
        "y": 0,
        "dir": "Down",
        "word": "PROOF",
        "clue": "Trial impression marked up before the run"
      },
      {
        "x": 0,
        "y": 5,
        "dir": "Down",
        "word": "FONT",
        "clue": "One assortment of type in a given size and style"
      },
      {
        "x": 6,
        "y": 6,
        "dir": "Across",
        "word": "LEAD",
        "clue": "Metal strip once used to put space between lines"
      }
    ]
  },
  {
    "id": 22,
    "title": "A bell between the beats",
    "kind": "Detective skills",
    "level": "Easy",
    "intro": "An unlabeled strip from the ship's mechanical music box carries five intact notes. The steward wants to return it to the right tune before tonight's dance.",
    "tables": [
      [
        "Five-note fragment",
        [
          "Start",
          "Then",
          "Then",
          "Then",
          "End"
        ],
        [
          [
            "High",
            "Low",
            "Rest",
            "High",
            "High"
          ]
        ]
      ],
      [
        "Music-box catalogue",
        [
          "Tune",
          "Complete roll, left to right"
        ],
        [
          [
            "Widow’s Walk",
            "High · Low · Rest · High · Low · High · High"
          ],
          [
            "Sea Lantern",
            "Low · High · Low · Rest · High · High · Low"
          ],
          [
            "Tea at Dover",
            "High · High · Rest · Low · High · Low · Rest"
          ],
          [
            "Sailor’s Reel",
            "Low · Rest · High · Low · High · High · Rest"
          ]
        ]
      ]
    ],
    "clues": [
      "The strip was cut from a single straight run of the roll. High and low are pitches. A rest takes one beat. The arrow on the paper gives the reading direction."
    ],
    "questions": [
      "Which tune does the strip belong to?",
      "At which beat of that tune does the fragment start?"
    ],
    "answer": "Sea Lantern, starting at beat 2.",
    "why": "Starting at the second beat, Sea Lantern plays High, Low, Rest, High, High. Widow’s Walk begins promisingly but its fifth beat is Low. Neither of the other rolls carries the complete five-beat run."
  },
  {
    "id": 23,
    "title": "Three voices at the cloakroom",
    "kind": "Whodunit",
    "level": "Easy",
    "intro": "The captain’s silver hatpin disappeared at the winter dance. A recording caught the only three people who had been in the cloakroom arguing over who took it. Just one of their three claims was true, a fact the porter could independently establish.",
    "clues": [
      "Alix said, “Bram took the pin.”",
      "Bram said, “I did not take it.”",
      "Cy said, “Alix did not take it.”",
      "Exactly one of the three took the pin."
    ],
    "questions": [
      "Who took the pin?",
      "Which two claims would settle each other even without the porter’s evidence?"
    ],
    "answer": "Alix took the pin.",
    "why": "Alix and Bram contradict each other directly about Bram. One of them must be telling the truth, using up the one true claim. Cy’s claim that Alix was innocent must therefore be false."
  },
  {
    "id": 24,
    "title": "Exact fare at the turnstile",
    "kind": "Logic",
    "level": "Medium",
    "intro": "A machine accepted an exact fare of 39 brass units. Through its glass window the inspector could see six coins. Each coin was worth 2, 5 or 10 units, with at least one of each denomination.",
    "clues": [],
    "questions": [
      "How many of each coin went through?",
      "How does the last digit narrow the possibilities?"
    ],
    "answer": "Two 2s, one 5 and three 10s.",
    "why": "The 5s and 10s contribute a multiple of five. The 2-unit coins must contribute 4 more than a multiple of five. Among one to four 2-unit coins, only two work. The four remaining coins must total 35, which takes three 10s and one 5."
  },
  {
    "id": 25,
    "title": "A note on two strings",
    "kind": "Codebreaking",
    "level": "Easy",
    "intro": "The bell ringer and her brother threaded letter beads, one on the upper string, one on the lower, alternating all the way across. The strings came loose, but each still runs left to right.",
    "exhibit": "MEBTELBL / ETYHODEL",
    "clues": [
      "The slash separates the intact strings. Start on the upper string.",
      "Add word breaks to the decoded message."
    ],
    "questions": [
      "What message did the sender leave?"
    ],
    "answer": "Meet by the old bell.",
    "why": "Interleave the strings. The first pair is M/E, the second E/T, so the message starts MEET. Alternating to the end gives MEET BY THE OLD BELL."
  },
  {
    "id": 26,
    "title": "Glaze marks at kiln seven",
    "kind": "Word search",
    "level": "Hard",
    "intro": "A potter used workshop words as crate labels. Find the twelve labels before the delivery wagon leaves the yard. Look in any of eight directions.",
    "grid": [
      "CPMNUBCEPBANG",
      "MRUKIIPGNJOOP",
      "YPALBOOKODHEA",
      "TRLPTQRNARVEF",
      "LRDTSCCLKOGLQ",
      "AUESXDEPGBLFO",
      "BRDACCLYNYOIT",
      "OUIXRXAEFWKWN",
      "COUUACIQFEGJP",
      "EUQSIBNCHZLMU",
      "JJZDSTONEWARE",
      "IVGLOGIHKNZZQ",
      "FJDAUTTXWHEEL"
    ],
    "locations": {
      "PORCELAIN": [
        [
          6,
          1
        ],
        [
          6,
          9
        ]
      ],
      "STONEWARE": [
        [
          4,
          10
        ],
        [
          12,
          10
        ]
      ],
      "FELDSPAR": [
        [
          8,
          8
        ],
        [
          1,
          1
        ]
      ],
      "CELADON": [
        [
          5,
          6
        ],
        [
          11,
          0
        ]
      ],
      "BISQUE": [
        [
          5,
          9
        ],
        [
          0,
          9
        ]
      ],
      "COBALT": [
        [
          0,
          8
        ],
        [
          0,
          3
        ]
      ],
      "KAOLIN": [
        [
          7,
          2
        ],
        [
          12,
          7
        ]
      ],
      "POTTER": [
        [
          6,
          1
        ],
        [
          1,
          6
        ]
      ],
      "GLAZE": [
        [
          10,
          8
        ],
        [
          10,
          12
        ]
      ],
      "WHEEL": [
        [
          8,
          12
        ],
        [
          12,
          12
        ]
      ],
      "GROG": [
        [
          10,
          4
        ],
        [
          7,
          1
        ]
      ],
      "RAKU": [
        [
          1,
          3
        ],
        [
          4,
          0
        ]
      ]
    }
  },
  {
    "id": 27,
    "title": "A room above the pier",
    "kind": "Crossword",
    "level": "Easy",
    "intro": "Someone left a forwarding address on the hotel blotter. While the clerk looks for it, piece together the language of her front desk.",
    "entries": [
      {
        "x": 3,
        "y": 0,
        "dir": "Across",
        "word": "BILL",
        "clue": "The guest settles this at checkout"
      },
      {
        "x": 3,
        "y": 0,
        "dir": "Down",
        "word": "BELL",
        "clue": "Ring it to summon the desk clerk"
      },
      {
        "x": 6,
        "y": 0,
        "dir": "Down",
        "word": "LIFT",
        "clue": "British hotel sign for an elevator"
      },
      {
        "x": 0,
        "y": 1,
        "dir": "Across",
        "word": "WAKE",
        "clue": "What a six o’clock call is meant to do"
      },
      {
        "x": 6,
        "y": 3,
        "dir": "Across",
        "word": "TIP",
        "clue": "A little extra for good service"
      },
      {
        "x": 8,
        "y": 3,
        "dir": "Down",
        "word": "PORTER",
        "clue": "Employee who carries bags"
      },
      {
        "x": 4,
        "y": 7,
        "dir": "Across",
        "word": "SUITE",
        "clue": "Several hotel rooms let as a unit"
      },
      {
        "x": 7,
        "y": 5,
        "dir": "Across",
        "word": "TRAY",
        "clue": "Breakfast rides upstairs on one"
      },
      {
        "x": 4,
        "y": 4,
        "dir": "Down",
        "word": "GUEST",
        "clue": "The person named on a reservation"
      },
      {
        "x": 10,
        "y": 3,
        "dir": "Down",
        "word": "KEY",
        "clue": "It may have a brass tag with a room number"
      },
      {
        "x": 6,
        "y": 6,
        "dir": "Down",
        "word": "LINEN",
        "clue": "Sheets and pillowcases collectively"
      }
    ]
  },
  {
    "id": 28,
    "title": "The impossible postcard",
    "kind": "Detective skills",
    "level": "Medium",
    "intro": "A dealer dates four undamaged postcards of Plover Quay to the same summer fair. Each image plainly shows two landmarks. One photograph could never have been taken in any year.",
    "tables": [
      [
        "Town works register",
        [
          "Landmark",
          "Summers visible"
        ],
        [
          [
            "Octagonal ticket kiosk",
            "1912 through 1920"
          ],
          [
            "Iron footbridge",
            "1918 through 1931"
          ],
          [
            "Striped bathhouse",
            "1921 through 1928"
          ],
          [
            "Copper fish weathervane",
            "1916 through 1925"
          ]
        ]
      ],
      [
        "Photographs",
        [
          "Card",
          "Visible landmarks"
        ],
        [
          [
            "A",
            "Kiosk and iron footbridge"
          ],
          [
            "B",
            "Striped bathhouse and copper fish"
          ],
          [
            "C",
            "Kiosk and striped bathhouse"
          ],
          [
            "D",
            "Iron footbridge and copper fish"
          ]
        ]
      ]
    ],
    "clues": [
      "All four structures stood on the same quay. Dates are inclusive. Each picture claims to be a single exposure of the actual scene."
    ],
    "questions": [
      "Which card must be a composite or a misidentification?",
      "Even after removing it, can the other three photos all depict the same summer fair?"
    ],
    "answer": "Card C is impossible. The other three also cannot all be from one summer.",
    "why": "The kiosk's last summer was 1920, one year before the bathhouse opened. Card A could date from 1918–1920, B from 1921–1925 and D from 1918–1925. Each of those three is possible by itself, but A and B have no common summer."
  },
  {
    "id": 29,
    "title": "A measure short",
    "kind": "Whodunit",
    "level": "Medium",
    "intro": "A pearl dealer was killed while four singers were rehearsing in four separate rehearsal booths. The dealer’s booth was next door. All four singers said they had sung their entire assigned pieces during the fatal interval. Sal asked for the rehearsal reels.",
    "clues": [
      "The killer was away from their microphone continuously from 11:00 through 11:01. Nobody could sing into a booth microphone from the dealer’s booth.",
      "The reels identify each singer’s own live voice at the listed times. Each reel starts at the wall time shown. Its counter shows elapsed minutes and seconds, starting at zero."
    ],
    "questions": [
      "Which singer still lacked an alibi?",
      "Give one actual vocal time that clears each of the other three."
    ],
    "answer": "Vera lacked an alibi.",
    "why": "Asha sings at 11:00:30, Ben at 11:00:20, and Noor at 11:00:10. Vera’s two phrases were at 10:58:10 and 11:02:00. Her reel can keep turning in an empty booth.",
    "tables": [
      [
        "The reels",
        [
          "Singer",
          "Reel starts",
          "Counter at verified live phrases"
        ],
        [
          [
            "Asha",
            "10:57:00",
            "01:30 and 03:30"
          ],
          [
            "Ben",
            "10:59:00",
            "01:20 and 04:30"
          ],
          [
            "Noor",
            "10:56:30",
            "01:00 and 03:40"
          ],
          [
            "Vera",
            "10:58:00",
            "00:10 and 04:00"
          ]
        ]
      ]
    ]
  },
  {
    "id": 30,
    "title": "The quay-side shortcut",
    "kind": "Logic",
    "level": "Medium",
    "intro": "The chart clerk needs to carry a tube from the hotel to the lighthouse on foot. Streets are open both ways. Find the quickest walk using only the listed streets.",
    "clues": [
      "Times include crossings. The clerk travels at the listed pace and makes no stops."
    ],
    "questions": [
      "Which streets should the clerk take, and how long will the walk take?"
    ],
    "answer": "Hotel → Market → Baths → Pier → Lighthouse, 13 minutes.",
    "why": "The quickest way to the baths is through the market (3 + 2 = 5). From the baths the pier is 3 minutes away, so the pier can be reached in 8. The lighthouse is another 5 minutes. Reaching it directly from the baths takes 15 minutes in total, and using Market–Pier gives 17.",
    "tables": [
      [
        "Walking map",
        [
          "Street between",
          "Minutes"
        ],
        [
          [
            "Hotel and Market",
            "3"
          ],
          [
            "Hotel and Baths",
            "8"
          ],
          [
            "Market and Baths",
            "2"
          ],
          [
            "Market and Pier",
            "9"
          ],
          [
            "Baths and Pier",
            "3"
          ],
          [
            "Baths and Lighthouse",
            "10"
          ],
          [
            "Pier and Lighthouse",
            "5"
          ]
        ]
      ]
    ]
  },
  {
    "id": 31,
    "title": "The keeper’s weather board",
    "kind": "Word search",
    "level": "Medium",
    "intro": "The weather station keeps a chalkboard beside the harbor gate. Trace ten parts of the keeper’s forecast. Look in any of eight directions.",
    "grid": [
      "XRUTSIMXMHZT",
      "XEWBRTSXYDLS",
      "IYLJFQHSTLCO",
      "ZSKZUTNVIOIR",
      "CJOAZRURDERF",
      "YMLBXIEZIARW",
      "WLSOADRUMCUQ",
      "RZJNNRBDUPSA",
      "VVJUXHPEHHED",
      "LYHERUSSERPM",
      "DTCJESLEETNE",
      "TCAGNUAKIMAE"
    ],
    "locations": {
      "HUMIDITY": [
        [
          8,
          8
        ],
        [
          8,
          1
        ]
      ],
      "PRESSURE": [
        [
          10,
          9
        ],
        [
          3,
          9
        ]
      ],
      "DRIZZLE": [
        [
          7,
          7
        ],
        [
          1,
          1
        ]
      ],
      "THUNDER": [
        [
          1,
          10
        ],
        [
          7,
          4
        ]
      ],
      "SQUALL": [
        [
          6,
          1
        ],
        [
          1,
          6
        ]
      ],
      "CIRRUS": [
        [
          10,
          2
        ],
        [
          10,
          7
        ]
      ],
      "ISOBAR": [
        [
          0,
          2
        ],
        [
          5,
          7
        ]
      ],
      "SLEET": [
        [
          5,
          10
        ],
        [
          9,
          10
        ]
      ],
      "FROST": [
        [
          11,
          4
        ],
        [
          11,
          0
        ]
      ],
      "MIST": [
        [
          6,
          0
        ],
        [
          3,
          0
        ]
      ]
    }
  },
  {
    "id": 32,
    "title": "A pause on the towpath",
    "kind": "Detective skills",
    "level": "Medium",
    "intro": "A cycle courier carried a glass slide around the docks. Somewhere along the way she stopped to rewrap it. Each gate photographed her both arriving and leaving in the same minute, so the pause happened between gates.",
    "tables": [
      [
        "Gate cameras",
        [
          "Gate",
          "Time passing",
          "Normal ride to next gate"
        ],
        [
          [
            "Chandler’s Yard",
            "15:07",
            "5 minutes"
          ],
          [
            "Lime Kiln",
            "15:12",
            "7 minutes"
          ],
          [
            "Tin Bridge",
            "15:24",
            "4 minutes"
          ],
          [
            "Oyster Steps",
            "15:28",
            "6 minutes"
          ],
          [
            "Station",
            "15:34",
            "End"
          ]
        ]
      ]
    ],
    "clues": [
      "Camera times agree. The courier used the posted route, rode each leg in exactly its normal riding time, and paused only once."
    ],
    "questions": [
      "Between which gates did she rewrap the slide, and for how long?",
      "Can the records tell you the exact minute the stop began?"
    ],
    "answer": "Between Lime Kiln and Tin Bridge, for five minutes. The exact start time is unknown.",
    "why": "That leg took twelve minutes. Seven were spent riding, leaving five for the stop. Every other leg took its normal time. The gate records give no intermediate sighting to place the stop within the leg."
  },
  {
    "id": 33,
    "title": "The damp corner of the print",
    "kind": "Whodunit",
    "level": "Medium",
    "intro": "Someone substituted a copy for a numbered harbor print while four framers were drying their work. All four prints hung from the same wire, each fastened to its own rigid board with the picture facing the room. When the originals had gone home, a photograph of the copy on the wire surfaced.",
    "clues": [
      "The copy’s photograph shows a square clip on the viewer’s left and a round clip on the right. The board has a notch at the top right.",
      "The inventory below is what the clerk saw standing BEHIND the boards, looking at their backs. Up stays up. Each framer kept the same board and clips and handled only their own print."
    ],
    "questions": [
      "Whose board held the copy?",
      "How does looking from behind affect the notch?"
    ],
    "answer": "Kit’s board held the copy.",
    "why": "From behind, the square clip must be on the right, the round clip on the left, and the notch at top left. Kit alone matches. Jules has the same clips but the notch on the wrong side.",
    "tables": [
      [
        "Clerk’s inventory from behind",
        [
          "Framer",
          "Left clip",
          "Right clip",
          "Top notch"
        ],
        [
          [
            "Kit",
            "Round",
            "Square",
            "Left"
          ],
          [
            "Jules",
            "Round",
            "Square",
            "Right"
          ],
          [
            "Rae",
            "Square",
            "Round",
            "Right"
          ],
          [
            "Idris",
            "Round",
            "Round",
            "Left"
          ]
        ]
      ]
    ]
  },
  {
    "id": 34,
    "title": "The wheelbarrow bridge",
    "kind": "Logic",
    "level": "Hard",
    "intro": "The bridge keeper can spare a handcart for one crossing. Its load must be exactly 27 kilos. Five sealed cases stand ready. Choose the only group that fits.",
    "clues": [
      "The cases weigh 4, 7, 9, 12 and 16 kilos. Take each whole case at most once."
    ],
    "questions": [
      "Which cases should go on the cart?",
      "Show why the load must include the heaviest case."
    ],
    "answer": "Take the 4-, 7- and 16-kilo cases.",
    "why": "With 16 aboard, the remaining 11 can be made by 4 and 7. Without 16, including 12 leaves 15, which cannot be made from 4, 7 and 9. Without either 12 or 16, all the others together reach only 20."
  },
  {
    "id": 35,
    "title": "The tailor’s chalk line",
    "kind": "Crossword",
    "level": "Medium",
    "intro": "A tailor lends Sal her workroom while she waits out a squall. The chalked words on the cutting table all belong to the trade.",
    "entries": [
      {
        "x": 4,
        "y": 1,
        "dir": "Across",
        "word": "PATTERN",
        "clue": "Paper guide laid over fabric before cutting"
      },
      {
        "x": 8,
        "y": 0,
        "dir": "Down",
        "word": "WEFT",
        "clue": "Threads that cross a loom from side to side"
      },
      {
        "x": 4,
        "y": 1,
        "dir": "Down",
        "word": "PLEAT",
        "clue": "Pressed fold that can give a skirt more room"
      },
      {
        "x": 0,
        "y": 2,
        "dir": "Across",
        "word": "SPOOL",
        "clue": "Thread winds around it"
      },
      {
        "x": 6,
        "y": 1,
        "dir": "Down",
        "word": "THIMBLE",
        "clue": "Small shield worn on a sewing finger"
      },
      {
        "x": 5,
        "y": 7,
        "dir": "Across",
        "word": "HEM",
        "clue": "Folded and stitched lower edge"
      },
      {
        "x": 6,
        "y": 5,
        "dir": "Across",
        "word": "BIAS",
        "clue": "Direction diagonal to the fabric’s grain"
      },
      {
        "x": 1,
        "y": 5,
        "dir": "Across",
        "word": "DART",
        "clue": "A sewn tuck that shapes fabric to a curve"
      },
      {
        "x": 2,
        "y": 4,
        "dir": "Down",
        "word": "BASTE",
        "clue": "Make temporary stitches before the final seam"
      },
      {
        "x": 9,
        "y": 5,
        "dir": "Down",
        "word": "SHEARS",
        "clue": "Long-bladed scissors used for cutting cloth"
      },
      {
        "x": 1,
        "y": 8,
        "dir": "Across",
        "word": "SEAM",
        "clue": "Where two pieces of cloth are stitched together"
      },
      {
        "x": 7,
        "y": 9,
        "dir": "Across",
        "word": "WARP",
        "clue": "Lengthwise threads kept under tension on a loom"
      }
    ]
  },
  {
    "id": 36,
    "title": "Postmarks in pairs",
    "kind": "Codebreaking",
    "level": "Medium",
    "intro": "The sorting clerk used a five-by-five letter rack to leave an instruction. Each pair of digits points to one cubby.",
    "exhibit": "34 35 15 33 / 44 23 15 / 12 42 11 43 43 / 13 11 43 15",
    "clues": [
      "Fill a five-by-five square in normal alphabetical order, leaving J out. Start with A in the top left.",
      "The first digit gives the row (top to bottom); the second gives the column (left to right). Slashes end words."
    ],
    "questions": [
      "What message did the sender leave?"
    ],
    "answer": "Open the brass case.",
    "why": "The rows read ABCDE, FGHIK, LMNOP, QRSTU and VWXYZ. The first group points to O at 34, P at 35, E at 15 and N at 33. The four words give the instruction."
  },
  {
    "id": 37,
    "title": "Ragged edges at luncheon",
    "kind": "Detective skills",
    "level": "Medium",
    "intro": "A guest tore the ferry's handwritten luncheon bill into four strips to use as bookmarks. At each tear, a word from the line was visible on both pieces. The purser found the strips in the wrong order.",
    "tables": [
      [
        "Recovered strips",
        [
          "Mark on reverse",
          "Legible text"
        ],
        [
          [
            "Blue",
            "JAM AND TEA END"
          ],
          [
            "Gold",
            "START SOUP THEN"
          ],
          [
            "Red",
            "ROLLS FOLLOWED BY JAM"
          ],
          [
            "Green",
            "THEN FISH WITH ROLLS"
          ]
        ]
      ]
    ],
    "clues": [
      "START and END are the printer's end marks. Read each strip left to right. Where two strips join, their touching words match. Read each shared word once."
    ],
    "questions": [
      "In what color order do the strips fit?",
      "What did the bill list immediately after the fish and rolls?"
    ],
    "answer": "Gold → Green → Red → Blue. Jam followed the fish and rolls.",
    "why": "Gold ends in THEN, the start of Green. Green ends in ROLLS, the start of Red. Red ends in JAM, which joins Blue. The reconstructed line reads START SOUP THEN FISH WITH ROLLS FOLLOWED BY JAM AND TEA END."
  },
  {
    "id": 38,
    "title": "The weight of a promise",
    "kind": "Whodunit",
    "level": "Easy",
    "intro": "Four delegates checked sealed gifts into the captain’s safe. During the ceremony one delegate opened their own box and replaced a silver medal with a lighter replica. The steward had recorded the weight of each full box that morning.",
    "clues": [
      "The genuine medal weighs 86 grams and the replica weighs 58. The rest of that box stayed the same.",
      "After the ceremony the steward weighed each full box with its removable presentation stand. The morning weights exclude the stands. Other changes, if any, concern unrelated packages."
    ],
    "questions": [
      "Which delegate exchanged the medal?",
      "What was that box’s net weight after the ceremony?"
    ],
    "answer": "Dev exchanged the medal. Dev’s box now weighs 282 grams.",
    "why": "The substitution subtracts 28 grams. Deduct the stands from the afternoon measurements: Ada 280, Dev 282, Em 290 and Sol 306 grams. Only Dev’s box is 28 grams lighter than it was that morning.",
    "tables": [
      [
        "Gift ledger, grams",
        [
          "Delegate",
          "Morning box",
          "Afternoon box + stand",
          "Stand alone"
        ],
        [
          [
            "Ada",
            "280",
            "329",
            "49"
          ],
          [
            "Dev",
            "310",
            "335",
            "53"
          ],
          [
            "Em",
            "296",
            "347",
            "57"
          ],
          [
            "Sol",
            "306",
            "351",
            "45"
          ]
        ]
      ]
    ]
  },
  {
    "id": 39,
    "title": "The ferry’s milk run",
    "kind": "Logic",
    "level": "Medium",
    "intro": "A milk launch calls at five little piers on a single loop. Its faded route card lists the piers alphabetically. Recover their actual visiting order.",
    "clues": [
      "Plover comes earlier than Cairn.",
      "Cairn comes earlier than Reed.",
      "There are two entries between Cairn and Elm.",
      "Birch comes immediately after Reed."
    ],
    "tableform": {
      "rows": [
        "First",
        "Second",
        "Third",
        "Fourth",
        "Fifth"
      ],
      "cols": [
        [
          "Pier",
          "Birch",
          "Cairn",
          "Elm",
          "Plover",
          "Reed"
        ]
      ]
    },
    "answer": "Plover → Cairn → Reed → Birch → Elm.",
    "why": "Set aside the clue “Plover comes earlier than Cairn.” and fill the slots using the other clues. The possible orders, using the first letter of each name, are CRBEP, PCRBE. Apply the set-aside clue: only Plover → Cairn → Reed → Birch → Elm survives."
  },
  {
    "id": 40,
    "title": "A tune before departure",
    "kind": "Word search",
    "level": "Easy",
    "intro": "Eight instrument cases waited on the gangplank. Find the labels that identify the musicians’ instruments. Look across to the right, down, or diagonally down.",
    "grid": [
      "NHORNBSTSS",
      "NHDNJJJCKB",
      "QKRSTHREFF",
      "KJUFAHSLKP",
      "OEMRLCALFB",
      "QBPEVUJONB",
      "XBOIRJTPUA",
      "MHOEBGUEPE",
      "OLRHNNTYXU",
      "ADIIBANJOV"
    ],
    "locations": {
      "VIOLA": [
        [
          4,
          5
        ],
        [
          0,
          9
        ]
      ],
      "FLUTE": [
        [
          3,
          3
        ],
        [
          7,
          7
        ]
      ],
      "CELLO": [
        [
          7,
          1
        ],
        [
          7,
          5
        ]
      ],
      "BANJO": [
        [
          4,
          9
        ],
        [
          8,
          9
        ]
      ],
      "HARP": [
        [
          5,
          2
        ],
        [
          2,
          5
        ]
      ],
      "OBOE": [
        [
          0,
          4
        ],
        [
          3,
          7
        ]
      ],
      "DRUM": [
        [
          2,
          1
        ],
        [
          2,
          4
        ]
      ],
      "HORN": [
        [
          1,
          0
        ],
        [
          4,
          0
        ]
      ]
    }
  },
  {
    "id": 41,
    "title": "Behind the velvet curtain",
    "kind": "Crossword",
    "level": "Medium",
    "intro": "The stage manager’s prompt book holds the next clue. Find the words the company uses when the audience cannot see them.",
    "entries": [
      {
        "x": 3,
        "y": 4,
        "dir": "Across",
        "word": "ASIDE",
        "clue": "Words spoken as if other characters cannot hear"
      },
      {
        "x": 7,
        "y": 2,
        "dir": "Down",
        "word": "CUE",
        "clue": "Signal for a line or an entrance"
      },
      {
        "x": 6,
        "y": 4,
        "dir": "Down",
        "word": "DRESS",
        "clue": "The rehearsal in full costume, for short"
      },
      {
        "x": 2,
        "y": 7,
        "dir": "Across",
        "word": "WINGS",
        "clue": "Spaces just out of sight at either side of the stage"
      },
      {
        "x": 6,
        "y": 8,
        "dir": "Across",
        "word": "SPIKE",
        "clue": "To mark a set piece’s position with tape"
      },
      {
        "x": 3,
        "y": 2,
        "dir": "Down",
        "word": "TRAP",
        "clue": "Stage-floor opening with a door"
      },
      {
        "x": 7,
        "y": 2,
        "dir": "Across",
        "word": "CAST",
        "clue": "The performers considered as a group"
      },
      {
        "x": 10,
        "y": 4,
        "dir": "Down",
        "word": "HOUSE",
        "clue": "The audience, in theater shorthand"
      },
      {
        "x": 8,
        "y": 5,
        "dir": "Down",
        "word": "SCRIM",
        "clue": "Thin curtain that can appear transparent when lit from behind"
      },
      {
        "x": 0,
        "y": 2,
        "dir": "Across",
        "word": "FLAT",
        "clue": "A lightweight wall in a stage set"
      },
      {
        "x": 9,
        "y": 0,
        "dir": "Down",
        "word": "MASK",
        "clue": "An actor may wear this over the face"
      },
      {
        "x": 0,
        "y": 5,
        "dir": "Across",
        "word": "PROP",
        "clue": "A letter or teacup handled by a performer"
      }
    ]
  },
  {
    "id": 42,
    "title": "The till that balanced",
    "kind": "Detective skills",
    "level": "Hard",
    "intro": "The ticket clerk's closing balance is right, yet his running totals went wrong twice. The bookkeeper has the original slips, so the transaction amounts and the opening balance can be trusted.",
    "tables": [
      [
        "Ticket drawer",
        [
          "Entry",
          "Transaction (pence)",
          "Balance written"
        ],
        [
          [
            "Opening",
            "—",
            "40"
          ],
          [
            "1",
            "Collected 9",
            "49"
          ],
          [
            "2",
            "Refunded 6",
            "45"
          ],
          [
            "3",
            "Collected 8",
            "53"
          ],
          [
            "4",
            "Refunded 3",
            "50"
          ],
          [
            "5",
            "Collected 7",
            "55"
          ],
          [
            "6",
            "Refunded 5",
            "50"
          ]
        ]
      ]
    ],
    "clues": [
      "The clerk carried the balance he had just written into the next line. Count a fresh arithmetic mistake only if applying that line's transaction to the preceding written balance gives a different figure."
    ],
    "questions": [
      "Which two entries contain fresh mistakes, and by how much?",
      "Why do the following two balances after the first mistake also look wrong against the original slips?"
    ],
    "answer": "Entries 2 and 5. Entry 2 is 2 pence too high; entry 5 is 2 pence too low relative to the preceding written balance.",
    "why": "From 49, a 6-pence refund leaves 43, not 45. Adding 8 to the written 45 gives 53, and taking 3 from 53 gives 50. Those lines carry the original error forward. Adding 7 to the written 50 should give 57, but the clerk wrote 55. The two fresh errors cancel at closing."
  },
  {
    "id": 43,
    "title": "Someone moved the blue house",
    "kind": "Whodunit",
    "level": "Medium",
    "intro": "In a model harbor, a gold coin was hidden beneath a tiny blue house. Before the unveiling the model maker removed all four houses to repaint their foundations. After he put them back, one prize steward pocketed the coin while checking a house.",
    "clues": [
      "Initially the houses stood, from left to right, Blue, White, Green, Red. The coin stayed under the same numbered foundation throughout the repainting.",
      "The maker first exchanged the houses on foundations 1 and 4. He then moved the house on foundation 2 to foundation 1, sliding the old house on foundation 1 into foundation 2. He moved nothing else.",
      "At the unveiling each steward checked under exactly one house. Only the steward who found the coin could have taken it."
    ],
    "questions": [
      "Which steward took the coin?",
      "What color stood on the coin’s foundation at the unveiling?"
    ],
    "answer": "Ada, at the white house.",
    "why": "The coin remained on foundation 1. The first exchange puts Red there, the second puts White there. Ada was the only steward who lifted White. Following Blue itself would send you to the wrong foundation.",
    "tables": [
      [
        "Houses checked at the unveiling",
        [
          "Steward",
          "House"
        ],
        [
          [
            "Ada",
            "White"
          ],
          [
            "Luz",
            "Blue"
          ],
          [
            "Ned",
            "Red"
          ],
          [
            "Bo",
            "Green"
          ]
        ]
      ]
    ]
  },
  {
    "id": 44,
    "title": "Biscuits at the quay",
    "kind": "Logic",
    "level": "Hard",
    "intro": "Four couriers carried different tins from the quay bakery. A waiter needs the flavors and collection times. Each person used one time slot and had one different item. All four slots and items were used.",
    "clues": [
      "The lemon tin did not appear at 7:20.",
      "Max did not have the almond tin.",
      "The almond tin did not appear at 7:00.",
      "Uma was one slot before the person with the lemon tin.",
      "Uma did not have the oat tin.",
      "Dot was earlier than Ari.",
      "Max was one slot before the person with the ginger tin."
    ],
    "tableform": {
      "rows": [
        "Ari",
        "Dot",
        "Max",
        "Uma"
      ],
      "cols": [
        [
          "Pickup",
          "7:00",
          "7:10",
          "7:20",
          "7:30"
        ],
        [
          "Tin",
          "Ginger tin",
          "Lemon tin",
          "Almond tin",
          "Oat tin"
        ]
      ]
    },
    "answer": "7:00 — Max, oat tin · 7:10 — Dot, ginger tin · 7:20 — Uma, almond tin · 7:30 — Ari, lemon tin.",
    "why": "Write the four times in order and try the remaining clues in those columns. Without “Uma was one slot before the person with the lemon tin.” there are 15 ways to fill the sheet. Only one puts Uma directly before the required item: Uma is at 7:20, followed by Ari with the lemon tin at 7:30."
  },
  {
    "id": 45,
    "title": "The harbor keyword",
    "kind": "Codebreaking",
    "level": "Hard",
    "intro": "An old signal card gives the keyword HARBOR. To make a substitution alphabet, the sender wrote the keyword without repeated letters, then continued with unused letters in normal order.",
    "exhibit": "REORI TEO AJUO JMRIOQ",
    "clues": [
      "Write A to Z on a top line. Beneath it put the new alphabet.",
      "To read the message, locate each coded letter on the bottom line and look straight up."
    ],
    "questions": [
      "What message did the sender leave?"
    ],
    "answer": "Check the blue locker.",
    "why": "The lower line is HARBOCDEFGIJKLMNPQSTUVWXYZ. For example, R on the lower line sits below C on the upper line. Reversing these substitutions turns the first word into CHECK."
  },
  {
    "id": 46,
    "title": "Lanterns in the orchard",
    "kind": "Word search",
    "level": "Medium",
    "intro": "The orchard hired night pickers to bring in a late harvest. Their fruit crates carry these ten names. Look in any of eight directions.",
    "grid": [
      "SVHCAEPJNCBH",
      "RHEPVVJOEDCO",
      "IBYASDMSCZSY",
      "TCICBMYQTPAR",
      "LBJAITUFALYR",
      "FVRSPIILRUOE",
      "TDRANRZKIMGH",
      "PENCLRIVNAYC",
      "PREAADHCEZXO",
      "LODEQREYOVPP",
      "YEPCMCJMZTSD",
      "YINRBAPPLERZ"
    ],
    "locations": {
      "NECTARINE": [
        [
          8,
          0
        ],
        [
          8,
          8
        ]
      ],
      "PERSIMMON": [
        [
          0,
          8
        ],
        [
          8,
          0
        ]
      ],
      "APRICOT": [
        [
          3,
          4
        ],
        [
          9,
          10
        ]
      ],
      "QUINCE": [
        [
          7,
          3
        ],
        [
          2,
          8
        ]
      ],
      "CHERRY": [
        [
          11,
          7
        ],
        [
          11,
          2
        ]
      ],
      "MEDLAR": [
        [
          7,
          10
        ],
        [
          2,
          5
        ]
      ],
      "APPLE": [
        [
          5,
          11
        ],
        [
          9,
          11
        ]
      ],
      "PEACH": [
        [
          6,
          0
        ],
        [
          2,
          0
        ]
      ],
      "PLUM": [
        [
          9,
          3
        ],
        [
          9,
          6
        ]
      ],
      "PEAR": [
        [
          2,
          10
        ],
        [
          5,
          7
        ]
      ]
    }
  },
  {
    "id": 47,
    "title": "The second-best witness",
    "kind": "Detective skills",
    "level": "Medium",
    "intro": "A visitor left her sketchbook on a market cart. Three children remember its appearance. Their teacher has since established that two of the three descriptions are accurate and the third is mistaken.",
    "tables": [
      [
        "Witnesses",
        [
          "Child",
          "One recollection"
        ],
        [
          [
            "Bo",
            "“It had a canopy.”"
          ],
          [
            "Fay",
            "“There were three wheels.”"
          ],
          [
            "Ren",
            "“A bird was painted on the side.”"
          ]
        ]
      ],
      [
        "Carts present",
        [
          "Cart",
          "Roof",
          "Wheels",
          "Painted emblem"
        ],
        [
          [
            "Cherry",
            "Canopy",
            "Three",
            "Bird"
          ],
          [
            "Birch",
            "Canopy",
            "Four",
            "Bird"
          ],
          [
            "Pear",
            "Bare",
            "Four",
            "Bird"
          ],
          [
            "Linden",
            "Bare",
            "Three",
            "Leaf"
          ]
        ]
      ]
    ],
    "clues": [
      "The children all described the same cart. Each recollection is one yes-or-no statement."
    ],
    "questions": [
      "On which cart should the owner look?",
      "Which child's recollection was mistaken?"
    ],
    "answer": "Birch cart. Fay misremembered the number of wheels.",
    "why": "Cherry matches all three accounts, but the teacher knows one account is wrong. Birch matches Bo and Ren only. Pear matches Ren only, and Linden matches Fay only. Birch is the unique two-match cart."
  },
  {
    "id": 48,
    "title": "The late edition",
    "kind": "Whodunit",
    "level": "Medium",
    "intro": "The pilot found a forged notice canceling a sailing. It was pasted over the terminal timetable. A narrow strip cut from the night paper formed its backing. Sal could still read the words “Ferry wins cup” and see a small boat beside the headline.",
    "clues": [
      "The strip shows the actual ink on the printed paper. Only one of the four couriers posted the notice, using the sole edition in their sealed delivery bag. None of the bags or papers changed hands.",
      "The paper successively changed its headline and masthead picture as the evening progressed. The first edition had the headline “Race delayed” and a bell picture. Each change below stayed in effect until the next change of that feature."
    ],
    "questions": [
      "Which courier posted the notice?",
      "Why is the headline alone insufficient?"
    ],
    "answer": "Sid posted it.",
    "why": "The winning headline first appears in edition 2. The boat replaces the bell in edition 3; the star replaces the boat in edition 4. Only edition 3 carries both the winning headline and the boat. Sid carried that edition.",
    "tables": [
      [
        "Pressroom changes",
        [
          "Edition",
          "Change",
          "Courier"
        ],
        [
          [
            "1",
            "Initial headline and picture",
            "Jo"
          ],
          [
            "2",
            "New headline: Ferry wins cup",
            "Hal"
          ],
          [
            "3",
            "New picture: boat",
            "Sid"
          ],
          [
            "4",
            "New picture: star",
            "Bev"
          ]
        ]
      ]
    ]
  },
  {
    "id": 49,
    "title": "The chandelier rehearsal",
    "kind": "Logic",
    "level": "Hard",
    "intro": "A lighting crew took turns carrying colored filters to the lantern room. Match each member to one filter and one delivery. Each person used one time slot and had one different item. All four slots and items were used.",
    "clues": [
      "Ruth was one slot before the person with the violet filter.",
      "Emil did not have the violet filter.",
      "The green filter did not appear at 4:40.",
      "Ida was one slot before the person with the amber filter.",
      "Ruth did not have the green filter.",
      "Ida was earlier than Emil.",
      "Kai did not have the violet filter."
    ],
    "tableform": {
      "rows": [
        "Emil",
        "Ida",
        "Kai",
        "Ruth"
      ],
      "cols": [
        [
          "Delivery",
          "4:10",
          "4:20",
          "4:30",
          "4:40"
        ],
        [
          "Filter",
          "Amber filter",
          "Blue filter",
          "Green filter",
          "Violet filter"
        ]
      ]
    },
    "answer": "4:10 — Kai, green filter · 4:20 — Ruth, blue filter · 4:30 — Ida, violet filter · 4:40 — Emil, amber filter.",
    "why": "Write the four times in order and try the remaining clues in those columns. Without “Ruth was one slot before the person with the violet filter.” there are 22 ways to fill the sheet. Only one puts Ruth directly before the required item: Ruth is at 4:20, followed by Ida with the violet filter at 4:30."
  },
  {
    "id": 50,
    "title": "Low water at Lantern Bay",
    "kind": "Crossword",
    "level": "Medium",
    "intro": "At low water a stretch of rock becomes a pocket-sized aquarium. Solve the field notes before the incoming tide covers the pools.",
    "entries": [
      {
        "x": 4,
        "y": 10,
        "dir": "Across",
        "word": "ANEMONE",
        "clue": "Tentacled animal named for a flower"
      },
      {
        "x": 5,
        "y": 5,
        "dir": "Down",
        "word": "URCHIN",
        "clue": "Round marine animal bristling with spines"
      },
      {
        "x": 10,
        "y": 7,
        "dir": "Down",
        "word": "TIDE",
        "clue": "The rise and fall that reveals a rock pool"
      },
      {
        "x": 0,
        "y": 7,
        "dir": "Across",
        "word": "BARNACLE",
        "clue": "Crustacean that can cement itself to a rock"
      },
      {
        "x": 7,
        "y": 3,
        "dir": "Down",
        "word": "MUSSEL",
        "clue": "Dark two-shelled animal that attaches by threads"
      },
      {
        "x": 1,
        "y": 5,
        "dir": "Down",
        "word": "CRAB",
        "clue": "Sideways walker carrying a pair of pincers"
      },
      {
        "x": 5,
        "y": 3,
        "dir": "Across",
        "word": "LIMPET",
        "clue": "Grazing mollusk with a low conical shell"
      },
      {
        "x": 5,
        "y": 0,
        "dir": "Down",
        "word": "POOL",
        "clue": "Pocket of seawater left among the rocks"
      },
      {
        "x": 9,
        "y": 1,
        "dir": "Down",
        "word": "WHELK",
        "clue": "Sea snail with a spiraled shell"
      },
      {
        "x": 3,
        "y": 4,
        "dir": "Down",
        "word": "BRINE",
        "clue": "Water with a high salt content"
      },
      {
        "x": 3,
        "y": 1,
        "dir": "Across",
        "word": "FROND",
        "clue": "Leaflike blade of seaweed"
      }
    ]
  },
  {
    "id": 51,
    "title": "The chamber of minerals",
    "kind": "Word search",
    "level": "Hard",
    "intro": "A museum’s traveling cabinet is missing its labels. Recover the names of its twelve specimens to put the catalog in order. Look in any of eight directions.",
    "grid": [
      "BMMXCZNMZHBFI",
      "TQUXXARJTUQZE",
      "RGOSHJLOSPEOF",
      "LUVTPMICAJLNL",
      "KRZYAYPAIIEGU",
      "UGIXVLGHVTONO",
      "EAJIPWCIIPECR",
      "OZKXCQNLAZTJI",
      "UMJRCEALTLOTT",
      "TEFGTHXBEYPZE",
      "MUQPDDVFMRAXW",
      "ZTRAUQUWCEZOS",
      "GEIGARNETBWCR"
    ],
    "locations": {
      "FLUORITE": [
        [
          12,
          2
        ],
        [
          12,
          9
        ]
      ],
      "OLIVINE": [
        [
          11,
          2
        ],
        [
          5,
          8
        ]
      ],
      "CALCITE": [
        [
          4,
          0
        ],
        [
          10,
          6
        ]
      ],
      "GARNET": [
        [
          3,
          12
        ],
        [
          8,
          12
        ]
      ],
      "QUARTZ": [
        [
          5,
          11
        ],
        [
          0,
          11
        ]
      ],
      "GYPSUM": [
        [
          6,
          5
        ],
        [
          1,
          0
        ]
      ],
      "HALITE": [
        [
          5,
          9
        ],
        [
          10,
          4
        ]
      ],
      "BERYL": [
        [
          9,
          12
        ],
        [
          9,
          8
        ]
      ],
      "TOPAZ": [
        [
          10,
          7
        ],
        [
          10,
          11
        ]
      ],
      "OPAL": [
        [
          10,
          5
        ],
        [
          7,
          8
        ]
      ],
      "TALC": [
        [
          3,
          3
        ],
        [
          6,
          6
        ]
      ],
      "MICA": [
        [
          5,
          3
        ],
        [
          8,
          3
        ]
      ]
    }
  },
  {
    "id": 52,
    "title": "The frayed promenade runner",
    "kind": "Detective skills",
    "level": "Easy",
    "intro": "The broadloom runner from the promenade has twelve woven bands, numbered from the brass threshold. The steward knows the original weaver repeated a four-band pattern evenly from end to end. A single band is a later repair in the wrong color.",
    "tables": [
      [
        "Survey from threshold",
        [
          "Bands",
          "First",
          "Second",
          "Third",
          "Fourth"
        ],
        [
          [
            "1–4",
            "Ochre",
            "Blue",
            "Blue",
            "Cream"
          ],
          [
            "5–8",
            "Ochre",
            "Blue",
            "Ochre",
            "Cream"
          ],
          [
            "9–12",
            "Ochre",
            "Blue",
            "Blue",
            "Cream"
          ]
        ]
      ]
    ],
    "clues": [
      "The threshold is the start of a repeat. All twelve colors are clear enough to distinguish in daylight."
    ],
    "questions": [
      "Which numbered band was repaired?",
      "What color should the repair have been?"
    ],
    "answer": "Band 7 should be blue.",
    "why": "The third position in each group falls at bands 3, 7 and 11. Bands 3 and 11 agree on blue while band 7 is ochre. All other corresponding positions agree in all three repeats."
  },
  {
    "id": 53,
    "title": "The watchman’s missing minute",
    "kind": "Whodunit",
    "level": "Hard",
    "intro": "At 22:14 a watchman saw the killer leave the customs clerk’s counting room and step straight into an empty lift. From his seat he could see the floor indicator, but the lift gate hid the rider’s face. He noted four stops, including the counting-room floor.",
    "clues": [
      "The rider stayed aboard to the final stop, got off there and was seen immediately by a reliable witness. The other suspects were seen on different floors at that same moment. There was no time to change floors after getting out.",
      "The counting room was on floor 2. After that stop the lift went up three floors, down an unknown positive number, then up exactly twice the number it had just descended.",
      "The building has floors 1 through 8. The stop immediately before the final stop was on an odd-numbered floor."
    ],
    "questions": [
      "On which floor did the killer get off, and who was it?",
      "Which rule rules out a final stop on floor 8?"
    ],
    "answer": "Floor 7. The killer was Lina.",
    "why": "After reaching floor 5 the lift descends d floors and rises 2d, finishing on 5+d. A finish within the building allows d=1, 2 or 3. The intermediate floor 5−d is odd only for d=2. Thus the stops are 2, 5, 3, 7. A finish on 8 requires a stop on even floor 2.",
    "tables": [
      [
        "Final sightings",
        [
          "Suspect",
          "Floor"
        ],
        [
          [
            "Pip",
            "5"
          ],
          [
            "Etta",
            "6"
          ],
          [
            "Lina",
            "7"
          ],
          [
            "Theo",
            "8"
          ]
        ]
      ]
    ]
  },
  {
    "id": 54,
    "title": "The lost-property hour",
    "kind": "Logic",
    "level": "Hard",
    "intro": "Four people collected things from the left-luggage desk. Rebuild the claim register. Each person used one time slot and had one different item. All four slots and items were used.",
    "clues": [
      "Faye was one slot before the person with the satchel.",
      "Faye was earlier than Asha.",
      "Teo used neither the first nor the last slot.",
      "Asha did not have the satchel.",
      "The satchel appeared two slots after the camera.",
      "Faye did not have the scarf."
    ],
    "tableform": {
      "rows": [
        "Asha",
        "Faye",
        "Jon",
        "Teo"
      ],
      "cols": [
        [
          "Visit",
          "9:00",
          "9:15",
          "9:30",
          "9:45"
        ],
        [
          "Property",
          "Hat",
          "Camera",
          "Scarf",
          "Satchel"
        ]
      ]
    },
    "answer": "9:00 — Jon, camera · 9:15 — Faye, hat · 9:30 — Teo, satchel · 9:45 — Asha, scarf.",
    "why": "Write the four times in order and try the remaining clues in those columns. Without “Faye was one slot before the person with the satchel.” there are 11 ways to fill the sheet. Only one puts Faye directly before the required item: Faye is at 9:15, followed by Teo with the satchel at 9:30."
  },
  {
    "id": 55,
    "title": "The midnight sleeper",
    "kind": "Crossword",
    "level": "Easy",
    "intro": "A disused booking hall still has its railway crossword pinned to the noticeboard. Fill it in while the night train waits.",
    "entries": [
      {
        "x": 4,
        "y": 3,
        "dir": "Across",
        "word": "BERTH",
        "clue": "A traveler’s bed on a sleeper"
      },
      {
        "x": 5,
        "y": 0,
        "dir": "Down",
        "word": "AXLE",
        "clue": "Shaft joining a pair of wheels"
      },
      {
        "x": 3,
        "y": 0,
        "dir": "Across",
        "word": "COACH",
        "clue": "Passenger car on a train"
      },
      {
        "x": 7,
        "y": 3,
        "dir": "Down",
        "word": "TRACK",
        "clue": "A pair of rails and the ties beneath them"
      },
      {
        "x": 3,
        "y": 5,
        "dir": "Across",
        "word": "SIGNAL",
        "clue": "Red or green instruction beside the line"
      },
      {
        "x": 5,
        "y": 5,
        "dir": "Down",
        "word": "GUARD",
        "clue": "British railway worker who may signal departure"
      },
      {
        "x": 3,
        "y": 5,
        "dir": "Down",
        "word": "STEAM",
        "clue": "What rises from the old locomotive’s boiler"
      },
      {
        "x": 5,
        "y": 9,
        "dir": "Across",
        "word": "DINER",
        "clue": "Railcar where a traveler can order supper"
      },
      {
        "x": 9,
        "y": 7,
        "dir": "Down",
        "word": "YARD",
        "clue": "Area where railcars are sorted"
      },
      {
        "x": 0,
        "y": 7,
        "dir": "Across",
        "word": "FARE",
        "clue": "The price of a journey"
      }
    ]
  },
  {
    "id": 56,
    "title": "Port and starboard pairs",
    "kind": "Codebreaking",
    "level": "Easy",
    "intro": "A deckhand put a message on four luggage strips. He exchanged the left and right tiles in each neighboring pair, restarting at the beginning of every strip.",
    "exhibit": "ESDN HTE RGEEN LFGA",
    "clues": [
      "A final tile without a partner stays where it is."
    ],
    "questions": [
      "What message did the sender leave?"
    ],
    "answer": "Send the green flag.",
    "why": "Restore each pair to its original order. ES becomes SE and DN becomes ND. Repeating on the other strips gives THE, GREEN and FLAG."
  },
  {
    "id": 57,
    "title": "Mail across midnight",
    "kind": "Detective skills",
    "level": "Hard",
    "intro": "Three telegraph stations stamped the same dispatch at handover. Their clerks used local time and local dates. A fourth slip claims to record a reply from the last station.",
    "tables": [
      [
        "Station clocks",
        [
          "Station",
          "Local clock compared with Harbor Time"
        ],
        [
          [
            "Alder",
            "2 hours ahead"
          ],
          [
            "Birch",
            "1 hour behind"
          ],
          [
            "Cedar",
            "3 hours ahead"
          ]
        ]
      ],
      [
        "Original slips",
        [
          "Event",
          "Station stamp"
        ],
        [
          [
            "Dispatch leaves Alder",
            "Tuesday 00:20"
          ],
          [
            "Dispatch reaches Birch",
            "Monday 21:38"
          ],
          [
            "Dispatch reaches Cedar",
            "Tuesday 02:04"
          ],
          [
            "Claimed reply leaves Cedar",
            "Tuesday 01:59"
          ]
        ]
      ]
    ],
    "clues": [
      "All dates refer to the same Monday night and Tuesday morning. A reply to this dispatch could only be written after its arrival at Cedar."
    ],
    "questions": [
      "How many minutes elapsed from Alder's departure to Cedar's receipt?",
      "Which slip cannot be a reply to this dispatch, and how early is it?"
    ],
    "answer": "44 minutes in transit. The claimed 01:59 reply left Cedar five minutes before the dispatch arrived.",
    "why": "In Harbor Time the dispatch left at 22:20 Monday, reached Birch at 22:38, and Cedar at 23:04. The reply stamp converts to 22:59. Birch's Monday date is consistent once the local clock difference is removed."
  },
  {
    "id": 58,
    "title": "The signature in the rain",
    "kind": "Whodunit",
    "level": "Medium",
    "intro": "An umbrella blew inside out as its owner fled with the regatta purse. The marshal copied the five letters on its canopy onto her cuff before the rain washed the lettering away. She wrote MARIN.",
    "clues": [
      "Every contestant carried their own registered canopy throughout the race. The thief was one of the four contestants below.",
      "A second witness confirmed that the marshal got exactly one letter wrong. It was a substitution in place: she neither reversed nor shifted any letters."
    ],
    "questions": [
      "Whose canopy did the marshal see?",
      "Explain why the initials alone would point you toward the wrong people as well."
    ],
    "answer": "Esme carried MARON.",
    "why": "MARON differs from MARIN only at the fourth position. MORAN, MEREN and MIRON each differ at both the second and fourth positions. All four share the same initial.",
    "tables": [
      [
        "Registration cards",
        [
          "Contestant",
          "Canopy"
        ],
        [
          [
            "Niko",
            "MORAN"
          ],
          [
            "Esme",
            "MARON"
          ],
          [
            "Lottie",
            "MEREN"
          ],
          [
            "Jai",
            "MIRON"
          ]
        ]
      ]
    ]
  },
  {
    "id": 59,
    "title": "Six windows at dusk",
    "kind": "Logic",
    "level": "Hard",
    "intro": "A watcher saw six hotel windows light up, once each. The switchboard recorded the room names on separate slips. Recover the sequence.",
    "clues": [
      "Finch comes immediately after Lark.",
      "Lark comes earlier than Bell.",
      "Bell comes earlier than Iris.",
      "Bell comes immediately after Dove.",
      "There is one entry between Bell and Iris."
    ],
    "tableform": {
      "rows": [
        "First light",
        "Second",
        "Third",
        "Fourth",
        "Fifth",
        "Last light"
      ],
      "cols": [
        [
          "Room",
          "Aster",
          "Bell",
          "Dove",
          "Finch",
          "Iris",
          "Lark"
        ]
      ]
    },
    "answer": "Lark → Finch → Dove → Bell → Aster → Iris.",
    "why": "Set aside the clue “Lark comes earlier than Bell.” and fill the slots using the other clues. The possible orders, using the first letter of each name, are DBAILF, LFDBAI. Apply the set-aside clue: only Lark → Finch → Dove → Bell → Aster → Iris survives."
  },
  {
    "id": 60,
    "title": "The last basketmaker",
    "kind": "Word search",
    "level": "Medium",
    "intro": "An order for the winter market went astray. Ten workshop words identify the basketmaker’s materials, tools and techniques. Look in any of eight directions.",
    "grid": [
      "RBDGFSIIRNJA",
      "BUJAGJWXASUH",
      "IBDOQSOGTRUA",
      "YRREEDLETIXL",
      "WKEKJBLGAMYZ",
      "MGUKEEIANFOA",
      "VACCCQWTYKYH",
      "CYXPOINENGAX",
      "APOCKIWQANME",
      "SEAILUEYDVQN",
      "RLUPGMGLXYEA",
      "MZSGTCEKATSC"
    ],
    "locations": {
      "WILLOW": [
        [
          6,
          6
        ],
        [
          6,
          1
        ]
      ],
      "RATTAN": [
        [
          8,
          0
        ],
        [
          8,
          5
        ]
      ],
      "WICKER": [
        [
          6,
          8
        ],
        [
          1,
          3
        ]
      ],
      "HANDLE": [
        [
          11,
          6
        ],
        [
          6,
          11
        ]
      ],
      "SPLINT": [
        [
          2,
          11
        ],
        [
          7,
          6
        ]
      ],
      "STAKE": [
        [
          10,
          11
        ],
        [
          6,
          11
        ]
      ],
      "WEAVE": [
        [
          6,
          6
        ],
        [
          10,
          10
        ]
      ],
      "REED": [
        [
          2,
          3
        ],
        [
          5,
          3
        ]
      ],
      "CANE": [
        [
          11,
          11
        ],
        [
          11,
          8
        ]
      ],
      "RIM": [
        [
          9,
          2
        ],
        [
          9,
          4
        ]
      ]
    }
  },
  {
    "id": 61,
    "title": "Under the safelight",
    "kind": "Crossword",
    "level": "Hard",
    "intro": "An envelope of old negatives takes Sal below street level to a photographer’s darkroom. Reconstruct the vocabulary of a photograph made on film.",
    "entries": [
      {
        "x": 7,
        "y": 5,
        "dir": "Across",
        "word": "TRAY",
        "clue": "Shallow vessel for processing a sheet of paper"
      },
      {
        "x": 7,
        "y": 0,
        "dir": "Down",
        "word": "LATENT",
        "clue": "Describing the image on exposed film before it is developed"
      },
      {
        "x": 3,
        "y": 2,
        "dir": "Across",
        "word": "PRINT",
        "clue": "The finished photograph on paper"
      },
      {
        "x": 3,
        "y": 0,
        "dir": "Across",
        "word": "EASEL",
        "clue": "It holds paper flat under the enlarger"
      },
      {
        "x": 8,
        "y": 5,
        "dir": "Down",
        "word": "REEL",
        "clue": "Spiral holder for film inside the developing tank"
      },
      {
        "x": 1,
        "y": 7,
        "dir": "Across",
        "word": "NEGATIVE",
        "clue": "Film image whose light and dark values are reversed"
      },
      {
        "x": 2,
        "y": 3,
        "dir": "Down",
        "word": "DODGE",
        "clue": "Hold back light to lighten part of a photographic print"
      },
      {
        "x": 4,
        "y": 5,
        "dir": "Down",
        "word": "GRAIN",
        "clue": "The visible texture of a greatly enlarged film image"
      },
      {
        "x": 0,
        "y": 4,
        "dir": "Across",
        "word": "STOP",
        "clue": "The bath between developer and fixer"
      },
      {
        "x": 6,
        "y": 6,
        "dir": "Down",
        "word": "FIXER",
        "clue": "Bath that removes undeveloped silver halide"
      },
      {
        "x": 1,
        "y": 9,
        "dir": "Across",
        "word": "BURN",
        "clue": "Give part of a print extra exposure to darken it"
      },
      {
        "x": 0,
        "y": 0,
        "dir": "Down",
        "word": "TONGS",
        "clue": "Implements that keep fingers clear of the chemical baths"
      }
    ]
  },
  {
    "id": 62,
    "title": "Starlight through two cards",
    "kind": "Detective skills",
    "level": "Medium",
    "intro": "The planetarium's miniature skylight uses two punched cards held flat against one another. A visitor photographed the projected stars. One card remains in its frame; which other card was paired with it?",
    "tables": [
      [
        "Numbered holes",
        [
          "Evidence",
          "Open holes (left to right)"
        ],
        [
          [
            "Fixed card",
            "1, 2, 4, 6, 7, 9"
          ],
          [
            "Photograph of stars",
            "2, 6, 9"
          ],
          [
            "Candidate Ash",
            "2, 3, 4, 6, 9"
          ],
          [
            "Candidate Beech",
            "2, 3, 5, 6, 8, 9"
          ],
          [
            "Candidate Elm",
            "2, 5, 6, 8"
          ],
          [
            "Candidate Yew",
            "1, 2, 6, 9"
          ]
        ]
      ]
    ],
    "clues": [
      "Hole positions are numbered in the same direction on every card. Light passes through a position only when both cards have a hole there. The photograph shows every star."
    ],
    "questions": [
      "Which candidate fits the photograph exactly?",
      "Why do its extra holes fail to appear?"
    ],
    "answer": "Beech. Its extra holes at 3, 5 and 8 are covered by the fixed card.",
    "why": "Ash would add star 4, Elm would lose star 9, and Yew would add star 1. Only Beech transmits exactly 2, 6 and 9 when placed against the fixed card."
  },
  {
    "id": 63,
    "title": "Second helpings",
    "kind": "Whodunit",
    "level": "Hard",
    "intro": "Someone slid the governor’s letter under a supper plate on the four-seat ferry table. The observer in the galley saw the culprit do it just after dessert was served. She knew it was the passenger whose plate then held the lemon cake, but passengers had passed the desserts around.",
    "clues": [
      "Seats A, B, C, D run clockwise. Nobody changed seats. At first A had lemon cake, B plum tart, C rice pudding, D pear.",
      "Every passenger first passed their dessert one seat clockwise. Then the passengers at B and D exchanged their desserts. Finally everyone passed their current dessert one seat counterclockwise.",
      "Tao sat opposite Mira. Mira sat immediately clockwise from Liv. Liv sat at B. Cal occupied the remaining seat."
    ],
    "questions": [
      "Who slipped the letter under the plate?",
      "Where did the lemon cake go during the two exchanges and the final pass?"
    ],
    "answer": "Mira, at C.",
    "why": "The lemon cake goes A → B on the first pass, B → D in the exchange, and D → C on the last pass. Liv is at B, so Mira is immediately clockwise at C. Tao sits at A opposite Mira, leaving Cal at D."
  },
  {
    "id": 64,
    "title": "The pearl in three tins",
    "kind": "Logic",
    "level": "Medium",
    "intro": "Ada hid a loose pearl in exactly one of three tea tins. She pasted a sentence on each lid and promised that exactly one sentence is true.",
    "clues": [
      "Copper tin: “The pearl is in the silver tin.”",
      "Silver tin: “The pearl is not in this tin.”",
      "Blue tin: “The pearl is not in the copper tin.”"
    ],
    "questions": [
      "Which tin holds the pearl?",
      "Which lid tells the truth?"
    ],
    "answer": "Copper holds the pearl. The silver lid tells the truth.",
    "why": "The copper and silver lids contradict one another, so exactly one of those two is already true. The blue lid must therefore be false. Its claim that the pearl is outside copper is false only if the pearl is inside copper."
  },
  {
    "id": 65,
    "title": "The pastry case at dawn",
    "kind": "Word search",
    "level": "Easy",
    "intro": "Before the café lights came on, the baker penciled eight items onto the glass. Find everything on the morning menu. Look across to the right, down, or diagonally down.",
    "grid": [
      "QMCDANISHC",
      "FULOEPCGBM",
      "KFSOOOSRYX",
      "OFMTNKIFFA",
      "BIZEROIQRK",
      "BNTCCUTEMU",
      "ADYHKIDMXL",
      "GXEUPZEEHU",
      "EIMNDVDBLN",
      "LOGTARTNSY"
    ],
    "locations": {
      "STRUDEL": [
        [
          2,
          2
        ],
        [
          8,
          8
        ]
      ],
      "BRIOCHE": [
        [
          8,
          1
        ],
        [
          2,
          7
        ]
      ],
      "MUFFIN": [
        [
          1,
          0
        ],
        [
          1,
          5
        ]
      ],
      "DANISH": [
        [
          3,
          0
        ],
        [
          8,
          0
        ]
      ],
      "COOKIE": [
        [
          2,
          0
        ],
        [
          7,
          5
        ]
      ],
      "SCONE": [
        [
          7,
          0
        ],
        [
          3,
          4
        ]
      ],
      "BAGEL": [
        [
          0,
          5
        ],
        [
          0,
          9
        ]
      ],
      "TART": [
        [
          3,
          9
        ],
        [
          6,
          9
        ]
      ]
    }
  },
  {
    "id": 66,
    "title": "The baker’s daybook",
    "kind": "Codebreaking",
    "level": "Easy",
    "intro": "A card addressed to the baker contained only number pairs. The four lines of his daybook supply the dictionary.",
    "exhibit": "2–2  2–3  2–4  2–5  3–1  3–2  3–3  3–4",
    "clues": [
      "The first number selects a line and the second selects a word on that line. Count from one.",
      "Read the selected words in card order."
    ],
    "questions": [
      "What message did the sender leave?"
    ],
    "answer": "Baker kept the key inside the copper kettle.",
    "why": "2–2 is the second word of line 2, BAKER. The next three pairs finish that line. The last four pairs select INSIDE THE COPPER KETTLE from line 3.",
    "tables": [
      [
        "Daybook",
        [
          "Line",
          "Entry"
        ],
        [
          [
            "1",
            "Our launch leaves before dawn"
          ],
          [
            "2",
            "The baker kept the key"
          ],
          [
            "3",
            "Inside the copper kettle"
          ],
          [
            "4",
            "By noon all was quiet"
          ]
        ]
      ]
    ]
  },
  {
    "id": 67,
    "title": "A sheet adrift",
    "kind": "Detective skills",
    "level": "Medium",
    "intro": "A thin theater program was made from six folded sheets nested together, then stapled down the fold. An entire sheet slipped out. Its first surviving scrap has page 5 on the front and page 6 on the back.",
    "tables": [
      [
        "Printer’s examples from this program",
        [
          "Sheet",
          "Four pages carried"
        ],
        [
          [
            "Outermost",
            "1, 2, 23, 24"
          ],
          [
            "Next sheet in",
            "3, 4, 21, 22"
          ]
        ]
      ]
    ],
    "clues": [
      "Pages are numbered 1 to 24 with no covers or inserts. Each successive sheet inward takes the next two low page numbers and the next two high page numbers."
    ],
    "questions": [
      "Which two higher-numbered pages also vanished?",
      "After page 4, which numbered page now comes next in the damaged program?"
    ],
    "answer": "Pages 19 and 20 vanished with 5 and 6. Page 7 now follows page 4.",
    "why": "The third sheet inward carries the low pair 5 and 6. Counting high pairs inward gives 23–24, 21–22, then 19–20. No other sheet was removed, so 7 is the next surviving page."
  },
  {
    "id": 68,
    "title": "The sleeve of peppermint drops",
    "kind": "Whodunit",
    "level": "Easy",
    "intro": "An enamel compass vanished from a collector’s tray. The collector heard it drop into one of four cardboard sweet sleeves as their owners left the cabin. A square of the culprit’s sleeve tore away on the edge of the tray. Both sides of the scrap survived.",
    "clues": [
      "The collector saw the compartment where the compass landed. Each guest had only their own sleeve and took it away immediately.",
      "The outer face of the scrap shows blue stripes; the inner lining has silver dots. The manufacturer used all four combinations shown on the invoice."
    ],
    "questions": [
      "Who has the compass?",
      "Which guest would be falsely implicated by the lining alone?"
    ],
    "answer": "Fenn has the compass. The lining alone would also implicate Otis.",
    "why": "Blue stripes narrow the field to Fenn and Una. Silver dots narrow it to Fenn and Otis. Fenn is their only intersection.",
    "tables": [
      [
        "Confectioner’s invoice",
        [
          "Guest",
          "Outer stripes",
          "Inner dots"
        ],
        [
          [
            "Una",
            "Blue",
            "Gold"
          ],
          [
            "Fenn",
            "Blue",
            "Silver"
          ],
          [
            "Otis",
            "Red",
            "Silver"
          ],
          [
            "May",
            "Red",
            "Gold"
          ]
        ]
      ]
    ]
  },
  {
    "id": 69,
    "title": "The lighthouse auction",
    "kind": "Logic",
    "level": "Medium",
    "intro": "The auctioneer sold five lots before tea. The cashier needs each lot in sale order to match the five anonymous payment slips.",
    "clues": [
      "Easel comes earlier than Globe.",
      "There is one entry between Violin and Clock.",
      "Violin comes earlier than Clock.",
      "Easel comes immediately after Clock."
    ],
    "tableform": {
      "rows": [
        "Lot 1",
        "Lot 2",
        "Lot 3",
        "Lot 4",
        "Lot 5"
      ],
      "cols": [
        [
          "Object",
          "Clock",
          "Easel",
          "Globe",
          "Lamp",
          "Violin"
        ]
      ]
    },
    "answer": "Violin → Lamp → Clock → Easel → Globe.",
    "why": "Set aside the clue “Easel comes earlier than Globe.” and fill the slots using the other clues. The possible orders, using the first letter of each name, are GVLCE, LVGCE, VGCEL, VLCEG. Apply the set-aside clue: only Violin → Lamp → Clock → Easel → Globe survives."
  },
  {
    "id": 70,
    "title": "The surveyor’s margin",
    "kind": "Crossword",
    "level": "Medium",
    "intro": "Sal notices the shore is missing from a map engraved before the sea wall was built. Decipher the surveyor’s terms in its margin.",
    "entries": [
      {
        "x": 1,
        "y": 9,
        "dir": "Across",
        "word": "BASIN",
        "clue": "Area drained by a river and its tributaries"
      },
      {
        "x": 5,
        "y": 5,
        "dir": "Down",
        "word": "LEGEND",
        "clue": "Key explaining a map’s symbols"
      },
      {
        "x": 5,
        "y": 10,
        "dir": "Across",
        "word": "DELTA",
        "clue": "Land built up by a river at its mouth"
      },
      {
        "x": 1,
        "y": 6,
        "dir": "Across",
        "word": "RIDGE",
        "clue": "Long narrow crest marked by a series of high points"
      },
      {
        "x": 1,
        "y": 0,
        "dir": "Down",
        "word": "CONTOUR",
        "clue": "Line joining points of equal elevation"
      },
      {
        "x": 0,
        "y": 2,
        "dir": "Across",
        "word": "INSET",
        "clue": "A small map set within a larger one"
      },
      {
        "x": 5,
        "y": 8,
        "dir": "Across",
        "word": "EAST",
        "clue": "Direction opposite the W on a compass"
      },
      {
        "x": 0,
        "y": 4,
        "dir": "Across",
        "word": "NORTH",
        "clue": "Direction toward which a map’s N arrow points"
      },
      {
        "x": 7,
        "y": 4,
        "dir": "Down",
        "word": "ATLAS",
        "clue": "A bound collection of maps"
      },
      {
        "x": 6,
        "y": 4,
        "dir": "Across",
        "word": "DATUM",
        "clue": "Reference surface used for measuring elevations"
      },
      {
        "x": 6,
        "y": 1,
        "dir": "Down",
        "word": "GRID",
        "clue": "Network of intersecting reference lines"
      },
      {
        "x": 8,
        "y": 0,
        "dir": "Down",
        "word": "ISLET",
        "clue": "A patch of land smaller than an island in everyday speech"
      },
      {
        "x": 0,
        "y": 0,
        "dir": "Across",
        "word": "SCALE",
        "clue": "Relationship between distance on paper and distance on the ground"
      }
    ]
  },
  {
    "id": 71,
    "title": "Among the signal flags",
    "kind": "Word search",
    "level": "Hard",
    "intro": "A wireless operator spelled part of a message with twelve words from the international spelling alphabet. Find the exact spellings on the list. Look in any of eight directions.",
    "grid": [
      "JEKIMCYCWHETA",
      "JYDHURQWXGRNB",
      "AHTMXJXBTNEMJ",
      "CMTTGROTCIVDA",
      "QTIGEJXSXVBOV",
      "SFFLOICXVDXRW",
      "EWCOBLLZQPYMO",
      "XBOGXDFUSKBOP",
      "DKTOETOLJIRGW",
      "XDHLJBRUKNANV",
      "LCTRUBYONZVAJ",
      "EAGUOPFTTFOTW",
      "OVXTEHOTELBLU"
    ],
    "locations": {
      "FOXTROT": [
        [
          2,
          5
        ],
        [
          8,
          11
        ]
      ],
      "JULIETT": [
        [
          8,
          8
        ],
        [
          2,
          2
        ]
      ],
      "VICTOR": [
        [
          10,
          3
        ],
        [
          5,
          3
        ]
      ],
      "BRAVO": [
        [
          10,
          7
        ],
        [
          10,
          11
        ]
      ],
      "DELTA": [
        [
          5,
          7
        ],
        [
          1,
          11
        ]
      ],
      "HOTEL": [
        [
          5,
          12
        ],
        [
          9,
          12
        ]
      ],
      "TANGO": [
        [
          11,
          11
        ],
        [
          11,
          7
        ]
      ],
      "ECHO": [
        [
          0,
          11
        ],
        [
          3,
          8
        ]
      ],
      "GOLF": [
        [
          3,
          4
        ],
        [
          6,
          7
        ]
      ],
      "LIMA": [
        [
          3,
          5
        ],
        [
          0,
          2
        ]
      ],
      "MIKE": [
        [
          4,
          0
        ],
        [
          1,
          0
        ]
      ],
      "ZULU": [
        [
          7,
          6
        ],
        [
          7,
          9
        ]
      ]
    }
  },
  {
    "id": 72,
    "title": "The harbor clock loses ground",
    "kind": "Detective skills",
    "level": "Hard",
    "intro": "The harbor clock was running slowly but at a perfectly steady rate. A photographer snapped it twice alongside a certified time signal. A third photograph catches a parcel being handed over beneath the same clock.",
    "tables": [
      [
        "Clock photographs",
        [
          "Photograph",
          "Certified time",
          "Harbor dial"
        ],
        [
          [
            "Morning check",
            "09:00",
            "08:58"
          ],
          [
            "Noon check",
            "12:00",
            "11:52"
          ],
          [
            "Parcel handover",
            "Unknown",
            "10:25"
          ]
        ]
      ]
    ],
    "clues": [
      "The dial readings are exact to the minute. Its rate remained constant between the two checks."
    ],
    "questions": [
      "When did the handover occur in certified time?",
      "How far behind was the harbor clock then?"
    ],
    "answer": "10:30 certified time. The dial was five minutes slow.",
    "why": "In 180 real minutes the dial advanced 174 minutes, from 08:58 to 11:52. The handover reading, 10:25, is 87 dial minutes after 08:58, exactly halfway through the interval. Half of 180 real minutes is 90, so the actual time was 10:30."
  },
  {
    "id": 73,
    "title": "The lie in the guest book",
    "kind": "Whodunit",
    "level": "Hard",
    "intro": "An antiques dealer discovered that someone had taken his silver tide dial. Four customers had signed the guest book in order. Each customer had seen the dial on the counter on arrival except the thief’s successors, who had found the stand empty. That afternoon Sal took four brief statements.",
    "clues": [
      "The thief pocketed the dial during their own visit. One customer visited at a time. No one returned. Every innocent customer truthfully reported whether the dial was there upon arrival. The thief lied in that report.",
      "The sequence of reports was: Vera, “It was there.” Odo, “It was there.” Jess, “It was gone.” Yun, “It was gone.”"
    ],
    "questions": [
      "Which customer took the dial?",
      "Why can the customer immediately before that person be cleared?"
    ],
    "answer": "Jess took the dial.",
    "why": "The thief necessarily saw the dial on arrival, so their lie must be “It was gone.” Every later person truthfully reports it gone. The thief is therefore the first person to say it was gone: Jess. Odo’s report that it was there was true, and the thief had to lie."
  },
  {
    "id": 74,
    "title": "The last connection",
    "kind": "Logic",
    "level": "Medium",
    "intro": "A courier must take a ferry to East Quay and a train from there to Vale. Minimize arrival time in Vale. Allow eight full minutes from a ferry’s arrival to a train’s departure.",
    "clues": [
      "Tickets are valid for any listed service. Each row is a direct journey. The inspector’s watch reads 8:00 at the ferry pier."
    ],
    "questions": [
      "Which ferry and train give the earliest arrival?",
      "Why can’t the courier use the earliest-arriving train?"
    ],
    "answer": "Take the 8:05 Heron and the 8:43 Reed train. Vale arrival is 9:06.",
    "why": "Lark is the fastest train but leaves at 8:35. Even Heron docks at 8:29, just six minutes before that departure. Heron makes Reed with fourteen minutes. Finch docks at 8:36 and misses Reed by one minute; the later ferry is too late as well.",
    "tables": [
      [
        "Ferry to East Quay",
        [
          "Ferry",
          "Departs",
          "Docks"
        ],
        [
          [
            "Heron",
            "8:05",
            "8:29"
          ],
          [
            "Finch",
            "8:12",
            "8:36"
          ],
          [
            "Wren",
            "8:19",
            "8:42"
          ]
        ]
      ],
      [
        "Train to Vale",
        [
          "Train",
          "Departs",
          "Arrives"
        ],
        [
          [
            "Lark",
            "8:35",
            "8:58"
          ],
          [
            "Reed",
            "8:43",
            "9:06"
          ],
          [
            "Ash",
            "8:52",
            "9:21"
          ]
        ]
      ]
    ]
  },
  {
    "id": 75,
    "title": "Four ribs of a fan",
    "kind": "Codebreaking",
    "level": "Medium",
    "intro": "The four ribs of a folding fan each carry four letters. An archivist copied the ribs in order from left to right, reading each rib from its hinge to its tip.",
    "exhibit": "RTAN EHST AETR DLEY",
    "clues": [
      "Each displayed group is one vertical column. Write the first group down the left side, then the next beside it.",
      "Read across the completed rows, starting at the hinge. Add spaces."
    ],
    "questions": [
      "What message did the sender leave?"
    ],
    "answer": "Read the last entry.",
    "why": "The four rows read READ, THEL, ASTE and NTRY. Join them before restoring the spaces: the instruction points to the last entry."
  },
  {
    "id": 76,
    "title": "Supper on the crossing",
    "kind": "Crossword",
    "level": "Easy",
    "intro": "The cook can account for every pan in the galley except the one holding a folded note. Fill the squares from her supper instructions.",
    "entries": [
      {
        "x": 2,
        "y": 6,
        "dir": "Across",
        "word": "SIEVE",
        "clue": "Shake flour through this fine mesh"
      },
      {
        "x": 2,
        "y": 6,
        "dir": "Down",
        "word": "STOCK",
        "clue": "Broth that might begin with bones and trimmings"
      },
      {
        "x": 6,
        "y": 4,
        "dir": "Down",
        "word": "STEAM",
        "clue": "Cook over boiling water"
      },
      {
        "x": 0,
        "y": 9,
        "dir": "Across",
        "word": "DICE",
        "clue": "Cut into little cubes"
      },
      {
        "x": 6,
        "y": 7,
        "dir": "Across",
        "word": "APRON",
        "clue": "Garment tied on before chopping onions"
      },
      {
        "x": 4,
        "y": 2,
        "dir": "Down",
        "word": "GRATE",
        "clue": "Reduce hard cheese to shreds"
      },
      {
        "x": 9,
        "y": 6,
        "dir": "Down",
        "word": "POACH",
        "clue": "Cook an egg gently in liquid without its shell"
      },
      {
        "x": 0,
        "y": 5,
        "dir": "Down",
        "word": "KNEAD",
        "clue": "Work dough with the heels of the hands"
      },
      {
        "x": 6,
        "y": 4,
        "dir": "Across",
        "word": "SPICE",
        "clue": "Clove or cinnamon, for example"
      },
      {
        "x": 0,
        "y": 3,
        "dir": "Across",
        "word": "PANTRY",
        "clue": "Room where the cook stores dry provisions"
      },
      {
        "x": 10,
        "y": 0,
        "dir": "Down",
        "word": "LADLE",
        "clue": "Deep spoon for serving soup"
      }
    ]
  },
  {
    "id": 77,
    "title": "Swatches from the loom",
    "kind": "Word search",
    "level": "Medium",
    "intro": "The customs desk received a ring of fabric swatches. Find the ten labels that came loose in the crossing. Look in any of eight directions.",
    "grid": [
      "WEAIKWECCYYO",
      "LMUSLINHAKGF",
      "WIEYBCTIXIHW",
      "JQNIPEEFUSAQ",
      "PIDEVMJFSPFP",
      "JTELNZMOPTPY",
      "NJEJXIJNYOIS",
      "PVWVNNWWPPTE",
      "CHTENYILGRPR",
      "NKDOQFITKMGG",
      "VHKRZNOMACEE",
      "KSAMADIRPSXL"
    ],
    "locations": {
      "CHIFFON": [
        [
          7,
          0
        ],
        [
          7,
          6
        ]
      ],
      "VELVET": [
        [
          1,
          7
        ],
        [
          6,
          2
        ]
      ],
      "MUSLIN": [
        [
          1,
          1
        ],
        [
          6,
          1
        ]
      ],
      "DAMASK": [
        [
          5,
          11
        ],
        [
          0,
          11
        ]
      ],
      "POPLIN": [
        [
          10,
          5
        ],
        [
          5,
          10
        ]
      ],
      "LINEN": [
        [
          0,
          1
        ],
        [
          4,
          5
        ]
      ],
      "SATIN": [
        [
          9,
          11
        ],
        [
          5,
          7
        ]
      ],
      "TWEED": [
        [
          2,
          8
        ],
        [
          2,
          4
        ]
      ],
      "SERGE": [
        [
          11,
          6
        ],
        [
          11,
          10
        ]
      ],
      "DENIM": [
        [
          2,
          9
        ],
        [
          6,
          5
        ]
      ]
    }
  },
  {
    "id": 78,
    "title": "The uncut audition",
    "kind": "Detective skills",
    "level": "Medium",
    "intro": "Three recordings survive from the ship's talent show. The program says the winning take was performed straight through. All three singers performed the same verse, but an independently recorded rehearsal tick continued under each song.",
    "tables": [
      [
        "Reference tick",
        [
          "Endless five-beat cycle"
        ],
        [
          [
            "Tap · Ring · Tap · Hiss · Knock"
          ]
        ]
      ],
      [
        "Beats audible on each surviving take",
        [
          "Take",
          "Sequence heard"
        ],
        [
          [
            "A",
            "Hiss · Knock · Tap · Ring · Hiss · Knock"
          ],
          [
            "B",
            "Tap · Hiss · Knock · Tap · Ring · Tap"
          ],
          [
            "C",
            "Ring · Tap · Hiss · Knock · Ring · Tap"
          ]
        ]
      ]
    ],
    "clues": [
      "The tick runs in its stated order continuously, wrapping to the first beat after Knock. Every beat is audible and evenly spaced. The winning take is the only surviving take with six consecutive reference beats."
    ],
    "questions": [
      "Which take is the winner?",
      "At which beat of the reference cycle does its excerpt start?"
    ],
    "answer": "Take B, beginning at the third beat of the cycle.",
    "why": "Tap occurs twice in the reference. The Tap followed by Hiss is its third beat. From there Hiss, Knock, Tap, Ring and Tap follow in sequence. In A a Hiss replaces the Tap after Ring; in C a Ring replaces the Tap after Knock."
  },
  {
    "id": 79,
    "title": "The silent bidder",
    "kind": "Whodunit",
    "level": "Medium",
    "intro": "At a seaside auction, one of four registered bidders slipped a forged bid into the box to inflate the price of a compass. Each bidder wrote their own paddle number on their slip, making a carbon copy for the clerk. The carbon number had smeared on the copy of the fake, leaving only a two-digit number ending in an even digit. A small counter beside the box had recorded its deposit.",
    "clues": [
      "The counter records the total number of bids AFTER each deposit. A witness saw the forged bid go in when the counter changed from 12 to 13.",
      "Bidders used only their own paddles. For each bidder the clerk recorded the counter reading at the beginning and end of the uninterrupted spell when they alone stood at the box. Intervals meet at their boundary values."
    ],
    "questions": [
      "Who slipped in the forged bid?",
      "Which other bidder would the visible final digit fail to clear?"
    ],
    "answer": "June, paddle 34.",
    "why": "The change 12 → 13 occurred during June’s spell, which started at 12 and ended at 16. Max’s spell ended when the counter first reached 12, one deposit too early. Even-numbered paddle 28 belongs to Pat and also fits the partial carbon, but Pat’s spell ended at 7.",
    "tables": [
      [
        "Bid-box spells",
        [
          "Bidder",
          "Paddle",
          "Start → end"
        ],
        [
          [
            "Pat",
            "28",
            "4 → 7"
          ],
          [
            "Max",
            "31",
            "7 → 12"
          ],
          [
            "June",
            "34",
            "12 → 16"
          ],
          [
            "Ash",
            "37",
            "16 → 18"
          ]
        ]
      ]
    ]
  },
  {
    "id": 80,
    "title": "The brass band’s encore",
    "kind": "Logic",
    "level": "Medium",
    "intro": "A set list slipped between the floorboards of the bandstand. The players can recall the following facts about the five soloists. Put their solos in concert order.",
    "clues": [
      "Flute comes earlier than Tuba.",
      "Flute comes earlier than Oboe.",
      "There is one entry between Flute and Cornet.",
      "There are two entries between Oboe and Tuba.",
      "Oboe comes neither first nor last."
    ],
    "tableform": {
      "rows": [
        "Opening solo",
        "Second solo",
        "Third solo",
        "Fourth solo",
        "Closing solo"
      ],
      "cols": [
        [
          "Instrument",
          "Cornet",
          "Flute",
          "Oboe",
          "Tuba",
          "Viola"
        ]
      ]
    },
    "answer": "Flute → Oboe → Cornet → Viola → Tuba.",
    "why": "Set aside the clue “Flute comes earlier than Tuba.” and fill the slots using the other clues. The possible orders, using the first letter of each name, are FOCVT, TVFOC. Apply the set-aside clue: only Flute → Oboe → Cornet → Viola → Tuba survives."
  },
  {
    "id": 81,
    "title": "The stopped mantel clock",
    "kind": "Crossword",
    "level": "Hard",
    "intro": "The dial reads a quarter past nine, but the witness heard ten strokes. Try the watchmaker’s bench vocabulary before you trust either clue.",
    "entries": [
      {
        "x": 3,
        "y": 7,
        "dir": "Across",
        "word": "HAND",
        "clue": "It points out an hour or minute"
      },
      {
        "x": 5,
        "y": 2,
        "dir": "Down",
        "word": "PINION",
        "clue": "Smaller toothed wheel in a gear pair"
      },
      {
        "x": 5,
        "y": 2,
        "dir": "Across",
        "word": "PIVOT",
        "clue": "The slender end of a shaft that turns in a bearing"
      },
      {
        "x": 1,
        "y": 4,
        "dir": "Across",
        "word": "SPRING",
        "clue": "Coiled store of energy in a wound clock"
      },
      {
        "x": 3,
        "y": 6,
        "dir": "Down",
        "word": "CHIME",
        "clue": "A sequence of notes sounded by a clock"
      },
      {
        "x": 9,
        "y": 2,
        "dir": "Down",
        "word": "TRAIN",
        "clue": "A series of gears transmitting motion"
      },
      {
        "x": 3,
        "y": 0,
        "dir": "Down",
        "word": "ARBOR",
        "clue": "The shaft on which a clock wheel turns"
      },
      {
        "x": 0,
        "y": 0,
        "dir": "Across",
        "word": "ESCAPE",
        "clue": "This word precedes “wheel” in a ticking escapement"
      },
      {
        "x": 6,
        "y": 7,
        "dir": "Down",
        "word": "DIAL",
        "clue": "The face that carries the hour marks"
      },
      {
        "x": 2,
        "y": 10,
        "dir": "Across",
        "word": "JEWEL",
        "clue": "Hard stone used as a low-friction bearing"
      },
      {
        "x": 1,
        "y": 2,
        "dir": "Down",
        "word": "FUSEE",
        "clue": "Conical pulley once used to even out a spring’s pull"
      }
    ]
  },
  {
    "id": 82,
    "title": "Four marks on a timetable",
    "kind": "Detective skills",
    "level": "Hard",
    "intro": "The station archive has a route sheet bearing a penciled circle, a red cancellation, a violet arrival stamp and the clerk's blue signature. An examiner could tell which dry mark lay under the other at each crossing.",
    "tables": [
      [
        "Three inspected crossings",
        [
          "Where the marks meet",
          "Examiner's finding"
        ],
        [
          [
            "Circle and cancellation",
            "The continuous red line runs over the graphite circle."
          ],
          [
            "Signature and stamp",
            "Blue ink crosses on top of the violet stamp."
          ],
          [
            "Stamp and cancellation",
            "Violet ink covers a small patch of the red line."
          ]
        ]
      ]
    ],
    "clues": [
      "Each mark was made once. At a crossing, the mark on top was made later."
    ],
    "questions": [
      "Reconstruct the order of all four marks, earliest to latest.",
      "A witness says the clerk signed before the route was cancelled. Is that possible?"
    ],
    "answer": "Pencil circle → red cancellation → violet arrival stamp → blue signature. The witness's account is impossible.",
    "why": "The circle lies beneath the red mark, the red mark lies beneath the violet stamp, and the stamp lies beneath the signature. These three pairwise observations give a complete chain, even though the signature and cancellation do not meet."
  },
  {
    "id": 83,
    "title": "The postcard nobody bought",
    "kind": "Whodunit",
    "level": "Medium",
    "intro": "A killer mailed a postcard from the island after the lighthouse curator’s death. On it was a detail known only to the killer. Three of the four suspects could prove their entire island visit took place outside the hours when the card could have been sent. The postmark hid the date, but the souvenir design was legible.",
    "clues": [
      "The special card went on sale at 08:00 on Thursday. It was sold only on the island; the post office stopped accepting this edition after closing on Saturday. No suspect possessed one in advance.",
      "The post office opened 09:00–12:00 on Friday and 09:00–17:00 Thursday and Saturday. Staff applied this particular postmark only over the counter, in person. Each suspect made only the visit listed."
    ],
    "questions": [
      "Which suspect could have mailed the postcard?",
      "Who was on the island after the card went on sale but missed the open counter?"
    ],
    "answer": "Niamh could mail it. Both Basil and Gwen missed the open counter.",
    "why": "Niamh was on the island Saturday from 16:40 until 17:20, giving her twenty minutes at the open counter. Hal’s Wednesday visit was too early. Basil arrived Friday after noon and Gwen left Thursday before 09:00.",
    "tables": [
      [
        "Ferry landing and departure receipts",
        [
          "Passenger",
          "Arrival",
          "Departure"
        ],
        [
          [
            "Gwen",
            "Thu 07:00",
            "Thu 08:45"
          ],
          [
            "Niamh",
            "Sat 16:40",
            "Sat 17:20"
          ],
          [
            "Hal",
            "Wed 10:10",
            "Wed 15:20"
          ],
          [
            "Basil",
            "Fri 12:10",
            "Fri 16:00"
          ]
        ]
      ]
    ]
  },
  {
    "id": 84,
    "title": "The two-pan customs scale",
    "kind": "Logic",
    "level": "Medium",
    "intro": "One of six sample weights is too heavy. The other five weigh exactly the same. Customs has only an equal-arm balance. Sal must identify the impostor in at most two weighings.",
    "clues": [
      "The weights are labeled A through F. For your first weighing, put A and B on the left and C and D on the right.",
      "The second weighing may depend on the first result."
    ],
    "questions": [
      "Describe your second weighing if the first balances.",
      "What do you do if either side is heavier?"
    ],
    "answer": "Balance: weigh E against F. An imbalance: weigh the two weights from the heavier side against each other.",
    "why": "On a balance, A through D are normal, leaving E and F. On an imbalance, the impostor must be one of the two weights on the heavy pan. In either case the heavier weight in the second weighing is the impostor."
  },
  {
    "id": 85,
    "title": "Night at the observatory",
    "kind": "Word search",
    "level": "Hard",
    "intro": "The folded star chart records twelve constellations. Trace their names through the observatory grid. Look in any of eight directions.",
    "grid": [
      "GALIUQAHPOXQF",
      "CCYGNUSEUHLSC",
      "MOVHYKRZQYXUY",
      "MKRRASAVRYCTD",
      "THHIEKDAVEAER",
      "ZDLUOLEELISCA",
      "SDSAPNMTZASNC",
      "LUVBKVOKCHIYO",
      "FLSEQWROEROEG",
      "IEOAZZDNAAPBK",
      "OWTVGJNCVPEZZ",
      "CVTWAEANZMIME",
      "JILRAPPMNQAUB"
    ],
    "locations": {
      "CASSIOPEIA": [
        [
          10,
          3
        ],
        [
          10,
          12
        ]
      ],
      "ANDROMEDA": [
        [
          6,
          11
        ],
        [
          6,
          3
        ]
      ],
      "PERSEUS": [
        [
          8,
          0
        ],
        [
          2,
          6
        ]
      ],
      "PEGASUS": [
        [
          6,
          12
        ],
        [
          0,
          6
        ]
      ],
      "CYGNUS": [
        [
          1,
          1
        ],
        [
          6,
          1
        ]
      ],
      "AQUILA": [
        [
          6,
          0
        ],
        [
          1,
          0
        ]
      ],
      "CARINA": [
        [
          7,
          10
        ],
        [
          12,
          5
        ]
      ],
      "ORION": [
        [
          1,
          2
        ],
        [
          5,
          6
        ]
      ],
      "DRACO": [
        [
          12,
          3
        ],
        [
          12,
          7
        ]
      ],
      "CETUS": [
        [
          11,
          5
        ],
        [
          11,
          1
        ]
      ],
      "LYRA": [
        [
          10,
          1
        ],
        [
          7,
          4
        ]
      ],
      "PAVO": [
        [
          5,
          12
        ],
        [
          2,
          9
        ]
      ]
    }
  },
  {
    "id": 86,
    "title": "The silent switchboard",
    "kind": "Codebreaking",
    "level": "Medium",
    "intro": "A switchboard operator tapped a sequence onto the desk. The bellhop wrote down the taps in groups. Each group represents one letter.",
    "exhibit": "777 444 66 4 / 8 44 33 / 22 33 555 555",
    "clues": [
      "The keys read 2 ABC, 3 DEF, 4 GHI, 5 JKL, 6 MNO, 7 PQRS, 8 TUV, 9 WXYZ.",
      "One tap gives the first letter on that key, two taps the second, and so on. A slash separates words."
    ],
    "questions": [
      "What message did the sender leave?"
    ],
    "answer": "Ring the bell.",
    "why": "777 gives the third letter on key 7, R. Then 444 gives I, 66 gives N and 4 gives G. The next groups spell THE BELL."
  },
  {
    "id": 87,
    "title": "A chart cut to fit",
    "kind": "Detective skills",
    "level": "Medium",
    "intro": "The pilot's notebook contains a clipped chart with its scale missing. Three catalog cards give the scales of the only charts it could have come from. Two known shore distances can identify it.",
    "tables": [
      [
        "Measurements",
        [
          "Landmarks",
          "Distance on clipping",
          "Surveyed distance"
        ],
        [
          [
            "Jetty to light",
            "3 cm",
            "1.2 km"
          ],
          [
            "Light to beacon",
            "5 cm",
            "2.0 km"
          ],
          [
            "Beacon to mill",
            "7.5 cm",
            "Unknown"
          ]
        ]
      ],
      [
        "Catalog cards",
        [
          "Chart",
          "Scale"
        ],
        [
          [
            "Gull Sound",
            "1 cm represents 250 m"
          ],
          [
            "Mackerel Reach",
            "1 cm represents 400 m"
          ],
          [
            "Skerry Bay",
            "1 cm represents 500 m"
          ]
        ]
      ]
    ],
    "clues": [
      "The clipping is an original at full size. Distances given are straight lines between the labeled marks. One kilometer equals 1,000 meters."
    ],
    "questions": [
      "Which chart supplied the clipping?",
      "What distance should be entered for beacon to mill?"
    ],
    "answer": "Mackerel Reach. The beacon is 3.0 km from the mill.",
    "why": "1,200 meters divided by 3 cm gives 400 meters per centimeter. The second pair confirms it: 2,000 divided by 5 is also 400. Multiply 7.5 by 400 to get 3,000 meters, or 3.0 km."
  },
  {
    "id": 88,
    "title": "A lamp across the water",
    "kind": "Whodunit",
    "level": "Hard",
    "intro": "A harbor master was murdered in the minutes before the channel lights came on. A witness watched the killer flee to one of four moored boats. In the failing light she could not read its name, but she sketched its position in relation to three fixed lamps on the far breakwater.",
    "clues": [
      "The four boats lie on a straight east–west line. Looking due north, west is on your left and east on your right. Each boat stayed in its numbered berth and each suspect was the sole occupant of their own boat.",
      "Looking due north FROM the killer’s boat, the amber lamp lay to the left, the white lamp to the right, and the green lamp directly ahead or to the right. Lamps and berths share the east coordinates below. A larger coordinate is farther east.",
      "The killer was one of the boat occupants returning to their own boat."
    ],
    "questions": [
      "Which occupant was the killer?",
      "Which boat would still be possible if the witness forgot the green lamp?"
    ],
    "answer": "Sam, at coordinate 5. Without the green lamp, Ivy at 7 would also fit.",
    "why": "A left-hand amber at 3 requires a boat east of 3; a right-hand white at 8 requires one west of 8. That admits coordinates 5 and 7. Green is at 6, so from coordinate 7 it would be on the left. Only coordinate 5 satisfies all three bearings.",
    "tables": [
      [
        "Harbor survey",
        [
          "Lamp",
          "East coordinate"
        ],
        [
          [
            "Amber",
            "3"
          ],
          [
            "Green",
            "6"
          ],
          [
            "White",
            "8"
          ]
        ]
      ],
      [
        "Moorings",
        [
          "Occupant",
          "Berth coordinate"
        ],
        [
          [
            "Eli",
            "2"
          ],
          [
            "Sam",
            "5"
          ],
          [
            "Ivy",
            "7"
          ],
          [
            "Ruth",
            "9"
          ]
        ]
      ]
    ]
  },
  {
    "id": 89,
    "title": "The pattern drawer",
    "kind": "Logic",
    "level": "Hard",
    "intro": "A sailmaker chose four patterned samples for a regatta. Four buyers collected one sample each. Each person used one time slot and had one different item. All four slots and items were used.",
    "clues": [
      "Bryn did not have the check.",
      "Ren did not have the check.",
      "The stripe did not appear at 10:20.",
      "Bryn was one slot before the person with the stripe.",
      "The star did not appear at 10:40.",
      "The stripe did not appear at 10:40.",
      "Liv was one slot before the person with the check."
    ],
    "tableform": {
      "rows": [
        "Ada",
        "Bryn",
        "Liv",
        "Ren"
      ],
      "cols": [
        [
          "Collection",
          "10:00",
          "10:20",
          "10:40",
          "11:00"
        ],
        [
          "Sample",
          "Stripe",
          "Check",
          "Diamond",
          "Star"
        ]
      ]
    },
    "answer": "10:00 — Liv, star · 10:20 — Ada, check · 10:40 — Bryn, diamond · 11:00 — Ren, stripe.",
    "why": "Write the four times in order and try the remaining clues in those columns. Without “Bryn was one slot before the person with the stripe.” there are 14 ways to fill the sheet. Only one puts Bryn directly before the required item: Bryn is at 10:40, followed by Ren with the stripe at 11:00."
  },
  {
    "id": 90,
    "title": "Seed packets in the post",
    "kind": "Crossword",
    "level": "Easy",
    "intro": "Someone sent the stationmaster a packet with a seed in place of the stamp. Recover the words from the greenhouse workbench.",
    "entries": [
      {
        "x": 3,
        "y": 3,
        "dir": "Across",
        "word": "ROOT",
        "clue": "Plant part that usually takes up water below ground"
      },
      {
        "x": 6,
        "y": 2,
        "dir": "Down",
        "word": "STEM",
        "clue": "The stalk supporting a flower"
      },
      {
        "x": 4,
        "y": 2,
        "dir": "Down",
        "word": "POLLEN",
        "clue": "Dust carried from flower to flower by bees"
      },
      {
        "x": 6,
        "y": 5,
        "dir": "Across",
        "word": "MULCH",
        "clue": "Material spread over the soil to help retain moisture"
      },
      {
        "x": 8,
        "y": 3,
        "dir": "Down",
        "word": "BULB",
        "clue": "The underground store from which a tulip grows"
      },
      {
        "x": 8,
        "y": 3,
        "dir": "Across",
        "word": "BUD",
        "clue": "A flower before it opens"
      },
      {
        "x": 0,
        "y": 6,
        "dir": "Across",
        "word": "TROWEL",
        "clue": "Small hand tool for planting seedlings"
      },
      {
        "x": 0,
        "y": 4,
        "dir": "Down",
        "word": "PETAL",
        "clue": "One colored segment of a blossom"
      },
      {
        "x": 10,
        "y": 0,
        "dir": "Down",
        "word": "SEED",
        "clue": "A bean planted to start another bean plant"
      },
      {
        "x": 7,
        "y": 1,
        "dir": "Across",
        "word": "VINE",
        "clue": "Plant that trails or climbs"
      }
    ]
  },
  {
    "id": 91,
    "title": "The cabinet of shells",
    "kind": "Word search",
    "level": "Medium",
    "intro": "A naturalist sent home ten labels for her drawer of shore specimens. Recover the names jumbled in the drawer liner. Look in any of eight directions.",
    "grid": [
      "SWRCJAGSXGVE",
      "EQVACLUPXQAC",
      "KLFFCOCKLEOA",
      "PTKVKWNEDWLR",
      "EVJNZLSCRLYE",
      "SKTTISEIHICT",
      "MCMBUWEHEMXS",
      "XZAMBZIKWPXY",
      "ENOLABARNEKO",
      "HCQZLOZBETCH",
      "IMFGOOAIEPBR",
      "YJZVVAPEHNYK"
    ],
    "locations": {
      "PERIWINKLE": [
        [
          9,
          10
        ],
        [
          0,
          1
        ]
      ],
      "SCALLOP": [
        [
          0,
          5
        ],
        [
          6,
          11
        ]
      ],
      "ABALONE": [
        [
          6,
          8
        ],
        [
          0,
          8
        ]
      ],
      "COWRIE": [
        [
          11,
          1
        ],
        [
          6,
          6
        ]
      ],
      "COCKLE": [
        [
          4,
          2
        ],
        [
          9,
          2
        ]
      ],
      "MUSSEL": [
        [
          3,
          7
        ],
        [
          8,
          2
        ]
      ],
      "LIMPET": [
        [
          9,
          4
        ],
        [
          9,
          9
        ]
      ],
      "OYSTER": [
        [
          11,
          8
        ],
        [
          11,
          3
        ]
      ],
      "WHELK": [
        [
          8,
          7
        ],
        [
          4,
          3
        ]
      ],
      "CONCH": [
        [
          4,
          1
        ],
        [
          8,
          5
        ]
      ]
    }
  },
  {
    "id": 92,
    "title": "The dumplings left behind",
    "kind": "Detective skills",
    "level": "Hard",
    "intro": "A galley tally blurred just where the cook wrote how many full suppers of each kind had gone out. The dishwasher counted all twelve empty meal trays. The unserved dumplings are still in the warming drawer.",
    "tables": [
      [
        "Galley issue",
        [
          "Item",
          "Record"
        ],
        [
          [
            "Passenger supper",
            "2 dumplings per tray"
          ],
          [
            "Crew supper",
            "3 dumplings per tray"
          ],
          [
            "Dumplings prepared",
            "40"
          ],
          [
            "Dumplings left over",
            "9"
          ],
          [
            "Empty meal trays",
            "12"
          ]
        ]
      ]
    ],
    "clues": [
      "Every tray carried exactly one full supper. No dumplings were dropped, returned or served separately."
    ],
    "questions": [
      "How many passenger suppers and how many crew suppers went out?",
      "Show how to recover the split from a single missing quantity."
    ],
    "answer": "Five passenger suppers and seven crew suppers.",
    "why": "The cook served 40 − 9 = 31 dumplings. Twelve passenger suppers would use 24. Each switch from passenger to crew adds exactly one dumpling. Seven switches account for the excess of seven, leaving five passenger trays."
  },
  {
    "id": 93,
    "title": "The painter’s extra stripe",
    "kind": "Whodunit",
    "level": "Medium",
    "intro": "Four sign painters bid to repaint a ferry. When the sealed proposals were opened, one bid had been replaced by a forgery. Its author used a single continuous strip of border paper left over from their own sample board. The surviving motif was anchor, star, star, shell, in that order.",
    "clues": [
      "Each painter had a different repeating stock. Each written pattern repeats from its beginning forever. The piece might begin anywhere, including near the end of the written pattern.",
      "The motifs include upright lettering, so the strip cannot be read backwards. Nobody shared stock."
    ],
    "questions": [
      "Whose paper wrapped the forged proposal?",
      "Where does the surviving run begin in the written pattern?"
    ],
    "answer": "Orla’s stock, beginning at its fourth motif.",
    "why": "Orla’s sequence is Star, Shell, Bell, Anchor, Star. Starting at Anchor gives Anchor, Star, then the first two motifs of the NEXT repeat: Star, Shell. The other three patterns have either one star after the anchor or a bell after the double star.",
    "tables": [
      [
        "Border stock",
        [
          "Painter",
          "One complete repeat"
        ],
        [
          [
            "Fern",
            "Anchor · Star · Shell · Star"
          ],
          [
            "Orla",
            "Star · Shell · Bell · Anchor · Star"
          ],
          [
            "Neil",
            "Star · Bell · Anchor · Star"
          ],
          [
            "Paz",
            "Shell · Star · Anchor · Bell · Star"
          ]
        ]
      ]
    ]
  },
  {
    "id": 94,
    "title": "Shadows on the slipway",
    "kind": "Logic",
    "level": "Hard",
    "intro": "Six hulls were hauled out in succession. A fresh coat of paint hid their numbers, but the engineer remembered the order of several boats.",
    "clues": [
      "There are two entries between Amber and Pearl.",
      "Clover comes neither first nor last.",
      "There are two entries between Swift and Clover.",
      "There is one entry between Gannet and Clover.",
      "Swift comes neither first nor last.",
      "Pearl comes immediately after Gannet."
    ],
    "tableform": {
      "rows": [
        "Haul 1",
        "Haul 2",
        "Haul 3",
        "Haul 4",
        "Haul 5",
        "Haul 6"
      ],
      "cols": [
        [
          "Boat",
          "Amber",
          "Clover",
          "Gannet",
          "Jasper",
          "Pearl",
          "Swift"
        ]
      ]
    },
    "answer": "Amber → Swift → Gannet → Pearl → Clover → Jasper.",
    "why": "Set aside the clue “There are two entries between Amber and Pearl.” and fill the slots using the other clues. The possible orders, using the first letter of each name, are ASGPCJ, JSGPCA. Apply the set-aside clue: only Amber → Swift → Gannet → Pearl → Clover → Jasper survives."
  },
  {
    "id": 95,
    "title": "A tide in every line",
    "kind": "Codebreaking",
    "level": "Hard",
    "intro": "The harbormaster’s notebook lists one word in the margin: TIDE. It supplies a repeating set of shifts for this message.",
    "exhibit": "FMHX TB WLX EHWM AOMI",
    "clues": [
      "Use A = 0, B = 1 and so on up to Z = 25. TIDE gives four shift sizes.",
      "The sender added the shifts, beginning with T. To decode, subtract them in turn, wrapping through the alphabet. Skip spaces without restarting the key."
    ],
    "questions": [
      "What message did the sender leave?"
    ],
    "answer": "Meet at the west slip.",
    "why": "The shifts are 19, 8, 3 and 4. Subtract them from FMHX to recover MEET. Continuing the same cycle across word boundaries points to the west slip."
  },
  {
    "id": 96,
    "title": "Leaves from a locked library",
    "kind": "Crossword",
    "level": "Hard",
    "intro": "A bookseller asks Sal to describe a damaged volume before opening its clasp. These clues use the vocabulary of bindings and old books.",
    "entries": [
      {
        "x": 7,
        "y": 6,
        "dir": "Across",
        "word": "GILT",
        "clue": "Gold finish sometimes applied to page edges"
      },
      {
        "x": 7,
        "y": 3,
        "dir": "Down",
        "word": "MARGIN",
        "clue": "Blank space around a block of text"
      },
      {
        "x": 10,
        "y": 4,
        "dir": "Down",
        "word": "GUTTER",
        "clue": "The inner margin where facing pages meet"
      },
      {
        "x": 2,
        "y": 4,
        "dir": "Across",
        "word": "ERRATA",
        "clue": "A list of corrections in a printed work"
      },
      {
        "x": 4,
        "y": 1,
        "dir": "Down",
        "word": "QUARTO",
        "clue": "Format made by folding a full sheet twice"
      },
      {
        "x": 2,
        "y": 0,
        "dir": "Down",
        "word": "PLATE",
        "clue": "A separately printed illustration bound into a book"
      },
      {
        "x": 0,
        "y": 6,
        "dir": "Across",
        "word": "VERSO",
        "clue": "The left-hand page of an open Western-style book"
      },
      {
        "x": 3,
        "y": 6,
        "dir": "Down",
        "word": "SPINE",
        "clue": "The part of a shelved book that usually faces the reader"
      },
      {
        "x": 0,
        "y": 10,
        "dir": "Across",
        "word": "INDEX",
        "clue": "Alphabetical list of subjects with page references"
      },
      {
        "x": 1,
        "y": 5,
        "dir": "Down",
        "word": "LEAF",
        "clue": "One sheet in a book, with a page on each side"
      },
      {
        "x": 4,
        "y": 1,
        "dir": "Across",
        "word": "QUIRE",
        "clue": "A gathering of nested sheets ready to sew"
      }
    ]
  },
  {
    "id": 97,
    "title": "Letters from the sorting room",
    "kind": "Word search",
    "level": "Medium",
    "intro": "Some post was left on the quay after the mailboat sailed. Find ten words from the sorting clerk’s day. Look in any of eight directions.",
    "grid": [
      "IAOSDDUUBLKI",
      "MJCPSDECEMRN",
      "ADFPOECCGDAK",
      "UWMPXSRWARMP",
      "HZVZCATDUZTA",
      "NTILPHYCDISD",
      "EPOLEVNEAAOE",
      "LAESSXDAARPE",
      "UIYTTZLSGNDA",
      "DUADAXYHAWHA",
      "CMDWYEZFOCWO",
      "PBLETTERHPKD"
    ],
    "locations": {
      "ENVELOPE": [
        [
          7,
          6
        ],
        [
          0,
          6
        ]
      ],
      "POSTCARD": [
        [
          3,
          1
        ],
        [
          10,
          8
        ]
      ],
      "POSTMARK": [
        [
          10,
          7
        ],
        [
          10,
          0
        ]
      ],
      "ADDRESS": [
        [
          9,
          6
        ],
        [
          3,
          0
        ]
      ],
      "PARCEL": [
        [
          4,
          5
        ],
        [
          9,
          0
        ]
      ],
      "INKPAD": [
        [
          11,
          0
        ],
        [
          11,
          5
        ]
      ],
      "LETTER": [
        [
          2,
          11
        ],
        [
          7,
          11
        ]
      ],
      "STAMP": [
        [
          4,
          7
        ],
        [
          0,
          11
        ]
      ],
      "SEAL": [
        [
          3,
          7
        ],
        [
          0,
          7
        ]
      ],
      "SACK": [
        [
          7,
          8
        ],
        [
          10,
          11
        ]
      ]
    }
  },
  {
    "id": 98,
    "title": "The ghost of a pressed leaf",
    "kind": "Detective skills",
    "level": "Medium",
    "intro": "A pressed sprig fell out of its sleeve when the naturalist's cabinet tipped. Part of the leaf has torn away. The conservator compares the surviving features with four reference sketches from the same collection.",
    "tables": [
      [
        "Recovered fragment",
        [
          "Feature",
          "Visible evidence"
        ],
        [
          [
            "Leaf arrangement",
            "A pair grows from the same point on the stem."
          ],
          [
            "Outer edge",
            "Fine tiny teeth remain along the surviving edge."
          ],
          [
            "Stem",
            "Round cross-section preserved where it broke."
          ],
          [
            "Tip",
            "Missing"
          ]
        ]
      ],
      [
        "Reference sketches",
        [
          "Sleeve",
          "Leaf arrangement",
          "Edge",
          "Stem",
          "Tip"
        ],
        [
          [
            "A",
            "Paired",
            "Toothed",
            "Square",
            "Blunt"
          ],
          [
            "B",
            "Alternating",
            "Toothed",
            "Round",
            "Pointed"
          ],
          [
            "C",
            "Paired",
            "Smooth",
            "Round",
            "Blunt"
          ],
          [
            "D",
            "Paired",
            "Toothed",
            "Round",
            "Pointed"
          ]
        ]
      ]
    ],
    "clues": [
      "The sprig belongs to one of these four sleeves. A missing part supplies no comparison. The sketches describe the specimens in these sleeves."
    ],
    "questions": [
      "Which sleeve should receive the sprig?",
      "Which visible feature distinguishes it from sleeve A, the closest leaf match?"
    ],
    "answer": "Sleeve D. The fragment has a round stem; sleeve A calls for a square one.",
    "why": "The paired leaves rule out B and the toothed edge rules out C. A and D both pass those tests, but only D has a round stem. The missing tip is unnecessary to make the identification."
  },
  {
    "id": 99,
    "title": "A backwards glimpse of POST",
    "kind": "Whodunit",
    "level": "Hard",
    "intro": "The regatta secretary caught one of four messengers pocketing a sealed envelope on film. The shelf hid the messenger’s face, and the film began with the labels already removed for cleaning. The secretary could distinguish the fourth pigeonhole from the left in the image. A board above it showed the word POST backwards.",
    "clues": [
      "The complete bank has nine pigeonholes numbered consecutively 1 through 9 from the clerk’s left, facing the shelf. The film shows the entire bank straight on, horizontally reversed by a mirror.",
      "The culprit took the envelope from the fourth pigeonhole from the film viewer’s left. Each messenger was permitted to empty a different pair or group of holes. The clerk watched every messenger approach only their assigned holes.",
      "The assignment card lists destinations rather than hole numbers. In normal clerk’s order the destinations were Pier, Loft, Yard, Gate, Slip, Mill, Fort, Dock, Arch."
    ],
    "questions": [
      "Who pocketed the envelope?",
      "Which messenger would be accused by a reader who overlooked the backwards lettering?"
    ],
    "answer": "Inez pocketed the Mill envelope. Moss would be wrongly accused.",
    "why": "The fourth of nine holes from the image’s left is the fourth from the real shelf’s right, or hole 6. Hole 6 is Mill, on Inez’s route. Reading the reversed image as a normal view would pick hole 4, Gate, on Moss’s route.",
    "tables": [
      [
        "Messengers’ routes",
        [
          "Messenger",
          "Destinations"
        ],
        [
          [
            "Moss",
            "Gate, Dock"
          ],
          [
            "Inez",
            "Yard, Mill"
          ],
          [
            "Kai",
            "Pier, Arch, Fort"
          ],
          [
            "Drew",
            "Slip, Loft"
          ]
        ]
      ]
    ]
  },
  {
    "id": 100,
    "title": "One stamp per envelope",
    "kind": "Logic",
    "level": "Hard",
    "intro": "The philately club held a timed exchange. Reconstruct the design on the stamp each collector brought. Each person used one time slot and had one different item. All four slots and items were used.",
    "clues": [
      "Raj was one slot before the person with the dolphin.",
      "Pia was earlier than Clare.",
      "The shell did not appear at 1:45.",
      "The compass did not appear at 1:45.",
      "The dolphin did not appear at 1:45.",
      "Pia was one slot before the person with the shell.",
      "Raj did not have the heron."
    ],
    "tableform": {
      "rows": [
        "Clare",
        "Noel",
        "Pia",
        "Raj"
      ],
      "cols": [
        [
          "Exchange",
          "1:15",
          "1:30",
          "1:45",
          "2:00"
        ],
        [
          "Design",
          "Dolphin",
          "Compass",
          "Shell",
          "Heron"
        ]
      ]
    },
    "answer": "1:15 — Raj, compass · 1:30 — Noel, dolphin · 1:45 — Pia, heron · 2:00 — Clare, shell.",
    "why": "Write the four times in order and try the remaining clues in those columns. Without “Raj was one slot before the person with the dolphin.” there are 12 ways to fill the sheet. Only one puts Raj directly before the required item: Raj is at 1:15, followed by Noel with the dolphin at 1:30."
  },
  {
    "id": 101,
    "kind": "Detective skills",
    "title": "The quay in the contact prints",
    "level": "Medium",
    "intro": "A roll of four harbor photographs was cut into single frames. The photographer remembers taking each picture from the same window during one afternoon. The prints have lost their order.",
    "clues": [
      "A banner was raised once and stayed up. A wagon arrived once, stayed through the raising, and left once. The shop shutters closed once, after the wagon left.",
      "Heron print: wagon there, no banner, shutters open. Gull: no wagon, banner up, shutters open. Tern: wagon there, banner up, shutters open. Auk: no wagon, banner up, shutters closed."
    ],
    "questions": [
      "Arrange the four prints from earliest to latest.",
      "What event separates the two pictures that show a wagon?"
    ],
    "answer": "Heron, Tern, Gull, Auk. The banner goes up between Heron and Tern.",
    "why": "The two wagon pictures straddle the raising. Every other picture has the banner up and the wagon gone. Of those, Gull still has open shutters and must precede Auk."
  },
  {
    "id": 102,
    "kind": "Whodunit",
    "title": "The hat in the last bandbox",
    "level": "Medium",
    "intro": "When four milliners unpacked after the harbor fair, a velvet hat turned up in the wrong bandbox. The four closed boxes had been in a row. A porter watched a single exhibitor put the hat into the box immediately to the right of the exhibitor's own box.",
    "clues": [
      "From left to right the boxes bore a Star, a Fish, a Key and a Rose. The velvet hat came out of the Key box.",
      "Lottie's box stood to the left of Kit's, with exactly one box between them. Mae had the Star. The remaining milliner was Jo. Each owned a different box."
    ],
    "questions": [
      "Which exhibitor misplaced the hat, and whose box received it?"
    ],
    "answer": "Lottie misplaced it in Jo’s Key box.",
    "why": "Lottie and Kit could occupy positions 1 and 3 or 2 and 4. Mae already owns position 1, forcing Lottie into 2 and Kit into 4. Jo occupies 3. The Key box is 3, so the person filling it from its left was Lottie."
  },
  {
    "id": 103,
    "kind": "Logic",
    "title": "Posters along Fisher Row",
    "level": "Hard",
    "intro": "The ferry museum mounted four festival posters along Fisher Row. Each poster maker used a different paper color, and the volunteer who took them down mixed up the credits. Use each window and each paper exactly once. Read the positions in this order: 1 · inn end, 2, 3, 4 · quay end.",
    "clues": [
      "The cream entry came somewhere between Sana and the apricot entry.",
      "The lilac entry came immediately before the cream entry.",
      "The ochre entry came somewhere before Jory.",
      "Moss occupied one of the two end positions.",
      "Moss and the lilac entry were next to one another.",
      "Exactly one position separated Sana and Grace."
    ],
    "tableform": {
      "rows": [
        "Sana",
        "Moss",
        "Grace",
        "Jory"
      ],
      "cols": [
        [
          "Window",
          "1 · inn end",
          "2",
          "3",
          "4 · quay end"
        ],
        [
          "Paper",
          "Apricot",
          "Cream",
          "Lilac",
          "Ochre"
        ]
      ]
    },
    "answer": "1 · inn end — Moss, ochre · 2 — Sana, lilac · 3 — Jory, cream · 4 · quay end — Grace, apricot.",
    "why": "Moss cannot be last. That would put lilac third and cream last, where cream cannot lie between two entries. Moss is first, lilac second and cream third. The remaining colors are ochre and apricot; ochre must precede Jory, so ochre is first and apricot last. Sana must be on the near side of cream, in window 2. Grace is two windows from Sana, leaving window 3 to Jory."
  },
  {
    "id": 104,
    "kind": "Crossword",
    "title": "The shellac on the sleeve",
    "level": "Medium",
    "intro": "A filing slip fell out of a gramophone record at the quay sale. Rebuild the words from the record shop.",
    "entries": [
      {
        "x": 2,
        "y": 8,
        "dir": "Across",
        "word": "SIDE",
        "clue": "What you change by flipping the disc"
      },
      {
        "x": 5,
        "y": 5,
        "dir": "Down",
        "word": "LABEL",
        "clue": "Printed disc at the record’s center"
      },
      {
        "x": 1,
        "y": 5,
        "dir": "Across",
        "word": "NEEDLE",
        "clue": "Point touching an old record"
      },
      {
        "x": 3,
        "y": 7,
        "dir": "Down",
        "word": "MINT",
        "clue": "Dealer’s word for a copy in pristine condition"
      },
      {
        "x": 1,
        "y": 2,
        "dir": "Down",
        "word": "CRANK",
        "clue": "Handle for winding the motor"
      },
      {
        "x": 6,
        "y": 0,
        "dir": "Down",
        "word": "GROOVE",
        "clue": "Spiral track a stylus follows"
      },
      {
        "x": 3,
        "y": 0,
        "dir": "Down",
        "word": "SLEEVE",
        "clue": "Paper jacket with a hole in its middle"
      },
      {
        "x": 5,
        "y": 2,
        "dir": "Across",
        "word": "HORN",
        "clue": "Flared mouth on an early gramophone"
      },
      {
        "x": 0,
        "y": 10,
        "dir": "Across",
        "word": "DUET",
        "clue": "Piece sung by two"
      },
      {
        "x": 1,
        "y": 0,
        "dir": "Across",
        "word": "HISS",
        "clue": "Steady soft noise behind the music"
      },
      {
        "x": 5,
        "y": 7,
        "dir": "Across",
        "word": "BASS",
        "clue": "Lowest singing voice in a quartet"
      }
    ]
  },
  {
    "id": 105,
    "kind": "Word search",
    "title": "A shoebox of seaside sweets",
    "level": "Easy",
    "intro": "The confectioner counted ten kinds of sweet in a shoebox under the counter. Find each one on the packing slip. Look across to the right, down, or diagonally down.",
    "grid": [
      "PRALINESTW",
      "HETBONBONL",
      "RNPRAGFTIX",
      "SOCPUFACRX",
      "UUAHEFOGQB",
      "MGREFRFJDJ",
      "AAAYIUMLNG",
      "BTMCAADIEY",
      "CIEFYXOGNV",
      "FDLNQFGOET"
    ],
    "locations": {
      "PEPPERMINT": [
        [
          0,
          0
        ],
        [
          9,
          9
        ]
      ],
      "LICORICE": [
        [
          9,
          1
        ],
        [
          2,
          8
        ]
      ],
      "CARAMEL": [
        [
          2,
          3
        ],
        [
          2,
          9
        ]
      ],
      "PRALINE": [
        [
          0,
          0
        ],
        [
          6,
          0
        ]
      ],
      "TRUFFLE": [
        [
          2,
          1
        ],
        [
          8,
          7
        ]
      ],
      "TOFFEE": [
        [
          8,
          0
        ],
        [
          3,
          5
        ]
      ],
      "NOUGAT": [
        [
          1,
          2
        ],
        [
          1,
          7
        ]
      ],
      "BONBON": [
        [
          3,
          1
        ],
        [
          8,
          1
        ]
      ],
      "FUDGE": [
        [
          4,
          5
        ],
        [
          8,
          9
        ]
      ],
      "TAFFY": [
        [
          7,
          2
        ],
        [
          3,
          6
        ]
      ]
    }
  },
  {
    "id": 106,
    "kind": "Codebreaking",
    "title": "The square on the sugar tin",
    "level": "Medium",
    "intro": "Sixteen letter tiles sit in the lid of a square sugar tin. A spoon scratched a tiny arrow on the outside edge beside the upper-left tile.",
    "clues": [
      "Start on the upper-left tile, heading right. At an edge or a tile already read, turn right. Read each tile once.",
      "The instruction has four words of lengths 4, 3, 6 and 3."
    ],
    "questions": [
      "What does the lid tell you to do?"
    ],
    "answer": "Lift the silver lid.",
    "why": "The outer ring reads LIFTTHESILVE. Turn inward for the four central letters RLID, then insert the word breaks.",
    "tables": [
      [
        "Tiles as seen from above",
        [
          "Row",
          "1",
          "2",
          "3",
          "4"
        ],
        [
          [
            "1",
            "L",
            "I",
            "F",
            "T"
          ],
          [
            "2",
            "E",
            "R",
            "L",
            "T"
          ],
          [
            "3",
            "V",
            "D",
            "I",
            "H"
          ],
          [
            "4",
            "L",
            "I",
            "S",
            "E"
          ]
        ]
      ]
    ]
  },
  {
    "id": 107,
    "kind": "Detective skills",
    "title": "Ink beneath the mounting board",
    "level": "Medium",
    "intro": "A restorer finds four layers at one point on an old ferry poster. She wants to know which two additions could have been made in either order.",
    "clues": [
      "A red route line crosses on top of the original blue harbor. A black printer's stamp also crosses on top of the blue harbor. The red line and black stamp never meet.",
      "A repair strip covers part of both the red line and the stamp. All four additions were made separately; an upper layer was applied later."
    ],
    "questions": [
      "Which two additions can exchange places in a reconstruction?",
      "Give both possible sequences, starting with the oldest."
    ],
    "answer": "The route line and printer’s stamp. Blue harbor, red line, black stamp, repair strip; or blue harbor, black stamp, red line, repair strip.",
    "why": "Blue lies under each of the middle additions, so it came first. The repair covers both, so it came last. There is no overlap fixing the order of the two middle additions."
  },
  {
    "id": 108,
    "kind": "Whodunit",
    "title": "The wrong reel at the matinee",
    "level": "Medium",
    "intro": "The film club ended its program with a comedy reel instead of the promised harbor documentary. Each of four club members loaded one reel, in a different slot numbered 1 to 4. The comedy was the last reel.",
    "clues": [
      "Ben loaded exactly two slots after Flora. Tamsin loaded after Orla. Flora did not load slot 1.",
      "All four took their planned turns. The person who loaded the comedy had accidentally picked it up at the exchange."
    ],
    "questions": [
      "Who picked up the comedy?",
      "In which order did the four members load the reels?"
    ],
    "answer": "Ben picked up the comedy. The order was Orla, Flora, Tamsin, Ben.",
    "why": "Flora cannot be in slot 1 and must leave two slots after her. She must occupy slot 2, putting Ben in slot 4 with the comedy. The other slots are 1 and 3; Orla must take the earlier one."
  },
  {
    "id": 109,
    "kind": "Logic",
    "title": "At the knot-tying final",
    "level": "Medium",
    "intro": "Three finalists tied three display knots. The scorekeeper kept the order of their finishing times but spattered coffee across the names and knots. Match each finishing place and each knot exactly once. Read the positions in this order: First, Second, Third.",
    "clues": [
      "Fern came somewhere between Cai and Alix.",
      "Alix came somewhere before the bowline entry.",
      "The figure eight entry did not occupy First.",
      "The bowline entry occupied one of the two end positions."
    ],
    "tableform": {
      "rows": [
        "Fern",
        "Cai",
        "Alix"
      ],
      "cols": [
        [
          "Finish",
          "First",
          "Second",
          "Third"
        ],
        [
          "Knot",
          "Figure eight",
          "Bowline",
          "Reef knot"
        ]
      ]
    },
    "answer": "First — Alix, reef knot · Second — Fern, figure eight · Third — Cai, bowline.",
    "why": "Fern must have finished second to lie between the two other finalists. Bowline must be at an end with someone before it, so bowline was third. Alix has to precede it and Fern already has second, putting Alix first and Cai third. Figure eight cannot be first, so it goes to Fern, leaving Alix with the reef knot."
  },
  {
    "id": 110,
    "kind": "Crossword",
    "title": "An auction lot at noon",
    "level": "Easy",
    "intro": "The clerk has spilled coffee over the auction ledger. Restore the terms from the sale.",
    "entries": [
      {
        "x": 0,
        "y": 6,
        "dir": "Across",
        "word": "RESERVE",
        "clue": "Seller’s minimum acceptable price"
      },
      {
        "x": 0,
        "y": 6,
        "dir": "Down",
        "word": "RING",
        "clue": "Jeweler’s lot that might have a hallmark inside"
      },
      {
        "x": 2,
        "y": 6,
        "dir": "Down",
        "word": "SALE",
        "clue": "Event run by an auctioneer"
      },
      {
        "x": 6,
        "y": 3,
        "dir": "Down",
        "word": "GAVEL",
        "clue": "It falls when bidding closes"
      },
      {
        "x": 5,
        "y": 4,
        "dir": "Across",
        "word": "HAMMER",
        "clue": "Auction price before fees, in the phrase “___ price”"
      },
      {
        "x": 9,
        "y": 0,
        "dir": "Down",
        "word": "RAISE",
        "clue": "Increase a bid"
      },
      {
        "x": 5,
        "y": 0,
        "dir": "Across",
        "word": "BUYER",
        "clue": "Person who pays the winning bid"
      },
      {
        "x": 5,
        "y": 0,
        "dir": "Down",
        "word": "BID",
        "clue": "Offer shouted from the floor"
      },
      {
        "x": 1,
        "y": 1,
        "dir": "Down",
        "word": "PADDLE",
        "clue": "Numbered sign held up to bid"
      },
      {
        "x": 1,
        "y": 3,
        "dir": "Across",
        "word": "DESK",
        "clue": "Where buyers settle their bills"
      },
      {
        "x": 3,
        "y": 1,
        "dir": "Down",
        "word": "CASH",
        "clue": "Banknotes and coins"
      }
    ]
  },
  {
    "id": 111,
    "kind": "Word search",
    "title": "The glassblower’s order book",
    "level": "Medium",
    "intro": "A studio order arrived with no customer name. Trace the ten terms the glassblower circled when the order was new. Look in any of eight directions.",
    "grid": [
      "GOBLETUQYFNC",
      "ZDQCXCARPVRX",
      "PBFANOWNEBGE",
      "RHUNUWUYNBGQ",
      "WLREEGPESEMZ",
      "CENRHPLNXIAA",
      "BSAJHBIUSPXL",
      "BSCCBVWPUYBB",
      "BEEUAGZNWIEH",
      "XVBDLHTWQOBO",
      "WNVFEYIIMWLL",
      "UZQTLABOCXCB"
    ],
    "locations": {
      "BLOWPIPE": [
        [
          11,
          11
        ],
        [
          4,
          4
        ]
      ],
      "FURNACE": [
        [
          2,
          2
        ],
        [
          2,
          8
        ]
      ],
      "ANNEAL": [
        [
          6,
          1
        ],
        [
          11,
          6
        ]
      ],
      "GOBLET": [
        [
          0,
          0
        ],
        [
          5,
          0
        ]
      ],
      "VESSEL": [
        [
          1,
          9
        ],
        [
          1,
          4
        ]
      ],
      "COBALT": [
        [
          8,
          11
        ],
        [
          3,
          11
        ]
      ],
      "BUBBLE": [
        [
          2,
          9
        ],
        [
          7,
          4
        ]
      ],
      "PUNTY": [
        [
          9,
          6
        ],
        [
          5,
          10
        ]
      ],
      "AMBER": [
        [
          11,
          5
        ],
        [
          7,
          1
        ]
      ],
      "CANE": [
        [
          3,
          1
        ],
        [
          3,
          4
        ]
      ]
    }
  },
  {
    "id": 112,
    "kind": "Codebreaking",
    "title": "Notches on the room tags",
    "level": "Easy",
    "intro": "Eight old cloakroom tags hang in one row. A clerk cut small notches into each and printed a different word across its face.",
    "clues": [
      "Take as many steps into each printed word as its tag has notches. Count its first letter as step one.",
      "Read the tags from left to right in the order listed. The result names a color and an object."
    ],
    "questions": [
      "Which object does this set of tags identify?"
    ],
    "answer": "The blue lock.",
    "why": "CABIN with three notches gives B, FLEET with two gives L, BUOY with two gives U and REEF with two gives E. The remaining tags spell LOCK.",
    "tables": [
      [
        "Tags from the left",
        [
          "Word",
          "Notches"
        ],
        [
          [
            "CABIN",
            3
          ],
          [
            "FLEET",
            2
          ],
          [
            "BUOY",
            2
          ],
          [
            "REEF",
            2
          ],
          [
            "SAIL",
            4
          ],
          [
            "BOW",
            2
          ],
          [
            "DECK",
            3
          ],
          [
            "KEEL",
            1
          ]
        ]
      ]
    ]
  },
  {
    "id": 113,
    "kind": "Detective skills",
    "title": "One tray left uncounted",
    "level": "Medium",
    "intro": "The shell club numbered its display cards consecutively from 1 to 30. The clerk copied every number except one onto a tally sheet.",
    "clues": [
      "The cards occupy three trays: 1–10, 11–20, and 21–30. The sums written under the trays are 55, 138 and 255.",
      "The empty line on the handwritten sheet means one whole card number was omitted. None was duplicated or written incorrectly."
    ],
    "questions": [
      "Which single card number did the clerk omit?",
      "How can you check without adding all thirty numbers?"
    ],
    "answer": "Card 17 from the middle tray.",
    "why": "Pair the ends of the middle tray: 11+20, 12+19 and so on. Its five pairs each total 31, so its complete sum is 155. The difference from 138 is 17. The other two totals already match their full trays."
  },
  {
    "id": 114,
    "kind": "Whodunit",
    "title": "The steam launch's calling card",
    "level": "Hard",
    "intro": "Four launch operators contributed painted calling cards to the festival. One of them slipped an unsigned fifth card into the exhibit as a joke. It depicts the view from its maker's usual mooring.",
    "clues": [
      "The quay runs east to west. The five fixed landmarks, west to east, are Chimney, Steps, Arch, Crane, Mill. Each night's mooring lies strictly between two neighboring landmarks. The unsigned card's caption says exactly two of the five landmarks lie west of the mooring.",
      "Otto moors between Crane and Mill. Bee moors immediately west of Fran's mooring; their moorings occupy consecutive gaps. Cy moors between Chimney and Steps. All four use different gaps."
    ],
    "questions": [
      "Who added the unsigned card?",
      "Which landmarks bracket that operator's mooring?"
    ],
    "answer": "Bee, between Steps and Arch.",
    "why": "With Cy and Otto in the westernmost and easternmost gaps, Bee and Fran must use the two middle gaps. Bee takes the more westerly one. It has precisely Chimney and Steps to its west."
  },
  {
    "id": 115,
    "kind": "Logic",
    "title": "Lanterns up the stair",
    "level": "Hard",
    "intro": "At the harbor pageant four makers lit their own lanterns on the four landings of the signal tower. The curator wants to credit each maker beside the correct lantern. Use each landing and each lantern exactly once. Read the positions in this order: Ground, First floor, Second floor, Roof.",
    "clues": [
      "The star entry came immediately before the moon entry.",
      "Exactly one position separated Emil and the star entry.",
      "Otis and the acorn entry were next to one another.",
      "The fish entry came somewhere before the moon entry.",
      "Nell occupied one of the two end positions.",
      "Nell did not occupy Roof."
    ],
    "tableform": {
      "rows": [
        "Nell",
        "Otis",
        "Emil",
        "Bess"
      ],
      "cols": [
        [
          "Landing",
          "Ground",
          "First floor",
          "Second floor",
          "Roof"
        ],
        [
          "Lantern",
          "Moon",
          "Acorn",
          "Fish",
          "Star"
        ]
      ]
    },
    "answer": "Ground — Nell, fish · First floor — Bess, star · Second floor — Otis, moon · Roof — Emil, acorn.",
    "why": "Nell is on the ground. Star cannot be on the ground, since moon would then be on the first floor with no earlier place for fish. Star also cannot be on the second floor, since that would put Emil on the ground with Nell. So star and moon take the first and second floors, putting Emil on the roof. Fish must precede moon and takes the ground. Acorn takes the roof, putting Otis next to it on the second floor."
  },
  {
    "id": 116,
    "kind": "Crossword",
    "title": "Ink on the ferry cartoon",
    "level": "Medium",
    "intro": "The dockside cartoonist’s unfinished strip has captions but no pictures. Fill in the words of her trade.",
    "entries": [
      {
        "x": 8,
        "y": 2,
        "dir": "Across",
        "word": "NIB",
        "clue": "Split point on a dip pen"
      },
      {
        "x": 8,
        "y": 0,
        "dir": "Down",
        "word": "PANEL",
        "clue": "One framed moment in a comic"
      },
      {
        "x": 4,
        "y": 3,
        "dir": "Across",
        "word": "SHADE",
        "clue": "Add darker tones to a drawing"
      },
      {
        "x": 4,
        "y": 3,
        "dir": "Down",
        "word": "STRIP",
        "clue": "Sequence of panels published together"
      },
      {
        "x": 2,
        "y": 7,
        "dir": "Across",
        "word": "CAPTION",
        "clue": "Text box that can set the scene"
      },
      {
        "x": 0,
        "y": 5,
        "dir": "Across",
        "word": "RULER",
        "clue": "Straightedge for drawing panel borders"
      },
      {
        "x": 8,
        "y": 6,
        "dir": "Down",
        "word": "INK",
        "clue": "What makes a penciled outline permanent"
      },
      {
        "x": 10,
        "y": 0,
        "dir": "Down",
        "word": "BUBBLE",
        "clue": "It holds a character’s speech"
      },
      {
        "x": 2,
        "y": 0,
        "dir": "Down",
        "word": "PENCIL",
        "clue": "Its draft strokes erase easily"
      },
      {
        "x": 0,
        "y": 0,
        "dir": "Down",
        "word": "ERASER",
        "clue": "Rubbery end of a drawing pencil"
      },
      {
        "x": 6,
        "y": 5,
        "dir": "Down",
        "word": "TAIL",
        "clue": "Pointed part of a speech balloon"
      }
    ]
  },
  {
    "id": 117,
    "kind": "Word search",
    "title": "Borrowed tents at the quay",
    "level": "Easy",
    "intro": "The ranger’s loan cards got mixed in with the ferry mail. Find ten words from the camping kit. Look across to the right, down, or diagonally down.",
    "grid": [
      "KVGGUYLINE",
      "PEGSTCMXBM",
      "MQFWAEKBEA",
      "CLRLSCNFDL",
      "FZASYSFTRL",
      "ZHKNTSJJOE",
      "DIOATCHPLT",
      "TQKKIEVELE",
      "IENMATRCEA",
      "SCANVASNJT"
    ],
    "locations": {
      "FLYSHEET": [
        [
          2,
          2
        ],
        [
          9,
          9
        ]
      ],
      "GUYLINE": [
        [
          3,
          0
        ],
        [
          9,
          0
        ]
      ],
      "MESSKIT": [
        [
          6,
          1
        ],
        [
          0,
          7
        ]
      ],
      "BEDROLL": [
        [
          8,
          1
        ],
        [
          8,
          7
        ]
      ],
      "LANTERN": [
        [
          1,
          3
        ],
        [
          7,
          9
        ]
      ],
      "CANVAS": [
        [
          1,
          9
        ],
        [
          6,
          9
        ]
      ],
      "STAKES": [
        [
          5,
          4
        ],
        [
          0,
          9
        ]
      ],
      "MALLET": [
        [
          9,
          1
        ],
        [
          9,
          6
        ]
      ],
      "TENT": [
        [
          4,
          1
        ],
        [
          7,
          4
        ]
      ],
      "PEGS": [
        [
          0,
          1
        ],
        [
          3,
          1
        ]
      ]
    }
  },
  {
    "id": 118,
    "kind": "Codebreaking",
    "title": "Letters inside the looking glass",
    "level": "Easy",
    "intro": "At the fairground mirror stall, the signwriter surrounded bits of a message with scraps of type that match at opposite ends.",
    "exhibit": "AMRIMA / COPNGPOC / TETHET / NYEBYN / RAELAR / SELES",
    "clues": [
      "Work on one group at a time. If its first and last letters match, cross both out. Keep going from the outside in.",
      "Stop as soon as the ends differ or only one letter remains. Join the leftovers in the order printed."
    ],
    "questions": [
      "What does the fairground notice ask you to do?"
    ],
    "answer": "Ring the bell.",
    "why": "On AMRIMA, crossing out the outer A pair and then the M pair leaves RI. The six leftover pieces are RI, NG, TH, EB, EL and L, spelling RING THE BELL."
  },
  {
    "id": 119,
    "kind": "Detective skills",
    "title": "Both ends of the gangway",
    "level": "Hard",
    "intro": "The gangway keeper's tally for the morning ferry is wet. At 8:00 there were 11 passengers aboard. At 8:15 there were 17. The counting wheel recorded 22 single-person crossings between those readings.",
    "clues": [
      "The ferry had one gangway. Every crossing either brought one passenger aboard or took one passenger ashore. The count includes both directions; crew remained aboard."
    ],
    "questions": [
      "How many people boarded, and how many stepped ashore?",
      "How many crossings could be paired off as a boarding followed or preceded by a departure?"
    ],
    "answer": "Fourteen boardings and eight departures. Sixteen crossings make eight opposite-direction pairs.",
    "why": "The final count rose by six. Set aside six boardings, leaving 16 crossings whose net effect is zero. Those divide into eight in each direction; restoring the six gives fourteen boardings."
  },
  {
    "id": 120,
    "kind": "Whodunit",
    "title": "One envelope on the scales",
    "level": "Medium",
    "intro": "At the ferry desk, four staff members each posted a different combination of ticket booklets. One envelope arrived with a thank-you note that had no signature. The note was packed in one of those four envelopes.",
    "clues": [
      "Each empty envelope with its single standard note weighs 8 g. Each red booklet weighs 12 g and each blue one 17 g. The unsigned envelope weighed 61 g, with no other contents.",
      "The posting list gives red / blue counts: Adil 3 / 1; Rosa 1 / 2; Finn 0 / 3; Liv 2 / 2."
    ],
    "questions": [
      "Who sent the unsigned note?",
      "What would you get wrong if you ignored the envelope and note's own weight?"
    ],
    "answer": "Adil sent it. The booklets alone weigh 53 g.",
    "why": "Subtract 8 from 61. Adil’s three red and one blue give 36 + 17 = 53 g. Rosa, Finn and Liv give 46, 51 and 58 g of booklets respectively. Looking for 61 g among booklet totals would find nobody."
  },
  {
    "id": 121,
    "kind": "Logic",
    "title": "The roving sketchbook",
    "level": "Hard",
    "intro": "A blank sketchbook traveled around the ferry, with one artist drawing at each stop before passing it on. The original sheets were later separated for framing. Use each stop and each sketch exactly once. Read the positions in this order: East slip, Bathhouse, Salt yard, Old fort.",
    "clues": [
      "The chimney entry came immediately before Kit.",
      "Exactly one position separated Faye and the dolphin entry.",
      "The chimney entry came somewhere between the dolphin entry and the anchor entry.",
      "Beau came somewhere before Jen.",
      "Jen occupied one of the two end positions.",
      "Jen and the cupola entry were in different positions."
    ],
    "tableform": {
      "rows": [
        "Kit",
        "Faye",
        "Jen",
        "Beau"
      ],
      "cols": [
        [
          "Stop",
          "East slip",
          "Bathhouse",
          "Salt yard",
          "Old fort"
        ],
        [
          "Sketch",
          "Chimney",
          "Dolphin",
          "Cupola",
          "Anchor"
        ]
      ]
    },
    "answer": "East slip — Beau, anchor · Bathhouse — Faye, chimney · Salt yard — Kit, cupola · Old fort — Jen, dolphin.",
    "why": "Jen is last because Beau precedes her. Chimney must be in a middle slot, and it cannot be third since Kit would then occupy Jen’s fourth slot. So chimney is second and Kit third. If Faye were first, dolphin would be third and anchor first, leaving cupola for Jen, which is forbidden. Thus Faye is second and dolphin fourth. Anchor must be first, cupola third, and Beau occupies the remaining first stop."
  },
  {
    "id": 122,
    "kind": "Crossword",
    "title": "Jam jars at number nine",
    "level": "Easy",
    "intro": "The jam judge left a crossword beside the prize jars. Her clues smell faintly of strawberries.",
    "entries": [
      {
        "x": 4,
        "y": 4,
        "dir": "Across",
        "word": "LABEL",
        "clue": "Where the maker writes the batch date"
      },
      {
        "x": 8,
        "y": 4,
        "dir": "Down",
        "word": "LEMON",
        "clue": "Yellow fruit squeezed for tartness"
      },
      {
        "x": 4,
        "y": 1,
        "dir": "Down",
        "word": "PEEL",
        "clue": "Bitter strips in marmalade"
      },
      {
        "x": 7,
        "y": 0,
        "dir": "Down",
        "word": "LADLE",
        "clue": "Deep spoon for filling jars"
      },
      {
        "x": 2,
        "y": 1,
        "dir": "Across",
        "word": "PIP",
        "clue": "Little seed inside a lemon"
      },
      {
        "x": 3,
        "y": 8,
        "dir": "Across",
        "word": "PECTIN",
        "clue": "Fruit substance that helps jam set"
      },
      {
        "x": 5,
        "y": 6,
        "dir": "Across",
        "word": "SKIM",
        "clue": "Lift foam off the top of a simmering batch"
      },
      {
        "x": 4,
        "y": 7,
        "dir": "Down",
        "word": "SEAL",
        "clue": "A jar lid should make a tight one"
      },
      {
        "x": 6,
        "y": 1,
        "dir": "Across",
        "word": "TART",
        "clue": "Pleasantly sharp in taste"
      },
      {
        "x": 3,
        "y": 10,
        "dir": "Across",
        "word": "PLUM",
        "clue": "Purple stone fruit in damson jam"
      },
      {
        "x": 0,
        "y": 3,
        "dir": "Across",
        "word": "SIEVE",
        "clue": "Mesh tool for removing raspberry seeds"
      },
      {
        "x": 1,
        "y": 2,
        "dir": "Down",
        "word": "RIND",
        "clue": "Outer skin of a citrus fruit"
      }
    ]
  },
  {
    "id": 123,
    "kind": "Word search",
    "title": "Smoke over the tea counter",
    "level": "Medium",
    "intro": "The tea merchant identified the parcel by its smell. Find the ten tea-counter words on the wrapping. Look in any of eight directions.",
    "grid": [
      "RHNCPCGGQGZF",
      "SJONUJGANCMI",
      "GDPPAYOISAFU",
      "NBFACHLVSZTG",
      "OULKRECSWIAS",
      "LVJQEXANVLAT",
      "OWYJZTPNEUCR",
      "ODRAHCTAMSAA",
      "OAZPGZDLKHDI",
      "DHXFGZRGEIDN",
      "WYLRRWZEMVYE",
      "MGMSINFUSERR"
    ],
    "locations": {
      "DARJEELING": [
        [
          0,
          9
        ],
        [
          9,
          0
        ]
      ],
      "STRAINER": [
        [
          11,
          4
        ],
        [
          11,
          11
        ]
      ],
      "INFUSER": [
        [
          4,
          11
        ],
        [
          10,
          11
        ]
      ],
      "OOLONG": [
        [
          0,
          7
        ],
        [
          0,
          2
        ]
      ],
      "MATCHA": [
        [
          8,
          7
        ],
        [
          3,
          7
        ]
      ],
      "SENCHA": [
        [
          9,
          7
        ],
        [
          4,
          2
        ]
      ],
      "KETTLE": [
        [
          3,
          4
        ],
        [
          8,
          9
        ]
      ],
      "CUPFUL": [
        [
          5,
          0
        ],
        [
          0,
          5
        ]
      ],
      "ASSAM": [
        [
          6,
          5
        ],
        [
          10,
          1
        ]
      ],
      "CADDY": [
        [
          10,
          6
        ],
        [
          10,
          10
        ]
      ]
    }
  },
  {
    "id": 124,
    "kind": "Codebreaking",
    "title": "The ticket with four windows",
    "level": "Hard",
    "intro": "A square ticket with four punched windows fits exactly over a square of letters. A tiny arrow on the ticket marks its original top.",
    "clues": [
      "With the arrow upright, the holes show row 1 columns 1, 2 and 3, and row 2 column 2.",
      "Read visible letters like a page, top to bottom and left to right within each row. Rotate only the ticket a quarter turn clockwise, then read again. Use all four positions, starting upright. A paper sketch can help."
    ],
    "tables": [
      [
        "Letter square",
        [
          "Row",
          "1",
          "2",
          "3",
          "4"
        ],
        [
          [
            "1",
            "L",
            "O",
            "O",
            "A"
          ],
          [
            "2",
            "S",
            "K",
            "T",
            "T"
          ],
          [
            "3",
            "T",
            "E",
            "E",
            "H"
          ],
          [
            "4",
            "P",
            "T",
            "O",
            "P"
          ]
        ]
      ]
    ],
    "questions": [
      "What instruction do the four turns uncover?"
    ],
    "answer": "Look at the top step.",
    "why": "With the arrow at the top the windows reveal LOOK. Pointing right gives ATTH, pointing down gives ETOP, and pointing left gives STEP. Put the spaces back into LOOKATTHETOPSTEP."
  },
  {
    "id": 125,
    "kind": "Detective skills",
    "title": "Under the brass binding",
    "level": "Easy",
    "intro": "The library is rebinding a packet of four loose manuscript leaves. One word at the bottom of each written page repeats the first word of the following page, except on the final page, which ends with a flourish.",
    "clues": [
      "Leaf K starts with Lantern and ends with Pebble. Leaf L starts with Ferry and ends with Lantern. Leaf M starts with Thistle and ends with a flourish. Leaf N starts with Pebble and ends with Thistle.",
      "All four leaves belong to this same continuous manuscript. These are complete first and last words."
    ],
    "questions": [
      "Give the order of the leaf labels.",
      "Which leaf was originally third?"
    ],
    "answer": "L, K, N, M. Leaf N was third.",
    "why": "L hands Lantern to K. K hands Pebble to N. N hands Thistle to M, whose flourish closes the manuscript. Ferry is the one opening word without a preceding handoff."
  },
  {
    "id": 126,
    "kind": "Whodunit",
    "title": "The last slice at the wake",
    "level": "Hard",
    "intro": "At the farewell party for the old ferry, four members helped clear the cake plate. Exactly one took the last slice. Exactly two of the following four statements are true.",
    "clues": [
      "Kit: “Una or I took it.” Una: “Neither Sol nor I took it.” Sol: “Nell did not take it.” Nell: “Kit took it.”",
      "Nobody besides those four took a slice. The truth count refers to these four whole statements."
    ],
    "questions": [
      "Who took the last slice?",
      "Which two statements are true?"
    ],
    "answer": "Una took it. Kit and Sol spoke truly.",
    "why": "Check the four possibilities against the four statements. If Kit took it, all four statements are true. If Una took it, Kit and Sol are right. If Sol took it, only Sol is right. If Nell took it, only Una is right. The count of two singles out Una."
  },
  {
    "id": 127,
    "kind": "Logic",
    "title": "Three sittings for a silhouette",
    "level": "Medium",
    "intro": "At three successive sittings the paper cutter posed three travelers with a different object from the studio chest. A developer needs captions for the prints. Use each sitting and each prop exactly once. Read the positions in this order: 9 am, 10 am, 11 am.",
    "clues": [
      "The cane entry came immediately before the hat entry.",
      "The hat entry did not occupy 10 am.",
      "Pia and the hat entry were next to one another.",
      "Pia came somewhere before Lara."
    ],
    "tableform": {
      "rows": [
        "Pia",
        "Archie",
        "Lara"
      ],
      "cols": [
        [
          "Sitting",
          "9 am",
          "10 am",
          "11 am"
        ],
        [
          "Prop",
          "Fan",
          "Cane",
          "Hat"
        ]
      ]
    },
    "answer": "9 am — Archie, fan · 10 am — Pia, cane · 11 am — Lara, hat.",
    "why": "Hat has to follow cane, so it cannot be first. The middle sitting is also ruled out for hat. This fixes hat last and cane in the middle. Pia is next to the hat, in the middle, and Lara has to follow her. Archie takes the first sitting with the fan."
  },
  {
    "id": 128,
    "kind": "Crossword",
    "title": "The nine o’clock orchestra",
    "level": "Medium",
    "intro": "A music stand on the pier holds the conductor’s clues. Fill the squares before the first downbeat.",
    "entries": [
      {
        "x": 4,
        "y": 3,
        "dir": "Across",
        "word": "SCORE",
        "clue": "Book showing all the parts together"
      },
      {
        "x": 8,
        "y": 0,
        "dir": "Down",
        "word": "OBOE",
        "clue": "Woodwind tuned with a double reed"
      },
      {
        "x": 4,
        "y": 3,
        "dir": "Down",
        "word": "STAND",
        "clue": "Support that holds the printed music"
      },
      {
        "x": 7,
        "y": 3,
        "dir": "Down",
        "word": "REED",
        "clue": "Thin vibrating strip on a clarinet"
      },
      {
        "x": 6,
        "y": 5,
        "dir": "Across",
        "word": "REST",
        "clue": "Written direction to play nothing for a time"
      },
      {
        "x": 4,
        "y": 0,
        "dir": "Across",
        "word": "CELLO",
        "clue": "Bowed instrument played with an endpin between the knees"
      },
      {
        "x": 0,
        "y": 5,
        "dir": "Across",
        "word": "VIOLA",
        "clue": "Bowed instrument just larger than a violin"
      },
      {
        "x": 9,
        "y": 5,
        "dir": "Down",
        "word": "TEMPO",
        "clue": "How quickly the music goes"
      },
      {
        "x": 6,
        "y": 9,
        "dir": "Across",
        "word": "BATON",
        "clue": "Conductor’s slender wand"
      },
      {
        "x": 6,
        "y": 7,
        "dir": "Down",
        "word": "TUBA",
        "clue": "Low brass instrument with a wide bell"
      },
      {
        "x": 2,
        "y": 4,
        "dir": "Down",
        "word": "SOLO",
        "clue": "Passage for one featured player"
      }
    ]
  },
  {
    "id": 129,
    "kind": "Word search",
    "title": "The butterfly ledger",
    "level": "Hard",
    "intro": "A collector’s field ledger holds ten butterfly names in the tangle of letters beneath the date. Look in any of eight directions.",
    "grid": [
      "LHAIRSTREAKTJ",
      "ELCRDAUOBQZBS",
      "NMEKETDFAYJWS",
      "OOFHIPBMRIATJ",
      "TNFGSYPAILWSZ",
      "SAVWLELILRYQP",
      "MRQXCLSOKNACM",
      "ICRWIVWIISOLZ",
      "RHBTHTCPOPNYW",
      "BKICACCQPTOHO",
      "QRVIBJHEDZRIR",
      "FMLCNCRTIXBOZ",
      "GYDALDETNIAPT"
    ],
    "locations": {
      "TORTOISESHELL": [
        [
          12,
          12
        ],
        [
          0,
          0
        ]
      ],
      "SWALLOWTAIL": [
        [
          12,
          1
        ],
        [
          2,
          11
        ]
      ],
      "PAINTEDLADY": [
        [
          11,
          12
        ],
        [
          1,
          12
        ]
      ],
      "FRITILLARY": [
        [
          0,
          11
        ],
        [
          9,
          2
        ]
      ],
      "HAIRSTREAK": [
        [
          1,
          0
        ],
        [
          10,
          0
        ]
      ],
      "BRIMSTONE": [
        [
          0,
          9
        ],
        [
          0,
          1
        ]
      ],
      "MONARCH": [
        [
          1,
          2
        ],
        [
          1,
          8
        ]
      ],
      "ADMIRAL": [
        [
          5,
          1
        ],
        [
          11,
          7
        ]
      ],
      "SKIPPER": [
        [
          9,
          7
        ],
        [
          3,
          1
        ]
      ],
      "COPPER": [
        [
          11,
          6
        ],
        [
          6,
          11
        ]
      ]
    }
  },
  {
    "id": 130,
    "kind": "Codebreaking",
    "title": "Around the alphabet dial",
    "level": "Hard",
    "intro": "A brass dial has the alphabet clockwise around its rim. Its pointer starts on A. The note lists how many clicks the keeper made each time.",
    "clues": [
      "One click moves to the next letter. From Z one click returns to A.",
      "After each move write down the new letter. For the next move start where you stopped. The word lengths are 4, 3, 4 and 4."
    ],
    "questions": [
      "What job did the keeper assign?"
    ],
    "answer": "Mend the blue flag.",
    "why": "Starting on A, 12 clicks land on M. Another 18 wrap to E, then 9 land on N and 16 reach D. Continuing from each stop produces THE, BLUE and FLAG.",
    "exhibit": "12 · 18 · 9 · 16 · 16 · 14 · 23 · 23 · 10 · 9 · 10 · 1 · 6 · 15 · 6"
  },
  {
    "id": 131,
    "kind": "Detective skills",
    "title": "The watch in the tide book",
    "level": "Hard",
    "intro": "The retired pilot entered a departure and return in his diary using his pocket watch. His granddaughter finds two comparisons against the harbor clock bracketing the voyage.",
    "clues": [
      "At harbor noon the watch showed 12:06. At harbor 14:00 it showed 14:10. It ran at a steady rate throughout.",
      "The diary gives watch times 12:37 and 13:39, exactly as read, on that same afternoon."
    ],
    "questions": [
      "How long was the voyage in harbor minutes?",
      "What were its actual departure and return times?"
    ],
    "answer": "Sixty harbor minutes, from 12:30 to 13:30.",
    "why": "Across 120 harbor minutes the watch advances 124 minutes. Every 31 watch minutes correspond to 30 harbor minutes. Departure is 31 watch minutes after the noon comparison and return is 93 after it."
  },
  {
    "id": 132,
    "kind": "Whodunit",
    "title": "The lantern in the playbill",
    "level": "Medium",
    "intro": "A local artist added an unsigned lantern sketch to a proof of the pier theater's playbill. The printer found it on the proof immediately after the title spelling was corrected and before the admission price was changed.",
    "clues": [
      "Four artists each worked during a different, uninterrupted interval. At the end of Dora's interval the title was still wrong. At the start of Seth's interval the price had already been changed.",
      "Emil finished before Dora. Wren was the only other artist. The title and price were each changed just once. The sketch was drawn during one artist's interval."
    ],
    "questions": [
      "Which artist drew the lantern?",
      "Could Emil have drawn it even if he had remembered the final spelling?"
    ],
    "answer": "Wren drew it. Emil’s interval had already ended before the correction.",
    "why": "Dora and Emil finished while the erroneous title was still on the proof. Seth began after the period in which the sketch appeared. Only Wren could have been drawing between the two corrections."
  },
  {
    "id": 133,
    "kind": "Logic",
    "title": "The aquatint edition",
    "level": "Hard",
    "intro": "Four volunteers each pulled one aquatint from a different plate during a demonstration. Salt spray blurred the handwritten edition log. Use each impression and each plate exactly once. Read the positions in this order: First, Second, Third, Fourth.",
    "clues": [
      "The cove entry came somewhere between the pier entry and Bonnie.",
      "Tali came immediately before Arlo.",
      "Sol and the pier entry were next to one another.",
      "Tali came somewhere before Sol.",
      "Exactly one position separated the pier entry and the heron entry.",
      "Tali and the eelgrass entry were in different positions."
    ],
    "tableform": {
      "rows": [
        "Arlo",
        "Bonnie",
        "Sol",
        "Tali"
      ],
      "cols": [
        [
          "Impression",
          "First",
          "Second",
          "Third",
          "Fourth"
        ],
        [
          "Plate",
          "Pier",
          "Eelgrass",
          "Cove",
          "Heron"
        ]
      ]
    },
    "answer": "First — Bonnie, heron · Second — Tali, cove · Third — Arlo, pier · Fourth — Sol, eelgrass.",
    "why": "List the pairs still allowed by the first clues in the given order. For example, the earlier clues alone allow Tali with eelgrass at First. The final clue rules out that arrangement. With all the clues in place, Bonnie has heron there."
  },
  {
    "id": 134,
    "kind": "Crossword",
    "title": "Silver cup at the links",
    "level": "Easy",
    "intro": "A medal turned up at the ferry ticket booth. Its ribbon carries a crossword from the harbor golf club.",
    "entries": [
      {
        "x": 0,
        "y": 2,
        "dir": "Across",
        "word": "GREEN",
        "clue": "Short grass around the cup"
      },
      {
        "x": 3,
        "y": 0,
        "dir": "Down",
        "word": "TEE",
        "clue": "Little peg under the first shot"
      },
      {
        "x": 1,
        "y": 2,
        "dir": "Down",
        "word": "ROUGH",
        "clue": "Longer grass beside the fairway"
      },
      {
        "x": 0,
        "y": 4,
        "dir": "Across",
        "word": "BUNKER",
        "clue": "Sand-filled golfing hazard"
      },
      {
        "x": 5,
        "y": 3,
        "dir": "Down",
        "word": "DRIVER",
        "clue": "Long club often used off the first tee"
      },
      {
        "x": 5,
        "y": 7,
        "dir": "Across",
        "word": "EAGLE",
        "clue": "Two strokes under par"
      },
      {
        "x": 0,
        "y": 0,
        "dir": "Across",
        "word": "PUTT",
        "clue": "Stroke intended to roll along the green"
      },
      {
        "x": 9,
        "y": 2,
        "dir": "Down",
        "word": "BIRDIE",
        "clue": "One stroke under par"
      },
      {
        "x": 7,
        "y": 3,
        "dir": "Across",
        "word": "GRIP",
        "clue": "Part of a club held in the hands"
      },
      {
        "x": 3,
        "y": 8,
        "dir": "Across",
        "word": "PAR",
        "clue": "Expected strokes for a hole"
      },
      {
        "x": 7,
        "y": 0,
        "dir": "Down",
        "word": "FLAG",
        "clue": "Cloth marker waving above the hole"
      }
    ]
  },
  {
    "id": 135,
    "kind": "Word search",
    "title": "Pegs from the boatyard wall",
    "level": "Easy",
    "intro": "The carpenter penciled the ten names of hand tools above her tool pegs. Find the names before unpacking the chest. Look across to the right, down, or diagonally down.",
    "grid": [
      "OBJPZWYBCZ",
      "DRELLCURWA",
      "MALVLAXAKE",
      "ASIAESNCTU",
      "LPMTQLLEPM",
      "LPPUAUGERW",
      "EVAVKNDDVD",
      "TRCHISELEG",
      "EAALQJFILE",
      "XMHSDEDGGF"
    ],
    "locations": {
      "MALLET": [
        [
          0,
          2
        ],
        [
          0,
          7
        ]
      ],
      "CHISEL": [
        [
          2,
          7
        ],
        [
          7,
          7
        ]
      ],
      "SQUARE": [
        [
          5,
          3
        ],
        [
          0,
          8
        ]
      ],
      "PLANE": [
        [
          3,
          0
        ],
        [
          7,
          4
        ]
      ],
      "BRACE": [
        [
          7,
          0
        ],
        [
          7,
          4
        ]
      ],
      "AUGER": [
        [
          4,
          5
        ],
        [
          8,
          5
        ]
      ],
      "CLAMP": [
        [
          5,
          1
        ],
        [
          1,
          5
        ]
      ],
      "BEVEL": [
        [
          1,
          0
        ],
        [
          5,
          4
        ]
      ],
      "RASP": [
        [
          1,
          1
        ],
        [
          1,
          4
        ]
      ],
      "FILE": [
        [
          6,
          8
        ],
        [
          9,
          8
        ]
      ]
    }
  },
  {
    "id": 136,
    "kind": "Codebreaking",
    "title": "The five bulbs over the ticket desk",
    "level": "Medium",
    "intro": "A test strip records eight flashes from a row of five lamps above a ticket desk. A filled circle means lit and a dash means dark.",
    "clues": [
      "The five positions are worth 16, 8, 4, 2 and 1, from left to right. Add only the values of the lit lamps.",
      "Use A = 1 through Z = 26. Insert a space after four letters."
    ],
    "questions": [
      "Which landing does the strip name?"
    ],
    "answer": "West Pier.",
    "why": "The first flash is 16 + 4 + 2 + 1 = 23, or W. The eight values are 23, 5, 19, 20, 16, 9, 5 and 18.",
    "exhibit": "●–●●● / ––●–● / ●––●● / ●–●–– / ●–––– / –●––● / ––●–● / ●––●–"
  },
  {
    "id": 137,
    "kind": "Detective skills",
    "title": "A rung in the glass",
    "level": "Medium",
    "intro": "The museum catalog lists three miniature ladders. A photograph of one ladder shows seven evenly spaced rungs, with the top rail ends visible but with the bottom cropped out. The restorer measured the photographed spacing using a scale in that same plane.",
    "clues": [
      "The seven visible rung centers span 18 centimeters from first to seventh. The top rung is the first visible one. Records read: A, seven rungs with 2.5 cm spacing; B, eight rungs with 3 cm spacing; C, nine rungs with 2 cm spacing.",
      "The models were photographed without stretching or perspective distortion."
    ],
    "questions": [
      "Which catalog entry fits?",
      "How far below the top rung is the bottom rung on the complete model?"
    ],
    "answer": "B, with its bottom rung 21 cm below the top one.",
    "why": "Seven rung centers contain six spaces. Each space measures 18 ÷ 6 = 3 cm, matching B alone. Eight rungs give seven spaces on the complete model, for 21 cm."
  },
  {
    "id": 138,
    "kind": "Whodunit",
    "title": "An extra leaf in the tea tin",
    "level": "Medium",
    "intro": "The tea-tasting game asked each entrant to seal one tin and write an exact ingredient list. The judge found a sprig of mint in one tin whose written list omitted it. That entrant wins the prize for the accidental blend.",
    "clues": [
      "The surprising tin contained only black tea, orange peel and mint, and only mint was missing from its list. The other list entries were all correct; their order was immaterial.",
      "Lists: Evie — black tea, mint. Rhys — orange peel, black tea. Noor — orange peel, green tea. Pat — black tea, orange peel, mint."
    ],
    "questions": [
      "Whose blend won?",
      "Who wrote down the exact contents of the surprising tin but cannot be its owner?"
    ],
    "answer": "Rhys won. Pat listed all three ingredients.",
    "why": "Remove only mint from the observed ingredients. The two remaining entries must be black tea and orange peel, in either order. Rhys alone listed exactly those two. Pat omitted nothing."
  },
  {
    "id": 139,
    "kind": "Logic",
    "title": "Flowers on the upper deck",
    "level": "Hard",
    "intro": "Four planters sat at fixed positions along the deck. Each belonged to a different club member and grew a single kind of flower. A steward has washed the labels off. Use each position and each flower exactly once. Read the positions in this order: Bow, Forward middle, Aft middle, Stern.",
    "clues": [
      "Bran came somewhere between the aster entry and the poppy entry.",
      "Exactly one position separated Felix and the viola entry.",
      "The daisy entry came immediately before Felix.",
      "The viola entry came somewhere before the aster entry.",
      "Enid and Vera were next to one another.",
      "Enid and the viola entry were in different positions."
    ],
    "tableform": {
      "rows": [
        "Enid",
        "Bran",
        "Felix",
        "Vera"
      ],
      "cols": [
        [
          "Position",
          "Bow",
          "Forward middle",
          "Aft middle",
          "Stern"
        ],
        [
          "Flower",
          "Aster",
          "Poppy",
          "Viola",
          "Daisy"
        ]
      ]
    },
    "answer": "Bow — Enid, poppy · Forward middle — Vera, viola · Aft middle — Bran, daisy · Stern — Felix, aster.",
    "why": "Taken together, the first 3 clues put Felix at Stern. For example, the earlier clues alone allow Vera with poppy at Bow. The final clue rules out that arrangement. With all the clues in place, Enid has poppy there."
  },
  {
    "id": 140,
    "kind": "Crossword",
    "title": "Riddle of the painted egg",
    "level": "Medium",
    "intro": "At the festival, a miniature painter decorated a keepsake egg with clues to her workbench.",
    "entries": [
      {
        "x": 2,
        "y": 7,
        "dir": "Across",
        "word": "OIL",
        "clue": "Painting medium traditionally made with linseed"
      },
      {
        "x": 4,
        "y": 3,
        "dir": "Down",
        "word": "MURAL",
        "clue": "Painting made directly on a wall"
      },
      {
        "x": 1,
        "y": 3,
        "dir": "Across",
        "word": "FRAME",
        "clue": "Decorative border around a finished painting"
      },
      {
        "x": 5,
        "y": 0,
        "dir": "Down",
        "word": "TUBE",
        "clue": "Squeezable container for paint"
      },
      {
        "x": 3,
        "y": 5,
        "dir": "Across",
        "word": "BRUSH",
        "clue": "Tool with a tuft set into a ferrule"
      },
      {
        "x": 5,
        "y": 0,
        "dir": "Across",
        "word": "TINT",
        "clue": "Color made lighter by adding white"
      },
      {
        "x": 2,
        "y": 6,
        "dir": "Down",
        "word": "MODEL",
        "clue": "Person posing for a portrait"
      },
      {
        "x": 0,
        "y": 9,
        "dir": "Across",
        "word": "HUE",
        "clue": "A color considered apart from its lightness"
      },
      {
        "x": 0,
        "y": 6,
        "dir": "Down",
        "word": "WASH",
        "clue": "Thin translucent layer of color"
      },
      {
        "x": 7,
        "y": 3,
        "dir": "Down",
        "word": "OCHRE",
        "clue": "Earth pigment commonly yellowish brown"
      },
      {
        "x": 6,
        "y": 7,
        "dir": "Across",
        "word": "GESSO",
        "clue": "White primer on an artist’s panel"
      }
    ]
  },
  {
    "id": 141,
    "kind": "Word search",
    "title": "The missing menu of pasta",
    "level": "Medium",
    "intro": "At the pier café, the cook remembers exactly ten shapes from the missing menu. Find their names as single words. Look in any of eight directions.",
    "grid": [
      "BKXJFPEDLRPC",
      "GCOXTNNIRAFM",
      "NNFZGBNNKVMH",
      "UUOARGROTINI",
      "TESCUONTSODM",
      "WALICNSAKLJR",
      "LONLOHMGAIDW",
      "DEMSAQIIAMCE",
      "RFDIFFORFLFN",
      "HLUKGPROLSYN",
      "ILLISUFAFWIE",
      "BUOBDGSSFUPP"
    ],
    "locations": {
      "RIGATONI": [
        [
          7,
          8
        ],
        [
          7,
          1
        ]
      ],
      "FARFALLE": [
        [
          8,
          11
        ],
        [
          1,
          4
        ]
      ],
      "LINGUINE": [
        [
          8,
          0
        ],
        [
          1,
          7
        ]
      ],
      "FUSILLI": [
        [
          6,
          10
        ],
        [
          0,
          10
        ]
      ],
      "RAVIOLI": [
        [
          9,
          0
        ],
        [
          9,
          6
        ]
      ],
      "GNOCCHI": [
        [
          0,
          1
        ],
        [
          6,
          7
        ]
      ],
      "LASAGNE": [
        [
          0,
          6
        ],
        [
          6,
          0
        ]
      ],
      "ROTINI": [
        [
          6,
          3
        ],
        [
          11,
          3
        ]
      ],
      "PENNE": [
        [
          11,
          11
        ],
        [
          11,
          7
        ]
      ],
      "ORZO": [
        [
          5,
          4
        ],
        [
          2,
          1
        ]
      ]
    }
  },
  {
    "id": 142,
    "kind": "Codebreaking",
    "title": "The coat-check carousel",
    "level": "Medium",
    "intro": "The coat-check attendant hung letter tags at ten consecutive hooks, then copied them starting at the wrong hook.",
    "clues": [
      "The hooks form a circle; hook 10 is followed by hook 1. The list starts at hook 1 and runs clockwise.",
      "The attendant’s original message begins at the hook marked with a small star, number 7. Read clockwise, one full lap."
    ],
    "questions": [
      "What direction is written on the carousel?"
    ],
    "answer": "Seek yellow.",
    "why": "Starting at 7 gives S, E, E and K before the turn past 10. Hooks 1 through 6 give YELLOW. Look for something yellow.",
    "tables": [
      [
        "Carousel",
        [
          "Hook",
          "Tag"
        ],
        [
          [
            "1",
            "Y"
          ],
          [
            "2",
            "E"
          ],
          [
            "3",
            "L"
          ],
          [
            "4",
            "L"
          ],
          [
            "5",
            "O"
          ],
          [
            "6",
            "W"
          ],
          [
            "7 ★",
            "S"
          ],
          [
            "8",
            "E"
          ],
          [
            "9",
            "E"
          ],
          [
            "10",
            "K"
          ]
        ]
      ]
    ]
  },
  {
    "id": 143,
    "kind": "Detective skills",
    "title": "The oyster stall's two scoops",
    "level": "Medium",
    "intro": "A market inspector finds that a handwritten biscuit order gives the right total number of scoops but the wrong total number of biscuits. She reconstructs what the packer actually used.",
    "clues": [
      "A blue scoop holds exactly 4 biscuits and a white one exactly 7. Eight level scoops emptied into one tin. At the stall they counted 44 biscuits in that tin. No biscuits were loose or broken.",
      "The order had called for five blue scoops and three white."
    ],
    "questions": [
      "How many scoops of each color actually went in?",
      "What single substitution explains the difference from the order?"
    ],
    "answer": "Four blue and four white. One ordered blue scoop was replaced with a white one.",
    "why": "Eight blue scoops would hold 32. Each white scoop adds three to that base. The extra 12 requires four whites. The written order would give 41, three short of the actual 44."
  },
  {
    "id": 144,
    "kind": "Whodunit",
    "title": "A chair at the back of the choir",
    "level": "Hard",
    "intro": "Just before the harbor choir photograph, one singer left a paper crown on their seat. The photographer remembers that its owner was the third of five singers counting from the end nearest the clock.",
    "clues": [
      "From the clock end, Ava sat ahead of Bram with two people between them. Celia was last. Dov sat immediately nearer the clock than Esme.",
      "Each singer occupied exactly one chair in this straight row."
    ],
    "questions": [
      "Who owned the paper crown?",
      "Who sat next to its owner on the clock side?"
    ],
    "answer": "Esme owned it. Dov was on Esme’s clock side.",
    "why": "Ava and Bram could sit in 1 and 4 or 2 and 5. Celia has 5, so Ava takes 1 and Bram 4. This leaves 2 and 3 for Dov then Esme."
  },
  {
    "id": 145,
    "kind": "Logic",
    "title": "The four auction paddles",
    "level": "Hard",
    "intro": "Four collectors bought four different curios in consecutive auction lots. They ask the purser to match each receipt to its buyer and lot. Use each lot and each curio exactly once. Read the positions in this order: 25, 26, 27, 28.",
    "clues": [
      "The seal ring entry came immediately before Uma.",
      "The cameo entry came somewhere before Gabe.",
      "Exactly one position separated Uma and the inkstone entry.",
      "The compass entry occupied one of the two end positions.",
      "The inkstone entry did not occupy 26.",
      "Ruth and the inkstone entry were next to one another."
    ],
    "tableform": {
      "rows": [
        "Uma",
        "Gabe",
        "Len",
        "Ruth"
      ],
      "cols": [
        [
          "Lot",
          "25",
          "26",
          "27",
          "28"
        ],
        [
          "Curio",
          "Seal ring",
          "Inkstone",
          "Compass",
          "Cameo"
        ]
      ]
    },
    "answer": "25 — Len, inkstone · 26 — Ruth, seal ring · 27 — Uma, cameo · 28 — Gabe, compass.",
    "why": "Taken together, the first 4 clues put the compass entry at 28. For example, the earlier clues alone allow Ruth with inkstone at 25. The final clue rules out that arrangement. With all the clues in place, Len has inkstone there."
  },
  {
    "id": 146,
    "kind": "Crossword",
    "title": "Scraps from the rowing club",
    "level": "Medium",
    "intro": "A cut-up regatta notice names neither boat nor crew. The intact scraps are all rowing clues.",
    "entries": [
      {
        "x": 4,
        "y": 6,
        "dir": "Across",
        "word": "SEAT",
        "clue": "It slides along tracks beneath a rower"
      },
      {
        "x": 7,
        "y": 4,
        "dir": "Down",
        "word": "CATCH",
        "clue": "Moment the blade takes the water"
      },
      {
        "x": 5,
        "y": 2,
        "dir": "Down",
        "word": "DRIVE",
        "clue": "Power phase after the catch"
      },
      {
        "x": 3,
        "y": 3,
        "dir": "Across",
        "word": "OAR",
        "clue": "Long lever with a blade in the water"
      },
      {
        "x": 3,
        "y": 0,
        "dir": "Down",
        "word": "STROKE",
        "clue": "Rower who sets the rhythm"
      },
      {
        "x": 7,
        "y": 7,
        "dir": "Across",
        "word": "CREW",
        "clue": "People who row together"
      },
      {
        "x": 10,
        "y": 5,
        "dir": "Down",
        "word": "BOW",
        "clue": "Front end of a racing shell"
      },
      {
        "x": 0,
        "y": 1,
        "dir": "Across",
        "word": "HEAT",
        "clue": "Qualifying race before a final"
      },
      {
        "x": 4,
        "y": 6,
        "dir": "Down",
        "word": "STERN",
        "clue": "End nearest the cox in a stern-coxed boat"
      },
      {
        "x": 0,
        "y": 8,
        "dir": "Across",
        "word": "BLADE",
        "clue": "Broad end of an oar"
      },
      {
        "x": 1,
        "y": 5,
        "dir": "Down",
        "word": "SCULL",
        "clue": "One of two oars worked by the same rower"
      },
      {
        "x": 7,
        "y": 4,
        "dir": "Across",
        "word": "COX",
        "clue": "Crew member who steers and directs"
      }
    ]
  },
  {
    "id": 147,
    "kind": "Word search",
    "title": "A suitcase of stage makeup",
    "level": "Medium",
    "intro": "The dresser knows which case is hers by the ten makeup-counter words inside the lid. Look in any of eight directions.",
    "grid": [
      "HEYPAORORRIM",
      "DGYEIPIZAXXS",
      "UNRNBDGSEBSL",
      "WORCXVLTSWGG",
      "VPGIURTSCDSR",
      "HSULPEEOJBZA",
      "RGGRLRMDLHXF",
      "XRHAOPJUWHCO",
      "YLPKAUSCSOPC",
      "ZOICHHGUWVPL",
      "WSTTGDREFRRS",
      "LINERBGAJWMM"
    ],
    "locations": {
      "PALETTE": [
        [
          2,
          8
        ],
        [
          8,
          2
        ]
      ],
      "COMPACT": [
        [
          8,
          4
        ],
        [
          2,
          10
        ]
      ],
      "POWDER": [
        [
          10,
          9
        ],
        [
          5,
          4
        ]
      ],
      "SPONGE": [
        [
          1,
          5
        ],
        [
          1,
          0
        ]
      ],
      "MIRROR": [
        [
          11,
          0
        ],
        [
          6,
          0
        ]
      ],
      "PENCIL": [
        [
          3,
          0
        ],
        [
          3,
          5
        ]
      ],
      "LINER": [
        [
          0,
          11
        ],
        [
          4,
          11
        ]
      ],
      "ROUGE": [
        [
          3,
          6
        ],
        [
          7,
          10
        ]
      ],
      "BRUSH": [
        [
          5,
          11
        ],
        [
          9,
          7
        ]
      ],
      "BLUSH": [
        [
          9,
          5
        ],
        [
          5,
          9
        ]
      ]
    }
  },
  {
    "id": 148,
    "kind": "Codebreaking",
    "title": "The ribbons off a parcel",
    "level": "Hard",
    "intro": "Five narrow paper ribbons came unstuck from the side of a parcel. Each still has its printed column number and three letters, from the top down.",
    "clues": [
      "Place the ribbons upright in columns 1 to 5. Read the reconstructed rectangle across each row from left to right.",
      "The result has word lengths 4, 3, 5 and 3."
    ],
    "questions": [
      "What does the parcel ask you to take?"
    ],
    "answer": "Take the brass key.",
    "why": "Putting the strips in numerical order makes rows TAKET, HEBRA and SSKEY. Reading across the row boundaries gives TAKE THE BRASS KEY.",
    "tables": [
      [
        "Loose ribbons",
        [
          "Column number",
          "Top to bottom"
        ],
        [
          [
            "4",
            "ERE"
          ],
          [
            "1",
            "THS"
          ],
          [
            "5",
            "TAY"
          ],
          [
            "2",
            "AES"
          ],
          [
            "3",
            "KBK"
          ]
        ]
      ]
    ]
  },
  {
    "id": 149,
    "kind": "Detective skills",
    "title": "Where the glue had been",
    "level": "Medium",
    "intro": "Three exhibit cards fell off a display rail in a storm. The rail still has a square glue mark at the left, two round marks in the middle and one round mark at the right.",
    "clues": [
      "The shells card has two clean circular patches on the back. The knots card has a clean square patch and a penciled circle beside it. The nets card has one clean circular patch. Each patch was made by glue touching the rail. Pencil lines left no mark on it.",
      "The cards were mounted face outward, one per position; the number and shape of the glue contacts match their rail marks."
    ],
    "questions": [
      "Restore the cards from left to right.",
      "Why is the circle on the knots card misleading?"
    ],
    "answer": "Knots, shells, nets. The circle on the knots card was drawn in pencil.",
    "why": "Use the contact patches: the square matches knots, the pair of circles matches shells, and the single circle matches nets. The pencil circle supplies no second glue contact."
  },
  {
    "id": 150,
    "kind": "Whodunit",
    "title": "The invalid ballast ticket",
    "level": "Hard",
    "intro": "Four teams entered the canal museum's toy-boat ballast contest. Each ticket gives the boat's empty weight and its final reading on a balance after adding identical brass washers. A clerk mistakenly filed a practice ticket among the three genuine ones.",
    "clues": [
      "Every genuine addition was a whole number of 6 g washers, with at least two and at most five washers allowed. The balance was exact. One team filed the practice ticket.",
      "Empty / final readings in grams: Birch 34 / 52; Lime 41 / 71; Alder 29 / 41; Pine 38 / 74."
    ],
    "questions": [
      "Which team's ticket must be the practice ticket?",
      "Show the number of washers represented by each difference."
    ],
    "answer": "Pine filed the practice ticket.",
    "why": "Birch added 18 g, or three washers. Lime added 30 g, or five. Alder added 12 g, or two. Pine added 36 g, which is six whole washers. The ticket passes the divisibility test but exceeds the five-washer maximum."
  },
  {
    "id": 151,
    "kind": "Logic",
    "title": "Ribbons on the tasting cups",
    "level": "Medium",
    "intro": "Three bakers poured tasting cups in three rounds. Each baker used a different flavor, and the festival wants to print their names in the results. Use each round and each flavor exactly once. Read the positions in this order: Opening, Middle, Closing.",
    "clues": [
      "Amos came somewhere before the lemon entry.",
      "Noa and the ginger entry were next to one another.",
      "Noa did not occupy Middle.",
      "Amos came immediately before Noa."
    ],
    "tableform": {
      "rows": [
        "Noa",
        "Celia",
        "Amos"
      ],
      "cols": [
        [
          "Round",
          "Opening",
          "Middle",
          "Closing"
        ],
        [
          "Flavor",
          "Honey",
          "Lemon",
          "Ginger"
        ]
      ]
    },
    "answer": "Opening — Celia, honey · Middle — Amos, ginger · Closing — Noa, lemon.",
    "why": "Noa cannot open, because Amos comes immediately before Noa. Noa is also excluded from the middle, so Noa closes and Amos goes second. Ginger must be next to Noa, putting it in the middle. Lemon comes after Amos, so it must close. That leaves Celia opening with honey."
  },
  {
    "id": 152,
    "kind": "Crossword",
    "title": "The comb from Hive Lane",
    "level": "Medium",
    "intro": "A wax parcel links the case to the beekeeper on Hive Lane. Read her clues in the cells.",
    "entries": [
      {
        "x": 2,
        "y": 6,
        "dir": "Across",
        "word": "NECTAR",
        "clue": "Sweet liquid gathered to make honey"
      },
      {
        "x": 4,
        "y": 6,
        "dir": "Down",
        "word": "COMB",
        "clue": "Sheet of adjoining wax cells"
      },
      {
        "x": 0,
        "y": 8,
        "dir": "Across",
        "word": "SWARM",
        "clue": "Cluster that leaves to start a new colony"
      },
      {
        "x": 2,
        "y": 2,
        "dir": "Down",
        "word": "QUEEN",
        "clue": "Colony member that usually lays the eggs"
      },
      {
        "x": 1,
        "y": 4,
        "dir": "Across",
        "word": "VEIL",
        "clue": "Mesh covering for the keeper’s face"
      },
      {
        "x": 4,
        "y": 1,
        "dir": "Down",
        "word": "CELL",
        "clue": "One six-sided chamber"
      },
      {
        "x": 1,
        "y": 8,
        "dir": "Down",
        "word": "WAX",
        "clue": "Material from which bees build their comb"
      },
      {
        "x": 7,
        "y": 1,
        "dir": "Down",
        "word": "WORKER",
        "clue": "Female bee that may forage for the colony"
      },
      {
        "x": 6,
        "y": 3,
        "dir": "Across",
        "word": "DRONE",
        "clue": "Male honeybee"
      },
      {
        "x": 4,
        "y": 9,
        "dir": "Across",
        "word": "BROOD",
        "clue": "Collective term for developing young in the hive"
      },
      {
        "x": 10,
        "y": 0,
        "dir": "Down",
        "word": "HIVE",
        "clue": "A beekeeper’s home for a colony"
      }
    ]
  },
  {
    "id": 153,
    "kind": "Word search",
    "title": "The timber tally at Lock Two",
    "level": "Hard",
    "intro": "The lumber clerk made a new tally with tree names instead of numbers. Find all ten in the stack. Look in any of eight directions.",
    "grid": [
      "LJYCESTJOYWRU",
      "VAVAPWWIHOAAC",
      "MWRRYQXCMKLLE",
      "BMUCWYRATJNPQ",
      "LCANHIQUFZUOE",
      "EFEHBXMNMATPP",
      "DOSROTUNTSEHC",
      "CALMOGLRVDUSW",
      "CLWFWMARARLVE",
      "GQCSMQANLDGCE",
      "ZOALRMMCYIERS",
      "BXBDOHQWYLNCL",
      "HICKORYCCSTAO"
    ],
    "locations": {
      "MAHOGANY": [
        [
          1,
          3
        ],
        [
          8,
          10
        ]
      ],
      "SYCAMORE": [
        [
          9,
          12
        ],
        [
          2,
          5
        ]
      ],
      "CHESTNUT": [
        [
          12,
          6
        ],
        [
          5,
          6
        ]
      ],
      "HICKORY": [
        [
          0,
          12
        ],
        [
          6,
          12
        ]
      ],
      "WALNUT": [
        [
          10,
          0
        ],
        [
          10,
          5
        ]
      ],
      "POPLAR": [
        [
          11,
          5
        ],
        [
          11,
          0
        ]
      ],
      "SPRUCE": [
        [
          5,
          0
        ],
        [
          0,
          5
        ]
      ],
      "BIRCH": [
        [
          4,
          5
        ],
        [
          8,
          1
        ]
      ],
      "LARCH": [
        [
          0,
          0
        ],
        [
          4,
          4
        ]
      ],
      "CEDAR": [
        [
          11,
          11
        ],
        [
          7,
          7
        ]
      ]
    }
  },
  {
    "id": 154,
    "kind": "Codebreaking",
    "title": "The route on the luggage tags",
    "level": "Medium",
    "intro": "Six luggage tags record successive handoffs on a single walk. A porter saved two letters from each stop but filed the tags out of order.",
    "clues": [
      "The walk began at the Hatch and ended at the Jetty. The destination on one tag is the starting place on the next. Use all six tags once.",
      "After reconstructing the walk, read the letter pairs in walking order. The note has three words."
    ],
    "tables": [
      [
        "Unsorted tags",
        [
          "From",
          "To",
          "Pair on back"
        ],
        [
          [
            "Arcade",
            "Inn",
            "HE"
          ],
          [
            "Booth",
            "Jetty",
            "MP"
          ],
          [
            "Kiosk",
            "Pavilion",
            "IN"
          ],
          [
            "Inn",
            "Booth",
            "LA"
          ],
          [
            "Hatch",
            "Kiosk",
            "BR"
          ],
          [
            "Pavilion",
            "Arcade",
            "GT"
          ]
        ]
      ]
    ],
    "questions": [
      "What item did the porter ask for, and what order did the tags go in?"
    ],
    "answer": "Bring the lamp. The route was Hatch, Kiosk, Pavilion, Arcade, Inn, Booth, Jetty.",
    "why": "Hatch leads only to Kiosk, whose tag leads to Pavilion. Each following destination picks the next tag. The pairs are BR, IN, GT, HE, LA and MP, which divide into BRING THE LAMP."
  },
  {
    "id": 155,
    "kind": "Detective skills",
    "title": "The postcard's torn margin",
    "level": "Medium",
    "intro": "A square harbor postcard is reunited with its torn-off margin. A neat little sketch shows the names of landmarks in clockwise order around its face. The postcard could have been turned on the table.",
    "clues": [
      "Clockwise around the original face the sketch reads Mill, Buoy, Arch, Crane, Fort. The names occur once each and the order repeats around the edge.",
      "The surviving margin shows three consecutive positions. Reading along it in one direction, they are Arch, a tear, Mill. One entire landmark name has been lost between them."
    ],
    "questions": [
      "Which name was lost?",
      "Did the reader trace the margin clockwise or counterclockwise?"
    ],
    "answer": "Buoy. The margin was traced counterclockwise.",
    "why": "Counterclockwise from Arch the next names are Buoy and Mill. Clockwise from Arch they would be Crane and Fort. Turning the postcard in its plane does not reverse its order."
  },
  {
    "id": 156,
    "kind": "Whodunit",
    "title": "The gull from the hand press",
    "level": "Medium",
    "intro": "An unsigned relief print of a gull appeared in the regatta raffle. Four printmakers each brought one block. To identify the donation the cataloger compares the face of each block directly with the finished print.",
    "clues": [
      "The paper shows a gull facing left above an anchor, with a star in the upper-right corner. A single direct impression on paper reverses left and right and preserves top and bottom. No one rotated a block or the paper.",
      "Block faces, with their top edges marked: Iris — gull right, star upper left; Moe — gull left, star upper left; Nia — gull right, star lower left; Gus — gull left, star upper right. All have an anchor below the gull."
    ],
    "questions": [
      "Whose block made the donation?",
      "Which block face looks most like the paper if you forget the printing step?"
    ],
    "answer": "Iris donated the print. Gus’s block face most resembles the finished picture.",
    "why": "Reverse both horizontal features: the gull on the block must face right and the star must sit at upper left. Only Iris has both. Gus matches the paper directly, which would print the opposite image."
  },
  {
    "id": 157,
    "kind": "Logic",
    "title": "In the four shadow boxes",
    "level": "Hard",
    "intro": "Four conservators arranged beach finds in four shadow boxes stacked low to high. Each kept one find and its own signed catalog card. Use each box and each find exactly once. Read the positions in this order: Bottom, Lower middle, Upper middle, Top.",
    "clues": [
      "Zara came immediately before Colm.",
      "Colm came somewhere between Dara and Theo.",
      "Exactly one position separated Zara and the amber entry.",
      "The seaglass entry came somewhere before Zara.",
      "The fossil entry did not occupy Lower middle.",
      "Dara and the fossil entry were next to one another."
    ],
    "tableform": {
      "rows": [
        "Dara",
        "Colm",
        "Zara",
        "Theo"
      ],
      "cols": [
        [
          "Box",
          "Bottom",
          "Lower middle",
          "Upper middle",
          "Top"
        ],
        [
          "Find",
          "Cowrie",
          "Amber",
          "Seaglass",
          "Fossil"
        ]
      ]
    },
    "answer": "Bottom — Theo, seaglass · Lower middle — Zara, cowrie · Upper middle — Colm, fossil · Top — Dara, amber.",
    "why": "Seaglass has to precede Zara, and two people must come after Zara: Colm and whichever of Dara or Theo lies beyond Colm. Zara therefore occupies the lower middle, followed by Colm. Seaglass is at the bottom and amber two positions above Zara, at the top. Fossil cannot be lower middle, so it is upper middle. Dara is next to fossil and cannot be Zara, placing Dara at the top."
  },
  {
    "id": 158,
    "kind": "Crossword",
    "title": "A move at the tea pavilion",
    "level": "Medium",
    "intro": "Two chess players left their score sheet at the pavilion. The back holds a crossword for the next pair.",
    "entries": [
      {
        "x": 5,
        "y": 3,
        "dir": "Across",
        "word": "FILE",
        "clue": "Vertical line of squares"
      },
      {
        "x": 6,
        "y": 2,
        "dir": "Down",
        "word": "BISHOP",
        "clue": "Piece that always stays on one color"
      },
      {
        "x": 8,
        "y": 0,
        "dir": "Down",
        "word": "QUEEN",
        "clue": "Piece combining rook and bishop movement"
      },
      {
        "x": 2,
        "y": 5,
        "dir": "Across",
        "word": "KNIGHT",
        "clue": "Piece able to jump over others"
      },
      {
        "x": 2,
        "y": 2,
        "dir": "Down",
        "word": "FORK",
        "clue": "One piece attacking two targets at once"
      },
      {
        "x": 0,
        "y": 3,
        "dir": "Across",
        "word": "ROOK",
        "clue": "Piece also called a castle"
      },
      {
        "x": 4,
        "y": 4,
        "dir": "Down",
        "word": "KING",
        "clue": "Piece whose checkmate ends the game"
      },
      {
        "x": 0,
        "y": 2,
        "dir": "Down",
        "word": "DRAW",
        "clue": "Game with no winner"
      },
      {
        "x": 6,
        "y": 7,
        "dir": "Across",
        "word": "PAWN",
        "clue": "Piece that can promote on the last rank"
      },
      {
        "x": 9,
        "y": 5,
        "dir": "Down",
        "word": "RANK",
        "clue": "Horizontal line of squares"
      }
    ]
  },
  {
    "id": 159,
    "kind": "Word search",
    "title": "From a rain-stained sketchbook",
    "level": "Easy",
    "intro": "Someone left a sketchbook on a deck chair. Find the ten drawing terms on the inside cover. Look across to the right, down, or diagonally down.",
    "grid": [
      "COUTLINEGA",
      "ORCPPTHRMM",
      "NLDHSAAWBS",
      "TRPEAPPBFT",
      "OQJAHRLEER",
      "UVKISECRRO",
      "RGTBNTAOZK",
      "OESDBSEUAE",
      "FZZLEBPLFL",
      "YMXRSMUDGE"
    ],
    "locations": {
      "CHARCOAL": [
        [
          2,
          1
        ],
        [
          9,
          8
        ]
      ],
      "GRAPHITE": [
        [
          8,
          0
        ],
        [
          1,
          7
        ]
      ],
      "CONTOUR": [
        [
          0,
          0
        ],
        [
          0,
          6
        ]
      ],
      "OUTLINE": [
        [
          1,
          0
        ],
        [
          7,
          0
        ]
      ],
      "PASTEL": [
        [
          2,
          3
        ],
        [
          7,
          8
        ]
      ],
      "ERASER": [
        [
          8,
          4
        ],
        [
          3,
          9
        ]
      ],
      "STROKE": [
        [
          9,
          2
        ],
        [
          9,
          7
        ]
      ],
      "SMUDGE": [
        [
          4,
          9
        ],
        [
          9,
          9
        ]
      ],
      "PAPER": [
        [
          4,
          1
        ],
        [
          8,
          5
        ]
      ],
      "BLEND": [
        [
          7,
          3
        ],
        [
          3,
          7
        ]
      ]
    }
  },
  {
    "id": 160,
    "kind": "Codebreaking",
    "title": "A snail trail down the receipt",
    "level": "Medium",
    "intro": "A souvenir-shop receipt has a square of letters and a trail marked on its back. It leads to the name on an aquarium display.",
    "clues": [
      "Start at the upper-left corner, and write down that letter. Move one square per instruction, recording the new letter each time.",
      "The moves are down, down, right, up, right, down, right, right. Split the result after three letters."
    ],
    "questions": [
      "Which animals appear on the display?"
    ],
    "answer": "Sea snakes.",
    "why": "The starting square and the first two moves give SEA down the left edge. The remaining six land on S, N, A, K, E and S.",
    "tables": [
      [
        "Letter square",
        [
          "Row",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        [
          [
            "1",
            "S",
            "A",
            "X",
            "O",
            "M"
          ],
          [
            "2",
            "E",
            "N",
            "A",
            "R",
            "B"
          ],
          [
            "3",
            "A",
            "S",
            "K",
            "E",
            "S"
          ],
          [
            "4",
            "P",
            "L",
            "D",
            "N",
            "E"
          ],
          [
            "5",
            "Q",
            "U",
            "K",
            "R",
            "T"
          ]
        ]
      ]
    ]
  },
  {
    "id": 161,
    "kind": "Detective skills",
    "title": "Three boats in one notebook",
    "level": "Hard",
    "intro": "The harbor artist wrote down how many boats were at the wharf whenever she changed pencils. Her pencil marks are intact; the written totals have faded.",
    "clues": [
      "She started with an empty wharf. Between her first and second marks exactly three boats arrived and one left. Between her second and third marks two arrived and five left. At the third mark she counted four boats.",
      "Before the first mark there were arrivals only. Every movement mentioned is a single boat, and none is omitted."
    ],
    "questions": [
      "How many boats arrived before her first mark?",
      "Give the counts at all three pencil marks."
    ],
    "answer": "Five arrived before the first mark. The counts are 5, 7, 4.",
    "why": "Work back from four. The second interval had a net loss of three, so it began at seven. The first interval gained two, so it began at five. With no earlier departures, all five had arrived."
  },
  {
    "id": 162,
    "kind": "Whodunit",
    "title": "A parcel delivered twice",
    "level": "Hard",
    "intro": "A ferry clerk discovered that one of four bicycle couriers had returned to the parcel desk with a packet already marked delivered. The desk clock read 11:20 when that courier came back.",
    "clues": [
      "Each courier left the desk at 11:00, followed one assigned route straight to its endpoint and straight back at the same pace, and waited at the endpoint only for the stated handover time. Their one-way ride / handover times in minutes were: Ada 7 / 3; Bo 8 / 4; Cal 6 / 7; Di 9 / 1.",
      "All timings are exact; there were no stops apart from the one handover."
    ],
    "questions": [
      "Which courier returned the packet?",
      "Which two couriers would have arrived back together?"
    ],
    "answer": "Bo returned the packet. Cal and Di would both return at 11:19.",
    "why": "Double each one-way ride and add the handover just once. Ada needs 17 minutes, Bo 20, Cal 19 and Di 19. The desk reading is twenty minutes after departure."
  },
  {
    "id": 163,
    "kind": "Logic",
    "title": "Songs for the lunch boat",
    "level": "Hard",
    "intro": "Each musician performed one solo during the midday crossing. A cabin recording gives four successive slots, and each solo used a different instrument. Use each solo and each instrument exactly once. Read the positions in this order: First, Second, Third, Fourth.",
    "clues": [
      "The banjo entry came immediately before Isla.",
      "The banjo entry occupied one of the two end positions.",
      "Exactly one position separated Rafe and the banjo entry.",
      "The fiddle entry came somewhere before Mina.",
      "Rafe and the fiddle entry were next to one another.",
      "The harp entry did not occupy Fourth."
    ],
    "tableform": {
      "rows": [
        "Isla",
        "Rafe",
        "Mina",
        "Luca"
      ],
      "cols": [
        [
          "Solo",
          "First",
          "Second",
          "Third",
          "Fourth"
        ],
        [
          "Instrument",
          "Fiddle",
          "Flute",
          "Harp",
          "Banjo"
        ]
      ]
    },
    "answer": "First — Luca, banjo · Second — Isla, fiddle · Third — Rafe, harp · Fourth — Mina, flute.",
    "why": "Banjo occupies an end and Isla immediately follows it, which forces banjo first and Isla second. Rafe is two places from banjo in third. Fiddle is beside Rafe and must precede Mina, so fiddle must be second, with Mina fourth. Luca opens. Harp cannot be fourth and takes Rafe’s third slot, leaving flute for Mina."
  },
  {
    "id": 164,
    "kind": "Crossword",
    "title": "Marks on the cobbler’s ticket",
    "level": "Medium",
    "intro": "A pair of dancing shoes arrived with no owner’s name. The repair ticket has clues instead.",
    "entries": [
      {
        "x": 0,
        "y": 0,
        "dir": "Across",
        "word": "WELT",
        "clue": "Strip joining a shoe upper to the sole construction"
      },
      {
        "x": 3,
        "y": 0,
        "dir": "Down",
        "word": "TOE",
        "clue": "Front end of a shoe"
      },
      {
        "x": 2,
        "y": 2,
        "dir": "Across",
        "word": "HEEL",
        "clue": "Raised part under the back of the foot"
      },
      {
        "x": 5,
        "y": 2,
        "dir": "Down",
        "word": "LAST",
        "clue": "Foot-shaped form used in shoemaking"
      },
      {
        "x": 2,
        "y": 5,
        "dir": "Across",
        "word": "BOOT",
        "clue": "Footwear that also covers the ankle"
      },
      {
        "x": 5,
        "y": 3,
        "dir": "Across",
        "word": "AWL",
        "clue": "Pointed tool that pierces leather"
      },
      {
        "x": 7,
        "y": 3,
        "dir": "Down",
        "word": "LINING",
        "clue": "Layer touching the wearer’s foot"
      },
      {
        "x": 3,
        "y": 4,
        "dir": "Down",
        "word": "SOLE",
        "clue": "Part that meets the pavement"
      },
      {
        "x": 0,
        "y": 7,
        "dir": "Across",
        "word": "LACE",
        "clue": "Cord threaded through the eyelets"
      },
      {
        "x": 4,
        "y": 8,
        "dir": "Across",
        "word": "TONGUE",
        "clue": "Flap that lies under the laces"
      },
      {
        "x": 9,
        "y": 5,
        "dir": "Down",
        "word": "UPPER",
        "clue": "Shoe part attached above the sole"
      },
      {
        "x": 0,
        "y": 5,
        "dir": "Down",
        "word": "POLISH",
        "clue": "Mixture buffed to a shine on leather"
      }
    ]
  },
  {
    "id": 165,
    "kind": "Word search",
    "title": "The ninepins clubhouse",
    "level": "Medium",
    "intro": "The groundskeeper found a bowling scorecard tucked under the door. Ten bowling words run through it. Look in any of eight directions.",
    "grid": [
      "SVZQATILPSQK",
      "PLTKFPNFZZYR",
      "AWKUHTPVBRYY",
      "RRKPEEMRYRQA",
      "EPAKIKWFOULJ",
      "HVCWRIRQKAUY",
      "YOWYFRPEKKCO",
      "PZCRJTJETYQH",
      "URAOUSWLJTRS",
      "CMWILNRWAFUQ",
      "EDRELEASENTG",
      "VCGBBUUTOTEW"
    ],
    "locations": {
      "APPROACH": [
        [
          4,
          0
        ],
        [
          11,
          7
        ]
      ],
      "RELEASE": [
        [
          2,
          10
        ],
        [
          8,
          10
        ]
      ],
      "STRIKE": [
        [
          5,
          8
        ],
        [
          5,
          3
        ]
      ],
      "GUTTER": [
        [
          11,
          10
        ],
        [
          6,
          5
        ]
      ],
      "POCKET": [
        [
          0,
          7
        ],
        [
          5,
          2
        ]
      ],
      "SPARE": [
        [
          0,
          0
        ],
        [
          0,
          4
        ]
      ],
      "SPLIT": [
        [
          9,
          0
        ],
        [
          5,
          0
        ]
      ],
      "FRAME": [
        [
          4,
          6
        ],
        [
          0,
          10
        ]
      ],
      "LANE": [
        [
          7,
          8
        ],
        [
          10,
          11
        ]
      ],
      "FOUL": [
        [
          7,
          4
        ],
        [
          10,
          4
        ]
      ]
    }
  },
  {
    "id": 166,
    "kind": "Codebreaking",
    "title": "A minute faster every letter",
    "level": "Hard",
    "intro": "The clock repairer added an extra tick for each new letter in a note. A scrap labeled TEST came out UGVX.",
    "clues": [
      "To encode, the first letter moves forward one place in the alphabet, the second two, the third three, and so on. Wrap at the alphabet’s ends.",
      "Work backwards from the printed letters. Count straight through the gaps in the printed note."
    ],
    "questions": [
      "What should the clerk check?"
    ],
    "answer": "Check the clock.",
    "why": "Move D back one to C, J back two to H and H back three to E. Keep increasing the backward step to recover CHECK THE CLOCK.",
    "exhibit": "DJHGP ZOM LVZOX"
  },
  {
    "id": 167,
    "kind": "Detective skills",
    "title": "The missing measure of bunting",
    "level": "Medium",
    "intro": "The sailmaker cuts one long strip of bunting at painted boundary marks and gives all four pieces to different stalls. The lengths recorded on her tape are distances from the same end, not the lengths of the pieces.",
    "clues": [
      "The strip was 41 m long. Cut marks were 6 m, 17 m and 31 m. The stalls confirmed pieces of 6 m, 10 m and 14 m. The fourth stall's receipt is blank.",
      "There was no overlap or waste."
    ],
    "questions": [
      "What length should be entered?",
      "Which two tape marks bounded that piece?"
    ],
    "answer": "11 m, from the 6 m mark to the 17 m mark.",
    "why": "The boundaries in order are 0, 6, 17, 31 and 41. Adjacent differences give 6, 11, 14 and 10 m. The receipts account for every interval except the second."
  },
  {
    "id": 168,
    "kind": "Whodunit",
    "title": "The box that crossed the aisle",
    "level": "Hard",
    "intro": "A morning photograph shows four donors' boxes in a row, labeled A, B, C, D from the aisle end. An afternoon photograph shows B, C, A, D. A volunteer saw exactly one donor lift their own box, slide it into another position and leave the others in their original relative order.",
    "clues": [
      "The donors of A and B are Fern and Luis, in some order. Fern donated a box originally adjacent to both A and C. Pippa donated D; Sol donated the remaining box.",
      "The morning and afternoon views were taken from the same side."
    ],
    "questions": [
      "Which donor moved a box?",
      "Why can't the owner of B alone have produced the change?"
    ],
    "answer": "Luis moved box A from first to third.",
    "why": "Only suppressing A makes the two orders identical: B, C, D. Suppressing B leaves A,C,D versus C,A,D. Fern owned B, the box originally between A and C. Of the two possible owners of A, that leaves Luis."
  },
  {
    "id": 169,
    "kind": "Logic",
    "title": "Bread on the cooling rack",
    "level": "Hard",
    "intro": "At the bakery demonstration, four bakers put their loaves into separate compartments of the rack. The judge must reassemble the shelf labels and baker names. Use each compartment and each loaf exactly once. Read the positions in this order: Left end, Inner left, Inner right, Right end.",
    "clues": [
      "The focaccia entry came somewhere between Oona and the soda bread entry.",
      "Eli came immediately before Oona.",
      "The rye entry and the brioche entry were next to one another.",
      "Max came somewhere before Eli.",
      "The rye entry occupied one of the two end positions.",
      "Eli and the brioche entry were in different positions."
    ],
    "tableform": {
      "rows": [
        "Oona",
        "Max",
        "Eli",
        "Joy"
      ],
      "cols": [
        [
          "Compartment",
          "Left end",
          "Inner left",
          "Inner right",
          "Right end"
        ],
        [
          "Loaf",
          "Rye",
          "Brioche",
          "Soda bread",
          "Focaccia"
        ]
      ]
    },
    "answer": "Left end — Max, soda bread · Inner left — Eli, focaccia · Inner right — Oona, brioche · Right end — Joy, rye.",
    "why": "Taken together, the first 4 clues put the soda bread entry at Left end. For example, the earlier clues alone allow Joy with focaccia at Inner left. The final clue rules out that arrangement. With all the clues in place, Eli has focaccia there."
  },
  {
    "id": 170,
    "kind": "Crossword",
    "title": "Message on the billiard cloth",
    "level": "Easy",
    "intro": "The club steward chalked a set of clues beside the billiards table before he closed the room.",
    "entries": [
      {
        "x": 2,
        "y": 4,
        "dir": "Across",
        "word": "CHALK",
        "clue": "It coats that leather for grip"
      },
      {
        "x": 3,
        "y": 0,
        "dir": "Down",
        "word": "CLOTH",
        "clue": "Fabric stretched over the playing bed"
      },
      {
        "x": 6,
        "y": 0,
        "dir": "Down",
        "word": "BREAK",
        "clue": "First shot into a fresh rack"
      },
      {
        "x": 2,
        "y": 4,
        "dir": "Down",
        "word": "CUSHION",
        "clue": "Resilient rail the ball rebounds from"
      },
      {
        "x": 2,
        "y": 6,
        "dir": "Across",
        "word": "SLATE",
        "clue": "Stone beneath the cloth"
      },
      {
        "x": 5,
        "y": 6,
        "dir": "Down",
        "word": "TIP",
        "clue": "Bit of leather at the striking end"
      },
      {
        "x": 5,
        "y": 8,
        "dir": "Across",
        "word": "POCKET",
        "clue": "One of six openings on a pool table"
      },
      {
        "x": 6,
        "y": 0,
        "dir": "Across",
        "word": "BANK",
        "clue": "Shot sending the object ball off a cushion"
      },
      {
        "x": 9,
        "y": 6,
        "dir": "Down",
        "word": "CUE",
        "clue": "Stick used to strike the white ball"
      },
      {
        "x": 1,
        "y": 0,
        "dir": "Across",
        "word": "RACK",
        "clue": "Frame for arranging the balls"
      },
      {
        "x": 0,
        "y": 8,
        "dir": "Across",
        "word": "SPIN",
        "clue": "Rotation deliberately imparted to a ball"
      }
    ]
  },
  {
    "id": 171,
    "kind": "Word search",
    "title": "The bag from the herb walk",
    "level": "Medium",
    "intro": "The guide returned with ten herb names stitched into her market bag. Untangle them from the weave. Look in any of eight directions.",
    "grid": [
      "ADCHIVESTUWW",
      "MMNLTMUPAUHO",
      "SALQSHACCCVF",
      "TIRUJRTYIHOR",
      "DALOSYREWEWN",
      "BKRLJAPFIRXX",
      "HAERMRPSSVEI",
      "XYSEAYADLIMT",
      "IWSIFGEMYLYI",
      "SOJZLIOJXOHK",
      "RWUTGOBNYSTV",
      "TPBONAGEROEY"
    ],
    "locations": {
      "TARRAGON": [
        [
          0,
          3
        ],
        [
          7,
          10
        ]
      ],
      "ROSEMARY": [
        [
          0,
          10
        ],
        [
          7,
          3
        ]
      ],
      "MARJORAM": [
        [
          7,
          8
        ],
        [
          0,
          1
        ]
      ],
      "CHERVIL": [
        [
          9,
          2
        ],
        [
          9,
          8
        ]
      ],
      "PARSLEY": [
        [
          7,
          1
        ],
        [
          1,
          7
        ]
      ],
      "OREGANO": [
        [
          9,
          11
        ],
        [
          3,
          11
        ]
      ],
      "CHIVES": [
        [
          2,
          0
        ],
        [
          7,
          0
        ]
      ],
      "THYME": [
        [
          10,
          10
        ],
        [
          10,
          6
        ]
      ],
      "BASIL": [
        [
          0,
          5
        ],
        [
          4,
          9
        ]
      ],
      "DILL": [
        [
          0,
          4
        ],
        [
          3,
          1
        ]
      ]
    }
  },
  {
    "id": 172,
    "kind": "Codebreaking",
    "title": "The trees in the little dictionary",
    "level": "Medium",
    "intro": "The mailroom’s pocket dictionary has only five entries. A tree name chooses one entry and the following number chooses a letter in it.",
    "clues": [
      "Count characters in the entry word, starting at 1. For example, OAK2 means the second letter in CABLE.",
      "Read the slips from left to right. The answer is one building."
    ],
    "questions": [
      "Which building is the destination?"
    ],
    "answer": "The lighthouse.",
    "why": "YEW4 selects L from SHELF. ASH2 and ASH3 give I and G. Following the same lookup gives H, T, H, O, U, S and E.",
    "exhibit": "YEW4 · ASH2 · ASH3 · YEW2 · ELM3 · FIR1 · ELM2 · FIR3 · YEW1 · OAK5",
    "tables": [
      [
        "Pocket dictionary",
        [
          "Name",
          "Entry"
        ],
        [
          [
            "ASH",
            "LIGHT"
          ],
          [
            "ELM",
            "MOTOR"
          ],
          [
            "OAK",
            "CABLE"
          ],
          [
            "YEW",
            "SHELF"
          ],
          [
            "FIR",
            "HOUSE"
          ]
        ]
      ]
    ]
  },
  {
    "id": 173,
    "kind": "Detective skills",
    "title": "An echo off the wrong wall",
    "level": "Hard",
    "intro": "A sound recordist used two flat warehouse walls to identify her listening position on a straight service lane. She stood between their facing walls and made one short clap.",
    "clues": [
      "The two distinct first-return echoes came 0.20 s and 0.30 s after the clap. For this puzzle sound travels 340 m per second, and each echo went straight to one wall and straight back.",
      "A map gives three possible lanes, measured wall to wall: Fish Lane 68 m, Button Lane 85 m, Cooper Lane 170 m. Ignore any later reflections."
    ],
    "questions": [
      "Which lane did she stand in?",
      "How far was she from the nearer wall, and can you tell its compass direction?"
    ],
    "answer": "Button Lane. The nearer wall was 34 m away. Its compass direction is undetermined.",
    "why": "Halve each round trip. The distances are 340 × 0.20 ÷ 2 = 34 m and 340 × 0.30 ÷ 2 = 51 m. Their sum is 85 m. Neither echo identifies which end of the lane produced it."
  },
  {
    "id": 174,
    "kind": "Whodunit",
    "title": "The missing pier token",
    "level": "Medium",
    "intro": "One of four stewards used their token at a charity tea without signing the book. Each had received a different numbered token. The cashier remembered that the unsigned token was divisible by both three and four.",
    "clues": [
      "Token 18 went to Blue Desk, 20 to Red, 24 to Green and 30 to Gold. Jo and Mae worked Red and Green in some order. Jo staffed the desk with the smaller even number. Lee staffed Blue and Kit staffed Gold."
    ],
    "questions": [
      "Whose signature is missing?",
      "Which token would remain a tempting alternative if you used only divisibility by four?"
    ],
    "answer": "Mae’s signature is missing. Token 20 also divides evenly by four.",
    "why": "Among 18, 20, 24 and 30, only 24 divides by both three and four. That was the Green token. Jo has the smaller of 20 and 24, so Mae has 24."
  },
  {
    "id": 175,
    "kind": "Logic",
    "title": "The boatbuilder's color cards",
    "level": "Medium",
    "intro": "Three apprentices painted three scale models during three shifts. The museum kept the finished models and lost the cards telling who painted which. Use each shift and each model exactly once. Read the positions in this order: Dawn, Noon, Dusk.",
    "clues": [
      "Ivo came somewhere before the yawl entry.",
      "Ivo and the skiff entry were in different positions.",
      "Rina and the skiff entry were next to one another.",
      "Cal occupied one of the two end positions."
    ],
    "tableform": {
      "rows": [
        "Ivo",
        "Rina",
        "Cal"
      ],
      "cols": [
        [
          "Shift",
          "Dawn",
          "Noon",
          "Dusk"
        ],
        [
          "Model",
          "Cutter",
          "Skiff",
          "Yawl"
        ]
      ]
    },
    "answer": "Dawn — Ivo, cutter · Noon — Rina, yawl · Dusk — Cal, skiff.",
    "why": "Ivo cannot have the later yawl or the excluded skiff, so Ivo has the cutter. Test Cal at dawn: Ivo would need noon to precede yawl at dusk, leaving Rina at dusk and skiff at dawn, too far apart. Cal must therefore take dusk. If Ivo were at noon, yawl would be at dusk and Rina at dawn with the skiff, contrary to the adjacency clue. So Ivo has dawn and Rina noon. The skiff goes next to Rina at dusk, leaving Rina the yawl."
  },
  {
    "id": 176,
    "kind": "Crossword",
    "title": "Receipts from the cheesemonger",
    "level": "Medium",
    "intro": "One receipt is genuine. To read its merchant’s seal, reconstruct the vocabulary from the cheese stall.",
    "entries": [
      {
        "x": 5,
        "y": 3,
        "dir": "Across",
        "word": "WEDGE",
        "clue": "Triangular portion cut from a wheel"
      },
      {
        "x": 9,
        "y": 2,
        "dir": "Down",
        "word": "FETA",
        "clue": "Brined Greek cheese"
      },
      {
        "x": 8,
        "y": 5,
        "dir": "Across",
        "word": "VAT",
        "clue": "Large vessel in which the milk is treated"
      },
      {
        "x": 7,
        "y": 0,
        "dir": "Down",
        "word": "RIND",
        "clue": "Outer layer on a wheel"
      },
      {
        "x": 5,
        "y": 3,
        "dir": "Down",
        "word": "WHEY",
        "clue": "Watery liquid separated from curds"
      },
      {
        "x": 3,
        "y": 5,
        "dir": "Across",
        "word": "AGE",
        "clue": "Mature in the cheese cellar"
      },
      {
        "x": 5,
        "y": 0,
        "dir": "Across",
        "word": "CURD",
        "clue": "Solid part formed when milk coagulates"
      },
      {
        "x": 3,
        "y": 3,
        "dir": "Down",
        "word": "EDAM",
        "clue": "Dutch cheese often sold in a red coat"
      },
      {
        "x": 0,
        "y": 3,
        "dir": "Across",
        "word": "BRIE",
        "clue": "Soft French cheese with a white rind and a four-letter name"
      },
      {
        "x": 1,
        "y": 2,
        "dir": "Down",
        "word": "PRESS",
        "clue": "Machine that squeezes curds together"
      }
    ]
  },
  {
    "id": 177,
    "kind": "Word search",
    "title": "Patchwork in the lost property box",
    "level": "Hard",
    "intro": "A quilt square in the lost property box carries ten sewing terms in straight lines. Look in any of eight directions.",
    "grid": [
      "CHFMHULNBOAXG",
      "SEAMQJHDFXLGK",
      "IELBMIHTNVBBG",
      "OCPJLBSYMJANG",
      "PAPPLIQUEASIV",
      "QAYXMKBZIWTBI",
      "DATUGIRDJGIBF",
      "QTICNNDINRNOO",
      "HTXDHCIIPCGBI",
      "GLIEHWTKVPLDK",
      "ENDERTOTCMERR",
      "GQPBAACRKAKRS",
      "UQQBKCNNKMBKL"
    ],
    "locations": {
      "PATCHWORK": [
        [
          0,
          4
        ],
        [
          8,
          12
        ]
      ],
      "APPLIQUE": [
        [
          1,
          4
        ],
        [
          8,
          4
        ]
      ],
      "BASTING": [
        [
          10,
          2
        ],
        [
          10,
          8
        ]
      ],
      "BINDING": [
        [
          6,
          5
        ],
        [
          0,
          11
        ]
      ],
      "THIMBLE": [
        [
          7,
          2
        ],
        [
          1,
          2
        ]
      ],
      "BACKING": [
        [
          10,
          12
        ],
        [
          4,
          6
        ]
      ],
      "BATTING": [
        [
          3,
          12
        ],
        [
          9,
          6
        ]
      ],
      "BOBBIN": [
        [
          11,
          8
        ],
        [
          11,
          3
        ]
      ],
      "RIPPER": [
        [
          6,
          6
        ],
        [
          11,
          11
        ]
      ],
      "SEAM": [
        [
          0,
          1
        ],
        [
          3,
          1
        ]
      ]
    }
  },
  {
    "id": 178,
    "kind": "Codebreaking",
    "title": "The carbon copy’s missing letter",
    "level": "Easy",
    "intro": "A carbon-copy machine dropped exactly one character per line. A clerk arranged the damaged slips to leave a description.",
    "clues": [
      "Compare each original with its copy. Write the one missing character per row, in order.",
      "The result has two words of three letters apiece."
    ],
    "questions": [
      "What was the passenger wearing?"
    ],
    "answer": "A red hat.",
    "why": "CRATE lost R, CREW lost E and DECK lost D. The last three losses, from SHORE, SAIL and STEM, give H, A and T.",
    "tables": [
      [
        "Carbon slips",
        [
          "Original",
          "Copy"
        ],
        [
          [
            "CRATE",
            "CATE"
          ],
          [
            "CREW",
            "CRW"
          ],
          [
            "DECK",
            "ECK"
          ],
          [
            "SHORE",
            "SORE"
          ],
          [
            "SAIL",
            "SIL"
          ],
          [
            "STEM",
            "SEM"
          ]
        ]
      ]
    ]
  },
  {
    "id": 179,
    "kind": "Detective skills",
    "title": "The tablecloth's folded corner",
    "level": "Easy",
    "intro": "A clerk wrote four facts about the captain's table on tracing paper. Later she folded the sheet and rubbed out one directional word. The captain wants the places set correctly.",
    "clues": [
      "Four seats are north, east, south and west. The brass cup is north. The linen napkin lies opposite the cup. The blue bowl is immediately clockwise from the napkin as seen from above. A spoon occupies the last seat.",
      "One object belongs at each seat."
    ],
    "questions": [
      "At which seats do the bowl and spoon belong?",
      "Which seat is immediately counterclockwise from the bowl?"
    ],
    "answer": "The bowl is west and the spoon east. South is immediately counterclockwise from the bowl.",
    "why": "Opposite north is south, so put the napkin there. Clockwise around a compass goes north, east, south, west. One step from south reaches west, leaving east for the spoon."
  },
  {
    "id": 180,
    "kind": "Whodunit",
    "title": "One bell too many",
    "level": "Medium",
    "intro": "The parade marshal asked each crew to practice a different repeated rhythm. One crew accidentally sounded its rhythm just after the silent flag went up. A continuous recording contains four complete groups, with 2, 3, 2 and 3 strokes in chronological order.",
    "clues": [
      "Crews repeated their two-group cycles without interruption. Otter used 2 then 2; Dace used 3 then 1; Swift used 3 then 2; Skate used 1 then 2.",
      "The first recorded group may be either group of the cycle. One crew alone played on the recording."
    ],
    "questions": [
      "Which crew played after the flag?",
      "Why doesn't the first recorded group have to be the first one written on the crew card?"
    ],
    "answer": "Swift played. The recorder started on the second group of Swift’s cycle.",
    "why": "Swift repeats 3, 2, 3, 2 and so on. Begin at a 2 and the recording is 2, 3, 2, 3. Every other cycle contains 1 or never contains 3."
  },
  {
    "id": 181,
    "kind": "Logic",
    "title": "The traveling library crate",
    "level": "Hard",
    "intro": "Four librarians packed four book crates for towns down the coast. Shipping called the crates in a definite sequence; each had its own subject. Use each call and each subject exactly once. Read the positions in this order: First, Second, Third, Fourth.",
    "clues": [
      "Remy came immediately before the poetry entry.",
      "Exactly one position separated the music entry and the essays entry.",
      "The poetry entry came somewhere before Agnes.",
      "Hugh occupied one of the two end positions.",
      "The atlas entry and the essays entry were next to one another.",
      "The music entry did not occupy First."
    ],
    "tableform": {
      "rows": [
        "Agnes",
        "Hugh",
        "Polly",
        "Remy"
      ],
      "cols": [
        [
          "Call",
          "First",
          "Second",
          "Third",
          "Fourth"
        ],
        [
          "Subject",
          "Poetry",
          "Atlas",
          "Music",
          "Essays"
        ]
      ]
    },
    "answer": "First — Hugh, atlas · Second — Remy, essays · Third — Polly, poetry · Fourth — Agnes, music.",
    "why": "List the pairs still allowed by the first clues in the given order. For example, the earlier clues alone allow Remy with music at First. The final clue rules out that arrangement. With all the clues in place, Hugh has atlas there."
  },
  {
    "id": 182,
    "kind": "Crossword",
    "title": "Beneath the ballroom floor",
    "level": "Medium",
    "intro": "A dance card slipped through a floorboard. Reconstruct its printed clues while the caretaker retrieves it.",
    "entries": [
      {
        "x": 4,
        "y": 5,
        "dir": "Across",
        "word": "STEP",
        "clue": "One placement of a dancer’s foot"
      },
      {
        "x": 5,
        "y": 5,
        "dir": "Down",
        "word": "TANGO",
        "clue": "Dance associated with Buenos Aires"
      },
      {
        "x": 6,
        "y": 2,
        "dir": "Down",
        "word": "SHOE",
        "clue": "Footwear that might have a suede dance sole"
      },
      {
        "x": 6,
        "y": 3,
        "dir": "Across",
        "word": "HOLD",
        "clue": "How partners position their hands and arms"
      },
      {
        "x": 2,
        "y": 7,
        "dir": "Across",
        "word": "TURN",
        "clue": "Change of facing around an axis"
      },
      {
        "x": 7,
        "y": 5,
        "dir": "Down",
        "word": "POLKA",
        "clue": "Lively dance with a characteristic hop"
      },
      {
        "x": 7,
        "y": 7,
        "dir": "Across",
        "word": "LEAD",
        "clue": "Role that initiates a partnered figure"
      },
      {
        "x": 9,
        "y": 5,
        "dir": "Down",
        "word": "BEAT",
        "clue": "Pulse the dancers count"
      },
      {
        "x": 8,
        "y": 0,
        "dir": "Down",
        "word": "REEL",
        "clue": "Lively Scottish dance in quick duple time"
      },
      {
        "x": 2,
        "y": 4,
        "dir": "Down",
        "word": "WALTZ",
        "clue": "Ballroom dance in triple time"
      },
      {
        "x": 0,
        "y": 4,
        "dir": "Across",
        "word": "BOW",
        "clue": "Bend at the waist after performing"
      }
    ]
  },
  {
    "id": 183,
    "kind": "Word search",
    "title": "The forgotten fossil tray",
    "level": "Medium",
    "intro": "A cabinet latch fell open and mixed the labels. Find the ten words the curator penciled on the tray. Look in any of eight directions.",
    "grid": [
      "FMDRGNOYKNGC",
      "MAEFSTNIRPMI",
      "PMCTRTDTZODR",
      "PMMAIHRYGDPH",
      "XOOLNBDAITBA",
      "HNLFLUOOTMQD",
      "AIDSDYNLAUVE",
      "NTSYYITTILML",
      "QEQTRQRSHREA",
      "ZHICJIDSAJTH",
      "KKTAXYACYCIS",
      "ANCGOPRESINN"
    ],
    "locations": {
      "TRILOBITE": [
        [
          10,
          9
        ],
        [
          2,
          1
        ]
      ],
      "AMMONITE": [
        [
          1,
          1
        ],
        [
          1,
          8
        ]
      ],
      "CRINOID": [
        [
          3,
          9
        ],
        [
          9,
          3
        ]
      ],
      "IMPRINT": [
        [
          11,
          1
        ],
        [
          5,
          1
        ]
      ],
      "STRATUM": [
        [
          4,
          1
        ],
        [
          10,
          7
        ]
      ],
      "MATRIX": [
        [
          9,
          5
        ],
        [
          4,
          10
        ]
      ],
      "RESIN": [
        [
          6,
          11
        ],
        [
          10,
          11
        ]
      ],
      "SHALE": [
        [
          11,
          10
        ],
        [
          11,
          6
        ]
      ],
      "CAST": [
        [
          9,
          10
        ],
        [
          6,
          7
        ]
      ],
      "MOLD": [
        [
          2,
          3
        ],
        [
          2,
          6
        ]
      ]
    }
  },
  {
    "id": 184,
    "kind": "Codebreaking",
    "title": "Two strips from the adding machine",
    "level": "Hard",
    "intro": "At the purser’s desk, an alphabet adding machine printed a key strip and a total strip. Each column used its own key letter.",
    "clues": [
      "Give A the value 0, B the value 1, continuing to Z = 25. Each total equals the hidden letter plus its key, wrapping back to 0 after 25.",
      "To recover a hidden letter, subtract the key from the total. If the result is below zero, add 26."
    ],
    "questions": [
      "What appointment was hidden in the totals?"
    ],
    "answer": "Meet at noon.",
    "why": "In column one the total F (5) minus key T (19) gives −14; adding 26 gives 12, or M. In column two, M minus I is 4, or E. Subtraction down the remaining columns gives ET AT NOON.",
    "tables": [
      [
        "The aligned strips",
        [
          "Column",
          "Key",
          "Total"
        ],
        [
          [
            "1",
            "T",
            "F"
          ],
          [
            "2",
            "I",
            "M"
          ],
          [
            "3",
            "D",
            "H"
          ],
          [
            "4",
            "E",
            "X"
          ],
          [
            "5",
            "R",
            "R"
          ],
          [
            "6",
            "I",
            "B"
          ],
          [
            "7",
            "N",
            "A"
          ],
          [
            "8",
            "G",
            "U"
          ],
          [
            "9",
            "S",
            "G"
          ],
          [
            "10",
            "X",
            "K"
          ]
        ]
      ]
    ]
  },
  {
    "id": 185,
    "kind": "Detective skills",
    "title": "The photographer's two tides",
    "level": "Hard",
    "intro": "The old survey postcard carries only one readable line: “an hour after low water, two hours before the bell.” Three ports kept bell and low-water times that afternoon.",
    "clues": [
      "Low water / bell: Ash Port 12:20 / 15:20; Gull Port 12:05 / 14:05; Reed Port 13:20 / 17:20. These local times use the same time zone and date.",
      "The writing describes the instant of the photograph. All times and intervals are exact."
    ],
    "questions": [
      "At which port and at what time was the postcard photograph taken?",
      "Which single test eliminates both other ports?"
    ],
    "answer": "Ash Port at 13:20. Look for exactly three hours from low water to the bell.",
    "why": "One hour after low water plus another two before the bell makes a three-hour span. Only Ash has that span; Gull has two and Reed four. An hour after 12:20 is 13:20."
  },
  {
    "id": 186,
    "kind": "Whodunit",
    "title": "A painting signed in the dark",
    "level": "Medium",
    "intro": "A painter left an unsigned watercolor of the west pier at a benefit. The curator knows that its maker rented a booth both Saturday morning and Sunday afternoon. The four painters used one booth each time, registering under their own names.",
    "clues": [
      "Saturday morning: Alma, Birch, Cora. Sunday afternoon: Birch, Cora, Dena. The curator found the painting in the box of the painter who also rented a booth Friday evening.",
      "Friday evening: Alma, Cora, Dena. Each list is complete; ownership of that box is established."
    ],
    "questions": [
      "Who donated the watercolor?",
      "Whose presence on the two weekend lists alone could mislead the curator?"
    ],
    "answer": "Cora donated it. Birch would remain possible from the weekend lists alone.",
    "why": "Saturday and Sunday overlap at Birch and Cora. Only Cora is also on Friday’s list. Alma misses Sunday and Dena misses Saturday."
  },
  {
    "id": 187,
    "kind": "Logic",
    "title": "Tiles beside the compass rose",
    "level": "Hard",
    "intro": "Four mosaic makers signed one tile apiece on a border. Start at the engraved arrow and read clockwise through the four positions once, stopping at the end. Use each position and each motif exactly once. Read the positions in this order: First, Second, Third, Fourth.",
    "clues": [
      "Reed came somewhere between the cloud entry and Mabel.",
      "Reed came immediately before the sun entry.",
      "Mabel came somewhere before Tova.",
      "Tova and Idris were next to one another.",
      "Reed and the wave entry were in different positions.",
      "Tova occupied one of the two end positions."
    ],
    "tableform": {
      "rows": [
        "Tova",
        "Reed",
        "Mabel",
        "Idris"
      ],
      "cols": [
        [
          "Position",
          "First",
          "Second",
          "Third",
          "Fourth"
        ],
        [
          "Motif",
          "Wave",
          "Cloud",
          "Sun",
          "Leaf"
        ]
      ]
    },
    "answer": "First — Mabel, wave · Second — Reed, leaf · Third — Idris, sun · Fourth — Tova, cloud.",
    "why": "Tova takes the last position because Mabel precedes Tova. Idris is beside Tova in third, leaving Mabel and Reed for first and second. Reed needs a position on both sides and so is second. Sun immediately follows in third. Cloud must lie on Reed’s other side from Mabel, putting cloud fourth. Of leaf and wave, Reed cannot have wave, so Mabel has it."
  },
  {
    "id": 188,
    "kind": "Crossword",
    "title": "Envelope from the toy stall",
    "level": "Easy",
    "intro": "A toy seller folded her packing list into a paper boat. The clues inside name things from her stall.",
    "entries": [
      {
        "x": 4,
        "y": 5,
        "dir": "Across",
        "word": "MARBLE",
        "clue": "Small glass sphere flicked toward a target"
      },
      {
        "x": 5,
        "y": 3,
        "dir": "Down",
        "word": "TRAIN",
        "clue": "Toy that travels around a miniature track"
      },
      {
        "x": 7,
        "y": 5,
        "dir": "Down",
        "word": "BLOCK",
        "clue": "One piece of a stacking tower"
      },
      {
        "x": 7,
        "y": 8,
        "dir": "Across",
        "word": "CUBE",
        "clue": "Solid shape of a traditional die"
      },
      {
        "x": 8,
        "y": 2,
        "dir": "Down",
        "word": "DOLL",
        "clue": "Toy figure that might have its own wardrobe"
      },
      {
        "x": 10,
        "y": 6,
        "dir": "Down",
        "word": "SLED",
        "clue": "Toy that glides down a snowy slope"
      },
      {
        "x": 0,
        "y": 3,
        "dir": "Across",
        "word": "PUPPET",
        "clue": "Figure made to move by a hand or strings"
      },
      {
        "x": 3,
        "y": 0,
        "dir": "Down",
        "word": "HOOP",
        "clue": "Ring a child might roll with a stick"
      },
      {
        "x": 1,
        "y": 1,
        "dir": "Down",
        "word": "DRUM",
        "clue": "Toy struck with little sticks"
      },
      {
        "x": 7,
        "y": 3,
        "dir": "Across",
        "word": "BOAT",
        "clue": "Toy craft for a paddling pool"
      },
      {
        "x": 10,
        "y": 1,
        "dir": "Down",
        "word": "KITE",
        "clue": "Toy lifted by wind at the end of a line"
      }
    ]
  },
  {
    "id": 189,
    "kind": "Word search",
    "title": "The long table of breakfast",
    "level": "Easy",
    "intro": "At the harbor breakfast, ten things on the long table are hiding on a paper placemat. Look across to the right, down, or diagonally down.",
    "grid": [
      "ZMIMAJOWBU",
      "NWUDGMYAPT",
      "FCBFENPFOO",
      "STFLFAQFRA",
      "ACEKNITLRS",
      "ZTOCCNNEIT",
      "GRANOLATDI",
      "DKEMEXZGGF",
      "EGRITSTLEC",
      "AYOGURTXZO"
    ],
    "locations": {
      "PORRIDGE": [
        [
          8,
          1
        ],
        [
          8,
          8
        ]
      ],
      "GRANOLA": [
        [
          0,
          6
        ],
        [
          6,
          6
        ]
      ],
      "PANCAKE": [
        [
          6,
          2
        ],
        [
          0,
          8
        ]
      ],
      "MUFFIN": [
        [
          1,
          0
        ],
        [
          6,
          5
        ]
      ],
      "WAFFLE": [
        [
          7,
          0
        ],
        [
          7,
          5
        ]
      ],
      "YOGURT": [
        [
          1,
          9
        ],
        [
          6,
          9
        ]
      ],
      "OMELET": [
        [
          6,
          0
        ],
        [
          1,
          5
        ]
      ],
      "SCONES": [
        [
          0,
          3
        ],
        [
          5,
          8
        ]
      ],
      "TOAST": [
        [
          9,
          1
        ],
        [
          9,
          5
        ]
      ],
      "GRITS": [
        [
          1,
          8
        ],
        [
          5,
          8
        ]
      ]
    }
  },
  {
    "id": 190,
    "kind": "Codebreaking",
    "title": "The three shuttle passes",
    "level": "Easy",
    "intro": "A weaver stitched a message over three passes of a shuttle and pinned the sample to the ferry noticeboard.",
    "clues": [
      "Start at the left end of the top row. Follow the shuttle across, drop down one row and travel back, then drop down and cross again.",
      "The instruction has words of 5, 3 and 4 letters."
    ],
    "questions": [
      "What should the reader watch?"
    ],
    "answer": "Watch the bell.",
    "why": "The shuttle reads WATC from left to right, HTHE on the return trip, then BELL on the final pass.",
    "tables": [
      [
        "Stitches",
        [
          "Pass",
          "Left",
          "Inner left",
          "Inner right",
          "Right"
        ],
        [
          [
            "1",
            "W",
            "A",
            "T",
            "C"
          ],
          [
            "2",
            "E",
            "H",
            "T",
            "H"
          ],
          [
            "3",
            "B",
            "E",
            "L",
            "L"
          ]
        ]
      ]
    ]
  },
  {
    "id": 191,
    "kind": "Detective skills",
    "title": "Every fourth blue bead",
    "level": "Medium",
    "intro": "A strand of signal beads was cut from a much longer repeating string. It contains 15 intact beads. Nobody marked which end originally came first.",
    "clues": [
      "The original four-bead pattern, read forward, repeats red, blue, blue, white. From the first end the conservator inspects, the first three beads are blue, white, red.",
      "The strand has neither missing beads nor substitutions."
    ],
    "questions": [
      "What color is the fifteenth bead from the inspected end?",
      "Was the conservator reading forward or backward through the original pattern?"
    ],
    "answer": "Red, read forward.",
    "why": "Forward from the second blue in a block comes blue, white, red, blue. Backward, no blue is followed by white and then red. Positions 3, 7, 11 and 15 therefore all share the color red."
  },
  {
    "id": 192,
    "kind": "Whodunit",
    "title": "The booth at the ninety-degree turn",
    "level": "Hard",
    "intro": "The map club's booth contest had four identical counters at the corners of a square. A visitor bought the anonymous prize drawing at the first counter after the midpoint of a three-side walk, counting the start as distance zero.",
    "clues": [
      "The visitor began at the southwest corner, walked due north along the first full side, then kept turning right and followed two more complete sides. There was a counter at each corner only.",
      "Counter keepers: northwest — Flora; northeast — Hank; southeast — Mina; southwest — Jed. The prize drawing was the work of the keeper who sold it."
    ],
    "questions": [
      "Who made the prize drawing?",
      "On which side of the square was the visitor halfway through the walk?"
    ],
    "answer": "Hank made it. Halfway through, the visitor was on the north side.",
    "why": "In side-lengths the traveler reaches northwest at 1, northeast at 2 and southeast at 3. Half of 3 is 1.5, midway along the north side. The next encountered counter is northeast."
  },
  {
    "id": 193,
    "kind": "Logic",
    "title": "A toast at four tables",
    "level": "Hard",
    "intro": "The steward presented different souvenir glasses at four dinner tables in order. Four different guests each accepted one. A toast spilled onto the presentation list. Use each table and each glass exactly once. Read the positions in this order: Captain, Pilot, Purser, Engineer.",
    "clues": [
      "The tumbler entry came somewhere between Gray and the coupe entry.",
      "The goblet entry came somewhere before Gray.",
      "Exactly one position separated Gray and the coupe entry.",
      "The flute entry occupied one of the two end positions.",
      "Luz and Gray were next to one another.",
      "Mark did not occupy Pilot."
    ],
    "tableform": {
      "rows": [
        "Luz",
        "Gray",
        "Etta",
        "Mark"
      ],
      "cols": [
        [
          "Table",
          "Captain",
          "Pilot",
          "Purser",
          "Engineer"
        ],
        [
          "Glass",
          "Flute",
          "Goblet",
          "Tumbler",
          "Coupe"
        ]
      ]
    },
    "answer": "Captain — Mark, goblet · Pilot — Etta, coupe · Purser — Luz, tumbler · Engineer — Gray, flute.",
    "why": "Taken together, the first 3 clues put the goblet entry at Captain. For example, the earlier clues alone allow Etta with goblet at Captain. The final clue rules out that arrangement. With all the clues in place, Mark has goblet there."
  },
  {
    "id": 194,
    "kind": "Crossword",
    "title": "The brass bandstand badge",
    "level": "Medium",
    "intro": "An enamel badge from the summer fair carries the brass section’s private crossword on its reverse.",
    "entries": [
      {
        "x": 6,
        "y": 6,
        "dir": "Across",
        "word": "BELL",
        "clue": "Flared end that projects the sound"
      },
      {
        "x": 9,
        "y": 4,
        "dir": "Down",
        "word": "VALVE",
        "clue": "On a trumpet it can redirect air through extra tubing"
      },
      {
        "x": 6,
        "y": 6,
        "dir": "Down",
        "word": "BAND",
        "clue": "Ensemble on the town bandstand"
      },
      {
        "x": 7,
        "y": 2,
        "dir": "Down",
        "word": "SLIDE",
        "clue": "Long movable tubing on a trombone"
      },
      {
        "x": 3,
        "y": 7,
        "dir": "Across",
        "word": "TUBA",
        "clue": "Brass voice below the trombones"
      },
      {
        "x": 4,
        "y": 6,
        "dir": "Down",
        "word": "BUGLE",
        "clue": "Brass call instrument traditionally without valves"
      },
      {
        "x": 3,
        "y": 2,
        "dir": "Across",
        "word": "BRASS",
        "clue": "Metal alloy that names this family of instruments"
      },
      {
        "x": 1,
        "y": 10,
        "dir": "Across",
        "word": "MUTE",
        "clue": "Device fitted to change a brass instrument’s tone"
      },
      {
        "x": 6,
        "y": 9,
        "dir": "Across",
        "word": "DUO",
        "clue": "Two performers playing together"
      },
      {
        "x": 4,
        "y": 0,
        "dir": "Down",
        "word": "HORN",
        "clue": "Coiled brass instrument often played with a hand in its bell"
      },
      {
        "x": 0,
        "y": 0,
        "dir": "Across",
        "word": "MARCH",
        "clue": "Music with a regular walking pulse"
      }
    ]
  },
  {
    "id": 195,
    "kind": "Word search",
    "title": "The cardroom’s alphabet",
    "level": "Hard",
    "intro": "A duplicate-bridge player left ten terms in a note for the evening’s partner. Track all ten down. Look in any of eight directions.",
    "grid": [
      "IPXELBUODZTQZ",
      "BOSRMWUWOVBOQ",
      "NTXTMPCEUUEPJ",
      "DXCBNDALTSQEI",
      "BEOAFTNVSYSNC",
      "YXCURENEKMTIR",
      "DRRLRTNGTMTNS",
      "IYMAAINRLUFGQ",
      "NPBUFRUOPDLEP",
      "NLRVLMELCAWVU",
      "ECXUPJYRVQSEJ",
      "QIKDIGRIMNSSI",
      "XOVERCALLQZBE"
    ],
    "locations": {
      "VULNERABLE": [
        [
          9,
          1
        ],
        [
          0,
          10
        ]
      ],
      "DECLARER": [
        [
          0,
          3
        ],
        [
          7,
          10
        ]
      ],
      "CONTRACT": [
        [
          8,
          9
        ],
        [
          1,
          2
        ]
      ],
      "OVERCALL": [
        [
          1,
          12
        ],
        [
          8,
          12
        ]
      ],
      "OPENING": [
        [
          11,
          1
        ],
        [
          11,
          7
        ]
      ],
      "FINESSE": [
        [
          4,
          8
        ],
        [
          10,
          2
        ]
      ],
      "DOUBLE": [
        [
          8,
          0
        ],
        [
          3,
          0
        ]
      ],
      "DUMMY": [
        [
          9,
          8
        ],
        [
          9,
          4
        ]
      ],
      "TRUMP": [
        [
          8,
          6
        ],
        [
          4,
          10
        ]
      ],
      "PASS": [
        [
          8,
          8
        ],
        [
          11,
          11
        ]
      ]
    }
  },
  {
    "id": 196,
    "kind": "Codebreaking",
    "title": "Short and long punches",
    "level": "Hard",
    "intro": "A strip from the ferry’s tree-label printer has lost the spaces between letters. A short punch is 0 and a long punch is 1.",
    "clues": [
      "The printer never begins one letter with the entire pattern for another. Read from the left and finish a letter as soon as its whole pattern matches.",
      "Every punch belongs to one letter. The result names a tree."
    ],
    "questions": [
      "Which tree label was the printer making?"
    ],
    "answer": "Maple.",
    "why": "Split the strip as 101 | 00 | 110 | 100 | 01. Those patterns stand for M, A, P, L and E, and use the entire strip.",
    "exhibit": "1010011010001",
    "tables": [
      [
        "Printer key",
        [
          "Letter",
          "Punch pattern"
        ],
        [
          [
            "A",
            "00"
          ],
          [
            "E",
            "01"
          ],
          [
            "L",
            "100"
          ],
          [
            "M",
            "101"
          ],
          [
            "P",
            "110"
          ],
          [
            "T",
            "111"
          ]
        ]
      ]
    ]
  },
  {
    "id": 197,
    "kind": "Detective skills",
    "title": "The third page of the auction",
    "level": "Hard",
    "intro": "The auction clerk numbered individual lots consecutively across three sheets. The first sheet had twice as many lots as the third. The middle sheet had three more lots than the third.",
    "clues": [
      "The catalog begins with lot 41 and ends with lot 79, inclusive. There were no gaps and each lot appears on only one sheet."
    ],
    "questions": [
      "Which lot numbers are on the middle sheet?",
      "How many lots are on the third sheet?"
    ],
    "answer": "Lots 59 through 70 are on the middle sheet. There are nine lots on the third.",
    "why": "There are 39 lots in all. Set aside the middle sheet’s three extra lots; 36 remain in four equal groups, two on the first sheet and one on each other sheet. Each group is nine. The sheets hold 18, 12 and 9 lots, beginning with 41–58."
  },
  {
    "id": 198,
    "kind": "Whodunit",
    "title": "The festival ribbon's extra inch",
    "level": "Hard",
    "intro": "Four tailors supplied closed loops of ribbon for the harbor festival. One used the wrong template, leaving a loop with a circumference of 36 inches. Each loop was made by overlapping the ends of a single strip and stitching them together once.",
    "clues": [
      "Work slips show strip length and overlap in inches: Ava 40 and 3; Noel 39 and 3; Sam 40 and 2; Tess 38 and 3. The overlapping ribbon counts only once around the finished loop.",
      "The templates and measurements are exact; there is no stretching or trimming."
    ],
    "questions": [
      "Which tailor used the wrong template?",
      "Whose finished loop was shortest?"
    ],
    "answer": "Noel made the 36-inch loop. Tess made the shortest, 35 inches.",
    "why": "Subtract the overlap once from the strip length. The four loops measure 37, 36, 38 and 35 inches respectively. Subtracting twice would wrongly remove both layers of the joined portion."
  },
  {
    "id": 199,
    "kind": "Crossword",
    "title": "A bill from the letter carver",
    "level": "Medium",
    "intro": "The ferry inn needs a new carved sign. Its maker wrote her estimate in the form of a crossword.",
    "entries": [
      {
        "x": 0,
        "y": 7,
        "dir": "Across",
        "word": "BOWL",
        "clue": "Rounded stroke enclosing the space in a capital P"
      },
      {
        "x": 3,
        "y": 4,
        "dir": "Down",
        "word": "ITALIC",
        "clue": "Style that typically leans to the right"
      },
      {
        "x": 2,
        "y": 4,
        "dir": "Across",
        "word": "LINE",
        "clue": "Row of words on a sign"
      },
      {
        "x": 5,
        "y": 3,
        "dir": "Down",
        "word": "SERIF",
        "clue": "Small finishing stroke on a letter"
      },
      {
        "x": 3,
        "y": 9,
        "dir": "Across",
        "word": "CAP",
        "clue": "Short name for an uppercase letter"
      },
      {
        "x": 5,
        "y": 3,
        "dir": "Across",
        "word": "SANS",
        "clue": "Word before “serif” for lettering without those strokes"
      },
      {
        "x": 0,
        "y": 4,
        "dir": "Down",
        "word": "SLAB",
        "clue": "Kind of serif shaped like a thick rectangular block"
      },
      {
        "x": 8,
        "y": 3,
        "dir": "Down",
        "word": "SPACE",
        "clue": "Blank interval between words"
      },
      {
        "x": 7,
        "y": 0,
        "dir": "Down",
        "word": "KERN",
        "clue": "Adjust the space between a particular pair of letters"
      },
      {
        "x": 5,
        "y": 1,
        "dir": "Across",
        "word": "STEM",
        "clue": "Main upright stroke of a capital H"
      },
      {
        "x": 8,
        "y": 5,
        "dir": "Across",
        "word": "ARC",
        "clue": "Part of a circle, as in a rounded letter"
      }
    ]
  },
  {
    "id": 200,
    "kind": "Word search",
    "title": "Pins from the bicycle rally",
    "level": "Medium",
    "intro": "The rally marshal packed ten cycling words into a square tag for the last rider. Follow them to sign off the route. Look in any of eight directions.",
    "grid": [
      "HNSATWLPHMBX",
      "HELAIJKAAAZG",
      "SMKNARCADQRO",
      "PSPROCKETEOA",
      "OMSIHEONLGPD",
      "KQOAVHAKBVHG",
      "EINSFKMRALTC",
      "YCIRABELDNAH",
      "FWAEEDVOSACT",
      "LXHUNEDKHAWM",
      "BZCEDDULLQYW",
      "EWFCABLEEWGB"
    ],
    "locations": {
      "HANDLEBAR": [
        [
          11,
          7
        ],
        [
          3,
          7
        ]
      ],
      "SPROCKET": [
        [
          1,
          3
        ],
        [
          8,
          3
        ]
      ],
      "SADDLE": [
        [
          3,
          6
        ],
        [
          8,
          11
        ]
      ],
      "FENDER": [
        [
          2,
          11
        ],
        [
          7,
          6
        ]
      ],
      "PEDAL": [
        [
          10,
          4
        ],
        [
          6,
          0
        ]
      ],
      "CHAIN": [
        [
          2,
          10
        ],
        [
          2,
          6
        ]
      ],
      "SPOKE": [
        [
          0,
          2
        ],
        [
          0,
          6
        ]
      ],
      "VALVE": [
        [
          9,
          5
        ],
        [
          5,
          9
        ]
      ],
      "CRANK": [
        [
          6,
          2
        ],
        [
          2,
          2
        ]
      ],
      "CABLE": [
        [
          3,
          11
        ],
        [
          7,
          11
        ]
      ]
    }
  }
];
