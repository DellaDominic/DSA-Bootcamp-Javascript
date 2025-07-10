//26. Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // if(nums.length == 1){
  //     return 1;
  // }
  // for(let i=0; i<nums.length; i++) {
  //     if(nums[i+1] == nums[i]){
  //         nums.splice(i+1,1);
  //         i--;
  //     }
  // }
  // return nums.length;

  //another way of solving this

  if (!nums.length) {
    return 0;
  }
  let x = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[x]) {
      x++;
      nums[x] = nums[i];
    }
  }
  return x + 1;
};
