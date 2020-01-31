/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = new Map(); //unique sum, number of occurences of sum
    let count = 0;
    let sum = 0;

    map.set(0, 1); //sum of zero is always present

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]; //new sum

        if(map.has(sum - k)) {
            count += map.get(sum - k)
        }
        if(map.has(sum)) {
            map.set(sum, map.get(sum) + 1)
        }
        else {
            map.set(sum, 1)
        }
    }

    return count;
};

console.log(subarraySum([1,1,1], 2)); //2