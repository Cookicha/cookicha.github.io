// WHEEL.JS //
var degree = 0;
var dragging = false;
var radians_click;
var degree_click;
var degree_start = 0;
var center_x;
var center_y;
var target;
var currentKey = "C";

//const notes = useFlats ? notesFlat : notesSharp;

for (let i = 0; i < 12; i++) {

  const label = $("<div>")
    .addClass("box")
    .addClass("textbox")
    .addClass(i + 1);

  $("#wheel").append(label);

}

// get center of div to rotate
$(function () {
  $('.in').on('pointerdown', function (e) {
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
  $(document).on('pointerup', function () {
    $('.in').css("cursor", "grab");
    dragging = false;
    if (target) {
      if (Math.abs(degree) % 30 <= 15) {
      } else {
        degree = degree + (degree % 30);
      }
      degree = degree - (degree % 30);
      $(target).animate({ rotate: degree + 'deg' }, 200);
      degree_start[target.id] = degree;
      currentPitch = ((-Math.round(degree / 30) % 12) + 12) % 12;
      updateCenter();
      target = "";
      degree_start = degree;
    }
  });
  $(document).on('pointermove', function (event) {
    if (dragging) {
      mouse_x = event.clientX;
      mouse_y = event.clientY;
      var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
      var degree_raw = ((radians * (180 / Math.PI) * -1) + 180) - degree_click + degree_start;
      degree = degree_raw;

      $(target).animate({ rotate: degree + 'deg' }, 0);
    }
  });
})
$('.spark').on("mouseenter", function () {
  $(this).css('background', 'rgba(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ',0.4)');
}).on("mouseleave", function () {
  $(this).css('background', 'white')
});
