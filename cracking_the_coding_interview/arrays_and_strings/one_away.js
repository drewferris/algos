const oneAway = (str1, str2) => {
  if (Math.abs(str1.length - str2.length) > 1) return false;

  let diffs = 0;

  for (let i = 0, j = 0; i < Math.min(str1.length, str2.length); i++, j++) {
    const char1 = str1[i];
    const char2 = str2[j];
    
    if (char1 !== char2) {
      diffs++;
      if (diffs > 1) return false;
      if (str1.length !== str2.length) {
        if (str1.length > str2.length) {
          j--;
        } else {
          i--;
        }
      }
    }
  }

  return true;
}

// Cracking the Coding Interview solution #1

const oneEditAway = (first, second) => {
  if (first.length === second.length) {
    return oneEditReplace(first, second);
  } else if (first.length + 1 === second.length) {
    return oneEditInsert(first, second);
  } else if (first.length - 1 == second.length) {
    return oneEditInsert(second, first);
  }
  
  return false;
}

const oneEditReplace = (s1, s2) => {
  let foundDifference = false;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (foundDifference) return false;
      foundDifference = true;
    }
  }
  return true;
}

const oneEditInsert = (s1, s2) => {
  let index1 = 0,
      index2 = 0;

  while (index2 < s2.length && index1 < s1.length) {
    if (s1[index1] !== s2[index2]) {
      if (index1 !== index2) return false;
      index2++;
    } else {
      index1++;
      index2++;
    }
  }

  return true;
}

// Cracking the Coding Interview solution #2

const oneEditAwaySol = (first, second) => {
  if (Math.abs(first.length - second.length) > 1) return false;

  let s1 = first.length < second.length ? first : second,
      s2 = first.length < second.length ? second : first,
      index1 = 0,
      index2 = 0,
      foundDifference = false;
  
  while (index2 < s2.length && index1 < s1.length) {
    if (s1[index1] !== s2[index2]) {
      if (foundDifference) return false;
      foundDifference = true;

      if (s1.length === s2.length) index1++;
    } else {
      index1++;
    }
    index2++;
  }

  return true;
}

console.log(oneEditAwaySol('pale', 'ple') === true);
console.log(oneEditAwaySol('pales', 'pale') === true);
console.log(oneEditAwaySol('pale', 'bale') === true);
console.log(oneEditAwaySol('pale', 'bae') === false);