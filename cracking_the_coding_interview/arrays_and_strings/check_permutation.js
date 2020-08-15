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

console.log(checkPermutation('bob', 'obb') === true);
console.log(checkPermutation('bob', 'obo') === false);
