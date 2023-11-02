/*
 * @lc app=leetcode.cn id=24 lang=golang
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func swapPairs(head *ListNode) *ListNode {
	dummy := &ListNode{Next: head}
	pre := dummy
	for head != nil && head.Next != nil {
		pre.Next = head.Next   //pre.Next=2
		next := head.Next.Next //next=3
		head.Next.Next = head  //head.Next.Next=1
		head.Next = next       //head.Next=3
		pre = head             //pre=1
		head = next            //head=3
	}
	return dummy.Next
}

// @lc code=end

