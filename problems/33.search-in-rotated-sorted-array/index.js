/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return searchArray(nums, target, 0)
};

function searchArray(nums, target, start) {
  if (nums[0] === target) {
    return start;
  } else if (nums[nums.length - 1] === target) {
    return start + nums.length - 1;
  } else if (nums.length === 2 || nums.length === 1) {
    return -1;
  }

  const half = Math.floor(nums.length / 2);
  if (nums[half] === target) {
    return start + half;
  }

  // 前一半有序且目标在内部
  let condition1 = nums[0] < nums[half - 1] && nums[0] < target && nums[half - 1] > target;

  // 如果前一半无序，那么后一半就有序。如果目标不在后一半，那么就在前面一半
  let condition2 = nums[0] >= nums[half - 1] && (nums[half + 1] > target || nums[nums.length - 1] < target)
  if (condition1 || condition2) {
    return searchArray(nums.slice(0, half - 1), target, start);
  }

  // 后一半的起始index为half + 1。那么start就是half + 1对应在初始nums里的位置就是起始index + start = half + 1 + start
  return searchArray(nums.slice(half + 1), target, (half + 1) + start);
}