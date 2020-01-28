/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
    let result = [];

    let productSoFar = 1;
    // push products before index
    for (let i = 0; i < nums.length; i++) {
        const el = nums[i];
        result[i] = productSoFar;
        productSoFar *= el;
    }

    productSoFar = 1;

    // multiply by products after index
    for (let j = nums.length - 1; j >= 0; j--) {
        const el = nums[j];
        result[i] *= productSoFar;
        productSoFar *= el;
    }

    return result;
};