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

if (isNaN(age)) {
  console.log("please write a number");
} else {
  console.log("thank you");
}
