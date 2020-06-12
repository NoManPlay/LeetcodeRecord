/*
 * @Author: qtx
 * @Date: 2020-06-12 14:47:31
 * @LastEditors: qtx
 * @LastEditTime: 2020-06-12 15:00:16
 * @Description:
 */

/*
 * @lc app=leetcode.cn id=1287 lang=javascript
 *
 * [1287] 有序数组中出现次数超过25%的元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  let num = arr[0]
  let count = 1
  let size = arr.length / 4 + 1
  if (arr.length === 1) return num
  for (let i = 1; i < arr.length; i++) {
    if (num === arr[i]) {
      count++
    } else {
      num = arr[i]
      count = 1
    }
    if (count >= size) {
      return num
    }
  }
}
// @lc code=end
