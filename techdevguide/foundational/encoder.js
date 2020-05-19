// Write a function that replaces the words in `raw` with the words in `code_words` such that the first occurrence of each word in `raw` is assigned the first unassigned word in `code_words`.

function encoder(raw, code_words) {
  var result = [];
  for (var i = 0; i < raw.length; i++) {
    result.push(code_words[raw.indexOf(raw[i])]);
  }
  return result;
}

console.log(encoder(["a"], ["1", "2", "3", "4"]) === ["1"]);
console.log(encoder(["a", "b"], ["1", "2", "3", "4"]) === ["1", "2"]);
console.log(encoder(["a", "b", "a"], ["1", "2", "3", "4"]) === ["1", "2", "1"]);
