/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
    const temp = []
    let k = temp.push(celsius + 273.15)
    let f = temp.push(celsius * 1.80 + 32.00)
    return temp

};