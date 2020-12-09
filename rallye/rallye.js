var unit = 20;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 100, 100);
ctx.beginPath();
for (var i = 0; i < 1200; i+=unit) {
  ctx.moveTo(i,0);
  ctx.lineTo(i, 700);
}
for (var i = 0; i < 700; i+=unit) {
  ctx.moveTo(0,i);
  ctx.lineTo(1200, i);
}
ctx.lineWidth = 1;
ctx.strokeStyle = '#eee';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(900, 350);
ctx.bezierCurveTo(900, 560, 300, 560, 300, 350);
ctx.moveTo(900, 350);
ctx.bezierCurveTo(900, 140, 300, 140, 300, 350);
ctx.moveTo(1060, 350);
ctx.bezierCurveTo(1060, 700, 140, 700, 140, 350);
ctx.moveTo(1060, 350);
ctx.bezierCurveTo(1060, 0, 140, 0 , 140, 350);
ctx.lineWidth = 2;
ctx.strokeStyle = '#000';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(600,88);
ctx.lineTo(600, 192);
ctx.lineWidth = 1;
ctx.stroke();

var player1 = [600,7*unit,0,0];

$(document).ready(function (){
  $('#player1').css({left:player1[0],top:player1[1]});
  $('#player1options').css({left:player1[0],top:player1[1]});
  $('.option').click(function(){
    ctx.beginPath();
    ctx.moveTo(player1[0],player1[1]);
    if ($(this).hasClass('est')) {
      player1[2] += unit;
    }
    if ($(this).hasClass('ouest')) {
      player1[2] -= unit;
    }
    if ($(this).hasClass('nord')) {
      player1[3] -= unit;
    }
    if ($(this).hasClass('sud')) {
      player1[3] += unit;
    }
    player1[0] += player1[2];
    player1[1] += player1[3];
    ctx.lineTo(player1[0],player1[1]);
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#ff0000';
    $('#player1').css({left:player1[0],top:player1[1]});
    $('#player1options').css({left:player1[0] + player1[2],top:player1[1] + player1[3]});
    ctx.stroke();
    // if (player1) {
    //
    // }
    // $('.long.lat').hide();
    // $('.long.lat').show();
  })
});
