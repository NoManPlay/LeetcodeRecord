/*
 * @Author: qtx
 * @Date: 2020-06-12 18:30:51
 * @LastEditors: qtx
 * @LastEditTime: 2020-06-12 18:39:11
 * @Description: 
 */ 
/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2, curr = 0) {
  if (l1 === null && l2 === null) {
    if (curr) return new ListNode(curr)
  } else {
    if (l1 === null) l1 = new ListNode(0)
    if (l2 === null) l2 = new ListNode(0)
    let nextVal = (l2.val || 0) + (l1.val || 0) + curr
    curr = 0
    if (nextVal > 9) {
      curr = 1
      nextVal -= 10
    }
    l1.val = nextVal
    l1.next = addTwoNumbers(l1.next, l2.next, curr)
    return l1
  }
}
// @lc code=end
