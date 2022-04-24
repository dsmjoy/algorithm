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

  let pointer = head;

  while (pointer.next) {
    pointer.next.prev = pointer;
    pointer = pointer.next;
  }

  for (let i = 0; i < n - 1; i++) {
    pointer = pointer.prev;
  }

  if (!pointer.prev) {
    return pointer.next;
  }

  pointer.prev.next = pointer.next;

  return head;
};