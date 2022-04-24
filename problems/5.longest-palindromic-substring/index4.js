const dp = new Array(922);
for (let i = 0; i < dp.length; i++) {
  dp[i] = new Array(922)
}
var longestPalindrome = function (s) {

  const sLen = s.length;

  let start = 0,
    len = 1;

  for (let j = 1; j < sLen; j++) {
    for (let i = 0; i <= j; i++) {

      if (s[i] === s[j] && (j - i == 1 || j - i == 0 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
      }

      if (dp[i][j] && (j - i + 1 > len)) {
        start = i;
        len = j - i + 1;
      }
    }
  }

  return s.substr(start, len);
};