const compress = (str) => {
	let split = str.split(''),
		result = [];

	for (let i = 0; i < split.length; i++) {
		const char = split[i];

		if (i < split.length - 1) {
			let j = 1;
			while (char === split[i + j]) {
				j++;
			}
			i = i + j - 1;
			result.push(char + j);
		} else {
			result.push(char);
		}
	}
	result = result.join('');
	return result.length < str.length ? result : str;
};

// Cracking the Code Interview optimization

const compressSol = str => {
  let split = str.split(''),
      result = [],
      countConsecutive = 0;

  for (let i = 0; i < split.length; i++) {
    const char = split[i];
    countConsecutive++;

    if (i + 1 >= str.length || str[i] !== str[i + 1]) {
      result.push(split[i] + countConsecutive);
      countConsecutive = 0;
    }
  }

  result = result.join('');
	return result.length < str.length ? result : str;
}

console.log(compressSol('aabcccccaaa') === 'a2b1c5a3');
