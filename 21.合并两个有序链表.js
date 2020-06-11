/*
 * @Author: qtx
 * @Date: 2020-06-11 11:48:19
 * @LastEditors: qtx
 * @LastEditTime: 2020-06-11 12:05:20
 * @Description: 
 */ 
/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let l3 = new ListNode(-1)
  let c3 = l3

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      c3.next = l1
      l1 = l1.next
    } else {
      c3.next = l2
      l2 = l2.next
    }
    c3 = c3.next
  }
  c3.next = l1 === null ? l2 : l1
  return l3.next
}
// @lc code=end
