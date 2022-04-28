/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {

  let count = 0;

  const dfs = (x, y) => {
    if (x === n - 1 && y === m - 1) {
      count++;
      return;
    }

    if (x + 1 < n) {
      dfs(x + 1, y);
    }

    if (y + 1 < m) {
      dfs(x, y + 1);
    }
  }

  dfs(0, 0);

  return count;
};