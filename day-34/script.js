//move all zeros in an array to the end
let numbers = [0, 5, 0, 3, 8, 0, 2];

function moveZerosToEnd(list) {
  let result = [];
  let zeroCount = 0;

  for (let i = 0; i < list.length; i++) {
    if (list[i] === 0) {
      zeroCount++;
    } else {
      result.push(list[i]);
    }
  }

  for (let i = 0; i < zeroCount; i++) {
    result.push(0);
  }

  return result;
}

function showArray(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}

console.log("Original:");
showArray(numbers);

let updated = moveZerosToEnd(numbers);

console.log("After moving zeros:");
showArray(updated);
