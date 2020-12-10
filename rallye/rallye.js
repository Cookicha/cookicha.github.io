var unit = 20;


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// Dessin du quadrillage
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

// Dessin du circuit
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

// Ligne de départ
ctx.beginPath();
ctx.moveTo(600,88);
ctx.lineTo(600, 192);
ctx.lineWidth = 1;
ctx.stroke();

// Position et vitesse de départ des joueurs
var players = [
  [600,5*unit,0,0,$('#player1').css("background-color")],
  [600,6*unit,0,0,$('#player2').css("background-color")],
  [600,7*unit,0,0,$('#player3').css("background-color")],
  [600,8*unit,0,0,$('#player4').css("background-color")]
];

// Changement de joueur
var nextPlayer = function() {
  if (currentPlayer < players.length - 1) {
    currentPlayer += 1;
  } else if (currentPlayer == players.length - 1) {
    currentPlayer = 0;
    tour += 1;
    if (tour < 10) {
      $('#compteur').html("0" + tour);
    } else {
      $('#compteur').html(tour);
    }
  } else {
    alert("Bug");
  }
  $("#player" + (currentPlayer+1) + "options").show();
  $('#compteur').css({background:players[currentPlayer][4]});
}

var currentPlayer = -1;
var tour = 0;
$('.options').hide();
nextPlayer();

$(document).ready(function (){
  // Positionnement des joueurs
  for (var i = 0; i < players.length; i++) {
    $("#player" + (i+1)).css({left:players[i][0],top:players[i][1]});
    $("#player" + (i+1) + "options").css({left:players[i][0],top:players[i][1]});
  }
  // var save = ctx.getImageData(0,0,canvas.width,canvas.height);

  // Mécanique de déplacement
  $('.option').click(function(){
    $('.options').hide();
    // Effacement trajectoire neutre
    // ctx.putImageData(save, 0, 0);

    // Tracé et déplacement réel
    ctx.beginPath();
    ctx.moveTo(players[currentPlayer][0],players[currentPlayer][1]);
    if ($(this).hasClass('est')) {
      players[currentPlayer][2] += unit;
    }
    if ($(this).hasClass('ouest')) {
      players[currentPlayer][2] -= unit;
    }
    if ($(this).hasClass('nord')) {
      players[currentPlayer][3] -= unit;
    }
    if ($(this).hasClass('sud')) {
      players[currentPlayer][3] += unit;
    }
    players[currentPlayer][0] += players[currentPlayer][2];
    players[currentPlayer][1] += players[currentPlayer][3];
    ctx.lineTo(players[currentPlayer][0],players[currentPlayer][1]);
    ctx.lineWidth = 1;
    // ctx.setLineDash([1,0]);
    ctx.strokeStyle = players[currentPlayer][4];
    $("#player" + (currentPlayer+1) + "options").css({left:players[currentPlayer][0] + players[currentPlayer][2],top:players[currentPlayer][1] + players[currentPlayer][3]});
    $("#player" + (currentPlayer+1)).animate({left:players[currentPlayer][0],top:players[currentPlayer][1]}, 200, function(){
      ctx.stroke();
      nextPlayer();
    });

    // Dessin de la trajectoire neutre suivante
    // save = ctx.getImageData(0,0,canvas.width,canvas.height);
    // ctx.beginPath();
    // ctx.moveTo(players[currentPlayer][0],players[currentPlayer][1]);
    // ctx.lineTo(players[currentPlayer][0] + players[currentPlayer][2],players[currentPlayer][1] + players[currentPlayer][3]);
    // ctx.lineWidth = 1;
    // ctx.setLineDash([1,5]);
    // ctx.stroke();

    // Fin du tour
  })
});
