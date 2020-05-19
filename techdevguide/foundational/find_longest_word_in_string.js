function find_longest_word_in_string(letters, words) {
  var lettersMap = {},
    longest;

	// O(#letters) space and speed
	
  letters.split("").forEach((letter, i) => {
    if (!lettersMap[letter]) return (lettersMap[letter] = [i]);
    lettersMap[letter].push(i);
  });

  var sorted = words.sort((a, b) => {
    return b.length - a.length;
	});
	
	// O(#words # avg-len) * O(#letters / 26) time; constant space.
  for (var word of sorted) {
    var letterExists = true;
    var pos = 0;
    for (var letter of word) {
      var isValidWord = true;
      if (!lettersMap[letter]) {
        letterExists = false;
        isValidWord = false;
        break;
      }
      if (!letterExists) break;

      var possiblePositions = lettersMap[letter].map((p) => {
        return p >= pos;
      });

      if (!possiblePositions) {
        isValidWord = false;
        break;
      }
      pos = possiblePositions[0] + 1;
    }

    if (isValidWord) {
      longest = word;
      break;
    }
  }

  return longest;
}

var answer = find_longest_word_in_string("abppplee", [
  "able",
  "ale",
  "apple",
  "bale",
  "kangaroo",
]);

console.log(answer);
