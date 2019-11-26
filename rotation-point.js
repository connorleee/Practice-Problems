function findRotationPoint(words) {

    // Find the rotation point in the vector
    let firstWord = words[0];

    let floorIndex = 0;
    let ceilIndex = words.length - 1;

    while (floorIndex < ceilIndex) {
        let distance = ceilIndex - floorIndex;
        let middle = Math.floor(distance / 2);
        let guessIndex = floorIndex + middle;

        if (words[guessIndex] >= firstWord) {
            floorIndex = guessIndex;
        } else {
            ceilIndex = guessIndex;
        }

        if (floorIndex + 1 === ceilIndex){
            break;
        }
    }

    return ceilIndex;
}





// Tests

let desc = 'small array';
let actual = findRotationPoint(['cape', 'cake']);
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'medium array';
actual = findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple']);
expected = 4;
assertEquals(actual, expected, desc);

desc = 'large array';
actual = findRotationPoint(['ptolemaic', 'retrograde', 'supplant',
    'undulate', 'xenoepist', 'asymptote',
    'babka', 'banoffee', 'engender',
    'karpatka', 'othellolagkage']);
expected = 5;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
}