/*
 * @Author: Tianxing.Qin
 * @Date: 2021-07-15 17:40:45
 * @LastEditors: Tianxing.Qin
 * @LastEditTime: 2021-07-15 17:55:34
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2)
  nums1.sort((a, b) => a - b)
}
// @lc code=end
