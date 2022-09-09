/*
 * @lc app=leetcode.cn id=2033 lang=javascript
 *
 * [2033] 获取单值网格的最小操作数
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function (grid, x) {
  let [m, n] = [grid.length, grid[0].length]
  if (m === 1 && n === 1) return 0

  let nums = grid.flat().sort((a, b) => a - b)
  let length = nums.length
  let median = nums[length >> 1]

  let result = 0
  for (let i = 0; i < length; i++) {
    const temp = nums[i] - median
    if (temp % x) return -1
    result += (temp > 0 ? temp : -temp) / x
  }

  return result
}
// @lc code=end
