function getClosingParen(sentence, openingParenIndex) {

    // Find the position of the matching closing parenthesis
    // let open = [];
    // let closed = [];

    // for (let i = 0; i < sentence.length; i++) {
    //     const el = sentence[i];

    //     if (el === "(") {
    //         open.push(i);
    //     } else if (el === ")") {
    //         closed.push(i);
    //     }
    // }

    // if (open.length < 1) {
    //     return 0
    // } else if (open.length != closed.length) {
    //     throw new Error ("error") 
    // } else {
    //     let closedIndex = open.indexOf(openingParenIndex);

    //     return closed[closedIndex];
    // }

    let openParens = 0;

    for (let position = openingParenIndex + 1; position < sentence.length; position++) {
        const char = sentence[position];

        if (char === "(") {
            openParens += 1;
        } else if (char === ")") {
            if (openParens === 0) {
                return position;
            }

            openParens -= 1;
        }
    }
    
    throw new Error("error")
}




// Tests

let desc = 'all openers then closers';
let actual = getClosingParen('((((()))))', 2);
let expected = 7;
assertEqual(actual, expected, desc);

desc = 'mixed openers and closers';
actual = getClosingParen('()()((()()))', 5);
// open = [0, 2, 4, 5, 6, 8]
// closed = [1, 3, 7, 9, 10, 11]
expected = 10;
assertEqual(actual, expected, desc);

desc = 'no matching closer';
const noCloser = () => (getClosingParen('()(()', 2));
assertThrowsError(noCloser, desc);

function assertEqual(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
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