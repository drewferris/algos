function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  let hashTable = {};

  function helper(arr, isFinal) {
    let item, quantity;
    let final = [];
    for (let current of arr) {
      quantity = current[0];
      item = current[1];
      hashTable[item] = quantity;
      if (isFinal) {
        final.push([quantity, item]);
      }
    }
    return final;
  }
  helper(arr1);
  return helper(arr2);
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

let ans = updateInventory(curInv, newInv);
