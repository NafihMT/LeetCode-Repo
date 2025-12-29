/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
    let count = 0;
    for (let i of s) {
        if (i === letter) {
            count++
        }
    }
    // console.log(count)
    return Number(Math.floor((count / s.length) * 100).toFixed(2))


};