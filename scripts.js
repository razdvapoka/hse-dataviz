var dataSourceUrl = "https://api.le-systeme-solaire.net/rest/bodies";
var fileDataSourceUrl = "bodies.json";

// Promises

// fetch(apiURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// async/await

async function getData(url) {
  var response = await fetch(url);
  var data = await response.json();
  return data;
}

getData(dataSourceUrl).then(function (data) {
  var bodies = data.bodies;

  // достать все объекты со спутниками
  var bodiesWithMoons = bodies.filter(function (body) {
    return body.moons;
  });

  // отсортировать их по кол-ву спутников
  var bodiesSortedByMoonCount = bodiesWithMoons.sort(function (a, b) {
    return a.moons.length > b.moons.length ? 1 : -1;
  });

  // нарисовать график

  var bodyNames = bodiesWithMoons.map(function (body) {
    return body.englishName;
  });

  var moonCounts = bodiesWithMoons.map(function (body) {
    return body.moons.length;
  });

  var ctx = document.getElementById("chart-1").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: bodyNames,
      datasets: [
        {
          label: "# of Moons",
          data: moonCounts,
          borderWidth: 3,
          borderColor: "#ff00ff",
          borderDash: [10],
          pointRadius: 10,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
