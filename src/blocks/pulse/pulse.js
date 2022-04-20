$('.pulse__slider').slick({
  slidesToShow: 6,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1200,
      settings: 'unslick'
    },
  ]
});
