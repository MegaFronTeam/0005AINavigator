$('.menu__btn').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('menu__btn--active');
  $('.menu__content').toggleClass('menu__content--active');
  $('body').toggleClass('fixed');
  menuAccordion();
});

if ($(window).width() < 1200) {
  $('.menu__link--header').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('menu__link--active');
    $('.menu__submenu').hide(); $(this).closest('.menu__item').find('.menu__submenu').fadeToggle();
  })
};

var menuAccordion = function() {
  $('.menu__content--active .menu__more-bottom-header').click(function(e) {
    e.preventDefault();
    $(this).closest('.menu__more-bottom').find('.menu__more-bottom-content').slideToggle('fast');
  });
}
