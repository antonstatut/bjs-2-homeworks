"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let x;
  let x2;
  let d = b ** 2 - 4 * a * c;
 
  if (d === 0){
  x = -b / (2 * a);
  arr.push(x);
  } else if (d > 0){
    x = (-b + Math.sqrt(d)) / (2 * a)
    x2 = (-b - Math.sqrt(d)) / (2 * a)
    arr.push(x, x2);
  }
  return arr;
}
console.log(solveEquation());

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = (percent / 100) / 12;
  let loanBody = amount - contribution;
  let Payment = loanBody * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
  let totalAmount = Payment * countMonths;
  totalAmount = totalAmount.toFixed(2);
  let totalAmountAnswer = +totalAmount;
  return totalAmountAnswer;
}
console.log(calculateTotalMortgage());