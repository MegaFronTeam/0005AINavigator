$('.filters__btn').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('filters__btn--active');
  $('.filters__content').slideToggle('fast');
})