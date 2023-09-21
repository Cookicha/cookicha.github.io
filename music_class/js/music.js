var degree = 0;

function gamme() {
  if (degree == 0) {
    $("#gamme").html("Do m");
    $("#line1").html("");
    $("#line2").html("♭");
    $("#line3").html("");
    $("#line4").html("");
    $("#line5").html("♭");
    $("#line6").html("♭");
    $("#line7").html("");
    $("#line8").html("");
    $("#line9").html("");

  } else if (degree == 30) {
    $("#gamme").html("Si m");
    $("#line1").html("<span class='smaller'>#</span>");
    $("#line2").html("");
    $("#line3").html("");
    $("#line4").html("<span class='smaller'>#</span>");
    $("#line5").html("");
    $("#line6").html("");
    $("#line7").html("");
    $("#line8").html("");
    $("#line9").html("");
  } else if (degree == 60) {
    $("#gamme").html("La# m");
    $("#line1").html("");
    $("#line2").html("♭");
    $("#line3").html("♭");
    $("#line4").html("");
    $("#line5").html("♭");
    $("#line6").html("♭");
    $("#line7").html("♭");
    $("#line8").html("");
    $("#line9").html("");
  } else if (degree == 90) {
    $("#gamme").html("La m");
    $("#line1").html("");
    $("#line2").html("");
    $("#line3").html("");
    $("#line4").html("");
    $("#line5").html("");
    $("#line6").html("");
    $("#line7").html("");
    $("#line8").html("");
    $("#line9").html("");
  } else if (degree == 120) {
    $("#gamme").html("Sol# m");
    $("#line1").html("<span class='smaller'>#</span>");
    $("#line2").html("<span class='smaller'>#</span>");
    $("#line3").html("<span class='smaller'>#</span>");
    $("#line4").html("<span class='smaller'>#</span>");
    $("#line5").html("<span class='smaller'>#</span>");
    $("#line6").html("<span class='smaller'>#</span>");
    $("#line7").html("<span class='smaller'>#</span>");
    $("#line8").html("");
    $("#line9").html("");
  } else if (degree == 150) {
    $("#gamme").html("Sol m");
    $("#line1").html("");
    $("#line2").html("♭");
    $("#line3").html("");
    $("#line4").html("");
    $("#line5").html("♭");
    $("#line6").html("");
    $("#line7").html("");
    $("#line8").html("");
    $("#line9").html("");
  } else if (degree == 180) {
    $("#gamme").html("Fa# m");
    $("#line1").html("<span class='smaller'>#</span>");
    $("#line2").html("");
    $("#line3").html("");
    $("#line4").html("<span class='smaller'>#</span>");
    $("#line5").html("");
    $("#line6").html("");
    $("#line7").html("<span class='smaller'>#</span>");
    $("#line8").html("");
    $("#line9").html("");
  } else if (degree == 210) {
    $("#gamme").html("Fa m");
    $("#line1").html("");
    $("#line2").html("♭");
    $("#line3").html("♭");
    $("#line4").html("");
    $("#line5").html("♭");
    $("#line6").html("♭");
    $("#line7").html("");
    $("#line8").html("");
    $("#line9").html("");
  } else if (degree == 240) {
    $("#gamme").html("Mi m");
    $("#line1").html("<span class='smaller'>#</span>");
    $("#line2").html("");
    $("#line3").html("");
    $("#line4").html("");
    $("#line5").html("");
    $("#line6").html("");
    $("#line7").html("");
    $("#line8").html("");
    $("#line9").html("");
  } else if (degree == 270) {
    $("#gamme").html("Ré# m");
    $("#line1").html("<span class='smaller'>#</span>");
    $("#line2").html("<span class='smaller'>#</span>");
    $("#line3").html("<span class='smaller'>#</span>");
    $("#line4").html("<span class='smaller'>#</span>");
    $("#line5").html("");
    $("#line6").html("<span class='smaller'>#</span>");
    $("#line7").html("<span class='smaller'>#</span>");
    $("#line8").html("");
    $("#line9").html("");
  } else if (degree == 300) {
    $("#gamme").html("Ré m");
    $("#line1").html("");
    $("#line2").html("");
    $("#line3").html("");
    $("#line4").html("");
    $("#line5").html("♭");
    $("#line6").html("");
    $("#line7").html("");
    $("#line8").html("");
    $("#line9").html("");
  } else if (degree == 330) {
    $("#gamme").html("Do# m");
    $("#line1").html("<span class='smaller'>#</span>");
    $("#line2").html("");
    $("#line3").html("<span class='smaller'>#</span>");
    $("#line4").html("<span class='smaller'>#</span>");
    $("#line5").html("");
    $("#line6").html("");
    $("#line7").html("<span class='smaller'>#</span>");
    $("#line8").html("");
    $("#line9").html("");
  }
}


var dragging = false;
var radians_click;
var degree_click;
var degree_start = 0;
// get center of div to rotate
var pw = document.getElementById('in');
pwBox = pw.getBoundingClientRect();
center_x = (pwBox.left + pwBox.right) / 2;
center_y = (pwBox.top + pwBox.bottom) / 2;
$(function() {
  var target = $('#in');
  target.on('pointerdown', function(e) {
    mouse_x = e.pageX;
    mouse_y = e.pageY;
    radians_click = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    degree_click = (radians_click * (180 / Math.PI) * -1) + 180;
    dragging = true;
  });
  $(document).on('pointerup', function() {
    dragging = false;
    degree_start = degree;
  });
  $(document).on('pointermove', function(event) {
    if (dragging) {
      mouse_x = event.pageX;
      mouse_y = event.pageY;
      var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
      var degree_raw = ((radians * (180 / Math.PI) * -1) + 180) - degree_click + degree_start;
      if (degree_raw % 30 <= 8) {
        degree = degree_raw - degree_raw % 30;
      } else {
        degree = degree_raw;
      }
      target.css('-moz-transform', 'rotate(' + degree + 'deg)');
      target.css('-moz-transform-origin', '50% 50%');
      target.css('-webkit-transform', 'rotate(' + degree + 'deg)');
      target.css('-webkit-transform-origin', '50% 50%');
      target.css('-o-transform', 'rotate(' + degree + 'deg)');
      target.css('-o-transform-origin', '50% 50%');
      target.css('-ms-transform', 'rotate(' + degree + 'deg)');
      target.css('-ms-transform-origin', '50% 50%');
    }
  });
})

$(document).ready(function() {
})
