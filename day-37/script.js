// reverse an array without using built-in methods
let numbers = [1, 2, 3, 4, 5];

function reverseArray(list) {
  let reversed = [];

  for (let i = list.length - 1; i >= 0; i--) {
    reversed.push(list[i]);
  }

  return reversed;
}

function showArray(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}

console.log("Original:");
showArray(numbers);

let result = reverseArray(numbers);

console.log("Reversed:");
showArray(result);
