/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  x = x.toString()
  let str = x.split('').reverse().join('')
  str = parseInt(str)
  if (str > 2 ** 31 - 1) return 0
  return x < 0 ? -str : str
}
// @lc code=end
