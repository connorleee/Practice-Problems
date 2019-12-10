function findRectangularOverlap(rect1, rect2) {
    const x1 = rect1.leftX;
    const x2 = rect2.leftX;
    const y1 = rect1.bottomY;
    const y2 = rect2.bottomY;
    const w1 = rect1.width;
    const w2 = rect2.width;
    const h1 = rect1.height;
    const h2 = rect2.height;

    const xOverlap = findRangeOverlap(x1, w1, x2, w2);
    const yOverlap = findRangeOverlap(y1, h1, y2, h2);

    if(!xOverlap.range || !yOverlap.range ){
        return { leftX: null, bottomY: null, width: null, height: null };
    }

    return {
        leftX: xOverlap.start,
        bottomY: yOverlap.start, 
        width: xOverlap.range,    
        height: yOverlap.range 
    };
}

function findRangeOverlap(x1, w1, x2, w2) {
    let highestStart = Math.max(x1, x2);
    let lowestEnd = Math.min(x1 + w1, x2 + w2);

    if (lowestEnd <= highestStart) {
        return { start: null, range: null };
    }

    let overlap = lowestEnd - highestStart;

    return { start: highestStart, range: overlap };
}



// Tests

let desc = 'overlap along both axes';
let rect1 = { leftX: 1, bottomY: 1, width: 6, height: 3 };
let rect2 = { leftX: 5, bottomY: 2, width: 3, height: 6 };
let actual = findRectangularOverlap(rect1, rect2);
let expected = { leftX: 5, bottomY: 2, width: 2, height: 2 };
assertObjectEquals(actual, expected, desc);

desc = 'one rectangle inside another';
rect1 = { leftX: 1, bottomY: 1, width: 6, height: 6 };
rect2 = { leftX: 3, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 3, bottomY: 3, width: 2, height: 2 };
assertObjectEquals(actual, expected, desc);

desc = 'both rectangles the same';
rect1 = { leftX: 2, bottomY: 2, width: 4, height: 4 };
rect2 = { leftX: 2, bottomY: 2, width: 4, height: 4 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 2, bottomY: 2, width: 4, height: 4 };
assertObjectEquals(actual, expected, desc);

desc = 'touch on horizontal edge';
rect1 = { leftX: 1, bottomY: 2, width: 3, height: 4 };
rect2 = { leftX: 2, bottomY: 6, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

desc = 'touch on vertical edge';
rect1 = { leftX: 1, bottomY: 2, width: 3, height: 4 };
rect2 = { leftX: 4, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

desc = 'touch at a corner';
rect1 = { leftX: 1, bottomY: 1, width: 2, height: 2 };
rect2 = { leftX: 3, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

desc = 'no overlap';
rect1 = { leftX: 1, bottomY: 1, width: 2, height: 2 };
rect2 = { leftX: 4, bottomY: 6, width: 3, height: 6 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

function assertObjectEquals(a, b, desc) {
    const objectA = JSON.stringify(a, Object.keys(a).sort());
    const objectB = JSON.stringify(b, Object.keys(b).sort());
    if (objectA !== objectB) {
        console.log(`${desc} ... FAIL: ${objectA} != ${objectB}`)
    } else {
        console.log(`${desc} ... PASS`);
    }
}