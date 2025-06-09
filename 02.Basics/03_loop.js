// Write a function that returns the largest number in an array

const findLargest = (arr) => {
  if (!arr.length) {
    return NaN; // or whatever value agreed upon say -1
  }
  // commenting the above if will return undefined if arr is []
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};

let arr = [5, 0, 10, 8, 17, 1, -56];
console.log(findLargest(arr)); // 17
console.log(findLargest([])); // NaN

//another way

// put -Infinity as the largest as it is the least largest value in js and compare elements in the array from first element
// to last element and return the largest. so if no element present then -Infinity will be returned , no need to explicitly
// check for arr length being 0 here.

const findLargest2 = (arr) => {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};

console.log(findLargest2(arr)); // 17
console.log(findLargest2([])); // -Infinity
