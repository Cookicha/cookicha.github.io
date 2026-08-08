// APP.JS //
const state = {
  category: "scales",
  type: "majorScale",
  lastType: {
    scales: "majorScale",
    tools: "intervals",
    chords: "majorChord"
  },
  notation: "sharp",
  language: "fr"
};
const PITCHES = {
  sharp: [
    "C", "C#", "D", "D#", "E", "F",
    "F#", "G", "G#", "A", "A#", "B"
  ],

  flat: [
    "C", "Db", "D", "Eb", "E", "F",
    "Gb", "G", "Ab", "A", "Bb", "B"
  ]
};

function getCurrentKey() {
  return PITCHES[state.notation][currentPitch];
}

let currentPitch = 0;
function getNotes() {
  const key =
    `${state.notation}_${state.language}`;
  return NOTES[key];
}

const scaleButtons = [
  ["majorScale", "Majeure"],
  ["minorScale", "Mineure"],
  ["pentaMajor", "Penta Maj"],
  ["pentaMinor", "Penta min"]
];
const toolButtons = [
  ["intervals", "Intervalles"],
  ["transposition", "Transposition"]  
];
const chordButtons = [
  ["majorChord", "M", ""],
  ["minorChord", "m", "m"],
  ["dim", "°", "°"],
  ["aug", "+", "+"],
  ["seven", "7", "7"],
  ["maj7", "maj7", "maj7"],
  ["min7", "min7", "min7"],
  ["sus2", "sus2", "sus2"],
  ["sus4", "sus4", "sus4"]
];

notation.onclick = () => {
  state.notation =
    state.notation == "sharp"
      ? "flat"
      : "sharp";

  notation.textContent =
    state.notation == "sharp"
      ? "♯"
      : "♭";

  drawWheel();
  updateCenter();
};

language.onclick = () => {
  state.language =
    state.language == "en"
      ? "fr"
      : "en";
  language.textContent =
    state.language.toUpperCase();
  drawWheel();
}

function buildMenu(buttons) {
  $("#typeMenu").empty();
  buttons.forEach(([id, label]) => {
    $("<button>")
      .text(label)
      .attr("data-type", id)
      .toggleClass("selected", id === state.type)
      .on("click", function () {
        state.type = id;
        state.lastType[state.category] = id;
        drawWheel();
      })
      .appendTo("#typeMenu");
  });
}

function drawTicks(highlights) {
  $("#ticks").empty();
  for (let i = 0; i < 12; i++) {
    if (highlights.includes(i)) {
      const index = String((i) % 12 || 12).padStart(2, "0");
      $("#ticks").append(`
                <div class="box tickbox t${index}">
                  <div class="tick"></div>
                </div>
            `);
    }
  }
}

function drawLabels(labels) {
  $("#labels").empty();
  for (let i = 0; i < 12; i++) {
    const index = String((i) % 12 || 12).padStart(2, "0");
    $("#labels").append(`
                <div class="box textbox o${index}">
                  <div class="text">${labels[i] || ""}</div>
                </div>
            `);
  }
}

function drawWheel() {
  const notes = getNotes();
  const theory = THEORY[state.type];
  drawNotes(notes);
  drawTicks(theory.highlights);
  const labels =
    state.language === "fr"
      ? (theory.labels_fr || theory.labels)
      : (theory.labels_en || theory.labels);
  drawLabels(labels);
  updateSelection();
  updateButtons();
  updateCenter();
}

function drawNotes() {
  $("#notes").empty();
  const notes = getNotes();
  notes.forEach((note, i) => {
    const index = String((i) % 12 || 12).padStart(2, "0");
    $("#notes").append(`
            <div class="box textbox i${index}">
                <div>${note}</div>
            </div>
        `);
  });
}

scaleMode.onclick = () => {
  state.category = "scales";
  buildMenu(scaleButtons);
};
toolMode.onclick = () => {
  state.category = "tools";
  buildMenu(toolButtons);
};

chordMode.onclick = () => {
  state.category = "chords";
  buildMenu(chordButtons);
};

function updateButtons() {
  $("#typeMenu button").each(function () {
    $(this).toggleClass(
      "selected",
      $(this).data("type") === state.type
    );

  });
  $("#scaleMode")
    .toggleClass("selected", state.category === "scales");
  $("#toolMode")
    .toggleClass("selected", state.category === "tools");
  $("#chordMode")
    .toggleClass("selected", state.category === "chords");
}

function updateSelection() {
  const categories = {
    scales: "Gamme",
    tools: "",
    chords: "Accord"
  };
  const category = categories[state.category] || "";
  const theory = THEORY[state.type];
  const type = theory ? theory.name_fr : "";
  $("#currentSelection").html(`
    <span>${category}</span>
    <span>${type}</span>
  `);
}

function updateCenter() {
  const currentKey = getCurrentKey();
  if (state.category === "chords") {
    const chord = chordButtons.find(
      button => button[0] === state.type
    );
    if (!chord) {
      $("#center").html("");
      return;
    }
    // Major chord has no suffix
    const suffix = state.type === "majorChord"
      ? ""
      : chord[1];
    $("#center").html(currentKey + suffix);
  }
  else if (state.category === "scales") {
    const signatures = {
      majorScale: {
        0: "0.svg",
        7: "1s.svg",
        2: "2s.svg",
        9: "3s.svg",
        4: "4s.svg",
        11: "5s.svg",
        6: "6",

        5: "1b.svg",
        10: "2b.svg",
        3: "3b.svg",
        8: "4b.svg",
        1: "5b.svg"
      },

      minorScale: {
        9: "0.svg",
        4: "1s.svg",
        11: "2s.svg",
        6: "3s.svg",
        1: "4s.svg",
        8: "5s.svg",
        3: "6",

        2: "1b.svg",
        7: "2b.svg",
        0: "3b.svg",
        5: "4b.svg",
        10: "5b.svg"
      }
    };

    const files = signatures[state.type];
    if (!files) {
      $("#center").empty();
      return;
    }
    let file = files[currentPitch];
    if (file === "6") {
      file = state.notation === "flat"
        ? "6b.svg"
        : "6s.svg";
    }
    $("#center").html(
      `<img src="/music/img/keys/${file}" alt="">`
    );
  }
  else {
    $("#center").empty();
  }
}

$("#scaleMode").on("click", function () {
  state.category = "scales";
  state.type = state.lastType.scales;
  drawWheel();
});
$("#toolMode").on("click", function () {
  state.category = "tools";
  state.type = state.lastType.tools;
  drawWheel();
});
$("#chordMode").on("click", function () {
  state.category = "chords";
  state.type = state.lastType.chords;
  drawWheel();
});

function updateTypeMenu() {
  if (state.category === "scales") {
    buildMenu(scaleButtons);
  } else if (state.category === "chords") {
    buildMenu(chordButtons);
  } else if (state.category === "tools") {
    buildMenu(toolButtons);
  }
}

function preloadKeySignatures() {
  const files = [
    "0.svg",
    "1s.svg",
    "2s.svg",
    "3s.svg",
    "4s.svg",
    "5s.svg",
    "6s.svg",
    "7s.svg",
    "1b.svg",
    "2b.svg",
    "3b.svg",
    "4b.svg",
    "5b.svg",
    "6b.svg"
  ];

  files.forEach(file => {
    const img = new Image();
    img.src = `/music/img/keys/${file}`;
  });
}

$(document).ready(function () {
  preloadKeySignatures();
  buildMenu(scaleButtons);
  drawWheel();
});