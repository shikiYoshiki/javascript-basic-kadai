let weight = 68;
let height = 1.7;

let bmi = calcBMI(weight, height);

console.log(bmi);

// BMI計算
function calcBMI(weight, height) {
  let bmi = weight / height ** 2;
  return bmi;
}
