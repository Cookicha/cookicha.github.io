// var requestURL = 'data/data-biosena.json';
// var request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
// request.onload = function() {
// const data = request.response;
// const labos = Object.values(data);
// const ids = Object.keys(data);

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

    // var nom = "<div class='nom-fiche'>" + data[labo].nom + "</div>";
    // //  convertGPS(data[labo].latLng);
    let dom = "";
    if (typeof data[labo].domaine === 'string' || data[labo].domaine instanceof String){
      dom = data[labo].domaine;
    } else if (typeof data[labo].domaine === 'array' || data[labo].domaine instanceof Array){
      for (var i = 0; i < data[labo].domaine.length; i++) {
        dom += (data[labo].domaine[i] + " ");
      }
    }
    var hover = "";
    if (data[labo].hover == 1) {
      hover = "hover";
    }
    $('#dotsBox').append("<div class='dot " + dom + " " + hover +"' id='" + labo + "' style='top: " + data[labo].latPx + "px; right: " + data[labo].lngPx + "px;'><div class='label'>" + data[labo].sigle + "</div></div>");
    }
  }
}

function launcher() {
  countLieux();
  getGPS();
  spiral();
  placeDots();
}

launcher();

  $(document).ready(function() {
    $('.dot').click(function() {
      if ($(this).hasClass('clicked')) {
        $(this).removeClass('clicked');
        console.log("unclic");
      } else {
        $(this).addClass('clicked');
        console.log("clic");
        // $('#fiche-' + this.id).children(".grosPlus").click();
      }
    });

    // var filtre = [];
    // var code;
    // var filtrehover = [];
    // var codehover;
    //
    // function displayIn() {
    //   code = filtre.join('');
    //   codehover = code + filtrehover.join('');
    //   $('.dot').removeClass("hover");
    //   $('.dot' + codehover).css("opacity","1");
    //   $('.fiche').hide();
    //   $('.dot' + codehover + code).each(function() {
    //     $('#fiche-' + this.id).show();
    //   });
    // }
    //
    // function displayOut() {
    //   filtrehover = [];
    //   codehover = '';
    //   code = filtre.join('');
    //   // $('.dot').css("opacity","1");
    //   $('.dot' + code).show();
    //   $('.fiche').hide();
    //   $('.dot' + codehover + code).each(function() {
    //     $('#fiche-' + this.id).show();
    //   });
    // }

    $('.bouton').click(function() {
      if ($(this).hasClass('clicked')) {
        $(this).removeClass('clicked');
        for (var labo in data) {
          if (data[labo].domaine !== this.id || data[labo].structure !== this.id) {
            data[labo].visible = 1;
          }
        }
        launcher(createlieux, countlieux, convertGPS, spiral, placeDots);
      } else {
        $(this).addClass('clicked');
        for (var labo in data) {
          if (data[labo].domaine !== this.id && data[labo].structure !== this.id) {
            data[labo].visible = 0;
          }
        }
        launcher();
        //$('.dot.' + this.id).addClass('selected');
        //filtre.push('.' + this.id);
      }
    });
    $('.bouton').hover(
      function() { // hover in
        for (var labo in data) {
          data[labo].hover = 0;
          if (data[labo].domaine.indexOf(this.id)!=-1) { // if the Domaine array contains the hovered ID
            console.log(this.id);
            data[labo].hover = 1;
          }
        }
        launcher();
      }, // hover out
      function() {
        for (var labo in data) {
          data[labo].hover = 1;
        }
        launcher();
      },
    );
  }

);
