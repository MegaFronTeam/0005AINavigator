//$('.hero').on('init', function(event, slick){
//  $('.hero__item').each(function(index) {
//    var title = $('.hero__item').eq(index).data('title');
//    $('.slick-dots li').eq(index).append('<div class="hero__dots-title">' + title + '</div>');
//  });
//});

$(window).on('load resize', function() {
  
  if ($('.center__content').length) {

    const centerPS = new PerfectScrollbar('.center__content', {
      useBothWheelAxes: true,
    });
    
    var centerHeight = $('.hero__item-wrapper').outerHeight() - $('.center__header').outerHeight() - 15;
    
    $('.center__content').height(centerHeight);
  }
})

$('.hero').slick({
  slidesToShow: 1,
  arrows: false,
  dots: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false,
        arrows: true,
//        adaptiveHeight: true
      }
    },
  ]
});
