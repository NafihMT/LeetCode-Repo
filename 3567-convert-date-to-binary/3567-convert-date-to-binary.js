/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
    let arr = date.split("-");
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(Number(arr[i]).toString(2))
    }
    return res.join("-")
};