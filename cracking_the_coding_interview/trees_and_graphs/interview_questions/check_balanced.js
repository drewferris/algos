// Implement a function to check if a binary tree is balanced (a tree such that the heights of the two subtrees of any node never differ by more than one).

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Cracking the Coding Interview solution #1: Recurse through the tree and compute height for each node's subtree. Not very efficient.

const getHeight = root => {
    if (root === null) return -1; // Base case
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
};

const isBalanced = root => {
    if (root === null) return true; // Base case

    let heightDiff = Math.abs(getHeight(root.left) - getHeight(root.right));

    if (heightDiff > 1) {
        return false;
    } else {
        // Recurse
        return isBalanced(root.left) && isBalanced(root.right);
    }
};

// Cracking the Coding Interview solution #2: getHeight is called repeatedly on the same nodes. In the getHeight function you can check if the tree is balanced while getting the height at the same time. New function called checkHeight will return height if subtree is balanced, if not return an error.

const checkHeight = (root) => {
    if (root === null) return -1;

    let leftHeight = checkHeight(root.left);
    if (leftHeight === Number.MIN_VALUE) return Number.MIN_VALUE; // Pass error up

    let rightHeight = checkHeight(root.right);
    if (rightHeight === Number.MIN_VALUE) return Number.MIN_VALUE; // Pass error up

    let heightDiff = Math.abs(leftHeight - rightHeight);
    if (heightDiff > 1) {
        return Number.MIN_VALUE; // Found error, pass it up.
    } else {
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

const isBalancedBetter = (root) => {
    return checkHeight(root) !== Number.MIN_VALUE;
}

let node = new Node(8);
node.left = new Node(4);
node.left.left = new Node(2);
node.right = new Node(10);
node.right.right = new Node(20);
node.right.right.right = new Node(22);
node.right.right.right.right = new Node(23);

// let node = new Node(8);
// node.left = new Node(4);
// node.left.left = new Node(2);
// node.left.right = new Node(6);
// node.right = new Node(10);
// node.right.right = new Node(20);
// node.right.left = new Node(18);

console.log(isBalancedBetter(node));

let pause;
