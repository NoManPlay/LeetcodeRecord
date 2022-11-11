/*
 * @Author: NoManPlay
 * @Date: 2022-11-11 11:10:00
 * @LastEditors: NoManPlay
 * @LastEditTime: 2022-11-11 11:28:33
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=2265 lang=javascript
 *
 * [2265] 统计值等于子树平均值的节点数
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
 * @return {number}
 */
var averageOfSubtree = function (root) {
  let res = 0
  function dfs(node = root) {
    if (node === null) return [0, 0]
    let [ls, lc] = dfs(node.left)
    let [rs, rc] = dfs(node.right)
    let avg = Math.floor((ls + rs + node.val) / (lc + rc + 1))
    if (avg === node.val) res += 1
    return [ls + rs + node.val, lc + rc + 1]
  }

  dfs()
  return res
}

// @lc code=end
