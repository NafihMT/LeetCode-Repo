/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let diff = 0;
    let l = 0;
    let r = 1;
    for (let i = 0; i < prices.length; i++) {
        if (prices[l] > prices[r]) {
            l=r
            r++
            
        }
        else if (prices[l] <= prices[r]) {
            if (diff < Math.abs(prices[l] - prices[r])) {
                diff = Math.abs(prices[l] - prices[r])
            }
            r++
        }
    }
    return diff

};