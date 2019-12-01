
function fib(n) {
    // Compute the nth Fibonacci number

    // Base case is negative
    if (n < 0) {
        throw new Error("can't have a fibonacci series for a negative number")
    }

    // Base case is 0 or 1
    if (n <= 1) {
        return n;
    }

    // All other cases
    let currentFibNum = 2;
    let prevFib = 1;
    let prev2Fib = 0;
    let result = 1;

    while(currentFibNum <= n){
        result = prevFib + prev2Fib;
        
        currentFibNum += 1;
        prev2Fib = prevFib;
        prevFib = result;
    }

    return result;
}


// Tests

let desc = 'zeroth fibonacci';
let actual = fib(0);
let expected = 0;
assertEqual(actual, expected, desc);

desc = 'first fibonacci';
actual = fib(1);
expected = 1;
assertEqual(actual, expected, desc);

desc = 'second fibonacci';
actual = fib(2);
expected = 1;
assertEqual(actual, expected, desc);

desc = 'third fibonacci';
actual = fib(3);
expected = 2;
assertEqual(actual, expected, desc);

desc = 'fifth fibonacci';
actual = fib(5);
expected = 5;
assertEqual(actual, expected, desc);

desc = 'tenth fibonacci';
actual = fib(10);
expected = 55;
assertEqual(actual, expected, desc);

desc = 'negative fibonacci';
const negativeFib = () => (fib(-1));
assertThrowsError(negativeFib, desc);

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