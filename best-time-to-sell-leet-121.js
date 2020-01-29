/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let max = 0;
    let buy = prices[0];
    
    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];
        
        if(price < buy) {
            buy = price;
        } else {
            max = Math.max(max, price - buy);
        }
    }

    return max;
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))