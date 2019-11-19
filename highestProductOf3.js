function highestProductOf3(arrayOfInts) {

    // Calculate the highest product of three numbers
    if (arrayOfInts.length < 3) {
        throw new Error("Must have at least 3 integers")
    }

    let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
    let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);

    let highestOf2 = arrayOfInts[0] * arrayOfInts[1];
    let lowestOf2 = arrayOfInts[0] * arrayOfInts[1];

    let highestOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

    for (let i = 2; i < arrayOfInts.length; i++) {
        let currentInt = arrayOfInts[i];

        highestOf3 = Math.max(highestOf3, currentInt * highestOf2, currentInt * lowestOf2);

        highestOf2 = Math.max(highestOf2, highest * currentInt, lowest * currentInt);   
        lowestOf2 = Math.min(lowestOf2, lowest * currentInt, highest * currentInt);   

        highest = Math.max(highest, currentInt);
        lowest = Math.min(lowest, currentInt);
    }

    return highestOf3;
}




// Tests

let desc = 'short array';
let actual = highestProductOf3([1, 2, 3, 4]);
let expected = 24;
assertEqual(actual, expected, desc);

desc = 'longer array';
actual = highestProductOf3([6, 1, 3, 5, 7, 8, 2]);
expected = 336;
assertEqual(actual, expected, desc);

desc = 'array has one negative';
actual = highestProductOf3([-5, 4, 8, 2, 3]);
expected = 96;
assertEqual(actual, expected, desc);

desc = 'array has two negatives';
actual = highestProductOf3([-10, 1, 3, 2, -10]);
expected = 300;
assertEqual(actual, expected, desc);

desc = 'array is all negatives';
actual = highestProductOf3([-5, -1, -3, -2]);
expected = -6;
assertEqual(actual, expected, desc);

desc = 'error with empty array';
const emptyArray = () => (highestProductOf3([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one number';
const oneNumber = () => (highestProductOf3([1]));
assertThrowsError(oneNumber, desc);

desc = 'error with two numbers';
const twoNumber = () => (highestProductOf3([1, 1]));
assertThrowsError(twoNumber, desc);

function assertEqual(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`)
    }
}

function assertThrowsError(func, desc) {
    try {
        func();
        console.log(`${desc} ... FAIL`);
    } catch (e) {
        console.log(`${desc} ... PASS`);
    }
}