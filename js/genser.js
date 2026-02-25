const GENSER_BANK = [
  {
    "id": "g1",
    "prompt": "In Format Line 1, what does 'VZCZC' indicate?",
    "options": [
      "Start of message",
      "End of message",
      "Message precedence",
      "Classification redundancy"
    ],
    "correctIndex": 0,
    "explanation": "VZCZC indicates the start of the message (transmission identification line).",
    "tags": [
      "Line 1",
      "Transmission ID"
    ],
    "messageHtml": "<mark>VZCZC</mark>YKN001\nRTTUZYUW RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR 021200Z FEB 02\nFM USS YORKTOWN\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISBURSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\nNNNN"
  },
  {
    "id": "g2",
    "prompt": "In Format Line 1, what does the 3-letter group 'YKN' represent (per Lesson 4 example)?",
    "options": [
      "Station or channel designator",
      "Content Indicator Code",
      "Originating Station Routing Indicator",
      "Operating signal (OPSIG)"
    ],
    "correctIndex": 0,
    "explanation": "After VZCZC comes a 3-letter station/channel designator (YKN in the example).",
    "tags": [
      "Line 1",
      "Transmission ID"
    ],
    "messageHtml": "<mark>VZCZCYKN001</mark>\nRTTUZYUW RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR 021200Z FEB 02\nFM USS YORKTOWN\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISBURSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\nNNNN"
  },
  {
    "id": "g3",
    "prompt": "In the header line 'RTTUZYUW ...', what does the first character 'R' represent?",
    "options": [
      "Routine precedence",
      "Routing indicator start",
      "Restricted Data marker",
      "Radio day indicator"
    ],
    "correctIndex": 0,
    "explanation": "First character is precedence: R Routine, P Priority, O Immediate, Z Flash, Y Yankee.",
    "tags": [
      "Line 2",
      "Precedence"
    ],
    "messageHtml": "VZCZCYKN001\n<mark>RTTUZYUW</mark> RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR 021200Z FEB 02\nFM USS YORKTOWN\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISBURSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\nNNNN"
  },
  {
    "id": "g4",
    "prompt": "In the header line 'RTTUZYUW ...', what do characters 2–3 ('TT') represent?",
    "options": [
      "Language media format",
      "Classification",
      "Content indicator code",
      "Julian date"
    ],
    "correctIndex": 0,
    "explanation": "Characters 2–3 indicate language media format (e.g., C Card, A Automated).",
    "tags": [
      "Line 2",
      "LMF"
    ],
    "messageHtml": "VZCZCYKN001\n<mark>RTTUZYUW</mark> RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR 021200Z FEB 02\nFM USS YORKTOWN\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISBURSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\nNNNN"
  },
  {
    "id": "g5",
    "prompt": "In the header line 'RTTUZYUW ...', what does character 4 ('U') represent?",
    "options": [
      "Classification",
      "Precedence",
      "OPSIG",
      "OSRI"
    ],
    "correctIndex": 0,
    "explanation": "Character 4 indicates classification: U Unclass, C Confidential, S Secret, T Top Secret.",
    "tags": [
      "Line 2",
      "Classification"
    ],
    "messageHtml": "VZCZCYKN001\n<mark>RTTUZYUW</mark> RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR 021200Z FEB 02\nFM USS YORKTOWN\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISBURSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\nNNNN"
  },
  {
    "id": "g6",
    "prompt": "In the header line, which segment is the Content Indicator Code (CIC) in this example?",
    "options": [
      "ZYUW",
      "RHBCYKN",
      "0001",
      "033"
    ],
    "correctIndex": 0,
    "explanation": "Characters 5–8 are CIC; ZYUW indicates narrative/general text.",
    "tags": [
      "Line 2",
      "CIC"
    ],
    "messageHtml": "VZCZCYKN001\nRTTU<mark>ZYUW</mark> RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR 021200Z FEB 02\nFM USS YORKTOWN\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISBURSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\nNNNN"
  },
  {
    "id": "g7",
    "prompt": "Which part of the header is the Originating Station’s Routing Indicator (OSRI) in this example?",
    "options": [
      "RHBCYKN",
      "RUDOSAB",
      "0331200",
      "UUUU"
    ],
    "correctIndex": 0,
    "explanation": "Characters 10–16 are the OSRI (RHBCYKN).",
    "tags": [
      "Line 2",
      "OSRI"
    ],
    "messageHtml": "VZCZCYKN001\nRTTUZYUW <mark>RHBCYKN</mark>0001 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR 021200Z FEB 02\nFM USS YORKTOWN\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISBURSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\nNNNN"
  },
  {
    "id": "g8",
    "prompt": "Which part of the header is the Station Serial Number (SSN) in this example?",
    "options": [
      "0001",
      "033",
      "1200",
      "UUUU"
    ],
    "correctIndex": 0,
    "explanation": "Characters 17–20 contain the SSN, a 4-digit number starting at 0001.",
    "tags": [
      "Line 2",
      "SSN"
    ],
    "messageHtml": "VZCZCYKN001\nRTTUZYUW <mark>RHBCYKN0001</mark> 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR 021200Z FEB 02\nFM USS YORKTOWN\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISBURSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\nNNNN"
  },
  {
    "id": "g9",
    "prompt": "In the header, what does the '033' represent?",
    "options": [
      "Julian date",
      "Time filed",
      "CIC",
      "Classification redundancy"
    ],
    "correctIndex": 0,
    "explanation": "Characters 22–24 are the Julian date (001=Jan 1 … 365=Dec 31; 366 leap years).",
    "tags": [
      "Line 2",
      "Julian Date"
    ],
    "messageHtml": "VZCZCYKN001\nRTTUZYUW RHBCYKN0001 <mark>0331200</mark>-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR 021200Z FEB 02\nFM USS YORKTOWN\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISBURSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\nNNNN"
  },
  {
    "id": "g10",
    "prompt": "In Format Line 4 'ZNR UUUUU', what does ZNR indicate?",
    "options": [
      "Unclassified message traffic OPSIG",
      "Confidential-or-higher OPSIG",
      "Break between header and body",
      "End-of-message sign"
    ],
    "correctIndex": 0,
    "explanation": "ZNR indicates unclassified message traffic. ZNY is used for confidential or higher.",
    "tags": [
      "Line 4",
      "OPSIG"
    ],
    "messageHtml": "VZCZCYKN001\nRTTUZYUW RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\n<mark>ZNR UUUUU</mark>\nR 021200Z FEB 02\nFM USS YORKTOWN\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISBURSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\nNNNN"
  },
  {
    "id": "g11",
    "prompt": "In Format Line 5 'R 021200Z FEB 02', which element indicates the time zone?",
    "options": [
      "Z",
      "FEB",
      "02 (year)",
      "021200 (day/hour/min)"
    ],
    "correctIndex": 0,
    "explanation": "'Z' indicates Zulu (GMT/UTC) time in DTG formatting.",
    "tags": [
      "Line 5",
      "DTG"
    ],
    "messageHtml": "VZCZCYKN001\nRTTUZYUW RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR <mark>021200Z</mark> FEB 02\nFM USS YORKTOWN\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISBURSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\nNNNN"
  },
  {
    "id": "g12",
    "prompt": "Which prosign identifies the originator line in a GENSER message?",
    "options": [
      "FM",
      "TO",
      "INFO",
      "XMT"
    ],
    "correctIndex": 0,
    "explanation": "Format Line 6 uses prosign FM followed by the originator PLA.",
    "tags": [
      "Line 6",
      "Originator"
    ],
    "messageHtml": "VZCZCYKN001\nRTTUZYUW RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR 021200Z FEB 02\n<mark>FM USS YORKTOWN</mark>\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISBURSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\nNNNN"
  },
  {
    "id": "g13",
    "prompt": "Which prosign identifies action addressees (must take action)?",
    "options": [
      "TO",
      "INFO",
      "FM",
      "BT"
    ],
    "correctIndex": 0,
    "explanation": "Format Line 7 uses TO for action addressees.",
    "tags": [
      "Line 7",
      "Action"
    ],
    "messageHtml": "VZCZCYKN001\nRTTUZYUW RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR 021200Z FEB 02\nFM USS YORKTOWN\n<mark>TO USS CURTIS</mark>\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISBURSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\nNNNN"
  },
  {
    "id": "g14",
    "prompt": "Which prosign identifies information addressees (inform only)?",
    "options": [
      "INFO",
      "TO",
      "FM",
      "RMKS"
    ],
    "correctIndex": 0,
    "explanation": "Format Line 8 uses INFO for information addressees.",
    "tags": [
      "Line 8",
      "Info"
    ],
    "messageHtml": "VZCZCYKN001\nRTTUZYUW RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR 021200Z FEB 02\nFM USS YORKTOWN\nTO USS CURTIS\n<mark>INFO SPCC MECHANICSBURG PA</mark>\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISBURSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\nNNNN"
  },
  {
    "id": "g15",
    "prompt": "What does the prosign 'BT' separate at the first occurrence in the message?",
    "options": [
      "Header from body",
      "Body from footer",
      "Routing indicators from OSRI",
      "DTG from originator"
    ],
    "correctIndex": 0,
    "explanation": "Format Line 11 BT separates heading (header) from the message text (body).",
    "tags": [
      "Line 11",
      "Break"
    ],
    "messageHtml": "VZCZCYKN001\nRTTUZYUW RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR 021200Z FEB 02\nFM USS YORKTOWN\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA<mark>\nBT\nUNCLAS</mark> //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISBURSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\nNNNN"
  },
  {
    "id": "g16",
    "prompt": "What does the second 'BT' separate in the message?",
    "options": [
      "Body from footer",
      "Header from body",
      "Security warning from DTG",
      "CIC from OSRI"
    ],
    "correctIndex": 0,
    "explanation": "Format Line 13 BT separates the body from the footer.",
    "tags": [
      "Line 13",
      "Break"
    ],
    "messageHtml": "VZCZCYKN001\nRTTUZYUW RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR 021200Z FEB 02\nFM USS YORKTOWN\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISBURSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//<mark>\nBT\n#0001</mark>\n\n\nNNNN"
  },
  {
    "id": "g17",
    "prompt": "In the footer, what is the purpose of '#0001'?",
    "options": [
      "Validation duplicating SSN to verify completeness",
      "AIG designator for multiple addressees",
      "OPSIG for confidential traffic",
      "Julian date of message filing"
    ],
    "correctIndex": 0,
    "explanation": "Validation line duplicates the SSN preceded by '#', preventing stragglers.",
    "tags": [
      "Line 14",
      "Validation"
    ],
    "messageHtml": "VZCZCYKN001\nRTTUZYUW RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR 021200Z FEB 02\nFM USS YORKTOWN\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISBURSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n<mark>#0001</mark>\n\n\nNNNN"
  },
  {
    "id": "g18",
    "prompt": "What is the end-of-message sign in this format (Lesson 4)?",
    "options": [
      "NNNN",
      "VZCZC",
      "BT",
      "ZNR"
    ],
    "correctIndex": 0,
    "explanation": "End sign is NNNN (often preceded by blank lines) indicating end of message.",
    "tags": [
      "Line 16",
      "EOM"
    ],
    "messageHtml": "VZCZCYKN001\nRTTUZYUW RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR 021200Z FEB 02\nFM USS YORKTOWN\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISBURSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\n<mark>NNNN</mark>"
  },
  {
    "id": "g19",
    "prompt": "Which field in the body identifies the SSIC used to aid automated routing internal to a command (as described in Lesson 4)?",
    "options": [
      "The code inside the classification line (e.g., //N03207//)",
      "The SSN (e.g., 0001)",
      "The CIC (e.g., ZYUW)",
      "The OSRI (e.g., RHBCYKN)"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: the SSIC appears within the classification/designation line (e.g., UNCLAS //N03207// ...).",
    "tags": [
      "Body",
      "SSIC"
    ],
    "messageHtml": "VZCZCYKN001\nRTTUZYUW RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR 021200Z FEB 02\nFM USS YORKTOWN\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS <mark>//N03207//</mark> PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISBURSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\nNNNN"
  },
  {
    "id": "g20",
    "prompt": "If a message has only one reference and that reference requires additional discussion, which field is used (Lesson 4)?",
    "options": [
      "AMPN",
      "NARR",
      "XMT",
      "OPSIG"
    ],
    "correctIndex": 0,
    "explanation": "AMPN follows a single REF set when additional discussion is needed (or TEL/CON/DOC/MSG/LTR types).",
    "tags": [
      "Body",
      "AMPN"
    ],
    "messageHtml": "VZCZCYKN001\nRTTUZYUW RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR 021200Z FEB 02\nFM USS YORKTOWN\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\n<mark>AMPN/REF A</mark> IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISBURSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\nNNNN"
  },
  {
    "id": "g21",
    "prompt": "In a GENSER message, what is Format Line 1?",
    "options": [
      "Transmission Identification",
      "Originator",
      "Security Warning",
      "Validation"
    ],
    "correctIndex": 0,
    "explanation": "Format Line 1 is Transmission Identification (e.g., VZCZCYKN001).",
    "tags": [
      "Line 1"
    ]
  },
  {
    "id": "g22",
    "prompt": "What does 'VZCZC' indicate in Format Line 1?",
    "options": [
      "Start of message",
      "End of message",
      "Routing indicator begins",
      "Break between header and body"
    ],
    "correctIndex": 0,
    "explanation": "VZCZC indicates the start of a message.",
    "tags": [
      "Line 1"
    ]
  },
  {
    "id": "g23",
    "prompt": "In Format Line 1, the 3-letter station/channel designator in the example is:",
    "options": [
      "YKN",
      "RHBCYKN",
      "RULYCUR",
      "ZNR"
    ],
    "correctIndex": 0,
    "explanation": "Example line: VZCZC | YKN | 001.",
    "tags": [
      "Line 1"
    ]
  },
  {
    "id": "g24",
    "prompt": "In Format Line 1, what does the trailing three-digit number (e.g., 001) represent?",
    "options": [
      "Sequential number of transmissions",
      "Julian day",
      "Station serial number (SSN)",
      "Message precedence"
    ],
    "correctIndex": 0,
    "explanation": "It’s the 3-digit sequential number of transmissions.",
    "tags": [
      "Line 1"
    ]
  },
  {
    "id": "g25",
    "prompt": "Identify the highlighted line in the message below.",
    "options": [
      "Format Line 1: Transmission Identification",
      "Format Line 2: Message Header Information",
      "Format Line 4: Security Warning",
      "Format Line 5: Date-Time Group"
    ],
    "correctIndex": 0,
    "explanation": "The highlighted VZCZCYKN001 is Format Line 1.",
    "tags": [
      "Visual"
    ],
    "messageHtml": "<mark>VZCZCYKN001</mark>\nRTTUZYUW RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR 021200Z FEB 02\nFM USS YORKTOWN\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISPERSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\n\n\n\n\n\nNNNN"
  },
  {
    "id": "g26",
    "prompt": "In Format Line 2, what does the FIRST character indicate?",
    "options": [
      "Message precedence",
      "Language/media format",
      "Classification",
      "Content indicator code"
    ],
    "correctIndex": 0,
    "explanation": "First character is precedence indicator (R, P, O, Z, Y).",
    "tags": [
      "Line 2"
    ]
  },
  {
    "id": "g27",
    "prompt": "In Format Line 2, characters 2–3 indicate:",
    "options": [
      "Language/media format",
      "Classification redundancy",
      "Julian date",
      "OPSIG"
    ],
    "correctIndex": 0,
    "explanation": "Chars 2–3 indicate language/media format (e.g., TT).",
    "tags": [
      "Line 2"
    ]
  },
  {
    "id": "g28",
    "prompt": "In Format Line 2, character 4 indicates:",
    "options": [
      "Classification",
      "Precedence",
      "Routing indicator type",
      "End of routing signal"
    ],
    "correctIndex": 0,
    "explanation": "Character 4 is classification (U/C/S/T).",
    "tags": [
      "Line 2"
    ]
  },
  {
    "id": "g29",
    "prompt": "In Format Line 2, characters 5–8 are the:",
    "options": [
      "Content Indicator Code (CIC)",
      "Originating Station Routing Indicator (OSRI)",
      "Station Serial Number (SSN)",
      "Operating signal (OPSIG)"
    ],
    "correctIndex": 0,
    "explanation": "Chars 5–8 are the CIC (e.g., ZYUW).",
    "tags": [
      "Line 2",
      "CIC"
    ]
  },
  {
    "id": "g30",
    "prompt": "Which precedence indicator corresponds to FLASH in Lesson 4?",
    "options": [
      "Z",
      "O",
      "P",
      "Y"
    ],
    "correctIndex": 0,
    "explanation": "Z = Flash (per lesson).",
    "tags": [
      "Precedence"
    ]
  },
  {
    "id": "g31",
    "prompt": "Which precedence indicator corresponds to IMMEDIATE in Lesson 4?",
    "options": [
      "O",
      "P",
      "Z",
      "R"
    ],
    "correctIndex": 0,
    "explanation": "O = Immediate (per lesson).",
    "tags": [
      "Precedence"
    ]
  },
  {
    "id": "g32",
    "prompt": "Which precedence indicator corresponds to PRIORITY in Lesson 4?",
    "options": [
      "P",
      "R",
      "O",
      "Y"
    ],
    "correctIndex": 0,
    "explanation": "P = Priority (per lesson).",
    "tags": [
      "Precedence"
    ]
  },
  {
    "id": "g33",
    "prompt": "Which precedence indicator corresponds to ROUTINE in Lesson 4?",
    "options": [
      "R",
      "P",
      "O",
      "Z"
    ],
    "correctIndex": 0,
    "explanation": "R = Routine.",
    "tags": [
      "Precedence"
    ]
  },
  {
    "id": "g34",
    "prompt": "In Lesson 4, 'Y' is listed as which precedence indicator?",
    "options": [
      "Yankee",
      "Urgent",
      "Yield",
      "Yellow"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4 lists Y = Yankee.",
    "tags": [
      "Precedence"
    ]
  },
  {
    "id": "g35",
    "prompt": "Identify the highlighted line in the message below.",
    "options": [
      "Format Line 2: Message Header Information",
      "Format Line 4: Security Warning",
      "Format Line 5: Date-Time Group",
      "Format Line 6: Originator"
    ],
    "correctIndex": 0,
    "explanation": "The long RTTU... line is Format Line 2 (message header).",
    "tags": [
      "Visual"
    ],
    "messageHtml": "VZCZCYKN001\n<mark>RTTUZYUW RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.</mark>\nZNR UUUUU\nR 021200Z FEB 02\nFM USS YORKTOWN\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISPERSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\n\n\n\n\n\nNNNN"
  },
  {
    "id": "g36",
    "prompt": "Format Line 4 consists of:",
    "options": [
      "A 3-letter OPSIG followed by a 5-character classification group",
      "A 4-character CIC followed by OSRI and SSN",
      "A precedence indicator plus DTG",
      "A PLA preceded by 'FM'"
    ],
    "correctIndex": 0,
    "explanation": "Format Line 4: OPSIG (3 letters) + 5-char classification group.",
    "tags": [
      "Line 4"
    ]
  },
  {
    "id": "g37",
    "prompt": "In Lesson 4, which OPSIG indicates UNCLASSIFIED message traffic?",
    "options": [
      "ZNR",
      "ZNY",
      "ZUJ",
      "QSL"
    ],
    "correctIndex": 0,
    "explanation": "ZNR = unclassified message traffic.",
    "tags": [
      "OPSIG"
    ]
  },
  {
    "id": "g38",
    "prompt": "In Lesson 4, which OPSIG indicates CONFIDENTIAL or higher message traffic?",
    "options": [
      "ZNY",
      "ZNR",
      "ZUE",
      "ZUG"
    ],
    "correctIndex": 0,
    "explanation": "ZNY indicates confidential or higher classifications.",
    "tags": [
      "OPSIG"
    ]
  },
  {
    "id": "g39",
    "prompt": "Identify the highlighted line in the message below.",
    "options": [
      "Format Line 4: Security Warning",
      "Format Line 5: Date-Time Group",
      "Format Line 11: Break",
      "Format Line 14: Validation"
    ],
    "correctIndex": 0,
    "explanation": "ZNR UUUUU is Format Line 4 (security warning).",
    "tags": [
      "Visual"
    ],
    "messageHtml": "VZCZCYKN001\nRTTUZYUW RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\n<mark>ZNR UUUUU</mark>\nR 021200Z FEB 02\nFM USS YORKTOWN\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISPERSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\n\n\n\n\n\nNNNN"
  },
  {
    "id": "g40",
    "prompt": "Format Line 5 begins with the message precedence indicator followed by:",
    "options": [
      "A space and the Date-Time Group (DTG)",
      "The OSRI and station serial number",
      "The OPSIG and classification group",
      "The routing indicators and routing signal period"
    ],
    "correctIndex": 0,
    "explanation": "Line 5 begins with precedence indicator then DTG.",
    "tags": [
      "Line 5"
    ]
  },
  {
    "id": "g41",
    "prompt": "Which DTG format matches Lesson 4?",
    "options": [
      "Day Hour Minute TimeZone Month Year (e.g., 021200Z FEB 02)",
      "Month Day Year Hour Minute TimeZone (e.g., FEB 02 021200Z)",
      "JulianDay TimeFiled Zulu Month Year (e.g., 0331200Z FEB 02)",
      "Hour Minute Day Month Year (e.g., 1200 02 FEB 02)"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4 DTG: Day, Hour, Minutes, TimeZone, Month, Year.",
    "tags": [
      "DTG"
    ]
  },
  {
    "id": "g42",
    "prompt": "Identify the highlighted line in the message below.",
    "options": [
      "Format Line 5: Date-Time Group",
      "Format Line 2: Message Header Information",
      "Format Line 6: Originator",
      "Format Line 8: Information Addressee"
    ],
    "correctIndex": 0,
    "explanation": "R 021200Z FEB 02 is Format Line 5 (DTG line).",
    "tags": [
      "Visual"
    ],
    "messageHtml": "VZCZCYKN001\nRTTUZYUW RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\n<mark>R 021200Z FEB 02</mark>\nFM USS YORKTOWN\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISPERSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\n\n\n\n\n\nNNNN"
  },
  {
    "id": "g43",
    "prompt": "Format Line 6 (Originator) begins with which prosign?",
    "options": [
      "FM",
      "TO",
      "INFO",
      "BT"
    ],
    "correctIndex": 0,
    "explanation": "Line 6 uses prosign FM followed by originator PLA.",
    "tags": [
      "Line 6"
    ]
  },
  {
    "id": "g44",
    "prompt": "Format Line 7 (Action Addressee) begins with which prosign?",
    "options": [
      "TO",
      "FM",
      "INFO",
      "BT"
    ],
    "correctIndex": 0,
    "explanation": "Line 7 uses prosign TO.",
    "tags": [
      "Line 7"
    ]
  },
  {
    "id": "g45",
    "prompt": "Format Line 8 (Information Addressee) begins with which prosign?",
    "options": [
      "INFO",
      "TO",
      "FM",
      "BT"
    ],
    "correctIndex": 0,
    "explanation": "Line 8 uses prosign INFO.",
    "tags": [
      "Line 8"
    ]
  },
  {
    "id": "g46",
    "prompt": "Identify the highlighted line in the message below.",
    "options": [
      "Format Line 6: Originator",
      "Format Line 7: Action Addressee",
      "Format Line 8: Information Addressee",
      "Format Line 11: Break"
    ],
    "correctIndex": 0,
    "explanation": "FM USS YORKTOWN is Format Line 6 (Originator).",
    "tags": [
      "Visual"
    ],
    "messageHtml": "VZCZCYKN001\nRTTUZYUW RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR 021200Z FEB 02\n<mark>FM USS YORKTOWN</mark>\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISPERSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\n\n\n\n\n\nNNNN"
  },
  {
    "id": "g47",
    "prompt": "Identify the highlighted line in the message below.",
    "options": [
      "Format Line 7: Action Addressee",
      "Format Line 6: Originator",
      "Format Line 8: Information Addressee",
      "Format Line 14: Validation"
    ],
    "correctIndex": 0,
    "explanation": "TO USS CURTIS is Format Line 7.",
    "tags": [
      "Visual"
    ],
    "messageHtml": "VZCZCYKN001\nRTTUZYUW RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR 021200Z FEB 02\nFM USS YORKTOWN\n<mark>TO USS CURTIS</mark>\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISPERSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\n\n\n\n\n\nNNNN"
  },
  {
    "id": "g48",
    "prompt": "Identify the highlighted line in the message below.",
    "options": [
      "Format Line 8: Information Addressee",
      "Format Line 7: Action Addressee",
      "Format Line 5: Date-Time Group",
      "Format Line 11: Break"
    ],
    "correctIndex": 0,
    "explanation": "INFO SPCC MECHANICSBURG PA is an INFO addressee line (Format Line 8).",
    "tags": [
      "Visual"
    ],
    "messageHtml": "VZCZCYKN001\nRTTUZYUW RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR 021200Z FEB 02\nFM USS YORKTOWN\nTO USS CURTIS\n<mark>INFO SPCC MECHANICSBURG PA</mark>\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISPERSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\n\n\n\n\n\nNNNN"
  },
  {
    "id": "g49",
    "prompt": "Format Line 11 (BT) separates:",
    "options": [
      "Header from body",
      "Footer from end-of-message sign",
      "Originator from action addressee",
      "Security warning from DTG"
    ],
    "correctIndex": 0,
    "explanation": "First BT breaks header to body.",
    "tags": [
      "BT"
    ]
  },
  {
    "id": "g50",
    "prompt": "Format Line 13 (BT) separates:",
    "options": [
      "Body from footer",
      "Header from body",
      "Message header from routing indicators",
      "Validation from ending sign"
    ],
    "correctIndex": 0,
    "explanation": "Second BT separates body from footer.",
    "tags": [
      "BT"
    ]
  },
  {
    "id": "g51",
    "prompt": "Identify the highlighted line in the message below.",
    "options": [
      "Format Line 11: Break (BT)",
      "Format Line 13: Break (BT)",
      "Format Line 16: Ending Sign",
      "Format Line 12: Text"
    ],
    "correctIndex": 0,
    "explanation": "The first BT after addressees is the header/body break (Format Line 11).",
    "tags": [
      "Visual"
    ],
    "messageHtml": "VZCZCYKN001\nRTTUZYUW RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR 021200Z FEB 02\nFM USS YORKTOWN\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\n<mark>BT</mark>\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISPERSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\n\n\n\n\n\nNNNN"
  },
  {
    "id": "g52",
    "prompt": "Format Line 14 is used to:",
    "options": [
      "Verify the message is complete by duplicating the SSN with a leading #",
      "Indicate the routing indicators of the destination",
      "Mark the end of header and start of body",
      "Specify OPSIG and classification traffic group"
    ],
    "correctIndex": 0,
    "explanation": "Line 14 duplicates SSN (from header) with # to verify complete, not a straggler.",
    "tags": [
      "Line 14"
    ]
  },
  {
    "id": "g53",
    "prompt": "A 'straggler' (Lesson 4) is:",
    "options": [
      "A combination of two different messages",
      "A Routine precedence message",
      "A message missing routing indicators",
      "An INFO-only message with no action addressee"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: straggler = combination of two different messages (longer).",
    "tags": [
      "Straggler"
    ]
  },
  {
    "id": "g54",
    "prompt": "Format Line 16 ends with which characters?",
    "options": [
      "NNNN",
      "BT",
      "####",
      "VZCZC"
    ],
    "correctIndex": 0,
    "explanation": "Ending sign is NNNN.",
    "tags": [
      "Line 16"
    ]
  },
  {
    "id": "g55",
    "prompt": "Identify the highlighted line in the message below.",
    "options": [
      "Format Line 14: Validation",
      "Format Line 16: Ending Sign",
      "Format Line 12: Text",
      "Format Line 2: Message Header Information"
    ],
    "correctIndex": 0,
    "explanation": "#0001 is the validation line (Format Line 14).",
    "tags": [
      "Visual"
    ],
    "messageHtml": "VZCZCYKN001\nRTTUZYUW RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR 021200Z FEB 02\nFM USS YORKTOWN\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISPERSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n<mark>#0001</mark>\n\n\n\n\n\n\n\nNNNN"
  },
  {
    "id": "g56",
    "prompt": "Identify the highlighted line in the message below.",
    "options": [
      "Format Line 16: Ending Sign",
      "Format Line 14: Validation",
      "Format Line 13: Break",
      "Format Line 4: Security Warning"
    ],
    "correctIndex": 0,
    "explanation": "NNNN is the ending sign (Format Line 16).",
    "tags": [
      "Visual"
    ],
    "messageHtml": "VZCZCYKN001\nRTTUZYUW RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.\nZNR UUUUU\nR 021200Z FEB 02\nFM USS YORKTOWN\nTO USS CURTIS\nINFO SPCC MECHANICSBURG PA\nDESRON TEN\nAIG 1123\nUSS TICONDEROGA\nBT\nUNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS\nMSGID/GENADMIN/YORKTOWN/-/FEB//\nSUBJ/(U)NAVY WIDE GOLF TOURNAMENT//\nREF/A/TELCON/RADM STORM/01FEB02//\nAMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON THE MS GULF COAST.//\nRMKS/1. IAW REF A, PLEASE DISPERSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//\nBT\n#0001\n\n\n\n\n\n\n\n<mark>NNNN</mark>"
  },
  {
    "id": "g57",
    "prompt": "Lesson 4 states the end of message consists of:",
    "options": [
      "8 carriage returns followed by NNNN",
      "4 carriage returns followed by BT",
      "A single period after routing indicators",
      "Two spaces after the OSRI"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: 8 carriage returns then NNNN; some systems may not show blanks.",
    "tags": [
      "EOM"
    ]
  },
  {
    "id": "g58",
    "prompt": "In Format Line 2, characters 10–16 are the:",
    "options": [
      "Originating Station Routing Indicator (OSRI)",
      "Content Indicator Code (CIC)",
      "Station Serial Number (SSN)",
      "Destination routing indicators"
    ],
    "correctIndex": 0,
    "explanation": "Chars 10–16 = OSRI (who drafted/transmitted).",
    "tags": [
      "Line 2",
      "OSRI"
    ]
  },
  {
    "id": "g59",
    "prompt": "In Format Line 2, characters 17–20 are the:",
    "options": [
      "Station Serial Number (SSN)",
      "Julian date",
      "Time filed",
      "Classification redundancy"
    ],
    "correctIndex": 0,
    "explanation": "Chars 17–20 = SSN (0001..9998).",
    "tags": [
      "Line 2",
      "SSN"
    ]
  },
  {
    "id": "g60",
    "prompt": "In Format Line 2, characters 22–24 are the:",
    "options": [
      "Julian Date",
      "Routing Indicators",
      "OPSIG",
      "Language/media format"
    ],
    "correctIndex": 0,
    "explanation": "Chars 22–24 = Julian date (001..365/366).",
    "tags": [
      "Line 2",
      "Julian"
    ]
  },
  {
    "id": "g61",
    "prompt": "In Format Line 2, characters 25–28 are the:",
    "options": [
      "Time filed (GMT/Zulu)",
      "Message precedence and DTG",
      "OSRI and SSN",
      "Classification redundancy"
    ],
    "correctIndex": 0,
    "explanation": "Chars 25–28 = time filed (4-digit GMT/Zulu).",
    "tags": [
      "Line 2",
      "Time Filed"
    ]
  },
  {
    "id": "g62",
    "prompt": "In Format Line 2, characters 29–33 represent:",
    "options": [
      "Classification redundancy (hyphen + 4 repeated classification characters)",
      "Destination routing indicators",
      "Station serial number",
      "End of message sign"
    ],
    "correctIndex": 0,
    "explanation": "Chars 29–33 = classification redundancy.",
    "tags": [
      "Line 2",
      "Redundancy"
    ]
  },
  {
    "id": "g63",
    "prompt": "In Format Line 2, what indicates the start of routing indicators for destinations?",
    "options": [
      "A double hyphen (“--”)",
      "The first separator space",
      "The routing signal period",
      "The OPSIG group"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: routing indicators begin at character 34 with the start-of-signal double hyphen.",
    "tags": [
      "Routing"
    ]
  },
  {
    "id": "g64",
    "prompt": "When is the routing signal period “.” used in Format Line 2 (Lesson 4)?",
    "options": [
      "Only when the last routing indicator is inserted",
      "At the end of every header line regardless of routing indicators",
      "Only on classified messages",
      "Only when OPSIG is ZNY"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: the period is used only when the last routing indicator is inserted.",
    "tags": [
      "Routing"
    ]
  },
  {
    "id": "g65",
    "prompt": "In the GENSER body, what is the purpose of the 'end-of-classification indicator' statement in text (Lesson 4)?",
    "options": [
      "It separates classification/special-handling caveats from the actual text",
      "It duplicates SSN to verify completeness",
      "It begins the routing indicators section",
      "It marks the header/body BT break"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: end-of-classification indicator separates caveats from actual message text.",
    "tags": [
      "Body"
    ]
  },
  {
    "id": "g66",
    "prompt": "In message text, what does SUBJ identify (Lesson 4)?",
    "options": [
      "The basic contents of the message (and may include a classification symbol)",
      "The station serial number and routing indicator",
      "The OPSIG and traffic classification group",
      "The header/body break point"
    ],
    "correctIndex": 0,
    "explanation": "SUBJ indicates basic contents of message and includes classification symbol in subject.",
    "tags": [
      "Body"
    ]
  },
  {
    "id": "g67",
    "prompt": "Which REF type corresponds to a telephone conversation (Lesson 4)?",
    "options": [
      "TEL",
      "DOC",
      "MSG",
      "LTR"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: TEL = Telephone conversation (often shown as TELCON).",
    "tags": [
      "REF"
    ]
  },
  {
    "id": "g68",
    "prompt": "AMPN is used when:",
    "options": [
      "Only one reference is listed and it requires additional discussion, or it is one of TEL/CON/DOC/MSG/LTR",
      "Two or more references are listed and a narrative is required",
      "The message has no references but includes RMKS",
      "The message is under MINIMIZE conditions"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: AMPN follows a single REF set when additional discussion is needed; multiple references use NARR.",
    "tags": [
      "AMPN"
    ]
  },
  {
    "id": "g69",
    "prompt": "If a message lists multiple references, the lesson states use of a ______ is required.",
    "options": [
      "NARR",
      "AMPN",
      "OPSIG",
      "AIG"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: multiple references require a NARR.",
    "tags": [
      "NARR"
    ]
  },
  {
    "id": "g70",
    "prompt": "The RMKS section is used to:",
    "options": [
      "Explain the purpose of the message",
      "Provide routing indicators for delivery",
      "Set OPSIG and classification traffic groups",
      "Replace the need for SUBJ and REF sections"
    ],
    "correctIndex": 0,
    "explanation": "Lesson 4: RMKS explains the purpose of the message.",
    "tags": [
      "RMKS"
    ]
  }
];
