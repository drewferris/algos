// pick the second element of the array and compare
// if smaller swap the two
// continue to the next element and if it is in the incorrect position, iterate through to the sorted position to place the element in the correct place
// repeat until sorted

function insertionSort(arr) {
    for (let i = 0; i < array.length; i++) {
        const currentVal = array[i];
        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr;
}