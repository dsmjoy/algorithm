var longestPalindrome = function (s) {

  if (!s) return '';

  const len = s.length;
  let maxLen = 1;
  let maxStart = 0;

  for (let i = 0; i < len; i++) {
    let left = right = i;

    while (s[left - 1] && s[left - 1] === s[left]) {
      left--;
    }

    while (s[right + 1] && s[right + 1] === s[right]) {
      right++;
    }

    while (s[left] && s[right] && s[left] === s[right]) {
      const curLen = right - left + 1;
      if (maxLen < curLen) {
        maxLen = curLen;
        maxStart = left;
      }

      left--;
      right++;
    }
  }

  return s.substr(maxStart, maxLen);
};