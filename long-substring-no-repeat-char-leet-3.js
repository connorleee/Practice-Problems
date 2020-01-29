/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    if (s.length === 0) return 0

    let max = 0;
    let currentLetters = new Map(); // (letter, recent index)

    for (let i = 0, j = 0; i < s.length; i++) {
        const el = s[i];

        if (currentLetters.has(el)) {
            j = Math.max(currentLetters.get(el), j);
        }

        max = Math.max(max, i - j + 1);
        currentLetters.set(el, i + 1);
    }

    return max;
};

console.log(lengthOfLongestSubstring("dvdf"))