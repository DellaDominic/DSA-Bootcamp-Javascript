// Find the second largest element in an array. Return NaN is there is no second largest number in the array

const findSecondLargest = (arr) => {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  if (arr.length < 2) {
    return NaN;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      //&& arr[i] !== largest ----> to handle edge case that there is a duplicate or more of the largest number
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

let arr = [4, 9, 0, 9, 8, 7, 1, 9, 8];
console.log(findSecondLargest(arr)); // 8
console.log(findSecondLargest([])); // NaN
console.log(findSecondLargest([12])); // NaN
console.log(findSecondLargest([22, 56])); // 22
console.log(findSecondLargest([12, 7])); // 7
console.log(findSecondLargest([-12, -7, -9])); // -9
console.log(findSecondLargest([-12, -7, -9, -0])); // -7
console.log(findSecondLargest([-12, -7, -9, 0])); // -7
