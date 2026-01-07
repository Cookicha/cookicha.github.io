$(document).ready(function() {
  $("#hamburger").click(function() {
    $('.menuItem, #hamburgerSign, #crossSign').toggle();
    $('.nav').toggleClass('open');
  });
});
