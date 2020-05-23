/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function(n) {
    let nums = [1, 2, 4]
    let i
    for (i = 3; i < n; i++) {
        nums[i] = nums[i - 1] + nums[i - 2]  + nums[i - 3]
    }
    return nums[i - 1]
};

export default waysToStep
