/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var nextPermutation = function (nums) {
  const len = nums.length;

  let i = len - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = len - 1;
    while (j > i && nums[j] <= nums[i]) {
      j--;
    }

    exchange(nums, i, j);
  }

  reverse(nums, i + 1);
};

function reverse(nums, start) {
  let left = start,
    right = nums.length - 1;

  while (left < right) {
    exchange(nums, left, right);
    left++;
    right--;
  }
}

function exchange(nums, from, to) {
  let temp = nums[from];
  nums[from] = nums[to];
  nums[to] = temp;
}