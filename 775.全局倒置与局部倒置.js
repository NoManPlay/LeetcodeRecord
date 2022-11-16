/*
 * @Author: NoManPlay
 * @Date: 2022-11-16 10:22:44
 * @LastEditors: NoManPlay
 * @LastEditTime: 2022-11-16 11:05:55
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=775 lang=javascript
 *
 * [775] 全局倒置与局部倒置
 */

/**
 * 全局倒置 nums[i]>nums[j] i<j
 * 局部倒置 nums[i]>nums[i+1]
 * 那么 全局倒置属于局部倒置
 * 只要有非局部倒置就是false 没有就是true
 * 需满足 nums[i]>nums[j] i<j-1  j-i>1
 * 那么对于 0 最小index为2
 * 对于1    最小index为3
 * 即Math.abs(nums[i]-i)>1
 * 返回true 需满足 Math.abs(nums[i]-i)<=1
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function (nums) {
  return nums.every((v, i) => Math.abs(v - i) <= 1)
}
// @lc code=end
