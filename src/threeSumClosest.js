/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let l, r, diff, sum = 0, ans
    // 先进行排序
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        l = i + 1
        r = nums.length - 1
        while (l < r) {
            // 求和
            sum = nums[i] + nums[l] + nums[r]
            // 获取当前和于目标值的差值
            let currDiff = Math.abs(sum - target)
            if (currDiff === 0) return sum
            if (!diff) {
                diff = currDiff
                ans = sum
            }
            if (sum < target) {
                if (nums[l] === nums[l + 1]) l++
                l++
            } else if (sum > target) {
                r--
            } else {
                return ans
            }

            if (currDiff < diff) {
                diff = currDiff
                ans = sum
            }
        }
    }
    return ans
};

export default threeSumClosest