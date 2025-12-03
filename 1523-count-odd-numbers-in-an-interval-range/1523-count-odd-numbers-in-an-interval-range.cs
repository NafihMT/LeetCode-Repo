public class Solution {
    public int CountOdds(int low, int high) {
        int count = 0;
        while(low <= high){
            if(low % 2 != 0){
                count++;
                low +=2;
            }
            else{
                low++;
            }
        }
        return count;
        
    }
}