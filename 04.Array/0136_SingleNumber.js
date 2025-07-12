// Easy - Q.136. Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  //approach 1 - using hash map
  // let hash = {};

  // for(let i=0; i< nums.length; i++){
  //     if(!hash[nums[i]]){
  //         hash[nums[i]] = 1;
  //     }
  //     else{
  //         hash[nums[i]]++;
  //     }
  // }

  // for(let i=0; i< nums.length; i++){
  //     if(hash[nums[i]] == 1) {
  //         return nums[i];
  //     }
  // }

  //approach 2 - bitwise xor operator (^)

  let xor = nums[0];
  for (let i = 1; i < nums.length; i++) {
    xor ^= nums[i];
  }
  return xor;
};
