/** Navbar Menu **/
$(function() {
  var navMain = $("#navbarResponsive");
  navMain.on("click", "a", null, function() {
    navMain.collapse('hide');
  });
});

/** Back Top Icon **/
var btn = $('.top');
  $(window).scroll(function() {
  if ($(window).scrollTop() > 1000) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, '1300');
});

