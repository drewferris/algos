// every node has at most two children
// every child to the left is less than the parent
// every child to the right is greater than the parent

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertRec(value) {
    var newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      this.traverseInsert(this.root, value);
    }
  }

  insertNonRec(value) {
    var newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    var current = this.root;
    while(true) {
      if (current.value === value) return current;
      if (value < current.value) {
        if (!current.left) {
          return false
        }
        current = current.left;
      }
      if (value > current.value) {
        if (!current.right) {
          return false
        }
        current = current.right;
      }
    }
  }

  traverseInsert(node, value) {
    if (value === node.value) return undefined;
    if (value < node.value) {
      if (!node.left) {
        node.left = newNode;
        return this;
      }
      this.traverseInsert(node.left, value);
    } else {
      if (!node.right) {
        node.right = newNode;
        return this;
      }
      this.traverseInsert(node.right, value);
    }
  }
}
