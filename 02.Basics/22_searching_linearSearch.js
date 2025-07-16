// Write linear search program. return if target element is not present

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1; // if the element is not present
}

let arr = [1, 6, 3, 0, 2, 6];
console.log(linearSearch(arr, 3)); // 2
console.log(linearSearch(arr, 44)); // -1
