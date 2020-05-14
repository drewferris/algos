// helper functions

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(digitCount(nums[i]), max);
  }
  return max;
}

// function which takes a list of numbers
// figure out how many digits the largest number has
// loop from k = 0 to this number
// for each iteration, create buckets for each digit (0-9)
// place each number in the corresponding bucket based on the kth digit
// replace the existing array with the values in the bucket (concatenate the array)
// return at the end

function radixSort(nums) {
  let max = mostDigits(nums);
  for (let i = 0; i < max; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      buckets[getDigit(nums[j], i)].push(nums[j]);
    }
    nums = [].concat(...buckets);
  }
  return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));

var test;
