let numbers = [2, 7, 11, 15, 3, 6];
let target = 9;

function findPair(list, targetSum) {
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] + list[j] === targetSum) {
        return [list[i], list[j]];
      }
    }
  }
  return null;
}

function showArray(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}

console.log("Array:");
showArray(numbers);

let pair = findPair(numbers, target);
console.log("Pair with sum " + target + ":", pair);
