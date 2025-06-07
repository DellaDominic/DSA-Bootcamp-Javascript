// Find smallest element in an array

const findSmallest = (arr) => {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
};

let arr = [5, -4, 9, 0, -34, -3, 8];

console.log(findSmallest(arr)); // -34
console.log(findSmallest([])); // Infinity

const findSmallest2 = (arr) => {
  if (!arr.length) {
    return NaN;
  }
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
};

console.log(findSmallest2(arr)); // -34
console.log(findSmallest2([])); // NaN
