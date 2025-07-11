// Easy(medium) Q88.You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  //approach 1 -  brute force --->
  //Push all nums2 elements to nums1 array and then sort
  //time comp --> (m+n)log(m+n)

  //approach 2 - use another array - nums1Copy

  // let nums1Copy = nums1.slice(0,m);
  // let p1 =0; // to track nums1copy
  // let p2 =0; // to track nums2

  // for(let i=0; i<m+n; i++){
  //     if(p1<m && (nums1Copy[p1] < nums2[p2] || p2 >= n)){
  //         nums1[i] = nums1Copy[p1];
  //         p1++;
  //     }
  //     else {
  //         nums1[i] = nums2[p2];
  //         p2++;
  //     }
  // }

  //approach 3 - far better approach

  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) {
      break;
    }
    // if(nums1[p1] > nums2[p2] && p1 >= 0){// corner case - p1 >= 0(if p1 runs out else block executes)
    //     nums1[i] = nums1[p1];
    //     p1--;
    // }
    // else{
    //     nums1[i] = nums2[p2];
    //     p2--;
    // }

    //or opposite

    if (nums2[p2] > nums1[p1] || p1 < 0) {
      // corner case where p1 goes out
      nums1[i] = nums2[p2];
      p2--;
    } else {
      nums1[i] = nums1[p1];
      p1--;
    }
  }
};
