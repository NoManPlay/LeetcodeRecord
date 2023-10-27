/*
 * @lc app=leetcode.cn id=59 lang=golang
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
func generateMatrix(n int) [][]int {
	startX, startY := 0, 0
	var loop int = n / 2
	var center int = n / 2
	count := 1
	offset := 1
	res := make([][]int, n)
	for i := 0; i < n; i++ {
		res[i] = make([]int, n)
	}

	for loop > 0 {
		i, j := startX, startY
		for j = startY; j < n-offset; j++ {
			res[startX][j] = count
			count++
		}
		for i = startX; i < n-offset; i++ {
			res[i][j] = count
			count++
		}
		for ; j > startY; j-- {
			res[i][j] = count
			count++
		}
		for ; i > startX; i-- {
			res[i][j] = count
			count++
		}
		startX++
		startY++
		offset++
		loop--
	}
	if n%2 == 1 {
		res[center][center] = n * n
	}
	return res
}

// @lc code=end

