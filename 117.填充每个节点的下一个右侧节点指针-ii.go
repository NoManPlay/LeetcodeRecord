/*
 * @lc app=leetcode.cn id=117 lang=golang
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Left *Node
 *     Right *Node
 *     Next *Node
 * }
 */

func connect(root *Node) *Node {
	if root == nil {
		return nil
	}
	queue := list.New()
	queue.PushBack(root)
	tmpArr := make([]*Node, 0)
	for queue.Len() > 0 {
		length := queue.Len()
		for i := 0; i < length; i++ {
			node := queue.Remove(queue.Front()).(*Node)
			tmpArr = append(tmpArr, node)
			if node.Left != nil {
				queue.PushBack(node.Left)
			}
			if node.Right != nil {
				queue.PushBack(node.Right)
			}
		}
		if len(tmpArr) > 1 {
			for i := 0; i < len(tmpArr)-1; i++ {
				tmpArr[i].Next = tmpArr[i+1]
			}
		}
		tmpArr = []*Node{}
	}

	return root
}

// @lc code=end

