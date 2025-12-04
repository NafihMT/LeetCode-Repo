/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let bit = n.toString(2).padStart(32,'0')
    let res = bit.split('').reverse().join('')
    return parseInt(res,2)
};