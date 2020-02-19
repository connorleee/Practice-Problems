const longestPalindrome = function (s) {
    let longest = "";

    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < 2; j++) {
            let left = i;
            let right = i + j;

            while(left >= 0 && right <= s.length && s[left] === s[right]) {
                left--;
                right++;
            }

            if(longest < right - left) {
                longest = s.substring(left, right);
            }
        }
    }

    return longest;
}