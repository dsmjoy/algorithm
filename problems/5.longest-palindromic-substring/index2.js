var longestPalindrome = function (s) {

  if (!s) return '';

  const sLen = s.length;
  let maxStart = 0,
    maxLen = 1;

  for (let i = 0; i < sLen; i++) {
    let len1 = len2 = 0;

    if (s[i] && s[i + 1] && s[i] === s[i + 1]) {
      len1 = expandAroundCenter(s, i, i + 1);
    }

    if (s[i - 1] && s[i + 1] && s[i - 1] === s[i + 1]) {
      len2 = expandAroundCenter(s, i - 1, i + 1);
    }

    const curMaxLen = Math.max(len1, len2);

    if (curMaxLen > maxLen) {
      maxLen = curMaxLen;
      maxStart = i - (maxLen - 1) / 2;
      if (len1 > len2) {
        maxStart = i - (maxLen - 2) / 2;
      } else {
        maxStart = i - (maxLen - 1) / 2;
      }
    }
  }

  return s.substr(maxStart, maxLen);
};

function expandAroundCenter(s, left, right) {
  while (s[left] && s[right] && s[left] === s[right]) {
    left--;
    right++;
  }

  return (right - left + 1) - 2;
}