/*
 * @Author: NoManPlay
 * @Date: 2022-11-21 14:26:52
 * @LastEditors: NoManPlay
 * @LastEditTime: 2022-11-21 14:44:09
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=808 lang=javascript
 *
 * [808] 分汤
 */

const {maxLength} = require('conventional-changelog-config-spec')

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function (n) {
  n = Math.ceil(n / 25)
  if (n > 179) return 1

  const dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0))
  dp[0][0] = 0.5
  for (let i = 1; i <= n; i++) {
    dp[0][i] = 1
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        (dp[Math.max(0, i - 4)][j] +
          dp[Math.max(0, i - 3)][Math.max(0, j - 1)] +
          dp[Math.max(0, i - 2)][Math.max(0, j - 2)] +
          dp[Math.max(0, i - 1)][Math.max(0, j - 3)]) /
        4
    }
  }

  return dp[n][n]
}
// @lc code=end
