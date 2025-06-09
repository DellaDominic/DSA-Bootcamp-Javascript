// Write a function which returns the count of digits in a number

const countOfDigits = (num) => {
  if (num == 0) {
    return 1;
  }
  let count = 0;
  while (num != 0) {
    num = (num - (num % 10)) / 10; // or just do Math.floor(n/10)
    count++;
  }
  return count;
};

console.log(countOfDigits(-99088)); // 5
console.log(countOfDigits(99088)); // 5
console.log(countOfDigits(9.9088)); // 1 - considering decimals are ignored
console.log(countOfDigits(8)); // 1
console.log(countOfDigits(0)); // 1
// console.log(countOfDigits(045)); // 2
// console.log(countOfDigits(07)); // 1
// console.log(countOfDigits(00)); // 1

console.log(Math.floor(11.9)); // 11
console.log(Math.ceil(11.1)); // 12
console.log(Math.round(11.5)); // 12
console.log(Math.round(10.5)); // 11
console.log(Math.round(10.4)); // 10
console.log(Math.round(190.5)); // 191
console.log(Math.abs(-67)); // 67
