/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let hashTable = {};
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!hashTable[nums[i]]) {
      hashTable[nums[i]] = true;
      nums[j] = nums[i];
      j++;
    }
  }
  nums.splice(j);
  return nums;
};

let result = removeDuplicates([1, 1, 2]);

let pause;
