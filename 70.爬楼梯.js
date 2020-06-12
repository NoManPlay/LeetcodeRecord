/*
 * @Author: qtx
 * @Date: 2020-06-12 14:12:31
 * @LastEditors: qtx
 * @LastEditTime: 2020-06-12 14:22:13
 * @Description:
 */

/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, map) {
  if (n <= 2) {
    return n
  }
  // 如果F(n)计算过 直接取出来
  if (!map) {
    map = new Map()
  }
  if (map.get(n)) {
    return map.get(n)
  } else {
    let value = climbStairs(n - 1, map) + climbStairs(n - 2, map)
    map.set(n, value)
    return value
  }
}
// @lc code=end
