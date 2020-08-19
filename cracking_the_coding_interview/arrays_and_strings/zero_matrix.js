const zero_matrix = matrix => {
  let zeroCols = new Array(matrix.length);

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const val = row[j];
      if (val === 0) {
        zeroCols[j] = true;
        matrix[i] = new Array(row.length).fill(0);
        for (let k = 0; k < i; k++) {
          matrix[k][j] = 0;
        }
        break;
      }

      if (zeroCols[j]) matrix[i][j] = 0;
    }
  }

  return matrix;
}

// Cracking the Code Interview solution #1
//  - pass through matrix and store all rows and columns of zeros
//  - iterate through previous step's stored values and reset matrix values

const setZeroes = matrix => {
  let rows = new Array(matrix.length),
      columns = new Array(matrix[0].length);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        columns[j] = true;
      }
    }
  }

  const nullifyRow = row => {
    for (let j = 0; j < matrix.length; j++) {
      matrix[row][j] = 0;
    }
  }

  const nullifyColumn = column => {
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][column] = 0;
    }
  }

  for (let i = 0; i < rows.length; i++) {
    if (rows[i]) nullifyRow(i);
    if (columns[i]) nullifyColumn(i);
  }

  return matrix;
}

console.log(setZeroes([
  [1, 2, 0, 4],
  [1, 1, 1, 1],
  [0, 1, 1, 1],
  [1, 1, 1, 1]
]));