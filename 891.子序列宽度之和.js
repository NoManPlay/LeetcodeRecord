/*
 * @Author: NoManPlay
 * @Date: 2022-11-18 15:13:48
 * @LastEditors: NoManPlay
 * @LastEditTime: 2022-11-18 15:27:23
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=891 lang=javascript
 *
 * [891] 子序列宽度之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumSubseqWidths = function (nums) {
  const mod = 1000000007
  const length = nums.length

  const powers = [1]
  while (powers.length < length) {
    powers.push((powers[powers.length - 1] << 1) % mod)
  }

  nums.sort((a, b) => a - b)

  let total = 0
  for (let i = 0; i < length; i++) {
    total += ((powers[i] - powers[length - i - 1]) * nums[i]) % mod
    total %= mod
  }

  return total
}
// @lc code=end
