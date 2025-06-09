//Write a function that searches for an element in
//an array and returns the index, if the element is not present then just return -1

const search = (arr, num) => {
  // let index = -1; without using index - an extra variable
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      // here use === instead of ==
      return i;
    }
  }
  return -1;
};

let arr = [12, 45, 2, 7, 5];

//test cases run
console.log(search(arr, 7)); // 3
console.log(search(arr, -4)); // -1
console.log(search(arr, 3)); // -1
console.log(search(arr, 12)); // 0
console.log(search(arr, 5)); // 4
console.log(search(arr, "5")); // -1
