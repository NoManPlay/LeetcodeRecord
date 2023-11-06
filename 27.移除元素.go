/*
 * @lc app=leetcode.cn id=27 lang=golang
 *
 * [27] 移除元素
 */

// @lc code=start

//双向指针
// func removeElement(nums []int, val int) int {
// 	left := 0
// 	right := len(nums) - 1
// 	for left <= right {
// 		for left <= right && nums[left] != val {
// 			left++
// 		}
// 		for left <= right && nums[right] == val {
// 			right--
// 		}
// 		if left < right {
// 			nums[left] = nums[right]
// 			left++
// 			right--
// 		}
// 	}
// 	fmt.Println(nums)
// 	return left
// }

//快慢指针
func removeElement(nums []int, val int) int {
	length:=len(nums)
	res:=0
	for i := 0; i < length; i++ {
		if nums[i]!=val{
			nums[res]=nums[i]
			res++
		}
	}
	nums=nums[:res]
	return res
}

// @lc code=end

