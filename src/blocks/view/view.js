$('.view__btn').click(function (e) {
  e.preventDefault();

  $(this).closest('.view').find('.view__btn').removeClass('view__btn--active');
  $(this).addClass('view__btn--active');
  if ($(this).hasClass('view__btn--rows')) {
    $(this).closest('.map__items-content').find('.map__projects').addClass('map__projects--row');
  } else {
    $(this).closest('.map__items-content').find('.map__projects').removeClass('map__projects--row');
  }
});
