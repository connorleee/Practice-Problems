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
    let right = 0;
    let currentMaxH = 0;

    while(right < height.length - 1) {   
        // increment the right pointer until you find peak. set pointers then
        if(height[right] > height[right + 1]) { 
            // if you find the right peak is lower than the left peak, just subtract delta height * distance from the water area
            if(height[right] < height[left]){
                waterArea -= (height[left] - height[right]) * (right - left) - 1;
                
            };

            left = right;
            currentMaxH = height[right];
        }

        waterArea += currentMaxH - height[right];
        right++;
    }

    return waterArea;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))