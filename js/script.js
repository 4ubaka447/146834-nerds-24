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

var link = document.querySelector(".writeus-link");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close");
var username = popup.querySelector("[name=username]");
var useremail = popup.querySelector("[name=useremail]");
var usermessage = popup.querySelector("[name=usermessage]");
var form = popup.querySelector("form");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("useremail");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-feedback--show");

    if (storage) {
        useremail.value = storage;
        username.focus();
    } else {
        username.focus();
    }
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-feedback--show");
    popup.classList.remove("modal-feedback--error");
});

form.addEventListener("submit", function(evt) {
    if (!username.value || !useremail.value || !usermessage.value) {
        evt.preventDefault();
        popup.classList.remove("modal-feedback--error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-feedback--error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("useremail", useremail.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-feedback--show")) {
            popup.classList.remove("modal-feedback--show");
            popup.classList.remove("modal-feedback--error");
        }
    }
});