// Data Types in JavaScript

// String (текст)
var text = "abcdefg";
// console.log(typeof text);

// Number
var oneHunder = 100;
// console.log(typeof oneHunder);

// Array (список любых элементов)
var list = [88888888, 1, 2, "abc", [4, 6], "fkfkfkf", 22222, Infinity, Math.PI];
// console.log(list);
// console.log(list[0]); // first element
// console.log(list[list.length - 1]); // last element

// Object (JSON)
var person = {
  name: "Ivan Ivanich",
  age: 69,
  height: 182,
  weight: 100,
  nicknames: ["Vano", "Ivanich", "E-one"],
  maritalStatus: {
    verified: false,
    married: true,
  },
};
// console.log(person);
// console.log(person.nicknames);
// console.log(person.nicknames[0]);
// console.log(person.maritalStatus);
// console.log(person.maritalStatus.married);

// Boolean (true/false)
var isLoaded = false;
// console.log(isLoaded);

// Functions

// declaration:
function sum(a, b) {
  // console.log(a, b);
  return a + b;
}

// execution:
var s = sum(3, 99);
// console.log(s);
// console.log(sum(123, "bbb"));
// console.log(sum(s, s));

////////////////////////////////////

// Working with array data

var dogFacts = [
  {
    status: {
      verified: true,
      sentCount: 1,
    },
    type: "dog",
    deleted: false,
    text: "The Basenji is the only barkless dog in the world.",
  },
  {
    status: {
      verified: false,
      sentCount: 1,
    },
    type: "dog",
    deleted: false,
    text:
      "Puppies and kittens can be adopted as early as 8 weeks of age.  Until then, they should stay with their moms and littermates.",
  },
  {
    status: {
      verified: true,
      sentCount: 1,
    },
    type: "dog",
    deleted: false,
    text: "The Basenji is the only barkless dog in the world.",
  },
  {
    status: {
      verified: false,
      sentCount: 1,
    },
    type: "dog",
    deleted: false,
    text:
      "Puppies and kittens can be adopted as early as 8 weeks of age.  Until then, they should stay with their moms and littermates.",
  },
];

function getUppercasedFact(factObject) {
  return factObject.text.toUpperCase();
}

// Call a function for each item of an array

// dogFacts.forEach(function (dogFact) {
//   console.log(getUppercasedFact(dogFact));
// });

// Filter an array

// var verifiedDogFacts = dogFacts.filter(function (dogFact) {
//   return dogFact.status.verified;
// });

// console.log(verifiedDogFacts);

// verifiedDogFacts.forEach(function (dogFact) {
//   console.log(getUppercasedFact(dogFact));
// });

// Transform an array into another array using a function

// var factStatuses = dogFacts.map(function (dogFact) {
//   return dogFact.status;
// });

// console.log(dogFacts, factStatuses);

// Filter then transform

// var verifiedFactStatuses = dogFacts
//   .filter(function (fact) {
//     return fact.status.verified;
//   })
//   .map(function (verifiedFact) {
//     return verifiedFact.status;
//   });

// console.log(verifiedFactStatuses);
