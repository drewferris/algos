/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s || s.length <= 1) return s;

  let max = s.substring(0, 1);

  function expand(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.substring(left + 1, right);
  }

  for (let i = 0; i < s.length; i++) {
    let sub = expand(s, i, i);
    if (sub.length > max.length) max = sub;
    sub = expand(s, i, i + 1);
    if (sub.length > max.length) max = sub;
  }

  return max;
};
