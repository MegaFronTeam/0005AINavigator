if ($(".input--calendar")[0]) {

  $('.input--calendar').datepicker({
    changeMonth: false,
    changeYear: false,
    defaultDate: null,
    dateFormat: "dd.mm.yy",
    firstDay: 1,
    numberOfMonths: 1,
    beforeShow: function (textbox, instance) {
      $('.form__item--calendar').append($('#ui-datepicker-div'));
    }
  });


//  var extensionRange = $('.input--calendar').datepicker('widget').data('datepickerExtensionRange');
//  if (extensionRange.startDateText) $('[name=startDate]').val(extensionRange.startDateText);
//  if (extensionRange.endDateText) $('[name=endDate]').val(extensionRange.endDateText);
}

$('.input--phone').inputmask("+9 (999) 999 - 99 - 99");

//if ($(".calendar")[0]){
//  $(function() {
//    $('.calendar').datepicker({
////      range: 'period', // режим - выбор периода
////      defaultDate: null,
////      numberOfMonths: 1,
////      onSelect: function(dateText, inst, extensionRange) {
////          // extensionRange - объект расширения
////        $('[name=startDate]').val(extensionRange.startDateText);
////        $('[name=endDate]').val(extensionRange.endDateText);
////      }
//    });
//
//    // объект расширения (хранит состояние календаря)
//    var extensionRange = $('.calendar').datepicker('widget').data('datepickerExtensionRange');
//    if(extensionRange.startDateText) $('[name=startDate]').val(extensionRange.startDateText);
//    if(extensionRange.endDateText) $('[name=endDate]').val(extensionRange.endDateText);
//  });
//}



//if ($(".calendar--two")[0]){
//  $(function() {
//    $('.calendar--two').datepicker({
//      range: 'period', // режим - выбор периода
//      numberOfMonths: 2,
//      onSelect: function(dateText, inst, extensionRange) {
//          // extensionRange - объект расширения
//        $('[name=startDate]').val(extensionRange.startDateText);
//        $('[name=endDate]').val(extensionRange.endDateText);
//      }
//    });
//  });
//}