// Write an algorithm that can find the "next" node (i.e. in order successor) of a given node in a binary search tree. Each node has a link to it's parent.

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

// My solution, seems like it might work but may not.

const successor = node => {
    if (node.val < node.parent.val && !node.right) return node.parent;
    if (node.val < node.parent.val && node.right) return node.right;
    if (node.val > node.parent.val && !node.right) {
        let curr = node;
        while (curr.parent.val < node.val) {
            curr = curr.parent;
        }
        return curr.parent;
    }
    if (node.val > node.parent.val && node.right) return node.right;
};

// CTCI Solution:

const inOrderSucc = n => {
    if (n === null) return null;

    // Found right children -> return leftmost node of right subtree.
    if (n.right !== null) {
        return leftMostChild(n.right);
    } else {
        let q = n,
        x = q.parent;
        // Go up until on the left instead of right
        while (x !== null && x.left !== q) {
            q = x;
            x = x.parent;
        }
        return x;
    }
};

const leftMostChild = n => {
    if (n === null) return null;
    while (n.left !== null) {
        n = n.left;
    }
    return n;
};

let node = new Node(8);

let firstLeft = new Node(4);
firstLeft.parent = node;
node.left = firstLeft;

let secondLeft = new Node(2);
secondLeft.parent = firstLeft;
firstLeft.left = secondLeft;

let leftRight = new Node(6);
leftRight.parent = firstLeft;
firstLeft.right = leftRight;

let firstRight = new Node(10);
firstRight.parent = node;
node.right = firstRight;

let secondRight = new Node(20);
secondRight.parent = firstRight;
firstRight.right = secondRight;

let rightLeft = new Node(9);
rightLeft.parent = firstRight;
firstRight.left = rightLeft;

console.log(inOrderSucc(rightLeft));
