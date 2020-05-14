// store the first element as the smallest value you have seen so far
// loop through the array, checking if values are smaller then saved variable
// at the end sway the smallest with i
// repeat with the next element

function selectionSort(arr) {
    for (let i = 0; i < array.length; i++) {
        let smallest = 0;
        for (let j = i + 1; j < array.length; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        if (arr[smallest] !== arr[i]) {
            let temp = arr[i];
            arr[i] = arr[smallest];
            arr[smallest] = temp;
        }
    }
    return arr
}