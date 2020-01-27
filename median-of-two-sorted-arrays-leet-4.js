/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let med1 = calcMedian(nums1);
    let med2 = calcMedian(nums2);

    const calcMedian = function (arr) {
        // odd length set
        if (arr.length % 2 === 1) {
            return Math.floor(arr[arr.length / 2]);
        } else {
            let val1 = arr[arr.length / 2 - 1];
            let val2 = arr[arr.length / 2];
            return (val1 + val2) / 2;
        }
    }

    return (med1 + med2) / 2;
};