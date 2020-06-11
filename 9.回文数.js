/*
 * @Author: qtx
 * @Date: 2020-06-09 17:23:16
 * @LastEditors: qtx
 * @LastEditTime: 2020-06-09 17:28:56
 * @Description:
 */

/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  x = x.toString()
  let str = x.split('').reverse().join('')
  return x == str ? true : false
}
// @lc code=end
