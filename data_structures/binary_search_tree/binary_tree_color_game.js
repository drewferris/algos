function bTreeGameWinningMove(root, n, x) {
    const node = find(root, x),
          leftNode = count(node.left),
          rightNode = count(node.right),
          parent = n - leftNode - rightNode - 1,
          half = n / 2;

    return leftNode > half || rightNode > half || parent > half;
}

function find(root, target) {
    if (!root) {
        return null;
    }
    if (root.val === target) {
        return root;
    }

    return find(root.left, target) || find(root.right, target);
}

function count(root) {
    if (!root) {
        return 0;
    }

    return count(root.left) + count(root.right) + 1;
}