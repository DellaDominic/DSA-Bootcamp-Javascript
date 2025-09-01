// Q 1431. Maximum Candies You Can Get from One Child
// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let result = [];
  for (let i = 0; i < candies.length; i++) {
    let currChildCandies = candies[i];
    candies[i] += extraCandies;
    let max = candies[0];
    for (let i = 1; i < candies.length; i++) {
      if (candies[i] > max) {
        max = candies[i];
      }
    }
    if (max === candies[i]) {
      result.push(true);
    } else {
      result.push(false);
    }
    candies[i] = currChildCandies;
  }
  return result;
};
