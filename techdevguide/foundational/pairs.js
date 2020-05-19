// Given an array of non-empty strings, create and return a Map<String, String> as follows: for each string add its first character as a key with its last character as the value.

// pairs(["code", "bug"]) → {"b": "g", "c": "e"}
// pairs(["man", "moon", "main"]) → {"m": "n"}
// pairs(["man", "moon", "good", "night"]) → {"g": "d", "m": "n", "n": "t"}

function pairs(arr) {
  var map = {};

  for (var i = 0; i < arr.length; i++) {
    if (!map[arr[i][0]]) map[arr[i][0]] = arr[i][arr[i].length - 1];
  }

  return map;
}
