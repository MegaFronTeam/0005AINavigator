/* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Andrew Stromnov (stromnov@gmail.com). */
(function (factory) {
  if (typeof define === "function" && define.amd) {

    // AMD. Register as an anonymous module.
    define(["../widgets/datepicker"], factory);
  } else {

    // Browser globals
    factory(jQuery.datepicker);
  }
}(function (datepicker) {

  datepicker.regional.ru = {
    closeText: "Закрыть",
    prevText: "&#x3C;Пред",
    nextText: "След&#x3E;",
    currentText: "Сегодня",
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
      "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн",
      "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
    dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
    dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    weekHeader: "Нед",
    dateFormat: "dd.mm.yy",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ""
  };
  datepicker.setDefaults(datepicker.regional.ru);

  return datepicker.regional.ru;

}));


var dates = [['01/10/2022', '3'], ['01/26/2022', '1']];

function compareDates(a, b) {
  if (typeof a === "string") {
    a = new Date(a);
  }
  if (typeof b === "string") {
    b = new Date(b);
  }
  return a.toString() === b.toString();
}

function highlightDays(date) {
  var result = [true, '', ''];
  $.each(dates, function(i, d) {
    if (compareDates(d[0], date)) {
      result = [true, 'calendar__event calendar__event--' + d[1]];
    }
  });
  return result;
}

$('.calendar__content').datepicker({
  showOn: "both",
  defaultDate: new Date(2022, 0, 1),
  changeMonth: false,
  changeYear: false,
  dateFormat: "dd.mm.yy",
  firstDay: 1,
  numberOfMonths: 1,
  beforeShowDay: highlightDays,
}).datepicker('show');

$('.calendar__event').mouseenter(function() {
  var date = $(this);
  $('.date').clone().appendTo(date).addClass('date--active').mouseleave(function() {
    $(this).remove();
  });

  $('.date__content').each(function() {
    const eventsPS = new PerfectScrollbar(this, {
      suppressScrollY: true,
      useBothWheelAxes: true,
    });  
  })
});

$('.date').mouseleave(function() {
  $(this).remove();
});
