/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let index = nums.indexOf(target)
  if (index > -1) {
    return index
  } else {
    nums.push(target)

    return nums
      .sort((a, b) => {
        return a - b
      })
      .indexOf(target)
  }
}
// @lc code=end
