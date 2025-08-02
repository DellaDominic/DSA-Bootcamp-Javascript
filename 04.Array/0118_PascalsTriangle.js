// Q118. EASY
// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
//      1
//     1 1
//    1 2 1
//   1 3 3 1
//  1 4 6 4 1

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const pascalsTriangle = [];

  if (numRows == 0) {
    return [];
  }
  pascalsTriangle.push([1]);
  if (numRows == 1) {
    return pascalsTriangle;
  }
  pascalsTriangle.push([1, 1]);
  if (numRows == 2) {
    return pascalsTriangle;
  }

  for (let i = 2; i < numRows; i++) {
    let row = [];
    for (let j = 1; j < i; j++) {
      row.push(pascalsTriangle[i - 1][j - 1] + pascalsTriangle[i - 1][j]);
    }
    pascalsTriangle.push([1, ...row, 1]);
  }
  return pascalsTriangle;
};
