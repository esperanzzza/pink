var myMap;
var myPlacemark;

  function showMap() {
    document.getElementsByClassName('contacts').style.backgroundColor = 'none';
  }

ymaps.ready(init);

function init () { {
    myMap = new ymaps.Map ("map", {
        center: [59.93610608, 30.32111450],
        zoom: 16
    });

    var myPlacemark = new ymaps.Placemark([59.93610608, 30.32111450], {},

        {
            draggable: true,
            iconImageHref: 'img/map-indicator.svg'
        }
      );
        myPlacemark.events.add('dragend', function(e) {
   var thisPlacemark = e.get('target');
   var coords = thisPlacemark.geometry.getCoordinates();
    });

        myMap.geoObjects.add(myPlacemark);
}
   };
