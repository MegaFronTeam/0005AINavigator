$('.expert').click(function(e) {
  e.preventDefault();
  $('.expert').removeClass('expert--active');
  $(this).addClass('expert--active');
});

$('.experts__wrapper').mouseleave(function() {
  $('.expert').removeClass('expert--active');
})
