function sym(...args) {
  let answer = helper(args[0], args[1]);
  let k = 2;
  if (args.length > 2) {
    while (k < args.length) {
      answer = helper(answer, args[k]);
      k++;
    }
  }
  return answer;
}

function helper(arr1, arr2) {
  let hashTable = {},
    answers = {};
  let i = 0,
    j = 0;
  let val1, val2;

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i]) {
      val1 = arr1[i];
      if (!hashTable[val1]) {
        hashTable[val1] = 'arr1';
        answers[val1] = true;
      } else if (hashTable[val1] !== 'arr1') {
        delete answers[val1];
      }
    }

    if (arr2[j]) {
      val2 = arr2[j];
      if (!hashTable[val2]) {
        hashTable[val2] = 'arr2';
        answers[val2] = true;
      } else if (hashTable[val2] !== 'arr2') {
        delete answers[val2];
      }
    }
    i++;
    j++;
  }
  return Object.keys(answers).map((num) => {
    return Number(num);
  });
}

let ans = sym([1, 2, 3, 3], [5, 2, 1, 4]);
let pause;
