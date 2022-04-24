/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists.length) {
    return null;
  } else if (lists.length === 1) {
    return lists[0];
  }

  return merge(lists);
};

function merge(lists) {
  const len = lists.length;
  if (len === 1) {
    return lists[0];
  } else if (len === 2) {
    return mergeTwoLists(lists[0], lists[1]);
  }

  const half = Math.floor(len / 2);
  return merge([merge(lists.slice(0, half)),
  merge(lists.slice(half))])
}

var mergeTwoLists = function (list1, list2) {

  if (!list1 && !list2) {
    return null;
  } else if (!list1 || !list2) {
    return list1 ? list1 : list2;
  }


  let dummy = { val: null, next: null };
  let cur = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      cur = cur.next = list1;
      list1 = list1.next;
    } else {
      cur = cur.next = list2;
      list2 = list2.next;
    }
  }

  if (list1 || list2) {
    cur.next = list1 ? list1 : list2;
  }

  return dummy.next;
};