/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let words = s
        .split(" ")
        .map(w => w.split("").reverse().join(""))
        .join(" ")
    return words

};