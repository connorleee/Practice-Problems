/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currSum = 0;
    let maxSum = 0;

    for (let i = 0; i < nums.length; i++) {
        const el = nums[i];
        currSum = Math.max(el, currSum + el);
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum
};