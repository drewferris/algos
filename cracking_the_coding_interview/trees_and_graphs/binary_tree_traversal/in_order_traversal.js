class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// In-order traversal means to visit the left branch, then the current node, then the right branch.

const inOrderTraversal = (node) => {
  if (node !== null) {
    inOrderTraversal(node.left);
    console.log(node.val);
    inOrderTraversal(node.right);
  }
}

// When performed on a binary search tree it visits the nodes in ascending order, hence the name "in-order".
let node = new Node(8);
node.left = new Node(4);
node.left.left = new Node(2);
node.left.right = new Node(6);
node.right = new Node(10);
node.right.right = new Node(20);

inOrderTraversal(node);