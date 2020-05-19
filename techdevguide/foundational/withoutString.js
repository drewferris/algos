

function withoutString(base, remove) {
  var regex = new RegExp(remove, "g");
  var newBase = base.replace(regex, '');
  return newBase;
}
console.log(withoutString("Hello there", "llo") === "He there");
console.log(withoutString("Hello there", "e") === "Hllo thr");
console.log(withoutString("Hello there", "x") === "Hello there");
