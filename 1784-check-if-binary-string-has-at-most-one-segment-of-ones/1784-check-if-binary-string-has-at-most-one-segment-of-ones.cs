public class Solution {
    public bool CheckOnesSegment(string s) {
        // return !s.Contains("01");

        bool zeroFound = false;
        for(int i = 1; i < s.Length; i++){
            if(s[i] == '0'){
                zeroFound = true;
            }
            if(zeroFound && s[i] == '1'){
                return false;
            }
        }
        return true;
    }
}