const ACRONYM_BANK = [
  {
    "id": "a1",
    "prompt": "What does DISA stand for?",
    "options": [
      "Defense Information Systems Agency",
      "Defense Intelligence Security Activity",
      "Department of Information Support Authority",
      "Defense Integrated Systems Administration"
    ],
    "correctIndex": 0,
    "explanation": "DISA is the Defense Information Systems Agency.",
    "tags": [
      "DISA",
      "DCS"
    ]
  },
  {
    "id": "a2",
    "prompt": "What does DISN stand for?",
    "options": [
      "Defense Information Systems Network",
      "Department of Integrated Service Nodes",
      "Defense Internet Services Network",
      "Distributed Information Systems Network"
    ],
    "correctIndex": 0,
    "explanation": "DISN is the Defense Information Systems Network.",
    "tags": [
      "DISN",
      "Enclaves"
    ]
  },
  {
    "id": "a3",
    "prompt": "What does NIPRNET stand for?",
    "options": [
      "Non-classified Information Protocol Routed Network",
      "Navy Integrated Protocol Routing Network",
      "National Internet Protocol Routing Network",
      "Non-secure Integrated Packet Routing Network"
    ],
    "correctIndex": 0,
    "explanation": "NIPRNET is the Non-classified Information Protocol Routed Network.",
    "tags": [
      "NIPRNET",
      "DISN"
    ]
  },
  {
    "id": "a4",
    "prompt": "What does SIPRNET stand for?",
    "options": [
      "Secret Internet Protocol Router Network",
      "Secret Information Protocol Routed Network",
      "Secure Integrated Protocol Routed Network",
      "Sensitive Information Packet Routing Network"
    ],
    "correctIndex": 1,
    "explanation": "SIPRNET is the Secret Information Protocol Routed Network.",
    "tags": [
      "SIPRNET",
      "DISN"
    ]
  },
  {
    "id": "a5",
    "prompt": "What does JWICS stand for?",
    "options": [
      "Joint Worldwide Intelligence Communications System",
      "Joint Warfighter Information Control System",
      "Joint Wireless Intelligence Communications Suite",
      "Joint Worldwide Integrated Comms Service"
    ],
    "correctIndex": 0,
    "explanation": "JWICS is the Joint Worldwide Intelligence Communications System (SCI portion).",
    "tags": [
      "JWICS",
      "DISN"
    ]
  },
  {
    "id": "a6",
    "prompt": "What does NCTAMS stand for?",
    "options": [
      "Naval Computer and Telecommunications Area Master Stations",
      "Navy Cyber Telecommunications and Management Stations",
      "Naval Communications and Terminal Area Management Stations",
      "National Computer and Telecommunications Master Station"
    ],
    "correctIndex": 0,
    "explanation": "NCTAMS are Naval Computer and Telecommunications Area Master Stations.",
    "tags": [
      "NCTAMS",
      "Shore"
    ]
  },
  {
    "id": "a7",
    "prompt": "What does NCTS stand for?",
    "options": [
      "Naval Computer and Telecommunications Station",
      "Navy Circuit and Terminal Service",
      "Naval Communications Technical Support",
      "Network Control and Transmission Station"
    ],
    "correctIndex": 0,
    "explanation": "NCTS are Naval Computer and Telecommunications Stations.",
    "tags": [
      "NCTS",
      "Shore"
    ]
  },
  {
    "id": "a8",
    "prompt": "What does FLTNOC stand for?",
    "options": [
      "Fleet Network Operations Center",
      "Fleet Telecommunications Operations Cell",
      "Fleet Network Ordnance Command",
      "Fleet Node Operations Center"
    ],
    "correctIndex": 0,
    "explanation": "FLTNOCs provide critical IP services and act as regional gateways to DISN.",
    "tags": [
      "FLTNOC",
      "Shore"
    ]
  },
  {
    "id": "a9",
    "prompt": "What does JFTOC stand for?",
    "options": [
      "Joint Fleet Telecommunications Operations Center",
      "Joint Force Tactical Operations Center",
      "Joint Fleet Terminal Operations Center",
      "Joint Frequency and Transmission Operations Cell"
    ],
    "correctIndex": 0,
    "explanation": "Each NCTAMS operates a JFTOC as the day-to-day operational control point.",
    "tags": [
      "JFTOC",
      "NCTAMS"
    ]
  },
  {
    "id": "a10",
    "prompt": "What does NTS stand for?",
    "options": [
      "Naval Telecommunications System",
      "National Transmission Service",
      "Navy Tactical Satellite",
      "Network Transport Segment"
    ],
    "correctIndex": 0,
    "explanation": "NTS includes end terminals, transmission, switching, crypto, and control devices in the Navy.",
    "tags": [
      "NTS"
    ]
  },
  {
    "id": "a11",
    "prompt": "What does DCS stand for?",
    "options": [
      "Defense Communications System",
      "Department Communications Standard",
      "Distributed Control System",
      "Defense Cryptologic Service"
    ],
    "correctIndex": 0,
    "explanation": "DCS supports MILDEPs and other DoD activities; DISA provides operational direction.",
    "tags": [
      "DCS",
      "DISA"
    ]
  },
  {
    "id": "a12",
    "prompt": "What does DSSCS stand for?",
    "options": [
      "Defense Special Security Communication System",
      "Defense Secure Satellite Communications System",
      "Department of Security Signal Communications Service",
      "Defense Strategic Security Communications Suite"
    ],
    "correctIndex": 0,
    "explanation": "DSSCS is a worldwide special purpose comms system used to process record message traffic and can contain SCI.",
    "tags": [
      "DSSCS",
      "Messages"
    ]
  },
  {
    "id": "a13",
    "prompt": "What does CRITIC refer to in naval messaging?",
    "options": [
      "A critical information report sent at the highest priority via the fastest path",
      "A retransmission control signal used to refile corrupted traffic",
      "A special handling caveat for NATO dissemination",
      "A service message used for routine circuit status"
    ],
    "correctIndex": 0,
    "explanation": "CRITIC reports critical info to senior decision makers; short, formatted, highest priority.",
    "tags": [
      "CRITIC",
      "Messages"
    ]
  },
  {
    "id": "a14",
    "prompt": "What does PLA stand for in message addressing?",
    "options": [
      "Plain Language Address",
      "Primary Link Authorization",
      "Packet-Level Address",
      "Protected Line Assignment"
    ],
    "correctIndex": 0,
    "explanation": "PLA is an address written in an easily understood plain language format.",
    "tags": [
      "PLA",
      "Addressing"
    ]
  },
  {
    "id": "a15",
    "prompt": "What does AIG stand for in message addressing?",
    "options": [
      "Address Indicator Group",
      "Administrative Information Group",
      "Allied Information Gateway",
      "Action Indicator Group"
    ],
    "correctIndex": 0,
    "explanation": "AIG represents a collection of 16 or more frequently occurring groups of PLA.",
    "tags": [
      "AIG",
      "Addressing"
    ]
  },
  {
    "id": "a16",
    "prompt": "What does CAG stand for in message addressing?",
    "options": [
      "Collective Address Designator",
      "Command Address Group",
      "Collective Authority Grant",
      "Circuit Address Gateway"
    ],
    "correctIndex": 0,
    "explanation": "CAG represents 4 or more PLAs sharing common operational/admin chain of command.",
    "tags": [
      "CAG",
      "Addressing"
    ]
  },
  {
    "id": "a17",
    "prompt": "What does NAVMACS stand for?",
    "options": [
      "Naval Modular Automated Communications System",
      "Navy Automated Message and Control System",
      "Naval Maritime Communications Suite",
      "National Automated Communications Service"
    ],
    "correctIndex": 0,
    "explanation": "NAVMACS is a shipboard message processing system built to command mission requirements.",
    "tags": [
      "NAVMACS",
      "Shipboard"
    ]
  },
  {
    "id": "a21",
    "prompt": "Which handling marker refers to nuclear weapon design/manufacture/use data?",
    "options": [
      "RD",
      "FRD",
      "SPECAT",
      "LIMDIS"
    ],
    "correctIndex": 0,
    "explanation": "Restricted Data (RD) covers nuclear weapon design/manufacture/use and special nuclear material.",
    "tags": [
      "Handling",
      "RD"
    ]
  },
  {
    "id": "a22",
    "prompt": "Which handling marker refers to defense info removed from RD but still classified and safeguarded?",
    "options": [
      "FRD",
      "RD",
      "FOUO",
      "EFTO"
    ],
    "correctIndex": 0,
    "explanation": "Formerly Restricted Data (FRD) is removed from RD but remains classified/safeguarded.",
    "tags": [
      "Handling",
      "FRD"
    ]
  },
  {
    "id": "a23",
    "prompt": "What does EFTO mean?",
    "options": [
      "Encrypted for Transmission Only",
      "Encrypted for Tactical Operations",
      "Electronic Format Transfer Order",
      "External Facility Transmission Only"
    ],
    "correctIndex": 0,
    "explanation": "EFTO indicates potential value if analyzed but not classified; not required.",
    "tags": [
      "Handling",
      "EFTO"
    ]
  },
  {
    "id": "a24",
    "prompt": "What does LIMDIS mean?",
    "options": [
      "Limited Distribution",
      "Limited Disclosure",
      "Line Message Dissemination",
      "Link Distribution"
    ],
    "correctIndex": 0,
    "explanation": "LIMDIS restricts distribution to specific people/recipients.",
    "tags": [
      "Handling",
      "LIMDIS"
    ]
  },
  {
    "id": "a25",
    "prompt": "What does FOUO mean?",
    "options": [
      "For Official Use Only",
      "For Operational Use Only",
      "Federal Office Use Only",
      "Field Order Use Only"
    ],
    "correctIndex": 0,
    "explanation": "FOUO is used on unclassified info that must be held from public release.",
    "tags": [
      "Handling",
      "FOUO"
    ]
  },
  {
    "id": "a26",
    "prompt": "In operating signals, what does inserting 'INT' before a Q or Z signal indicate?",
    "options": [
      "It makes the signal an interrogative (asking)",
      "It marks the signal as encrypted",
      "It marks the message as Immediate precedence",
      "It indicates internal routing only"
    ],
    "correctIndex": 0,
    "explanation": "Per Lesson 2, 'INT' is inserted when ASKING a Q or Z signal.",
    "tags": [
      "Q/Z Signals"
    ]
  },
  {
    "id": "a27",
    "prompt": "Which Z signal means 'Stand-by' (per Lesson 2)?",
    "options": [
      "ZUJ",
      "ZUE",
      "ZUG",
      "ZBZ"
    ],
    "correctIndex": 0,
    "explanation": "ZUJ means Stand-by.",
    "tags": [
      "Z Signals"
    ]
  },
  {
    "id": "a28",
    "prompt": "Which Z signal means 'Yes' (per Lesson 2)?",
    "options": [
      "ZUE",
      "ZUG",
      "ZUJ",
      "ZBZ"
    ],
    "correctIndex": 0,
    "explanation": "ZUE means Yes.",
    "tags": [
      "Z Signals"
    ]
  },
  {
    "id": "a29",
    "prompt": "Which Z signal means 'No' (per Lesson 2)?",
    "options": [
      "ZUG",
      "ZUE",
      "ZUJ",
      "ZUJ-1"
    ],
    "correctIndex": 0,
    "explanation": "ZUG means No.",
    "tags": [
      "Z Signals"
    ]
  },
  {
    "id": "a30",
    "prompt": "What does QRT refer to (per Lesson 2)?",
    "options": [
      "Signal intelligibility on a 1–5 scale",
      "Signal strength on a 1–5 scale",
      "Routing priority on a 1–5 scale",
      "Circuit reliability on a 1–5 scale"
    ],
    "correctIndex": 0,
    "explanation": "QRT is signal intelligibility rated 1–5 (1 unacceptable to 5 no corruption).",
    "tags": [
      "Q Signals",
      "QRT"
    ]
  },
  {
    "id": "a34",
    "prompt": "In a GENSER message, what does OSRI stand for?",
    "options": [
      "Originating Station’s Routing Indicator",
      "Operational Signal Routing Index",
      "Originator Security Routing Identifier",
      "Office Symbol Routing Instruction"
    ],
    "correctIndex": 0,
    "explanation": "OSRI (positions 10–16) indicates the originating station routing indicator.",
    "tags": [
      "GENSER",
      "Header"
    ]
  },
  {
    "id": "a35",
    "prompt": "In a GENSER message, what does SSN stand for?",
    "options": [
      "Station Serial Number",
      "Service Sequence Number",
      "Signal Security Number",
      "Station Status Notice"
    ],
    "correctIndex": 0,
    "explanation": "SSN is the 4-digit serial number (0001–9998) in the header.",
    "tags": [
      "GENSER",
      "Header"
    ]
  },
  {
    "id": "a36",
    "prompt": "What does NIOC stand for?",
    "options": [
      "Naval Information Operations Command",
      "Navy Integrated Operations Center",
      "Naval Intelligence Operations Cell",
      "Network Information Operations Command"
    ],
    "correctIndex": 0,
    "explanation": "NIOC = Navy Information Operations Command.",
    "tags": [
      "NIOC"
    ]
  },
  {
    "id": "a37",
    "prompt": "What does NAVIFOR stand for?",
    "options": [
      "Naval Information Forces",
      "Naval Aviation Forces",
      "Navy Infrastructure Force",
      "Naval Integrated Fleet Operations"
    ],
    "correctIndex": 0,
    "explanation": "NAVIFOR = Naval Information Forces.",
    "tags": [
      "NAVIFOR"
    ]
  },
  {
    "id": "a38",
    "prompt": "What does NETWARCOM stand for?",
    "options": [
      "Naval Network Warfare Command",
      "Network Warfare Communications Command",
      "Naval Enterprise Warfare Command",
      "Naval Network Warfighting Center"
    ],
    "correctIndex": 0,
    "explanation": "NETWARCOM = Naval Network Warfare Command.",
    "tags": [
      "NETWARCOM"
    ]
  },
  {
    "id": "a39",
    "prompt": "What does NCDOC stand for?",
    "options": [
      "Navy Cyber Defense Operations Center",
      "Naval Cyber Defense Operations Command",
      "Navy Cyber Defensive Operations Cell",
      "National Cyber Defense Operations Center"
    ],
    "correctIndex": 0,
    "explanation": "NCDOC = Navy Cyber Defense Operations Center.",
    "tags": [
      "NCDOC"
    ]
  },
  {
    "id": "a40",
    "prompt": "What does NCMS stand for (as used in Lesson 1)?",
    "options": [
      "Navy Communications Security Material System",
      "Naval Cryptologic Material System",
      "Navy Cybersecurity Management System",
      "Naval Communications Material Station"
    ],
    "correctIndex": 0,
    "explanation": "NCMS = Navy Communications Security Material System.",
    "tags": [
      "NCMS"
    ]
  },
  {
    "id": "a41",
    "prompt": "In this training, CMS most directly refers to:",
    "options": [
      "Communications Security Material System",
      "Central Message Service",
      "Command Messaging System",
      "Communications Management Segment"
    ],
    "correctIndex": 0,
    "explanation": "CMS refers to Communications Security Material System (COMSEC account/material management).",
    "tags": [
      "CMS"
    ]
  },
  {
    "id": "a42",
    "prompt": "What does KMI stand for?",
    "options": [
      "Key Management Infrastructure",
      "Keyed Messaging Interface",
      "Knowledge Management Integration",
      "Key Material Inventory"
    ],
    "correctIndex": 0,
    "explanation": "KMI = Key Management Infrastructure.",
    "tags": [
      "KMI"
    ]
  },
  {
    "id": "a43",
    "prompt": "What does EKMS stand for?",
    "options": [
      "Electronic Key Management System",
      "Encrypted Key Management Standard",
      "Electronic Knowledge Management System",
      "Encrypted Key Messaging Service"
    ],
    "correctIndex": 0,
    "explanation": "EKMS = Electronic Key Management System.",
    "tags": [
      "EKMS"
    ]
  },
  {
    "id": "a44",
    "prompt": "What does PKI stand for?",
    "options": [
      "Public Key Infrastructure",
      "Private Key Integration",
      "Protected Key Interface",
      "Public Key Interoperability"
    ],
    "correctIndex": 0,
    "explanation": "PKI = Public Key Infrastructure.",
    "tags": [
      "PKI"
    ]
  },
  {
    "id": "a45",
    "prompt": "What does GCCS stand for?",
    "options": [
      "Global Command and Control System",
      "Global Communications Control Segment",
      "General Command and Control Service",
      "Global Combat Communications System"
    ],
    "correctIndex": 0,
    "explanation": "GCCS = Global Command and Control System.",
    "tags": [
      "GCCS"
    ]
  },
  {
    "id": "a46",
    "prompt": "What does C4I stand for?",
    "options": [
      "Command, Control, Communications, Computers, and Intelligence",
      "Control, Command, Communications, and Intelligence",
      "Command, Control, Communications, and Information",
      "Combat, Control, Communications, Computers, and Intelligence"
    ],
    "correctIndex": 0,
    "explanation": "C4I = Command, Control, Communications, Computers, and Intelligence.",
    "tags": [
      "C4I"
    ]
  },
  {
    "id": "a47",
    "prompt": "What does AOR stand for?",
    "options": [
      "Area of Responsibility",
      "Area of Routing",
      "Authority of Release",
      "Action Operations Region"
    ],
    "correctIndex": 0,
    "explanation": "AOR = Area of Responsibility.",
    "tags": [
      "AOR"
    ]
  },
  {
    "id": "a48",
    "prompt": "What does PQS stand for?",
    "options": [
      "Personnel Qualification Standards",
      "Program Qualification System",
      "Professional Qualification Study",
      "Personnel Quality Survey"
    ],
    "correctIndex": 0,
    "explanation": "PQS = Personnel Qualification Standards.",
    "tags": [
      "PQS"
    ]
  },
  {
    "id": "a49",
    "prompt": "What does SOP stand for?",
    "options": [
      "Standard Operating Procedures",
      "Standard Operations Plan",
      "System Operating Protocol",
      "Service Operations Procedure"
    ],
    "correctIndex": 0,
    "explanation": "SOP = Standard Operating Procedures.",
    "tags": [
      "SOP"
    ]
  },
  {
    "id": "a50",
    "prompt": "What does MSL stand for in comm center logging?",
    "options": [
      "Master Station Log",
      "Message Status Ledger",
      "Main Systems Log",
      "Master Security Log"
    ],
    "correctIndex": 0,
    "explanation": "MSL = Master Station Log.",
    "tags": [
      "MSL"
    ]
  },
  {
    "id": "a51",
    "prompt": "What does CML stand for in comm center logging?",
    "options": [
      "Central Message Log",
      "Command Message Ledger",
      "Circuit Message List",
      "Central Monitoring Log"
    ],
    "correctIndex": 0,
    "explanation": "CML = Central Message Log.",
    "tags": [
      "CML"
    ]
  },
  {
    "id": "a52",
    "prompt": "In the security warning line context, OPSIG refers to the:",
    "options": [
      "Operating Signal",
      "Operational Signature",
      "Operator Signal Guard",
      "Operations Signal Indicator Group"
    ],
    "correctIndex": 0,
    "explanation": "OPSIG = operating signal (e.g., ZNR/ZNY).",
    "tags": [
      "OPSIG"
    ]
  },
  {
    "id": "a53",
    "prompt": "What does DTG stand for?",
    "options": [
      "Date-Time Group",
      "Data Transmission Gateway",
      "Distribution Tag Group",
      "Digital Timing Group"
    ],
    "correctIndex": 0,
    "explanation": "DTG = Date-Time Group.",
    "tags": [
      "DTG"
    ]
  },
  {
    "id": "a54",
    "prompt": "What does SSIC stand for?",
    "options": [
      "Standard Subject Identification Code",
      "Standard Signal Identification Code",
      "Station Subject Index Code",
      "Security Subject Indicator Code"
    ],
    "correctIndex": 0,
    "explanation": "SSIC = Standard Subject Identification Code.",
    "tags": [
      "SSIC"
    ]
  },
  {
    "id": "a55",
    "prompt": "What does RDT&E stand for?",
    "options": [
      "Research, Development, Test and Evaluation",
      "Rapid Development, Testing and Execution",
      "Research, Design, Training and Education",
      "Readiness, Deployment, Test and Evaluation"
    ],
    "correctIndex": 0,
    "explanation": "RDT&E = Research, Development, Test and Evaluation.",
    "tags": [
      "RDT&E"
    ]
  },
  {
    "id": "a56",
    "prompt": "What does CND stand for (as listed under NIOC support)?",
    "options": [
      "Computer Network Defense",
      "Communications Network Division",
      "Critical Network Design",
      "Cyber Network Deployment"
    ],
    "correctIndex": 0,
    "explanation": "CND = Computer Network Defense.",
    "tags": [
      "CND"
    ]
  }

    {
    "id": "a57",
    "prompt": "In a GENSER header, what does CIC stand for?",
    "options": [
      "Content Indicator Code",
      "Communications Integration Code",
      "Command Identification Code",
      "Circuit Indicator Classification"
    ],
    "correctIndex": 0,
    "explanation": "CIC stands for Content Indicator Code and indicates what type of information is in the message.",
    "tags": ["GENSER", "CIC"]
  },
  {
    "id": "a58",
    "prompt": "What is the purpose of the Content Indicator Code (CIC) in a GENSER message?",
    "options": [
      "To indicate the type of information contained in the message",
      "To assign transmission precedence",
      "To identify the originating station",
      "To indicate the message classification level"
    ],
    "correctIndex": 0,
    "explanation": "Per Lesson 4, the CIC indicates what type of information is in a message.",
    "tags": ["GENSER", "CIC"]
  },
  {
    "id": "a59",
    "prompt": "In Format Line 2 of a GENSER message, the CIC is located in which character positions (Lesson 4)?",
    "options": [
      "Characters 5–8",
      "Characters 4–9",
      "Characters 10–16",
      "Characters 1–4"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: Character 5–8 in Format Line 2 is the Content Indicator Code (CIC).",
    "tags": ["GENSER", "Header", "CIC"]
  },
  {
    "id": "a60",
    "prompt": "Which Content Indicator Code (CIC) indicates a Narrative Message / General Text (Lesson 4)?",
    "options": [
      "ZYUW",
      "ZYVW",
      "NGCN",
      "ZDKW"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: ZYUW = Narrative Message / General Text.",
    "tags": ["CIC", "ZYUW"]
  },
  {
    "id": "a61",
    "prompt": "Which Content Indicator Code (CIC) indicates CASREP / Casualty Reports (Lesson 4)?",
    "options": [
      "NGCN",
      "ZYUW",
      "ZDKW",
      "NBAT"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: NGCN = CASREP / Casualty Reports.",
    "tags": ["CIC", "NGCN"]
  },
  {
    "id": "a62",
    "prompt": "Which Content Indicator Code (CIC) indicates Service Messages (Lesson 4)?",
    "options": [
      "ZYVW",
      "ZYUW",
      "NBAT",
      "ZDKW"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: ZYVW = Service Messages.",
    "tags": ["CIC", "ZYVW"]
  },
  {
    "id": "a63",
    "prompt": "Which Content Indicator Code (CIC) indicates Retransmission (Lesson 4)?",
    "options": [
      "ZDKW",
      "NGCN",
      "ZYVW",
      "NBAT"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: ZDKW = Retransmission.",
    "tags": ["CIC", "ZDKW"]
  },
  {
    "id": "a64",
    "prompt": "Which Content Indicator Code (CIC) indicates Ammo (Naval Battery) (Lesson 4)?",
    "options": [
      "NBAT",
      "ZDKW",
      "ZYUW",
      "NGCN"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: NBAT = Ammo (Naval Battery).",
    "tags": ["CIC", "NBAT"]
  }
];
