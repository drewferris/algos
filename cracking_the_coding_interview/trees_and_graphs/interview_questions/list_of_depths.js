// Given a binary search tree, design an algorithm which creates a linked list of all the nodes at each depth.

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Node {
    constructor(val) {
        this.val = val ? val : null;
        this.next = null;
    }
}

const createMinimalBST = (arr, start = 0, end = arr.length) => {
    if (end < start) return null;

    let mid = Math.floor((start + end) / 2),
        n = new Node(arr[mid]);
    n.left = createMinimalBST(arr, start, mid - 1);
    n.right = createMinimalBST(arr, mid + 1, end);
    return n;
};

const listOfDepths = root => {
    const depths = getDepths(root),
        result = [];

    for (const key in depths) {
        const vals = depths[key];
        let node = new Node(vals[0]),
            curr = node;

        for (let i = 1; i < vals.length; i++) {
            curr.next = new Node(vals[i]);
            curr = curr.next;
        }

        result.push(node);
    }
    return result;
};

const getDepths = (node, depths = {}, level = 0) => {
    if (node.val !== null) {
        if (!depths[level]) depths[level] = [];
        if (depths[level].indexOf(node.val) === -1)
            depths[level].push(node.val);
        level += 1;
        if (node.left) getDepths(node.left, depths, level);
        if (node.right) getDepths(node.right, depths, level);
    }
    return depths;
};

let arr = [1, 2, 3, 4, 5, 6, 7],
    bst = createMinimalBST(arr);

let list = listOfDepths(bst);

let pause;
