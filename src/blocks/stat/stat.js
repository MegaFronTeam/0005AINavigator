if ($(window).width() < 768) {
  $('.stat__btn').click(function(e) {
    e.preventDefault();
    $(this).closest('.stat').toggleClass('stat--active');
    $(this).closest('.stat').find('.stat__btn-content').toggle();
  })
}
