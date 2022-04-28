/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {

  const res = [[]];

  /**
   * @param {number[]} stack,
   * @param {number[]} subNums
   */
  const backtrack = (stack, subNums) => {
    for (let i = 0; i < subNums.length; i++) {
      let cur = subNums[i],
        rest = subNums.slice(i + 1);

      stack.push(cur);
      res.push([...stack]);
      backtrack(stack, rest);
      stack.pop();
    }
  }

  backtrack([], nums);

  return res;
};