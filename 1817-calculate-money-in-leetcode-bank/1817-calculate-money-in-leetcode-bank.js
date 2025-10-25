/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let days = n % 7
    let week = Math.floor(n / 7);
    const totalWeeks = 28 * week + (7 * (week * (week - 1))) / 2;
    const remaining = (days * (2 * (week + 1) + (days - 1))) / 2;
    return totalWeeks + remaining
};