var sliderInit = function () {
  $('.slider__content').each(function () {

    var slides = [3, 2, 1];

    if ($(this).hasClass('slider__content--two')) {
      var slides = [2, 2, 1];
    } else if ($(this).hasClass('slider__content--photo')) {
      var slides = [4, 3, 2];
    } else if ($(this).hasClass('slider__content--cards')) {
      var slides = [4, 3, 1];
    }

    $(this).slick({
      infinite: false,
      slidesToShow: slides[0],
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: slides[1]
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: slides[2]
          },
        }
      ]
    });
  });
};

sliderInit();
