/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    // let pivotPosi = 

    const smaller = []
    const larger = []
    const piv = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            smaller.push(nums[i])
        }
        else if (nums[i] > pivot) {
            larger.push(nums[i])
        }
        else if (nums[i] === pivot){
            piv.push(nums[i])
        }
    }

    return [...smaller,...piv, ...larger]

    // nums.sort((a, b) => a - b)
    // return nums
};