//rotate an array to the right by one position
let numbers = [1, 2, 3, 4, 5];

function rotateRight(list) {
  let last = list[list.length - 1];

  for (let i = list.length - 1; i > 0; i--) {
    list[i] = list[i - 1];
  }

  list[0] = last;

  return list;
}

function showArray(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}

console.log("Original array:");
showArray(numbers);

let rotated = rotateRight(numbers);

console.log("After rotation:");
showArray(rotated);
