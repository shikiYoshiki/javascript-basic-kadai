const min = 1;
const max = 100;

let num = randomNum(min, max);
let result = "";

if (num % 3 === 0 && num % 5 === 0) {
  result = "3と5の倍数です";
} else if (num % 3 === 0) {
  result = "3の倍数です";
} else if (num % 5 === 0) {
  result = "5の倍数です";
} else {
  result = num.toString();
}

document.getElementById("num").textContent = num;
document.getElementById("result").textContent = result;

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
