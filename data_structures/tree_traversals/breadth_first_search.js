function bfs(root) {
  var queue = [],
    visited = [],
    node = root;
  queue.push(root);

  while (queue.length > 0) {
    node = queue.shift();
    visited.push(node);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return visited;
}
