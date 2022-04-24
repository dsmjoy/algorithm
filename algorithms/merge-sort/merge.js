// 归并操作
// 需要保证传入的序列是有序的
function merge(left, right) {
  const result = [];
  while (left[0] && right[0]) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  if (left[0]) {
    while (left[0]) {
      result.push(left.shift())
    }
  }

  if (right[0]) {
    while (right[0]) {
      result.push(right.shift())
    }
  }

  return result;
}