const checkPermutation = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    let map1 = {},
        map2 = {};

    for (let i = 0; i < str1.length; i++) {
        const val1 = str1[i],
            val2 = str2[i];

        if (!map1[val1]) map1[val1] = 0;
        map1[val1]++;

        if (!map2[val2]) map2[val2] = 0;
        map2[val2]++;
    }

    for (const key in map1) {
        if (!map2[key] || map1[key] !== map2[key]) return false;
    }

    return true;
};

// Cracking the Code Interview solution #1: sort each and compare

const checkPermutationSol = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    const sort = str => str.split('').sort().join('');
    
    return sort(str1) === sort(str2);
}

// solution #2 use an array as a hash table to count occurences of each character

const checkPermutationSol2 = (str1, str2) => {
    if (str1.length !== str2.length) return;

    let letters = new Array(128);

    for (let i = 0; i < str1.length; i++) {
        const charCode = str1[i].charCodeAt();
        if (!letters[charCode]) letters[charCode] = 0;
        letters[charCode]++;
    }

    for (let i = 0; i < str2.length; i++) {
        const charCode = str2[i].charCodeAt();
        if (!letters[charCode]) return false;
        letters[charCode]--;
        if (letters[charCode] < 0) return false;
    }

    return true;
}

console.log(checkPermutationSol2('bob', 'obb') === true);
console.log(checkPermutationSol2('bob', 'obo') === false);
