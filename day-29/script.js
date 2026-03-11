//minimum maximum and average 
let numbers = [12, 7, 25, 3, 18, 10];

function findMin(list) {
  let min = list[0];

  for (let i = 1; i < list.length; i++) {
    if (list[i] < min) {
      min = list[i];
    }
  }

  return min;
}

function findMax(list) {
  let max = list[0];

  for (let i = 1; i < list.length; i++) {
    if (list[i] > max) {
      max = list[i];
    }
  }

  return max;
}

function calculateAverage(list) {
  let sum = 0;

  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }

  return sum / list.length;
}

console.log("Numbers:", numbers);

let min = findMin(numbers);
console.log("Min:", min);

let max = findMax(numbers);
console.log("Max:", max);

let avg = calculateAverage(numbers);
console.log("Average:", avg);
