// merging two arrays
// create an empty array
// while there are still values that have not been looked at
// if the value of the first array is smaller than the value in the second array, push the value of the first array into results and increment one in first array, and vice versa
// once one array is exhausted push all the remaining values into results

function merge(arr1, arr2) {
    var results = [], i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j] ) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

// merge sort
// break arrays into halves until you arrays that are either empty or contain only one element
// once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// once the array has been merged back together, return the merged and sorted array

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    var mid = Math.floor(arr.length/2);
    var left = mergeSort(arr.slice(0,mid));
    var right = mergeSort(arr.slice(mid))
    return merge(left, right);
}


var test = [3,9,3,5,8,5,6,4,2,7];

var ans = mergeSort(test);

console.log(ans);
