var requestURL = 'https://cookicha.github.io/gdrPO/tableur/realDataset2.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const data = request.response;
  const labos = Object.values(data);
  console.log(labos);

var mymap = L.map('carte').setView([47.1, 3], 5);
// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'your.mapbox.access.token'
// }).addTo(mymap);

// var Esri_WorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
// 	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
// 	maxZoom: 16
// });
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

// Esri_WorldGrayCanvas.addTo(mymap);
CartoDB_VoyagerNoLabels.addTo(mymap);
Esri_WorldTerrain.addTo(mymap);
Stamen_TonerLines.setOpacity(0.1).addTo(mymap);
CartoDB_VoyagerOnlyLabels.setOpacity(0.4).addTo(mymap);

// var marker = L.marker([47.1,3]).addTo(mymap);
var rond = L.divIcon({className: 'my-div-icon'});
for (var i = 0; i < labos.length; i++) {
  var labo = labos[i];
  console.log(labo);
  console.log(labo.latLng);

  // L.marker([labos[i]["latlng"][0],labos[i]["latLng"][1]], {icon: rond}).addTo(mymap);
// LUI LA
  // markers[labo] = L.marker(labo.latLng,{icon: rond}).addTo(map);
}
// console.log(labos[i]["Lat/Long"][0],labos[i]["Lat/Long"][1])

}
