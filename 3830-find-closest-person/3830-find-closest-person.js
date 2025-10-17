/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {

    // let minimum = Math.min(Math.abs(x - z), Math.abs(y - z))
    // if (minimum === Math.abs(x - z) && Math.abs(x - z) !== Math.abs(y - z)) {
    //     return 1
    // }
    // else if (minimum === Math.abs(y - z) && Math.abs(x - z) !== Math.abs(y - z)) {
    //     return 2
    // }
    // else {
    //     return 0
    // }

    if (Math.abs(x - z) < Math.abs(y - z)) return 1
    else if (Math.abs(x - z) > Math.abs(y - z)) return 2
    else return 0

};