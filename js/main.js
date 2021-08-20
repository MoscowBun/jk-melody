$(document).ready(function () {
  var currentFloor = 2; // переменная с текущим этажом
  var  floorPath = $('.home-image path'); // подсветка каждого этажа
  var counterUp = $('.counter-up'); // кнопка увеличения этажа
  var counterDown = $('.counter-down'); // кнопка уменьшения этажа
  var modal = $('.modal'); // переменная с  модальным окном
  var modalCloseButton = $('.modal-close-button');  // кнопка закрывания модального окна
  var viewFlatsButton = $('.view-flats'); // кнопка смотреть квартиры на этаже
  var  flatsPath = $('.flats path'); // подсветка каждой квартиры
  var currentFlats = 1; // переменная с текущей квартирой
  var flatsPathItem = $(".flat-item a"); // характеристики квартир

  // Подсветка этажей при наведении мышью
  floorPath.on('mouseover', function() {
    floorPath.removeClass('current-floor'); // удаляем активный класс подсветки этажей
    currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
    $('.counter').text(currentFloor); // записываем полученный этаж в счетчик
  }); 

  /* ЗДЕСЬ НИЧЕГО НЕ РАБОТАЕТ
  // когда наводим на квартиру подсвечивается текст
  flatsPath.on('mouseover', function () {
        currentFlats = $(this).attr("data-flats"); // записываем текущее значение в переменную с квартирами
        flatsPath.removeClass("current-flats"); // удаляем класс квартир
        flatsPathItem.removeClass("current-flats-item"); // удаляем класс характеристик квартиры
        $(`[data-flats=${currentFlats}]`).toggleClass("current-flats"); // добавляем класс квартиры
        $(`[data-item=${currentFlats}]`).toggleClass("current-flats-item"); // добавляем класс характеристик квартиры
    });

    // когда наводим на текст, подсвечивается квартира
    flatsPathItem.on('mouseover', function () {
        currentFlats = $(this).attr("data-item"); // записываем текущее значение в переменную с квартирами
        flatsPath.removeClass("current-flats"); // удаляем класс квартир
        flatsPathItem.removeClass("current-flats-item"); // удаляем класс характеристик квартиры
        $(`[data-flats=${currentFlats}]`).toggleClass("current-flats"); // добавляем класс квартиры
        $(`[data-item=${currentFlats}]`).toggleClass("current-flats-item"); // добавляем класс характеристик квартиры
    });
    И ВОТ ДО СЮДА*/
    
  floorPath.on('click', toggleModal); // клик на этаж открывает окно
  modalCloseButton.on('click', toggleModal); // клик на кнопку закрыть закрывает окно
  viewFlatsButton.on('click', toggleModal); // клик на кнопку показывает квартиры на этаже

  // Увеличения этажей при нажатии кнопки
  counterUp.on('click', function () {
    if(currentFloor < 18) {
      currentFloor++;
      usCurretnFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }); // форматируем переменную с этажом, добавляя 0 перед цифрой
      $('.counter').text(usCurretnFloor);
      floorPath.removeClass('current-floor'); // удаляем активный класс подсветки этажей
      $(`[data-floor=${usCurretnFloor}]`).toggleClass('current-floor'); // подсвечиваем текущий этаж
    }
}); 

  // Уменьшение этажей при нажатии кнопки
  counterDown.on('click', function () {
      if(currentFloor > 2 ) {
        currentFloor--;
        usCurretnFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
        $('.counter').text(usCurretnFloor);
        floorPath.removeClass('current-floor');
        $(`[data-floor=${usCurretnFloor}]`).toggleClass('current-floor');
      }
  }); 

  // Функция открыть/закрыть модальное окно
  function toggleModal() {
    modal.toggleClass('is-open');
  }
});

