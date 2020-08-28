class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

// Pre-order traversal visits the current node before its child nodes, hence the name "pre-order".

const preOrderTraversal = (node) => {
	if (node !== null) {
		console.log(node);
		preOrderTraversal(node.left);
		preOrderTraversal(node.right);
	}
};

// In pre-order traversal the root is always the first node that is visited.
let node = new Node(8);
node.left = new Node(4);
node.left.left = new Node(2);
node.left.right = new Node(6);
node.right = new Node(10);
node.right.right = new Node(20);