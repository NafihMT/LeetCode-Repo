/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    nums.sort((a, b) => a - b);
    let res = []
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            res.push(nums[i]);
        }
    }
    return res
};