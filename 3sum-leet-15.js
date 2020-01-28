/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//     let solution = [];

//     const twoSum = function(target, data) {
//         const availVals = new Map();

//         for (let i = 0; i < data.length; i++) {
//             const el = data[i];
//             const currentTarget = target - el;

//             if(availVals.has(currentTarget)) {
//                 return [el, currentTarget];
//             } else {
//                 availVals.set(el, i);
//             }
//         }

//         return [];
//     }

//     for (let i = 0; i < nums.length; i++) {
//         const el = nums[i];

//         let validSet = twoSum(0 - el, nums.splice(i, 1));

//         solution.push([el, ...validSet])
//     }

//     return solution;
// };

const threeSum = function (nums) {
    const solution = [];

    if (nums.length < 3) return solution;

    nums.sort((a, b) => a - b);

    const target = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > target) break; //since sorted, the remaining loop will be impossible to add correctly

        if (i > 0 && nums[i] === nums[i - 1]) continue; //this skips adjacent numbers that are equal

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if (sum === target) {
                solution.push([nums[i], nums[j], nums[k]]);

                while (nums[j] === nums[j + 1]) j++;
                while (nums[k] === nums[k + 1]) k--;

                j++;
                k--;
            } else if (sum < target) {
                j++;
            } else {
                k--;
            }
        }
    }

    return solution;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))