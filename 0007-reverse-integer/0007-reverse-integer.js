/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

    let reverse = parseInt(
        x.toString().split('').reverse().join('')
        ) * Math.sign(x)
    if (reverse < Math.pow(-2, 31) || reverse > Math.pow(2, 31) - 1) {
        return 0
    }
    return reverse
};