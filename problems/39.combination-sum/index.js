/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {

  const len = candidates.length;
  const res = [];

  const combine = (total, nums, start) => {
    for (let i = start; i < len; i++) {
      const cur = total + candidates[i];
      if (cur > target) {
        break;
      } else if (cur < target) {
        nums.push(candidates[i]);
        combine(cur, nums, i);
        nums.pop();
      } else {
        res.push([...nums, candidates[i]]);
        break;
      }
    }
  }

  candidates.sort((prev, next) => prev - next);
  combine(0, [], 0);

  return res;
};