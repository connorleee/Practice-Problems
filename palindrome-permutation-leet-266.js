/**
 * @param {string} s
 * @return {boolean}
 */
const canPermutePalindrome = function (s) {
    if (s.length < 1) throw new Error("no input");

    // set will have: [letter, quantityOfLetter]
    const letterQuantities = new Map();

    for (let i = 0; i < s.length; i++) {
        const el = s[i];
        if (!letterQuantities.has(el)) {
            letterQuantities.set(el, 1)
        } else {
            letterQuantities.set(el, letterQuantities.get(el) + 1);
        }
    }

    //even length string
    if (s.length % 2 === 0) {
        for( let quantity of letterQuantities.values()){
            if(quantity % 2 === 1) return false;
        }
    }

    // odd length string
    if( s.length % 2 === 1) {
        let numOfOddQuantities = 0;

        for( let quantity of letterQuantities.values()) {
            if(quantity % 2 === 1) {
                numOfOddQuantities++;
            }
        }

        if(numOfOddQuantities !== 1) return false;
    }

    return true;
};

console.log(canPermutePalindrome("code"))