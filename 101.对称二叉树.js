/*
 * @Author: Tianxing.Qin
 * @Date: 2021-07-15 18:13:48
 * @LastEditors: Tianxing.Qin
 * @LastEditTime: 2021-07-15 18:38:50
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @param {TreeNode} root
 * @return {boolean}
 */

function check(p, q) {
  if (!p && !q) return true
  if (!p || !q) return false
  return p.val === q.val && check(p.left, q.right) && check(p.right, q.left)
}

var isSymmetric = function (root) {
  return check(root, root)
}
// @lc code=end
