public class Solution {
    public int SubarraySum(int[] nums, int k) {
        Dictionary<int,int> ht = new Dictionary<int,int>();
        ht.Add(0,1);
        int sum = 0;
        int count = 0;

        for(int i=0;i<nums.Length;i++){
            sum += nums[i];
            if(ht.ContainsKey(sum - k)){
                count += ht[sum - k];
            }
            ht[sum] = ht.GetValueOrDefault(sum,0) + 1;
        } 

        Console.WriteLine(ht[0]);
        return count;
    }
}