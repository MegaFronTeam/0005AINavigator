if ($(window).width() < 768) {
  
  var categoryHeight = function() {
    
    $('.category-item__subtitle-wrapper').click(function (e) {
      $(this).closest('.category-item').toggleClass('category-item--active');
      $(this).closest('.category-item').find('.category-item__wrapper').toggle();
      var slideHeight = $(this).closest('.slick-slide').outerHeight();
      $(this).closest('.slick-list').height(slideHeight);
    });
  }
  
  categoryHeight();
}
