// Given an array console the sum of all elements in the array.

let arr = [1, 5, 3, 7, 2];

function arraySum(i) {
  if (!arr.length) {
    return 0;
  }
  if (i == arr.length - 1) {
    return arr[i]; // last element
  }

  return arr[i] + arraySum(i + 1);
}

console.log(arraySum(0)); // 18
