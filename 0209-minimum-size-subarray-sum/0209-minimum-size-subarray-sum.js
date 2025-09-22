/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let sum = 0;
    let l = 0;
    minLen = Infinity
    for (let r = 0; r < nums.length; r++) {
        sum += nums[r]
        while (sum >= target) {
            minLen = Math.min(minLen, r - l + 1);
            sum -= nums[l];
            l++
        }
    }
    return minLen === Infinity ? 0 : minLen

};