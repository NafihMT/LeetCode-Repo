public class Solution {
    public int NumJewelsInStones(string jewels, string stones) {
        var set = new HashSet<char>(jewels);
        int count = 0;
        foreach(char c in stones){
            if(set.Contains(c)){
                count++;
            }
        }
        return count;
    }
}