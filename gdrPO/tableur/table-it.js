var tableIt = function (data){
var buffer = {};
// console.log(property + ": " + data[property]);
// console.log(`${property}: ${data[property]}`);
$('#table-div').html("<table id='table'></table");

//table head
$('#table').append("<thead id='thead'><tr id='theadrow'></tr>");
for (const property in data.l2c) {
  $('#theadrow').append("<td>" + property + "</td>");
};
$('#table').append("</tr></thead>");

//rows
for (const labo in data) {
  $('#table').append("<tr id='" + labo + "'></tr>");
  // console.log("<tr id=" + test + ">" + test + "</tr>");
  // console.log(eval("data." + test));
};

for (const property in data) {
  $('#' + property).append("<td>" + eval("data." + property + ".sigle") + "</td>");
  $('#' + property).append("<td>" + eval("data." + property + ".nom") + "</td>");
  $('#' + property).append("<td>" + eval("data." + property + ".site") + "</td>");
  $('#' + property).append("<td>" + eval("data." + property + ".matricule") + "</td>")
  //tutelles Array
  var tutellesString = "<td>";
  buffer = eval("data." + property + ".tutelles");
  for (j = 0; j < buffer.length; j++) {
    if (j == 0) {
      tutellesString += eval("data." + property + ".tutelles[" + j + "]");
    } else {
      tutellesString += " ; " + eval("data." + property + ".tutelles[" + j + "]");
    }
  };
  tutellesString += "</td>";
  $('#' + property).append(tutellesString);
  //fin tutelles
  $('#' + property).append("<td>" + eval("data." + property + ".latitude") + "</td>");
  $('#' + property).append("<td>" + eval("data." + property + ".longitude") + "</td>");
  //domaines
  // $('#' + property).append("<td>" + eval("data." + property + ".domaines") + "</td>");
  var domainesString = "<td>";
  buffer = eval("data." + property + ".domaines");
  for (j = 0; j < buffer.length; j++) {
    if (j == 0) {
      domainesString += eval("data." + property + ".domaines[" + j + "]");
    } else {
      domainesString += "<br />" + eval("data." + property + ".domaines[" + j + "]");
    }
  };
  domainesString += "</td>";
  $('#' + property).append(domainesString);
  //fin domaines
  $('#' + property).append("<td>" + eval("data." + property + ".axes") + "</td>");
  $('#' + property).append("<td>" + eval("data." + property + ".web") + "</td>");
  $('#' + property).append("<td>" + eval("data." + property + ".contact.prenom") + " " + eval("data." + property + ".contact.nom") + "<br />" + eval("data." + property + ".contact.email")+ "</td>");
  // membres
  var membresString = "<td>";
  buffer = eval("data." + property + ".membres");
  for (j = 0; j < buffer.length; j++) {
    membresString += j + 1 + ". ";
    membresString += eval("data." + property + ".membres[" + j +"].prenom") + " " + eval("data." + property + ".membres[" + j +"].nom") + "<br />";
  };
  membresString += "</td>";
  $('#' + property).append(membresString);
};
}
