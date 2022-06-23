/*
 * @Author: Tianxing.Qin
 * @Date: 2021-07-15 15:34:29
 * @LastEditors: Tianxing.Qin
 * @LastEditTime: 2021-07-15 15:37:13
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  var list = head

  if (list === null) return null

  while (list.next !== null) {
    if (list.val == list.next.val) list.next = list.next.next
    else list = list.next
  }

  return head
}
// @lc code=end
