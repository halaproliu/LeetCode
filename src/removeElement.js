/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let len = nums.length
    for (let i = len - 1; i >= 0; i--) {
        if (nums[i] === val) {
            nums.splice(i, 1)
        }
    }
    return nums.length
};

removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1)
            i--
        }
    };
    return nums.length
}

removeElement = function(nums, val) {
    let i = 0
    let n = nums.length - 1
    while (i <= n) {
        if (nums[i] === val) {
            nums[i] = nums[n]
            n--
        } else {
            i++
        }
    }
    return i
}

// const nums = [0,1,2,2,3,0,4,2]
// const val = 2
// removeElement(nums, val)

export default removeElement
