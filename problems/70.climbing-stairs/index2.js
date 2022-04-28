/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

  if (n === 1) {
    return 1;
  }

  let first = 1,
    second = 2;

  let step = 2;
  while (step < n) {
    let temp = second;
    second = first + second;
    first = temp;

    step++;
  }

  return second;
};