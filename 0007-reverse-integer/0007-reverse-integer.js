/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

    let reverse = x.toString().split('').reverse().join('')
    let reverseNum = parseInt(reverse)
    if (reverseNum > 2147483647) {
        return 0
    }
    else {

        return reverseNum * Math.sign(x)
    }

};