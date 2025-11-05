/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    let l = 0;
    let r = word.indexOf(ch);
    let rvrs = []
    while (l <= r) {
        rvrs.push(word[r])
        r--;
    }
    for (let i = word.indexOf(ch) + 1; i < word.length; i++) {
        rvrs.push(word[i])
    }

    return rvrs.join('')

};