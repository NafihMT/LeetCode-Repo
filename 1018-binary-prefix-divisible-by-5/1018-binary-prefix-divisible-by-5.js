/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    let res = [];
    let prefix = 0;

    for (let bit of nums) {
        prefix = (prefix * 2 + bit) % 5;
        res.push(prefix === 0);
    }

    return res;
};
