/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    
    let maxStr = ""
    for(let i=0;i<num.length;i++){
        let window = num.substring(i,i+3);
        if(window[0]==window[1] && window[1] == window[2]){
            if(window > maxStr){
                maxStr = window
            }
        }
    }
    return maxStr
};