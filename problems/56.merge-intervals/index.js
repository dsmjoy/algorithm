/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

  const checkMerge = (list1, list2) => {
    let flag = false;
    if (list1[1] >= list2[1]) {
      flag = list1[0] <= list2[1] || list1[0] <= list2[0];
    } else {
      flag = list2[0] <= list1[1] || list2[0] <= list1[0];
    }
    return flag;
  }

  let left = 0;

  while (left < intervals.length - 1) {

    let right = left + 1;

    while (right < intervals.length) {
      const leftList = intervals[left],
        rightList = intervals[right];
      const canMerge = checkMerge(leftList, rightList);

      if (canMerge) {
        let min = Math.min(leftList[0], rightList[0]),
          max = Math.max(leftList[1], rightList[1]);

        intervals.splice(right, 1);
        intervals[left] = [min, max];
        right = left + 1;
      } else {
        right++;
      }
    }

    left++;
  }

  return intervals;
};