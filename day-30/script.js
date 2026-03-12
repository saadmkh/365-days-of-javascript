
//filtering even and odd number from array
let numbers = [4, 7, 12, 19, 20, 33, 42];

function getEvenNumbers(list) {
  let evens = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) {
      evens.push(list[i]);
    }
  }
  return evens;
}

function getOddNumbers(list) {
  let odds = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 !== 0) {
      odds.push(list[i]);
    }
  }
  return odds;
}

console.log("All numbers:", numbers);

let evens = getEvenNumbers(numbers);
console.log("Even numbers:", evens);

let odds = getOddNumbers(numbers);
console.log("Odd numbers:", odds);
