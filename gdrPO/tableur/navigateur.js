// (function () {
// var textFile = null,
//   makeTextFile = function (text) {
//     var data = new Blob([text], {type: 'text/js'});
//
//     // If we are replacing a previously generated file we need to
//     // manually revoke the object URL to avoid memory leaks.
//     if (textFile !== null) {
//       window.URL.revokeObjectURL(textFile);
//     }
//
//     textFile = window.URL.createObjectURL(data);
//
//     return textFile;
//   };
//
//
//   var create = document.getElementById('create'),
//     textbox = document.getElementById('textbox');
//
//   create.addEventListener('click', function () {
//     var link = document.getElementById('downloadlink');
//     link.href = makeTextFile(textbox.value);
//     link.style.display = 'block';
//   }, false);
// })();
var folderName = "data";
var folder = data;
var depth = 0;
var backup = [];
var keys = Object.keys(folder);
var bufferName;
var buffer;
function move(){
  folder = eval(folderName);
  keys = Object.keys(folder);
}

function openFolder() {
  $('#ici').html("");
  for (i = 0; i < keys.length; i++) {
    targetName = folderName+"."+keys[i];
    target = eval(targetName);
    if (typeof target === 'object' && target !== null && Array.isArray(target) !== true) {
      $('#ici').append("<div class='target' id="+keys[i]+">"+keys[i]+"</div>");
    } else if (Array.isArray(target)) {
      bufferName = folderName+"."+keys[i];
      buffer = eval(bufferName);
      if (typeof buffer[0] === 'object' && buffer[0] !== null) {
        $('#ici').append("<div class='target' id="+keys[i]+">"+keys[i]+"</div>");
      } else {
        $('#ici').append("<div id="+keys[i]+">"+keys[i]+"</div>");
        writeContentsArray(keys[i]);
      }
    } else if (typeof target === 'string') {
      $('#ici').append("<div id="+keys[i]+">"+keys[i]+"</div>");
      writeContents(keys[i]);
    } else {
      $('#ici').append("<div class='target' id="+keys[i]+">"+keys[i]+"</div>");
    }
  }
}

function writeContents(id) {
  bufferName = folderName+"."+id;
  buffer = eval(bufferName);
  $('#'+id).append(" : <span class='label'>"+buffer+"</span>");
}
function writeContentsArray(id) {
  bufferName = folderName+"."+id;
  buffer = eval(bufferName);
  $('#'+id).append(" : ");
  for (j = 0; j < buffer.length; j++) {
    if (j == 0) {
      $('#'+id).append("<span  class='label'>" + buffer[j] + "</span>");
    } else {
      $('#'+id).append(" ; " + "<span  class='label'>" + buffer[j] + "</span>");
    }
  }
}
function writeNestedObject(id) {
  backup[depth] = folderName;
  depth += 1;
  folderName = folderName+"."+id;
  folder = eval(folderName);
  $('#ici').html("");
  for (k = 0; k < folder.length; k++) {
    keys = Object.keys(folder[k]);
    for (m = 0; m < keys.length; m++) {
      targetName = folderName+'['+k+']'+"."+keys[m];
      target = eval(targetName);
      $('#ici').append("<span class='label'>" + target + "</span> ");
    }
    $('#ici').append("<br />");
  }
}
$(document).ready(function(){
  $('body').on('click', '.target', function() {
    targetName = folderName+"."+this.id;
    target = eval(targetName);
    if (typeof target === 'object' && target !== null && Array.isArray(target) !== true) {
      backup[depth] = folderName;
      depth += 1;
      folderName = folderName+"."+this.id;
      move();
      openFolder();
    } else if (Array.isArray(target)) {
      if (typeof target[0] === 'object' && target[0] !== null) { // cas de l'array contenant un objet
        writeNestedObject(this.id);
      } else {
        writeContentsArray(this.id);
      }
    } else {
      writeContents(this.id);
    }
  });
  $('#back').click(function() {
    if (depth <= 0) {
      return;
    } else {
      depth -= 1;
      folderName = backup[depth];
      move();
      openFolder();
    }
  });
  openFolder();
});
