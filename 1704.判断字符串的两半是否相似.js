/*
 * @Author: NoManPlay
 * @Date: 2022-11-11 11:33:35
 * @LastEditors: NoManPlay
 * @LastEditTime: 2022-11-11 11:37:58
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=1704 lang=javascript
 *
 * [1704] 判断字符串的两半是否相似
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let letters = 'aeiouAEIOU'

  let preCount = 0
  for (let i = 0; i < s.length / 2; i++) {
    if (letters.includes(s[i])) preCount++
  }

  let nextCount = 0
  for (let i = s.length / 2; i < s.length; i++) {
    if (letters.includes(s[i])) nextCount++
  }

  return preCount === nextCount
}
// @lc code=end
