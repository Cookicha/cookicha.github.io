// 2 BLOBS : Two blobs overlap. Calculate area of overlap. Increase size of both blobs accordingly, first the large one, then the other.
function radius(pop) {
  return Math.sqrt(pop / Math.PI);
}

function intersection_area(r1, d1, r2, d2) {
  return ((r2 * r2) * Math.acos(((d1+d2) * (d1+d2) + r2 * r2 - r1 * r1) / (2 * (d1 + d2) * r2)) + r1 * r1 * Math.acos(((d1 + d2) * (d1 + d2) + r1 * r1 - r2 * r2) / (2 * (d1 + d2) * r1)) - ((1 / 2) * (Math.sqrt((r1 + r2 - (d1 + d2)) * ((d1 + d2) + r2 - r1) * ((d1 + d2) + r1 - r2) * ((d1 + d2) + r1 + r2)))));
}

var vertical = 300;
var pop1 = 30000;
var pop2 = 10000;
var center1 = 200;
var center2 = 310;
var r1;
var r2;
var d;
var d1;
var d2;
var intersect;

$(document).ready(function() {
  r1 = radius(pop1);
  r2 = radius(pop2);
  d = Math.abs((center1 - center2))
  d1 = Math.abs((d * d - r2 * r2 + r1 * r1) / (2 * d));
  d2 = d - d1;
  intersect = intersection_area(r1, d1, r2, d2);
  console.log("surface intersection 1&2 = surface cercle 3 = " + Math.round(intersect,0) + " px²");

  $('#circle1').width(2 * r1).height(2 * r1);
  $('#circle1').css('top', vertical - r1);
  $('#circle1').css('left', center1 - r1);
  $('#circle2').width(2 * r2);
  $('#circle2').height(2 * r2);
  $('#circle2').css('top', vertical - r2);
  $('#circle2').css('left', center2 - r2);
  $('#vertiligne').css('left', center1 + d1);
  $('#circle3').width(2 * Math.sqrt(intersect/Math.PI)).height(2 * Math.sqrt(intersect/Math.PI)).css('top', vertical - Math.sqrt(intersect/Math.PI));;

})
