function getClientInfo() {
    return {
      "name": SV.T("smash-notes"),
      "author": "vocatart",
      "versionNumber": 1,
      "minEditorVersion": 68352
    }
}

const midiNotes = {
    "C-1": 0,
    "C#-1": 1,
    "D-1": 2,
    "D#-1": 3,
    "E-1": 4,
    "F-1": 5,
    "F#-1": 6,
    "G-1": 7,
    "G#-1": 8,
    "A-1": 9,
    "A#-1": 10,
    "B-1": 11,
    "C0": 12,
    "C#0": 13,
    "D0": 14,
    "D#0": 15,
    "E0": 16,
    "F0": 17,
    "F#0": 18,
    "G0": 19,
    "G#0": 20,
    "A0": 21,
    "A#0": 22,
    "B0": 23,
    "C1": 24,
    "C#1": 25,
    "D1": 26,
    "D#1": 27,
    "E1": 28,
    "F1": 29,
    "F#1": 30,
    "G1": 31,
    "G#1": 32,
    "A1": 33,
    "A#1": 34,
    "B1": 35,
    "C2": 36,
    "C#2": 37,
    "D2": 38,
    "D#2": 39,
    "E2": 40,
    "F2": 41,
    "F#2": 42,
    "G2": 43,
    "G#2": 44,
    "A2": 45,
    "A#2": 46,
    "B2": 47,
    "C3": 48,
    "C#3": 49,
    "D3": 50,
    "D#3": 51,
    "E3": 52,
    "F3": 53,
    "F#3": 54,
    "G3": 55,
    "G#3": 56,
    "A3": 57,
    "A#3": 58,
    "B3": 59,
    "C4": 60,
    "C#4": 61,
    "D4": 62,
    "D#4": 63,
    "E4": 64,
    "F4": 65,
    "F#4": 66,
    "G4": 67,
    "G#4": 68,
    "A4": 69,
    "A#4": 70,
    "B4": 71,
    "C5": 72,
    "C#5": 73,
    "D5": 74,
    "D#5": 75,
    "E5": 76,
    "F5": 77,
    "F#5": 78,
    "G5": 79,
    "G#5": 80,
    "A5": 81,
    "A#5": 82,
    "B5": 83,
    "C6": 84,
    "C#6": 85,
    "D6": 86,
    "D#6": 87,
    "E6": 88,
    "F6": 89,
    "F#6": 90,
    "G6": 91,
    "G#6": 92,
    "A6": 93,
    "A#6": 94,
    "B6": 95,
    "C7": 96,
    "C#7": 97,
    "D7": 98,
    "D#7": 99,
    "E7": 100,
    "F7": 101,
    "F#7": 102,
    "G7": 103,
    "G#7": 104,
    "A7": 105,
    "A#7": 106,
    "B7": 107,
    "C8": 108,
    "C#8": 109,
    "D8": 110,
    "D#8": 111,
    "E8": 112,
    "F8": 113,
    "F#8": 114,
    "G8": 115,
    "G#8": 116,
    "A8": 117,
    "A#8": 118,
    "B8": 119,
    "C9": 120,
    "C#9": 121,
    "D9": 122,
    "D#9": 123,
    "E9": 124,
    "F9": 125,
    "F#9": 126,
    "G9": 127
};

function smashNotes(note){
    var notes = SV.getMainEditor().getSelection().getSelectedNotes();
    if (notes.length == 0) {
        SV.showMessageBox("error", "length error");
        SV.finish();
    }
    else if (!(note in midiNotes)) {
        SV.showMessageBox("error", "pitch error");
        SV.finish();
    }
    else {
        for(var notesItr = 0; notesItr < notes.length; notesItr ++) {
            notes[notesItr].setPitch(midiNotes[note]);
        }
    }
}



function main() {
    var messageBox = {
        "title"   : SV.T("smash-notes"),
        "message" : "its called smash notes because i hate that synth v cant do this and smash sounds violent",
        "buttons" : "OkCancel",
        "widgets" : [
            {
                "name" : "tb", "type" : "TextBox",
                "label" : "enter note name to smash notes to (sharp notation)",
                "default" : ""
            }
        ]
    }

    var entry = SV.showCustomDialog(messageBox);
    if (entry.status != 0) {
        smashNotes(entry.answers.tb);
    }
    
    SV.finish();
}