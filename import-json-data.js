// fetch("datapackage.json") // скачиваем файл
//   .then(function (response) {
//     return response.json(); // превращаем сырой JSON-файл в Object
//   })
//   .then(function (jsonData) {
//     console.log(jsonData);
//     var dataElement = document.querySelector(".data"); // находим элемент с классом data
//     // dataElement.innerText = JSON.stringify(jsonData, null, 4); // записываем в него наш объект с данными в текстовом виде
//     dataElement.innerText = jsonData.title; // достаём из объека данные по ключу title и записываем в элемент
//   });

// взять данные из JSON-файла
// преобразовать данные в нужный формат (метод .map)
// отрисовать их на карте
// сделать их интерактивными

// Шаблонный код для получения json-данных из файла или API

// fetch("путь к файлу или api") // скачиваем файл или обращаемся к API
//   .then(function (response) {
//     return response.json(); // превращаем сырой JSON-файл в Object
//   })
//   .then(function (data) {
//     // ваши данные попали в data
//     // ваш код, делающий что-то с данными, хранящимися теперь в переменной data
//   });

// pk.eyJ1IjoicmF6ZHZhcG9rYSIsImEiOiJjajRiMjVtZDYwNmlpMzNtbHYxbHRnODlxIn0.4TwFuureDX7u8OnF7eBtLg

fetch("data/stork.json") // скачиваем файл
  .then(function (response) {
    return response.json(); // превращаем сырой JSON-файл в Object
  })
  .then(function (jsonData) {
    // создаём карту
    var mymap = L.map("mapid").setView([59.958067, 30.296409], 13);

    // загружаем карту (картинку)
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmF6ZHZhcG9rYSIsImEiOiJjajRiMjVtZDYwNmlpMzNtbHYxbHRnODlxIn0.4TwFuureDX7u8OnF7eBtLg",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
      }
    ).addTo(mymap);
    // создаём маркеры и добавляем на карту
    var cafe1 = L.marker([59.958135, 30.297632]).addTo(mymap);
    var cafe2 = L.marker([59.958987, 30.303655]).addTo(mymap);

    // создаём маркер с поп-апом и добавляем на карту
    var palmBeach = L.marker([26.700707, -80.037261]).addTo(mymap);
    palmBeach.bindPopup("It is PALM BEACH!");

    // форматируем данные для polyline
    var storksLocations = jsonData.map(function (stork) {
      // каждый элемент массива превращается в [lat, lng]
      return [stork["location-lat"], stork["location-long"]];
    });

    // рисуем polyline по точкам из storksLocations и добавляем на карту
    var polyline = L.polyline(storksLocations, { color: "red" }).addTo(mymap);
    // фокусируем карту на нашем polyline
    mymap.fitBounds(polyline.getBounds());

    // добавляем поп-ап на наш polyline
    polyline.bindPopup("Eudocimus Abel");

    // для каждого элемента массива jsonData
    jsonData.forEach(function (stork) {
      // создаём кружок с координатами, взятыми из элемента массива (переменная stork)
      var circle = L.circle([stork["location-lat"], stork["location-long"]], {
        radius: 100,
      });
      // привязываем к кружку поп-ап с данными, взятыми из элемента массива (переменная stork)
      circle.bindPopup(stork.timestamp);
      // добавляем кружок на карту
      circle.addTo(mymap);
    });
  });
