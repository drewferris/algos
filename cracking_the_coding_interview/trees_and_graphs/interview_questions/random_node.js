// Implement a binary search tree that has a method that returns a random node.

// As you traverse the tree of n depth, return the current node 1/n times, the left node LEFT_SIZE * 1/n times, and the right node RIGHT_SIZE * 1/n times.

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.size = 1;
    }

    getRandomNode() {
        if (this.left === null && this.right === null) {
            return this;
        }
        let leftSize = this.left === null ? 0 : this.left.size,
            index = Math.floor(Math.random() * (this.size - 0 + 1)) + 0;
        if (index < leftSize) {
            return this.left.getRandomNode();
        } else if (index === leftSize) {
            return this;
        } else {
            return this.right.getRandomNode();
        }
    }

    insertInOrder(d) {
        if (d <= this.val) {
            if (this.left === null) {
                this.left = new Node(d);
            } else {
                this.left.insertInOrder(d);
            }
        } else {
            if (this.right === null) {
                this.right = new Node(d);
            } else {
                this.right.insertInOrder(d);
            }
        }
        this.size += 1;
    }

    find(d) {
        if (d === this.val) {
            return this;
        } else if (d <= this.val) {
            return this.left !== null ? this.left.find(d) : null;
        } else if (d > this.val) {
            return this.right !== null ? this.right.find(d) : null;
        }
        return null;
    }

    getIthNode(i) {
        if (this.left === null && this.right === null) return this;
        let leftSize = this.left === null ? 0 : this.left.size;
        if (i < leftSize) {
            return this.left.getIthNode(i);
        } else if (i === leftSize) {
            return this;
        } else {
            // Skipping over leftSize + 1 nodes, so subtract them.
            return this.right.getIthNode(i - (leftSize + 1));
        }
    }
}

// Alternate Solution:

class Tree {
    constructor() {
        this.root = null;
        this.size = this.root === null ? 0 : this.root.size;
    }

    getRandomNode() {
        if (this.root === null) return null;

        let random = Math.floor(Math.random() * (this.size - 0 + 1)) + 0;
        return this.root.getIthNode(random);
    }

    insertInOrder(val) {
        if (this.root === null) {
            this.root = new Node(val);
        } else {
            this.root.insertInOrder(val);
        }
        this.size = this.root.size;
    }
}

let node1 = new Tree();
node1.insertInOrder(8);
node1.insertInOrder(4);
node1.insertInOrder(10);
node1.insertInOrder(2);
node1.insertInOrder(6);
node1.insertInOrder(9);
node1.insertInOrder(20);

console.log(node1.getRandomNode());
