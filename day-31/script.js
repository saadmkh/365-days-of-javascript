//remove duplicate from array 
let numbers = [5, 3, 8, 5, 2, 3, 9, 8];

function removeDuplicates(list) {
  let result = [];

  for (let i = 0; i < list.length; i++) {
    if (!result.includes(list[i])) {
      result.push(list[i]);
    }
  }

  return result;
}

function showNumbers(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}

let uniqueNumbers = removeDuplicates(numbers);

console.log("Original:", numbers);
console.log("Unique:", uniqueNumbers);

showNumbers(uniqueNumbers);
