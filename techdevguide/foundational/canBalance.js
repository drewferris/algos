// Given a non-empty array, return true if there is a place to split the array so that the sum of the numbers on one side is equal to the sum of the numbers on the other side.

// O(n)
function canBalance(arr) {
  var sum = arr.reduce((a, b) => {
      return a + b;
    }, 0),
    total = 0;

  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
    if (total === sum - total) return true;
    if (total > sum - total) return false;
  }
}

console.log(canBalance([1, 1, 1, 2, 1]) === true);
console.log(canBalance([2, 1, 1, 2, 1]) === false);
console.log(canBalance([10, 10]) === true);
