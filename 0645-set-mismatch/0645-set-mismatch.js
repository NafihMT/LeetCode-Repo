/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let dup = 0;
    let missed = 0;
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            dup = nums[i]
        }
    }
    for (let j = 1; j <= nums.length;j++){
        if(!nums.includes(j)){
            missed = j;
            break;
            
        }
    }
    return [dup,missed]
};