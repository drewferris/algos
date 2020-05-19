// O(n)

function sumNumbers(str) {
  var result = 0;
  var temp = "";

  for (var i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      temp += str[i];
    } else if (temp.length > 0) {
      result += Number(temp);
      temp = "";
    }
  }

  if (temp.length > 0) result += Number(temp);

  return result;
}

console.log(sumNumbers("abc123xyz") === 123);
console.log(sumNumbers("aa11b33") === 44);
console.log(sumNumbers("7 11") === 18);
