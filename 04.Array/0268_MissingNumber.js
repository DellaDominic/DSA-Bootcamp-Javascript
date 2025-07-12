// Easy - Q.268. Missing Number
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const len = nums.length;
  const totalSum = (len * (len + 1)) / 2;
  let arrSum = 0;
  for (let i = 0; i < len; i++) {
    arrSum += nums[i];
  }

  return totalSum - arrSum;
};
