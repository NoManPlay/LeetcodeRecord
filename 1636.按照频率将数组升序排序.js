/*
 * @Author: NoManPlay
 * @Date: 2022-09-09 14:31:10
 * @LastEditors: NoManPlay
 * @LastEditTime: 2022-09-09 15:13:36
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=1636 lang=javascript
 *
 * [1636] 按照频率将数组升序排序
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  let map = new Map()
  for (const num of nums) map.set(num, (map.get(num) || 0) + 1)

  let fn = (a, b) => (a[1] === b[1] ? b[0] - a[0] : a[1] - b[1])
  map = new Map([...map].sort(fn))

  let result = []
  for (const [key, value] of map) result.push(...new Array(value).fill(key))
  return result
}
// @lc code=end
