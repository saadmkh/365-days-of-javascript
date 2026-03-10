//finding the largest word in array 
let words = ["apple", "banana", "kiwi", "watermelon", "grape"];

function findLongestWord(list) {
  let longest = list[0];

  for (let i = 1; i < list.length; i++) {
    if (list[i].length > longest.length) {
      longest = list[i];
    }
  }

  return longest;
}

function countWords(list) {
  return list.length;
}

function showWords(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}

showWords(words);

let longestWord = findLongestWord(words);
console.log("Longest word:", longestWord);

let totalWords = countWords(words);
console.log("Total words:", totalWords);
