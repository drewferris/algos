// Given a sorted (increasing order) array with unique integer elements, write an algorithm to write a binary search tree with minimal height.

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Cracking the Coding Interview Solution pseudocode:
//  1. Insert into the tree the middle element of the array.
//  2. Insert (into the left subtree) the left subarray of elements.
//  3. Insert (into the right subtree) the right subarray of elements.
//  4. Recurse.

const createMinimalBST = (arr, start = 0, end = arr.length) => {
    if (end < start) return null;

    let mid = Math.floor((start + end) / 2),
        n = new Node(arr[mid]);
    n.left = createMinimalBST(arr, start, mid - 1);
    n.right = createMinimalBST(arr, mid + 1, end);
    return n;
};

let arr = [1, 2, 3, 4, 5, 6, 7],
    bst = createMinimalBST(arr);

let pause;
