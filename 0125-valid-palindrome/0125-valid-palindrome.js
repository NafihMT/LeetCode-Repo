/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let newStr = ""
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i);
        if ((code >= 65 && code <= 90) ||
        (code >= 97 && code <= 122) ||
        (code >= 48 && code <= 57)) {
            newStr += s[i].toLowerCase()
        }
    }
    let l = 0;
    let r = newStr.length - 1;

    while (l < r) {
        if (newStr[l] === newStr[r]) {
            l++;
            r--;
        }
        else {
            return false
        }
    }
    return true
};