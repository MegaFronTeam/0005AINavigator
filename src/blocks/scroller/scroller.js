$(window).on('load resize', function () {

  setTimeout(function () {
    
    if ($(window).width() > 991) {

      var highestBox = 0;

      $('.section').each(function () {

        if ($(this).height() > highestBox) {
          highestBox = $(this).height();
        }

      });
      $('.section').height(highestBox);
    }

    else {
      $('.section').height('auto');
    }
  }, 500);

  setTimeout(function () {
  
    $('.scroller__content').not('.slick-initialized').slick({
      slidesToShow: 1,
      arrows: false,
      variableWidth: true,
      infinite: false,
      dots: true,
      responsive: [
        {
          breakpoint: 992,
          settings: 'unslick'
        }
      ]
    });
  }, 500);
})

    
