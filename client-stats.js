// заведём массив для хранения количества голосов
var votes = [0, 0, 0, 0];

// попробуем достать данные из local storage и записать их в переменную previousVoutes
var previousVotes = localStorage.getItem("votes");

// если в previousVotes что-то есть
if (previousVotes) {
  console.log("previousVotes is not null!");
  // превратим previousVotes в массив и запишем его в перуменную votes
  votes = JSON.parse(previousVotes);
}

// найдём все дивы цветов
var colorDivs = document.querySelectorAll(".color");

// на каждый див цвета повесим обработчик клика, который будет добавлять голос за кликнутый цвет и обновлять цифру внутри кружка
colorDivs.forEach(function (colorDiv, colorDivIndex) {
  colorDiv.addEventListener("click", function () {
    // добавляем голос за соответствующий цвет (по индексу)
    votes[colorDivIndex] += 1;
    // обновляем числа в кружочках
    updateCircleTexts();
    // обновляем результаты
    updateResults();
    // сохранить данные в local storage
    localStorage.setItem("votes", JSON.stringify(votes));
  });
});

// функция, которая обновляет тексты (кол-во голосов) внутри кружочков
function updateCircleTexts() {
  // для каждого дива с цветом
  colorDivs.forEach(function (colorDiv, colorDivIndex) {
    colorDiv.innerText = votes[colorDivIndex];
  });
}

// найдём все дивы для результатов
var resultDivs = document.querySelectorAll(".result");

function updateResults() {
  // для каждого дива с цветом
  resultDivs.forEach(function (resultDiv, resultDivIndex) {
    resultDiv.style.transform = "scale(" + (1 + votes[resultDivIndex]) + ")";
  });
}

// пишем в кружочки исходные нули
updateCircleTexts();

// обновляем результаты
updateResults();

// зачистить предыдущие результаты и всё обновить
document.querySelector(".clear").addEventListener("click", function () {
  localStorage.clear();
  votes = [0, 0, 0, 0];
  updateCircleTexts();
  updateResults();
});

// =============================
// Картинки

var imgArray = [];

for (var i = 0; i < 20; i++) {
  var imgNumber = i + 1 >= 10 ? i + 1 : "0" + (i + 1);
  var imgPath = "data/tiles/tiles-" + imgNumber + ".jpg";
  imgArray.push(imgPath);
}

var imagesEl = document.querySelector(".images");
imgArray.forEach(function (imgPath) {
  var imgEl = document.createElement("img");
  imgEl.style.width = "100px";
  imgEl.src = imgPath;
  imagesEl.appendChild(imgEl);
});

var images = document.querySelectorAll("img");
images.forEach(function (imgEl, imgElIndex) {
  // сделать что-то с каждой из картинок
});
