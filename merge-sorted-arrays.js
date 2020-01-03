function mergeArrays(myArray, alicesArray) {
    let mergedArr = [];

    let myArrIdx = 0;
    let alicesArrIdx = 0;
    let mergedArrIdx = 0;

    while (mergedArrIdx < myArray.length + alicesArray.length) {
        const firstUnmergedAlices = alicesArray[alicesArrIdx];
        const firstUnmergedMine = myArray[myArrIdx];

        const isMyArrExhausted = myArrIdx >= myArray.length;
        const isAlicesArrExhausted = alicesArrIdx >= alicesArray.length;

        if(!isMyArrExhausted && (isAlicesArrExhausted || firstUnmergedMine < firstUnmergedAlices)){
            mergedArr.push(firstUnmergedMine);
            myArrIdx++
        } else {
            mergedArr.push(firstUnmergedAlices);
            alicesArrIdx++;
        }

        mergedArrIdx++;
    }

    return mergedArr;
}



// Tests

let desc = 'both arrays are empty';
let actual = mergeArrays([], []);
let expected = [];
assertDeepEqual(actual, expected, desc);

desc = 'first array is empty';
actual = mergeArrays([], [1, 2, 3]);
expected = [1, 2, 3];
assertDeepEqual(actual, expected, desc);

desc = 'second array is empty';
actual = mergeArrays([5, 6, 7], []);
expected = [5, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = 'both arrays have some numbers';
actual = mergeArrays([2, 4, 6], [1, 3, 7]);
expected = [1, 2, 3, 4, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = 'arrays are different lengths';
actual = mergeArrays([2, 4, 6, 8], [1, 7]);
expected = [1, 2, 4, 6, 7, 8];
assertDeepEqual(actual, expected, desc);

function assertDeepEqual(a, b, desc) {
    const aStr = JSON.stringify(a);
    const bStr = JSON.stringify(b);
    if (aStr !== bStr) {
        console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
    } else {
        console.log(`${desc} ... PASS`);
    }
}