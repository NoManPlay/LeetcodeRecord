/*
 * @Author: qtx
 * @Date: 2020-06-12 16:19:45
 * @LastEditors: qtx
 * @LastEditTime: 2020-06-12 16:32:09
 * @Description:
 */

/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => {
    return a - b
  })
  let i = 0
  let arr = []
  while (i < nums.length - 1) {
    let a = nums[i],
      j = i + 1,
      k = nums.length - 1
    while (j < k) {
      let b = nums[j],
        c = nums[k]
      let sum = a + b + c
      if (sum === 0) arr.push([a, b, c])
      if (sum <= 0) while (nums[j] == b && j < k) j++
      if (sum >= 0) while (nums[k] == c && j < k) k--
    }
    while (nums[i] == a && i < nums.length - 1) i++
  }
  return arr
}
// @lc code=end
