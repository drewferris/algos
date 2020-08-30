// Implement a function to check if a binary tree is a binary search tree.

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Cracking the Code Interview Solution #1: If you assume the tree cannot have duplicate values, then you can traverse the tree in-order, copying elements to an array and then check if it is sorted.

const checkBST = root => {
    let array = [];
    const copyBST = root => {
        if (root === null) return;
        copyBST(root.left);
        array.push(root.val);
        copyBST(root.right);
    };
    copyBST(root);
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) return false;
    }

    return true;
};

// CTCI Solution #2: Same as #1 but w/o array, instead keep track of last element.
let last_printed = null;
const checkBST2 = n => {
    if (n === null) return true;

    // Check / recurse left
    if (!checkBST2(n.left)) return false;

    // Check current
    if (last_printed !== null && n.val <= last_printed) return false;
    last_printed = n.val;

    // Check / recurse right
    if (!checkBST2(n.right)) return false;

    return true; // All good!
};

// CTCI Solution #3: The Min/Max Solution
// Keep track of min and max values and compare each node to make sure they are within that range. When branching left, max gets updated. When branching right, the min gets updated. If anything fails, stop and return false.

const checkBST3 = (n, min = null, max = null) => {
    if (n === null) return true;
    if ((min !== null && n.val <= min) || (max !== null && n.val > max))
        return false;

    if (!checkBST3(n.left, min, n.val) || !checkBST3(n.right, n.val, max))
        return false;
    return true;
};

let node = new Node(8);
node.left = new Node(4);
node.left.left = new Node(2);
node.left.right = new Node(6);
node.right = new Node(10);
node.right.right = new Node(20);
node.right.left = new Node(9);

console.log(checkBST3(node));
