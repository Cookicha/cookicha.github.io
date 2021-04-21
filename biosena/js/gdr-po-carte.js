var requestURL = 'data/dataGdrPo.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const data = request.response;
  const labos = Object.values(data);
  const ids = Object.keys(data);
  var decodeDomain = function(input) {
    if (input == "phy") {
      return "Physique"
    } else if (input == "phy") {
      return "Physique";
    } else if (input == "chi") {
      return "Chimie";
    } else if (input == "bio") {
      return "Biologie";
    } else if (input == "eco") {
      return "Écologie & environnement";
    } else if (input == "ing") {
      return "Sciences de l'ingénierie & des systèmes";
    } else if (input == "univ") {
      return "Sciences de l'univers";
    } else if (input == "shs") {
      return "Sciences humaines & sociales";
    }
  }
  var decodeAxes = function(input) {
    if (input == "1") {
      return "Niveaux de contamination et devenir ultime"
    } else if (input == "2") {
      return "Impacts sur le vivant et les écosystèmes";
    } else if (input == "3") {
      return "Nouveaux polymères & modèles économiques";
    }
  }
  var decodeTechniques = function(input) {
    if (input == "A") {
      return "Échantillonnage et caractérisation des polymères"
    } else if (input == "B") {
      return "Caractérisation des micro-organismes";
    } else if (input == "C") {
      return "Outils écotoxicologiques";
    } else if (input == "D") {
      return "Modélisation";
    } else if (input == "E") {
      return "Outils SHS";
    }
  }
  var convertGPS = function(latLng) {
    latLng[2] = (latLng[0] * (-51.8)) + 2730 + 250;
    latLng[3] = (latLng[1] * (-35.3)) + 373;
  }
  for (var i = 0; i < ids.length; i++) {
    var id = ids[i];
    var sigle = "<div class='sigle-fiche'>" + data[id].sigle + "</div>";
    var nom = "<div class='nom-fiche'>" + data[id].nom + "</div>";
    var identifiant = "<div class='identifiant-fiche'>" + data[id].identifiant + "</div>";
    var logo = "<div class='logo-box-fiche'><img src='img/logos/labos/" + id + "-logo.png' class='logo-fiche'/></div>";
    var domaines = "";
    var axes = "";
    var techniques = "";
    if (data[id].domaines.length > 0) {
      domaines = decodeDomain(data[id].domaines[0]);
      for (var j = 1; j < data[id].domaines.length; j++) {
        domaines += " &ndash; " + decodeDomain(data[id].domaines[j]);
      }
    }
    if (data[id].axes.length > 0) {
      axes = decodeAxes(data[id].axes[0]);
      for (var j = 1; j < data[id].axes.length; j++) {
        axes += " &ndash; " + decodeAxes(data[id].axes[j]);
      }
    }
    if (data[id].techniques.length > 0) {
      techniques = decodeTechniques(data[id].techniques[0]);
      for (var j = 1; j < data[id].techniques.length; j++) {
        techniques += " &ndash; " + decodeTechniques(data[id].techniques[j]);
      }
    }
    var filtres = "<div class='filtres-fiche'><div class='domaines-fiche'>" + domaines + "</div><div class='axes-fiches'>" + axes + "</div><div class='techniques-fiche'>" + techniques + "</div></div>";
    var grosPlus = "<div class='grosPlus clos'></div>";
    if (data[id].fiche.titre != "") {
      var titre = "<div class='titre-fiche'>" + data[id].fiche.titre + "</div>";
    } else {
      var titre = "";
    }
    var paragraphes = "";
    if (data[id].fiche.bullets.length > 0) {
      for (var j = 0; j < data[id].fiche.bullets.length; j++) {
        paragraphes += "<div class='p-fiche'>" + data[id].fiche.bullets[j] + "</div>";
      }
    }
    var contact = "<div class='contact-fiche'><div class='nom-contact-fiche'>Contact GDR : <span>" + data[id].contact.prenom + " </span><span class='contact-nom'>" + data[id].contact.nom + "</span></div><div class='contact-contact-fiche'><span class='force-select-all'>" + data[id].contact.email + "</span></div><div class='web-contact-fiche'><a href='" + data[id].web + "'>" + data[id].web + "</a></div></div>";
    $('#fiches-section').append("<div class='fiche' id='fiche-" + id + "'><div class='tete'>" + sigle + nom + identifiant + "</div>" + logo + filtres + grosPlus + titre + paragraphes + contact + "</div>");
    convertGPS(data[id].latLng);
    var classes = "";
    for (var j = 0; j < data[id].axes.length; j++) {
     classes += "axe" + data[id].axes[j] + " ";
    }
    for (var j = 0; j < data[id].domaines.length; j++) {
     classes += data[id].domaines[j] + " ";
    }
    for (var j = 0; j < data[id].techniques.length; j++) {
     classes += "tech" + data[id].techniques[j] + " ";
    }
    $('#headerMap').append("<div class='dot " + classes + "' id='" + id + "' style='top: " + data[id].latLng[2] + "px; right: " + data[id].latLng[3] + "px;'><div class='label'>" + data[id].sigle + "</div></div>")
  }
  $.fn.scrollView = function () {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top - 100
        }, 600);
    });
  }
  $(document).ready(function() {
    $(".grosPlus.clos").click(function() {
      $(this).toggleClass('clos');
      $(this).toggleClass('ouvert');
        $(this).siblings('.titre-fiche,.p-fiche,.contact-fiche').toggle(200);
    });
    $('.dot').click(function() {
      if ($(this).hasClass('clicked')) {
        $(this).removeClass('clicked');
        $('#fiche-' + this.id).removeClass('highlight');
      } else {
        $(this).addClass('clicked');
        // $('#fiche-' + this.id).children(".grosPlus").click();
        $('#fiche-' + this.id).addClass('highlight').scrollView();
      }
    });

    var filtre = [];
    var code;
    var filtrehover = [];
    var codehover;
    function displayIn() {

      code = filtre.join('');
      codehover = code + filtrehover.join('');
      $('.dot').hide();
      $('.dot' + codehover).show();
      $('.fiche').hide();
      $('.dot' + codehover + code).each(function() {
        $('#fiche-' + this.id).show();
      });
    }
    function displayOut() {
      filtrehover = [];
      codehover = '';
      code = filtre.join('');
      $('.dot').hide();
      $('.dot' + code).show();
      $('.fiche').hide();
      $('.dot' + codehover + code).each(function() {
        $('#fiche-' + this.id).show();
      });
    }

    $('.bouton').click(function() {
      if ($(this).hasClass('clicked')) {
        $(this).removeClass('clicked');
        $('.dot.' + this.id).removeClass('selected');
        filtre = filtre.filter(e => e !== ('.' + this.id));
        $('.fiche.' + this.id).removeClass('selected');
        filtre = filtre.filter(e => e !== ('.' + this.id));
        displayOut();
      } else {
        $(this).addClass('clicked');
        $('.dot.' + this.id).addClass('selected');
        filtre.push('.' + this.id);
      }
    });
    $('.bouton').hover(
      function() {
        filtrehover.push('.' + this.id);
        displayIn();
      }, function() {
        displayOut();
      }
    );
  });
};
