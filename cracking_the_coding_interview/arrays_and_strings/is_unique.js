// can use additional data structures

const isUnique = str => {
    let map = new Map();

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!map.get(char)) {
            map.set(char, true);
        } else {
            return false;
        }
    }

    return true;
};

// Cracking the Coding Interview solution

const isUniqueSol = str => {
    if (str.length > 128) return false;

    let char_set = new Array(str.length);

    for (let i = 0; i < str.length; i++) {
        const val = str[i];
        
        if (char_set[val]) return false;

        char_set[val] = true;
    }

    return true;
};

// cannot use additional data structures

const isUniqueNoHelp = str => {
    let char;

    while (str.length) {
        char = str.substring(0, 1);
        str = str.substring(1);
        if (str.indexOf(char) !== -1) return false;
    }

    return true;
};

// Cracking the Code Interview solutions are:

//  - compare each character to every other character in the string
//  - sort the string and compare neighboring characters

console.log(isUnique('strgod') === true);
console.log(isUnique('strnogood') === false);

console.log(isUniqueSol('strgod') === true);
console.log(isUniqueSol('strnogood') === false);

console.log(isUniqueNoHelp('strgod') === true);
console.log(isUniqueNoHelp('strnogood') === false);
