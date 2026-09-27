let weight = 68;
let hight = 1.7;

let bmi = calcBMI(weight, hight);

console.log(bmi);

// BMI計算
function calcBMI(weight, hight) {
  let bmi = weight / hight ** 2;
  return bmi;
}
