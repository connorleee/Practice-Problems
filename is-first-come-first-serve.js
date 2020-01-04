function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
    //confirm all orders are entered
    let outOrderPointer = 0;
    let inOrderPointer = 0;
    let outOrderMaxPointer = takeOutOrders.length - 1;
    let inOrderMaxPointer = dineInOrders.length - 1;

    for (let i = 0; i < servedOrders.length; i++) {
        const orderUp = servedOrders[i];

        // if (orderUp != takeOutOrders[outOrderPointer] || orderUp != dineInOrders[inOrderPointer]) {
        //     return false;
        // }

        if (outOrderPointer <= outOrderMaxPointer && orderUp === takeOutOrders[outOrderPointer]) {
            outOrderPointer++;
        } else if (inOrderPointer <= inOrderMaxPointer && orderUp === dineInOrders[inOrderPointer]) {
            inOrderPointer++;
        } else {
            return false;
        }
    }

    if(outOrderPointer != takeOutOrders.length || inOrderPointer != dineInOrders.length){
        return false;
    }

    return true;
}







// Tests

let desc = 'both registers have same number of orders';
let actual = isFirstComeFirstServed([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]);
assertEquals(actual, true, desc);

desc = 'registers have different lengths';
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = 'one register is empty';
actual = isFirstComeFirstServed([], [2, 3, 6], [2, 3, 6]);
assertEquals(actual, true, desc);

desc = 'served orders is missing orders';
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = 'served orders has extra orders';
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 3, 5, 6, 8]);
assertEquals(actual, false, desc);

desc = 'one register has extra orders';
actual = isFirstComeFirstServed([1, 9], [7, 8], [1, 7, 8]);
assertEquals(actual, false, desc);

desc = 'one register has unserved orders';
actual = isFirstComeFirstServed([55, 9], [7, 8], [1, 7, 8, 9]);
assertEquals(actual, false, desc);

function assertEquals(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
}