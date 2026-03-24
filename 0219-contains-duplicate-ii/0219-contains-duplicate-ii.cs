public class Solution {
    public bool ContainsNearbyDuplicate(int[] nums, int k) {
        Hashtable ht = new Hashtable();
        for(int i=0;i<nums.Length;i++){
            if(ht.Contains(nums[i])){
                if(i - (int)ht[nums[i]] <= k){
                    return true;
                }
            }
            ht[nums[i]] = i;
        }
        return false;
    }
}