// write insertion sort program for sorting in ascending order

function insertionSort(arr) {
  //   let curr = 1;

  //   while (curr < arr.length) {
  //     let elem = arr[curr];
  //     let p = curr - 1;
  //     while (p >= 0) {
  //       if (arr[p] > elem) {
  //         arr[p + 1] = arr[p];
  //       } else if (p + 1 !== curr) {
  //         arr[p + 1] = elem;
  //         break;
  //       }
  //       if (p == 0) {
  //         arr[p] = elem;
  //       }
  //       p--;
  //     }
  //     curr++;
  //   }

  // or

  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let p = i - 1;
    while (p >= 0 && arr[p] > curr) {
      arr[p + 1] = arr[p];
      p--;
    }
    arr[p + 1] = curr;
  }
}

let arr1 = [7, 4, 3, 5, 1, 2];

insertionSort(arr1);
console.log(arr1);
