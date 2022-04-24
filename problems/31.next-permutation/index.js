/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var nextPermutation = function (nums) {
  const len = nums.length;

  let max = nums[len - 1];
  for (let i = len - 2; i >= 0; i--) {

    // 找到满足条件的i
    if (nums[i] < max) {
      // 交换
      for (let j = i + 1; j < len; j++) {
        if (nums[j] > nums[i]) {
          exchange(nums, j, i);
          break;
        }
      }
      break;
    }

    max = nums[i];

    for (let j = i; j < len - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        exchange(nums, j, j + 1);
      } else {
        break;
      }
    }
  }
};

function exchange(nums, from, to) {
  let temp = nums[from];
  nums[from] = nums[to];
  nums[to] = temp;
}