/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let l = 0;
    let r = s.length - 1;
    s = s.split("")
    let vowels = ['a', 'e', 'i', 'o', 'u']
    while (l < r) {
        if (vowels.includes(s[l].toLowerCase()) && vowels.includes(s[r].toLowerCase())) {
            let temp = s[l]
            s[l] = s[r]
            s[r] = temp
            l++;
            r--;

        }
        else if (vowels.includes(s[l].toLowerCase()) && !vowels.includes(s[r].toLowerCase())) {
            r--
        }
        else {
            l++
        }
    }
    return s.join("")

};