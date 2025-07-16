// Write bubble sort algorithm - ascending order

let arr = [9, 4, 5, 6, 7, 8];
const n = arr.length;
let temp;
let count = 0;
let isSwapped;

function bubbleSort(arr) {
  for (let i = 0; i < n - 1; i++) {
    count++;
    isSwapped = false; // important -  to reduce iteration to break loop incase the arr gets sorted in between

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        isSwapped = true;
        //swap
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (!isSwapped) {
      console.log("no of iterations", count);
      return arr;
    }
  }
  return arr;
}

console.log(bubbleSort(arr));
