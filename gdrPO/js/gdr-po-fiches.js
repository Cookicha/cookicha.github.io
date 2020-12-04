var requestURL = 'https://cookicha.github.io/gdrPO/tableur/realDataset.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const data = request.response;
  console.log(data);
  const labos = Object.values(data);
  const ids = Object.keys(data);
  var decodeDomain = function(input){
    if (input == "phy") {return "Physique"}
    else if (input == "phy") {return "Physique";}
    else if (input == "chi") {return "Chimie";}
    else if (input == "bio") {return "Biologie";}
    else if (input == "eco") {return "Écologie & environnement";}
    else if (input == "ing") {return "Sciences de l'ingénierie & des systèmes";}
    else if (input == "univ") {return "Sciences de l'univers";}
    else if (input == "shs") {return "Sciences humaines & sociales";}
  }
  var decodeAxes = function(input){
    if (input == "1") {return "État des lieux"}
    else if (input == "2") {return "Effets sur la biosphère";}
    else if (input == "3") {return "Innovation";}
  }
  var decodeTechniques = function(input){
    if (input == "A") {return "Échantillonnage et caractérisation des polymères"}
    else if (input == "B") {return "Caractérisation des microorganismes";}
    else if (input == "C") {return "Outils écotoxicologiques";}
    else if (input == "D") {return "Modélisation";}
    else if (input == "E") {return "Outils SHS";}
  }
  for (var i = 0; i < ids.length; i++) {
    var id = ids[i];
    var pin = "<img src='../img/pin-gris.png' class='pin-fiche' />";
    var sigle = "<div class='sigle-fiche'>" + data[id].sigle + "</div>";
    var nom = "<div class='nom-fiche'>" + data[id].nom + "</div>";
    var identifiant = "<div class='identifiant-fiche'>" + data[id].identifiant + "</div>";
    var logo = "<img src='../img/logos/labos/" + id + "-logo.png' class='logo-fiche'/>";
    var domaines = decodeDomain(data[id].domaines[0]);
    for (var j = 1; j < data[id].domaines.length; j++) {
      domaines += " &ndash; " + decodeDomain(data[id].domaines[j]);
    }
    var axes = decodeAxes(data[id].axes[0]);
    for (var j = 1; j < data[id].axes.length; j++) {
      axes += " &ndash; " + decodeAxes(data[id].axes[j]);
    }
    var techniques = decodeTechniques(data[id].techniques[0]);
    for (var j = 1; j < data[id].techniques.length; j++) {
      techniques += " &ndash; " + decodeTechniques(data[id].techniques[j]);
    }
    var filtres = "<div class='filtres-fiche'><div class='domaines-fiche'>" + domaines + "</div><div class='axes-fiches'>" + axes + "</div><div class='techniques-fiche'>" + techniques + "</div></div>";
    var titre = "<div class='titre-fiche'>" + data[id].fiche.titre + "</div>";
    // <div class='p-fiche'>Nécessité de comprendre les mécanismes microscopiques qui pilotent la transformation d’un déchet plastique en micro- et nanoplastiques</div>
    var contact = "<div class='contact-fiche'><div class='web-contact-fiche'><a href='" + data[id].web + "'>" + data[id].web + "</a></div><div class='nom-contact-fiche'>Contact GDR : <span>" + data[id].contact.prenom + " </span><span>" + data[id].contact.nom + "</span></div><div class='contact-contact-fiche'><a href='mailto:" + data[id].contact.email + "'>" + data[id].contact.email + "</a></div></div>";
    $('#fiches-section').append("<div class='fiche'>" + pin + sigle + nom + identifiant + logo + filtres + titre + contact + "</div>");
  }
};
