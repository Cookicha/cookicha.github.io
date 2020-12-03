var requestURL = 'https://cookicha.github.io/gdrPO/tableur/realDataset.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const data = request.response;
  const labos = Object.values(data);
const ids = Object.keys(data);
  console.log(ids);
  var mymap = L.map('carte', {
    scrollWheelZoom: false
  }).setView([47.1, 3], 5);
  var CartoDB_VoyagerNoLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
    attribution: '',
    subdomains: 'abcd',
    maxZoom: 19
  });
  var Esri_WorldTerrain = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri (Source: USGS, Esri, TANA, DeLorme, and NPS)',
    maxZoom: 9
  });
  var Stamen_TonerLines = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lines/{z}/{x}/{y}{r}.{ext}', {
    attribution: 'and <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 19,
    ext: 'png'
  });
  var CartoDB_VoyagerOnlyLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  });

  CartoDB_VoyagerNoLabels.addTo(mymap);
  Esri_WorldTerrain.addTo(mymap);
  Stamen_TonerLines.setOpacity(0.1).addTo(mymap);
  CartoDB_VoyagerOnlyLabels.setOpacity(0.4).addTo(mymap);

  // var rond = L.divIcon({
  //   className: 'marker'
  // });
  var print = "";
  for (var i = 0; i < ids.length; i++) {
    print += ids[i] + ",";
  // var markers = {};
  // var labelMarkerOptions = {
  //   closeButton: false
  };
  console.log(print);
  for (var i = 0; i < labos.length; i++) {
    var id = labos.keys[i];
    var labo = labos[i];
    var marker = markers[id];
    // console.log(labo);
    // console.log(labo.latLng);
    marker = L.marker(labo.latLng, {
      icon: L.divIcon({
        html: ("<div class='element' id='" + id + "'><div class='label'>" + labo.sigle + "</div>")
      })
    }).addTo(mymap).on('click', onClick);
        // if($(this).hasClass('clicked')){
        //   $(this).removeClass('clicked');
        //   $('#fiche'+this.id).removeClass('test');
        // } else {
        //   $(this).addClass('clicked');
        //   console.log(this.id);
        //   console.log('#fiche'+this.id);
        //   $('#fiche'+this.id).addClass('test');
  }
}

function onClick(e) {

e.marker._icon.classList.add('activemarker');
}

// marker.bindPopup(labo.sigle, labelMarkerOptions);
// marker.on('mouseover', function(e) {
//   this.openPopup();
//   console.log('over ')
//   marker.on('mouseout', function(e) {
//     console.log('out')
//     this.closePopup();
//   });
// });


$(document).ready(function() {
  var filtre = [];
  var code;
  var filtrehover = [];
  var codehover;

  function displayIn() {
    code = filtre.join('');
    codehover = code + filtrehover.join('');
    $('.element').hide();
    $('.element' + codehover).show();
  }

  function displayOut() {
    filtrehover = [];
    codehover = '';
    code = filtre.join('');
    $('.element').hide();
    $('.element' + code).show();
  }


  $('.bouton').click(function() {
    if ($(this).hasClass('clicked')) {
      $(this).removeClass('clicked');
      $('.element.' + this.id).removeClass('selected');
      $('.element.' + this.id).addClass('hovered');
      filtre = filtre.filter(e => e !== ('.' + this.id));
    } else {
      $(this).addClass('clicked');
      $('.element.' + this.id).addClass('selected');
      $('.element.' + this.id).removeClass('hovered');
      filtre.push('.' + this.id);
    }
  });

  $('.bouton').hover(function() {
    filtrehover.push('.' + this.id);
    displayIn();
  }, function() {
    displayOut();
  });

  // var elementClick = function(){
  //
  //   }
  // };


});
