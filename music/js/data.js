export const NOTES = {

    sharp_en: [
        "C","C#","D","D#","E","F",
        "F#","G","G#","A","A#","B"
    ],

    flat_en: [
        "C","Db","D","Eb","E","F",
        "Gb","G","Ab","A","Bb","B"
    ],

    sharp_fr: [
        "Do","Do♯","Ré","Ré♯","Mi","Fa",
        "Fa♯","Sol","Sol♯","La","La♯","Si"
    ],

    flat_fr: [
        "Do","Ré♭","Ré","Mi♭","Mi","Fa",
        "Sol♭","Sol","La♭","La","Si♭","Si"
    ]

};

export const TEXT = {

    en: {
        scales: "Scales",
        chords: "Chords",
        notation: "Notation",
        language: "Language"
    },

    fr: {
        scales: "Gammes",
        chords: "Accords",
        notation: "Notation",
        language: "Langue"
    }

};

export const THEORY = {

        major: {
          category: "scales",
            name_en: "Major",
            name_fr: "Majeure",
            highlights: [0,2,4,5,7,9,11],
            labels: [
                "I","","ii","","iii","IV","","V","","vi","","vii°"
            ]
        },

        minor: {
          category: "scales",
            name_en: "Minor",
            name_fr: "Mineure",
            highlights: [0,2,3,5,7,8,10],
            labels: [
                "i","","ii°","","III","iv","","v","","VI","","VII"
            ]
        },

        pentaMajor: {
          category: "scales",
            name_en: "Pentatonic Major",
            name_fr: "Pentatonique Majeure",
            highlights:[0,2,4,7,9]
        },

        pentaMinor: {
          category: "scales",
            name_en: "Pentatonic Minor",
            name_fr: "Pentatonique Mineure",
            highlights:[0,3,5,7,10]
        }

        major:{
          category: "chords",
          name_en: "Major",
          name_fr: "Majeur",
          highlights:[0,4,7]
        },

        minor:{
            category: "chords",
            name_en: "Minor",
            name_fr: "Mineur",
            highlights:[0,3,7]
        },

        dim:{
            category: "chords",
            name_en: "Diminished",
            name_fr: "Diminué",
            highlights:[0,3,6]
        },

        aug:{
            category: "chords",
            name_en: "Augmented",
            name_fr: "Augmenté",
            highlights:[0,4,8]
        },

        seven:{
            category: "chords",
            name_en: "Dominant 7",
            name_fr: "Septième Dominante",
            highlights:[0,4,7,10]
        },

        maj7:{
            category: "chords",
            name_en: "Major 7",
            name_fr: "Septième Majeure",
            highlights:[0,4,7,11]
        },

        min7:{
            category: "chords",
            name_en: "Minor 7",
            name_fr: "Septième Mineure",
            highlights:[0,3,7,10]
        },

        sus2:{
            category: "chords",
            name_en: "Suspended Second",
            name_fr: "Seconde Suspendue",
            highlights:[0,2,7]
        },

        sus4:{
            category: "chords",
            name_en: "Suspended Fourth",
            name_fr: "Quarte Suspendue",
            highlights:[0,5,7]
        }

}