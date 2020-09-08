// Given an array of sorted integers, return an index where arr[i] = i.

// Brute Force:

const magicSlow = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === i) return i;
    }
};

// Binary Search:

const magicFast = (array, start = 0, end = array.length) => {
    if (end < start) return -1;
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === mid) return mid;
    if (array[mid] > mid) return magicFast(array, start, mid - 1);
    if (array[mid] < mid) return magicFast(array, mid + 1, end);
};

// What if elements are not distinct? Above binary search will not work so need to recursively search left and right of mid.

const magicFastNonDist = (array, start, end) => {
    if (end < start) return -1;
    let midIndex = Math.floor((start + end) / 2),
        midValue = array[midIndex];
    if (midValue === mid) return mid;

    // Search left
    let leftIndex = Math.min(midIndex - 1, midValue),
        left = magicFastNonDist(array, start, leftIndex);

    if (left >= 0) return left;

    // Search right
    let rightIndex = Math.max(midIndex + 1, midValue),
        rightIndex = magicFastNonDist(array, rightIndex, end);

    return right;
};
