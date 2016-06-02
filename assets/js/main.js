$(function(){
  $('a[href^="#"]').on('click', function(e){
    e.preventDefault();
    var id = $(this).attr('href');
    var $target = $(id);
    $('html, body').animate({
      scrollTop: $target.offset().top - $('.site-nav').outerHeight()
    }, 250, function(){
      if (history.pushState) {
        history.pushState(null, null, id);
      } else {
        window.location.hash = id;
      }
    });
  });

  var floatNav = function floatNav(){
    var $nav = $('.site-nav');
    var scrollTop = $(window).scrollTop();
    var navHeight = $nav.outerHeight();

    if (scrollTop > navHeight) {
      $nav.addClass('site-nav--fixed site-nav--minimal');
      $('body').css('padding-top', navHeight);
    } else if (scrollTop > 0) {
      $nav.addClass('site-nav--fixed').removeClass('site-nav--minimal');
      $('body').css('padding-top', navHeight);
    } else {
      $nav.removeClass('site-nav--fixed site-nav--minimal');
      $('body').css('padding-top', '');
    }
  }

  $(window).scroll(floatNav);

  floatNav();
});
