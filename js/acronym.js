const ACRONYM_BANK = [

  { "id":"a1","prompt":"What does DISA stand for?","options":["Defense Information Systems Agency","Defense Intelligence Security Activity","Department of Information Support Authority","Defense Integrated Systems Administration"],"correctIndex":0,"explanation":"DISA is the Defense Information Systems Agency.","tags":["DISA","DCS"]},

  { "id":"a2","prompt":"What does DISN stand for?","options":["Defense Information Systems Network","Department of Integrated Service Nodes","Defense Internet Services Network","Distributed Information Systems Network"],"correctIndex":0,"explanation":"DISN is the Defense Information Systems Network.","tags":["DISN","Enclaves"]},

  { "id":"a3","prompt":"What does NIPRNET stand for?","options":["Non-classified Information Protocol Routed Network","Navy Integrated Protocol Routing Network","National Internet Protocol Routing Network","Non-secure Integrated Packet Routing Network"],"correctIndex":0,"explanation":"NIPRNET is the Non-classified Information Protocol Routed Network.","tags":["NIPRNET","DISN"]},

  { "id":"a4","prompt":"What does SIPRNET stand for?","options":["Secret Internet Protocol Router Network","Secret Information Protocol Routed Network","Secure Integrated Protocol Routed Network","Sensitive Information Packet Routing Network"],"correctIndex":1,"explanation":"SIPRNET is the Secret Information Protocol Routed Network.","tags":["SIPRNET","DISN"]},

  { "id":"a5","prompt":"What does JWICS stand for?","options":["Joint Worldwide Intelligence Communications System","Joint Warfighter Information Control System","Joint Wireless Intelligence Communications Suite","Joint Worldwide Integrated Comms Service"],"correctIndex":0,"explanation":"JWICS is the Joint Worldwide Intelligence Communications System.","tags":["JWICS","DISN"]},

  { "id":"a6","prompt":"What does NCTAMS stand for?","options":["Naval Computer and Telecommunications Area Master Stations","Navy Cyber Telecommunications and Management Stations","Naval Communications and Terminal Area Management Stations","National Computer and Telecommunications Master Station"],"correctIndex":0,"explanation":"NCTAMS are Naval Computer and Telecommunications Area Master Stations.","tags":["NCTAMS","Shore"]},

  { "id":"a7","prompt":"What does NCTS stand for?","options":["Naval Computer and Telecommunications Station","Navy Circuit and Terminal Service","Naval Communications Technical Support","Network Control and Transmission Station"],"correctIndex":0,"explanation":"NCTS are Naval Computer and Telecommunications Stations.","tags":["NCTS","Shore"]},

  { "id":"a8","prompt":"What does FLTNOC stand for?","options":["Fleet Network Operations Center","Fleet Telecommunications Operations Cell","Fleet Network Ordnance Command","Fleet Node Operations Center"],"correctIndex":0,"explanation":"FLTNOCs provide critical IP services and act as regional gateways to DISN.","tags":["FLTNOC","Shore"]},

  { "id":"a9","prompt":"What does JFTOC stand for?","options":["Joint Fleet Telecommunications Operations Center","Joint Force Tactical Operations Center","Joint Fleet Terminal Operations Center","Joint Frequency and Transmission Operations Cell"],"correctIndex":0,"explanation":"Each NCTAMS operates a JFTOC as the day-to-day operational control point.","tags":["JFTOC","NCTAMS"]},

  { "id":"a10","prompt":"What does NTS stand for?","options":["Naval Telecommunications System","National Transmission Service","Navy Tactical Satellite","Network Transport Segment"],"correctIndex":0,"explanation":"NTS includes terminals, transmission, switching, crypto, and control devices.","tags":["NTS"]},

  { "id":"a11","prompt":"What does DCS stand for?","options":["Defense Communications System","Department Communications Standard","Distributed Control System","Defense Cryptologic Service"],"correctIndex":0,"explanation":"DCS supports MILDEPs and DoD activities.","tags":["DCS"]},

  { "id":"a12","prompt":"What does DSSCS stand for?","options":["Defense Special Security Communication System","Defense Secure Satellite Communications System","Department of Security Signal Communications Service","Defense Strategic Security Communications Suite"],"correctIndex":0,"explanation":"DSSCS processes record message traffic and can contain SCI.","tags":["DSSCS"]},

  { "id":"a13","prompt":"What does CRITIC refer to in naval messaging?","options":["A critical information report sent at the highest priority via the fastest path","A retransmission control signal","A NATO caveat","A routine service message"],"correctIndex":0,"explanation":"CRITIC messages report critical information to senior decision makers.","tags":["CRITIC"]},

  { "id":"a14","prompt":"What does PLA stand for?","options":["Plain Language Address","Primary Link Authorization","Packet-Level Address","Protected Line Assignment"],"correctIndex":0,"explanation":"PLA is a readable address format.","tags":["PLA"]},

  { "id":"a15","prompt":"What does AIG stand for?","options":["Address Indicator Group","Administrative Information Group","Allied Information Gateway","Action Indicator Group"],"correctIndex":0,"explanation":"AIG represents 16+ frequently occurring PLA groups.","tags":["AIG"]},

  { "id":"a16","prompt":"What does CAG stand for?","options":["Collective Address Designator","Command Address Group","Collective Authority Grant","Circuit Address Gateway"],"correctIndex":0,"explanation":"CAG represents 4+ PLA sharing common chain of command.","tags":["CAG"]},

  { "id":"a17","prompt":"What does NAVMACS stand for?","options":["Naval Modular Automated Communications System","Navy Automated Message and Control System","Naval Maritime Communications Suite","National Automated Communications Service"],"correctIndex":0,"explanation":"NAVMACS is a shipboard message processing system.","tags":["NAVMACS"]},

  { "id":"a21","prompt":"Which handling marker refers to nuclear weapon design data?","options":["RD","FRD","SPECAT","LIMDIS"],"correctIndex":0,"explanation":"RD = Restricted Data.","tags":["RD"]},

  { "id":"a22","prompt":"Which handling marker refers to Formerly Restricted Data?","options":["FRD","RD","FOUO","EFTO"],"correctIndex":0,"explanation":"FRD is removed from RD but remains classified.","tags":["FRD"]},

  { "id":"a23","prompt":"What does EFTO mean?","options":["Encrypted for Transmission Only","Encrypted for Tactical Operations","Electronic Format Transfer Order","External Facility Transmission Only"],"correctIndex":0,"explanation":"EFTO indicates potential value if analyzed but not classified.","tags":["EFTO"]},

  { "id":"a24","prompt":"What does LIMDIS mean?","options":["Limited Distribution","Limited Disclosure","Line Message Dissemination","Link Distribution"],"correctIndex":0,"explanation":"LIMDIS restricts distribution.","tags":["LIMDIS"]},

  { "id":"a25","prompt":"What does FOUO mean?","options":["For Official Use Only","For Operational Use Only","Federal Office Use Only","Field Order Use Only"],"correctIndex":0,"explanation":"FOUO is used on unclassified info requiring restricted release.","tags":["FOUO"]},

  { "id":"a26","prompt":"What does inserting 'INT' before a Q/Z signal indicate?","options":["It makes the signal interrogative","It encrypts the signal","It changes precedence","It marks internal routing"],"correctIndex":0,"explanation":"'INT' indicates you are asking the signal.","tags":["Q/Z"]},

  { "id":"a27","prompt":"Which Z signal means 'Stand-by'?","options":["ZUJ","ZUE","ZUG","ZBZ"],"correctIndex":0,"explanation":"ZUJ = Stand-by.","tags":["Z Signals"]},

  { "id":"a28","prompt":"Which Z signal means 'Yes'?","options":["ZUE","ZUG","ZUJ","ZBZ"],"correctIndex":0,"explanation":"ZUE = Yes.","tags":["Z Signals"]},

  { "id":"a29","prompt":"Which Z signal means 'No'?","options":["ZUG","ZUE","ZUJ","ZUJ-1"],"correctIndex":0,"explanation":"ZUG = No.","tags":["Z Signals"]},

  { "id":"a30","prompt":"What does QRT refer to?","options":["Signal intelligibility (1–5)","Signal strength","Routing priority","Circuit reliability"],"correctIndex":0,"explanation":"QRT = signal intelligibility 1–5.","tags":["QRT"]},

  { "id":"a34","prompt":"What does OSRI stand for?","options":["Originating Station’s Routing Indicator","Operational Signal Routing Index","Originator Security Routing Identifier","Office Symbol Routing Instruction"],"correctIndex":0,"explanation":"OSRI identifies the originating station.","tags":["GENSER"]},

  { "id":"a35","prompt":"What does SSN stand for?","options":["Station Serial Number","Service Sequence Number","Signal Security Number","Station Status Notice"],"correctIndex":0,"explanation":"SSN is the 4-digit serial number.","tags":["GENSER"]},

  { "id":"a57","prompt":"What does CIC stand for?","options":["Content Indicator Code","Communications Integration Code","Command Identification Code","Circuit Indicator Classification"],"correctIndex":0,"explanation":"CIC = Content Indicator Code.","tags":["CIC"]},

  { "id":"a58","prompt":"Where is the CIC located in Format Line 2?","options":["Characters 5–8","Characters 4–9","Characters 10–16","Characters 1–4"],"correctIndex":0,"explanation":"Lesson 4: CIC occupies characters 5–8.","tags":["CIC"]},

  { "id":"a60","prompt":"Which CIC indicates Narrative / General Text?","options":["ZYUW","ZYVW","NGCN","ZDKW"],"correctIndex":0,"explanation":"ZYUW = Narrative.","tags":["CIC"]},

  { "id":"a61","prompt":"Which CIC indicates CASREP?","options":["NGCN","ZYUW","ZDKW","NBAT"],"correctIndex":0,"explanation":"NGCN = CASREP.","tags":["CIC"]},

  { "id":"a62","prompt":"Which CIC indicates Service Messages?","options":["ZYVW","ZYUW","NBAT","ZDKW"],"correctIndex":0,"explanation":"ZYVW = Service Message.","tags":["CIC"]},

  { "id":"a63","prompt":"Which CIC indicates Retransmission?","options":["ZDKW","NGCN","ZYVW","NBAT"],"correctIndex":0,"explanation":"ZDKW = Retransmission.","tags":["CIC"]},

  { "id":"a64","prompt":"Which CIC indicates Ammo (Naval Battery)?","options":["NBAT","ZDKW","ZYUW","NGCN"],"correctIndex":0,"explanation":"NBAT = Ammo.","tags":["CIC"]}

];
