/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const combinations = [];
  combine('', n, 0, 0, combinations);
  return combinations;
};

function combine(combination, n, positiveCnt, negativeCnt, combinations) {

  if (positiveCnt + negativeCnt === n * 2) {
    combinations.push(combination);
    return;
  }

  if (positiveCnt < n) {
    combine(combination + '(', n, positiveCnt + 1, negativeCnt, combinations);
  }

  if (positiveCnt > negativeCnt) {
    combine(combination + ')', n, positiveCnt, negativeCnt + 1, combinations);
  }
}