/*
 * @lc app=leetcode.cn id=232 lang=golang
 *
 * [232] 用栈实现队列
 */

// @lc code=start
type MyQueue struct {
	stackIn  []int
	stackOut []int
}

func Constructor() MyQueue {
	return MyQueue{
		stackIn:  make([]int, 0),
		stackOut: make([]int, 0),
	}
}

func (this *MyQueue) Push(x int) {
	this.stackIn = append(this.stackIn, x)
}

func (this *MyQueue) Pop() int {
	inLen, outLen := len(this.stackIn), len(this.stackOut)
	if outLen == 0 {
		if inLen == 0 {
			return -1
		}
		for i := inLen - 1; i >= 0; i-- {
			this.stackOut = append(this.stackOut, this.stackIn[i])
		}
		this.stackIn = []int{}
		outLen = len(this.stackOut)
	}
	val := this.stackOut[outLen-1]
	this.stackOut = this.stackOut[:outLen-1]
	return val
}

func (this *MyQueue) Peek() int {
	val := this.Pop()
	if val == -1 {
		return -1
	}
	this.stackOut = append(this.stackOut, val)
	return val
}

func (this *MyQueue) Empty() bool {
	return len(this.stackIn) == 0 && len(this.stackOut) == 0
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(x);
 * param_2 := obj.Pop();
 * param_3 := obj.Peek();
 * param_4 := obj.Empty();
 */
// @lc code=end

