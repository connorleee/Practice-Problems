/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currSum = -Infinity;
    let maxSum = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        const el = nums[i];
        currSum = Math.max(el, currSum + el);
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))