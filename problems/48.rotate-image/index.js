/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {

  const len = matrix.length;

  const res = new Array(len).fill(null).map(() => new Array(len).fill(null));

  for (let row = 0; row < matrix.length; row++) {
    const colLen = matrix[row].length;
    for (let col = 0; col < colLen; col++) {
      res[col][colLen - 1 - row] = matrix[row][col];
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    const colLen = matrix[row].length;
    for (let col = 0; col < colLen; col++) {
      matrix[row][col] = res[row][col];
    }
  }
};