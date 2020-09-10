//Lottery Random # Generator
//Mega Millions:
let num1 = Math.round(randomNumber(1, 70));
let num2 = Math.round(randomNumber(1, 70));
let num3 = Math.round(randomNumber(1, 70));
let num4 = Math.round(randomNumber(1, 70));
let num5 = Math.round(randomNumber(1, 70));
let pBall = Math.round(randomNumber(1, 25));

var numArr = [num1, num2, num3, num4, num5, pBall];

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

console.log(numArr.toString().replace(/,/g, '-'));

// console.log(randomNumber(1,70))