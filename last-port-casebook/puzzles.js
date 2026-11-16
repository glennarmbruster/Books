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
  },
  {
    "kind": "Detective skills",
    "title": "A letter with two birthdays",
    "level": "Hard",
    "intro": "The harbor museum bought a love letter dated the first of May. Inside the envelope was a second page giving the lovers a happy ending. The curator asks a narrower question than “Is this forgery?” Which pieces can actually belong to the May mailing?",
    "clues": [
      "The original envelope was sealed on May 1 and opened once, on May 3. The recipient later kept both pages in it.",
      "In this case the mill marks identify the dates the sheets were manufactured. The postal clerk weighed the entire sealed mailing accurately. Nothing besides envelope and paper was mailed."
    ],
    "questions": [
      "Which page was in the May mailing?",
      "What can the exhibits establish about the second page’s author?"
    ],
    "answer": "Only the invitation was mailed. The exhibits cannot identify who wrote the reply.",
    "why": "The envelope leaves 4 g for paper. Either page alone fits that weight, but the reply sheet did not exist until June. The invitation did, so it accounts for the full 4 g. A later genuine reply and a later invention both fit the evidence.",
    "tables": [
      [
        "The three objects",
        [
          "Item",
          "Weight",
          "Mark"
        ],
        [
          [
            "Envelope",
            "3 g",
            "Harbor post"
          ],
          [
            "Invitation",
            "4 g",
            "April mill run"
          ],
          [
            "Reply",
            "4 g",
            "June mill run"
          ]
        ]
      ],
      [
        "Post office receipt",
        [
          "Date",
          "Sealed weight"
        ],
        [
          [
            "May 1",
            "7 g"
          ]
        ]
      ]
    ],
    "id": 201
  },
  {
    "kind": "Whodunit",
    "title": "The man called Captain twice",
    "level": "Hard",
    "intro": "At the inquest into Admiral Venn’s murder, a cabin boy remembers Venn’s last visitor perfectly: “The porter said Captain twice, but he was introducing only one person.” The newspapers immediately name Captain Gale of the packet. Sal asks to see the little green book used at introductions. It contains a rule that nobody at the inquiry had thought worth mentioning.",
    "clues": [
      "The inquiry independently established that Venn was murdered by his last visitor. Exactly one of the four listed guests made that visit. The boy directly heard the entire formal introduction and heard the word Captain exactly twice. He heard no one else speaking.",
      "The porter followed his printed rule word for word, without adding words of his own. The roll gives the names and offices the hotel used that night."
    ],
    "questions": [
      "Who visited Venn?",
      "Write the complete introduction that the boy heard."
    ],
    "answer": "Mira Captain. The porter said “Captain Captain.”",
    "why": "The porter says office then surname. Gale supplies the word once as an office; Pell Captain supplies it once as a surname. Mira alone supplies both. The independent finding about the final visitor makes this identification evidence in the murder, without needing the boy to know any face.",
    "tables": [
      [
        "The green rulebook",
        [
          "Occasion",
          "Words spoken"
        ],
        [
          [
            "Formal visit",
            "Speak the guest’s office, then the guest’s surname; omit first names."
          ]
        ]
      ],
      [
        "The dinner roll",
        [
          "Guest",
          "Office"
        ],
        [
          [
            "Evan Gale",
            "Captain"
          ],
          [
            "Mira Captain",
            "Captain"
          ],
          [
            "Pell Captain",
            "Steward"
          ],
          [
            "Vera Holt",
            "Purser"
          ]
        ]
      ]
    ],
    "id": 202
  },
  {
    "kind": "Logic",
    "title": "The sailmaker’s four-by-four patch",
    "level": "Medium",
    "intro": "The sailmaker laid dark and pale patches on a four-by-four sample. A spilled pot of tea spared only the numbers at the margins. In the selectors enter 1 for a dark patch and 0 for a pale one.",
    "clues": [
      "Numbers beside a line give the lengths of consecutive dark runs, in order. Separate two runs by at least one pale patch. No extra dark patches occur.",
      "Row clues from the top: 1 and 1; 2; 4; 1. Column clues from the left: 1 and 1; 2; 3; 1 and 1."
    ],
    "questions": [
      "Recover the four rows of the sampler."
    ],
    "answer": "Top to bottom: 1001, 0110, 1111, 0010.",
    "why": "Row 3 is entirely dark. The outside columns each need two separated dark patches; the second must be in row 3 and the first in row 1, so row 2 is pale at both ends. Its two dark patches must therefore be in the middle. Row 1 has used its two dark marks; the only way to complete the column of three consecutive marks in column 3 is to put the last row’s single dark patch there.",
    "tableform": {
      "rows": [
        "Top",
        "Second",
        "Third",
        "Bottom"
      ],
      "cols": [
        [
          "Pattern",
          "0000",
          "0001",
          "0010",
          "0011",
          "0100",
          "0101",
          "0110",
          "0111",
          "1000",
          "1001",
          "1010",
          "1011",
          "1100",
          "1101",
          "1110",
          "1111"
        ]
      ]
    },
    "id": 203
  },
  {
    "title": "The postcard with no address",
    "kind": "Crossword",
    "level": "Medium",
    "intro": "A postcard dealer remembers selling her last card to one of three sisters. The little circles on her stock card preserve the buyer’s first name.",
    "entries": [
      {
        "x": 0,
        "y": 4,
        "dir": "Across",
        "word": "VERSE",
        "clue": "Short poem on a souvenir card"
      },
      {
        "x": 4,
        "y": 0,
        "dir": "Down",
        "word": "CORNER",
        "clue": "One of four places a card might be mounted"
      },
      {
        "x": 1,
        "y": 3,
        "dir": "Down",
        "word": "SEPIA",
        "clue": "Brown tone of a vintage print"
      },
      {
        "x": 0,
        "y": 7,
        "dir": "Across",
        "word": "DATE",
        "clue": "Day a postmark records"
      },
      {
        "x": 3,
        "y": 7,
        "dir": "Down",
        "word": "EDGE",
        "clue": "A card with a scalloped one looks wavy"
      },
      {
        "x": 4,
        "y": 5,
        "dir": "Across",
        "word": "RATE",
        "clue": "Cost of mailing one card"
      },
      {
        "x": 1,
        "y": 10,
        "dir": "Across",
        "word": "VIEW",
        "clue": "Picture on the front of a scenic postcard"
      },
      {
        "x": 7,
        "y": 3,
        "dir": "Down",
        "word": "PIER",
        "clue": "Seaside walkway on piles"
      },
      {
        "x": 2,
        "y": 1,
        "dir": "Across",
        "word": "GLOSS",
        "clue": "Shiny finish on a photograph"
      },
      {
        "x": 5,
        "y": 5,
        "dir": "Down",
        "word": "ALBUM",
        "clue": "Book with pockets for a collection"
      },
      {
        "x": 7,
        "y": 4,
        "dir": "Across",
        "word": "INK",
        "clue": "What left the ring in the postmark"
      }
    ],
    "rings": [
      [
        4,
        4
      ],
      [
        1,
        10
      ],
      [
        3,
        10
      ]
    ],
    "questions": [
      "What do the circled letters spell? Read from the top row down, left to right within a row."
    ],
    "answer": "Eve.",
    "why": "The completed grid reads E · V · E in the circled cells (r5c5, r11c2, r11c4).",
    "id": 204
  },
  {
    "title": "Ten witnesses at the penguin pool",
    "kind": "Word search",
    "level": "Easy",
    "intro": "Someone left a sketchbook at the aquarium. Its owner drew ten animals and signed the book in the marked bubbles. What first name did they use? Look across to the right, down, or diagonally down.",
    "grid": [
      "SLIMPETXRD",
      "HEYSWRLUYR",
      "PCAUQDNPKT",
      "RUTHUUECOU",
      "PTFOONITSR",
      "KYHFGRTDHT",
      "AEZUIESDAL",
      "BYIKRNEERE",
      "RNMORAYOKN",
      "JELLYFISHM"
    ],
    "locations": {
      "JELLYFISH": [
        [
          0,
          9
        ],
        [
          8,
          9
        ]
      ],
      "SEAHORSE": [
        [
          0,
          0
        ],
        [
          7,
          7
        ]
      ],
      "PENGUIN": [
        [
          7,
          2
        ],
        [
          1,
          8
        ]
      ],
      "TURTLE": [
        [
          9,
          2
        ],
        [
          9,
          7
        ]
      ],
      "LIMPET": [
        [
          1,
          0
        ],
        [
          6,
          0
        ]
      ],
      "PUFFIN": [
        [
          0,
          2
        ],
        [
          5,
          7
        ]
      ],
      "OTTER": [
        [
          8,
          3
        ],
        [
          4,
          7
        ]
      ],
      "SHARK": [
        [
          8,
          4
        ],
        [
          8,
          8
        ]
      ],
      "MORAY": [
        [
          2,
          8
        ],
        [
          6,
          8
        ]
      ],
      "SQUID": [
        [
          3,
          1
        ],
        [
          7,
          5
        ]
      ]
    },
    "rings": [
      [
        3,
        0
      ],
      [
        4,
        2
      ],
      [
        0,
        3
      ],
      [
        4,
        3
      ],
      [
        6,
        4
      ],
      [
        5,
        5
      ],
      [
        3,
        6
      ],
      [
        4,
        6
      ],
      [
        0,
        7
      ],
      [
        1,
        7
      ],
      [
        6,
        8
      ]
    ],
    "questions": [
      "After finding all ten words, read only the circled letters left unhighlighted, in ordinary reading order. What do they tell you?"
    ],
    "answer": "Ruby.",
    "why": "The listed words account for seven circled letters. The uncovered circles, read left to right from the top row down, spell RUBY.",
    "id": 205
  },
  {
    "title": "The clerk who charged by the letter",
    "level": "Easy",
    "intro": "The pier signwriter economized by using the same brass letter to repair two damaged words on each line of an invoice. The four shared letters name the entrance where payment is due.",
    "clues": [
      "Each pair has one letter missing from each word, in the positions marked. Use the same letter in both gaps of a pair.",
      "Take one repair letter per line, working from top to bottom."
    ],
    "questions": [
      "Which entrance is on the invoice?"
    ],
    "answer": "West.",
    "why": "SWAN and TAWNY share W in their gaps. KEEL and GEM give E, MAST and ISLE give S, and KITE and LOTS give T.",
    "tables": [
      [
        "Invoice",
        [
          "First repair",
          "Second repair"
        ],
        [
          [
            "S_AN · waterbird",
            "TA_NY · sandy brown"
          ],
          [
            "K_EL · part of a hull",
            "G_M · jewel"
          ],
          [
            "MA_T · spar",
            "I_LE · small island"
          ],
          [
            "KI_E · toy flown on a string",
            "LO_S · groups offered at auction"
          ]
        ]
      ]
    ],
    "kind": "Codebreaking",
    "id": 206
  },
  {
    "kind": "Detective skills",
    "title": "The schooner behind the wallpaper",
    "level": "Medium",
    "intro": "A ship painted on the ballroom wall is usually described as a portrait of the schooner Elm. When a corner of the wallpaper comes loose, a tiny painted name emerges beneath it. The curator asks which name could really have been on the artist’s ship.",
    "clues": [
      "The wall painter worked entirely from life during a single visit. The wallpaper was hung October 1, 1892. The paint lay beneath it.",
      "The ship log and the town naming register are complete. Names changed on the dates shown. The painter worked only after the new stone jetty, visible in the picture, opened on June 1, 1892."
    ],
    "questions": [
      "Which vessel name belongs on the label?",
      "Which piece of the dating evidence rules out the most tempting alternative?"
    ],
    "answer": "Linnet. The wallpaper rules out Elm.",
    "why": "The jetty puts the sitting on or after June 1. The wallpaper puts it before October 1. Linnet spans that entire interval. Elm was the same hull’s later name, which explains its appearance in old captions but rules it out as the artist’s original name.",
    "tables": [
      [
        "Three names for hull 42",
        [
          "From",
          "Name"
        ],
        [
          [
            "January 1890",
            "Rose"
          ],
          [
            "March 1892",
            "Linnet"
          ],
          [
            "November 1892",
            "Elm"
          ]
        ]
      ]
    ],
    "id": 207
  },
  {
    "kind": "Whodunit",
    "title": "A seat for the absent tenor",
    "level": "Hard",
    "intro": "When tenor Leo Vale disappeared before a benefit, an unknown singer took his place and donated the fee to the lifeboat fund. Four former understudies decline the applause. The stage manager saved two scraps from rehearsal: a penciled transposition and a wardrobe note. The property mistress swears that the sailor hat on stage belonged to Joel. Sal says all three scraps can be true.",
    "clues": [
      "The stand-in sang in the same key used in that person’s audition and wore that person’s own jacket, adjusted as recorded. Only one of the four understudies sang. The sailor hat was a stage prop any cast member could borrow.",
      "The accompanist’s slip reads “down two semitones from D.” The piano card gives D down one = D-flat, down two = C. The stage jacket needed one sleeve shortened."
    ],
    "questions": [
      "Who sang the benefit?",
      "Which exhibit tempts a wrong identification and why?"
    ],
    "answer": "Neve sang. The sailor hat identifies its owner, not the singer who borrowed it.",
    "why": "C is the required key, leaving Neve and Joel. The shortened sleeve is on Neve’s jacket; Joel’s sleeves needed no work. Pia’s jacket also had sleeve work, but her audition key was D. The hat adds a story, not a constraint.",
    "tables": [
      [
        "Audition ledger",
        [
          "Name",
          "Key"
        ],
        [
          [
            "Neve",
            "C"
          ],
          [
            "Joel",
            "C"
          ],
          [
            "Pia",
            "D"
          ],
          [
            "Arno",
            "D-flat"
          ]
        ]
      ],
      [
        "Wardrobe ledger",
        [
          "Jacket",
          "Alteration"
        ],
        [
          [
            "Neve",
            "One sleeve shortened"
          ],
          [
            "Joel",
            "Buttons replaced"
          ],
          [
            "Pia",
            "One sleeve shortened"
          ],
          [
            "Arno",
            "Hem raised"
          ]
        ]
      ]
    ],
    "id": 208
  },
  {
    "title": "The umbrella that never got wet",
    "kind": "Crossword",
    "level": "Easy",
    "intro": "Three umbrellas waited in the cloakroom during a downpour. The repairer marked the color of the one that stayed behind.",
    "entries": [
      {
        "x": 2,
        "y": 5,
        "dir": "Across",
        "word": "SILK",
        "clue": "Fine fabric of an old parasol"
      },
      {
        "x": 2,
        "y": 5,
        "dir": "Down",
        "word": "STRAP",
        "clue": "Band that keeps a rolled umbrella closed"
      },
      {
        "x": 2,
        "y": 7,
        "dir": "Across",
        "word": "RIB",
        "clue": "One of the spokes under the canopy"
      },
      {
        "x": 0,
        "y": 9,
        "dir": "Across",
        "word": "TIP",
        "clue": "Cap at the very top"
      },
      {
        "x": 5,
        "y": 2,
        "dir": "Down",
        "word": "HOOK",
        "clue": "Curved handle shape"
      },
      {
        "x": 0,
        "y": 5,
        "dir": "Down",
        "word": "SHAFT",
        "clue": "Central rod from tip to handle"
      },
      {
        "x": 4,
        "y": 7,
        "dir": "Down",
        "word": "BEND",
        "clue": "What a strong gust can put in a rib"
      },
      {
        "x": 4,
        "y": 10,
        "dir": "Across",
        "word": "DRY",
        "clue": "How the lining feels under a sound canopy"
      },
      {
        "x": 5,
        "y": 3,
        "dir": "Across",
        "word": "OPEN",
        "clue": "Spread the canopy"
      },
      {
        "x": 8,
        "y": 0,
        "dir": "Down",
        "word": "RAIN",
        "clue": "Weather that opens business for an umbrella seller"
      },
      {
        "x": 7,
        "y": 0,
        "dir": "Across",
        "word": "DRIP",
        "clue": "Fall in little drops"
      }
    ],
    "rings": [
      [
        2,
        6
      ],
      [
        2,
        8
      ],
      [
        4,
        9
      ]
    ],
    "questions": [
      "What do the circled letters spell? Read from the top row down, left to right within a row."
    ],
    "answer": "Tan.",
    "why": "The completed grid reads T · A · N in the circled cells (r7c3, r9c3, r10c5).",
    "id": 209
  },
  {
    "title": "The laundry mark on a linen map",
    "kind": "Word search",
    "level": "Medium",
    "intro": "A parcel arrived at the washhouse with ten laundry words and a secret mark identifying its owner’s cabin. Which tree names the cabin? Look in any of eight directions.",
    "grid": [
      "UJWDDLREAVNQ",
      "RWWYDZUFRRNW",
      "ZUHCRATSUIDF",
      "XDUKPESFSZEX",
      "UQREBTGAPSDO",
      "CAGLPJBNOELY",
      "LSSMIADKIHOW",
      "DNZADNOXCRFN",
      "GPBNWVESLQWW",
      "VPLGFECOPPER",
      "CQYLMOEPKLAA",
      "PREEHWUUKAPX"
    ],
    "locations": {
      "WRINGER": [
        [
          10,
          8
        ],
        [
          4,
          2
        ]
      ],
      "MANGLE": [
        [
          3,
          6
        ],
        [
          3,
          11
        ]
      ],
      "STARCH": [
        [
          7,
          2
        ],
        [
          2,
          2
        ]
      ],
      "COPPER": [
        [
          6,
          9
        ],
        [
          11,
          9
        ]
      ],
      "FOLDED": [
        [
          10,
          7
        ],
        [
          10,
          2
        ]
      ],
      "BASIN": [
        [
          6,
          5
        ],
        [
          10,
          1
        ]
      ],
      "PEGS": [
        [
          4,
          3
        ],
        [
          1,
          6
        ]
      ],
      "LINE": [
        [
          3,
          5
        ],
        [
          6,
          8
        ]
      ],
      "SOAP": [
        [
          7,
          8
        ],
        [
          4,
          5
        ]
      ],
      "LYE": [
        [
          2,
          9
        ],
        [
          2,
          11
        ]
      ]
    },
    "rings": [
      [
        7,
        4
      ],
      [
        10,
        4
      ],
      [
        1,
        5
      ],
      [
        0,
        6
      ],
      [
        1,
        6
      ],
      [
        4,
        6
      ],
      [
        8,
        6
      ],
      [
        4,
        7
      ],
      [
        9,
        7
      ],
      [
        3,
        9
      ],
      [
        6,
        10
      ],
      [
        1,
        11
      ]
    ],
    "questions": [
      "After finding all ten words, read only the circled letters left unhighlighted, in ordinary reading order. What do they tell you?"
    ],
    "answer": "Alder.",
    "why": "The listed words account for seven circled letters. The uncovered circles, read left to right from the top row down, spell ALDER.",
    "id": 210
  },
  {
    "kind": "Detective skills",
    "title": "Snowflakes on the sixpenny telegram",
    "level": "Medium",
    "intro": "In a drawer marked PERSONAL, Sal finds a telegram with three pale squares where words used to be. Two carbon copies overlap the damage. The sender had paid for exactly six words.",
    "clues": [
      "Words must keep their original order. Each visible run on a copy is consecutive. The first and last words on the paid form are visible.",
      "The six words are all different. The missing text is fully covered by the two copies together."
    ],
    "questions": [
      "Reconstruct the six-word telegram.",
      "Which word gives the copies their common hinge?"
    ],
    "answer": "BRING BLUE VASE AFTER TEA TODAY. The hinge is AFTER.",
    "why": "The first copy ends with AFTER and the second begins with it. Sharing that single word gives six different words and puts BRING and TODAY at the two visible ends.",
    "tables": [
      [
        "Three fragments",
        [
          "Sheet",
          "Surviving run"
        ],
        [
          [
            "Paid form",
            "BRING … TODAY"
          ],
          [
            "Top carbon",
            "BRING BLUE VASE AFTER"
          ],
          [
            "Bottom carbon",
            "AFTER TEA TODAY"
          ]
        ]
      ]
    ],
    "id": 211
  },
  {
    "kind": "Logic",
    "title": "Two laps of the regatta course",
    "level": "Hard",
    "intro": "Four model boats raced two separate laps. The results clerk kept the sum of each boat’s two placings, but the page with the individual finishes washed overboard. First is 1 and fourth is 4.",
    "clues": [
      "Each lap used each place exactly once. No boat finished in the same place twice.",
      "Gull and Kite each finished earlier on lap one than on lap two. On lap one Elm finished later than Pip."
    ],
    "questions": [
      "Record both placings for each boat."
    ],
    "answer": "Elm 4 then 1; Gull 1 then 3; Kite 2 then 4; Pip 3 then 2.",
    "why": "Gull’s total of 4 must be 1 then 3, since repeated second places are excluded. Kite’s total of 6 must be 2 then 4. Elm and Pip therefore used third and fourth on lap one. Elm finished later, so Elm was fourth and Pip third. Their totals of 5 finish lap two.",
    "tables": [
      [
        "Clerk’s totals",
        [
          "Boat",
          "Sum of placings"
        ],
        [
          [
            "Elm",
            "5"
          ],
          [
            "Gull",
            "4"
          ],
          [
            "Kite",
            "6"
          ],
          [
            "Pip",
            "5"
          ]
        ]
      ]
    ],
    "tableform": {
      "rows": [
        "Elm",
        "Gull",
        "Kite",
        "Pip"
      ],
      "cols": [
        [
          "Lap one",
          "1",
          "2",
          "3",
          "4"
        ],
        [
          "Lap two",
          "1",
          "2",
          "3",
          "4"
        ]
      ]
    },
    "id": 212
  },
  {
    "kind": "Whodunit",
    "title": "The widow’s chess table",
    "level": "Hard",
    "intro": "Silas Wren’s murder was blamed on the stranger who sat opposite him for the final game at the memorial chess supper. The inquiry has already established that the final opponent was the killer. Trouble is, souvenir photographs show three people across the same table, and nobody put a time on the prints.",
    "clues": [
      "Silas played three complete games against three different guests, one after the other. A fixed blackboard beside the table began blank and recorded one result after each game. It was never erased. Each photograph was taken during the game it shows.",
      "For a game involving a guest whose face cannot be seen, the jacket embroidery is a reliable identification: iris = Nell, rose = Esme, fern = Hal."
    ],
    "questions": [
      "Who played the final game?",
      "What order do the three pictures document?"
    ],
    "answer": "Nell played last. The order was Hal, Esme, Nell.",
    "why": "The blackboard records completed games, excluding the game being played. A blank board is the first game, one result is the second and two results is the third. Fern identifies Hal first, rose Esme second and iris Nell third.",
    "tables": [
      [
        "Three unsigned prints",
        [
          "Photograph",
          "Jacket motif",
          "Completed results on board"
        ],
        [
          [
            "Window seat",
            "Iris",
            "Two"
          ],
          [
            "Cake trolley",
            "Fern",
            "None"
          ],
          [
            "Flower vase",
            "Rose",
            "One"
          ]
        ]
      ]
    ],
    "id": 213
  },
  {
    "title": "Only Mondays got red ink",
    "level": "Medium",
    "intro": "Seven scraps in the archive each name a date in the same month. The postmaster tucked one letter into each and indexed them by weekday, beginning with Monday.",
    "clues": [
      "The first day of the month was Wednesday. Every weekday is represented exactly once.",
      "Read the letters in weekday order. The result names a place on the ferry.",
      "An X always follows the name on this postmaster’s parcel labels."
    ],
    "questions": [
      "Where was the postmaster’s parcel stowed?"
    ],
    "answer": "The galley. The seven letters spell GALLEY followed by X, the parcel mark.",
    "why": "The dates for Monday through Sunday are 13, 7, 15, 2, 24, 11 and 5. They contribute G, A, L, L, E, Y and the X that marks the parcel.",
    "tables": [
      [
        "Scraps from the parcel",
        [
          "Date",
          "Letter"
        ],
        [
          [
            "2",
            "L"
          ],
          [
            "5",
            "X"
          ],
          [
            "7",
            "A"
          ],
          [
            "11",
            "Y"
          ],
          [
            "13",
            "G"
          ],
          [
            "15",
            "L"
          ],
          [
            "24",
            "E"
          ]
        ]
      ]
    ],
    "kind": "Codebreaking",
    "id": 214
  },
  {
    "kind": "Detective skills",
    "title": "A pear in the wrong season",
    "level": "Medium",
    "intro": "The Strand Hotel kept its opening-night menus in four identical frames. A guest insists the framed “first supper” menu must be wrong because it lists pears in February. Sal ignores the fruit and looks at the printer’s decorative corners.",
    "clues": [
      "The hotel opened on February 4. The printer used exactly one corner block at a time and changed it at opening time on the dates in his book. The printer made each menu on the day of the meal.",
      "Preserved fruit was available throughout the year. Each surviving menu is authentic; one is from the opening supper."
    ],
    "questions": [
      "Which framed menu belongs to opening night?",
      "Why is the pear a poor reason to discard it?"
    ],
    "answer": "The shell-cornered Pear Supper. A kitchen could serve preserved pears in winter.",
    "why": "February 4 falls after the switch to shell corners and before the switch to leaves. Only the Pear Supper has that border. A menu can identify a dish without telling us when its ingredients were harvested.",
    "tables": [
      [
        "Block book",
        [
          "Starting",
          "Block"
        ],
        [
          [
            "January 10",
            "Anchor"
          ],
          [
            "February 2",
            "Shell"
          ],
          [
            "February 5",
            "Leaf"
          ],
          [
            "March 1",
            "Star"
          ]
        ]
      ],
      [
        "Menus",
        [
          "Title",
          "Corner"
        ],
        [
          [
            "Winter Punch",
            "Anchor"
          ],
          [
            "Pear Supper",
            "Shell"
          ],
          [
            "Captain’s Table",
            "Leaf"
          ],
          [
            "Harbor Toast",
            "Star"
          ]
        ]
      ]
    ],
    "id": 215
  },
  {
    "title": "The stop after the carousel",
    "kind": "Crossword",
    "level": "Medium",
    "intro": "The fairground inspector tucked the name of her next stop into her crossword. Which sign marked her next stop?",
    "entries": [
      {
        "x": 1,
        "y": 6,
        "dir": "Across",
        "word": "TENT",
        "clue": "Canvas shelter with guy ropes"
      },
      {
        "x": 2,
        "y": 2,
        "dir": "Down",
        "word": "PRIZE",
        "clue": "Reward for knocking over the cans"
      },
      {
        "x": 0,
        "y": 3,
        "dir": "Across",
        "word": "HORSE",
        "clue": "Painted animal often ridden on a carousel"
      },
      {
        "x": 0,
        "y": 0,
        "dir": "Down",
        "word": "LIGHTS",
        "clue": "Strings of these outline the wheel at night"
      },
      {
        "x": 4,
        "y": 0,
        "dir": "Down",
        "word": "RIDE",
        "clue": "Attraction that carries a passenger"
      },
      {
        "x": 3,
        "y": 1,
        "dir": "Across",
        "word": "MIRROR",
        "clue": "A fun-house one stretches a reflection"
      },
      {
        "x": 8,
        "y": 1,
        "dir": "Down",
        "word": "RING",
        "clue": "Brass prize a rider might reach for"
      },
      {
        "x": 6,
        "y": 4,
        "dir": "Across",
        "word": "ORGAN",
        "clue": "Pipe instrument often heard on a carousel"
      },
      {
        "x": 1,
        "y": 6,
        "dir": "Down",
        "word": "TOKEN",
        "clue": "Disc accepted instead of a coin"
      },
      {
        "x": 6,
        "y": 3,
        "dir": "Down",
        "word": "BOOTH",
        "clue": "Small stand for selling tickets"
      },
      {
        "x": 10,
        "y": 1,
        "dir": "Down",
        "word": "SWING",
        "clue": "Hanging seat on a chain ride"
      }
    ],
    "rings": [
      [
        1,
        6
      ],
      [
        2,
        6
      ],
      [
        3,
        6
      ],
      [
        4,
        6
      ]
    ],
    "questions": [
      "What do the circled letters spell? Read from the top row down, left to right within a row."
    ],
    "answer": "Tent.",
    "why": "The completed grid reads T · E · N · T in the circled cells (r7c2, r7c3, r7c4, r7c5).",
    "id": 216
  },
  {
    "title": "The chorus under the roof tiles",
    "kind": "Word search",
    "level": "Hard",
    "intro": "A birdwatcher heard a dawn chorus at the quay. The school club hid the best listening spot among ten bird names. Where should the group meet? Look in any of eight directions.",
    "grid": [
      "RPTENNILVBGGG",
      "EKPDKIGKGERUN",
      "DTRAVOKOPEXUI",
      "SOZASRLVAWRUL",
      "TBWQLDXLIPEHR",
      "AWOAFYTDJXCRA",
      "RVKIGVKTZNETT",
      "TYNCJTHSIZBJS",
      "ECCNLRAFMNYGX",
      "HZEDUGFIPTYWM",
      "SRNSIABSLZRAK",
      "WOHGHJWARBLER",
      "LRNCONVHDPFED"
    ],
    "locations": {
      "GOLDFINCH": [
        [
          8,
          1
        ],
        [
          0,
          9
        ]
      ],
      "CHAFFINCH": [
        [
          3,
          12
        ],
        [
          11,
          4
        ]
      ],
      "STARLING": [
        [
          12,
          7
        ],
        [
          12,
          0
        ]
      ],
      "REDSTART": [
        [
          0,
          0
        ],
        [
          0,
          7
        ]
      ],
      "WAGTAIL": [
        [
          2,
          4
        ],
        [
          8,
          10
        ]
      ],
      "WARBLER": [
        [
          6,
          11
        ],
        [
          12,
          11
        ]
      ],
      "SKYLARK": [
        [
          7,
          7
        ],
        [
          1,
          1
        ]
      ],
      "LINNET": [
        [
          7,
          0
        ],
        [
          2,
          0
        ]
      ],
      "THRUSH": [
        [
          7,
          6
        ],
        [
          2,
          11
        ]
      ],
      "WREN": [
        [
          0,
          11
        ],
        [
          3,
          8
        ]
      ]
    },
    "rings": [
      [
        1,
        2
      ],
      [
        5,
        2
      ],
      [
        12,
        2
      ],
      [
        9,
        3
      ],
      [
        11,
        4
      ],
      [
        8,
        7
      ],
      [
        0,
        8
      ],
      [
        3,
        8
      ],
      [
        6,
        9
      ],
      [
        6,
        11
      ],
      [
        9,
        11
      ],
      [
        1,
        12
      ]
    ],
    "questions": [
      "After finding all ten words, read only the circled letters left unhighlighted, in ordinary reading order. What do they tell you?"
    ],
    "answer": "Tower.",
    "why": "The listed words account for seven circled letters. The uncovered circles, read left to right from the top row down, spell TOWER.",
    "id": 217
  },
  {
    "kind": "Whodunit",
    "title": "A spurious poem for the tide queen",
    "level": "Medium",
    "intro": "At the harbor pageant someone slipped a new last verse into the poetry prize and signed it by its author’s initials. Each of the four finalists uses the same initials, M.B. The typescript keeps one small habit of punctuation. On its own that habit points to two finalists. Then the judges find the rejected drafts.",
    "clues": [
      "The added verse was typed by its author and follows that author’s two habits exactly. Each finalist uses the same dash style and the same closing word in every entry. The last line of the added verse ends with “shore” after a short dash."
    ],
    "questions": [
      "Which finalist wrote the extra verse? Which feature alone would leave another writer in play?"
    ],
    "answer": "Moss Bell. Either feature by itself would leave another writer in play.",
    "why": "The short dash fits Moss and Min. The closing word shore fits Moss and Mai. Only Moss belongs to both groups. The shared initials do nothing to separate them.",
    "tables": [
      [
        "Rejected drafts",
        [
          "Finalist",
          "Dash",
          "Closing word"
        ],
        [
          [
            "Moss Bell",
            "Short",
            "shore"
          ],
          [
            "Min Beck",
            "Short",
            "tide"
          ],
          [
            "Mai Brook",
            "Long",
            "shore"
          ],
          [
            "Mel Burr",
            "Long",
            "tide"
          ]
        ]
      ]
    ],
    "id": 218
  },
  {
    "title": "The ferryman’s four toll flags",
    "level": "Medium",
    "intro": "The model ferry moves exactly four times in the toy regatta. A brass flag rises on each crossing. Afterward the gateskeeper reconstructs the flag order from the four rules.",
    "clues": [
      "The flags are birch, oak, pine and yew, used once each.",
      "Oak is earlier than both birch and pine. Yew is immediately before birch. Pine is not last."
    ],
    "questions": [
      "Which flag rose on each crossing?"
    ],
    "answer": "Oak, pine, yew, birch.",
    "why": "Yew and birch form a pair. It cannot start first because oak must precede birch. If it occupied positions two and three, pine would be last. Therefore yew and birch are third and fourth, leaving oak ahead of pine at the front.",
    "tableform": {
      "rows": [
        "First",
        "Second",
        "Third",
        "Fourth"
      ],
      "cols": [
        [
          "Flag",
          "Birch",
          "Oak",
          "Pine",
          "Yew"
        ]
      ]
    },
    "kind": "Logic",
    "id": 219
  },
  {
    "kind": "Detective skills",
    "title": "A row of white gloves",
    "level": "Hard",
    "intro": "A costume chest contains white gloves in three sizes. A dresser counted all the left gloves and all the right gloves separately. The director wants to know how many matching pairs she can promise the cast.",
    "clues": [
      "Each pair must have one left and one right glove of the same size. Gloves of a given size and hand are otherwise interchangeable."
    ],
    "questions": [
      "What is the largest possible number of complete pairs?",
      "Which two types of glove would you need to buy to use every existing glove?"
    ],
    "answer": "Nine pairs. Add two small right gloves and two large left gloves.",
    "why": "Small supplies only 2 pairs, medium 3 and large 4, totaling 9. That leaves two small left gloves and two large right gloves. Their matching partners make four further pairs.",
    "tables": [
      [
        "Chest tally",
        [
          "Size",
          "Left",
          "Right"
        ],
        [
          [
            "Small",
            "4",
            "2"
          ],
          [
            "Medium",
            "3",
            "3"
          ],
          [
            "Large",
            "4",
            "6"
          ]
        ]
      ]
    ],
    "id": 220
  },
  {
    "title": "The writing on the chocolate mold",
    "kind": "Crossword",
    "level": "Medium",
    "intro": "Only one batch from the pier confectionery carried a secret stamp. Complete the chocolate maker’s grid to recover its flavor.",
    "entries": [
      {
        "x": 2,
        "y": 5,
        "dir": "Across",
        "word": "SHELL",
        "clue": "Thin chocolate casing around a filling"
      },
      {
        "x": 2,
        "y": 2,
        "dir": "Down",
        "word": "NIBS",
        "clue": "Small pieces of roasted cacao beans"
      },
      {
        "x": 4,
        "y": 4,
        "dir": "Down",
        "word": "TEMPER",
        "clue": "Control chocolate’s temperature to give it a snap"
      },
      {
        "x": 6,
        "y": 3,
        "dir": "Down",
        "word": "MOLD",
        "clue": "Form in which a chocolate rabbit sets"
      },
      {
        "x": 6,
        "y": 3,
        "dir": "Across",
        "word": "MINT",
        "clue": "A flavor that leaves a cool sensation"
      },
      {
        "x": 0,
        "y": 3,
        "dir": "Across",
        "word": "FOIL",
        "clue": "Crinkly wrapper on a chocolate coin"
      },
      {
        "x": 3,
        "y": 9,
        "dir": "Across",
        "word": "CREAM",
        "clue": "Dairy ingredient whisked into ganache"
      },
      {
        "x": 8,
        "y": 0,
        "dir": "Down",
        "word": "BEAN",
        "clue": "What the cacao pod holds in rows"
      },
      {
        "x": 6,
        "y": 6,
        "dir": "Across",
        "word": "DARK",
        "clue": "Type of chocolate commonly made without milk solids"
      },
      {
        "x": 5,
        "y": 1,
        "dir": "Across",
        "word": "BITE",
        "clue": "What leaves tooth marks on a sample"
      },
      {
        "x": 8,
        "y": 5,
        "dir": "Down",
        "word": "TRAY",
        "clue": "Flat carrier for a row of truffles"
      }
    ],
    "rings": [
      [
        3,
        3
      ],
      [
        7,
        3
      ],
      [
        4,
        6
      ],
      [
        5,
        9
      ]
    ],
    "questions": [
      "What do the circled letters spell? Read from the top row down, left to right within a row."
    ],
    "answer": "Lime.",
    "why": "The completed grid reads L · I · M · E in the circled cells (r4c4, r4c8, r7c5, r10c6).",
    "id": 221
  },
  {
    "title": "The luggage label from the lift",
    "kind": "Word search",
    "level": "Medium",
    "intro": "The porter noted ten places in the old hotel. Beneath them he hid the color of the suitcase that rode the lift twice. Which suitcase was it? Look in any of eight directions.",
    "grid": [
      "YTLENEGLYSPP",
      "EYRLUYBBOLUP",
      "XIDPANTRYMIJ",
      "EMOORLLABLNV",
      "GEXIAYCCMEIP",
      "ENOGMZEGHBCV",
      "CUIDALNCOIUP",
      "APZDLLTNTDKA",
      "RUUANILTJYFR",
      "RURQKAAEAGCL",
      "EGLWAULKRRSO",
      "TIZJMLGTNYPR"
    ],
    "locations": {
      "BALLROOM": [
        [
          8,
          3
        ],
        [
          1,
          3
        ]
      ],
      "KITCHEN": [
        [
          4,
          9
        ],
        [
          10,
          3
        ]
      ],
      "LANDING": [
        [
          6,
          10
        ],
        [
          0,
          4
        ]
      ],
      "GALLERY": [
        [
          3,
          5
        ],
        [
          9,
          11
        ]
      ],
      "TERRACE": [
        [
          0,
          11
        ],
        [
          0,
          5
        ]
      ],
      "CELLAR": [
        [
          7,
          4
        ],
        [
          2,
          9
        ]
      ],
      "PARLOR": [
        [
          11,
          6
        ],
        [
          11,
          11
        ]
      ],
      "PANTRY": [
        [
          3,
          2
        ],
        [
          8,
          2
        ]
      ],
      "LOBBY": [
        [
          9,
          1
        ],
        [
          5,
          1
        ]
      ],
      "ATTIC": [
        [
          6,
          9
        ],
        [
          10,
          5
        ]
      ]
    },
    "rings": [
      [
        10,
        0
      ],
      [
        3,
        2
      ],
      [
        9,
        3
      ],
      [
        0,
        4
      ],
      [
        11,
        6
      ],
      [
        0,
        7
      ],
      [
        4,
        8
      ],
      [
        6,
        9
      ],
      [
        7,
        9
      ],
      [
        5,
        10
      ],
      [
        4,
        11
      ]
    ],
    "questions": [
      "After finding all ten words, read only the circled letters left unhighlighted, in ordinary reading order. What do they tell you?"
    ],
    "answer": "Plum.",
    "why": "The listed words account for seven circled letters. The uncovered circles, read left to right from the top row down, spell PLUM.",
    "id": 222
  },
  {
    "kind": "Whodunit",
    "title": "The five shillings beneath the urn",
    "level": "Hard",
    "intro": "Someone quietly made good a five-shilling shortage in the rescue fund. The treasurer found five coins of the same denomination under the tea urn. Afterward, four club members emptied their previously sealed change purses for an audit. Exactly one member had opened a purse earlier and taken the five coins from it.",
    "clues": [
      "Each purse was stocked with ten identical shilling coins before the meeting. The donor took five coins from one purse. No other deposits or withdrawals occurred.",
      "The audit clerk did not count coins separately. She weighed each remaining purse, including its empty purse weight. Each shilling in this puzzle weighs 6 g."
    ],
    "questions": [
      "Who paid the shortage?",
      "Which misleading comparison would point to the wrong purse?"
    ],
    "answer": "Dara paid. The lightest gross purse belongs to Orin, who still has all ten coins.",
    "why": "Subtract each empty purse from its gross weight. Orin, Tessa and Mae each have 60 g of coins, or ten. Dara has 30 g, or five. Her purse is heavy enough that its gross weight does not look particularly low.",
    "tables": [
      [
        "Audit card",
        [
          "Member",
          "Purse empty",
          "Purse at audit"
        ],
        [
          [
            "Orin",
            "8 g",
            "68 g"
          ],
          [
            "Dara",
            "42 g",
            "72 g"
          ],
          [
            "Tessa",
            "18 g",
            "78 g"
          ],
          [
            "Mae",
            "24 g",
            "84 g"
          ]
        ]
      ]
    ],
    "id": 223
  },
  {
    "kind": "Detective skills",
    "title": "Where the wax bird landed",
    "level": "Medium",
    "intro": "A paper bird made of four overlapping colored scraps is the prize at the puppet theater. Just before it fell apart, the stage manager drew each of its three overlap seams. The pieces stayed flat, each in a single layer.",
    "clues": [
      "The four scraps were placed one over another, one at a time. At an overlap the visible edge belongs to the later scrap. No scrap was repositioned."
    ],
    "questions": [
      "Reconstruct their order from earliest to latest.",
      "Which scrap could be lifted first without raising an edge of another scrap?"
    ],
    "answer": "Blue, gold, white, red. Red could be lifted first.",
    "why": "Gold covers blue, white covers gold and red covers white. Chaining the three relations fixes all four positions. Red is the only scrap with no later scrap over it at any recorded seam.",
    "tables": [
      [
        "The manager’s three drawings",
        [
          "Overlap",
          "Visible edge"
        ],
        [
          [
            "White meets red",
            "Red"
          ],
          [
            "Blue meets gold",
            "Gold"
          ],
          [
            "Gold meets white",
            "White"
          ]
        ]
      ]
    ],
    "id": 224
  },
  {
    "kind": "Logic",
    "title": "Crates for the three hire boats",
    "level": "Medium",
    "intro": "An old hand at the customs shed remembers filling three hire boats to their exact cargo allowances. Five numbered crates, weighing 2, 3, 4, 6 and 8 stones, made up the cargo.",
    "clues": [
      "Moss carried 6 stones and exactly two crates. Wren carried 8 stones; Fern carried 9.",
      "Each crate traveled on exactly one boat. Crates were sealed and unsplit."
    ],
    "questions": [
      "Which boat carried each crate?"
    ],
    "answer": "Moss carried 2 and 4. Wren carried 8. Fern carried 3 and 6.",
    "why": "Only 2 + 4 fills Moss with two crates. From the remaining 3, 6 and 8, only the 8-stone crate alone can fill Wren. Fern gets 3 and 6.",
    "tableform": {
      "rows": [
        "2 stones",
        "3 stones",
        "4 stones",
        "6 stones",
        "8 stones"
      ],
      "cols": [
        [
          "Boat",
          "Moss",
          "Wren",
          "Fern"
        ]
      ]
    },
    "id": 225
  },
  {
    "title": "A destination in eleven lamps",
    "level": "Hard",
    "intro": "The baggage office once used an eleven-lamp strip, refreshed five times from top to bottom, to display a three-digit bin number. The repair book kept lengths of light and dark runs instead of a picture.",
    "clues": [
      "The first number counts lit lamps (zero is possible), the next counts dark lamps, and so on across the row. Each row totals eleven. Draw the five rows one beneath another.",
      "Each digit is three lamps wide. Columns 4 and 8 are dark dividers."
    ],
    "questions": [
      "Which numbered bin received the sample?"
    ],
    "answer": "Bin 317.",
    "why": "The left block lights its top, middle and bottom bars and the right side, making 3. In the center a mostly vertical stroke with a foot makes 1. At right the top bar leads down into a 7.",
    "tables": [
      [
        "Lamp runs",
        [
          "Row",
          "Successive run lengths"
        ],
        [
          [
            1,
            "3 2 1 2 3"
          ],
          [
            2,
            "0 2 1 1 2 4 1"
          ],
          [
            3,
            "3 2 1 3 1 1"
          ],
          [
            4,
            "0 2 1 2 1 3 1 1"
          ],
          [
            5,
            "3 1 3 2 1 1"
          ]
        ]
      ]
    ],
    "kind": "Codebreaking",
    "id": 226
  },
  {
    "kind": "Detective skills",
    "title": "Five chairs after the overture",
    "level": "Hard",
    "intro": "The ferry quartet occasionally hires a fifth musician. In an unsigned photograph there are five empty chairs, each bearing a different instrument case. The case at the extreme left is open and appears empty. Sal has only the seating rules and the cases’ silhouettes.",
    "clues": [
      "Number seats 1 to 5 from the photographer’s left. All five cases were placed on their owners’ chairs.",
      "The cello was centered. The flute and viola had exactly one chair between them. The violin sat immediately left of the flute. The harp was somewhere to the right of the viola."
    ],
    "questions": [
      "Which instrument belonged in the open case on chair 1?",
      "What is the whole row?"
    ],
    "answer": "Violin. The row is violin, flute, cello, viola, harp.",
    "why": "With cello in 3, the only positions two apart for flute and viola are 2 and 4. If flute were 4, its violin neighbor would have to occupy the cello’s chair. So flute is 2 and violin is 1. Viola is 4 and harp is 5.",
    "id": 227
  },
  {
    "kind": "Whodunit",
    "title": "The detective in the yellow program",
    "level": "Hard",
    "intro": "A touring mystery play ended with a surprise: a local resident had supplied the final clue for the fictional detective. The producer credited the resident by seat number. Rain erased two digits from a three-digit number in the yellow program, leaving only 1 in the hundreds place.",
    "clues": [
      "The theater sold only the four candidate seats below to the four volunteers. One of them was the contributor.",
      "The prompter’s note says the number read the same in both directions. The box office says its three digits added to 6. The cover color indicates the edition of the program, not a seat section."
    ],
    "questions": [
      "Who supplied the clue?",
      "Show why neither surviving clue about the number works alone."
    ],
    "answer": "Ida, in seat 141.",
    "why": "Among the four seats, 141 and 151 are palindromes. Seats 141 and 123 have digits summing to 6. Their intersection is 141. The leading 1 is common to every candidate.",
    "tables": [
      [
        "Four volunteers",
        [
          "Resident",
          "Seat"
        ],
        [
          [
            "Ida",
            "141"
          ],
          [
            "Rafi",
            "151"
          ],
          [
            "Ned",
            "123"
          ],
          [
            "Ona",
            "134"
          ]
        ]
      ]
    ],
    "id": 228
  },
  {
    "title": "A name on the diver’s slate",
    "kind": "Crossword",
    "level": "Medium",
    "intro": "A treasure hunt at the harbor pool ended with one signature on a waterproof slate. Solve the diving club’s crossword to read it.",
    "entries": [
      {
        "x": 4,
        "y": 4,
        "dir": "Across",
        "word": "BUDDY",
        "clue": "Partner on a dive"
      },
      {
        "x": 7,
        "y": 4,
        "dir": "Down",
        "word": "DEPTH",
        "clue": "Vertical distance below the surface"
      },
      {
        "x": 5,
        "y": 2,
        "dir": "Down",
        "word": "GAUGE",
        "clue": "Dial for a pressure reading"
      },
      {
        "x": 1,
        "y": 6,
        "dir": "Across",
        "word": "SLATE",
        "clue": "Rigid reusable writing surface underwater"
      },
      {
        "x": 7,
        "y": 7,
        "dir": "Across",
        "word": "TANK",
        "clue": "Cylinder containing a diver’s breathing gas"
      },
      {
        "x": 8,
        "y": 1,
        "dir": "Down",
        "word": "BUOY",
        "clue": "Floating marker for a dive site"
      },
      {
        "x": 2,
        "y": 0,
        "dir": "Down",
        "word": "SNORKEL",
        "clue": "Tube used to breathe at the surface"
      },
      {
        "x": 10,
        "y": 4,
        "dir": "Down",
        "word": "MASK",
        "clue": "Clear window worn over a diver’s eyes"
      },
      {
        "x": 0,
        "y": 1,
        "dir": "Across",
        "word": "LINE",
        "clue": "Cord leading a diver back to a point"
      },
      {
        "x": 1,
        "y": 6,
        "dir": "Down",
        "word": "SUIT",
        "clue": "A wet one traps a thin layer of water"
      },
      {
        "x": 0,
        "y": 8,
        "dir": "Across",
        "word": "FINS",
        "clue": "Blades on a swimmer’s feet"
      }
    ],
    "rings": [
      [
        1,
        1
      ],
      [
        2,
        1
      ],
      [
        10,
        5
      ]
    ],
    "questions": [
      "What do the circled letters spell? Read from the top row down, left to right within a row."
    ],
    "answer": "Ina.",
    "why": "The completed grid reads I · N · A in the circled cells (r2c2, r2c3, r6c11).",
    "id": 229
  },
  {
    "title": "The vanishing ice cream cart",
    "kind": "Word search",
    "level": "Easy",
    "intro": "A vendor’s flavor board survived a summer shower. Beneath the ten flavors she hid the weekday of her next visit, written as three letters. When is she back? Look across to the right, down, or diagonally down.",
    "grid": [
      "LCVBMPMSCG",
      "EHCVAAAOFP",
      "MEXONNFNIP",
      "ORAGCFASVF",
      "NROBEOTNIG",
      "PYTETANTAL",
      "MPEACHSUSM",
      "NAJHTMUFTL",
      "MKIVANILLA",
      "DOTOFFEEVE"
    ],
    "locations": {
      "PISTACHIO": [
        [
          9,
          1
        ],
        [
          1,
          9
        ]
      ],
      "VANILLA": [
        [
          3,
          8
        ],
        [
          9,
          8
        ]
      ],
      "COCONUT": [
        [
          2,
          1
        ],
        [
          8,
          7
        ]
      ],
      "CHERRY": [
        [
          1,
          0
        ],
        [
          1,
          5
        ]
      ],
      "COFFEE": [
        [
          8,
          0
        ],
        [
          3,
          5
        ]
      ],
      "TOFFEE": [
        [
          2,
          9
        ],
        [
          7,
          9
        ]
      ],
      "BANANA": [
        [
          3,
          0
        ],
        [
          8,
          5
        ]
      ],
      "LEMON": [
        [
          0,
          0
        ],
        [
          0,
          4
        ]
      ],
      "MANGO": [
        [
          6,
          0
        ],
        [
          2,
          4
        ]
      ],
      "PEACH": [
        [
          1,
          6
        ],
        [
          5,
          6
        ]
      ]
    },
    "rings": [
      [
        7,
        0
      ],
      [
        0,
        3
      ],
      [
        2,
        3
      ],
      [
        4,
        3
      ],
      [
        5,
        3
      ],
      [
        1,
        4
      ],
      [
        4,
        4
      ],
      [
        7,
        5
      ],
      [
        2,
        6
      ],
      [
        3,
        9
      ]
    ],
    "questions": [
      "After finding all ten words, read only the circled letters left unhighlighted, in ordinary reading order. What do they tell you?"
    ],
    "answer": "Sat.",
    "why": "The listed words account for seven circled letters. The uncovered circles, read left to right from the top row down, spell SAT.",
    "id": 230
  },
  {
    "kind": "Detective skills",
    "title": "The choirbook census",
    "level": "Hard",
    "intro": "Three choirs shared a rehearsal hall. A reporter added their membership rolls and announced that 40 singers had come. The warden said she had laid out fewer chairs and still had exactly one chair for every singer.",
    "clues": [
      "All listed singers came. The pairwise counts include the singer in all three choirs. Every singer joined at least one choir."
    ],
    "questions": [
      "How many chairs were laid out?",
      "How many people sang in exactly two choirs?"
    ],
    "answer": "Thirty chairs. Eight singers belonged to exactly two choirs.",
    "why": "The rolls total 40. Subtract the three pairwise overlaps, 4 + 3 + 4, then add back the one singer in all three, giving 30 distinct people. Removing the triple singer from each pair leaves 3 + 2 + 3 = 8 exactly-double members.",
    "tables": [
      [
        "Roll call",
        [
          "Choir",
          "Members"
        ],
        [
          [
            "North",
            "15"
          ],
          [
            "South",
            "12"
          ],
          [
            "Isle",
            "13"
          ]
        ]
      ],
      [
        "Marked on both rolls",
        [
          "Pair",
          "Count"
        ],
        [
          [
            "North and South",
            "4"
          ],
          [
            "North and Isle",
            "3"
          ],
          [
            "South and Isle",
            "4"
          ],
          [
            "All three",
            "1"
          ]
        ]
      ]
    ],
    "id": 231
  },
  {
    "kind": "Logic",
    "title": "Two good labels on the paint rack",
    "level": "Hard",
    "intro": "The sign painter found four tins on a shelf and four labels on the floor. Two labels, the apprentice says, really had been under the tins they name. The other two had been switched.",
    "clues": [
      "From left to right the original labels read Ink, Ivory, Gold, Red. Exactly two of those labels matched the actual tins. Each of the four colors appears once.",
      "The actual red tin stood second from the left. The ink tin stood somewhere left of the gold tin."
    ],
    "questions": [
      "Identify the actual tins, from the left."
    ],
    "answer": "Ink, red, gold, ivory.",
    "why": "The red tin in second place makes the Ivory label wrong and also makes the fourth-place Red label wrong. Both other labels must therefore be right, placing ink first and gold third. The remaining ivory tin occupies the fourth place.",
    "tableform": {
      "rows": [
        "First",
        "Second",
        "Third",
        "Fourth"
      ],
      "cols": [
        [
          "Tin",
          "Ink",
          "Ivory",
          "Gold",
          "Red"
        ]
      ]
    },
    "id": 232
  },
  {
    "kind": "Whodunit",
    "title": "The account in the sister’s hand",
    "level": "Hard",
    "intro": "After an antiques dealer was murdered, the inquiry proved that the killer wrote a note admitting the crime and signed it “your older sister.” Two women said the note had been addressed to them; both were telling the truth about finding it in their shared flat, but the envelope was gone. Sal asks the family to draw a tree.",
    "clues": [
      "The signature describes a real relationship to the intended reader. In this family “sister” means another daughter of the same two parents. The note refers to the writer and reader as “the only two children at our father’s first supper after his return.”",
      "The mother’s guest book names the children at that supper. The ages are exact. Only one of the two finders was the intended reader."
    ],
    "questions": [
      "Who wrote the note and who was meant to read it?",
      "Why does the age list alone leave doubt?"
    ],
    "answer": "Ada wrote it to Nell.",
    "why": "The two children present were Ada and Nell. They are sisters, with Ada older. Without the supper book, Nell could have received a note from Ada or Ruth, and Fay could have received one from Marnie. The supper fixes both ends of the relationship.",
    "tables": [
      [
        "Family register",
        [
          "Parents",
          "Daughters, oldest first"
        ],
        [
          [
            "Holt family",
            "Ada 34, Ruth 30, Nell 28"
          ],
          [
            "Vale family",
            "Marnie 36, Fay 29"
          ]
        ]
      ],
      [
        "Two slips",
        [
          "Record",
          "Names"
        ],
        [
          [
            "Founders’ flat: finders",
            "Fay and Nell"
          ],
          [
            "First return supper: children present",
            "Nell and Ada"
          ]
        ]
      ]
    ],
    "id": 233
  },
  {
    "title": "Lost property at the puppet booth",
    "kind": "Crossword",
    "level": "Medium",
    "intro": "A marionette came back from the pier show without its prop. The puppeteer marked the missing item on his prompt sheet.",
    "entries": [
      {
        "x": 3,
        "y": 5,
        "dir": "Across",
        "word": "WING",
        "clue": "Area just out of the audience’s view"
      },
      {
        "x": 5,
        "y": 0,
        "dir": "Down",
        "word": "SCREEN",
        "clue": "A shadow puppet casts its figure on this"
      },
      {
        "x": 6,
        "y": 5,
        "dir": "Down",
        "word": "GLOVE",
        "clue": "Style of puppet worn on a hand"
      },
      {
        "x": 6,
        "y": 6,
        "dir": "Across",
        "word": "LIGHT",
        "clue": "Source behind a shadow puppet"
      },
      {
        "x": 1,
        "y": 3,
        "dir": "Across",
        "word": "VOICE",
        "clue": "What the performer lends the puppet when speaking"
      },
      {
        "x": 3,
        "y": 0,
        "dir": "Across",
        "word": "MASK",
        "clue": "Covering for a performer’s face"
      },
      {
        "x": 3,
        "y": 9,
        "dir": "Across",
        "word": "CANE",
        "clue": "Walking stick for an old puppet character"
      },
      {
        "x": 5,
        "y": 2,
        "dir": "Across",
        "word": "ROD",
        "clue": "Rigid control for a puppet’s hand"
      },
      {
        "x": 4,
        "y": 7,
        "dir": "Down",
        "word": "HEAD",
        "clue": "Part that nods to say yes"
      },
      {
        "x": 0,
        "y": 7,
        "dir": "Across",
        "word": "BOOTH",
        "clue": "Small theater hiding the performers"
      },
      {
        "x": 10,
        "y": 5,
        "dir": "Down",
        "word": "STRING",
        "clue": "What suspends a marionette"
      }
    ],
    "rings": [
      [
        3,
        9
      ],
      [
        4,
        9
      ],
      [
        5,
        9
      ],
      [
        6,
        9
      ]
    ],
    "questions": [
      "What do the circled letters spell? Read from the top row down, left to right within a row."
    ],
    "answer": "Cane.",
    "why": "The completed grid reads C · A · N · E in the circled cells (r10c4, r10c5, r10c6, r10c7).",
    "id": 234
  },
  {
    "title": "The clockwork aviary",
    "kind": "Word search",
    "level": "Hard",
    "intro": "A collector inventoried the moving parts in a mechanical bird. His bird’s nickname is still hiding among them. What did he call it? Look in any of eight directions.",
    "grid": [
      "LCOSPLVYTJKGD",
      "BGTPQICZLEKTT",
      "ZNLIZNNQJSVEK",
      "YIHNWKXIECHIO",
      "QRXDOLQKOCPUR",
      "GPALZBBZTNEMJ",
      "WSAEMTFAHSMAC",
      "STGJMQRLWAPJZ",
      "MMBFADPLHHPTI",
      "COGWHEELYIJWO",
      "CGWCMVWCBOJWW",
      "OKTEEALAXLEBG",
      "REIRLPMYGAVXP"
    ],
    "locations": {
      "CAMSHAFT": [
        [
          12,
          6
        ],
        [
          5,
          6
        ]
      ],
      "COGWHEEL": [
        [
          0,
          9
        ],
        [
          7,
          9
        ]
      ],
      "RATCHET": [
        [
          6,
          7
        ],
        [
          12,
          1
        ]
      ],
      "SPINDLE": [
        [
          3,
          0
        ],
        [
          3,
          6
        ]
      ],
      "PINION": [
        [
          4,
          0
        ],
        [
          9,
          5
        ]
      ],
      "SPRING": [
        [
          1,
          6
        ],
        [
          1,
          1
        ]
      ],
      "LEVER": [
        [
          7,
          8
        ],
        [
          3,
          12
        ]
      ],
      "RIVET": [
        [
          12,
          4
        ],
        [
          8,
          0
        ]
      ],
      "PAWL": [
        [
          10,
          7
        ],
        [
          7,
          7
        ]
      ],
      "AXLE": [
        [
          7,
          11
        ],
        [
          10,
          11
        ]
      ]
    },
    "rings": [
      [
        3,
        0
      ],
      [
        3,
        4
      ],
      [
        3,
        5
      ],
      [
        5,
        6
      ],
      [
        7,
        6
      ],
      [
        6,
        8
      ],
      [
        9,
        9
      ],
      [
        4,
        11
      ],
      [
        9,
        11
      ],
      [
        12,
        12
      ]
    ],
    "questions": [
      "After finding all ten words, read only the circled letters left unhighlighted, in ordinary reading order. What do they tell you?"
    ],
    "answer": "Pip.",
    "why": "The listed words account for seven circled letters. The uncovered circles, read left to right from the top row down, spell PIP.",
    "id": 235
  },
  {
    "kind": "Detective skills",
    "title": "The porter’s two pencils",
    "level": "Hard",
    "intro": "A freight ledger has a correct set of row and column totals, but one interior figure was rubbed out and replaced by a wrong number. The porter insists he can put it right without opening any crates.",
    "clues": [
      "Exactly one printed interior count is wrong. All totals in the final column and bottom row are correct."
    ],
    "questions": [
      "Name the incorrect cargo count and recover the original.",
      "Why can you exclude the other two entries on the same landing?"
    ],
    "answer": "The east landing had 9 parcels of linen, not 6.",
    "why": "East currently sums to 17 instead of 20, short by 3. Linen sums to 14 rather than 17, also short by 3. The sole faulty entry must be in both the faulty row and faulty column. The lamp and book column totals already balance.",
    "tables": [
      [
        "Cargo ledger",
        [
          "Landing",
          "Lamps",
          "Linen",
          "Books",
          "Total"
        ],
        [
          [
            "North",
            "5",
            "3",
            "8",
            "16"
          ],
          [
            "East",
            "7",
            "6",
            "4",
            "20"
          ],
          [
            "West",
            "2",
            "5",
            "6",
            "13"
          ],
          [
            "Total",
            "14",
            "17",
            "18",
            "49"
          ]
        ]
      ]
    ],
    "id": 236
  },
  {
    "title": "A flock that flies across the space",
    "level": "Medium",
    "intro": "The typesetter hid four birds in the ferry circular. Each bird begins in the tail of one word and ends in the head of the next. One pictured bird in the margin never made it into the type.",
    "clues": [
      "Ignore the space inside each printed pair. The hiding place must include letters from both words.",
      "The margin pictures a tern, a crow, a wren, a gull and a lark. Each hidden name appears once across a join; one is unused."
    ],
    "questions": [
      "Which pictured bird was left out?"
    ],
    "answer": "The gull.",
    "why": "The joins conceal TERN in afTER Noon, CROW in paniC ROWboat, WREN in feW RENtals and LARK in schooL ARK. GULL appears at no join.",
    "tables": [
      [
        "Type samples",
        [
          "Left word",
          "Right word"
        ],
        [
          [
            "after",
            "noon"
          ],
          [
            "panic",
            "rowboat"
          ],
          [
            "few",
            "rentals"
          ],
          [
            "school",
            "ark"
          ]
        ]
      ]
    ],
    "kind": "Codebreaking",
    "id": 237
  },
  {
    "kind": "Whodunit",
    "title": "A trophy in the negatives",
    "level": "Medium",
    "intro": "The wrong apprentice was credited for a painted trophy. Four apprentices painted one trophy each. A glass negative made all the white paint look dark and all dark paint look white. The gallery labeled the photograph as though it were already a positive.",
    "clues": [
      "The negative reverses light and dark in this photograph but preserves the shapes and their positions. No one added color after the photograph was made.",
      "On the negative the trophy has a dark diamond above a white band. Four finished designs were registered."
    ],
    "questions": [
      "Who painted the photographed trophy? Which apprentice would the gallery label wrongly credit?"
    ],
    "answer": "Pru painted it; the mistaken label would credit Don.",
    "why": "Return each tone to its positive value without moving the shapes. The design becomes a white diamond above a dark band, Pru’s design. Reading dark diamond and white band literally would point to Don.",
    "tables": [
      [
        "Studio register",
        [
          "Artist",
          "Upper design",
          "Band"
        ],
        [
          [
            "Pru",
            "White diamond",
            "Dark"
          ],
          [
            "Don",
            "Dark diamond",
            "White"
          ],
          [
            "Gus",
            "White circle",
            "Dark"
          ],
          [
            "Ena",
            "Dark diamond",
            "Dark"
          ]
        ]
      ]
    ],
    "id": 238
  },
  {
    "title": "The label that tells on itself",
    "level": "Hard",
    "intro": "The seamstress put a silver thimble in one of four drawers, marked A through D. She then wrote one assertion on each drawer. Exactly two assertions are true.",
    "clues": [
      "A says “The thimble is in B or D.” B says “It is not in A.”",
      "C says “It is in A.” D says “It is in B.”"
    ],
    "questions": [
      "Which drawer holds the thimble, and which labels tell the truth?"
    ],
    "answer": "Drawer D holds the thimble. Labels A and B tell the truth.",
    "why": "Trying A makes only C true. Trying B makes A, B and D true; trying C makes only B true. A thimble in D satisfies exactly A and B.",
    "kind": "Logic",
    "id": 239
  },
  {
    "title": "A return ticket for a photograph",
    "level": "Hard",
    "intro": "A museum acquired two prints showing the very same ferry and tower. One is a straightforward enlargement of the whole negative; the other is an enlargement of a cropped rectangle of that negative. A restorer must find the crop without relying on the objects’ apparent sizes.",
    "clues": [
      "Both enlargements preserve proportions; neither shifts the picture sideways after printing. The full negative measured 60 by 40 mm and the tower was 18 mm from its left edge.",
      "Each finished print is 30 cm wide. The crop removed 10 mm from each side and nothing else from the width. Measurements below run from the left image edge to the tower."
    ],
    "questions": [
      "Which print was cropped? How wide, on the full-negative print, is an object that spans 6 cm on the cropped one?"
    ],
    "answer": "B was cropped; the same object spans 4 cm on A.",
    "why": "In the whole negative the tower sits 18/60 of the way across: 9 cm on A. On the crop it is (18−10)/40 of the way across: 6 cm on B. Equal print widths enlarge the crop by 60/40 as much, so 6 cm there becomes 4 cm on A.",
    "tables": [
      [
        "Restorer’s notes",
        [
          "Print",
          "Tower position",
          "Frame color"
        ],
        [
          [
            "A",
            "9 cm",
            "Black"
          ],
          [
            "B",
            "6 cm",
            "Cream"
          ]
        ]
      ]
    ],
    "kind": "Detective skills",
    "id": 240
  },
  {
    "title": "The ticket in the mineral bath",
    "kind": "Crossword",
    "level": "Easy",
    "intro": "A guest left her locker ticket at the spa. The attendant used this crossword to make a note of the locker’s emblem.",
    "entries": [
      {
        "x": 5,
        "y": 4,
        "dir": "Across",
        "word": "SPRING",
        "clue": "Natural source that can feed a mineral bath"
      },
      {
        "x": 6,
        "y": 1,
        "dir": "Down",
        "word": "SOAP",
        "clue": "What the guest uses to make a lather"
      },
      {
        "x": 9,
        "y": 0,
        "dir": "Down",
        "word": "DRAIN",
        "clue": "Outlet at the low end of the floor"
      },
      {
        "x": 5,
        "y": 4,
        "dir": "Down",
        "word": "SALT",
        "clue": "Mineral crystals dissolved for a soak"
      },
      {
        "x": 2,
        "y": 7,
        "dir": "Across",
        "word": "HEAT",
        "clue": "What the furnace supplies"
      },
      {
        "x": 4,
        "y": 2,
        "dir": "Across",
        "word": "POOL",
        "clue": "Basin large enough to bathe in"
      },
      {
        "x": 4,
        "y": 0,
        "dir": "Down",
        "word": "TAP",
        "clue": "Fitting turned to fill a bath"
      },
      {
        "x": 7,
        "y": 4,
        "dir": "Down",
        "word": "ROBE",
        "clue": "Belted garment for the walk to the pool"
      },
      {
        "x": 3,
        "y": 4,
        "dir": "Down",
        "word": "TOWEL",
        "clue": "Absorbent linen waiting beside the bath"
      },
      {
        "x": 0,
        "y": 4,
        "dir": "Across",
        "word": "MINT",
        "clue": "Plant with cool-scented leaves in the rinse"
      },
      {
        "x": 1,
        "y": 3,
        "dir": "Down",
        "word": "TILE",
        "clue": "One small piece of a mosaic floor"
      }
    ],
    "rings": [
      [
        6,
        1
      ],
      [
        1,
        3
      ],
      [
        6,
        3
      ],
      [
        7,
        4
      ]
    ],
    "questions": [
      "What do the circled letters spell? Read from the top row down, left to right within a row."
    ],
    "answer": "Star.",
    "why": "The completed grid reads S · T · A · R in the circled cells (r2c7, r4c2, r4c7, r5c8).",
    "id": 241
  },
  {
    "title": "The beach with two sunsets",
    "kind": "Word search",
    "level": "Medium",
    "intro": "A painter copied ten landscape features into her journal. Her postcard names the direction she faced for her second sunset, a reflection in the harbor windows. Which direction? Look in any of eight directions.",
    "grid": [
      "EYVXRTQIQQPV",
      "MTHGQEBYJOXF",
      "LQEDELTAEPGH",
      "ADELESABDYEF",
      "GWZNNISUGACY",
      "OAUOPIYVDPBW",
      "ODSSIRHLCQXC",
      "NRFHAFACEOOF",
      "KPLUONAFXVYT",
      "WMTJDASBEWQH",
      "USSRQZLQUQCP",
      "EVPNSFFULBYH"
    ],
    "locations": {
      "HEADLAND": [
        [
          11,
          2
        ],
        [
          4,
          9
        ]
      ],
      "ESTUARY": [
        [
          0,
          11
        ],
        [
          6,
          5
        ]
      ],
      "LAGOON": [
        [
          0,
          2
        ],
        [
          0,
          7
        ]
      ],
      "INLET": [
        [
          5,
          5
        ],
        [
          1,
          1
        ]
      ],
      "DELTA": [
        [
          3,
          2
        ],
        [
          7,
          2
        ]
      ],
      "SHOAL": [
        [
          2,
          6
        ],
        [
          6,
          10
        ]
      ],
      "ISLET": [
        [
          5,
          4
        ],
        [
          5,
          0
        ]
      ],
      "BLUFF": [
        [
          9,
          11
        ],
        [
          5,
          11
        ]
      ],
      "COVE": [
        [
          11,
          6
        ],
        [
          8,
          9
        ]
      ],
      "DUNE": [
        [
          1,
          6
        ],
        [
          4,
          3
        ]
      ]
    },
    "rings": [
      [
        0,
        0
      ],
      [
        1,
        1
      ],
      [
        3,
        2
      ],
      [
        3,
        3
      ],
      [
        6,
        3
      ],
      [
        10,
        3
      ],
      [
        6,
        4
      ],
      [
        2,
        5
      ],
      [
        5,
        8
      ],
      [
        11,
        8
      ],
      [
        5,
        11
      ]
    ],
    "questions": [
      "After finding all ten words, read only the circled letters left unhighlighted, in ordinary reading order. What do they tell you?"
    ],
    "answer": "East.",
    "why": "The listed words account for seven circled letters. The uncovered circles, read left to right from the top row down, spell EAST.",
    "id": 242
  },
  {
    "kind": "Whodunit",
    "title": "Rumor at the mackerel supper",
    "level": "Hard",
    "intro": "Someone announced, quite wrongly, that the guest speaker had arrived. Four diners repeated the news before the steward came in. Each diner now recalls whom they heard it from. The first person to say it is the only diner who claims to have heard no other diner say it first.",
    "clues": [
      "These are the only four diners. Each statement in the chain refers to the first time that particular diner said the words. A speaker can pass the news on to more than one person.",
      "Only the originator made a claim of firsthand sight. All reported handoffs are accurate. The speaker’s actual arrival came later."
    ],
    "questions": [
      "Who started the rumor? Must Rhea have spoken before Kit?"
    ],
    "answer": "Tobin started it. The evidence cannot order Rhea and Kit relative to one another.",
    "why": "Rhea and Kit both heard the news from Tobin. Paz heard it from Kit. Thus Tobin precedes all three, and Kit precedes Paz. Rhea could speak before or after Kit without changing any handoff.",
    "tables": [
      [
        "Overheard remarks",
        [
          "Diner",
          "First source"
        ],
        [
          [
            "Paz",
            "From Kit, by the window"
          ],
          [
            "Rhea",
            "From Tobin, at the breadboard"
          ],
          [
            "Kit",
            "From Tobin, near the tea"
          ],
          [
            "Tobin",
            "“I saw our speaker myself.”"
          ]
        ]
      ]
    ],
    "id": 243
  },
  {
    "kind": "Detective skills",
    "title": "The clock tower’s borrowed Saturday",
    "level": "Medium",
    "intro": "A diary leaf claims, “Yesterday the steamer left on the first Thursday of the month. Today the clock tower wore a Saturday banner.” The museum wonders if somebody has mixed leaves from two years.",
    "clues": [
      "In the month in question the 1st was a Sunday. The steamer did leave on the first Thursday. The tower banner was an advertisement for Saturday’s performance and could be hung earlier."
    ],
    "questions": [
      "What date is “today”?",
      "Does the Saturday banner force a second date or a second diary leaf?"
    ],
    "answer": "Friday the 6th. No second leaf is required.",
    "why": "With Sunday the 1st, Thursday is the 5th. The day after it is Friday the 6th. The banner describes a performance day and supplies no observation about the day it was hung.",
    "id": 244
  },
  {
    "title": "Three copies of the same shout",
    "level": "Medium",
    "intro": "Three runners copied a six-letter boat name through the rain. In each position a majority of the surviving copies gives the original letter, with one exception: the split position needs the register.",
    "clues": [
      "A dash is missing ink. At a position with two different surviving letters, either is possible until you consult the register.",
      "The register lists exactly two names starting MAR: MARLIN and MARBLE."
    ],
    "questions": [
      "What is the name, and which column needs the register to settle it?"
    ],
    "answer": "Marlin. Column five needs the register.",
    "why": "Columns one through four give MARL; the sixth gives N. Column five offers I or E. MARL_N matches only MARLIN in the register, which supplies I.",
    "tables": [
      [
        "Runner copies",
        [
          "Runner",
          "Letter positions 1–6"
        ],
        [
          [
            "Kit",
            "MARLIQ"
          ],
          [
            "Sal",
            "MARLEN"
          ],
          [
            "Jo",
            "NARL–N"
          ]
        ]
      ]
    ],
    "kind": "Codebreaking",
    "id": 245
  },
  {
    "kind": "Logic",
    "title": "The skyline in the fish market",
    "level": "Hard",
    "intro": "The fish market’s little model town has a square of nine towers. In every row and column the heights 1, 2 and 3 each occur once. The fishmonger has lost the plan, but three views remain.",
    "clues": [
      "A nearer tower hides every shorter tower directly behind it. A taller tower behind a shorter one is visible above it.",
      "From the west end of the north row you see two towers. From the east end of the south row you see two. From the north end of the middle column you see three."
    ],
    "questions": [
      "Fill each row from west to east."
    ],
    "answer": "North 2–1–3, middle 3–2–1, south 1–3–2.",
    "why": "Seeing three from the north fixes the middle column at 1, 2, 3. North is either 2–1–3 (two visible from west) or 3–1–2 (one). South has 3 in the middle; the west column already contains 2 in the north, so south must start with 1 and end with 2. The middle row takes the missing heights in each column.",
    "tableform": {
      "rows": [
        "North row",
        "Middle row",
        "South row"
      ],
      "cols": [
        [
          "West",
          "1",
          "2",
          "3"
        ],
        [
          "Middle",
          "1",
          "2",
          "3"
        ],
        [
          "East",
          "1",
          "2",
          "3"
        ]
      ]
    },
    "id": 246
  },
  {
    "title": "The derby with the paper sails",
    "kind": "Crossword",
    "level": "Medium",
    "intro": "The children launched model boats from three slips. The winning slip’s name is hidden in the yacht club’s crossword.",
    "entries": [
      {
        "x": 5,
        "y": 3,
        "dir": "Across",
        "word": "HULL",
        "clue": "Body of a boat"
      },
      {
        "x": 6,
        "y": 2,
        "dir": "Down",
        "word": "RUDDER",
        "clue": "Pivoting blade used for steering"
      },
      {
        "x": 3,
        "y": 6,
        "dir": "Across",
        "word": "LINE",
        "clue": "Cord for trimming a sail"
      },
      {
        "x": 3,
        "y": 3,
        "dir": "Down",
        "word": "HEEL",
        "clue": "Lean sideways under sail"
      },
      {
        "x": 8,
        "y": 0,
        "dir": "Down",
        "word": "SAIL",
        "clue": "Cloth that catches the wind"
      },
      {
        "x": 0,
        "y": 5,
        "dir": "Across",
        "word": "WAKE",
        "clue": "Trail behind the winning hull"
      },
      {
        "x": 7,
        "y": 1,
        "dir": "Across",
        "word": "TACK",
        "clue": "Turn a sailing boat through the wind"
      },
      {
        "x": 10,
        "y": 1,
        "dir": "Down",
        "word": "KEEL",
        "clue": "Weighted fin below a model hull"
      },
      {
        "x": 1,
        "y": 1,
        "dir": "Down",
        "word": "PENNANT",
        "clue": "Tapering flag at a masthead"
      },
      {
        "x": 1,
        "y": 1,
        "dir": "Across",
        "word": "POND",
        "clue": "Water small enough for a model regatta"
      }
    ],
    "rings": [
      [
        1,
        1
      ],
      [
        4,
        6
      ],
      [
        5,
        6
      ],
      [
        6,
        6
      ]
    ],
    "questions": [
      "What do the circled letters spell? Read from the top row down, left to right within a row."
    ],
    "answer": "Pine.",
    "why": "The completed grid reads P · I · N · E in the circled cells (r2c2, r7c5, r7c6, r7c7).",
    "id": 247
  },
  {
    "title": "The box from the dried flower stall",
    "kind": "Word search",
    "level": "Medium",
    "intro": "A florist pressed ten plants for her window display. Their marked squares conceal the fabric wrapped around the missing bouquet. What fabric? Look in any of eight directions.",
    "grid": [
      "DZTWVMSGGAYE",
      "TLIDIJYGLNDC",
      "HHOADPLEYGYI",
      "IAZGPITAZPZT",
      "SOWOIHRUCPFA",
      "TPPETREEHEHT",
      "LAUIOWAATICS",
      "ENTWQMMMTSMB",
      "NREDNEVALHAZ",
      "HONESTYZREET",
      "MCQTUVINEQIR",
      "GXHKJVYSIADS"
    ],
    "locations": {
      "LAVENDER": [
        [
          8,
          8
        ],
        [
          1,
          8
        ]
      ],
      "MARIGOLD": [
        [
          7,
          7
        ],
        [
          0,
          0
        ]
      ],
      "STATICE": [
        [
          11,
          6
        ],
        [
          11,
          0
        ]
      ],
      "HEATHER": [
        [
          5,
          4
        ],
        [
          11,
          10
        ]
      ],
      "THISTLE": [
        [
          0,
          1
        ],
        [
          0,
          7
        ]
      ],
      "HONESTY": [
        [
          0,
          9
        ],
        [
          6,
          9
        ]
      ],
      "YARROW": [
        [
          8,
          2
        ],
        [
          3,
          7
        ]
      ],
      "POPPY": [
        [
          2,
          5
        ],
        [
          6,
          1
        ]
      ],
      "DAISY": [
        [
          10,
          11
        ],
        [
          6,
          11
        ]
      ],
      "ASTER": [
        [
          10,
          8
        ],
        [
          6,
          4
        ]
      ]
    },
    "rings": [
      [
        6,
        0
      ],
      [
        11,
        1
      ],
      [
        2,
        2
      ],
      [
        1,
        3
      ],
      [
        6,
        3
      ],
      [
        3,
        6
      ],
      [
        7,
        6
      ],
      [
        3,
        7
      ],
      [
        0,
        8
      ],
      [
        9,
        8
      ],
      [
        11,
        10
      ],
      [
        10,
        11
      ]
    ],
    "questions": [
      "After finding all ten words, read only the circled letters left unhighlighted, in ordinary reading order. What do they tell you?"
    ],
    "answer": "Satin.",
    "why": "The listed words account for seven circled letters. The uncovered circles, read left to right from the top row down, spell SATIN.",
    "id": 248
  },
  {
    "kind": "Whodunit",
    "title": "The ruby in the raffle drum",
    "level": "Hard",
    "intro": "The Ruby Theater awards its anniversary pass to a ticket drawn from a drum. At closing the clerk admits she read the winning ticket upside down, then copied what she saw correctly. Luckily, the old tickets were printed in a special display face with six symbols that can survive a half turn.",
    "clues": [
      "In this display face a half turn swaps 6 and 9. It leaves 0, 1 and 8 unchanged. Turning the entire ticket also reverses the order of the digits.",
      "The clerk copied 1986. The four coupons bear the numbers shown. There were no other possible winners."
    ],
    "questions": [
      "Who actually won? Which tempting answer changes the shapes without reversing their order?"
    ],
    "answer": "Jules, with 9861. Changing shapes in place would incorrectly suggest Ora’s 1689.",
    "why": "Reverse the copied order to 6891 and rotate each digit’s shape to get 9861. Repeating the procedure on 9861 gives back 1986. Ora’s coupon changes 9 to 6 and 6 to 9 in the original positions only.",
    "tables": [
      [
        "Claim coupons",
        [
          "Owner",
          "Number"
        ],
        [
          [
            "Jules",
            "9861"
          ],
          [
            "Ora",
            "1689"
          ],
          [
            "Cal",
            "6891"
          ],
          [
            "Nia",
            "1986"
          ]
        ]
      ]
    ],
    "id": 249
  },
  {
    "kind": "Detective skills",
    "title": "Nine stitches in the pennant",
    "level": "Medium",
    "intro": "The regatta archive holds four strips of bunting that may be scraps from one long pennant. The pennant maker repeated a five-color cycle forever in one direction. Her arrow still marks the reading direction on every scrap.",
    "clues": [
      "The cycle is blue, red, ivory, gold, green, then back to blue. The undamaged scraps consist of consecutive colors. Exactly one scrap has one incorrect replacement patch."
    ],
    "questions": [
      "Find the repaired strip. What should its middle patch be?"
    ],
    "answer": "Strip C. Its middle patch should be gold.",
    "why": "Ivory must be followed by gold and then green. The other runs occur directly in the declared cycle, including the runs across green back to blue.",
    "tables": [
      [
        "Surviving scraps",
        [
          "Strip",
          "Three successive colors"
        ],
        [
          [
            "A",
            "Green, blue, red"
          ],
          [
            "B",
            "Red, ivory, gold"
          ],
          [
            "C",
            "Ivory, blue, green"
          ],
          [
            "D",
            "Gold, green, blue"
          ]
        ]
      ]
    ],
    "id": 250
  },
  {
    "kind": "Detective skills",
    "title": "Tea for an extra passenger",
    "level": "Hard",
    "intro": "The dining steward sold afternoon tea with a cake, a tart, or both. The receipt drawer says 28 people paid. Just as the steward turns the chairs over, a child claims that eight guests had both treats.",
    "clues": [
      "Every paying guest ordered at least one treat. Each guest received at most one cake and one tart. Orders were served exactly as paid.",
      "The kitchen baked 22 cakes and 19 tarts. At closing, two cakes and four tarts remained. No food was discarded or given away."
    ],
    "questions": [
      "Is the child’s count correct? How many guests ordered just a tart?"
    ],
    "answer": "Seven guests ordered both. Eight ordered just a tart.",
    "why": "Twenty cakes and fifteen tarts went out. That is 35 items for 28 people, so 7 people took a second item. Subtract those 7 from the 15 tart orders to leave 8 tart-only guests. The child remembered a real count but gave it the wrong label.",
    "id": 251
  },
  {
    "kind": "Whodunit",
    "title": "One patron at the second encore",
    "level": "Hard",
    "intro": "During the coroner’s inquiry into the death of the theater’s proprietor, the decisive witness identifies the killer as the patron who alone stayed in the upper box through both encores. Everyone agrees on that identification. The stage book records what was played, and the usher remembers people leaving by the title they heard.",
    "clues": [
      "The concert ended with three pieces, each played once. “After” means after the named piece had ended and before the next began. “During” means that person arrived partway through the piece. Each patron visited the box for only one continuous interval.",
      "There was a brief final pause after the second encore before the audience left. The sole patron present throughout both encores was one of the four below."
    ],
    "questions": [
      "Who stayed throughout both encores?",
      "Why is the patron who stayed latest not necessarily your answer?"
    ],
    "answer": "Leah. Bram stayed to the end but missed the beginning of the first encore.",
    "why": "The encores were Petrel and Tide. May left before Petrel, and Eno left between Petrel and Tide. Bram arrived during Petrel. Leah had arrived before the final scheduled piece and did not leave until both encores had ended.",
    "tables": [
      [
        "Program and additions",
        [
          "Role",
          "Piece"
        ],
        [
          [
            "Last scheduled piece",
            "Gull"
          ],
          [
            "First encore",
            "Petrel"
          ],
          [
            "Second encore",
            "Tide"
          ]
        ]
      ],
      [
        "Upper box notes",
        [
          "Patron",
          "Arrival",
          "Departure"
        ],
        [
          [
            "May",
            "Before Gull",
            "After Gull"
          ],
          [
            "Eno",
            "Before Gull",
            "After Petrel"
          ],
          [
            "Bram",
            "During Petrel",
            "After Tide"
          ],
          [
            "Leah",
            "Before Gull",
            "After Tide"
          ]
        ]
      ]
    ],
    "id": 252
  },
  {
    "title": "The pattern in the lace curtain",
    "kind": "Crossword",
    "level": "Hard",
    "intro": "When sun hit the curtain, three tiny shapes showed on the floor. Its maker hid the shape that belongs at the center in her work sheet.",
    "entries": [
      {
        "x": 2,
        "y": 4,
        "dir": "Across",
        "word": "BOBBIN",
        "clue": "Small spool wound with thread"
      },
      {
        "x": 5,
        "y": 4,
        "dir": "Down",
        "word": "BRAID",
        "clue": "Strip made by interlacing strands"
      },
      {
        "x": 7,
        "y": 0,
        "dir": "Down",
        "word": "LINEN",
        "clue": "Fabric made from flax"
      },
      {
        "x": 6,
        "y": 1,
        "dir": "Across",
        "word": "PIN",
        "clue": "Point used to hold a crossing in place"
      },
      {
        "x": 4,
        "y": 6,
        "dir": "Across",
        "word": "TATTING",
        "clue": "Lacemaking with knots and a little shuttle"
      },
      {
        "x": 3,
        "y": 2,
        "dir": "Down",
        "word": "LOOP",
        "clue": "Thread bent back around to make an opening"
      },
      {
        "x": 0,
        "y": 8,
        "dir": "Across",
        "word": "THREAD",
        "clue": "One fine strand on the spool"
      },
      {
        "x": 3,
        "y": 7,
        "dir": "Down",
        "word": "VEIL",
        "clue": "Fine netting worn over a face"
      },
      {
        "x": 7,
        "y": 6,
        "dir": "Down",
        "word": "TRIM",
        "clue": "Decoration sewn along an edge"
      },
      {
        "x": 0,
        "y": 10,
        "dir": "Across",
        "word": "PILLOW",
        "clue": "Padded support for bobbin lace"
      },
      {
        "x": 0,
        "y": 4,
        "dir": "Down",
        "word": "PICOT",
        "clue": "Tiny decorative loop on an edge"
      }
    ],
    "rings": [
      [
        3,
        3
      ],
      [
        3,
        7
      ],
      [
        4,
        8
      ],
      [
        3,
        10
      ]
    ],
    "questions": [
      "What do the circled letters spell? Read from the top row down, left to right within a row."
    ],
    "answer": "Oval.",
    "why": "The completed grid reads O · V · A · L in the circled cells (r4c4, r8c4, r9c5, r11c4).",
    "id": 253
  },
  {
    "title": "Snow inside the theater",
    "kind": "Word search",
    "level": "Medium",
    "intro": "The stage manager kept ten wintry words for scene changes. The unclaimed rings name the prop waiting in the wings. Which prop? Look in any of eight directions.",
    "grid": [
      "REDWOPNLDOSY",
      "PSOBHSASRBLY",
      "HNZWLTNPIBXO",
      "BSBESOWHFHDJ",
      "WTEYWGADTJYY",
      "ITRBDBHRSAJS",
      "HCAYOZTAHDMG",
      "TNILREPZPFAT",
      "KJHCSROZGFIV",
      "GGVWLAUINLSV",
      "LWEGHEPLIEJD",
      "OFROSTMBFVKD"
    ],
    "locations": {
      "SNOWBANK": [
        [
          7,
          1
        ],
        [
          0,
          8
        ]
      ],
      "BLIZZARD": [
        [
          7,
          11
        ],
        [
          7,
          4
        ]
      ],
      "CRYSTAL": [
        [
          1,
          6
        ],
        [
          7,
          0
        ]
      ],
      "FLURRY": [
        [
          8,
          11
        ],
        [
          3,
          6
        ]
      ],
      "ICICLE": [
        [
          0,
          5
        ],
        [
          5,
          10
        ]
      ],
      "POWDER": [
        [
          5,
          0
        ],
        [
          0,
          0
        ]
      ],
      "FROST": [
        [
          1,
          11
        ],
        [
          5,
          11
        ]
      ],
      "DRIFT": [
        [
          8,
          0
        ],
        [
          8,
          4
        ]
      ],
      "SLEET": [
        [
          5,
          1
        ],
        [
          1,
          5
        ]
      ],
      "THAW": [
        [
          6,
          6
        ],
        [
          6,
          3
        ]
      ]
    },
    "rings": [
      [
        10,
        0
      ],
      [
        5,
        1
      ],
      [
        6,
        1
      ],
      [
        7,
        1
      ],
      [
        4,
        3
      ],
      [
        7,
        5
      ],
      [
        7,
        8
      ],
      [
        0,
        10
      ],
      [
        2,
        10
      ],
      [
        5,
        10
      ],
      [
        11,
        10
      ]
    ],
    "questions": [
      "After finding all ten words, read only the circled letters left unhighlighted, in ordinary reading order. What do they tell you?"
    ],
    "answer": "Sled.",
    "why": "The listed words account for seven circled letters. The uncovered circles, read left to right from the top row down, spell SLED.",
    "id": 254
  },
  {
    "kind": "Logic",
    "title": "Four sacks before the tea break",
    "level": "Medium",
    "intro": "The fishmonger’s delivery bicycle left one sack at each of four stops in a straight run. Its brass clock stamped stops exactly six minutes apart. The first stamp was at 10:02.",
    "clues": [
      "Reed received its sack twelve minutes after Bell. Salt lay between Bell and Reed on the delivery run. Gale got its sack before Salt but was not the stop immediately before Salt."
    ],
    "questions": [
      "Which stop received each of the four time stamps?"
    ],
    "answer": "10:02 Gale, 10:08 Bell, 10:14 Salt, 10:20 Reed.",
    "why": "Bell, Salt and Reed must be three consecutive stops in that order because Bell and Reed are only two delivery intervals apart. Gale came before Salt and did not intervene between Bell and Salt, so it came before all three.",
    "tableform": {
      "rows": [
        "10:02",
        "10:08",
        "10:14",
        "10:20"
      ],
      "cols": [
        [
          "Stop",
          "Salt",
          "Reed",
          "Gale",
          "Bell"
        ]
      ]
    },
    "id": 255
  },
  {
    "title": "The five scraps with hired endings",
    "level": "Hard",
    "intro": "At the cinema kiosk, five strips of an old ticket roll carry only the beginnings and ends of words. The owner vows that when the right ends are hired back, their little ink marks give the title of a lost reel.",
    "clues": [
      "Join each beginning to one ending, using each ending once. The completed word must match the definition on that beginning.",
      "Read the ink marks on the assigned endings in beginning order."
    ],
    "questions": [
      "What five-letter title belongs on the reel?"
    ],
    "answer": "Pearl.",
    "why": "The five repairs are COB+ALT, COM+ET, CAR+GO, CAB+IN and COR+AL. Their ending marks in that order are P, E, A, R and L.",
    "tables": [
      [
        "Beginnings",
        [
          "Strip",
          "Definition"
        ],
        [
          [
            "COB",
            "Blue pigment named for a metal"
          ],
          [
            "COM",
            "Visitor to the sky with a tail"
          ],
          [
            "CAR",
            "Freight"
          ],
          [
            "CAB",
            "Passenger room on a ship"
          ],
          [
            "COR",
            "Material that builds a reef"
          ]
        ]
      ],
      [
        "Loose endings",
        [
          "Ending",
          "Ink mark"
        ],
        [
          [
            "AL",
            "L"
          ],
          [
            "IN",
            "R"
          ],
          [
            "ET",
            "E"
          ],
          [
            "GO",
            "A"
          ],
          [
            "ALT",
            "P"
          ]
        ]
      ]
    ],
    "kind": "Codebreaking",
    "id": 256
  },
  {
    "kind": "Detective skills",
    "title": "The bathing-machine horizon",
    "level": "Medium",
    "intro": "Two sea-wall photographs show the same three colored floats in line on a straight channel, tied in fixed positions. The older picture is unlabeled and the newer one is marked EAST BANK. The caption writer thinks a print has been reversed.",
    "clues": [
      "Observers could look along the line from either end. In these views the recorded lists run from nearest float to farthest, as determined by the mooring posts beside them. A left-to-right mirror does not change depth.",
      "No float moved. There was no other viewpoint along this line."
    ],
    "questions": [
      "Where was the older photograph taken?",
      "Would reversing a print left to right account for the difference?"
    ],
    "answer": "At the opposite, west end. A horizontal reversal would leave the nearest float nearest.",
    "why": "The two lists are exact reversals in depth. Looking along a fixed line from the opposite end swaps near with far. Flipping a print horizontally changes left and right, not the near-to-far ordering.",
    "tables": [
      [
        "Mooring-post record",
        [
          "View",
          "Near to far"
        ],
        [
          [
            "East end",
            "White, amber, blue"
          ],
          [
            "Older print",
            "Blue, amber, white"
          ]
        ]
      ]
    ],
    "id": 257
  },
  {
    "kind": "Whodunit",
    "title": "The name in the lighthouse quilt",
    "level": "Medium",
    "intro": "A thank-you quilt has four unsigned panels. The maker of the panel showing three lights left the square upside down in the exhibition photograph. Four makers supplied cards describing their own work as seen right side up.",
    "clues": [
      "Rotate the photograph half a turn in its own plane. Do not mirror it. In the photograph the three lights occupy upper left, lower left and lower right; the empty corner is upper right.",
      "The cards identify which corner the maker deliberately left blank. Each maker had a different blank corner."
    ],
    "questions": [
      "Who made the three-light panel, and which corner was blank in the maker’s view?"
    ],
    "answer": "Pip; the maker’s lower-left corner was blank.",
    "why": "A half turn sends upper right to lower left. It does not send upper right to upper left as a left-to-right mirror would. Pip listed the only matching blank corner.",
    "tables": [
      [
        "Maker cards",
        [
          "Maker",
          "Blank corner"
        ],
        [
          [
            "Pip",
            "Lower left"
          ],
          [
            "Bea",
            "Upper left"
          ],
          [
            "Rin",
            "Lower right"
          ],
          [
            "Cy",
            "Upper right"
          ]
        ]
      ]
    ],
    "id": 258
  },
  {
    "title": "The café with the upside-down cup",
    "kind": "Crossword",
    "level": "Easy",
    "intro": "Three cups on a shelf hid three different tips. The barista marked which coin lay under the middle cup.",
    "entries": [
      {
        "x": 5,
        "y": 8,
        "dir": "Across",
        "word": "STEAM",
        "clue": "What a wand delivers to the milk"
      },
      {
        "x": 7,
        "y": 4,
        "dir": "Down",
        "word": "FILTER",
        "clue": "Paper cone that holds back grounds"
      },
      {
        "x": 3,
        "y": 4,
        "dir": "Across",
        "word": "DECAF",
        "clue": "Coffee with most of the caffeine removed"
      },
      {
        "x": 4,
        "y": 3,
        "dir": "Down",
        "word": "BEAN",
        "clue": "Coffee seed before grinding"
      },
      {
        "x": 1,
        "y": 6,
        "dir": "Across",
        "word": "GRIND",
        "clue": "Reduce beans to small particles"
      },
      {
        "x": 2,
        "y": 6,
        "dir": "Down",
        "word": "ROAST",
        "clue": "Brown the beans with heat"
      },
      {
        "x": 2,
        "y": 10,
        "dir": "Across",
        "word": "TRAY",
        "clue": "Carrier for several cups"
      },
      {
        "x": 6,
        "y": 0,
        "dir": "Down",
        "word": "CREMA",
        "clue": "Tawny layer on a fresh espresso"
      },
      {
        "x": 1,
        "y": 4,
        "dir": "Down",
        "word": "MUG",
        "clue": "Large handled cup"
      },
      {
        "x": 7,
        "y": 5,
        "dir": "Across",
        "word": "ICED",
        "clue": "Served cold over cubes"
      },
      {
        "x": 9,
        "y": 1,
        "dir": "Down",
        "word": "LATTE",
        "clue": "Drink with espresso and a generous pour of milk"
      },
      {
        "x": 0,
        "y": 8,
        "dir": "Across",
        "word": "FOAM",
        "clue": "Airy layer on a cappuccino"
      }
    ],
    "rings": [
      [
        8,
        5
      ],
      [
        9,
        5
      ],
      [
        4,
        6
      ],
      [
        7,
        7
      ]
    ],
    "questions": [
      "What do the circled letters spell? Read from the top row down, left to right within a row."
    ],
    "answer": "Cent.",
    "why": "The completed grid reads C · E · N · T in the circled cells (r6c9, r6c10, r7c5, r8c8).",
    "id": 259
  },
  {
    "title": "The last sale at the button shop",
    "kind": "Word search",
    "level": "Easy",
    "intro": "Ten words remain on the haberdasher’s receipt. A customer used the spare circles to record what the buttons were made of. What material? Look across to the right, down, or diagonally down.",
    "grid": [
      "FLCVCNSNAP",
      "BBXSOLHVEK",
      "UIUZRGYLVZ",
      "TRACDBAWIQ",
      "TIJIKSRPHH",
      "OBKVTLPAOU",
      "NBOIXEEOIP",
      "SOCLRRKBMD",
      "INMQEYELET",
      "NMFULXDGFP"
    ],
    "locations": {
      "ELASTIC": [
        [
          8,
          1
        ],
        [
          2,
          7
        ]
      ],
      "BUTTON": [
        [
          0,
          1
        ],
        [
          0,
          6
        ]
      ],
      "BUCKLE": [
        [
          1,
          1
        ],
        [
          6,
          6
        ]
      ],
      "EYELET": [
        [
          4,
          8
        ],
        [
          9,
          8
        ]
      ],
      "ZIPPER": [
        [
          9,
          2
        ],
        [
          4,
          7
        ]
      ],
      "RIBBON": [
        [
          1,
          3
        ],
        [
          1,
          8
        ]
      ],
      "BRAID": [
        [
          5,
          3
        ],
        [
          9,
          7
        ]
      ],
      "SNAP": [
        [
          6,
          0
        ],
        [
          9,
          0
        ]
      ],
      "HOOK": [
        [
          9,
          4
        ],
        [
          6,
          7
        ]
      ],
      "CORD": [
        [
          4,
          0
        ],
        [
          4,
          3
        ]
      ]
    },
    "rings": [
      [
        6,
        0
      ],
      [
        6,
        1
      ],
      [
        0,
        2
      ],
      [
        4,
        2
      ],
      [
        0,
        4
      ],
      [
        2,
        6
      ],
      [
        7,
        6
      ],
      [
        2,
        7
      ],
      [
        5,
        7
      ],
      [
        1,
        8
      ],
      [
        0,
        9
      ]
    ],
    "questions": [
      "After finding all ten words, read only the circled letters left unhighlighted, in ordinary reading order. What do they tell you?"
    ],
    "answer": "Horn.",
    "why": "The listed words account for seven circled letters. The uncovered circles, read left to right from the top row down, spell HORN.",
    "id": 260
  },
  {
    "title": "Two halves of a charity raffle",
    "level": "Medium",
    "intro": "At the quay raffle, every ticket was torn into a customer half and a drum half. A winning drum half survives. Its serial was washed out, but three of its four little scallops left clear outlines.",
    "clues": [
      "With both printed faces up and the two halves held as originally joined, read all edges from top to bottom; never turn a half over.",
      "A bump on one edge must fit a hollow on the other at that height. The drum half reads bump, unknown, hollow, bump. Exactly one surviving customer edge can fit."
    ],
    "questions": [
      "Who holds the winning half? What was the lost second scallop on the drum half?"
    ],
    "answer": "Mina. The drum’s second scallop was a bump.",
    "why": "The customer edge must begin hollow and end bump–hollow in positions three and four. Only Mina’s does. Mina’s second hollow pairs with a drum bump.",
    "tables": [
      [
        "Customer halves",
        [
          "Holder",
          "Edge, top to bottom"
        ],
        [
          [
            "Enzo",
            "Hollow · bump · hollow · hollow"
          ],
          [
            "Mina",
            "Hollow · hollow · bump · hollow"
          ],
          [
            "Wes",
            "Bump · hollow · bump · hollow"
          ],
          [
            "Pia",
            "Hollow · hollow · bump · bump"
          ]
        ]
      ]
    ],
    "kind": "Detective skills",
    "id": 261
  },
  {
    "title": "The three postcards in the tip jar",
    "level": "Medium",
    "intro": "Three postcards cost a whole number of pennies each, all different. The clerk wrote down all three two-card totals but forgot which pair made which amount.",
    "clues": [
      "The pair totals are 17, 21 and 24 pennies.",
      "The skyline is the dearest card. The ferry is cheaper than the lighthouse."
    ],
    "questions": [
      "How much did each card cost?"
    ],
    "answer": "Ferry 7 pennies, lighthouse 10, skyline 14.",
    "why": "Adding all the totals counts each price twice. Half of 62 is 31 pennies for all three. Subtract each pair total from 31 to get 14, 10 and 7. The descriptions fix the order.",
    "tableform": {
      "rows": [
        "Ferry",
        "Lighthouse",
        "Skyline"
      ],
      "cols": [
        [
          "Price",
          "7 pennies",
          "10 pennies",
          "14 pennies"
        ]
      ]
    },
    "kind": "Logic",
    "id": 262
  },
  {
    "kind": "Whodunit",
    "title": "The pound note with a promise",
    "level": "Hard",
    "intro": "An unsigned note in the lifeboat box promises to match the day’s small donations pound for pound up to a limit. The matching gift arrived as a separate payment, bringing the day’s total to 31 pounds. The treasurer knows which of four patrons wrote each version of the promise.",
    "clues": [
      "Small donors together gave 18 pounds, before the match. Only one patron paid a match. Each possible promise matches eligible pounds up to its limit. No other funds are in the 31."
    ],
    "questions": [
      "Who made the matching gift?",
      "Why is halving the day’s total a misleading shortcut?"
    ],
    "answer": "Vale made the 13-pound match.",
    "why": "The separate payment was 31 − 18 = 13 pounds. A cap below eighteen is paid in full; the proposed payments are 9, 13, 18 and 15 pounds. Vale alone matches the actual difference. A capped gift need not equal the whole original collection.",
    "tables": [
      [
        "Versions signed by the patrons",
        [
          "Patron",
          "Maximum match"
        ],
        [
          [
            "Chip",
            "9 pounds"
          ],
          [
            "Vale",
            "13 pounds"
          ],
          [
            "Ara",
            "20 pounds"
          ],
          [
            "Moss",
            "15 pounds"
          ]
        ]
      ]
    ],
    "id": 263
  },
  {
    "title": "Half a note in each hand",
    "level": "Medium",
    "intro": "A piano teacher sent the purser a six-letter destination as a duet. Whenever the hands hit two keys in a column, their alphabet positions bracket the real letter at exactly equal distances.",
    "clues": [
      "Use A=1 through Z=26 with no wrapping. Read the two keys in each beat and take the letter exactly halfway between them.",
      "The teacher allows unison: two identical keys stand for that letter."
    ],
    "questions": [
      "Where does the lesson end?"
    ],
    "answer": "At the bridge.",
    "why": "The pair A/C has midpoint B. O/U gives R, E/M gives I, A/G gives D, G/G gives G, and A/I gives E.",
    "tables": [
      [
        "Six beats",
        [
          "Hand",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        [
          [
            "Left",
            "A",
            "O",
            "E",
            "A",
            "G",
            "A"
          ],
          [
            "Right",
            "C",
            "U",
            "M",
            "G",
            "G",
            "I"
          ]
        ]
      ]
    ],
    "kind": "Codebreaking",
    "id": 264
  },
  {
    "kind": "Detective skills",
    "title": "Seven oranges on the scale",
    "level": "Medium",
    "intro": "Seven painted wooden oranges decorated the fruit stall. Six were the same weight, and one, repaired with extra wood, was heavier. Sal finds two old balance-test notes folded under the stall.",
    "clues": [
      "The scale and the notes are reliable. Each side held the specified oranges alone. The letter stamped on each orange identifies it."
    ],
    "questions": [
      "Which orange had been repaired?",
      "What would either weighing leave uncertain if you saw only that note?"
    ],
    "answer": "Orange D was repaired.",
    "why": "The heavy left pan on the first test narrows the possibilities to A, C and D. The balanced second test makes A, C, E and G ordinary. Their intersection leaves D. On its own the second note would still leave B, D or F.",
    "tables": [
      [
        "Balance notes",
        [
          "Left pan",
          "Right pan",
          "Reading"
        ],
        [
          [
            "A, C, D",
            "B, E, F",
            "Left heavier"
          ],
          [
            "A, E",
            "C, G",
            "Balance"
          ]
        ]
      ]
    ],
    "id": 265
  },
  {
    "title": "A ribbon on the ice",
    "kind": "Crossword",
    "level": "Medium",
    "intro": "The skating club’s prize envelope came untied. Its crossword identifies the place where the ribbon was found.",
    "entries": [
      {
        "x": 0,
        "y": 6,
        "dir": "Across",
        "word": "LOOP",
        "clue": "Figure-skating jump whose name is a closed curve"
      },
      {
        "x": 0,
        "y": 3,
        "dir": "Down",
        "word": "RAIL",
        "clue": "Barrier a beginner might hold"
      },
      {
        "x": 3,
        "y": 6,
        "dir": "Down",
        "word": "PAIR",
        "clue": "Two skaters performing together"
      },
      {
        "x": 0,
        "y": 9,
        "dir": "Across",
        "word": "SCORE",
        "clue": "Number awarded by a judge"
      },
      {
        "x": 0,
        "y": 3,
        "dir": "Across",
        "word": "RINK",
        "clue": "Area prepared for skating"
      },
      {
        "x": 2,
        "y": 0,
        "dir": "Down",
        "word": "SPIN",
        "clue": "Turn repeatedly on one spot"
      },
      {
        "x": 3,
        "y": 7,
        "dir": "Across",
        "word": "AXEL",
        "clue": "Jump named for Norwegian skater Paulsen"
      },
      {
        "x": 6,
        "y": 7,
        "dir": "Down",
        "word": "LACE",
        "clue": "Cord tightened before going on the ice"
      },
      {
        "x": 6,
        "y": 9,
        "dir": "Across",
        "word": "COACH",
        "clue": "Person advising a skater at the boards"
      },
      {
        "x": 5,
        "y": 3,
        "dir": "Down",
        "word": "BLADE",
        "clue": "Metal runner attached to a skate"
      },
      {
        "x": 4,
        "y": 4,
        "dir": "Across",
        "word": "GLIDE",
        "clue": "Travel smoothly without another push"
      }
    ],
    "rings": [
      [
        0,
        3
      ],
      [
        0,
        4
      ],
      [
        6,
        4
      ],
      [
        0,
        6
      ]
    ],
    "questions": [
      "What do the circled letters spell? Read from the top row down, left to right within a row."
    ],
    "answer": "Rail.",
    "why": "The completed grid reads R · A · I · L in the circled cells (r4c1, r5c1, r5c7, r7c1).",
    "id": 266
  },
  {
    "title": "The exhibition of paper animals",
    "kind": "Word search",
    "level": "Hard",
    "intro": "A folding club listed ten models on its poster. They left a four-letter message giving the shape of the award on the winning model. What shape? Look in any of eight directions.",
    "grid": [
      "XGNIHMMTALEOJ",
      "ROGOEIUBCSZST",
      "URXOGRXKIJRTI",
      "NFSWTARAYWAFD",
      "IGGLLWRLLSBBT",
      "UJEPAWFDMLBSX",
      "GDMIYRBDJTIZQ",
      "NVXAEOSEWUTVG",
      "EYATGBNZEPYOZ",
      "PQTELAHWETKJA",
      "YUEAWJZYUTLNX",
      "BXMSSJUWEIQEX",
      "IQGLDAYRCRANE"
    ],
    "locations": {
      "BUTTERFLY": [
        [
          0,
          11
        ],
        [
          8,
          3
        ]
      ],
      "PENGUIN": [
        [
          0,
          9
        ],
        [
          0,
          3
        ]
      ],
      "RABBIT": [
        [
          10,
          2
        ],
        [
          10,
          7
        ]
      ],
      "DRAGON": [
        [
          7,
          5
        ],
        [
          2,
          0
        ]
      ],
      "BEETLE": [
        [
          6,
          6
        ],
        [
          11,
          11
        ]
      ],
      "TURTLE": [
        [
          7,
          0
        ],
        [
          2,
          5
        ]
      ],
      "CRANE": [
        [
          8,
          12
        ],
        [
          12,
          12
        ]
      ],
      "WHALE": [
        [
          7,
          9
        ],
        [
          3,
          9
        ]
      ],
      "SWAN": [
        [
          3,
          11
        ],
        [
          6,
          8
        ]
      ],
      "FROG": [
        [
          1,
          3
        ],
        [
          1,
          0
        ]
      ]
    },
    "rings": [
      [
        6,
        1
      ],
      [
        9,
        1
      ],
      [
        8,
        3
      ],
      [
        12,
        4
      ],
      [
        4,
        5
      ],
      [
        3,
        9
      ],
      [
        3,
        11
      ],
      [
        11,
        11
      ],
      [
        7,
        12
      ],
      [
        8,
        12
      ],
      [
        12,
        12
      ]
    ],
    "questions": [
      "After finding all ten words, read only the circled letters left unhighlighted, in ordinary reading order. What do they tell you?"
    ],
    "answer": "Star.",
    "why": "The listed words account for seven circled letters. The uncovered circles, read left to right from the top row down, spell STAR.",
    "id": 267
  },
  {
    "kind": "Whodunit",
    "title": "The ferry that carried the judge",
    "level": "Hard",
    "intro": "The county judge traveled under an ordinary ticket to avoid the brass band planning to meet her. Her diary names her crossing only by two sights through the same window. A tiny route map and a list of sailings survive. Four passengers later claimed to have shared the very same crossing.",
    "clues": [
      "The diary says “first the red mill; later the glasshouse.” Both buildings were visible only when the ferry passed their own stops. Routes were sailed in the exact order printed, without reverse trips or repeat stops.",
      "Each claimant rode the full trip shown on their ticket. There was just one sailing on each listed route."
    ],
    "questions": [
      "Whose claim fits the diary?",
      "Which route contains both sights but in the wrong order?"
    ],
    "answer": "Mab, on Wren. Tern passed both in the opposite order.",
    "why": "The mill is at Quill and the glasshouse at Vale. Wren meets Quill before Vale. Tern goes from Vale to Quill; Kite never calls at Vale and Lark never calls at Quill.",
    "tables": [
      [
        "Route card",
        [
          "Sailing and claimant",
          "Stops in order"
        ],
        [
          [
            "Wren, Mab",
            "Inn · Quill · Reed · Vale"
          ],
          [
            "Tern, Rob",
            "Vale · Reed · Quill · Inn"
          ],
          [
            "Kite, Ona",
            "Inn · Quill · Reed · Hall"
          ],
          [
            "Lark, Kit",
            "Hall · Reed · Vale · Inn"
          ]
        ]
      ],
      [
        "Margin of the route map",
        [
          "Feature",
          "Stop"
        ],
        [
          [
            "Red mill",
            "Quill"
          ],
          [
            "Glasshouse",
            "Vale"
          ]
        ]
      ]
    ],
    "id": 268
  },
  {
    "kind": "Logic",
    "title": "Four labels under the jeweler’s loupe",
    "level": "Medium",
    "intro": "Four folded slips lie in order on green velvet. Each bears one of four different words. A jeweler’s loupe revealed only certain letters; the slips must stay shut until the auction.",
    "clues": [
      "Only the letters actually reported can be seen. The four possible words are PEARL, PINE, PALM and PLUM. Use each once.",
      "Slip 1 ends in M and its second letter is not A. Slip 2 has five letters. Slip 3 has A as its second letter."
    ],
    "questions": [
      "Match the four slips to their words."
    ],
    "answer": "PLUM, PEARL, PALM, PINE.",
    "why": "PLUM and PALM end in M, but only PLUM passes the second-letter test for slip 1. PEARL has five letters and fits slip 2. PALM is the only remaining word with A second. PINE is left for slip 4.",
    "tableform": {
      "rows": [
        "Slip 1",
        "Slip 2",
        "Slip 3",
        "Slip 4"
      ],
      "cols": [
        [
          "Word",
          "Pearl",
          "Pine",
          "Palm",
          "Plum"
        ]
      ]
    },
    "id": 269
  },
  {
    "kind": "Detective skills",
    "title": "The ticket with three endings",
    "level": "Medium",
    "intro": "The ticket booth punched one of three shapes in a souvenir card each night. Eight complete nights survive in the ledger. The inspector suspects that the clerk’s theory about paired shapes goes beyond the evidence.",
    "clues": [
      "Circle is C, triangle is T, and square is S. The clerk claims, “Every C in those eight nights is followed the very next night by T.” Check only transitions actually visible on the page."
    ],
    "questions": [
      "Is there a visible counterexample?",
      "Can the last C tell you what the punch was on night nine?"
    ],
    "answer": "There is no visible counterexample. Night nine is unknown.",
    "why": "The C on night 1 is followed by T, and the C on night 5 is also followed by T. C on night 8 has no visible successor. Both T and a different shape could be added on night 9 without changing any entry on the page.",
    "tables": [
      [
        "Whole page",
        [
          "Night",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        [
          [
            "Punch",
            "C",
            "T",
            "S",
            "T",
            "C",
            "T",
            "S",
            "C"
          ]
        ]
      ]
    ],
    "id": 270
  },
  {
    "title": "A teacup at the tide auction",
    "kind": "Crossword",
    "level": "Hard",
    "intro": "The auctioneer listed three shapes that could have left the tiny mark under a porcelain teacup. Find the one she actually saw.",
    "entries": [
      {
        "x": 4,
        "y": 6,
        "dir": "Across",
        "word": "GLAZE",
        "clue": "Glassy coating on fired pottery"
      },
      {
        "x": 5,
        "y": 2,
        "dir": "Down",
        "word": "HANDLE",
        "clue": "Loop that keeps fingers away from hot porcelain"
      },
      {
        "x": 8,
        "y": 3,
        "dir": "Down",
        "word": "BLUE",
        "clue": "Traditional color paired with white on Delftware"
      },
      {
        "x": 0,
        "y": 4,
        "dir": "Across",
        "word": "KAOLIN",
        "clue": "Fine white clay used in porcelain"
      },
      {
        "x": 7,
        "y": 4,
        "dir": "Across",
        "word": "SLIP",
        "clue": "Liquid clay used for decoration"
      },
      {
        "x": 10,
        "y": 0,
        "dir": "Down",
        "word": "STAMP",
        "clue": "Mark pressed into soft clay"
      },
      {
        "x": 3,
        "y": 2,
        "dir": "Down",
        "word": "KILN",
        "clue": "Furnace for firing ceramics"
      },
      {
        "x": 7,
        "y": 1,
        "dir": "Across",
        "word": "FOOT",
        "clue": "Raised ring beneath a cup"
      },
      {
        "x": 1,
        "y": 2,
        "dir": "Down",
        "word": "CRAZE",
        "clue": "Develop a network of fine cracks in the glaze"
      }
    ],
    "rings": [
      [
        10,
        0
      ],
      [
        10,
        1
      ],
      [
        10,
        2
      ],
      [
        1,
        3
      ]
    ],
    "questions": [
      "What do the circled letters spell? Read from the top row down, left to right within a row."
    ],
    "answer": "Star.",
    "why": "The completed grid reads S · T · A · R in the circled cells (r1c11, r2c11, r3c11, r4c2).",
    "id": 271
  },
  {
    "title": "The ferry’s fruit sticker",
    "kind": "Word search",
    "level": "Easy",
    "intro": "An inspector stamped ten fruit names on her worksheet. Under the stamps is the name on a stray crate. Which orchard sent it? Look across to the right, down, or diagonally down.",
    "grid": [
      "WBVYHIKSTX",
      "NMELONFFZY",
      "PEBPAPAYAM",
      "ALCDRPJCLD",
      "POUTXLGLAL",
      "RSRMAURMLY",
      "IQOAARSZIC",
      "CBOVNOINMH",
      "OWACNGWNEE",
      "TLMSIOEHEE"
    ],
    "locations": {
      "NECTARINE": [
        [
          0,
          1
        ],
        [
          8,
          9
        ]
      ],
      "APRICOT": [
        [
          0,
          3
        ],
        [
          0,
          9
        ]
      ],
      "PAPAYA": [
        [
          3,
          2
        ],
        [
          8,
          2
        ]
      ],
      "DAMSON": [
        [
          9,
          3
        ],
        [
          4,
          8
        ]
      ],
      "ORANGE": [
        [
          1,
          4
        ],
        [
          6,
          9
        ]
      ],
      "LYCHEE": [
        [
          9,
          4
        ],
        [
          9,
          9
        ]
      ],
      "MELON": [
        [
          1,
          1
        ],
        [
          5,
          1
        ]
      ],
      "GUAVA": [
        [
          6,
          4
        ],
        [
          2,
          8
        ]
      ],
      "PLUM": [
        [
          0,
          2
        ],
        [
          3,
          5
        ]
      ],
      "LIME": [
        [
          8,
          5
        ],
        [
          8,
          8
        ]
      ]
    },
    "rings": [
      [
        0,
        0
      ],
      [
        5,
        0
      ],
      [
        1,
        1
      ],
      [
        4,
        1
      ],
      [
        3,
        2
      ],
      [
        0,
        3
      ],
      [
        2,
        3
      ],
      [
        8,
        3
      ],
      [
        7,
        4
      ],
      [
        9,
        5
      ],
      [
        2,
        6
      ],
      [
        1,
        8
      ],
      [
        0,
        9
      ]
    ],
    "questions": [
      "After finding all ten words, read only the circled letters left unhighlighted, in ordinary reading order. What do they tell you?"
    ],
    "answer": "Willow.",
    "why": "The listed words account for seven circled letters. The uncovered circles, read left to right from the top row down, spell WILLOW.",
    "id": 272
  },
  {
    "kind": "Whodunit",
    "title": "The chalk on the fourth barrel",
    "level": "Medium",
    "intro": "A cooper intended one barrel for a charity auction and put a chalk cross on it. The four barrel makers each registered two distinctive hoops. When the cross washed off, the auctioneer remembered that exactly one of its two hoops had a square stamp.",
    "clues": [
      "The two stamps from each maker are listed top hoop first. The auctioneer saw both. Only the cooper who made the auction barrel also burned a crescent into its base; the base record is complete."
    ],
    "questions": [
      "Which cooper made the auction barrel? Why does the word “exactly” matter?"
    ],
    "answer": "Fern. Gio’s two square stamps rule Gio out despite the crescent.",
    "why": "Exactly one square fits Fern and Ames. The crescent fits Fern and Gio. Ames has a star on the base, while Gio has two squares. The only overlap is Fern.",
    "tables": [
      [
        "Barrel register",
        [
          "Cooper",
          "Hoops",
          "Base"
        ],
        [
          [
            "Fern",
            "Square, round",
            "Crescent"
          ],
          [
            "Gio",
            "Square, square",
            "Crescent"
          ],
          [
            "Ames",
            "Round, square",
            "Star"
          ],
          [
            "Tess",
            "Round, round",
            "Sun"
          ]
        ]
      ]
    ],
    "id": 273
  },
  {
    "kind": "Detective skills",
    "title": "The dress circle’s missing seat",
    "level": "Hard",
    "intro": "A theater carpenter numbered a row of twelve seats. A surviving plan gives only the sums on neighboring pairs. One seat bore a star for the royal guest. Can you locate it without rebuilding every seat?",
    "clues": [
      "The seats were numbered 1 through 12 consecutively from one end of the row. The sketch shows the starred seat with both immediate neighbors, and the sums are written in page order from left to right."
    ],
    "questions": [
      "What was the starred seat’s number? Which way did the seat numbers increase on the sketch?"
    ],
    "answer": "Seat 8. The seat numbers increased toward the left.",
    "why": "The adjacent pair on the left sums to 17, so its numbers are 8 and 9. The right pair sums to 15, so its numbers are 7 and 8. Their shared starred seat is 8. The three seats read 9, 8, 7 from left to right.",
    "tables": [
      [
        "Pencil sketch",
        [
          "Pair",
          "Sum"
        ],
        [
          [
            "Left neighbor plus star",
            "17"
          ],
          [
            "Star plus right neighbor",
            "15"
          ]
        ]
      ]
    ],
    "id": 274
  },
  {
    "kind": "Logic",
    "title": "The jumble in the puppet booth",
    "level": "Hard",
    "intro": "At the start of the puppet show, four labeled cups hid four different painted tokens. A child wrote down every swap of the tokens beneath the cups. When the curtain fell the audience could see where each token ended.",
    "clues": [
      "The cups, labeled A to D from left to right, never moved. Swap the tokens below the named cups, wherever those tokens were then.",
      "First the puppeteer swapped A with B. Second came C with D. Last came A with C. The end positions A to D showed Bee, Reed, Rose, Shell."
    ],
    "questions": [
      "Work backward to record the tokens at the opening curtain."
    ],
    "answer": "A Reed, B Rose, C Shell, D Bee.",
    "why": "Undo the last swap first. A through D become Rose, Reed, Bee, Shell. Undo the C–D swap to get Rose, Reed, Shell, Bee. Undo A–B for the opening arrangement Reed, Rose, Shell, Bee.",
    "tableform": {
      "rows": [
        "Cup A",
        "Cup B",
        "Cup C",
        "Cup D"
      ],
      "cols": [
        [
          "Token",
          "Shell",
          "Bee",
          "Reed",
          "Rose"
        ]
      ]
    },
    "id": 275
  },
  {
    "title": "Four panels on the uncut sheet",
    "level": "Hard",
    "intro": "A miniature printer folded one sheet into an eight-page booklet. She printed a two-letter scrap on each numbered page and cut the folds. The scraps now sit on the press bed in their old pairs.",
    "clues": [
      "The page number is still visible by each scrap. On each page, a little arrow determines whether to keep its two letters as printed (→) or reverse them (←).",
      "Read pages 1 through 8 in order. Spaces return after letters 4, 7 and 11."
    ],
    "questions": [
      "What instruction was printed in the booklet?"
    ],
    "answer": "Turn the blue wheel.",
    "why": "From pages 1 to 8 the corrected pieces are TU, RN, TH, EB, LU, EW, HE and EL. Joining the pieces and restoring the spaces gives TURN THE BLUE WHEEL.",
    "tables": [
      [
        "Paired pages",
        [
          "Left page and scrap",
          "Right page and scrap"
        ],
        [
          [
            "8 · LE ←",
            "1 · TU →"
          ],
          [
            "2 · NR ←",
            "7 · EH ←"
          ],
          [
            "6 · EW →",
            "3 · HT ←"
          ],
          [
            "4 · EB →",
            "5 · UL ←"
          ]
        ]
      ]
    ],
    "kind": "Codebreaking",
    "id": 276
  },
  {
    "kind": "Detective skills",
    "title": "The violet jar in the card index",
    "level": "Hard",
    "intro": "There are two editions of a botanist’s label cards. The first labels were printed in black and numbered by the plant’s position in the greenhouse. The second kept the numbers but reassigned some plants. A curator has found “8: VIOLET” in black and wants to identify its edition.",
    "clues": [
      "Both printings used black ink. The record below is complete for the three numbers shown. All surviving cards match one of these two editions exactly."
    ],
    "questions": [
      "Can the violet card alone establish its edition?",
      "A second card from the same unbroken sheet reads “10: SAGE.” Which edition must the sheet be?"
    ],
    "answer": "The violet card is ambiguous on its own. Together the cards identify edition two.",
    "why": "Violet is at 8 in both editions and the ink is shared. Sage at 10 appears only in the second printing. The physical link to the same sheet is what lets that second card also date the violet card.",
    "tables": [
      [
        "Printer’s proof",
        [
          "Card",
          "Edition one",
          "Edition two"
        ],
        [
          [
            "8",
            "Violet",
            "Violet"
          ],
          [
            "9",
            "Sage",
            "Mint"
          ],
          [
            "10",
            "Mint",
            "Sage"
          ]
        ]
      ]
    ],
    "id": 277
  },
  {
    "kind": "Whodunit",
    "title": "Twice round the wedding table",
    "level": "Hard",
    "intro": "The harbor master’s wedding feast ended with a borrowed pearl disappearing from a display cup. A witness saw the guest wearing it a moment later and gave the inspector a wonderfully unhelpful description: “The one who sat opposite the one who sat immediately clockwise of Alba.” The seating plan had been cut into ribbons.",
    "clues": [
      "Six seats are evenly spaced around a round table. Count three places for opposite. Clockwise order is as seen from overhead. The guest wearing the pearl was the one who removed it.",
      "Start at Alba. Bo sat immediately clockwise of Alba. Cam was clockwise of Bo in the very next seat. Dee sat opposite Alba. Etta sat immediately counterclockwise of Alba. Fin filled the remaining seat."
    ],
    "questions": [
      "Who took the pearl?",
      "Which guest would you wrongly identify if you went counterclockwise at the first step?"
    ],
    "answer": "Fin took it. Reversing the first step would point to Cam.",
    "why": "Clockwise from Alba the circle is Alba, Bo, Cam, Dee, Fin, Etta. The guest across from Bo is Fin. The guest across from Etta is Cam.",
    "id": 278
  },
  {
    "title": "The name in the shell fan",
    "kind": "Crossword",
    "level": "Medium",
    "intro": "A folding fan from the costume room carries the name of its owner among the little circles in the wardrobe inventory.",
    "entries": [
      {
        "x": 3,
        "y": 5,
        "dir": "Across",
        "word": "BONE",
        "clue": "Material once carved into fan sticks"
      },
      {
        "x": 6,
        "y": 4,
        "dir": "Down",
        "word": "PEARL",
        "clue": "Lustrous bead sewn on an evening fan"
      },
      {
        "x": 5,
        "y": 8,
        "dir": "Across",
        "word": "PLEAT",
        "clue": "Fold that helps a fan close tightly"
      },
      {
        "x": 6,
        "y": 4,
        "dir": "Across",
        "word": "PIVOT",
        "clue": "Point around which all the sticks rotate"
      },
      {
        "x": 3,
        "y": 3,
        "dir": "Down",
        "word": "RIB",
        "clue": "One of the narrow supports of a folding fan"
      },
      {
        "x": 8,
        "y": 7,
        "dir": "Down",
        "word": "LACE",
        "clue": "Openwork trim on a dress fan"
      },
      {
        "x": 9,
        "y": 3,
        "dir": "Down",
        "word": "FOLD",
        "clue": "Bring two sections together along a crease"
      },
      {
        "x": 4,
        "y": 10,
        "dir": "Across",
        "word": "TASSEL",
        "clue": "Bunch of threads hanging from a cord"
      },
      {
        "x": 0,
        "y": 3,
        "dir": "Across",
        "word": "GUARD",
        "clue": "Outer stick protecting a closed fan"
      },
      {
        "x": 4,
        "y": 0,
        "dir": "Down",
        "word": "GOLD",
        "clue": "Yellow metal used for gilding"
      },
      {
        "x": 4,
        "y": 2,
        "dir": "Across",
        "word": "LEAF",
        "clue": "Pleated material stretched over the sticks"
      }
    ],
    "rings": [
      [
        2,
        3
      ],
      [
        4,
        3
      ],
      [
        6,
        6
      ]
    ],
    "questions": [
      "What do the circled letters spell? Read from the top row down, left to right within a row."
    ],
    "answer": "Ada.",
    "why": "The completed grid reads A · D · A in the circled cells (r4c3, r4c5, r7c7).",
    "id": 279
  },
  {
    "title": "A brass label in the mail coach",
    "kind": "Word search",
    "level": "Medium",
    "intro": "The old coach carried a display of harness and carriage parts. The curator hid the coach’s nickname in its inventory. What was the nickname? Look in any of eight directions.",
    "grid": [
      "XLHFQMMIPMSJ",
      "ZKISHAMESHQE",
      "JARNYIICAEOJ",
      "RXUIOWSFKXRC",
      "DAYEKXTOIYLO",
      "TSLREWPGSWZE",
      "PXZLJSBWNYHL",
      "CEWAOCPREPUA",
      "QSTDTCAFINSM",
      "WIWSFSPOVDQJ",
      "LJETECARTTLJ",
      "PTGYIAJHNBRE"
    ],
    "locations": {
      "BRIDLE": [
        [
          6,
          6
        ],
        [
          11,
          11
        ]
      ],
      "COLLAR": [
        [
          5,
          8
        ],
        [
          0,
          3
        ]
      ],
      "REINS": [
        [
          3,
          5
        ],
        [
          3,
          1
        ]
      ],
      "TRACE": [
        [
          8,
          10
        ],
        [
          4,
          10
        ]
      ],
      "HAMES": [
        [
          4,
          1
        ],
        [
          8,
          1
        ]
      ],
      "SPOKE": [
        [
          5,
          6
        ],
        [
          9,
          2
        ]
      ],
      "SHAFT": [
        [
          10,
          0
        ],
        [
          6,
          4
        ]
      ],
      "YOKE": [
        [
          4,
          2
        ],
        [
          4,
          5
        ]
      ],
      "AXLE": [
        [
          8,
          2
        ],
        [
          11,
          5
        ]
      ],
      "STEP": [
        [
          3,
          9
        ],
        [
          0,
          6
        ]
      ]
    },
    "rings": [
      [
        4,
        1
      ],
      [
        5,
        1
      ],
      [
        3,
        2
      ],
      [
        3,
        4
      ],
      [
        4,
        4
      ],
      [
        6,
        5
      ],
      [
        8,
        5
      ],
      [
        2,
        7
      ],
      [
        2,
        8
      ],
      [
        1,
        9
      ],
      [
        4,
        9
      ],
      [
        3,
        10
      ]
    ],
    "questions": [
      "After finding all ten words, read only the circled letters left unhighlighted, in ordinary reading order. What do they tell you?"
    ],
    "answer": "Swift.",
    "why": "The listed words account for seven circled letters. The uncovered circles, read left to right from the top row down, spell SWIFT.",
    "id": 280
  },
  {
    "title": "The parade heard from two windows",
    "level": "Hard",
    "intro": "Two listeners heard a drum from a stationary float. The harbor sent a flash at the exact instant of the beat. The listeners timed from seeing the flash until hearing the sound. Three marked spots on a straight quay could have held the float.",
    "clues": [
      "Treat the flash travel time as zero. Sound covered 340 meters each second. On this scale the two windows and all three candidate spots are on the same straight line.",
      "Window West is at 0 m and Window East at 680 m. Candidate positions, measured east from Window West, are −170 m (orchard), +170 m (arch) and +510 m (steps)."
    ],
    "questions": [
      "Where was the float? Which window’s observation alone would have left two possibilities?"
    ],
    "answer": "At the arch, +170 m. Window West alone leaves the orchard and arch.",
    "why": "West’s half-second gives 170 m to either side of zero. East’s second and a half gives 510 m from 680. Of the candidates only +170 m is at both distances.",
    "tables": [
      [
        "Delay from flash to beat",
        [
          "Window",
          "Delay"
        ],
        [
          [
            "West",
            "0.50 seconds"
          ],
          [
            "East",
            "1.50 seconds"
          ]
        ]
      ]
    ],
    "kind": "Detective skills",
    "id": 281
  },
  {
    "title": "The two buttons in the wax seal",
    "level": "Hard",
    "intro": "A souvenir press has four tiny windows, all showing white. Button A reverses the colors in windows 1, 2 and 4. Button B reverses windows 2 and 3. A third button C reverses windows 1 and 3. Each press swaps white and blue in its named windows.",
    "clues": [
      "The inspector needs windows 1 and 4 blue, and windows 2 and 3 white.",
      "The order of presses does not change the result. Pressing one button twice cancels its effects."
    ],
    "questions": [
      "Can the inspector print that seal? If it is impossible, identify a pattern that always holds."
    ],
    "answer": "The seal is impossible. Among windows 1, 2 and 3 there are always an even number of blue windows.",
    "why": "Each button flips exactly two of the first three windows. That preserves even parity, starting with zero blue. The requested seal has just one blue in those three. Window 4 cannot change that contradiction.",
    "kind": "Logic",
    "id": 282
  },
  {
    "kind": "Whodunit",
    "title": "The last word at a silent auction",
    "level": "Hard",
    "intro": "Four visitors placed sealed written bids on a book of harbor songs. The rules award it to the highest bidder but charge that winner one pound more than the second-highest bid. A photograph shows the winning payment of eleven pounds. The catalog gives a different kind of clue about each sealed bid.",
    "clues": [
      "The bids were 7, 8, 10 and 13 pounds, each submitted once. No bid was tied.",
      "Ollie offered a single-digit sum. Ren offered two pounds more than Sol. Fay offered an odd amount."
    ],
    "questions": [
      "Who won? What did everyone bid?"
    ],
    "answer": "Fay won with 13 pounds. Ren bid 10, Sol 8 and Ollie 7.",
    "why": "Only the pair 10 and 8 differs by two, so Ren and Sol occupy those bids. Ollie’s single digit must be 7, leaving 13 for Fay. The winner paid 10 + 1 = 11 rather than the amount in the winner’s sealed bid.",
    "id": 283
  },
  {
    "title": "Three stones at the tide garden",
    "kind": "Crossword",
    "level": "Medium",
    "intro": "The gardener set a stone by one plant to mark a buried time capsule. The garden crossword records which plant she chose.",
    "entries": [
      {
        "x": 2,
        "y": 7,
        "dir": "Across",
        "word": "PEAT",
        "clue": "Partly decayed plant matter from a bog"
      },
      {
        "x": 5,
        "y": 5,
        "dir": "Down",
        "word": "GATE",
        "clue": "Hinged entrance in a garden wall"
      },
      {
        "x": 3,
        "y": 5,
        "dir": "Across",
        "word": "SAGE",
        "clue": "Aromatic herb with gray-green leaves"
      },
      {
        "x": 6,
        "y": 2,
        "dir": "Down",
        "word": "RAKE",
        "clue": "Tool that combs lines into gravel"
      },
      {
        "x": 3,
        "y": 2,
        "dir": "Down",
        "word": "MOSS",
        "clue": "Low green carpet on the damp stones"
      },
      {
        "x": 5,
        "y": 2,
        "dir": "Across",
        "word": "GRAVEL",
        "clue": "Small loose stones underfoot"
      },
      {
        "x": 0,
        "y": 4,
        "dir": "Across",
        "word": "IRIS",
        "clue": "Flower named for the Greek goddess of the rainbow"
      },
      {
        "x": 9,
        "y": 0,
        "dir": "Down",
        "word": "REED",
        "clue": "Slender wetland plant with a hollow stem"
      },
      {
        "x": 2,
        "y": 7,
        "dir": "Down",
        "word": "PATH",
        "clue": "Route between planting beds"
      },
      {
        "x": 1,
        "y": 2,
        "dir": "Down",
        "word": "FERN",
        "clue": "Frond-bearing plant in the shade"
      }
    ],
    "rings": [
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        5
      ],
      [
        3,
        7
      ]
    ],
    "questions": [
      "What do the circled letters spell? Read from the top row down, left to right within a row."
    ],
    "answer": "Sage.",
    "why": "The completed grid reads S · A · G · E in the circled cells (r5c4, r6c5, r6c6, r8c4).",
    "id": 284
  },
  {
    "title": "The year the beach made music",
    "kind": "Word search",
    "level": "Hard",
    "intro": "A marching band posed on the sand. Its caption lists ten percussion instruments and one instruction for the photographer. What should the band do? Look in any of eight directions.",
    "grid": [
      "ITWIECOWBELLW",
      "MAIPQSOAKFODH",
      "CAEMEJNBQFVMH",
      "RQSVPEUMITIWA",
      "ZQAAZAIWRYXGX",
      "TLSVBGNIKKBKE",
      "CAYEOAAIEWGCB",
      "QBDNDNCSZSIYT",
      "GMGFGOHHNDKMK",
      "MIBLPFIGICSBB",
      "UREENIRUOBMAT",
      "QAHFMEYGRIXLZ",
      "QMHHHAERANSAI"
    ],
    "locations": {
      "TAMBOURINE": [
        [
          12,
          10
        ],
        [
          3,
          10
        ]
      ],
      "TRIANGLE": [
        [
          9,
          3
        ],
        [
          2,
          10
        ]
      ],
      "MARIMBA": [
        [
          1,
          12
        ],
        [
          1,
          6
        ]
      ],
      "TIMPANI": [
        [
          1,
          0
        ],
        [
          7,
          6
        ]
      ],
      "COWBELL": [
        [
          5,
          0
        ],
        [
          11,
          0
        ]
      ],
      "CYMBAL": [
        [
          11,
          6
        ],
        [
          11,
          11
        ]
      ],
      "CABASA": [
        [
          6,
          7
        ],
        [
          1,
          2
        ]
      ],
      "CLAVES": [
        [
          0,
          6
        ],
        [
          5,
          1
        ]
      ],
      "SNARE": [
        [
          10,
          12
        ],
        [
          6,
          12
        ]
      ],
      "GONG": [
        [
          5,
          5
        ],
        [
          2,
          8
        ]
      ]
    },
    "rings": [
      [
        2,
        0
      ],
      [
        6,
        0
      ],
      [
        9,
        0
      ],
      [
        7,
        1
      ],
      [
        10,
        2
      ],
      [
        5,
        4
      ],
      [
        12,
        5
      ],
      [
        5,
        7
      ],
      [
        1,
        9
      ],
      [
        6,
        10
      ],
      [
        11,
        11
      ]
    ],
    "questions": [
      "After finding all ten words, read only the circled letters left unhighlighted, in ordinary reading order. What do they tell you?"
    ],
    "answer": "Wave.",
    "why": "The listed words account for seven circled letters. The uncovered circles, read left to right from the top row down, spell WAVE.",
    "id": 285
  },
  {
    "kind": "Detective skills",
    "title": "The chart with a missing island",
    "level": "Hard",
    "intro": "A panorama for the steamer lounge was made from three panels. On the flat worktable the panels join only where the painted skyline continues across the seam. The old framed view begins with a lighthouse and ends with a windmill.",
    "clues": [
      "All three panels are upright and use all their edges as listed. Panels may switch places but may not be turned over. The seam shapes must match exactly."
    ],
    "questions": [
      "In which order do the panels belong?",
      "The owner sees a dark tower twice in the finished view. Does that prove a duplicate panel?"
    ],
    "answer": "Brass, ash, pearl. The two dark towers may simply be two painted features.",
    "why": "Only brass starts with the lighthouse. Its right-hand notch meets ash’s left notch, then ash’s ridge meets pearl’s ridge. Pearl ends at the windmill. The panels are all used once; the matching record gives no reason to assume repeated scenery means a duplicate board.",
    "tables": [
      [
        "Edge register",
        [
          "Panel",
          "Left edge",
          "Right edge"
        ],
        [
          [
            "Pearl",
            "Ridge",
            "Windmill"
          ],
          [
            "Brass",
            "Lighthouse",
            "Notch"
          ],
          [
            "Ash",
            "Notch",
            "Ridge"
          ]
        ]
      ]
    ],
    "id": 286
  },
  {
    "title": "The drummer plays the gaps",
    "level": "Hard",
    "intro": "A drummer meant to send a short message. A listener wrote down the numbered beats on which a stick struck the drum, beginning with the signal on beat 1. The silences between strikes carry the letters.",
    "clues": [
      "Count only the completely silent beats between each two consecutive strikes. One silent beat means A, two mean B, and so on.",
      "The first four letters name an object, the last three a number in words."
    ],
    "questions": [
      "Which item number does the rhythm name?"
    ],
    "answer": "Bell two.",
    "why": "The silent runs are 2, 5, 12, 12, 20, 23 and 15 beats, spelling BELL TWO. For example the strikes on 1 and 4 leave beats 2 and 3 silent.",
    "exhibit": "Strikes on 1 · 4 · 10 · 23 · 36 · 57 · 81 · 97",
    "kind": "Codebreaking",
    "id": 287
  },
  {
    "kind": "Whodunit",
    "title": "The plaque in two languages",
    "level": "Medium",
    "intro": "Someone anonymously corrected a museum plaque at the opening. The museum director knows the volunteer personally read both the original French memorandum and the Italian inventory. The staff joke that four bilingual volunteers must all be equally good suspects.",
    "clues": [
      "The staff register is complete. A check means fluent enough to read a source unaided. Each volunteer worked alone; the correction came from one of the four."
    ],
    "questions": [
      "Which volunteer fits?",
      "Why is the staff’s word “bilingual” insufficient?"
    ],
    "answer": "Rosa. Only Rosa reads this particular pair of languages.",
    "why": "Jules reads French, but the other language is Dutch. Tala and Moe read Italian without French. Everyone may be bilingual; which two languages they know matters.",
    "tables": [
      [
        "Staff language register",
        [
          "Volunteer",
          "First recorded language",
          "Second recorded language"
        ],
        [
          [
            "Jules",
            "French",
            "Dutch"
          ],
          [
            "Rosa",
            "Italian",
            "French"
          ],
          [
            "Tala",
            "English",
            "Italian"
          ],
          [
            "Moe",
            "Italian",
            "Spanish"
          ]
        ]
      ]
    ],
    "id": 288
  },
  {
    "kind": "Logic",
    "title": "Scores on the quay-side skittle board",
    "level": "Hard",
    "intro": "Four inns played one skittles match against every other inn. No match was drawn. The board kept the totals but lost the little flags marking the individual winners.",
    "clues": [
      "Finch and Swan won two matches apiece. Wren and Tern won one match apiece.",
      "A steward remembers Swan beating Finch. Tern beat Wren. Finch beat Wren."
    ],
    "questions": [
      "Name the winner of each match."
    ],
    "answer": "Finch–Wren: Finch; Finch–Swan: Swan; Finch–Tern: Finch; Wren–Swan: Wren; Wren–Tern: Tern; Swan–Tern: Swan.",
    "why": "Finch lost to Swan and beat Wren, so it also needed the win against Tern to reach two. Tern used its sole win against Wren and must lose to Swan. Swan has now won twice and must lose to Wren, giving Wren its required win.",
    "tableform": {
      "rows": [
        "Finch vs Wren",
        "Finch vs Swan",
        "Finch vs Tern",
        "Wren vs Swan",
        "Wren vs Tern",
        "Swan vs Tern"
      ],
      "cols": [
        [
          "Winner",
          "Finch",
          "Wren",
          "Swan",
          "Tern"
        ]
      ]
    },
    "id": 289
  },
  {
    "kind": "Detective skills",
    "title": "Water marks in the sampler",
    "level": "Hard",
    "intro": "The undertaker’s old shop kept a flood sampler on its wall. Four wet bands are marked in pencil, measured upward from a fixed stone sill. A newspaper says water fell a little, rose a little, and never returned to its original height.",
    "clues": [
      "There were exactly four readings and their times are shown. The water height changed continuously. The newspaper’s claim refers to any time after the first reading, including times between readings."
    ],
    "questions": [
      "Which part of the claim can you disprove for certain?",
      "Between which two readings must the original height have occurred again?"
    ],
    "answer": "The water did return to its original height between the second and third readings.",
    "why": "The first reading was 7 inches. At 10:00 it was below that at 5; at 11:00 it was above at 9. A continuous level moving from 5 to 9 must pass through 7, even if no one took a reading at the precise moment.",
    "tables": [
      [
        "Sill marks",
        [
          "Time",
          "Height in inches"
        ],
        [
          [
            "09:00",
            "7"
          ],
          [
            "10:00",
            "5"
          ],
          [
            "11:00",
            "9"
          ],
          [
            "12:00",
            "8"
          ]
        ]
      ]
    ],
    "id": 290
  },
  {
    "title": "The flag at the cricket pavilion",
    "kind": "Crossword",
    "level": "Hard",
    "intro": "A shower cut short the match. The scorer tucked a small message about the flag’s color inside the pavilion crossword.",
    "entries": [
      {
        "x": 0,
        "y": 7,
        "dir": "Across",
        "word": "BAIL",
        "clue": "Small crosspiece atop the stumps"
      },
      {
        "x": 2,
        "y": 4,
        "dir": "Down",
        "word": "INNINGS",
        "clue": "A team’s turn to bat"
      },
      {
        "x": 1,
        "y": 4,
        "dir": "Across",
        "word": "PITCH",
        "clue": "Prepared strip between the wickets"
      },
      {
        "x": 2,
        "y": 10,
        "dir": "Across",
        "word": "SPIN",
        "clue": "Bowling that turns after bouncing"
      },
      {
        "x": 5,
        "y": 8,
        "dir": "Down",
        "word": "RUN",
        "clue": "Basic unit of scoring"
      },
      {
        "x": 3,
        "y": 2,
        "dir": "Down",
        "word": "BAT",
        "clue": "Flat-faced blade used by the striker"
      },
      {
        "x": 4,
        "y": 8,
        "dir": "Across",
        "word": "CREASE",
        "clue": "Marked line near the wicket"
      },
      {
        "x": 6,
        "y": 5,
        "dir": "Down",
        "word": "EDGE",
        "clue": "Glancing contact with the side of the bat"
      },
      {
        "x": 5,
        "y": 0,
        "dir": "Down",
        "word": "CATCH",
        "clue": "Dismiss a batter by taking the ball before it lands"
      },
      {
        "x": 3,
        "y": 0,
        "dir": "Across",
        "word": "WICKET",
        "clue": "Three stumps and two bails form one"
      },
      {
        "x": 4,
        "y": 6,
        "dir": "Across",
        "word": "PAD",
        "clue": "Protective covering on a batter’s shin"
      }
    ],
    "rings": [
      [
        6,
        7
      ],
      [
        5,
        8
      ],
      [
        6,
        8
      ],
      [
        9,
        8
      ],
      [
        5,
        10
      ]
    ],
    "questions": [
      "What do the circled letters spell? Read from the top row down, left to right within a row."
    ],
    "answer": "Green.",
    "why": "The completed grid reads G · R · E · E · N in the circled cells (r8c7, r9c6, r9c7, r9c10, r11c6).",
    "id": 291
  },
  {
    "title": "A kitchen sealed in an envelope",
    "kind": "Word search",
    "level": "Medium",
    "intro": "The cook packed ten pantry staples for the lighthouse family. She hid the name of the next delivery boat among them. What was it called? Look in any of eight directions.",
    "grid": [
      "NQOJIYNKRFLO",
      "SRWWESZHLMTA",
      "SYYLBVUOXSUT",
      "YHRRQDUGABHM",
      "SAQXFRORAWYE",
      "BMLENTILSRUA",
      "JLSNHMTOQOZL",
      "IWNRVFUERALY",
      "WRATOXXFLFFK",
      "LAEMNROCTLIK",
      "BWBGKTOGASIT",
      "RICEFOVVCGGM"
    ],
    "locations": {
      "CORNMEAL": [
        [
          7,
          9
        ],
        [
          0,
          9
        ]
      ],
      "LENTILS": [
        [
          2,
          5
        ],
        [
          8,
          5
        ]
      ],
      "OATMEAL": [
        [
          11,
          0
        ],
        [
          11,
          6
        ]
      ],
      "BARLEY": [
        [
          0,
          5
        ],
        [
          5,
          0
        ]
      ],
      "MILLET": [
        [
          11,
          11
        ],
        [
          6,
          6
        ]
      ],
      "BEANS": [
        [
          2,
          10
        ],
        [
          2,
          6
        ]
      ],
      "FLOUR": [
        [
          9,
          0
        ],
        [
          5,
          4
        ]
      ],
      "SUGAR": [
        [
          5,
          1
        ],
        [
          9,
          5
        ]
      ],
      "SAGO": [
        [
          9,
          10
        ],
        [
          6,
          10
        ]
      ],
      "RICE": [
        [
          0,
          11
        ],
        [
          3,
          11
        ]
      ]
    },
    "rings": [
      [
        10,
        0
      ],
      [
        5,
        1
      ],
      [
        7,
        2
      ],
      [
        6,
        3
      ],
      [
        8,
        3
      ],
      [
        11,
        4
      ],
      [
        8,
        7
      ],
      [
        4,
        9
      ],
      [
        11,
        9
      ],
      [
        7,
        10
      ],
      [
        1,
        11
      ]
    ],
    "questions": [
      "After finding all ten words, read only the circled letters left unhighlighted, in ordinary reading order. What do they tell you?"
    ],
    "answer": "Lark.",
    "why": "The listed words account for seven circled letters. The uncovered circles, read left to right from the top row down, spell LARK.",
    "id": 292
  },
  {
    "kind": "Whodunit",
    "title": "A forgery in the oyster illustrations",
    "level": "Hard",
    "intro": "Three copied oyster illustrations are offered as originals. A fourth is the genuine drawing made before the naturalist added a small scar to every later version. The labels all name the same illustrator. Sal works out the genuine owner from the drawing and the paper rather than the signature.",
    "clues": [
      "The genuine early drawing has no scar and is on rag paper. Later copies can lack the scar if someone traced the early drawing, and old rag paper could be reused. Exactly one sheet meets both early conditions.",
      "Each seller offered exactly one sheet; the two exhibit lists refer to the same sheets as numbered."
    ],
    "questions": [
      "Which seller owns the original?",
      "Which copy shows why the absence of the scar is not enough?"
    ],
    "answer": "Effie owns the original, sheet 4. Wade’s sheet 1 also lacks a scar but uses wood-pulp paper.",
    "why": "Sheets 1 and 4 lack the scar. Sheets 3 and 4 are on rag paper. Only sheet 4 meets both requirements, and the receipt attaches it to Effie.",
    "tables": [
      [
        "Magnified details",
        [
          "Sheet",
          "Scar",
          "Paper"
        ],
        [
          [
            "1",
            "Absent",
            "Wood pulp"
          ],
          [
            "2",
            "Present",
            "Wood pulp"
          ],
          [
            "3",
            "Present",
            "Rag"
          ],
          [
            "4",
            "Absent",
            "Rag"
          ]
        ]
      ],
      [
        "Consignment slips",
        [
          "Seller",
          "Sheet"
        ],
        [
          [
            "Nell",
            "3"
          ],
          [
            "Effie",
            "4"
          ],
          [
            "Wade",
            "1"
          ],
          [
            "Ada",
            "2"
          ]
        ]
      ]
    ],
    "id": 293
  },
  {
    "kind": "Detective skills",
    "title": "One tune too soon",
    "level": "Medium",
    "intro": "A mechanical music box plays a complete cycle of four different tunes. When Sal found it, a new slip had been pasted over the third line of the keeper’s note. The note claims to record five consecutive tunes from an undisturbed cycle.",
    "clues": [
      "The maker’s order is Reel, March, Air, Waltz, repeating. The first line can be at any point of the cycle. Exactly one line of the note names the wrong tune."
    ],
    "questions": [
      "Which line is wrong and what should it read?",
      "Which pair of equal entries is perfectly proper?"
    ],
    "answer": "Line 3 should be Waltz. Lines 1 and 5 correctly both read March.",
    "why": "Starting at March gives March, Air, Waltz, Reel, March. A four-tune cycle comes back to its starting tune at the fifth entry.",
    "tables": [
      [
        "Keeper’s note",
        [
          "Line",
          "Tune"
        ],
        [
          [
            "1",
            "March"
          ],
          [
            "2",
            "Air"
          ],
          [
            "3",
            "Reel"
          ],
          [
            "4",
            "Reel"
          ],
          [
            "5",
            "March"
          ]
        ]
      ]
    ],
    "id": 294
  },
  {
    "title": "The jumble at the pier kiosk",
    "level": "Easy",
    "intro": "A little machine rearranged the letters of four cargo labels and kept the first letter of each correct item as its dispatch code. The clerk still has the muddles and her definitions.",
    "clues": [
      "Use every letter of each muddle once. Keep the initial of each repaired label.",
      "Read the four initials down the list."
    ],
    "questions": [
      "What code should go on the dispatch slip?"
    ],
    "answer": "SALT.",
    "why": "The labels are SPOOL, AWL, LAMP and TIN. Taking their first letters gives SALT.",
    "tables": [
      [
        "Damaged labels",
        [
          "Muddle",
          "What the item does"
        ],
        [
          [
            "LOOPS",
            "Holds wound thread"
          ],
          [
            "LAW",
            "Pierces holes in leather"
          ],
          [
            "PALM",
            "Lights the table"
          ],
          [
            "NIT",
            "Metal container for biscuits"
          ]
        ]
      ]
    ],
    "kind": "Codebreaking",
    "id": 295
  },
  {
    "kind": "Logic",
    "title": "A round of lantern shadows",
    "level": "Hard",
    "intro": "Five storytellers sat around a round table under five lanterns. The chair at the door belongs to Ena. Facing down from above, the clerk numbered that chair 1, then continued clockwise to 5.",
    "clues": [
      "Cy sat immediately counterclockwise of Ena. Exactly one person lay on the clockwise walk from Del to Bram, excluding Del and Bram themselves.",
      "Pia was a neighbor of Bram. Del was not a neighbor of Cy."
    ],
    "questions": [
      "Record the storytellers in clockwise order from the door."
    ],
    "answer": "Ena, Del, Pia, Bram, Cy.",
    "why": "Cy occupies chair 5. A clockwise step of two from Del to Bram leaves the pair 2 and 4, 3 and 5, or 4 and 1 among the chairs still possible for Del. Positions 1 and 5 are occupied, forcing Del into 2 and Bram into 4. Pia fills 3; both remaining neighbor clues check.",
    "tableform": {
      "rows": [
        "1 · Door",
        "2",
        "3",
        "4",
        "5"
      ],
      "cols": [
        [
          "Storyteller",
          "Ena",
          "Bram",
          "Cy",
          "Del",
          "Pia"
        ]
      ]
    },
    "id": 296
  },
  {
    "title": "Last dance of the paper lanterns",
    "kind": "Crossword",
    "level": "Medium",
    "intro": "The lantern parade ended at a shuttered stall. The organizer circled letters in the craft crossword to say what the stall once sold.",
    "entries": [
      {
        "x": 6,
        "y": 0,
        "dir": "Across",
        "word": "WICK",
        "clue": "Thread that draws fuel to a flame"
      },
      {
        "x": 6,
        "y": 0,
        "dir": "Down",
        "word": "WIRE",
        "clue": "Thin metal for a hanging loop"
      },
      {
        "x": 1,
        "y": 3,
        "dir": "Across",
        "word": "TISSUE",
        "clue": "Delicate paper that lets light through"
      },
      {
        "x": 8,
        "y": 0,
        "dir": "Down",
        "word": "CORD",
        "clue": "Line used to string a row of lanterns"
      },
      {
        "x": 4,
        "y": 3,
        "dir": "Down",
        "word": "SHADE",
        "clue": "Cover that softens a light"
      },
      {
        "x": 0,
        "y": 7,
        "dir": "Across",
        "word": "FRAME",
        "clue": "Skeleton supporting the paper"
      },
      {
        "x": 1,
        "y": 7,
        "dir": "Down",
        "word": "RING",
        "clue": "Circular hoop at the lantern’s base"
      },
      {
        "x": 2,
        "y": 5,
        "dir": "Across",
        "word": "SEAM",
        "clue": "Join between two paper panels"
      },
      {
        "x": 8,
        "y": 2,
        "dir": "Across",
        "word": "RIB",
        "clue": "One narrow support along its side"
      },
      {
        "x": 1,
        "y": 10,
        "dir": "Across",
        "word": "GLOW",
        "clue": "Steady light from within the lantern"
      }
    ],
    "rings": [
      [
        1,
        3
      ],
      [
        3,
        5
      ],
      [
        4,
        5
      ]
    ],
    "questions": [
      "What do the circled letters spell? Read from the top row down, left to right within a row."
    ],
    "answer": "Tea.",
    "why": "The completed grid reads T · E · A in the circled cells (r4c2, r6c4, r6c5).",
    "id": 297
  },
  {
    "title": "The trophy in the glove drawer",
    "kind": "Word search",
    "level": "Easy",
    "intro": "A case in the sports club held ten kinds of sporting equipment. The old label spells out the emblem on the trophy. Which emblem? Look across to the right, down, or diagonally down.",
    "grid": [
      "AXSSZMOVRJ",
      "RPHHMRKSEE",
      "RTPUZAARCU",
      "OPATCDLJOM",
      "WAKTDSALIT",
      "WDWLPVKTEL",
      "JDEEERTAOT",
      "OLXLWXQKTW",
      "VEIMBATONE",
      "LNRACKETNU"
    ],
    "locations": {
      "SHUTTLE": [
        [
          3,
          0
        ],
        [
          3,
          6
        ]
      ],
      "JAVELIN": [
        [
          7,
          3
        ],
        [
          1,
          9
        ]
      ],
      "RACKET": [
        [
          2,
          9
        ],
        [
          7,
          9
        ]
      ],
      "MALLET": [
        [
          4,
          1
        ],
        [
          9,
          6
        ]
      ],
      "PADDLE": [
        [
          1,
          3
        ],
        [
          1,
          8
        ]
      ],
      "SADDLE": [
        [
          7,
          1
        ],
        [
          2,
          6
        ]
      ],
      "BATON": [
        [
          4,
          8
        ],
        [
          8,
          8
        ]
      ],
      "SKATE": [
        [
          5,
          4
        ],
        [
          9,
          8
        ]
      ],
      "ARROW": [
        [
          0,
          0
        ],
        [
          0,
          4
        ]
      ],
      "MITT": [
        [
          9,
          3
        ],
        [
          6,
          6
        ]
      ]
    },
    "rings": [
      [
        3,
        0
      ],
      [
        3,
        1
      ],
      [
        8,
        2
      ],
      [
        4,
        4
      ],
      [
        1,
        5
      ],
      [
        5,
        6
      ],
      [
        0,
        7
      ],
      [
        9,
        7
      ],
      [
        4,
        8
      ],
      [
        6,
        8
      ],
      [
        4,
        9
      ],
      [
        8,
        9
      ]
    ],
    "questions": [
      "After finding all ten words, read only the circled letters left unhighlighted, in ordinary reading order. What do they tell you?"
    ],
    "answer": "Crown.",
    "why": "The listed words account for seven circled letters. The uncovered circles, read left to right from the top row down, spell CROWN.",
    "id": 298
  },
  {
    "kind": "Whodunit",
    "title": "An uninvited name at dinner",
    "level": "Hard",
    "intro": "There is a murder in the new play at the Mariner’s Hall. To cast the surprise detective, the director invites the only guest whose place card could be inserted into an alphabetized row between two fixed cards without moving anyone else out of alphabetical order. Four cards from the cast list are face down.",
    "clues": [
      "Use ordinary alphabetical order by surname, comparing letters from left to right and putting a shorter prefix first. The fixed neighbors of the missing card are MARLIN and MARMOT.",
      "The extras’ cards read MARLOW, MARBLE, MARR and MARE. One card belongs in that gap."
    ],
    "questions": [
      "Which guest played the unbilled detective?",
      "Which comparison separates the winner from MARLIN?"
    ],
    "answer": "Marlow. After the shared MARL, O follows I.",
    "why": "MARBLE and MARE both come before MARLIN because B and E precede L. MARR comes after MARMOT because its second R follows M. MARLOW follows MARLIN at the fifth letter and precedes MARMOT at the fourth.",
    "id": 299
  },
  {
    "title": "The night the moon left the harbor",
    "level": "Hard",
    "intro": "At the Lantern Quay centenary, the little silver moon disappeared from the display of tide clocks. The constable wrote “theft” in his notebook. The curator crossed it out, laid three exhibits on the counter and said, “Find out who signed for it, then tell me what to write instead.”",
    "tables": [
      [
        "Two frames from the quay camera",
        [
          "Frame",
          "What survived"
        ],
        [
          [
            "A · fairground clock 8:10",
            "The whole moon is still on its stand. The second collector has already gone."
          ],
          [
            "B · fairground clock 8:17",
            "The stand is empty. The fourth collector has not yet arrived."
          ]
        ]
      ],
      [
        "Collection rail, in harbor time",
        [
          "Slot",
          "Appointment"
        ],
        [
          [
            "1",
            "8:00"
          ],
          [
            "2",
            "8:04"
          ],
          [
            "3",
            "8:08"
          ],
          [
            "4",
            "8:12"
          ]
        ]
      ],
      [
        "Curator’s receipt book",
        [
          "Collector",
          "Four seal words, printed in order"
        ],
        [
          [
            "Bea",
            "HOLD · GIFT · LEND · SELL"
          ],
          [
            "Inez",
            "HOLD · MOVE · SELL · GIFT"
          ],
          [
            "Jules",
            "GIFT · SELL · HOLD · MOVE"
          ],
          [
            "Otis",
            "SELL · MOVE · GIFT · HOLD"
          ]
        ]
      ],
      [
        "Directory for this evening",
        [
          "Seal word",
          "Meaning"
        ],
        [
          [
            "GIFT",
            "Ownership passes to the collector."
          ],
          [
            "HOLD",
            "Keep in the bonded store."
          ],
          [
            "LEND",
            "A one-night loan to the children’s moon theater."
          ],
          [
            "MOVE",
            "Move to a different museum case."
          ],
          [
            "SELL",
            "Sold at the fundraising auction."
          ]
        ]
      ]
    ],
    "clues": [
      "The fairground clock is six minutes fast. A collector’s handoff happens on the minute of their appointment. Exactly one collector took the moon; all other handoffs concerned other exhibits.",
      "Otis collected immediately before Bea. Inez collected before Otis. Jules did not take the first slot.",
      "A torn duplicate from the rail supplies one more detail: Bea had already collected when Jules arrived.",
      "The photograph of the carbon receipt shows a punch through one word, but the ink on that word is gone. The clerk always punched the first word of a collector’s row for slot 1, the second for slot 2, and so on."
    ],
    "questions": [
      "Between which two harbor-clock readings did the moon leave, and which appointment falls in that interval?",
      "Who signed for the moon? What did the punched receipt authorize, and where should the constable go to see it?"
    ],
    "answer": "Bea signed for a one-night loan to the children’s moon theater at 8:08.",
    "why": "Subtract six minutes: the moon was still there after the 8:04 handoff and gone by 8:11. Only slot 3, at 8:08, fits. To identify its collector, notice that Inez precedes the Otis–Bea pair and Jules cannot be first. This alone allows Inez, Jules, Otis, Bea as well as other arrangements; the extra stub showing Bea collected before Jules fixes the order as Inez, Otis, Bea, Jules. The third word on Bea’s row is LEND. The directory supplies the destination and the return after one night.",
    "kind": "Detective skills",
    "id": 300
  }
];
