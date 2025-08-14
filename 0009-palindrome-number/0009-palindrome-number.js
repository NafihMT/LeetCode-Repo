/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num = String(x)
    let rev = ""
    for(let i=num.length-1;i>=0;i--){
        rev += num[i]
    }
    rev = Number(rev)
    if(x === rev){
        return true
    }
    else{
        return false
    }
};