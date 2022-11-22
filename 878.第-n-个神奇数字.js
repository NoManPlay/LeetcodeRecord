/*
 * @Author: NoManPlay
 * @Date: 2022-11-22 10:35:34
 * @LastEditors: NoManPlay
 * @LastEditTime: 2022-11-22 11:17:33
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=878 lang=javascript
 *
 * [878] 第 N 个神奇数字
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function (n, a, b) {
  /**
   * 1. 假设a<b,那么第n个就是n*a，所以范围为[a,n*a]
   * 2. 可以被a或b整除，存在公共数字（公倍数），
   * lcm(a,b)为最小公倍数，那么共有n/a + n/b - n/lcm(a,b)
   * 3. lcm(a,b)=a*b/gcd(a,b)(最大公因数)
   * 4. f(x) 表示a～x上满足的个数，则存在表达式
   * f(x)=x/a+x/b-x/lcm(a,b)
   */
  let l = BigInt(Math.min(a, b))
  let r = BigInt(n * Math.min(a, b))

  const f = (x, a, b) => {
    a = BigInt(a)
    b = BigInt(b)
    return x / a + x / b - x / lcm(a, b)
  }

  //二分法

  while (l < r) {
    let mid = (l + r) >> 1n
    if (f(mid, a, b) < BigInt(n)) l = mid + 1n
    else r = mid
  }

  return l % BigInt(1e9 + 7)
}

//最大公因数
function gcd(a, b) {
  a = BigInt(a)
  b = BigInt(b)
  return b ? gcd(b, a % b) : a
}

//最小公倍数
function lcm(a, b) {
  return (BigInt(a) * BigInt(b)) / gcd(a, b)
}
// @lc code=end
