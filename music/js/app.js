const state = {

    category: "scales",

    type: "major",

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

    ["major","Major"],
    ["minor","Minor"],
    ["pentaMajor","Penta M"],
    ["pentaMinor","Penta m"]

];

const chordButtons = [

    ["major","M"],
    ["minor","m"],
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