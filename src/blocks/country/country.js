var cursorLeftTrigger;

$(window).on('load resize', function() {
  cursorLeftTrigger = $(window).width() * 0.8;
});

$('.select--country select').on('change', function() {
  console.log($(this).val());
});

$('.country path').on('mousemove mouseenter', function (e) {
  
  $(this).closest('.country').find('.country__popup').remove();
  
  var region = $(this).data('region');

  if (!$('.country__popup').length) {
    if (region) {
      $(this).closest('.country__item-map').append('<div class="country__popup">' + region + '</div>');
    } else {
      $(this).closest('.country__item-map').append('<div class="country__popup">Название региона</div>');
    }
  }
  
  var positionLeft = e.clientX + 30;
  var positionRight = 'auto';
  
  if (e.clientX > cursorLeftTrigger) {
    positionLeft = 'auto'
    positionRight = $(window).width() - e.clientX + 20;
  }
  $('.country__popup').css({
    left: positionLeft,
    right: positionRight,
    top: e.clientY
  });
});

$('.country path').on('mouseleave', function () {
  $(this).closest('.country').find('.country__popup').remove();
});


if ($('.country').length) {
  $(window).on('scroll', function(e) {
    if (!$('.country__popup').hasClass('country__popup--filter')) {
      $('.country__popup').remove();
    }
  });
}
