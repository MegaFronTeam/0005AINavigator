$('.news-list__slider').slick({
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: 'unslick'
    },
  ]
});
