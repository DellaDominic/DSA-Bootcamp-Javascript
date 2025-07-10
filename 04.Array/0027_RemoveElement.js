// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // for(let i=0; i< nums.length; i++) {
  //    if (nums[i] == val){
  //     nums.splice(i,1);// remove element at i
  //     i--;
  //    }
  // }
  // return nums.length;

  //another method without using splice

  // let x = 0;
  // for(let i=0; i<nums.length; i++){
  //     if(nums[i] !== val){
  //         nums[x] = nums[i];
  //         x++;
  //     }
  // }
  // return x;

  // another method
  let p1 = 0;
  let p2 = nums.length - 1;

  if (nums.length == 0) {
    return 0;
  }
  // if (nums.length == 1) {
  //     return nums[0] == val ? 0 : 1;
  // }

  while (p1 < p2) {
    if (nums[p1] == val) {
      // replace nums[p1] with nums[p2]
      nums[p1] = nums[p2];
      p2--;
    } else {
      p1++;
    }
  }
  if (nums[p1] == val) {
    return p1;
  }
  return p1 + 1;
};
