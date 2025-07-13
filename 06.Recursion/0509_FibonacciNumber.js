// EASY Q.509. Fibonacci Number
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // 1. recursive approach

  //   if (n == 0) return 0;
  //   else if (n == 1) return 1;
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);

  // 2. iterative approach
  // let first = 0;
  // let second = 1;
  // let result;
  // if(n == 0) return first;
  // else if(n == 1) return second;

  // for(let i=2; i<=n; i++){
  //     result = first + second;
  //     first = second;
  //     second = result;
  // }
  // return second;
};
