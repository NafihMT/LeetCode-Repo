/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim()
    const arr = s.split(" ")
    let last = arr.at(-1)
    return last.length
};