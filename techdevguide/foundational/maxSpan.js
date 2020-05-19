function maxSpan(arr) {
  var map = {},
    longest = 0;

  for (var i = 0; i < arr.length; i++) {
    if (!map[arr[i]] &&  map[arr[i]] !== 0) {
      map[arr[i]] = i;
    } else {
      var diff = i - map[arr[i]];
      if (diff > longest) longest = diff;
    }
  }

  return diff + 1;
}

console.log(maxSpan([1, 2, 1, 1, 3]) === 4);
console.log(maxSpan([1, 4, 2, 1, 4, 1, 4]) === 6);
console.log(maxSpan([1, 4, 2, 1, 4, 4, 4]) === 6);
