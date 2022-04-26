/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {

  const res = [];

  const backtrack = (list) => {
    for (let i = 0; i < nums.length; i++) {
      const cur = nums[i];
      if (nums.length - 1) {
        list.push(cur);
        nums.splice(i, 1);
        backtrack(list);
        nums.splice(i, 0, cur);
        list.pop();
      } else {
        res.push([...list, cur]);
      }
    }
  }

  backtrack([]);

  return res;
};