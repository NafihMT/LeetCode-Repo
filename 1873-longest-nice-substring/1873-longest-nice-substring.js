/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
    if (s.length < 2) return "";

    const charSet = new Set(s);

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (!charSet.has(ch.toLowerCase()) || !charSet.has(ch.toUpperCase())) {
            const left = longestNiceSubstring(s.substring(0, i));
            const right = longestNiceSubstring(s.substring(i + 1));
            return left.length >= right.length ? left : right;
        }
    }

    return s;
};
