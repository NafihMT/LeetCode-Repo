/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function (k) {
    let fib = [1, 1];

    for (let i = 2; fib[fib.length - 1] <= k; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    let count = 0;

    let dup = k;

    let i = fib.length - 1;
    while (dup!= 0) {
        if (fib[i] <= dup) {
            dup = dup - fib[i];
            count++;
  
        }
        i--;
    }
    return count;
};