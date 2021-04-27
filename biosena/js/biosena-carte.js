// var requestURL = 'data/data-biosena.json';
// var request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
// request.onload = function() {
// const data = request.response;
// const labos = Object.values(data);
// const ids = Object.keys(data);


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

function spiral() { //n=agglo, x=latLng[3], y=latLng[2];
  for (var labo in data) {
    if (data[labo].visible == 1) {
      n = eval(data[labo].agglo);
      let temp = [];
      temp = coord(n);
      data[labo].latLng[2] += temp[0] * 11;
      data[labo].latLng[3] += temp[1] * 11;
      eval(data[labo].agglo + " -= 1;");
    }
  }
}

var convertGPS = function() {
  for (var labo in data) {
    console.log(data[labo].sigle);
    data[labo].latLng[2] = (data[labo].latLng[0] * (-142.34) + 6691 + 63);
    data[labo].latLng[3] = (data[labo].latLng[1] * (-96) + 52.97 + 323);
  }
}

function countAgglos() {
  for (var labo in data) {
    if (data[labo].visible == 1) {
      eval(data[labo].agglo + " += 1;");
    }
  }
}

function createAgglos() {
  for (var labo in data) {
    eval(data[labo].agglo + " = 0;");
  }
}

function placeDots() {
  $('#dotsBox').html("");
  for (var labo in data) {
    if (data[labo].visible == 1) {

    // var nom = "<div class='nom-fiche'>" + data[labo].nom + "</div>";
    // //  convertGPS(data[labo].latLng);
    var domaine = data[labo].domaine;
    var hover = "";
    if (data[labo].hover == 1) {
      hover = "hover";
    }
    $('#dotsBox').append("<div class='dot " + domaine + " " + hover +"' id='" + labo + "' style='top: " + data[labo].latLng[2] + "px; right: " + data[labo].latLng[3] + "px;'><div class='label'>" + data[labo].sigle + "</div></div>");
    }
  }
}

function launcher() {
  createAgglos();
  countAgglos();
  convertGPS();
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
        launcher(createAgglos, countAgglos, convertGPS, spiral, placeDots);
        // $('.dot.' + this.id).removeClass('selected');
        // filtre = filtre.filter(e => e !== ('.' + this.id));
        // $('.fiche.' + this.id).removeClass('selected');
        // filtre = filtre.filter(e => e !== ('.' + this.id));
        // displayOut();
      } else {
        $(this).addClass('clicked');
        for (var labo in data) {
          if (data[labo].domaine !== this.id && data[labo].structure !== this.id) {
            data[labo].visible = 0;
          }
        }
        launcher(createAgglos, countAgglos, convertGPS, spiral, placeDots);
        //$('.dot.' + this.id).addClass('selected');
        //filtre.push('.' + this.id);
      }
    });
    $('.bouton').hover(
      function() {
        for (var labo in data) {
          data[labo].hover = 0;
          if (data[labo].domaine == this.id || data[labo].structure == this.id) {
            data[labo].hover = 1;
          }
        }
        launcher();
      },
      function() {
        for (var labo in data) {
          data[labo].hover = 1;
        }
        launcher();
      },
    );
    // $('#headerMap').hover(
    //   forEach((item, i) => {
    //
    //   });
    // espacement();


  }

  //   for each dot,
  //     if the squared root of latitude difference ²+longitude difference² with another dot is smaller than half the width of the dot,
  //
  //   for (var variable in data) {
  //     if (data.hasOwnProperty(variable)) {
  //
  //     }
  //   }
  // );
);
// };
