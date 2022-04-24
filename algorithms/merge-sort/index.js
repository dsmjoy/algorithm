// 归并排序
// 不断分割直到无法分割，开始归并
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.ceil(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}