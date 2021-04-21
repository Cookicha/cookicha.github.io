var requestURL = 'data/data-biosena.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const data = request.response;
  const labos = Object.values(data);
  const ids = Object.keys(data);



  var convertGPS = function(latLng) {
    latLng[2] = (latLng[0] * (-51.8)) + 2730 + 250;
    latLng[3] = (latLng[1] * (-35.3)) + 373;
  }
  for (var i = 0; i < ids.length; i++) {
    var id = ids[i];
    var sigle = "<div class='sigle-fiche'>" + data[id].sigle + "</div>";
    var nom = "<div class='nom-fiche'>" + data[id].nom + "</div>";
    convertGPS(data[id].latLng);
    var classes = "";
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
    $('.dot').click(function() {
      if ($(this).hasClass('clicked')) {
        $(this).removeClass('clicked');
      } else {
        $(this).addClass('clicked');
        // $('#fiche-' + this.id).children(".grosPlus").click();
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
