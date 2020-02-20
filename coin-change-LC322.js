/**
 if(amount === 0) return 0;
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    if (coins[0] > amount) return -1;
    coins.sort((a, b) => b - a); //sorts coins decending
    let minCoins = Infinity;

    function combo(amount, index, count) {
        if (index >= coins.length) return;

        for (let i = Math.floor(amount / coins[index]); i >= 0; i--) { //starts the loop at the maximum number of times the current coin can be used.
            let newCount = count + i;
            let remainder = amount - coins[index] * i;

            if (remainder > 0 && newCount < minCoins) { //recursively call combo function if there is a remainder. Short circuit if we are already over the current minimum number of coins.
                combo(remainder, index + i, newCount);
            } else if (newCount < minCoins) {
                minCoins = newCount;
            } else if (newCount <= minCoins - 1) { //Short circuit if we are already over the current minimum number of coins.
                break;
            }
        }
    }

    combo(amount, 0, 0);

    return minCoins == Infinity ? -1 : minCoins;
};

console.log(coinChange([1, 2, 5], 11))
console.log(coinChange([1, 2, 5], 0))