var maxArea = function (height) {
  var maxArea = 0,
    l = 0,
    r = height.length - 1;
  while (l < r) {
    maxArea = Math.max(maxArea, Math.min(height[l], height[r]) * (r - l));
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return maxArea;
};

let result = maxArea([1, 2, 4, 3]);

var pause;
