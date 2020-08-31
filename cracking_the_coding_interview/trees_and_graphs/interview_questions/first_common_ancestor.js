// Design an algorithm to find two common ancestors of two nodes in a binary tree. Avoid storing nodes in data structures. Not necessarily a binary search tree.

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

// Solution #1: If there are links to the parents of each node, then we can get the depth of each node to, find the difference in depths, move the deeper one up to shallower one's depth and then iterate each node up until they match.

const firstCommonAncestor = (p, q) => {
    let delta = depth(p) - depth(q), // get the difference in depths
        first = delta > 0 ? q : p, // get the shallower node
        second = delta > 0 ? p : q; // get the deeper node
    second = goUpBy(second, delta);

    while (first !== second && first !== null && second !== null) {
        first = first.parent;
        second = second.parent;
    }
    return first === null || second === null ? null : first;
};

const goUpBy = (node, delta) => {
    while (delta > 0 && node !== null) {
        node = node.parent;
        delta--;
    }
    return node;
};

const depth = node => {
    let depth = 0;
    while (node !== null) {
        node = node.parent;
        depth++;
    }
    return depth;
};

// Solution #2: Trace p's path upwards and check if any of the nodes cover q. The first node that covers q will be the first common ancestor.
// Traverse upwards from p, storing the parent and the sibling node in a variable (Sibling is always a child of the parent and the newly uncovered subtree). At each iteration the sibling gets set to the old parent's sibling node and the parent gets set to the parent's parent.

const commonAncestor = (root, p, q) => {
    // Check if either node is not in the tree, or if one covers the other.
    if (!covers(root, p) || !covers(root, q)) {
        return null;
    } else if (covers(p, q)) {
        return p;
    } else if (covers(q, p)) {
        return q;
    }

    // Traverse upwards until you find a node that covers q
    let sibling = getSibling(p),
        parent = p.parent;
    while (!covers(sibling, q)) {
        sibling = getSibling(parent);
        parent = parent.parent;
    }
    return parent;
};

const getSibling = node => {
    if (node === null || node.parent === null) return null;
    let parent = node.parent;
    return parent.left === node ? parent.right : parent.left;
};

const covers = (root, p) => {
    if (root === null) return false;
    if (root === p) return true;
    return covers(root.left, p) || covers(root.right, p);
};

// Solution #3: If there are no parent links, check the root to see which side p and q are on. If they are on diffrent then ancestor is found. Continue to do this downward moving left or right each time.

const commonAncestor3 = (root, p, q) => {
    // Error check - one node is not in the tree.
    if (!covers(root, p) || !covers(root, q)) return null;
    return ancestorHelper(root, p, q);
}

const ancestorHelper = (root, p, q) => {
    if (root === null || p === null || q == null) return root;

    let pIsOnLeft = covers(root.left, p),
        qIsOnLeft = covers(root.left, q);
    if (pIsOnLeft !== qIsOnLeft) return root; // nodes are on different sides
    let childSide = pIsOnLeft ? root.left : root.right;
    return ancestorHelper(childSide, p, q);
}

// Solution #4: Optimized (Each subtree is searched over and over again)
// We should only need to recurse the tree once to find p and q and then bubble up the findings to earlier nodes in the stacks
// Traverse through the tree with a function that returns:
//  - p if roots subtree includes p and not q
//  - q if the root's subtree includes q and not p
//  - null if p and q are both not in the roots subtree
//  - else returns the common ancestor, this is when commonAncestor(n.left, p, q) and commonAncestor(n.right, p, q) both return non null values.

class Result {
    constructor(n, isAnc) {
        this.node = n;
        this.isAncestor = isAnc;
    }
}

const commonAncestor4 = (root, p, q) => {
    let r = commonAncestorHelper(root, p, q);
    if (r.isAncestor) return r.node;
    return null;
}

const commonAncestorHelper = (root, p, q) => {
    if (root === null) return new Result(root, false);

    if (root === p && root === q) return new Result(root, true);

    let rx = commonAncestorHelper(root.left, p, q);
    if (rx.isAncestor) return rx; // Found common ancestor.

    let ry = commonAncestorHelper(root.right, p, q);
    if (ry.isAncestor) return ry; // Found common ancestor.

    if (rx.node !== null && ry.node !== null) {
        return new Result(root, true); // This is the common ancestor.
    } else if (root === p || root === q) {
        // If we're currently at p or q, and we also found one of these nodes in a subtree, then this is truely an ancestor and the flag should be true.
        isAncestor = rx.node !== null || ry.node !== null;
        return new Result(root, isAncestor);
    } else {
        return new Result(rx.node !== null ? rx.node : ry.node, false);
    }
}

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

console.log(commonAncestor4(node, secondLeft, leftRight));
