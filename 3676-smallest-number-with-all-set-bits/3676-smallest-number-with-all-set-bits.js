/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function (n) {
    let x = 1

    while (x - 1 < n) {
        x <<= 1         // x*2 double a value 
    }
    return x - 1
};