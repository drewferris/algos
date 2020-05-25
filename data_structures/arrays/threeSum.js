var threeSum = function(nums) {
  const result = []
  nums.sort((a,b) => a - b)
  for(let i = 0; i < nums.length - 2; i++) {
      const a = nums[i]

      if(a > 0) return result
      if(a === nums[i - 1]) continue

      let bIdx = i + 1
      let cIdx = nums.length - 1
      while(bIdx < cIdx) {
          const b = nums[bIdx]
          const c = nums[cIdx]
          const sum = (a + b + c)

          if(sum == 0) {
              result.push([a, b, c])
          }

          if(sum >= 0) {
              while(c == nums[cIdx - 1]) cIdx--
              cIdx--
          }
          if(sum < 0) {
              while(b == nums[bIdx + 1]) bIdx++
              bIdx++
          }
      }
  }
  return result
};