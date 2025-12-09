/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
    let count = 0;
    let ans = String(num)
    for (let i = 0; i < ans.length; i++) {
        if (num % ans[i] === 0){
            count++;
        }
    }
    return count

};