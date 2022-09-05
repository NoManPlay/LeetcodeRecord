/*
 * @Author: Tianxing.Qin
 * @Date: 2022-09-02 17:29:39
 * @LastEditors: Tianxing.Qin
 * @LastEditTime: 2022-09-02 17:49:08
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let ver1 = version1.split('.')
  let ver2 = version2.split('.')
  let index = 0
  let result = 0
  while (index < ver1.length || index < ver2.length) {
    ver1[index] = ver1[index] ? ver1[index] / 1 : 0
    ver2[index] = ver2[index] ? ver2[index] / 1 : 0
    if (ver1[index] > ver2[index]) {
      return 1
      break
    } else if (ver1[index] < ver2[index]) {
      return -1
      break
    }
    index++
  }

  return result
}
// @lc code=end
