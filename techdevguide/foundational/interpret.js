// Write a simple interpreter which understands "+", "-", and "*" operations. Apply the operations in order using command/arg pairs starting with the initial value of `value`. If you encounter an unknown command, return -1.


function interpret(initial, ops, opsVals) {
  for (var i = 0; i < ops.length; i++) {
    var op = ops[i],
      opVal = opsVals[i];
    if (op === "+") {
      initial += opVal;
    } else if (op === "-") {
      initial -= opVal;
    } else if (op === "*") {
      initial *= opVal;
    } else {
      return -1;
    }
  }
  return initial;
}

console.log(interpret(1, ["+"], [1]) === 2);
console.log(interpret(4, ["-"], [2]) === 2);
console.log(interpret(1, ["+", "*"], [1, 3]) === 6);
