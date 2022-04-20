ScrollReveal().reveal('.reveal', {
  distance: '100px',
  duration: '500',
  easing: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
  opacity: 0,
  origin: 'bottom',
  viewFactor: 1,
  delay: 200,
  interval: '50',
  scale: '1',
  mobile: false,
  reset: false
});

ScrollReveal().reveal('.section--start', {
  duration: 0,
  opacity: 0,
  distance: "0px",
  delay: 500,
  viewFactor: .1,
  cleanup: true,
  afterReveal: function(el) {
    $(el).addClass("main__section--active");
  }
});

//$('.section').mouseenter(function() {
//  $(this).find('.section__bg-content').get(0).play();
//});
//
//$('.section').mouseleave(function() {
//  $(this).find('.section__bg-content').get(0).pause();
//});

$(window).on('load', function() {
  $('.section--dark').each(function() {
    $(this).prepend('<div class="section__bg"> <video class="section__bg-content" autoplay="autoplay" loop muted=""> <source src="./img/section-3.mp4" type="video/mp4"> </video> </div>');
  })
  $('.section--light').each(function() {
    $(this).prepend('<div class="section__bg"> <video class="section__bg-content" autoplay="autoplay" loop muted=""> <source src="./img/section-2.mp4" type="video/mp4"> </video> </div>');
  })
});
