class Solution(object):
    def twoSum(self, nums, target):
        ht = {}
        for i in range(len(nums)):
            diff = target - nums[i]

            if(diff in ht):             # Checking the key
                return [ht[diff],i]  

            ht[nums[i]] = i         
        