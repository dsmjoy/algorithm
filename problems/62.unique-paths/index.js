/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {

  const map = new Map();
  let count = 0;

  const inMap = (x, y) => map.has(`${x},${y}`);

  const dfs = (x, y) => {

    if (x === n - 1 && y === m - 1) {
      count++;
      return;
    }

    map.set(`${x},${y}`, 1);
    if (x + 1 < n && !inMap(x + 1, y)) {
      dfs(x + 1, y);
    }

    if (y + 1 < m && !inMap(x, y + 1)) {
      dfs(x, y + 1);
    }

    map.delete(`${x},${y}`);
  }

  dfs(0, 0);

  return count;
};