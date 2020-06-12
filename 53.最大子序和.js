/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = -Number.MAX_VALUE
  let sum = 0
  for (let num of nums) {
    if (sum < 0) {
      sum = 0
    }
    sum += num
    max = Math.max(max, sum)
  }
  return max
}
// @lc code=end
