var longestPalindrome = function (s) {

  const sLen = s.length;

  let start = 0,
    len = 1;

  for (let j = 1; j < sLen; j++) {
    for (let i = 0; i < j; i++) {
      if (isPalindrome(s, i, j) && (j - i + 1 > len)) {
        start = i;
        len = j - i + 1;
      }
    }
  }

  return s.substr(start, len);
};

function isPalindrome(s, left, right) {
  while (s[left] === s[right]) {

    if (right - left <= 1) {
      return true;
    }

    left++;
    right--;
  }

  return false;
}