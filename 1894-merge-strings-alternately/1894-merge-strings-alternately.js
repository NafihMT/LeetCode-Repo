/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let merge = []
    let length = Math.max(word1.length, word2.length)
    for (let i = 0; i < length; i++) {
        if (i < word1.length) {
            merge.push(word1[i])
        }
        if (i < word2.length) {
            merge.push(word2[i])
        }
    }
    return merge.join("")
};