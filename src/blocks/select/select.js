if ($('.select__input').length) {

  $('.select__input').each(function () {

    var container = $(this).closest('.select');

    $(this).select2({
      minimumResultsForSearch: -1,
      width: '100%',
      dropdownParent: container
    });
  })
};



$('.select__input').each(function () {

  $(this).on('change', function () {
    let select = $(this)
    if ($(this).val().length > 1) {

      $(this).next('span.select2').find('ul').html(function () {
        let count = select.select2('data').length-1;
        return "<li>Выбрано " + count + "</li>";
      })
    }
  });
});

$('.select--country .select__input').change(function() {
  var region = $(this).val();
  var regionPath = $('.js-map-content--active path[data-region="' + region + '"]');
  const pathBBox = regionPath[0].getBBox();
  $('.js-map-content--active path').removeClass('active');
  regionPath.addClass('active');
  if (!$('.country__popup').length) {
    $('.js-map-content--active .country__item-map').append('<div class="country__popup country__popup--filter"></div>');
  }
  $('.country__popup').text(region);
  var svg = $('.country__popup').closest('.country__item-map').find('svg');
  
  var coefficient = svg.width() / svg.attr('width');
  var regionY = (pathBBox.y + (pathBBox.height / 2)) * coefficient;
  var regionX = (pathBBox.x + (pathBBox.width / 2)) * coefficient;
  
  $('.country__popup').attr('style', 'top: ' + regionY + 'px; left: ' + regionX + 'px;');
});
