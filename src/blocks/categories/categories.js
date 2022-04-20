$('.categories').on('init', function(slick){
  console.log(slick);
  var length = $('.categories .category').length;
  $('<div class="categories__counter">1/' + length + '</div>').insertAfter('.categories .slick-arrow.slick-prev');
});

$('.categories').slick({
  slidesToShow: 1,
  fade: true,
  adaptiveHeight: true
});

$('.categories').on('afterChange', function(slick, currentSlide) {
//  console.log(currentSlide.currentSlide);
//  categoryHeight();
  $('.categories__counter').text(currentSlide.currentSlide + 1 + '/7');
});
