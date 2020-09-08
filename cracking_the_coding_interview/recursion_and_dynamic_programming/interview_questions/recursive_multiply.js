// Write a recursive function that will multiply two numbers w/o using * or /.

const minProduct = (a, b) => {
    let bigger = a < b ? b : a,
        smaller = a < b ? a : b;
    return minProductHelper(smaller, bigger);
};

const minProductHelper = (smaller, bigger) => {
    if (smaller === 0) {
        // 0 * bigger = 0
        return 0;
    } else if (smaller === 1) {
        // 1 * bigger = bigger
        return bigger;
    }

    // Compute half. If uneven, compute other half. If even, double it.
    let s = smaller >> 1, // Divide by two.
        side1 = minProductHelper(s, bigger),
        side2 = side1;
    if (smaller % 2 === 1) side2 = minProductHelper(smaller - s, bigger);

    return side1 + side2;
};

// Solution 2: Cache the results

const minProductCache = (a, b) => {
    let bigger = a < b ? b : a,
        smaller = a < b ? a : b,
        memo = new Array(smaller + 1);
    return minProductHelperCache(smaller, bigger, memo);
};

const minProductHelperCache = (smaller, bigger, memo) => {
    if (smaller === 0) {
        // 0 * bigger = 0
        return 0;
    } else if (smaller === 1) {
        // 1 * bigger = bigger
        return bigger;
    } else if (memo[smaller] > 0) {
        return memo[smaller];
    }

    // Compute half. If uneven, compute other half. If even, double it.
    let s = smaller >> 1, // Divide by two.
        side1 = minProductHelper(s, bigger, memo),
        side2 = side1;
    if (smaller % 2 === 1) side2 = minProductHelper(smaller - s, bigger, memo);

    // Sum and cache
    memo[smaller] = side1 + side2;
    return side1 + side2;
};

// Solution 3: Remove the additional call for odd numbers and simply double the first half, adding one more bigger value.

const minProductCache2 = (a, b) => {
    let bigger = a < b ? b : a,
        smaller = a < b ? a : b;
    return minProductHelperCache2(smaller, bigger);
};

const minProductHelperCache = (smaller, bigger) => {
    if (smaller === 0) {
        // 0 * bigger = 0
        return 0;
    } else if (smaller === 1) {
        // 1 * bigger = bigger
        return bigger;
    }

    // Compute half. If uneven, compute other half. If even, double it.
    let s = smaller >> 1, // Divide by two.
        halfProd = minProductHelper(s, bigger);

    if (smaller % 2 === 0) {
        return halfProd + halfProd;
    } else {
        return halfProd + halfProd + bigger;
    }
};

console.log(minProduct(4, 3));
console.log(minProductCache(4, 3));
