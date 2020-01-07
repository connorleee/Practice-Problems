function binarySearch(target, nums) {
    let floorIdx = -1;
    let ceilingIdx = nums.length;

    while (floorIdx + 1 < ceilingIdx) {
        let distance = ceilingIdx - floorIdx;
        let halfDist = Math.floor(distance / 2);
        let guessIdx = floorIdx + halfDist;
        let guessVal = nums[guessIdx];


        if (guessVal === target) {
            return true;
        }

        if (guessVal > target) {
            ceilingIdx = guessIdx;
        } else {
            floorIdx = guessIdx;
        }
    }

    return false;
}

console.log(binarySearch(3, [1, 2, 3, 4, 5]));
console.log(binarySearch(4, [1, 2, 3, 4, 5]));
console.log(binarySearch(6, [1, 2, 3, 4, 5]));
