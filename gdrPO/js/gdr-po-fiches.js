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
};
