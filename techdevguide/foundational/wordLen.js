// Given an array of strings, return a Map<String, Integer> containing a key for every different string in the array, and the value is that string's length.

function wordLen(array) {
  var map = {};
  for (var word of array) {
    if (!map[word]) map[word] = word.length;
  }
  return map;
}

console.log(wordLen(["a", "bb", "a", "bb"]) === { bb: 2, a: 1 });
console.log(
  wordLen(["this", "and", "that", "and"]) === { that: 4, and: 3, this: 4 }
);
console.log(wordLen(["code", "code", "code", "bug"]) === { code: 4, bug: 3 });
