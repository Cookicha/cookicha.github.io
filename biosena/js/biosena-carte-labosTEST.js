// var requestURL = 'data/data-biosena.json';
// var request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
// request.onload = function() {
// const data = request.response;
// const labos = Object.values(data);
// const ids = Object.keys(data);
$(document).ready(function() {

let active = [];

function filtering() {
  for (var labo in data) {
    if (active.length === 0) { // if no button is clicked and therefore the Active array is empty
      data[labo].visible = 1;  // change all visilibities to 1, make all visible and we're done
    } else { // otherwise let's pick the visible ones
      // data[labo].visible = 0;  // first change all visibilities to 0
      if (active.every(r=> data[labo].domaine.includes(r))) { // if any element of the Domain array matches with any element of the Active array //// CHANGE "SOME" TO "EVERY" TO SWITCH FROM INCLUSIVE TO EXCLUSIVE, OR vs AND
        data[labo].visible = 1;// change visibility to 1
      }
    }
  }
}


function countLieux() {
  for (var labo in data) {
    if (data[labo].visible == 1) {
      gps[data[labo].lieu].n += 1;
    }
  }
}
function getGPS() {
  for (var labo in data) {
    data[labo].latPx = (gps[data[labo].lieu].lat * (-142.34) + 6691 + 63);
    data[labo].lngPx = (gps[data[labo].lieu].lng * (-96) + 52.97 + 323);
    // eval(data[labo].lieu + " = 0;");
  }
}

function coord(n) {
  // rang = dans quel carré on se retrouve (0 -> {1}, 1 -> {2..9}, 2 -> {10..25}, ...)
  rang = Math.floor( (Math.floor(Math.sqrt(n-1))+1) /2 );
  // min_rang = 1ere valeur ('n') du rang : 1, 2, 10, 26, ...
  min_rang = Math.pow(2*rang - 1, 2) +1;
  // delta = distance par rapport à la 1ere valeur du rang
  delta = n - min_rang;
  if (delta < 2 * rang) {
    return [-rang + 1 + delta, rang];
  } else if (delta < 4 * rang) {
    return [rang, 3*rang - 1 - delta];
  } else if (delta < 6 * rang) {
    return [5*rang - 1 - delta, -rang];
  } else if (delta < 8 * rang) {
    return [-rang, -7*rang + 1 + delta];
  }
}

function spiral() { //m=lieu, x=lat, y=lng[2];
  for (var labo in data) { // pour chaque labo
    if (data[labo].visible == 1) { // si le labo est visible
      // m = eval(data[labo].lieu); //
      let temp = [];
      temp = coord(gps[data[labo].lieu].n);
      data[labo].lngPx += temp[0] * 11;
      data[labo].latPx += temp[1] * 11;
      gps[data[labo].lieu].n -= 1;
    }
  }
}

function placeDots() {
  $('#dotsBox').html("");
  for (var labo in data) {
    if (data[labo].visible == 1) {
    let dom = "";
    for (var i = 0; i < data[labo].domaine.length; i++) {
      dom += (data[labo].domaine[i] + " ");
    }
    var hover = "";
    if (data[labo].hover == 1) {
      hover = "hover";
    }
    $('#dotsBox').append("<div class='solid dot " + dom + " " + hover +"' id='" + labo + "' style='top: " + data[labo].latPx + "px; right: " + data[labo].lngPx + "px;'><div class='label'>" + data[labo].sigle + "</div></div>");
    }
  }
}

function launcher() {
  filtering();
  countLieux();
  getGPS();
  spiral();
  placeDots();
}

launcher();



    // var active = [];
    // var code;
    // var activehover = [];
    // var codehover;
    //
    // function displayIn() {
    //   code = active.join('');
    //   codehover = code + activehover.join('');
    //   $('.dot').removeClass("hover");
    //   $('.dot' + codehover).css("opacity","1");
    //   $('.fiche').hide();
    //   $('.dot' + codehover + code).each(function() {
    //     $('#fiche-' + this.id).show();
    //   });
    // }
    //
    // function displayOut() {
    //   activehover = [];
    //   codehover = '';
    //   code = active.join('');
    //   // $('.dot').css("opacity","1");
    //   $('.dot' + code).show();
    //   $('.fiche').hide();
    //   $('.dot' + codehover + code).each(function() {
    //     $('#fiche-' + this.id).show();
    //   });
    // }

// CLASSIC CODE FOR BUTTONS CHECKBOX STYLE (additive)
    // $('.bouton').click(function() {
    //   if ($(this).hasClass('clicked')) { // if the button was already clicked
    //     $(this).removeClass('clicked'); // we are turning it off
    //     active = active.filter(e => e !== this.id); // remove this id from active classes
    //     launcher();
    //     $('.dot.'+this.id).addClass("hover");
    //   } else { // if the button was off
    //     $(this).addClass('clicked'); // we are turning it on
    //     active.push(this.id); // add this id to active classes
    //     launcher();
    //     $('.dot.'+this.id).addClass("hover");
    //   }
    // });
// CODE FOR BUTTONS BULLET STYLE (exclusive)
    $('.bouton').click(function() {
      if ($(this).hasClass('clicked')) { // if the button was already clicked
        $('.bouton').removeClass('clicked');
      } else {
        $('.bouton').removeClass('clicked');
        $(this).addClass('clicked');
        $('.dot').removeClass("solid");
        $('.dot.'+this.id).addClass("solid");
      }
    });
    $('.bouton').hover(
      function() { // hover in
        $('.dot').removeClass("solid");
        $('.dot.'+this.id).addClass("solid");
      }, // hover out
      function() {
        // $('.dot').addClass("solid");
      },
    );
    $('#dotsBox').on("click", '.dot', function() {
      if ($(this).hasClass('clicked')) {
        $(this).removeClass('clicked');
      } else {
        $(this).addClass('clicked');
      }
    });
  }

);
