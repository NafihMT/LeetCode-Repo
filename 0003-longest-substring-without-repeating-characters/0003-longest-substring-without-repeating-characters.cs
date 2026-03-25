public class Solution {
    public int LengthOfLongestSubstring(string s) {
        HashSet<char> hs = new HashSet<char>();
        int max = 0;
        int l = 0;

        for(int r = 0; r < s.Length; r++){
            while(hs.Contains(s[r])){
                hs.Remove(s[l]);
                l++;
            }
            hs.Add(s[r]);
            max = Math.Max(max, hs.Count);
        }
        return max;
    }
}