document.addEventListener("DOMContentLoaded", function () {
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.77068671274726,37.62249213280481],
    zoom: 15,
  });

  myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point",
      coordinates: [55.76953456898229,37.63998549999998],
    },
  });


  var myPlacemark = new ymaps.Placemark(
    [55.76953456898229,37.63998549999998],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "./images/svg/location.svg",
      iconImageSize: [12, 12],
      iconImageOffset: [-24, -24],
    }
  );

  myMap.geoObjects.add(myPlacemark);
}
})
