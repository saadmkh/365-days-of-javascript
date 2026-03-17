//find the first repeating number in an array

let numbers = [4, 7, 2, 5, 7, 3, 4];

function findFirstRepeating(list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] === list[j]) {
        return list[i];
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

let repeating = findFirstRepeating(numbers);
console.log("First repeating:", repeating);
