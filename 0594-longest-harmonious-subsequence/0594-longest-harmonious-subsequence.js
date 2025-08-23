/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    let maxLen = 0
    let l = 0
    nums.sort((a, b) => a - b)
    for (let r = 0; r < nums.length; r++) {
        while (nums[r] - nums[l] > 1) {
            l++
        }
        if (nums[r] - nums[l] == 1) {
            maxLen = Math.max(maxLen, r - l + 1)
        }
    }
    return maxLen

};