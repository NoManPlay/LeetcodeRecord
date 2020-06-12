/*
 * @Author: qtx
 * @Date: 2020-06-12 11:49:00
 * @LastEditors: qtx
 * @LastEditTime: 2020-06-12 12:06:29
 * @Description:
 */

/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  return (BigInt(digits.join('')) + 1n).toString().split('').map(Number)
}
// @lc code=end
