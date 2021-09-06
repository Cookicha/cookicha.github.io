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
  let highlightlist = [];

  function filtering() {
    for (var labo in data) {
      if (active.length === 0) { // if no button is clicked and therefore the Active array is empty
        data[labo].visible = 1; // change all visilibities to 1, make all visible and we're done
      } else { // otherwise let's pick the visible ones
        data[labo].visible = 0; // first change all visibilities to 0
        if (active.every(r => data[labo].domaine.includes(r))) { // if any element of the Domain array matches with any element of the Active array //// CHANGE "SOME" TO "EVERY" TO SWITCH FROM INCLUSIVE TO EXCLUSIVE, OR vs AND
          data[labo].visible = 1; // change visibility to 1
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
    rang = Math.floor((Math.floor(Math.sqrt(n - 1)) + 1) / 2);
    // min_rang = 1ere valeur ('n') du rang : 1, 2, 10, 26, ...
    min_rang = Math.pow(2 * rang - 1, 2) + 1;
    // delta = distance par rapport à la 1ere valeur du rang
    delta = n - min_rang;
    if (delta < 2 * rang) {
      return [-rang + 1 + delta, rang];
    } else if (delta < 4 * rang) {
      return [rang, 3 * rang - 1 - delta];
    } else if (delta < 6 * rang) {
      return [5 * rang - 1 - delta, -rang];
    } else if (delta < 8 * rang) {
      return [-rang, -7 * rang + 1 + delta];
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
      if (data[labo].visible == 1 && data[labo].forces >= 1) {
        let dom = "";
        for (var i = 0; i < data[labo].domaine.length; i++) {
          dom += (data[labo].domaine[i] + " ");
        }
        if (data[labo].domaine.length > 1) {
          dom += "pluri ";
        }
        var hover = "";
        if (data[labo].hover == 1) {
          hover = "hover";
        }
        var highlightedvar = "";
        if (highlightlist.some(r => labo.includes(r))) { // if any element of the labo array matches with any element of the highlightlist array //// CHANGE "SOME" TO "EVERY" TO SWITCH FROM INCLUSIVE TO EXCLUSIVE, OR vs AND
          highlightedvar = " highlighted ";
        }
        $('#dotsBox').append("<div class='dot " + highlightedvar + dom + " " + hover + "' id='" + labo + "' style='top: " + data[labo].latPx + "px; right: " + data[labo].lngPx + "px;'><div class='label'>" + data[labo].sigle + "</div></div>");
      }
    }
    // $(this).addClass('highlighted');
  }

  function launcher() {
    filtering();
    countLieux();
    getGPS();
    spiral();
    placeDots();
  }

  launcher();

  var decodeDomain = function(input) {
    if (input == "bio") {
      return "Sciences de la vie, Écologie"
    } else if (input == "socio") {
      return "Droit, Science politique, Sociologie";
    } else if (input == "geo") {
      return "Géographie";
    } else if (input == "eco") {
      return "Économie, Gestion";
    } else if (input == "hist") {
      return "Histoire";
    } else if (input == "inge") {
      return "Sciences de l'ingénierie";
    } else if (input == "info") {
      return "Sciences de l'information";
    } else if (input == "lettres") {
      return "Lettres, arts, communication";
    }
  }

  function makeFiches() {
    for (var labo in data) { // pour chaque labo
      if (data[labo].forces >= 1) {
        var sigle = "<div class='sigle-fiche' id='sigle-" + labo + "'>" + data[labo].sigle + "</div>";
        var nom = "<div class='nom-fiche'>" + data[labo].nom + "</div>";
        var identifiant = "<div class='identifiant-fiche'>" + data[labo].identifiant + "</div>";
        var logo = "<div class='logo-box-fiche'><a href='" + data[labo].website + "' target='_blank'><img src='img/logos/" + labo + "-logo.png' class='logo-fiche'/></a></div>";
        var domaine = "";
        var codeDomaine = "";
        // var axes = "";
        // var techniques = "";
        if (data[labo].domaine.length > 0) {
          domaine = "<div class='domaine-fiche'>";
          for (var j = 0; j < data[labo].domaine.length; j++) {
            codeDomaine += " " + data[labo].domaine[j];
            domaine += "<span class='" + data[labo].domaine[j] + "'>" + decodeDomain(data[labo].domaine[j]) + "</span>";
          }
          domaine += "</div>";
        }
        var forces = "<div class='forces-fiches' style='text-align:center;margin-bottom:20px;'>" + data[labo].forces + " contacts</div>";
    // if (labo.axes.length > 0) {
    //   axes = decodeAxes(labo.axes[0]);
    //   for (var j = 1; j < labo.axes.length; j++) {
    //     axes += " &ndash; " + decodeAxes(labo.axes[j]);
    //   }
    // }
    // if (labo.techniques.length > 0) {
    //   techniques = decodeTechniques(labo.techniques[0]);
    //   for (var j = 1; j < labo.techniques.length; j++) {
    //     techniques += " &ndash; " + decodeTechniques(labo.techniques[j]);
    //   }
    // }
    // var filtres = "<div class='filtres-fiche'><div class='domaine-fiche'>" + domaine + "</div><div class='axes-fiches'>" + axes + "</div><div class='techniques-fiche'>" + techniques + "</div></div>";
    // var grosPlus = "<div class='grosPlus clos'></div>";
    // if (labo.fiche.titre != "") {
    //   var titre = "<div class='titre-fiche'>" + labo.fiche.titre + "</div>";
    // } else {
    //   var titre = "";
    // }
    // var paragraphes = "";
    // if (labo.fiche.bullets.length > 0) {
    //   for (var j = 0; j < labo.fiche.bullets.length; j++) {
    //     paragraphes += "<div class='p-fiche'>" + labo.fiche.bullets[j] + "</div>";
    //   }
    // }
    // var contact = "<div class='contact-fiche'><div class='nom-contact-fiche'>Contact GDR : <span>" + labo.contact.prenom + " </span><span class='contact-nom'>" + labo.contact.nom + "</span></div><div class='contact-contact-fiche'><span class='force-select-all'>" + labo.contact.email + "</span></div><div class='web-contact-fiche'><a href='" + labo.web + "'>" + labo.web + "</a></div></div>";
      $('#fiches-section').append("<div class='fiche selected" + codeDomaine + "' id='fiche-" + labo + "'><div class='tete'>" + sigle + identifiant + nom + domaine + "</div>" + logo + forces + "</div>");
      }
    }

  }
  // $(document).ready(function() {
  //   $(".grosPlus.clos").click(function() {
  //     $(this).toggleClass('clos');
  //     $(this).toggleClass('ouvert');
  //     $(this).siblings('.titre-fiche,.p-fiche,.contact-fiche').toggle(200);
  //   });


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
      $('.fiche').addClass('selected');
      active = [];
    } else {
      $('.bouton').removeClass('clicked');
      active = [this.id];
      $(this).addClass('clicked');
      $('.fiche').removeClass('selected');
      $('.fiche.' + this.id).addClass('selected');
    }
    launcher();
    $('.dot.' + this.id).addClass("solid");
  });
  $('.bouton').hover(
    function() { // hover in
      $('.dot').removeClass("solid");
      $('.dot.' + this.id).addClass("solid");
    }, // hover out
    function() {
      $('.dot').addClass("solid");
    },
  );
  function highlighter(lab) {
    if (highlightlist.includes(lab)) {
      $('#' + lab).removeClass('highlighted');
      $('#sigle-' + lab ).removeClass('highlighted');
      $('#fiche-' + lab).removeClass('highlighted');
      highlightlist = highlightlist.filter(e => e !== lab); // remove this lab from highlightlist
    } else {
      $('#' + lab).addClass('highlighted');
      $('#sigle-' + lab ).addClass('highlighted');
      $('#fiche-' + lab).addClass('highlighted');
      highlightlist.push(lab); // add this lab to highlightlist
    }
  }
  $('#dotsBox').on("click", '.dot', function() {
    let highlightedLab = this.id;
    highlighter(highlightedLab);
  });
  $('#fiches-section').on("click", '.sigle-fiche', function() {
    let highlightedLab = this.id.replace('sigle-', '');
    highlighter(highlightedLab);
  });
  $('.dot').addClass("solid");
  makeFiches();
});
