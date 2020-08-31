// T1 and T2 are large binary trees, with T1 much bigger than T2. Check if T2 is a subtree of T1;

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const checkSubtree = (t1, t2) => {
    let sameNode;
    const findNode = (t1, t2) => {
        if (t1.val === t2.val) {
            sameNode = t1;
            return;
        }
        if (t1.left) findNode(t1.left, t2);
        if (t1.right) findNode(t1.right, t2);
    };
    findNode(t1, t2);

    if (!sameNode) return false;

    let result = true;

    const compareNodes = (t1, t2) => {
        if (t1.val !== t2.val) {
            result = false;
            return;
        }
        if (t1.left && t2.left) compareNodes(t1.left, t2.left);
        if (t1.right && t2.right) compareNodes(t1.right, t2.right);
        return;
    };

    compareNodes(sameNode, t2);
    return result;
};

// CTCI Solution #1; T2's pre-order tree traversal will be a substring of T1 if null values are accounted for. Put pre-order traversals into a string for each tree and then check if T2's string is a substring of T1.

// My implementation

const containsTree = (t1, t2) => {
    let arr1 = [],
        arr2 = [];
    preOrder(t1, arr1);
    preOrder(t2, arr2);

    return arr1.join('').includes(arr2.join(''));
};

const preOrder = (node, vals) => {
    if (node !== null) {
        vals.push(node.val);
        preOrder(node.left, vals);
        preOrder(node.right, vals);
    } else {
        vals.push('X');
    }
};

// CTCI Solution #2: Pretty much the same as my original solution

const containsTree1 = (t1, t2) => {
    if (t2 === null) return true;
    return subtree(t1, t2);
};

const subtree = (r1, r2) => {
    if (r1 === null) {
        return false;
    } else if (r1.val === r2.val && matchTree(r1, r2)) {
        return true;
    }
    return subtree(r1.left, r2) || subtree(r1.right, r2);
};

const matchTree = (r1, r2) => {
    if (r1 === null && r2 === null) {
        return true; // nothing left in subtree
    } else if (r1 === null || r2 === null) {
        return false; // one tree empty so they dont match
    } else if (r1.val !== r2.val) {
        return false; // data does not match
    } else {
        return matchTree(r1.left, r2.left) && matchTree(r1.right, r2.right);
    }
};

let node1 = new Node(1);
node1.left = new Node(2);
node1.right = new Node(3);
node1.left.left = new Node(4);
node1.left.right = new Node(5);
node1.right.left = new Node(6);
node1.right.right = new Node(7);

let node2 = new Node(3);
node2.left = new Node(6);
node2.right = new Node(7);

console.log(containsTree1(node1, node2));
