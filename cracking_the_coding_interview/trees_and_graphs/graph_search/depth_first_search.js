class Node {
    constructor(val) {
        this.val = val;
        this.visited = false;
        this.adjacent = [];
    }
}

const search = root => {
    if (root === null) return;
    console.log(root.val);
    for (const n of root.adjacent) {
        if (!n.visited) search(n);
    }
};
