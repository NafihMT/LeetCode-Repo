/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let consonant = {};
    let vowel = {};
    let maxVowel = 0;
    let maxConso = 0;


    for (let i of s) {
        if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u') {
            vowel[i] = (vowel[i] || 0) + 1
        }
        else {
            consonant[i] = (consonant[i] || 0) + 1
        }

    }
    maxVowel = Math.max(maxVowel,...Object.values(vowel))
    maxConso = Math.max(maxConso,...Object.values(consonant))
    return maxVowel + maxConso

};