/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
    let barArea = 0;

    let maxFromLeft = 0;
    let maxAreaFromLeft = 0;

    for(let h of height) {
        barArea += h;
        maxFromLeft = Math.max(maxFromLeft, h);
        maxAreaFromLeft += maxFromLeft;
    }

    let maxFromRight = 0;
    let maxAreaFromRight = 0;

    for(let i = height.length - 1; i >= 0; i--){
        maxFromRight = Math.max(maxFromRight, height[i]);
        maxAreaFromRight += maxFromRight;
    }

    const totalBoundaryArea = maxFromLeft * height.length;
    const voidRight = totalBoundaryArea - maxAreaFromLeft;
    const voidLeft = totalBoundaryArea - maxAreaFromRight;
    return totalBoundaryArea - voidLeft - voidRight - barArea;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))