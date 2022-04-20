if ($('#map').length) {
  function initMap() {
    var myMap = new ymaps.Map('map', {
        center: [55.751244, 37.618423],
        controls: ['zoomControl'],
        zoom: 4
      }, {
        searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),
      myPlacemark1 = new ymaps.Placemark([55.751244, 37.618423], {
        hintContent: '',
        balloonContent: '<div class="map__baloon">' +
          '<a href="#" class="map__baloon-title">Название проекта ИИ</a>' +
          '<p class="map__baloon-place">г. Оренбург</p>' +
          '<p class="map__baloon-comment">Яндекс.Cloud</p>' +
          '</div>'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-placemark.svg',
        iconImageSize: [13, 13],
        iconImageOffset: [-6.5, -6.5],
        balloonCloseButton: false,
        hideIconOnBalloonOpen: false,
        balloonOffset: [0, -15],
        balloonPanelMaxMapArea: 0
      });
      myPlacemark2 = new ymaps.Placemark([46.751244, 41.618423], {
        hintContent: '',
        balloonContent: '<div class="map__baloon">' +
          '<a href="#" class="map__baloon-title">Название проекта ИИ</a>' +
          '<p class="map__baloon-place">г. Оренбург</p>' +
          '<p class="map__baloon-comment">Яндекс.Cloud</p>' +
          '</div>'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-placemark.svg',
        iconImageSize: [13, 13],
        iconImageOffset: [-6.5, -6.5],
        balloonCloseButton: false,
        hideIconOnBalloonOpen: false,
        balloonOffset: [0, -15],
        balloonPanelMaxMapArea: 0
      });
      myPlacemark3 = new ymaps.Placemark([60.751244, 62.618423], {
        hintContent: '',
        balloonContent: '<div class="map__baloon">' +
          '<a href="#" class="map__baloon-title">Название проекта ИИ</a>' +
          '<p class="map__baloon-place">г. Оренбург</p>' +
          '<p class="map__baloon-comment">Яндекс.Cloud</p>' +
          '</div>'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-placemark.svg',
        iconImageSize: [13, 13],
        iconImageOffset: [-6.5, -6.5],
        balloonCloseButton: false,
        hideIconOnBalloonOpen: false,
        balloonOffset: [0, -15],
        balloonPanelMaxMapArea: 0
      });

    myMap.geoObjects
      .add(myPlacemark1);

    myMap.geoObjects
      .add(myPlacemark2);

    myMap.geoObjects
      .add(myPlacemark3);
    
//    myPlacemark1.balloon.events.add('click', function () {
//      mapScroll();
//    });


//    myMap.geoObjects
//      .add(myPlacemark2);
//    
//    myPlacemark2.balloon.events.add('click', function () {
//      mapScroll();
//    });
//
//
//    myMap.geoObjects
//      .add(myPlacemark3);
//    
//    myPlacemark3.balloon.events.add('click', function () {
//      mapScroll();
//    });
//
//
//    myMap.geoObjects
//      .add(myPlacemark4);
//    
//    myPlacemark4.balloon.events.add('click', function () {
//      mapScroll();
//    });
//
//
//    myMap.geoObjects
//      .add(myPlacemark5);
//    
//    myPlacemark5.balloon.events.add('click', function () {
//      mapScroll();
//    });
//
//
//    myMap.geoObjects
//      .add(myPlacemark6);
//    
//    myPlacemark6.balloon.events.add('click', function () {
//      mapScroll();
//    });
  }

}


$('.js-map-btn').click(function(e) {
  e.preventDefault();
  $('.js-map-btn').removeClass('js-map-btn--active');
  $(this).addClass('js-map-btn--active');
  $('.js-map-content').removeClass('js-map-content--active');
  if ($(this).hasClass('js-map-btn--research')) {
    $('.js-map-content--research').addClass('js-map-content--active');
  }
  if ($(this).hasClass('js-map-btn--education')) {
    $('.js-map-content--education').addClass('js-map-content--active');
  }
  if ($(this).hasClass('js-map-btn--events')) {
    $('.js-map-content--events').addClass('js-map-content--active');
  }
});

$('.map__projects-header-item--link').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('map__projects-header-item--up');
})
