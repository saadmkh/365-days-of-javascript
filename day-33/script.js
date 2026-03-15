// if  array is  palindrome
let numbers = [1, 2, 3, 2, 1];

function isPalindrome(list) {
  let left = 0;
  let right = list.length - 1;

  while (left < right) {
    if (list[left] !== list[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

function showArray(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}

console.log("Array:");
showArray(numbers);

let result = isPalindrome(numbers);
console.log("Is palindrome:", result);
