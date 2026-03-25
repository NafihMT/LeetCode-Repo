public class Solution {
    public int LongestConsecutive(int[] nums) {
        HashSet<int> s = new HashSet<int>(nums);
        int longest = 0;
        int current = 0;
        int streak = 0;
        foreach(var i in s){
            if(!s.Contains(i - 1)){
                current = i;
                streak = 1;
            }
            while(s.Contains(current + 1)){
                current++;
                streak++;
            }
            longest = Math.Max(longest, streak);
        }
        return longest;

    }
}