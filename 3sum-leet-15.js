/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let solution = [];

    const twoSum = function(target, data) {
        const availVals = new Map();

        for (let i = 0; i < data.length; i++) {
            const el = data[i];
            const currentTarget = target - currentTarget;

            if(availVals.has(currentTarget)) {
                return [el, currentTarget];
            } else {
                availVals.set(el, i);
            }
        }
        
        return [];
    }

    for (let i = 0; i < nums.length; i++) {
        const el = nums[i];

        let validSet = twoSum(0 - el, nums.splice(i, 1));

        solution.push([el, ...validSet])
    }

    return solution;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))