class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Post-order traversal visits the current node after its child nodes, hence the name "post-order".

const postOrderTraversal = node => {
    if (node !== null) {
        postOrderTraversal(node.left);
        postOrderTraversal(node.right);
        console.log(node.val);
    }
};

let node = new Node(8);
node.left = new Node(4);
node.left.left = new Node(2);
node.left.right = new Node(6);
node.right = new Node(10);
node.right.right = new Node(20);

postOrderTraversal(node);
