/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    coins.sort((a,b) => a - b);

    let total = 0;
    let count = 0;

    if(coins[0] > amount) return -1;
    
    for(let i = coins.length - 1; i >= 0; i--) {
        while(total + coins[i] < amount) {
            total += coins[i];
            count++;
        }
    }

    if(total !== amount) return -1;

    return count;
};