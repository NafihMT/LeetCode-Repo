/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let res = []
    for(i of nums){
        if(i%2===0){
            res.push(0)
        }
        else{
            res.push(1)
        }
    }
    return res.sort()
};