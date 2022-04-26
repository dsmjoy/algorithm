/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

  const len = nums.length;
  if (len === 1) {
    return nums[0];
  }

  let right = 0,
    max = nums[right];

  while (right < len) {
    if (nums[right] > 0) {
      max = nums[right];
      right++;
      break;
    }
    max = Math.max(max, nums[right])
    right++;
  }

  let total = max;
  while (right < len) {
    const rightNum = nums[right];

    if (rightNum > 0) {
      if (total <= 0) {
        total = rightNum;
        max = Math.max(total, max);
      } else {
        total += rightNum;
        max = Math.max(total, max);
      }
    } else {
      total += rightNum;
    }

    right++;
  }

  return max;
};