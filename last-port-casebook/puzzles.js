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
  }
];
