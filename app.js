// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//   ageOfForeigner + 2;
//   return "hello";
// }
// const krAge = calculateKrAge(age);

// console.log(krAge);

// const calculator = {
//   plus: function (a, b) {
//     return a + b;
//   },
//   minus: function (a, b) {
//     return a - b;
//   },
//   div: function (a, b) {
//     return a / b;
//   },
//   times: function (a, b) {
//     return a * b;
//   },
//   pow: function (a, b) {
//     return a ** b;
//   },
// };
// const plusResult = calculator.plus(2, 3);
// const minusResult = calculator.minus(plusResult, 10);
// const timesResult = calculator.times(10, minusResult);
// const divResult = calculator.div(timesResult, plusResult);
// const powResult = calculator.pow(divResult, minusResult);

// const calculator = {
//   plus: function (a, b) {
//     return a + b;
//   },
// };
// const plusResult = calculator.plus(2, 3);
// console.log(plusResult);

const age = parseInt(prompt("how old are you?"));

if (isNaN(age) || age < 0) {
  console.log("please write a real positive number");
} else if (age < 18) {
  console.log("you are too young");
} else if (age >= 18 && age <= 50) {
  console.log("you can drink");
} else if (age > 50 && age <= 80) {
  console.log("you should exercise");
} else if (age > 80) {
  console.log("you can do whatever you want");
}
