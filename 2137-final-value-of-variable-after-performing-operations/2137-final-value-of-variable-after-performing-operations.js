/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let count = 0;
    for (i of operations) {
        if (i === '++X' || i === 'X++') {
            count++
        }
        if (i === '--X' || i === 'X--'){
            count--
        }
    }
    return count

};