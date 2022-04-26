/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {

  const len = matrix.length;

  for (let row = 0; row < len; row++) {
    for (let col = 0; col < len; col++) {
      // const temp = matrix[col][colLen - 1 - row];
      res[col][len - 1 - row] = matrix[row][col];
      // res[row][col] = temp;
    }
  }
};