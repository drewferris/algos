// Write a method to compute all permutations of a string of unique characters.

// Approach #1: Building from permutations of n-1 characters.

const getPerms = str => {
    if (str === null) return null;

    let permutations = [];
    if (!str.length) {
        // base case
        permutations.push('');
        return permutations;
    }

    let first = str[0], // get the first char
        remainder = str.substring(1), // remove the first char
        words = getPerms(remainder);

    for (const word of words) {
        for (let j = 0; j < word.length; j++) {
            const s = insertCharAt(word, first, j);
            permutations.push(s);
        }
    }
    return permutations;
};

// Insert char c at index i in word.
const insertCharAt = (word, c, i) => {
    let start = word.substring(0, i),
        end = word.substring(i);
    return start + c + end;
};

console.log(getPerms('d'));

