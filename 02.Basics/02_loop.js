// Write a function that returns the number of negative numbers in an array.

const getNegNumbersCount = (arr) => {
  let i = 0;
  let count = 0;
  while (i < arr.length) {
    if (arr[i] < 0) {
      count++;
    }
    // to handle -0 considering it also as a negative number
    else if (1 / arr[i] == -Infinity) {
      count++;
    }
    i++;
  }
  return count;
};

let arr = [1, -4, 9, 10, 0, 10, -3, -Infinity, -0];

console.log(getNegNumbersCount(arr)); // 4

arr = [2, -9, 17, 0, 1, -10, -4, 8];

console.log(getNegNumbersCount(arr)); // 3

arr = [2, 8];

console.log(getNegNumbersCount(arr)); // 0
