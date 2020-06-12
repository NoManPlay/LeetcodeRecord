/*
 * @Author: qtx
 * @Date: 2020-06-12 12:06:53
 * @LastEditors: qtx
 * @LastEditTime: 2020-06-12 14:09:39
 * @Description:
 */

/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2)
}
// @lc code=end
