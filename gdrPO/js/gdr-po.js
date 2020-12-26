$(document).ready(function() {
  $("#hamburger").click(function() {
    $('.menuItem, #hamburgerSign, #crossSign').toggle();
    $('.nav').toggleClass('open');
  });
});
var requestURL = 'data/dataGdrPo.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const data = request.response;
  const labos = Object.values(data);
  const ids = Object.keys(data);

  var nombreDeLabos = ids.length;
  var nombreDeChercheurs = 0;
  for (var i = 0; i < ids.length; i++) {
    var id = ids[i];
    nombreDeChercheurs += id[membres].length;
  }
  console.log("labos : " + nombreDeLabos + ", chercheurs : " + nombreDeChercheurs);
}
