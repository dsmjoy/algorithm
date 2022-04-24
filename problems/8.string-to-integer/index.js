/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const sLen = s.length;

  let num = 0;
  let flag = 1;
  let i = 0;

  while (s[i] === ' ') {
    i++;
  }

  if (i === sLen) {
    return 0;
  }

  if (s[i] === '-' || s[i] === '+') {
    flag = s[i] === '-' ? -1 : 1;
    i++;
  }

  for (; i < sLen; i++) {
    const char = s[i];
    const isNum = char >= '0' && char <= '9';

    if (!isNum) {
      break;
    }

    const digit = parseInt(char);

    if (!checkAdditionOverflow(num * flag, digit)) {
      return flag === 1 ? Math.pow(2, 31) - 1 : -Math.pow(2, 31);
    }
    num = num * 10 + digit;
  }

  return num * flag;
};

function checkAdditionOverflow(num, digit) {
  const INT_MAX = Math.pow(2, 31) - 1; // 2147483647
  const INT_MIN = -Math.pow(2, 31); // -2147483648

  if (num > 0) {
    const max = ~~(INT_MAX / 10);
    if (num > max) {
      return 0;
    } else if (num === max && digit > 7) {
      return 0
    }
  } else {
    const min = ~~(INT_MIN / 10);
    if (num < min) {
      return 0;
    } else if (num === min && digit > 8) {
      return 0;
    }
  }

  return 1;
}
