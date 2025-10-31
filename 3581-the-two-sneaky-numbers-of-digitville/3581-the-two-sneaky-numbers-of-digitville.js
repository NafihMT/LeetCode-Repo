/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
    let dupli = []
    let count = {}
    for (let i = 0; i < nums.length; i++) {
        count[nums[i]] = (count[nums[i]] || 0) + 1
    }
    for (let key in count) {
        if (count[key] > 1){
            dupli.push(Number(key))
        }
    }
    return dupli
};