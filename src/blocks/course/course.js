$(window).on('load', function() {
  $('.course').each(function() {
    var video = $(this).data('bg');
    $(this).prepend('<div class="course__bg"> <video class="course__bg-content" autoplay="autoplay" loop muted=""> <source src="./img/' + video + '.webm" type="video/webm"> <source src="./img/' + video + '.mp4" type="video/mp4"> </video> </div>');
  })
});
