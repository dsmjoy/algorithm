/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const len = nums.length;

  let longest = 0;
  for (let i = 0; i < len; i++) {

    if (longest < i) {
      return false;
    }

    if (i + nums[i] >= len - 1) {
      return true;
    }

    longest = Math.max(longest, i + nums[i]);
  }
};