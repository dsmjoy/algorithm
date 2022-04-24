/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

  if (x === 0) return 0;

  let rev = 0;
  while (x != 0) {

    const digit = x % 10;
    if (!checkAdditionOverflow(rev, digit)) {
      return 0;
    }

    x = ~~(x / 10);

    rev = rev * 10 + digit;

  }

  return rev;
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