/*
 * @Author: qtx
 * @Date: 2020-06-11 11:16:13
 * @LastEditors: qtx
 * @LastEditTime: 2020-06-11 11:27:02
 * @Description:
 */

/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = strs[0] || ''
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (strs[i][j] !== result[j]) {
        if (j === 0) return ''
        result = result.substring(0, j)
      }
    }
  }
  return result
}
// @lc code=end
