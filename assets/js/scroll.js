$(document).ready(functio() {
  $(window).scroll(function(){
    var scrollPosition = $(window).scrollTop(),
    navbar = $('.fixed.top');

    if(scrollPosition > 400){
      navbar.addClass('change-fix-top');
    }else{
      navbar.removeClass('change-fix-top');
    }
  });
});
