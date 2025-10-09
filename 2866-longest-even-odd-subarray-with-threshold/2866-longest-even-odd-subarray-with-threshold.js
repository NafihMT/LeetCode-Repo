/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function (nums, threshold) {
    let maxLen = 0;
    let currentLen = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > threshold) {
            currentLen = 0;
            continue
        }
        if (currentLen === 0) {
            if (nums[i] % 2 === 0) {
                currentLen = 1
            }
            else {
                currentLen = 0
            }
        }
        else {
            if ((nums[i] % 2) !== (nums[i - 1] % 2)) {
                currentLen++
            }
            else {
                currentLen = (nums[i] % 2 === 0) ? 1 : 0
            }
        }
        maxLen = Math.max(maxLen, currentLen)

    }
    return maxLen
};