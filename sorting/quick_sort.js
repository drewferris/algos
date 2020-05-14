// pivot helper
// arranges elements on either side of a pivot
// less than pivot goes to left and greater than goes to right
// order does not matter on either side
// arranges in place, does not create a new array
// returns the index of the pivot

// pivot psuedocode
// store index of pivot starter
// loop through array
// if the pivot is greater than the current index, increment the pivot index and swap current element with the element at the pivot index
// swap the starting element with the pivot index
// return the pivot index

function pivot(arr, start= 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    let pivotIndex = start;
    let pivot = arr[start];
    for (let i = start + 1; i <= end; i++) {
        const currentVal = arr[i];
        if (pivot > currentVal) {
            pivotIndex++;
            swap(arr, pivotIndex, i);
        }
    }
    swap(arr, start, pivotIndex);
    return pivotIndex;
}

// quick sort psuedo code
// call the pivot helper on the array
// when the helper returns you the updated pivot index, recursively call the pivot helper on the subarray to the left and to the right
// base case is when a subarray is less than two elements

function quickSort(arr, left = 0, right = arr.length - 1) {

    if (left < right) {
        let pivotInd = pivot(arr, left, right);

        quickSort(arr, left, pivotInd - 1);
        quickSort(arr, pivotInd + 1, arr);
    }

    return arr;
}
var result = quickSort([4,8,2,1,5,7,6,3]);

console.log(result);
