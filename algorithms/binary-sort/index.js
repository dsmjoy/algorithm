
/**
 * @param {number[]} nums 
 * @param {number} target
 * @returns {number}
 */
var binarySearch = function (arr, target) {
  var search = function (start, end) {
    if (start > end) {
      return -1;
    }
    const mid = Math.floor((end + start) / 2);
    if (arr[mid] > target) {
      return search(start, mid - 1);
    } else if (arr[mid] < target) {
      return search(mid + 1, end);
    } else {
      return mid;
    }
  }
  return search(0, arr.length - 1)
}