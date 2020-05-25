var sumEvenGrandparent = function (root) {
  let sum = 0;
  function checkGrandChildren(node) {
    if (node.left) sum += node.left.val;
    if (node.right) sum += node.right.val;
  }

  function traverse(node) {
    if (node.left) {
      if (node.val % 2 === 0) {
        checkGrandChildren(node.left);
      }
      traverse(node.left);
    }
    if (node.right) {
      if (node.val % 2 === 0) {
        checkGrandChildren(node.right);
      }
      traverse(node.right);
    }
  }

  traverse(root);

  return sum;
};

var sumEvenGrandparent = function(root) {
  let sum = 0;
  const dfs = (child, parent=null, gp=null) => {
    if (gp && gp.val % 2 === 0) {
      sum += child.val;
    }
    if (child.left) {
      dfs(child.left, child, parent);
    }
    if (child.right) {
      dfs(child.right, child, parent);
    }
  }
  dfs(root);
  return sum;
};