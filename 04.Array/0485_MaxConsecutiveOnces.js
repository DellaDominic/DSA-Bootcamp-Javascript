//Easy Q85. Max Consecutive Ones
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
    } else {
      // if nums[i] == 0
      if (count > maxCount) {
        maxCount = count;
      }
      count = 0;
    }
  }

  return maxCount > count ? maxCount : count; // important([1,1,0,1,1,1])
};
