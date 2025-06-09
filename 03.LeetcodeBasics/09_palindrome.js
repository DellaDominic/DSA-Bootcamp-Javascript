// Given an integer x, return true if x is a palindrome, and false otherwise.

const isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let oldX = x;
  let reverse = 0;
  while (x !== 0) {
    lastDigit = x % 10;
    reverse = reverse * 10 + lastDigit;
    x = Math.floor(x / 10);
  }
  return reverse === oldX;
};

console.log(isPalindrome(121));
console.log(isPalindrome(1021));
console.log(isPalindrome(10));
