/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// var findMedianSortedArrays = function (nums1, nums2) {
//     const calcMedian = function (arr) {
//         // odd length set
//         if (arr.length % 2 === 1) {
//             return arr[Math.floor(arr.length / 2)];
//         } else {
//             let val1 = arr[arr.length / 2 - 1];
//             let val2 = arr[arr.length / 2];
//             return (val1 + val2) / 2;
//         }
//     };

//     // edge cases for empty arrays
//     if (nums1.length < 1 && nums2.length < 1) {
//         return null
//     } else if (nums1.length < 1) {
//         return calcMedian(nums2)
//     } else if (nums2.length < 1) {
//         return calcMedian(nums1)
//     }

//     let med1 = calcMedian(nums1);
//     console.log(med1)

//     let med2 = calcMedian(nums2);
//     console.log(med2)

//     return (med1 + med2) / 2;
// };

const findMedianSortedArrays = function (nums1, nums2) {
    if(nums1.length > nums2.length) return findMedianSortedArrays( nums2, nums1);

    const x = nums1.length, y = nums2.length;
    let start = 0;
    let end = nums1.length;
    
    let median;
    
    while(start <= end) {
        let partitionX = (end + start) / 2 | 0;
        let partitionY = (x + y + 1) / 2 - partitionX | 0;
    
        let maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
        let minRightX = partitionX === x ? Infinity : nums1[partitionX];
        let maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
        let minRightY = partitionY === y ? Infinity : nums2[partitionY];   

        if(maxLeftX <= minRightY && maxLeftY <= minRightX) {
            median = (x + y) % 2 === 1 
                ? Math.max(maxLeftX, maxLeftY) 
                : (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            return median;
        } else if(maxLeftX > minRightY) {
            end = partitionX - 1;
        } else {
            start = partitionX + 1;
        }
    }
};

console.log(findMedianSortedArrays([3, 4], [1, 2]))