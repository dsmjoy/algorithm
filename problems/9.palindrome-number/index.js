/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x === 0) {
    return true;
  }

  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let temp = 0;
  while (x > temp) {
    temp = temp * 10 + x % 10;

    x = ~~(x / 10);
  }

  // 区分数字个数的奇偶
  return x === temp || x == ~~(temp / 10);
};