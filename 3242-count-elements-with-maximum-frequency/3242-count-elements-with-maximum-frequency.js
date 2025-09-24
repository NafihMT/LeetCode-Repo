/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
    let set1 = {}
    for (let i of nums) {
        set1[i] = (set1[i] || 0) + 1
    }
    let maxFreq = Math.max(...Object.values(set1));
    let result = 0;
    for (let count of Object.values(set1)) {
        if (count === maxFreq) {
            result += count;
        }
    }
    return result
};