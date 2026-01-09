// HEADER AND FOOTER FETCH //
function loadPartial(selector, url) {
  return fetch(url)
    .then(res => res.text())
    .then(html => {
      document.querySelector(selector).innerHTML = html;
    });
}

// MENU CURRENT PAGE HIGHLIGHT //
function highlightCurrentPage() {
  const currentPath = window.location.pathname.replace(/\/$/, "");
  document.querySelectorAll("nav a").forEach(link => {
    const linkPath = new URL(link.href).pathname.replace(/\/$/, "");
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
}

// MENU ICON TOGGLE //
function initMenuToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// LOAD HEADER AND FOOTER //
loadPartial("#header", "/partials/header.html").then(() => {
  highlightCurrentPage();
  initMenuToggle();
});
loadPartial("#footer", "/partials/footer.html");

// PPT SCROLL //
$('').css({ cursor: 'wait' });
(function ($) {
  $(window).load(function () {
    if (!$("#theseScroll").length) return;
    var scrollamount = $("#ref").height();
    $("#ministereScroll,#theseScroll,#PFScroll").mCustomScrollbar({
      scrollButtons: { enable: true, scrollType: "stepped" },
      keyboard: { scrollType: "stepped" },
      mouseWheel: { scrollAmount: scrollamount, normalizeDelta: true },
      theme: "rounded-dark",
      autoExpandScrollbar: true,
      snapAmount: scrollamount
    });
  });
})(jQuery);

// RESIZE BOTTLE //
var volume;
$(function () {
  $("#resizerBouteille").resizable({
    handles: 'n',
    maxHeight: 240,
    minHeight: 18,
    resize: function (event, ui) {
      volume = Math.round(40 + ui.size.height * 3.6);
      $("#volume").html(volume + " ml");
    }
  });
});

// LAUNCH //
$(document).ready(function () {
  $('html').css({ cursor: 'auto' });
  // highlight current page
  document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.replace(/\/$/, "");

    document.querySelectorAll("nav a").forEach(link => {
      const linkPath = new URL(link.href).pathname.replace(/\/$/, "");

      if (linkPath === currentPath) {
        link.classList.add("active");
      }
    });
  });

});