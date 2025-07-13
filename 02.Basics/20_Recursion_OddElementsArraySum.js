// display the sum of all the odd numbers in the given array

let arr = [5, 2, 1, 3, 4, 6];

function oddSum(i) {
  if (!arr.length) {
    return 0;
  }
  let oddNumToAdd = arr[i] % 2 !== 0 ? arr[i] : 0;

  if (i == arr.length - 1) {
    return oddNumToAdd;
  }
  return oddNumToAdd + oddSum(i + 1);
}

console.log(oddSum(0));
