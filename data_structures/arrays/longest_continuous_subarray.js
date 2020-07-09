function longestSubarray(nums, limit) {
  let count = 0,
    result = 0,
    current = [],
    min = Number.MAX_SAFE_INTEGER,
    max = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i]

    current.push(val)

    if (current.length < result) continue

    min = Math.min(min, val)
    max = Math.max(max, val)

    let diff = Math.abs(min - max)

    if (diff <= limit) {
      count = current.length
    } else {
      const removed = current.shift()

      if (removed === min) {
        min = Math.min(...current)
      } else {
        max = Math.max(...current)
      }
    }

    result = Math.max(result, count)
  }

  return result
}

