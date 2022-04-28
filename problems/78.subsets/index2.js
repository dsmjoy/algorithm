/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {

  const res = [];

  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    res.push([cur]);

    let len = res.length - 1;
    for (let j = 0; j < len; j++) {
      res.push([
        ...res[j],
        cur
      ])
    }
  }

  res.push([]);

  return res;
};