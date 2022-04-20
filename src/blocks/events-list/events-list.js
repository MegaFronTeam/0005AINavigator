$('.events-list__slider--narrow').slick({
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        adaptiveHeight: true
      }
    },
  ]
});

var eventsSliderInit = function() {
  $('.events-list__slider--wide:not(.slick-initialized)').slick({
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true
        }
      },
    ]
  })
}

eventsSliderInit();



$('.nav-tabs--events .nav-link').on('shown.bs.tab', function (e) {
  $('.events-list__slider--wide.slick-initialized').slick('unslick');

  eventsSliderInit();
});
