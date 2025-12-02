/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
    let count = 0;
    // for (let i = low; i <= high; i++) {
    //     if (i % 2 !== 0) {

    //     }
    // }
    while (low <= high){
        if (low % 2 == 0) {
            low++
        }
        else{
            count++
            low += 2
        }
    }
    return count

};