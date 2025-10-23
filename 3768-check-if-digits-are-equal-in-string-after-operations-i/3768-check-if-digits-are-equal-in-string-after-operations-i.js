/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function (s) {
    while (s.length > 2) {
        let newStr = ''
        for (let i = 0; i < s.length - 1; i++) {
            newStr += (Number(s[i]) + Number(s[i + 1])) % 10
            // newStr += sum
        }
        s = newStr
    }
    return s[0] === s[1]
};