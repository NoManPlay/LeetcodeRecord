/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let rightSymbols = []
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        rightSymbols.push(')')
        break
      case '[':
        rightSymbols.push(']')
        break
      case '{':
        rightSymbols.push('}')
        break
      default:
        if (rightSymbols.pop() !== s[i]) {
          return false
        }
    }
  }
  return !rightSymbols.length
}
// @lc code=end
