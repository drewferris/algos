const rotate = matrix => {
  if (!matrix.length || matrix.length !== matrix[0].length) return false;

  let n = matrix.length;

  for (let layer = 0; layer < n / 2; layer++) {
    let first = layer,
        last = n - 1 - layer;
    
    for (let i = first; i < last; i++) {
      let offset = i - first,
          top = matrix[first][i];

      // left -> top
      matrix[first][i] = matrix[last - offset][first];

      // bottom -> left
      matrix[last - offset][first] = matrix[last][last - offset];

      // right -> bottom
      matrix[last][last - offset] = matrix[i][last];

      // top -> right
      matrix[i][last] = top;
    }
  }

  return matrix;
}

console.log(rotate([
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [3, 3, 3, 3],
  [4, 4, 4, 4]
]));