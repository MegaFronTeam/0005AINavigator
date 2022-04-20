if ($('.main__magic').length) {
  
  $(window).on('resize', function() {
    window.location.reload();
  });

  if ($(window).width() >= 1200 && $(window).height() >= 750) {

    const magic = new ScrollMagic.Controller();

    const magicLength = $('.main__section').length;
    
    const magicDuration = `${(magicLength * 100).toString()}%`;

    $('.main__magic').append('<div class="main__magic-dots"></div>');

    for(var i = 0; i < magicLength; i++) {
      $('.main__magic-dots').append('<div class="main__magic-dots-item"></div>');
    }

    $('.main__magic-dots-item').click(function() {
      var sectionNumber = $(this).index();
      $(window).scrollTop(sectionNumber * ($(window).height() + 10));
    });

    new ScrollMagic.Scene({
      triggerElement: '.main__magic',
      triggerHook: '0',
      reverse: true,
      duration: magicDuration,
    }).on('progress', (event) => {
      $('.main__magic-dots-item').removeClass('main__magic-dots-item--active').eq($('.main__section--active').index()).addClass('main__magic-dots-item--active');
      if (event.scrollDirection === 'FORWARD') {
        for (let i = magicLength; i > 0; i--) {
          const sectionStep = 1 / magicLength;
          if (event.progress > sectionStep * i && event.progress <= sectionStep * (i + 1)) {
            if (!$('.main__section').eq(i).hasClass('main__section--active')) {
              $('body').addClass('magic-fixed');
              setTimeout(function() {
                $('body').removeClass('magic-fixed');
              }, 700);
            }
            $('.main__section').eq(i-1).removeClass('main__section--active');
            $('.main__section').eq(i).addClass('main__section--active');
          };
        }
      } else if (event.scrollDirection === 'REVERSE') {
        for (let i = magicLength - 1; i >= 0; i--) {
          const sectionStep = 1 / magicLength;
          if (event.progress > sectionStep * i && event.progress <= sectionStep * (i + 1)) {
            if (!$('.main__section').eq(i).hasClass('main__section--active')) {
              $('body').addClass('magic-fixed');
              setTimeout(function() {
                $('body').removeClass('magic-fixed');
              }, 700);
            }
            $('.main__section').eq(i+1).removeClass('main__section--active');
            $('.main__section').eq(i).addClass('main__section--active');
          };
        }
      }
    }).setPin('.main__magic').addTo(magic);

  }
}


//ScrollReveal().reveal('.hero', {
//  distance: '100%',
//  duration: '800',
//  easing: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
//  delay: 500,
//  opacity: 0,
//  origin: 'right',
//  viewFactor: 0.1,
//  scale: '1',
//  mobile: false,
//  reset: false
//});

ScrollReveal().reveal('.center', {
  distance: '100%',
  duration: '800',
  easing: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
  delay: 500,
  opacity: 0,
  origin: 'left',
  viewFactor: 0.1,
  scale: '1',
  mobile: false,
  reset: false
});

ScrollReveal().reveal('.main__organizers', {
  distance: '100%',
  duration: '800',
  easing: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
  delay: 500,
  opacity: 0,
  origin: 'bottom',
  viewFactor: 0.05,
  scale: '1',
  mobile: false,
  reset: false
});



