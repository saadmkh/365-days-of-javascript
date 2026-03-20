
//mergning two arrays without duplicates
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

function mergeUnique(a, b) {
  let result = [];

  for (let i = 0; i < a.length; i++) {
    if (!result.includes(a[i])) {
      result.push(a[i]);
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (!result.includes(b[i])) {
      result.push(b[i]);
    }
  }

  return result;
}

function showArray(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}

console.log("Array 1:");
showArray(arr1);

console.log("Array 2:");
showArray(arr2);

let merged = mergeUnique(arr1, arr2);

console.log("Merged without duplicates:");
showArray(merged);
