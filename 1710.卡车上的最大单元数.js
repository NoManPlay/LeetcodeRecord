/*
 * @Author: NoManPlay
 * @Date: 2022-11-15 10:58:51
 * @LastEditors: NoManPlay
 * @LastEditTime: 2022-11-15 11:06:37
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=1710 lang=javascript
 *
 * [1710] 卡车上的最大单元数
 */

// @lc code=start
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes = boxTypes.sort((a, b) => b[1] - a[1])
  let res = 0
  for (const [count, size] of boxTypes) {
    if (truckSize > count) {
      res += count * size
      truckSize -= count
    } else {
      res += truckSize * size
      break
    }
  }

  return res
}
// @lc code=end
