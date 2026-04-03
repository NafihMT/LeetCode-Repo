public class Solution {
    public int SubarraySum(int[] nums, int k) {
        Dictionary<int, int> dict = new Dictionary<int, int>();
        int sum = 0;
        int count = 0;
        dict[0] = 1;

        for(int i=0; i<nums.Length; i++){
            sum += nums[i];
            if(dict.ContainsKey(sum - k)){
                count += dict[sum - k];
            }
            dict[sum] = dict.GetValueOrDefault(sum, 0) + 1;

            foreach(var j in dict){
                Console.WriteLine(j);
            }
            Console.WriteLine("\n");
        }
        return count;
    }
}