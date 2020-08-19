const isRotation = (s1, s2) => {
  let len = s1.length;

  if (len === s2.length && len > 0) {
    let s1s1 = s1 + s1;
    return s1s1.indexOf(s2) !== -1;
  }

  return false;
}

console.log(isRotation('waterbottle', 'erbottlewat'));