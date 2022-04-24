function arrToListNode(arr) {
  let input, cur;

  arr.forEach(e => {
    const obj = {
      val: e,
      next: null
    }

    if (!cur) {
      input = obj;
    } else {
      cur.next = obj;
    }
    cur = obj;
  })
  return input;
}