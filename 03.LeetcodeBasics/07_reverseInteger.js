// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

const reverse = function (x) {
  let i = 1;
  let reverse = 0;

  if (x < 0) {
    x = Math.abs(x);
    i = -1;
  }
  while (x !== 0) {
    reverse = reverse * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  reverse *= i;
  let limit = 2 ** 31;
  return reverse < -limit || reverse >= limit ? 0 : reverse;
};

console.log(reverse(-123));
console.log(reverse(543));
