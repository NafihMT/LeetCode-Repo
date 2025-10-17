/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let sumArr = []
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sumArr.push(nums[i] + sum)
        sum += nums[i]
    }
    return sumArr

};