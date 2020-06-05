var lengthOfLongestSubstring = function (s) {
  let n = s.length, 
  ht = {}, 
  ans = 0;

for (let i = 0, j = 0; j < n; j++) {
  if (ht[s[j]]) {
      i = Math.max(ht[s[j]], i);
  } 
  
  ans = Math.max(ans, j - i + 1);
  ht[s[j]] = j + 1;
}

return ans;
};
lengthOfLongestSubstring("abcabcbb");
