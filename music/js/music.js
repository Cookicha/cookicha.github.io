var degree = 0;
var dragging = false;
var radians_click;
var degree_click;
var degree_start = {
  'cheat': 0,
  'base': 0,
  'intervals': 0,
  'modes': 0,
  'major': 0,
  'major5': 0,
  'major_chords': 0,
  'minor': 0,
  'minor5': 0,
  'blues': 0,
  'minor_chords': 0,
  'chord_minor': 0,
  'chord_major': 0,
  'chord_aug':0,
  'chord_dim':0

}
var center_x;
var center_y;
var target;
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
      target = "";
    }
  });
  $(document).on('pointermove', function(event) {
    if (dragging) {
      mouse_x = event.clientX;
      mouse_y = event.clientY;
      var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
      var degree_raw = ((radians * (180 / Math.PI) * -1) + 180) - degree_click + degree_start[target.id];
      // if (Math.abs(degree_raw) % 30 <= 8) {
      //   degree = degree_raw - (degree_raw % 30);
      // } else {
         degree = degree_raw;
      // }
      $(target).animate({rotate:degree+'deg'},0);
      // $(target).css('-moz-transform', 'rotate(' + degree + 'deg)');
      // $(target).css('-moz-transform-origin', '50% 50%');
      // $(target).css('-webkit-transform', 'rotate(' + degree + 'deg)');
      // $(target).css('-webkit-transform-origin', '50% 50%');
      // $(target).css('-o-transform', 'rotate(' + degree + 'deg)');
      // $(target).css('-o-transform-origin', '50% 50%');
      // $(target).css('-ms-transform', 'rotate(' + degree + 'deg)');
      // $(target).css('-ms-transform-origin', '50% 50%');
    }
  });
})
$('.spark').on("mouseenter",function(){
$(this).css('background','rgba(' + Math.random()*255 + ',' + Math.random()*255 + ',' + Math.random()*255 + ',0.4)');
}).on( "mouseleave",function(){
 $(this).css('background','white')
});

$(document).ready(function() {
  $('.in').html('<div class="box textbox i12"><div class="text">Do</div></div><div class="box textbox i01"><div class="text">Do#</div></div><div class="box textbox i02"><div class="text">Ré</div></div><div class="box textbox i03"><div class="text">Ré#</div></div><div class="box textbox i04"><div class="text">Mi</div></div><div class="box textbox i05"><div class="text">Fa</div></div><div class="box textbox i06"><div class="text">Fa#</div></div><div class="box textbox i07"><div class="text">Sol</div></div><div class="box textbox i08"><div class="text">Sol#</div></div><div class="box textbox i09"><div class="text">La</div></div><div class="box textbox i10"><div class="text">La#</div></div><div class="box textbox i11"><div class="text">Si</div></div>');
  $('.tickbox').html('<div class="box tickbox t12"><div class="tick"></div></div><div class="box tickbox t01"><div class="tick"></div></div><div class="box tickbox t02"><div class="tick"></div></div><div class="box tickbox t03"><div class="tick"></div></div><div class="box tickbox t04"><div class="tick"></div></div><div class="box tickbox t05"><div class="tick"></div></div><div class="box tickbox t06"><div class="tick"></div></div><div class="box tickbox t07"><div class="tick"></div></div><div class="box tickbox t08"><div class="tick"></div></div><div class="box tickbox t09"><div class="tick"></div></div><div class="box tickbox t10"><div class="tick"></div></div><div class="box tickbox t11"><div class="tick"></div></div>');
  $('#cheat_section .canvas .fond .in').html('<div class="box textbox i12"><div class="text">C</div></div><div class="box textbox i01"><div class="text">C#</div></div><div class="box textbox i02"><div class="text">D</div></div><div class="box textbox i03"><div class="text">D#</div></div><div class="box textbox i04"><div class="text">E</div></div><div class="box textbox i05"><div class="text">F</div></div><div class="box textbox i06"><div class="text">F#</div></div><div class="box textbox i07"><div class="text">G</div></div><div class="box textbox i08"><div class="text">G#</div></div><div class="box textbox i09"><div class="text">A</div></div><div class="box textbox i10"><div class="text">A#</div></div><div class="box textbox i11"><div class="text">B</div></div>');
})
