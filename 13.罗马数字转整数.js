/*
 * @Author: qtx
 * @Date: 2020-06-09 17:30:10
 * @LastEditors: qtx
 * @LastEditTime: 2020-06-09 17:57:08
 * @Description:
 */

/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let params = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
  let arr = []
  let num = 0
  arr = s.split('')

  for (let i = 0; i < arr.length; i++) {
    if (params[arr[i]] < params[arr[i + 1]]) {
      num += params[arr[i + 1]] - params[arr[i]]
      i++
    } else {
      num += params[arr[i]]
    }
  }

  return num
}
// @lc code=end
