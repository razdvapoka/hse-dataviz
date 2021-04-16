var bodies = [
  {
    name: "body-1",
    width: 10,
    color: "red",
  },
  {
    name: "body-2",
    width: 5,
    color: "magenta",
  },
  {
    name: "body-mini",
    width: 1,
    color: "grey",
  },
  {
    name: "body-4",
    width: 13,
    color: "green",
  },
  {
    name: "body-extra",
    width: 10,
    color: "blue",
  },
];

bodies.forEach(function (buddy) {
  var container = document.querySelector(".container");
  var buddyElement = document.createElement("div");
  buddyElement.innerText = buddy.name;
  buddyElement.style.backgroundColor = buddy.color;
  buddyElement.style.width = buddy.width * 50 + "px";
  buddyElement.classList.add("buddy");
  container.appendChild(buddyElement);
});
