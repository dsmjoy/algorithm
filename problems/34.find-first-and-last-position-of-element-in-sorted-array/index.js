/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

  if (!nums.length || target < nums[0] || target > nums[nums.length - 1]) {
    return [-1, -1];
  }

  const searchTarget = function (firstOrLast) {
    let left = 0,
      right = nums.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] < target) {
        left = mid + 1;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else {
        if (firstOrLast === -1 && mid - 1 >= 0 && nums[mid - 1] === target) {
          right = mid - 1;
        } else if (firstOrLast === 1 && mid + 1 < nums.length && nums[mid + 1] === target) {
          left = mid + 1;
        } else {
          return mid;
        }
      }
    }

    return -1;
  }

  const firstTargetIndex = searchTarget(-1);
  if (firstTargetIndex === -1) {
    return [-1, -1];
  }

  const lastTargetIndex = searchTarget(1);
  return [firstTargetIndex, lastTargetIndex];
};