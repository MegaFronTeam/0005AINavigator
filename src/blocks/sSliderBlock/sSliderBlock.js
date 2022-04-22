$(document).ready(function(){
  $('.sSliderBlock__slider--js').slick({
    // dots: true,
    slidesToShow: 3,
    arrows: false,
    // dots: true,
    // dotsClass: 'pagination',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
});