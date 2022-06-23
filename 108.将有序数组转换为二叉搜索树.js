/*
 * @Author: Tianxing.Qin
 * @Date: 2021-07-16 15:17:49
 * @LastEditors: Tianxing.Qin
 * @LastEditTime: 2021-07-16 15:34:27
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function buildBST(nums, start, end) {
  if (start > end) return null
  const mid = Math.floor((start + end) / 2)
  const root = new TreeNode(nums[mid])
  root.left = buildBST(nums, start, mid - 1)
  root.right = buildBST(nums, mid + 1, end)
  return root
}

var sortedArrayToBST = function (nums) {
  return buildBST(nums, 0, nums.length - 1)
}
// @lc code=end
