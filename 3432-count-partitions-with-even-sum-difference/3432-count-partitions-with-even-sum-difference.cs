public class Solution {
    public int CountPartitions(int[] nums) {
        int lsum = 0;
        int rsum = 0;
        int count = 0;
        for(int i = 0;i < nums.Length - 1;i++){
            lsum += nums[i];
            for(int j = i + 1;j < nums.Length;j++){
                rsum += nums[j];
            }
            if((lsum - rsum) % 2 == 0){
                count++;
            }
            rsum = 0;
        }
    return count;
    }
}