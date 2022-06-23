/*
 * @Author: Tianxing.Qin
 * @Date: 2021-07-16 16:45:39
 * @LastEditors: Tianxing.Qin
 * @LastEditTime: 2021-07-16 16:50:52
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0
  for (let i = 0, j = height.length - 1; i < j; ) {
    const minHeight = height[i] < height[j] ? height[i++] : height[j--]
    const area = (j - i + 1) * minHeight
    max = Math.max(max, area)
  }
  return max
}
// @lc code=end
