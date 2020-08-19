const isPalPerm = (str) => {
  let map = {},
      odds = 0;
  
  str = str.toLowerCase();

	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		if (char !== ' ') {
			if (!map[char]) map[char] = 0;
      map[char]++;
      if (map[char] % 2 === 1) {
        odds++;
      } else {
        odds--;
      }
		}
  }
    
  return odds <= 1;
};

console.log(isPalPerm('TactCoapapa') === true);