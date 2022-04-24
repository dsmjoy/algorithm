/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {

  let left = 0,
    right = height.length - 1;

  let maxArea = 0;

  while (left < right) {
    const leftH = height[left],
      rightH = height[right];

    const area = Math.min(leftH, rightH) * (right - left);
    maxArea = Math.max(area, maxArea);

    if (leftH <= rightH) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};