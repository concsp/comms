const COMPREHENSIVE_BANK = [
  {
    "id": "c1",
    "prompt": "Which statement best describes the mission of Naval Communications (per Lessons 1–2)?",
    "options": [
      "Provide and maintain reliable, secure, rapid communications to meet wartime requirements of naval operating forces",
      "Provide tactical targeting intelligence to fleet commanders using SCI-only networks",
      "Maintain shipboard internal communications systems exclusively for damage control",
      "Operate only shore-based communications hubs in support of non-DoD agencies"
    ],
    "correctIndex": 0,
    "explanation": "Mission: reliable, secure, rapid comms based on war requirements to meet needs of Naval Operating Forces.",
    "tags": [
      "Mission"
    ]
  },
  {
    "id": "c2",
    "prompt": "DISA’s role with respect to the DCS is best described as:",
    "options": [
      "Providing operational direction and ensuring the system is operated/improved to meet requirements",
      "Owning all Navy COMSEC accounts and issuing all keying material directly to ships",
      "Serving as the fleet’s day-to-day control point for broadcast shifts",
      "Writing all NTP publications and approving shipboard watchbills"
    ],
    "correctIndex": 0,
    "explanation": "DISA gives operational direction to DCS and ensures it meets requirements.",
    "tags": [
      "DISA",
      "DCS"
    ]
  },
  {
    "id": "c3",
    "prompt": "Which DISN enclave is described as supporting the Global Command and Control System (GCCS) and being the DoD’s largest interoperable C2 data network?",
    "options": [
      "SIPRNET",
      "JWICS",
      "NIPRNET",
      "DSSCS"
    ],
    "correctIndex": 0,
    "explanation": "Per Lesson 1, SIPRNET supports GCCS and is the largest interoperable C2 data network.",
    "tags": [
      "Enclaves",
      "GCCS"
    ]
  },
  {
    "id": "c4",
    "prompt": "Which chain-of-command role is responsible for the organization, supervision, and coordination of the command’s exterior communications?",
    "options": [
      "Communications Officer (COMMO)",
      "Technical Control Supervisor",
      "CMS Custodian",
      "Watch Station Personnel"
    ],
    "correctIndex": 0,
    "explanation": "COMMO is responsible for exterior communications organization/supervision/coordination.",
    "tags": [
      "Chain of Command"
    ]
  },
  {
    "id": "c5",
    "prompt": "Who is responsible for overall communications of the command and proper message handling, with the noted exception when a flag officer is embarked?",
    "options": [
      "Commanding Officer (CO)",
      "Communications Watch Officer (CWO)",
      "Radio Officer",
      "Technical Control Supervisor"
    ],
    "correctIndex": 0,
    "explanation": "CO is responsible for overall communications and proper message handling (exception: embarked flag officer).",
    "tags": [
      "Chain of Command"
    ]
  },
  {
    "id": "c6",
    "prompt": "Which role is responsible to the CWO for establishing/maintaining required circuits, restoring equipment, and maintaining a status board for equipment?",
    "options": [
      "Technical Control Supervisor",
      "Radio Officer",
      "COMMO",
      "JFTOC Watch Officer"
    ],
    "correctIndex": 0,
    "explanation": "Technical Control Supervisor responsibilities include circuits, restoration, QC, and status board.",
    "tags": [
      "Watchfloor"
    ]
  },
  {
    "id": "c7",
    "prompt": "A CMS Custodian is responsible to the CO primarily for:",
    "options": [
      "Managing the CMS account per CMS-1 and advising on physical security/handling of COMSEC materials",
      "Maintaining the master station log and central message log for 12 months",
      "Directing action to resolve COMMSPOTS as the fleet’s primary control point",
      "Drafting all outgoing messages and selecting precedence for transmission"
    ],
    "correctIndex": 0,
    "explanation": "CMS Custodian manages the CMS account and physical security/handling of COMSEC materials per CMS-1.",
    "tags": [
      "COMSEC",
      "CMS"
    ]
  },
  {
    "id": "c8",
    "prompt": "During a watch section change, what is required regarding COMSEC material inventories held at a watch station?",
    "options": [
      "Oncoming watch supervisor must witness inventory; TPI maintained; both sign inventory sheet",
      "Outgoing watch supervisor may inventory alone if all items are locked afterward",
      "Only keying material must be counted; publications do not require page-checking",
      "Inventory is optional if the space remained secured and unopened"
    ],
    "correctIndex": 0,
    "explanation": "Inventory requires visual inventory of equipment, account for keying material, page-check publications, list details, and maintain TPI with signatures.",
    "tags": [
      "Inventory",
      "TPI"
    ]
  },
  {
    "id": "c9",
    "prompt": "Two-Person Integrity (TPI) is best defined as:",
    "options": [
      "A security measure preventing single-person access to Top Secret material and higher, requiring two authorized persons present when handled",
      "A requirement that two message releasers sign every Routine precedence message",
      "A procedure where two separate commands must approve MINIMIZE conditions",
      "A maintenance rule requiring two technicians for all transmitter repairs"
    ],
    "correctIndex": 0,
    "explanation": "TPI prevents single-person access to TS and higher; requires two authorized persons constant presence and dual-locking measures.",
    "tags": [
      "TPI"
    ]
  },
  {
    "id": "c10",
    "prompt": "Which statement about communications logs is correct (per Lesson 2)?",
    "options": [
      "Erasures are not allowed in logs; logs support effective comms monitoring and analysis",
      "Erasures are allowed if initialed by the watch supervisor",
      "Logs are optional if automated systems retain backups",
      "Only the CML is required; the MSL is only for shore commands"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 2: logs are necessary records; erasures are not allowed.",
    "tags": [
      "Logs"
    ]
  },
  {
    "id": "c11",
    "prompt": "The Master Station Log (MSL) is best described as:",
    "options": [
      "An official narrative record of significant comm center events, maintained chronologically and retained for 12 months",
      "A message routing index that lists OSRIs and routing indicators for transmission",
      "A log that contains only message DTG and precedence after circuit logs are completed",
      "A secure register used only for COMSEC keying material transactions"
    ],
    "correctIndex": 0,
    "explanation": "MSL records RADAY, turnovers, outages, impairments, inventories, significant events; chronological; 12-month retention.",
    "tags": [
      "MSL"
    ]
  },
  {
    "id": "c12",
    "prompt": "The Central Message Log (CML) includes which set of fields (per Lesson 2)?",
    "options": [
      "Originator, DTG, precedence, classification, and times of receipt/file/delivery",
      "Routing indicators, OSRI, CIC, and SSN validation number",
      "Only subject line and references for accountability",
      "Only circuit status and equipment outages"
    ],
    "correctIndex": 0,
    "explanation": "CML contains originator, DTG, precedence, classification, and receipt/file/delivery times.",
    "tags": [
      "CML"
    ]
  },
  {
    "id": "c13",
    "prompt": "MINIMIZE conditions are imposed primarily to:",
    "options": [
      "Drastically reduce normal message/telephone traffic so vital traffic is not delayed during emergencies",
      "Raise all traffic to Immediate precedence to speed transmission",
      "Restrict all communications to JWICS only",
      "Force all messages to be sent only via AUTODIN"
    ],
    "correctIndex": 0,
    "explanation": "MINIMIZE reduces traffic during overload so essential traffic flows.",
    "tags": [
      "MINIMIZE"
    ]
  },
  {
    "id": "c14",
    "prompt": "Who is authorized to impose MINIMIZE conditions (per Lesson 2)?",
    "options": [
      "CNO, Fleet Commanders in Chief, or Area Coordinators",
      "Any ship’s CO without external approval",
      "Only DISA because it directs DCS operations",
      "Only NCTAMS because it oversees NCTS stations"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 2: CNO, Fleet Commanders in Chief, or Area Coordinators can impose MINIMIZE.",
    "tags": [
      "MINIMIZE",
      "Authority"
    ]
  },
  {
    "id": "c15",
    "prompt": "During MINIMIZE, FLASH and IMMEDIATE traffic word limits (per Lesson 2) are:",
    "options": [
      "FLASH 100 words / IMMEDIATE 200 words",
      "FLASH 200 words / IMMEDIATE 100 words",
      "FLASH 300 words / IMMEDIATE 500 words",
      "FLASH 50 words / IMMEDIATE 150 words"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 2: FLASH max 100 words; IMMEDIATE max 200 words (with releasers restricted).",
    "tags": [
      "MINIMIZE",
      "Precedence"
    ]
  },
  {
    "id": "c16",
    "prompt": "Which statement correctly differentiates action vs information addressees in a GENSER message?",
    "options": [
      "TO addressees must take action; INFO addressees are informed only and do not need to act",
      "INFO addressees must take action; TO addressees receive for awareness only",
      "FM is the action addressee and TO is the originator",
      "AIG entries can only be used on INFO lines, not TO lines"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: TO = action addressee; INFO = informational only.",
    "tags": [
      "GENSER",
      "Addressing"
    ]
  },
  {
    "id": "c17",
    "prompt": "A COMMSHIFT message is required when:",
    "options": [
      "A command shifts its guard from one broadcast/servicing comm center to another",
      "A ship experiences significant tactical comm disruption and must report immediately",
      "A message has multiple references and requires narrative explanations",
      "A command changes from NIPRNET to SIPRNET for operational security"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 3: COMMSHIFT is required when shifting guard from one broadcast/servicing comm center to another (often 0001Z RADAY).",
    "tags": [
      "COMMSHIFT"
    ]
  },
  {
    "id": "c18",
    "prompt": "A COMMSPOT is best described as:",
    "options": [
      "A report advising of any situation that may cause significant disruption of tactical communications, submitted as soon as difficulties are encountered",
      "A routine service message used to announce schedule changes at NCTAMS",
      "A retransmission request when routing indicators are missing",
      "A special handling marker indicating limited dissemination"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 3: COMMSPOT is submitted by ships when comm difficulties occur and could disrupt tactical comms.",
    "tags": [
      "COMMSPOT"
    ]
  },
  {
    "id": "c19",
    "prompt": "Which best describes the responsibilities split among Originator, Drafter, and Releaser?",
    "options": [
      "Originator is the authority; Drafter composes/addressing/format/precedence/classification; Releaser authorizes transmission and ensures compliance",
      "Originator composes the message; Drafter authorizes transmission; Releaser selects the CIC and routing indicators",
      "Originator only selects subject; Drafter logs messages; Releaser maintains circuit status boards",
      "Originator provides OSRI; Drafter assigns SSN; Releaser inserts ZNR/ZNY security warning"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 3 details roles: Drafter composes and ensures format/precedence/classification; Releaser ensures compliance and authorizes transmission.",
    "tags": [
      "Procedures"
    ]
  },
  {
    "id": "c20",
    "prompt": "Which statement about message releasers is correct (per Lesson 3)?",
    "options": [
      "Only designated personnel may release messages; the authorized list must be adhered to and others should not sign",
      "Any watchstander may release Routine traffic if the drafter is unavailable",
      "The originator must always be different from the releaser to prevent conflicts",
      "Releasers are designated only during MINIMIZE conditions"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 3: commands maintain a list of authorized releasers; it must be followed.",
    "tags": [
      "Releaser"
    ]
  },
  {
    "id": "c21",
    "prompt": "Which special handling marker is used on unclassified information that must be held from public release?",
    "options": [
      "FOUO",
      "LIMDIS",
      "SPECAT",
      "FRD"
    ],
    "correctIndex": 0,
    "explanation": "FOUO is applied to unclassified information not for public release.",
    "tags": [
      "Handling"
    ]
  },
  {
    "id": "c22",
    "prompt": "Which is true about DSSCS (per Lesson 3)?",
    "options": [
      "It can contain sensitive information and may include SCI, sharing transmission paths with AUTODIN",
      "It is a DISN enclave used exclusively for unclassified long-haul IP traffic",
      "It is a shipboard message processing system built to command mission requirements",
      "It is a watchfloor control point operated by NCTAMS for circuit restoration"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 3: DSSCS is a worldwide special-purpose comms system used to process record message traffic; can contain SCI; shares paths with AUTODIN.",
    "tags": [
      "DSSCS"
    ]
  },
  {
    "id": "c23",
    "prompt": "Which is a correct statement about CRITIC messages (per Lesson 3)?",
    "options": [
      "They are short, specifically formatted, sent at the highest priority, and transmitted by the most rapid path available",
      "They are unclassified narrative messages using ZYUW CIC and routine precedence",
      "They are service messages used to announce circuit outages and restorations",
      "They are limited distribution messages only for strike group commanders"
    ],
    "correctIndex": 0,
    "explanation": "CRITIC: short, formatted, highest priority, fastest path to senior decision makers.",
    "tags": [
      "CRITIC"
    ]
  },
  {
    "id": "c24",
    "prompt": "In a GENSER header, the first character indicates:",
    "options": [
      "Message precedence",
      "Message classification",
      "Language media format",
      "Content indicator code"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: first character 'R/P/O/Z/Y' is message precedence.",
    "tags": [
      "GENSER",
      "Header"
    ]
  },
  {
    "id": "c25",
    "prompt": "In a GENSER header, characters 5–8 represent:",
    "options": [
      "Content Indicator Code (CIC)",
      "Station Serial Number (SSN)",
      "Operating signal (OPSIG)",
      "Julian date"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: characters 5–8 are the CIC (e.g., ZYUW).",
    "tags": [
      "GENSER",
      "CIC"
    ]
  },
  {
    "id": "c26",
    "prompt": "Which statement correctly describes the security warning line (Format Line 4) in Lesson 4?",
    "options": [
      "A 3-letter OPSIG followed by a 5-character classification group (e.g., ZNR UUUUU)",
      "A 4-digit time filed followed by Julian date and routing indicators",
      "A validation line duplicating SSN preceded by '#'",
      "A prosign BT separating header from body"
    ],
    "correctIndex": 0,
    "explanation": "Security warning line: OPSIG + five-character classification group.",
    "tags": [
      "GENSER",
      "OPSIG"
    ]
  },
  {
    "id": "c27",
    "prompt": "Which OPSIG indicates unclassified message traffic (per Lesson 4)?",
    "options": [
      "ZNR",
      "ZNY",
      "ZBZ",
      "ZUJ"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: ZNR = unclassified; ZNY = confidential or higher.",
    "tags": [
      "OPSIG"
    ]
  },
  {
    "id": "c28",
    "prompt": "What is the purpose of the validation line (#0001) in a GENSER message footer?",
    "options": [
      "It duplicates the SSN to verify the message is complete and not a straggler",
      "It indicates the DTG was filed in local time rather than Zulu time",
      "It marks that MINIMIZE is in effect for the originating command",
      "It indicates the message is a retransmission requiring CIC ZDKW"
    ],
    "correctIndex": 0,
    "explanation": "Validation duplicates SSN (positions 17–20) preceded by '#', preventing stragglers.",
    "tags": [
      "GENSER",
      "Footer"
    ]
  },
  {
    "id": "c29",
    "prompt": "Which statement correctly describes the end-of-message sign in Lesson 4?",
    "options": [
      "Eight blank lines followed by NNNN; some automated systems may not display the blank lines",
      "A single period '.' appended to the last routing indicator",
      "A double hyphen '--' followed by destination routing indicators",
      "The prosign BT followed by the SSIC code"
    ],
    "correctIndex": 0,
    "explanation": "End of message: 8 carriage returns then NNNN.",
    "tags": [
      "GENSER",
      "Footer"
    ]
  },
  {
    "id": "c30",
    "prompt": "AIGs represent a collection of:",
    "options": [
      "16 or more frequently occurring groups of PLA",
      "4 or more PLAs sharing a common chain of command",
      "A single PLA written in plain language",
      "Routing indicators used to reach destination stations"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 3: AIG = 16+ frequently occurring groups of PLA.",
    "tags": [
      "Addressing"
    ]
  },
  {
    "id": "c31",
    "prompt": "CAGs represent a collection of:",
    "options": [
      "4 or more PLAs sharing common operational/admin chain of command",
      "16 or more frequently occurring groups of PLA",
      "Only broadcast stations within a comm area",
      "Only information addressees, never action addressees"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 3: CAG = 4+ PLAs with common operational/admin chain of command.",
    "tags": [
      "Addressing"
    ]
  },
  {
    "id": "c32",
    "prompt": "Which shore entity operates and maintains responsive info transfer systems, provides real-time C4I support, and oversees individual NCTS?",
    "options": [
      "NCTAMS",
      "FLTNOC",
      "NIOC",
      "DISA"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 1–2: NCTAMS provides C4I support and oversees NCTS.",
    "tags": [
      "Shore"
    ]
  },
  {
    "id": "c33",
    "prompt": "Which shore entity provides critical IP services and acts as a regional gateway to DISN?",
    "options": [
      "FLTNOC",
      "NCTAMS",
      "NCTS",
      "DSSCS"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 1–2: FLTNOCs provide IP services and act as DISN gateways.",
    "tags": [
      "Shore",
      "DISN"
    ]
  },
  {
    "id": "c34",
    "prompt": "Which statement correctly describes NCTS (per Lessons 1–2)?",
    "options": [
      "They provide Navy IT infrastructure and support services for rapid reliable voice/data comms within an AOR and are managed by NCTAMS",
      "They provide fleet-wide operational control points for broadcast shifts and maintain SA for COMMSPOTS",
      "They are DISN enclaves broken down by classification for DoD data traffic",
      "They are special handling markers used to restrict dissemination"
    ],
    "correctIndex": 0,
    "explanation": "NCTS are IT infrastructure/support services in an AOR; managed by NCTAMS.",
    "tags": [
      "NCTS"
    ]
  },
  {
    "id": "c35",
    "prompt": "What does 'RMKS' section do in the message text structure described in Lesson 4?",
    "options": [
      "Explains the purpose of the message and provides remarks",
      "Lists routing indicators to destination stations",
      "Duplicates the SSN for straggler prevention",
      "Declares OPSIG and classification redundancy"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: RMKS is used to explain the purpose of the message (remarks).",
    "tags": [
      "GENSER",
      "Body"
    ]
  },
  {
    "id": "c36",
    "prompt": "When a message lists only one reference and that reference needs additional discussion, which field is used (per Lesson 4)?",
    "options": [
      "AMPN",
      "NARR",
      "MSGID",
      "SSIC"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: AMPN used when only one reference and additional discussion is needed or it’s TEL/CON/DOC/MSG/LTR type; multiple refs require NARR.",
    "tags": [
      "GENSER",
      "Refs"
    ]
  },
  {
    "id": "c37",
    "prompt": "Which reference type code indicates a telephone conversation (per Lesson 4)?",
    "options": [
      "TEL",
      "DOC",
      "LTR",
      "MSG"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: TEL = telephone conversation; CON = conference/meeting; DOC = publication/instruction/regulation; LTR = letter; MSG = record message.",
    "tags": [
      "Refs"
    ]
  },
  {
    "id": "c38",
    "prompt": "Which statement best describes COMMO vs Radio Officer roles (per Lesson 2)?",
    "options": [
      "COMMO supervises exterior communications at the command level; Radio Officer runs the comm center and executes plans/training/SOPs under COMMO",
      "Radio Officer provides operational direction to DCS; COMMO manages the CMS account",
      "COMMO is responsible only for internal comms while the Radio Officer controls all external comms",
      "Radio Officer can never be COMMO under any circumstances"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 2: COMMO oversees exterior communications; Radio Officer runs comm center and responsibilities to COMMO; can be same person.",
    "tags": [
      "Chain of Command"
    ]
  },
  {
    "id": "c39",
    "prompt": "Which is a correct statement about the CWO per Lesson 2?",
    "options": [
      "Responsible to COMMO for ensuring comm capabilities align with mission and that traffic is handled rapidly/accurately per directives (NTP 4 lists duties)",
      "Responsible to CO for maintaining COMSEC accounts per CMS-1",
      "Responsible to FLTNOC for regional DISN gateway operations",
      "Responsible to NCTAMS for assigning routing indicators and OSRIs"
    ],
    "correctIndex": 0,
    "explanation": "CWO responsibilities: mission comm capabilities, traffic handling, compliance; NTP 4 lists duties.",
    "tags": [
      "CWO"
    ]
  },
  {
    "id": "c40",
    "prompt": "Which best describes the purpose of SOPs onboard (per Lesson 2)?",
    "options": [
      "Written procedures covering routine and emergent situations; required lists directed by ATG and INSURV for readiness",
      "A set of routing indicators used to ensure correct transmission paths",
      "A set of COMSEC keying instructions issued only during MINIMIZE",
      "A log format used to record RADAY and message turnover events"
    ],
    "correctIndex": 0,
    "explanation": "SOPs cover routine/emergent situations and are required for readiness by ATG/INSURV guidance.",
    "tags": [
      "SOP"
    ]
  },
  {
    "id": "c41",
    "prompt": "Naval communications must satisfy requirements of which two systems (per Lesson 1)?",
    "options": [
      "Defense Communications System (DCS) and National Communications System (NCS)",
      "Defense Information Systems Network (DISN) and AUTODIN",
      "DSSCS and NAVMACS",
      "NIPRNET and SIPRNET"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 1: Naval communications must satisfy DCS and NCS requirements.",
    "tags": [
      "Mission",
      "Systems"
    ]
  },
  {
    "id": "c42",
    "prompt": "The Naval Telecommunications System (NTS) includes:",
    "options": [
      "Terminal processing equipment plus transmission, switching, crypto, and control devices",
      "Only radio transmitter rooms and antenna couplers",
      "Only DISN enclaves used for IP networking",
      "Only message logs and publication libraries"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 1: NTS comprises terminals, transmission/switching, crypto, and control devices used for signals between points.",
    "tags": [
      "NTS"
    ]
  },
  {
    "id": "c43",
    "prompt": "Which best describes the Defense Communications System (DCS) (Lesson 1)?",
    "options": [
      "A single communications system combining service elements to support DoD activities",
      "The unclassified IP enclave supporting MILDEPs",
      "A shipboard record message processor tailored to mission needs",
      "A regional IP gateway that provides fleet network services"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 1: DCS combines elements of the services into one comm system supporting DoD activities.",
    "tags": [
      "DCS"
    ]
  },
  {
    "id": "c44",
    "prompt": "NIPRNET is best described as:",
    "options": [
      "A global long-haul IP network supporting unclassified DoD data communications",
      "The DoD’s largest interoperable C2 data network supporting GCCS",
      "The sensitive compartmented information portion of DISN",
      "A special-purpose record message system sharing paths with AUTODIN"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 1: NIPRNET supports unclassified DoD data communications.",
    "tags": [
      "NIPRNET"
    ]
  },
  {
    "id": "c45",
    "prompt": "Which statement best fits JWICS (Lesson 1)?",
    "options": [
      "Sensitive compartmented information portion of DISN enabling advanced networking for point-to-point/multipoint exchange",
      "Unclassified long-haul IP network supporting MILDEPs",
      "DoD’s largest interoperable C2 data network supporting GCCS",
      "A worldwide special-purpose system used to process record message traffic"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 1: JWICS is the SCI portion of DISN.",
    "tags": [
      "JWICS"
    ]
  },
  {
    "id": "c46",
    "prompt": "How many NCTAMS are listed, and what do they do at a high level (Lessons 1–2)?",
    "options": [
      "Two; operate/maintain info transfer systems, provide real-time C4I support, and oversee NCTS",
      "Four; provide regional IP services and DISN gateways",
      "Seven; provide AOR voice/data comm support and report to NIOC",
      "Fifteen; provide IO planning and SIGINT support globally"
    ],
    "correctIndex": 0,
    "explanation": "Notes: two NCTAMS (ATL/PAC) provide C4I support and oversee NCTS.",
    "tags": [
      "NCTAMS"
    ]
  },
  {
    "id": "c47",
    "prompt": "Which set correctly identifies the four FLTNOCs and their locations (Lessons 1–2)?",
    "options": [
      "ECRNOC–Naples, Italy; IORNOC–Bahrain; PRNOC–Wahiawa, Hawaii; UARNOC–Norfolk, Virginia",
      "ECRNOC–Norfolk, Virginia; IORNOC–Naples, Italy; PRNOC–Bahrain; UARNOC–Wahiawa, Hawaii",
      "ECRNOC–Jacksonville, Florida; IORNOC–Sicily; PRNOC–Guam; UARNOC–San Diego, California",
      "ECRNOC–Mechanicsburg, PA; IORNOC–Yokosuka, Japan; PRNOC–Naples, Italy; UARNOC–Bahrain"
    ],
    "correctIndex": 0,
    "explanation": "Locations per Lessons 1–2 FLTNOC list.",
    "tags": [
      "FLTNOC",
      "Locations"
    ]
  },
  {
    "id": "c48",
    "prompt": "Which is the best description of an NCTS (Lessons 1–2)?",
    "options": [
      "Provides Navy IT infrastructure and support services for rapid reliable voice/data comms within an AOR; managed by NCTAMS",
      "Primary day-to-day operational control point for fleet telecom issues",
      "Regional IP gateway to DISN providing critical IP services",
      "An IO/SIGINT command providing EW/EA and CND support"
    ],
    "correctIndex": 0,
    "explanation": "Lessons 1–2 define NCTS as AOR-focused IT infra/support for voice/data, managed by NCTAMS.",
    "tags": [
      "NCTS"
    ]
  },
  {
    "id": "c49",
    "prompt": "Which item is NOT listed among the seven NCTS locations in Lessons 1–2?",
    "options": [
      "NCTS Rota, Spain",
      "NCTS Guam",
      "NCTS Naples, IT",
      "NCTS Bahrain"
    ],
    "correctIndex": 0,
    "explanation": "Listed: Jacksonville, San Diego, Bahrain, Guam, Naples, Far East Yokosuka, Sicily.",
    "tags": [
      "NCTS",
      "Locations"
    ]
  },
  {
    "id": "c50",
    "prompt": "Per Lessons 1–2, NIOCs are described as:",
    "options": [
      "Fifteen NIOCs with sixteen detachments supporting Navy IO/SIGINT, including four located at NSA",
      "Four NIOCs total, each co-located with an NCTAMS",
      "Seven NIOCs, one for each NCTS location",
      "Sixteen NIOCs providing regional IP gateway services to DISN"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 1–2: 15 NIOCs and 16 detachments; 4 located at NSA.",
    "tags": [
      "NIOC"
    ]
  },
  {
    "id": "c51",
    "prompt": "In the shipboard communications chain of command (Lesson 2), which sequence is correct?",
    "options": [
      "CO → COMMO → (RO on large deck) → CWO → Technical Control Supervisor",
      "CO → CWO → COMMO → RO → Technical Control Supervisor",
      "CO → RO → COMMO → Technical Control Supervisor → CWO",
      "CO → Technical Control Supervisor → CWO → COMMO → RO"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 2 lists CO, COMMO, RO (large deck), CWO, Technical Control Supervisor.",
    "tags": [
      "Chain of Command"
    ]
  },
  {
    "id": "c52",
    "prompt": "Which role is responsible for the command’s exterior communications organization and coordination (Lesson 2)?",
    "options": [
      "COMMO",
      "RO",
      "CWO",
      "Technical Control Supervisor"
    ],
    "correctIndex": 0,
    "explanation": "COMMO oversees exterior comms organization/supervision/coordination.",
    "tags": [
      "COMMO"
    ]
  },
  {
    "id": "c53",
    "prompt": "Which is a core responsibility of the Communications Watch Officer (CWO) (Lesson 2)?",
    "options": [
      "Ensure incoming/outgoing traffic is handled rapidly/accurately per regulations and directives",
      "Maintain COMSEC account as office of record for all DoN KMI accounts",
      "Provide regional gateway services into DISN for deployed units",
      "Publish COMSEC policies and develop EKMS/KMI training"
    ],
    "correctIndex": 0,
    "explanation": "CWO ensures comm capabilities align with mission and traffic is handled correctly; NTP 4 lists duties.",
    "tags": [
      "CWO"
    ]
  },
  {
    "id": "c54",
    "prompt": "Which duty belongs to the Technical Control Supervisor (Lesson 2)?",
    "options": [
      "Maintain a status board showing pertinent equipment information",
      "Approve message release lists for the command",
      "Impose MINIMIZE for subordinate units without permission",
      "Assign AIG/CAG designators for all outgoing messages"
    ],
    "correctIndex": 0,
    "explanation": "Tech Control Supervisor maintains status boards and manages circuits/quality control.",
    "tags": [
      "Tech Control"
    ]
  },
  {
    "id": "c55",
    "prompt": "Which item is explicitly recorded in the Master Station Log (MSL) (Lesson 2)?",
    "options": [
      "Complete system outages and major equipment outages",
      "AIG and CAG address designators used during the day",
      "Only classified traffic receipts and deliveries",
      "Only COMSEC account transactions and key issue records"
    ],
    "correctIndex": 0,
    "explanation": "MSL records outages, impairments, RADAY, turnovers, inventories, significant events, etc.",
    "tags": [
      "MSL"
    ]
  },
  {
    "id": "c56",
    "prompt": "How long must the Master Station Log (MSL) be maintained (Lesson 2)?",
    "options": [
      "12 months",
      "6 months",
      "24 months",
      "Until the next RADAY only"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 2: MSL shall be maintained for 12 months.",
    "tags": [
      "MSL"
    ]
  },
  {
    "id": "c57",
    "prompt": "When are entries signed “on” and “off” in the MSL (Lesson 2)?",
    "options": [
      "Shift supervisor signs at start/end of duty at end of the radio day",
      "COMMO signs each time a message is filed or delivered",
      "CMS Custodian signs after each COMSEC inventory sheet entry",
      "JFTOC Watch Officer signs after each COMMSPOT is resolved"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 2: shift sup signs log when logging on/off duty at end of RADAY.",
    "tags": [
      "MSL"
    ]
  },
  {
    "id": "c58",
    "prompt": "Which statement about log corrections is correct (Lesson 2)?",
    "options": [
      "Erasures are not allowed",
      "Erasures are allowed if witnessed under TPI",
      "Erasures are allowed only for Routine traffic entries",
      "Erasures are allowed if replaced by a typed copy at RADAY"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 2: erasures of logs are not allowed.",
    "tags": [
      "Logs"
    ]
  },
  {
    "id": "c59",
    "prompt": "During COMSEC inventory, which information must the inventory sheet list (Lesson 2)?",
    "options": [
      "Short title, edition, accounting number (if applicable), quantity",
      "Routing indicator, OSRI, SSN, and DTG",
      "Classification, OPSIG, precedence, and CIC",
      "Rack location, serial number only, and operator initials"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 2: inventory sheet must list short title, edition, accounting number (if applicable), quantity.",
    "tags": [
      "Inventory"
    ]
  },
  {
    "id": "c60",
    "prompt": "Which statement best captures Two-Person Integrity (TPI) requirements (Lesson 2)?",
    "options": [
      "Two authorized persons must be continuously present when TPI material is handled; dual locks/locking mechanisms prevent single-person access",
      "Any two personnel may be present as long as one is a supervisor",
      "Two-person presence is required only for inventories, not routine handling",
      "TPI applies to all classified material regardless of level"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 2: TPI prevents single-person access to TS and higher; constant presence of two authorized persons and dual-locking measures.",
    "tags": [
      "TPI"
    ]
  },
  {
    "id": "c61",
    "prompt": "Which best describes MINIMIZE (Lesson 2)?",
    "options": [
      "A mandatory reduction of normal message/telephone traffic so vital traffic is not delayed",
      "A forced upgrade of all traffic to Priority precedence",
      "A ban on all voice circuits to conserve bandwidth",
      "A switch from one servicing comm center to another (guard shift)"
    ],
    "correctIndex": 0,
    "explanation": "MINIMIZE reduces normal traffic drastically in emergencies to prioritize vital traffic.",
    "tags": [
      "MINIMIZE"
    ]
  },
  {
    "id": "c62",
    "prompt": "Subordinate commanders may impose MINIMIZE over elements of their commands only when:",
    "options": [
      "They have prior permission from an authorized authority",
      "They have at least one COMMSPOT in the last 24 hours",
      "The message center has exceeded 200 words on Immediate traffic",
      "They are operating on SIPRNET rather than NIPRNET"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 2: subordinate commanders need prior permission from authorized authority.",
    "tags": [
      "MINIMIZE",
      "Authority"
    ]
  },
  {
    "id": "c63",
    "prompt": "Which Q-signal pair correctly matches the meaning 'Can you acknowledge receipt?' and 'I acknowledge receipt.' (Lesson 2)?",
    "options": [
      "INT QSL / QSL",
      "INT ZBZ / ZBZ",
      "INT QRT / QRT",
      "INT ZUJ / ZUJ"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 2: INT QSL asks; QSL acknowledges receipt.",
    "tags": [
      "Q Signals"
    ]
  },
  {
    "id": "c64",
    "prompt": "What does INT ZBZ ask for (Lesson 2)?",
    "options": [
      "Printing acceptability/communications quality of signals (often answered with 5-digit quality)",
      "Whether you acknowledge receipt of my last transmission",
      "Whether you will stand-by for a guard shift",
      "Whether you are under MINIMIZE conditions"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 2: INT ZBZ asks printing acceptability (quality) and may be answered 55555.",
    "tags": [
      "Z Signals"
    ]
  },
  {
    "id": "c65",
    "prompt": "Which sequence matches QRT signal intelligibility scale from 1 to 5 (Lesson 2)?",
    "options": [
      "1 totally corrupt → 2 very corrupt → 3 partly corrupt → 4 occasionally corrupt → 5 no corruption",
      "1 no corruption → 2 occasionally corrupt → 3 partly corrupt → 4 very corrupt → 5 totally corrupt",
      "1 acceptable → 2 acceptable → 3 unacceptable → 4 unacceptable → 5 unacceptable",
      "1 unknown → 2 weak → 3 fair → 4 strong → 5 perfect"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 2 QRT: 1 unacceptable totally corrupt; 2 very corrupt; 3 partly corrupt; 4 acceptable occasionally corrupt; 5 acceptable no corruption.",
    "tags": [
      "QRT"
    ]
  },
  {
    "id": "c66",
    "prompt": "GENSER message format: which lines comprise the header, body, and footer (Lesson 4)?",
    "options": [
      "Header: 1–11 (to first BT); Body: 12; Footer: 13–16 (from second BT to NNNN)",
      "Header: 1–8; Body: 9–12; Footer: 13–16",
      "Header: 1–4; Body: 5–11; Footer: 12–16",
      "Header: 1–12; Body: 13; Footer: 14–16"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: Header lines 1–11 to first BT; body line 12; footer lines 13–16 to ending sign.",
    "tags": [
      "GENSER"
    ]
  },
  {
    "id": "c67",
    "prompt": "In a GENSER header, characters 22–24 represent:",
    "options": [
      "Julian date",
      "Time filed",
      "Destination routing indicators",
      "Classification redundancy"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: characters 22–24 are Julian date.",
    "tags": [
      "GENSER",
      "Header"
    ]
  },
  {
    "id": "c68",
    "prompt": "In a GENSER header, characters 25–28 represent:",
    "options": [
      "Time filed (GMT/Zulu)",
      "Station serial number",
      "Content indicator code",
      "Operating signal"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: 25–28 is the time filed (4-digit GMT/Zulu time).",
    "tags": [
      "GENSER",
      "Header"
    ]
  },
  {
    "id": "c69",
    "prompt": "The classification redundancy in the header (e.g., '-UUUU') represents:",
    "options": [
      "A repeat of the classification character four times for redundancy",
      "A four-digit station serial number for validation",
      "Four routing indicators for the destination",
      "A four-character content indicator code"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: classification redundancy repeats classification char 4 times, preceded by hyphen.",
    "tags": [
      "GENSER",
      "Header"
    ]
  },
  {
    "id": "c70",
    "prompt": "In the message header, what does the single space separator (e.g., after the first 8 chars) ensure?",
    "options": [
      "The system recognizes transition to the next segment of the header (required separator)",
      "The message downgrades automatically to UNCLAS after transmission",
      "The routing indicators begin immediately afterward without a signal start",
      "The originator’s PLA is properly aligned for printing"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: separator spaces are required so systems recognize moving between header parts.",
    "tags": [
      "GENSER",
      "Header"
    ]
  },
  {
    "id": "c71",
    "prompt": "Format Line 14 (#0001) is derived from which other field (Lesson 4)?",
    "options": [
      "The Station Serial Number (SSN) in Format Line 2 positions 17–20",
      "The Julian date in positions 22–24",
      "The OPSIG in Format Line 4",
      "The DTG in Format Line 5"
    ],
    "correctIndex": 0,
    "explanation": "Validation duplicates SSN from header positions 17–20.",
    "tags": [
      "GENSER",
      "Footer"
    ]
  },
  {
    "id": "c72",
    "prompt": "COMMSHIFT messages are sent to which recipients (Lesson 3)?",
    "options": [
      "The NCTAMS of the comm areas from which the old and new broadcasts originate",
      "The FLTNOC regional gateways used by the ship",
      "All INFO addressees listed under AIG/CAG",
      "The CMS Custodian and COMMO only"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 3: COMMSHIFT sent to NCTAMS of comm areas from which old and new broadcasts originate.",
    "tags": [
      "COMMSHIFT"
    ]
  },
  {
    "id": "c73",
    "prompt": "When possible, COMMSHIFT takes effect at what time (Lesson 3)?",
    "options": [
      "0001Z of the new radio day",
      "1200Z of the current radio day",
      "2359Z of the old radio day",
      "At local midnight (0000L) regardless of Zulu time"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 3: when possible, shift takes effect at 0001Z of new RADAY.",
    "tags": [
      "COMMSHIFT"
    ]
  },
  {
    "id": "c74",
    "prompt": "Which is the best definition of a message user (Lesson 3)?",
    "options": [
      "Anyone authorized to draft, release, or process electronic messages",
      "Any watchstander assigned to technical control spaces",
      "Only the CO and COMMO by default",
      "Only personnel designated under TPI security measures"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 3: a message user is anyone authorized to draft/release/process electronic messages.",
    "tags": [
      "Message User"
    ]
  },
  {
    "id": "c75",
    "prompt": "Which special category/handling term indicates a classified message identified with special subject/project requiring special procedures (Lesson 3)?",
    "options": [
      "SPECAT",
      "LIMDIS",
      "EFTO",
      "FOUO"
    ],
    "correctIndex": 0,
    "explanation": "SPECAT indicates special category messages requiring special procedures beyond normal classification handling.",
    "tags": [
      "Handling",
      "SPECAT"
    ]
  },
  {
    "id": "c76",
    "prompt": "Which marker set is included under SPECAT examples in Lesson 3?",
    "options": [
      "LIMDIS, Personal For, NATO Restricted, Allied Restricted",
      "RD, FRD, EFTO, FOUO",
      "NIPRNET, SIPRNET, JWICS, DSSCS",
      "CAG, AIG, PLA, OSRI"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 3 lists SPECAT examples including LIMDIS, Personal For, NATO Restricted, Allied Restricted.",
    "tags": [
      "SPECAT"
    ]
  },
  {
    "id": "c77",
    "prompt": "Which statement best describes NAVMACS (Lesson 3)?",
    "options": [
      "Shipboard message processing system; capabilities are based on individual ship/command mission requirements",
      "A DISN enclave supporting secret C2 data traffic",
      "A watchfloor role responsible for circuit quality control",
      "A COMSEC account used to manage EKMS/KMI material"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 3: NAVMACS is shipboard message processing system tailored to mission requirements.",
    "tags": [
      "NAVMACS"
    ]
  },
  {
    "id": "c78",
    "prompt": "A PLA example that matches the concept in Lesson 3 is:",
    "options": [
      "COMSECONDFLT → Commander, Second Fleet",
      "RHBCYKN → Originating station routing indicator",
      "NNNN → End-of-message sign",
      "ZNR UUUUU → OPSIG and classification group"
    ],
    "correctIndex": 0,
    "explanation": "PLA is plain language address designator (e.g., COMSECONDFLT).",
    "tags": [
      "PLA"
    ]
  },
  {
    "id": "c79",
    "prompt": "AIGs are used primarily to:",
    "options": [
      "Address multiple commands via an address designator representing 16+ frequently occurring PLA groups",
      "Restrict dissemination to specific recipients using handling caveats",
      "Encode message precedence and classification into a 4-character code",
      "Validate message completeness by duplicating SSN in footer"
    ],
    "correctIndex": 0,
    "explanation": "AIG represents 16+ frequently occurring PLA groups for addressing multiple commands.",
    "tags": [
      "AIG"
    ]
  },
  {
    "id": "c80",
    "prompt": "CAGs are used primarily to:",
    "options": [
      "Address multiple PLAs (4+) that share common operational/administrative chain of command",
      "Provide regional IP services and act as DISN gateways",
      "Identify message types (narrative, service, CASREP) in the header",
      "Provide printing acceptability ratings for signal quality"
    ],
    "correctIndex": 0,
    "explanation": "CAG represents 4+ PLAs with common chain of command.",
    "tags": [
      "CAG"
    ]
  }
];
