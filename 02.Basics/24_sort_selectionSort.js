// Write algorithm for selection sort - ascending order

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestIndex]) {
        smallestIndex = j;
      }
    }
    //swap the smallest with the ith element
    if (i !== smallestIndex) {
      temp = arr[i];
      arr[i] = arr[smallestIndex];
      arr[smallestIndex] = temp;
    }
  }
  return arr;
}

let arr = [7, 1, 5, 4, 3, 2];
console.log(selectionSort(arr));
