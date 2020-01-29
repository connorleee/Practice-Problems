/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const minDominoRotations = function (A, B) {
    const n = A.length;
    let flips = 0;

    let a = A[0];
    let b = B[0];

    for (let i = 1; i < n; i++) {
        // if current dominoe doesn't match either of the options of the first dominoe, flipping isn't possible
        if(A[i] !== a && A[i] !== b) {
            if(B[i] !== a && B[i] !== b){
                return -1;
            }
        }

        if(A[i] === a || B[i] === b) {
            continue;
        } else if(A[i] === b || B[i] === a) {
            flips++;
        } else {
            return -1
        }
    }

    return Math.min(flips, n - flips);
};

console.log(minDominoRotations([2,1,2,4,2,2], [5,2,6,2,3,2]));
console.log(minDominoRotations([3,5,1,2,3], [3,6,3,3,4]))
console.log(minDominoRotations([2,1,1,3,2,1,2,2,1], [3,2,3,1,3,2,3,3,2]))