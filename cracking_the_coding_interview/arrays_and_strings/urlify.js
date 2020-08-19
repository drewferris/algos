const urlify = (str, length) => {
  return str.trim().split(' ').filter(val => val.length).join('%20');
}


console.log(urlify('Mr John Smith    ', 13));