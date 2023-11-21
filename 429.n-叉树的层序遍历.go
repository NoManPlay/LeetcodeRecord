/*
 * @lc app=leetcode.cn id=429 lang=golang
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */

func levelOrder(root *Node) [][]int {
	if root == nil {
		return nil
	}
	res := make([][]int, 0)
	queue := list.New()
	queue.PushBack(root)

	for queue.Len() > 0 {
		length := queue.Len()
		tmpArr := []int{}
		for i := 0; i < length; i++ {
			node := queue.Remove(queue.Front()).(*Node)
			for _, child := range node.Children {
				queue.PushBack(child)
			}
			tmpArr = append(tmpArr, node.Val)
		}
		res = append(res, tmpArr)
	}

	return res
}

// @lc code=end

