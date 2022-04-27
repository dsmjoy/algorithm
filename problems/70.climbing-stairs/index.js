/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

  if (n === 1) {
    return 1;
  }

  const dp = new Array(n - 1).fill(0);
  dp[0] = 1;
  dp[1] = 2;

  let step = 2;
  while (step < n) {
    dp[step] = dp[step - 1] + dp[step - 2];

    step++;
  }

  return dp[dp.length - 1];
};