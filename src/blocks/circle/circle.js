if ($('.circle').length) {
  
  var circleSize = 78;
  var circleThickness = 8;
  
  if ($(window).width() < 1200) {
    circleSize = 60;
    circleThickness = 4;
  }

  $('.circle').each(function() {
    var number = $(this).data('number') / 100;

    $(this).circleProgress({
      value: number,
      size: circleSize,
      thickness: circleThickness,
      startAngle: 4.7,
      fill: '#5D60F4',
      emptyFill: '#F5F5F7'
    });
  });
}
