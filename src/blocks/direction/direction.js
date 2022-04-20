$('.direction__header').click(function(e) {
  e.preventDefault();
  $(this).closest('.direction').toggleClass('direction--active');
})
