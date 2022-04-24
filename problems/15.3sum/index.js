/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }

  nums.sort((a, b) => a - b);

  let len = nums.length,
    res = [];

  for (let i = 0; i < len; i++) {
    const first = nums[i];

    if (first > 0) {
      break;
    }

    if (i > 0 && first === nums[i - 1]) {
      continue;
    }

    let right = len - 1;
    for (let j = i + 1; j < len - 1; j++) {
      const second = nums[j];

      if (j > i + 1 && second === nums[j - 1]) {
        continue;
      }

      while (right > j && first + second + nums[right] > 0) {
        right--;
      }

      if (right === j) {
        break;
      }

      if (first + second + nums[right] === 0) {
        res.push([first, second, nums[right]]);
      }
    }
  }

  return res;
};