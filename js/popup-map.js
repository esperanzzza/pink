
        /* .ready(init);

        function init () {
            // Создание экземпляра карты и его привязка к контейнеру с
            // заданным id ("map")
            var myMap = new ymaps.Map('map', {
                    // При инициализации карты, обязательно нужно указать
                    // ее центр и коэффициент масштабирования
                    center: [59.9362,30.3214], // Нижний Новгород
                    zoom: 16
                });

				// Создание метки
				var myPlacemark = new ymaps.Placemark(
				// Координаты метки
				[59.9362,30.3211] , {
                    // Свойства
                    // Текст метки
                    hintContent: 'Контакты'
                }, {
                    iconImageHref: '../img/map-indicator.svg', // картинка иконки
                    iconImageSize: [35.983, 35.983], // размеры картинки
                    iconImageOffset: [-6, -10],
                    iconLayout: 'default#image'// смещение картинки
                    });


				// Добавление метки на карту
				myMap.geoObjects.add(myPlacemark);
}
