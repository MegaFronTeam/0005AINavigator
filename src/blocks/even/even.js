$(window).on('load resize', function() {

  if ($('.even').length) {

    var evenHeight = $('.even__content').outerHeight() - 170;

    $('.even__scroll').height(evenHeight);

    const evenPS = new PerfectScrollbar('.even__scroll', {
      useBothWheelAxes: true,
    });
  };
})
