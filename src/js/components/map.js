document.addEventListener("DOMContentLoaded", function () {
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.893112068852496,37.48429849999997],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),

       

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'г. Химки, ул. Пожарского, 22А'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/location.webp',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        })

       
    myMap.geoObjects
        .add(myPlacemark)
       
});
  })
  



