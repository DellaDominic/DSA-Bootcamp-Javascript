//Q 2210. EASY -  You are given a 0-indexed integer array nums. An index i is part of a hill in nums if the closest non-equal neighbors of i are smaller than nums[i]. Similarly, an index i is part of a valley in nums if the closest non-equal neighbors of i are larger than nums[i]. Adjacent indices i and j are part of the same hill or valley if nums[i] == nums[j].

// Note that for an index to be part of a hill or valley, it must have a non-equal neighbor on both the left and right of the index.

// Return the number of hills and valleys in nums.

/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
  let count = 0;
  let n = nums.length;
  for (let i = 1; i < n - 1; i++) {
    let left = i - 1;
    let right = i + 1;
    while (nums[i] == nums[right]) {
      right++;
      i++;
      if (i == n - 1) {
        return count;
      }
    }
    if (
      (nums[left] > nums[i] && nums[right] > nums[i]) ||
      (nums[left] < nums[i] && nums[right] < nums[i])
    ) {
      count++;
    }
  }
  return count;
};
