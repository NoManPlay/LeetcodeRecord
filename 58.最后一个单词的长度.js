/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (s.length >= 1) {
    s = s.split(' ')
    while (s[s.length - 1] < 1) {
      s.pop()
    }
    if (s.length > 0) {
      s = s[s.length - 1]
      return s.length
    }
  }
  return 0
}
// @lc code=end
