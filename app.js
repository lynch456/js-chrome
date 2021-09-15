// Objects
// const playerName = "kim";
// const playerPoints = 121212;
// const playerHandsome = false;
// const playerFat = "little bit";
// 변수를 하나하나 많이 만들지 않고
const player = {
  name: "kim",
  points: 10,
  fat: true,
};
console.log(player);
console.log(player.name);
// console는 object, console 안에 log가 있다.
console.log(player["name"]);
// 업데이트 가능
// const수정이 아닌 const안의 object 수정
console.log(player);
player.fat = false;
console.log(player);
// 추가, 변형 가능
console.log(player);
player.lastName = "potato";
console.log(player);

player.points = player.points + 15;
console.log(player);
