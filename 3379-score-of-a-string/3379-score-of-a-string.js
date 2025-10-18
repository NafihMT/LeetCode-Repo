/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
    let diff = 0
    let sum = 0;

    for (let i = 0; i < s.length - 1; i++) {
        diff = Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1))
        sum += diff
    }
    return sum

};