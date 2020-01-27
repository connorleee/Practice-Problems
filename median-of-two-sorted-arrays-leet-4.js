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
    
    let minArr = nums1.length <= nums2.length ? nums1 : nums2;
    
    let start = 0;
    let end = minArr.length;
    let partitionX = Math.floor((end - start) / 2);
    let partitionY = (nums1.length + nums2.length)/2 - partitionX;
    let median;

    while(start < end) {
        if(nums1[partitionX] <= nums2[partitionY + 1] && nums2[partitionY] <= nums1[partitionX + 1]) {
            median = nums1.length + nums2.length % 2 === 1 
                ? Math.max(nums1[partitionX], nums2[partitionY]) 
                : (Math.max(nums1[partitionX], nums2[partitionY]) + Math.min(nums1[partitionX + 1], nums2[partitionY + 1])) / 2;
            return median;
        } else if(nums1[partitionX] > nums2[partitionY + 1]) {
            end = partitionX - 1;
        } else {
            start = partitionX + 1;
        }
    }

    throw new Error("oops")
};

findMedianSortedArrays([3], [-2, -1])