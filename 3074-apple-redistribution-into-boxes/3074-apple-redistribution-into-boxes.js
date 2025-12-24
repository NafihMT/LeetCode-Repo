/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple, capacity) {
    capacity.sort((a, b) => b - a);
    let sum = 0;
    for (let i of apple) {
        sum += i
    }
    let used = 0
    for (let i = 0; i < capacity.length; i++) {
        sum -= capacity[i]
        used++
        if (sum <= 0) {
            return used
        }
    }

};