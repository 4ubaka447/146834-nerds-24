// карта начало

ymaps.ready(init);

function init() {

    var myMap;

    myMap = new ymaps.Map("map", {
        center: [59.9392, 30.321],
        zoom: 17,
        controls: []
    });

    myMap.behaviors.disable('scrollZoom');

    myMap.controls.add("zoomControl", {
        position: {
            top: 15,
            left: 15
        }
    });


    // добаление и настройка маркера

    var myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-marker.png',
        iconImageSize: [230, 188],
        iconImageOffset: [-49, -188]
    });

    myMap.geoObjects.add(myPlacemark);

}

// карта конец