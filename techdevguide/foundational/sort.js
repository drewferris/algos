// Return an array that contains the sorted values from the input array with duplicates removed.


function sort(arr) {
  var sorted = arr.sort((a, b) => {
    return a - b;
  });

  let unique = [...new Set(sorted)];

  return unique;
}


console.log(sort([]) === []);
console.log(sort([1]) === [1]);
console.log(sort([1, 1]) === [1]);
