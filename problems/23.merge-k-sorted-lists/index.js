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

  let res = lists.splice(0, 1)[0];

  while (lists.length) {
    res = mergeTwoLists(res, lists.splice(0, 1)[0]);
  }

  return res;
};

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