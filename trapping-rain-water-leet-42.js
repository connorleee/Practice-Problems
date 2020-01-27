/**
 * @param {number[]} height
 * @return {number}
 */
// const trap = function (height) {
//     let barArea = 0;

//     let maxFromLeft = 0;
//     let maxAreaFromLeft = 0;

//     for(let h of height) {
//         barArea += h;
//         maxFromLeft = Math.max(maxFromLeft, h);
//         maxAreaFromLeft += maxFromLeft;
//     }

//     let maxFromRight = 0;
//     let maxAreaFromRight = 0;

//     for(let i = height.length - 1; i >= 0; i--){
//         maxFromRight = Math.max(maxFromRight, height[i]);
//         maxAreaFromRight += maxFromRight;
//     }

//     const totalBoundaryArea = maxFromLeft * height.length;
//     const voidRight = totalBoundaryArea - maxAreaFromLeft;
//     const voidLeft = totalBoundaryArea - maxAreaFromRight;
//     return totalBoundaryArea - voidLeft - voidRight - barArea;
// };

const trap = function (height) {
    let waterArea = 0;
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;

    while (left < right) {
        if (height[left] <= height[right]) {
            height[left] > leftMax ? leftMax = height[left] : waterArea += leftMax - height[left];

            left++;
        } else {
            height[right] > rightMax ? rightMax = height[right] : waterArea += rightMax - height[right];

            right--;
        }
    }

    return waterArea;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))