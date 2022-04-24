/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

  let dummy = {
    val: null,
    next: head
  };

  let first = dummy,
    second = head;

  // 移动到第n个节点，只需要走n-1步即可
  for (let i = 0; i < n - 1; i++) {
    second = second.next;
  }

  while (second.next) {
    second = second.next;
    first = first.next;
  }

  first.next = first.next.next;

  return dummy.next;
};