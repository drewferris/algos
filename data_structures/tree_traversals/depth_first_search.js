function preOrderDFS(root) {
  var visited = [],
    current = root;

  function traverse(node) {
    visited.push(node.val);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }

  traverse(current);
  return visited;
}

function postOrderDFS(root) {
  var visited = [],
    current = root;

  function traverse(node) {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    visited.push(node.val);
  }

  traverse(current);
  return visited;
}

function inOrderDFS(root) {
  var visited = [],
    current = root;

  function traverse(node) {
    if (node.left) traverse(node.left);
    visited.push(node.val);
    if (node.right) traverse(node.right);
  }

  traverse(current);
  return visited;
}
