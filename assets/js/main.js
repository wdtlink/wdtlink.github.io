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

/** Navigation Scroll**/
 var nav_sections = $('section');
  var main_nav = $('.navbar');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".navbar-nav ul:first li:first").addClass('active');
      }
    });
  });
