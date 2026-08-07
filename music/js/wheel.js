// WHEEL.JS //
var degree = 0;
var dragging = false;
var radians_click;
var degree_click;
var degree_start = 0;
var center_x;
var center_y;
var target;

const notes = useFlats ? notesFlat : notesSharp;

for(let i=0;i<12;i++){

    const label = $("<div>")
        .addClass("box")
        .addClass("textbox")
        .addClass(i+1);

    $("#wheel").append(label);

}

// get center of div to rotate
$(function() {
  $('.in').on('pointerdown', function(e) {
    $(this).css("cursor", "grabbing");
    target = this;
    pwBox = this.getBoundingClientRect();
    center_x = (pwBox.left + pwBox.right) / 2;
    center_y = (pwBox.top + pwBox.bottom) / 2;
    mouse_x = e.clientX;
    mouse_y = e.clientY;
    radians_click = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    degree_click = (radians_click * (180 / Math.PI) * -1) + 180;
    dragging = true;
  });
  $(document).on('pointerup', function() {
    $('.in').css("cursor", "grab");
    dragging = false;
    if(target){
      if (Math.abs(degree) % 30 <= 15) {
      } else {
        degree = degree + (degree % 30);
      }
      degree = degree - (degree % 30);
      $(target).animate({rotate:degree+'deg'},200);
      degree_start[target.id] = degree;
      var x = degree % 360;
      var lettre = "";
      if (x == 0) {
        lettre = "C";
      } else if (x == 330 || x == -30) {
        lettre = "C#";
      } else if (x == 300 || x == -60) {
        lettre = "D";
      } else if (x == 270 || x == -90) {
        lettre = "D#";
      } else if (x == 240 || x == -120) {
        lettre = "E";
      } else if (x == 210 || x == -150) {
        lettre = "F";
      } else if (x == 180 || x == -180) {
        lettre = "F#";
      } else if (x == 150 || x == -210) {
        lettre = "G";
      } else if (x == 120 || x == -240) {
        lettre = "G#";
      } else if (x == 90 || x == -270) {
        lettre = "A";
      } else if (x == 60 || x == -300) {
        lettre = "A#";
      } else if (x == 30 || x == -330) {
        lettre = "B";
      }
      var self = this;
      $(target).parent().parent().siblings().children('.lettre').html(lettre);
      target = "";
    }
  });
  $(document).on('pointermove', function(event) {
    if (dragging) {
      mouse_x = event.clientX;
      mouse_y = event.clientY;
      var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
      var degree_raw = ((radians * (180 / Math.PI) * -1) + 180) - degree_click + degree_start[target.id];
         degree = degree_raw;
      $(target).animate({rotate:degree+'deg'},0);
    }
  });
})
$('.spark').on("mouseenter",function(){
$(this).css('background','rgba(' + Math.random()*255 + ',' + Math.random()*255 + ',' + Math.random()*255 + ',0.4)');
}).on( "mouseleave",function(){
 $(this).css('background','white')
});

$(document).ready(function() {
function initWheel();
})


// APP.JS //
const state = {

    category: "scales",

    type: "majorScale",

    notation: "sharp",

    language: "en",

    rotation: 0

};
function getNotes() {

    const key =
        `${state.notation}_${state.language}`;

    return NOTES[key];

}
const scaleButtons = [

    ["majorScale","Major"],
    ["minorScale","Minor"],
    ["pentaMajor","Penta M"],
    ["pentaMinor","Penta m"]

];

const chordButtons = [

    ["majorChord","M"],
    ["minorChord","m"],
    ["dim","°"],
    ["aug","+"],
    ["seven","7"],
    ["maj7","maj7"],
    ["min7","min7"],
    ["sus2","sus2"],
    ["sus4","sus4"],
    ["7sus2","7sus2"],
    ["7sus4","7sus4"]

];

notation.onclick = () => {

    state.notation =
        state.notation=="sharp"
        ? "flat"
        : "sharp";

    notation.textContent =
        state.notation=="sharp"
        ? "♯"
        : "♭";

    drawWheel();

};

language.onclick = ()=>{

    state.language =
        state.language=="en"
        ? "fr"
        : "en";

    language.textContent =
        state.language.toUpperCase();

    drawWheel();

}

function buildMenu(buttons){

    $("#typeMenu").empty();

    buttons.forEach(([id,label])=>{

        $("<button>")
            .text(label)
            .attr("data-type",id)
            .appendTo("#typeMenu");

    });

}

function drawWheel(){

    const notes = getNotes();
    const theory = THEORY[state.type];

    drawNotes(notes);
    drawTicks(theory.highlights);
    drawLabels(theory.labels);

}


const theory = THEORY[state.type];


buildMenu(scaleButtons);
buildMenu(chordButtons);
// DATA.JS //
const NOTES = {

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

const TEXT = {

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

const THEORY = {

        majorScale: {
          category: "scales",
            name_en: "Major",
            name_fr: "Majeure",
            highlights: [0,2,4,5,7,9,11],
            labels: [
                "I","","ii","","iii","IV","","V","","vi","","vii°"
            ]
        },

        minorScale: {
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

        majorChord:{
          category: "chords",
          name_en: "Major",
          name_fr: "Majeur",
          highlights:[0,4,7]
        },

        minorChord:{
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