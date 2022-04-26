/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

  intervals.sort((prev, next) => {
    if (prev[0] === next[0]) {
      return prev[1] - next[1];
    }
    return prev[0] - next[0];
  })

  let left = 0, right = 1;
  let max = intervals[left][1];

  const mergeList = [];

  while (right < intervals.length) {
    if (max < intervals[right][0]) {
      mergeList.push([intervals[left][0], max]);
      left = right;
    }
    max = Math.max(max, intervals[right][1]);
    right++;
  }

  mergeList.push([intervals[left][0], max]);

  return mergeList;
};