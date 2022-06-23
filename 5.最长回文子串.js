/*
 * @Author: Tianxing.Qin
 * @Date: 2022-06-21 17:04:10
 * @LastEditors: Tianxing.Qin
 * @LastEditTime: 2022-06-21 17:10:59
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 1) return s
  let arr = s.split('')
  let start = 0
  let end = 0
  for (let i = 0; i < s.length; i++) {
    let len1 = expandCenter(arr, i, i)
    let len2 = expandCenter(arr, i, i + 1)
    let len = Math.max(len1, len2)
    if (len > end - start) {
      start = Math.ceil(i - (len - 1) / 2)
      end = Math.floor(i + len / 2)
    }
  }
  let result = arr.slice(start, end + 1).join('')
  return result
}

let expandCenter = function (ss, L, R) {
  var left = L
  var right = R
  while (left >= 0 && right < ss.length && ss[left] === ss[right]) {
    left--
    right++
  }
  return right - left - 1
}

// @lc code=end
