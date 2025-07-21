function getArrayParams(...arr) {
if (arr.length === 0){
  return 0;
}
let min = arr[0];
let max = arr[0];
let sum = 0;
for ( let i = 0; i < arr.length ; i++){
  sum += arr[i];
if ( arr[i] > max){
  max = arr[i];
} else if (arr[i] < min){
  min = arr[i];
}
}
let avg = sum / arr.length;
avg = avg.toFixed(2);
avg = +avg;
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
if (arr.length === 0){
  return 0;
}
let sum = 0;
for ( let i = 0; i < arr.length ; i++){
  sum += arr[i];
}
return sum ;
}

function differenceMaxMinWorker(...arr) {
if (arr.length === 0){
  return 0;
}
max = arr[0];
min = arr[0];
let diff;
for ( let i = 0; i < arr.length ; i++){
if ( arr[i] > max){
  max = arr[i];
} else if (arr[i] < min){
  min = arr[i];
}
diff = max - min;
}
return diff;
}

function differenceEvenOddWorker(...arr) {
if (arr.length === 0){
  return 0;
}
let sumEvenElement = 0;
let sumOddElement = 0;
for ( let i = 0; i < arr.length ; i++){
  if ( arr[i] % 2 === 0){
    sumEvenElement = sumEvenElement + arr[i];
  }else{
    sumOddElement = sumOddElement + arr[i];
  }
}
return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
if (arr.length === 0){
  return 0;
}
let sumEvenElement = 0;
let countEvenElement = 0;
for ( let i = 0; i < arr.length ; i++){
  if ( arr[i] % 2 === 0){
    sumEvenElement = sumEvenElement + arr[i];
    countEvenElement = countEvenElement + 1;
}
}
return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity;
for ( let i = 0; i < arrOfArr.length ; i++){
  const funcResult = func(...arrOfArr[i])
  if(funcResult > maxWorkerResult){
    maxWorkerResult = funcResult;
  }
}
return maxWorkerResult;
}
