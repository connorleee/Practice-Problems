/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
    if (s == null || s.length < 1) return "";

    let longest = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < 2; j++) {
            let left = i;
            let right = i + j;

            while (left >= 0 && right < s.length && s[left] === s[right]) {
                left--;
                right++;
            }

            if (longest.length < right - left - 1) {
                longest = s.substring(left + 1, right);
            }
        }

        // If no better move exists
        if (Math.ceil(longest.length / 2) >= s.length - i) break;
    }

    return longest;
}

console.log(longestPalindrome("racecar"));
console.log(longestPalindrome("abbc"));
console.log(longestPalindrome("cabbc"));