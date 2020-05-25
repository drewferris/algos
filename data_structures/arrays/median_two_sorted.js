var findMedianSortedArrays = function(nums1, nums2) {
  let len = nums1.length + nums2.length;
  let mid = Math.floor(len / 2) + 1;
  let even = len % 2 === 0,
      y = 0,
      x = 0,
      last,
      previous;

  while (x + y < mid) {
      previous = last
      
      if (nums1[x] < nums2[y] || y === nums2.length) {
          last = nums1[x]
          x++
      } else {
          last = nums2[y]
          y++
      }
  }

  return even ? (previous + last) / 2 : last;
};