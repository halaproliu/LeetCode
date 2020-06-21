/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const len = nums.length;

    if(len <= 2) return nums.reverse();
    let index = len - 2;
    
    while(index > 0){
        if(nums[index] < nums[index + 1]){
            break;
        } 
        index--;
    }
    if(index === 0 && nums.concat().sort((a, b) => b - a)[0] === nums[0] ){
        return nums.reverse();
    }
    let indexOfmin = index + 1;
    let min = nums[indexOfmin] - nums[index];
    
    for(let i = index + 1; i < len; i++){
        if(nums[i] > nums[index] && Math.min(nums[i] - nums[index], min) !== min){
            indexOfmin = i;
        }
    }

    [nums[index], nums[indexOfmin]] = [nums[indexOfmin], nums[index]];
    let arr = nums.slice(index + 1);
    arr.sort((a, b) => a - b);
    for(let i = index + 1; i < len; i++){
        nums[i] = arr[i - index - 1]
    }
    

    return nums
};

export default nextPermutation
