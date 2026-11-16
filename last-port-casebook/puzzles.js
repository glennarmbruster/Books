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
  }
];
