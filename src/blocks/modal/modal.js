Fancybox.bind("[data-fancybox]", {
  dragToClose: false,
  autoFocus: false
});

Fancybox.bind(".ethics__media", {
  dragToClose: false,
  autoFocus: false,
  on: {
    done: (fancybox, slide) => {
//      console.log(`done!`);
      $('.modal__video-content').get(0).play();
    },
    destroy: (event, fancybox, slide) => {
      $('.modal__video-content').get(0).pause();
    }
  }
});

$(window).on('load', function() {
  $('.js-video').each(function() {
    var video = $(this).data('source');
    console.log(video);
    $(this).find('.modal__video').prepend('<video class="modal__video-content" autoplay="autoplay" loop controls> <source src="./img/' + video + '.webm" type="video/webm"> <source src="./img/' + video + '.mp4" type="video/mp4"> </video>');
  })
});

Fancybox.bind(".js-video-link .video__link", {
  dragToClose: false,
  autoFocus: false,
  on: {
    done: (fancybox, slide) => {
      $('.fancybox__container .modal__video-content').get(0).play();
    },
    destroy: (event, fancybox, slide) => {
      $('.fancybox__container .modal__video-content').get(0).pause();
    }
  }
});
