const longestPalindrome = function (s) {
    let longest = "";

    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < 2; j++) { //this loop of 0 and 1 are to cover the case where there is an even length palindrome
            let left = i;
            let right = i + j;

            while(left >= 0 && right < s.length && s[left] === s[right]) {
                left--;
                right++;
            }

            if(longest < right - left - 1) {
                longest = s.substring(left + 1, right);
            }
        }

        if(Math.ceil(longest.length / 2) >= s.length - i) break;
    }

    return longest;
}