var lastScrollTop = 0;
$(window).scroll(function (event) {
  var st = $(this).scrollTop();
  
  var trigger = 0;
    
  if (st > lastScrollTop) {
    $('.header').removeClass('header--fixed');
  } else {
    $('.header').addClass('header--fixed');
  }
  
  if (st == trigger) {
    $('.header').removeClass('header--fixed');
  };
  
  lastScrollTop = st;
});

$('.header__btn--search').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('header__btn--search-active');
  $('.header__search').toggleClass('header__search--active');
});
