/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s) {
  const stack = [],
      len = s.length;

  const table = {
      ')': '(',
      ']': '[',
      '}': '{',
  }

  for (i = 0; i < len; i++) {
      const char = s[i];

      if (char === '(' || char === '[' || char === '{') {
          stack.push(char);
      } else if (table[char] === stack[stack.length - 1]) {
          stack.pop();
      } else {
          return false;
      }
  }

  return !stack.length;
};