/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
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