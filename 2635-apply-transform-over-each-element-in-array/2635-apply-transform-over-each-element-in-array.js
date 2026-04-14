/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        let result = fn(arr[i], i)
        res.push(result)
    }
    return res;
};