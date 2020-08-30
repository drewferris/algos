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

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(val) {
        this.size += 1;
        if (this.head === null) {
            this.head = val;
            return;
        }

        let curr = this.head;
        while (curr !== null) {
            curr = curr.next;
        }
        curr = new Node(val);
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

// Cracking the Code Interview Solution: more or less the same as the above only optimized to remove final populating of linked lists. DFS with recursion.

const createLevelLinkedList = (root, lists = [], level = 0) => {
    if (root === null) return; // base case

    let list;
    if (lists.length === level) {
        // Level not contained in list
        list = new LinkedList();
        // Levels are always traversed in order. So, if this is the first time you have visited level i, you must have seen levels 0 through i - 1. You can therefore safely add the level at the end.
        lists.push(list);
    } else {
        list = lists[level];
    }
    list.add(new Node(root)); // Method would need to be written for this.
    createLevelLinkedList(root.left, lists, level + 1);
    createLevelLinkedList(root.right, lists, level + 1);
};

// Cracking the Code Interview Solution #2: BFS - below solution needs refactor work

const createLevelLinkedListBFS = root => {
    let result = [],
        current = new LinkedList();
    if (root !== null) current.add(new Node(root));
    while (current.size > 0) {
        result.push(current) // Add previous level
        let parents = current; // Go to the next level
        current = new LinkedList();
        for (const parent of parents) {
            if (parent.left !== null) current.add(parent.left);
            if (parent.right !== null) current.add(parent.right);
        }
    }
    return result;
};

let arr = [1, 2, 3, 4, 5, 6, 7],
    bst = createMinimalBST(arr);

let list = listOfDepths(bst);

let pause;
