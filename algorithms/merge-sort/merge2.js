// 归并操作
// 需要保证传入的序列是有序的
function merge(left, right) {

  if (!left.length) {
    return right;
  } else if (!right.length) {
    return left;
  } else if (left[0] < right[0]) {
    return [left[0]].concat(
      merge(left.slice(1), right)
    );
  } else {
    return [right[0]].concat(
      merge(left, right.slice(1))
    );
  }
}