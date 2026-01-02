class Solution(object):
    def repeatedNTimes(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        
        ht = {}
        for i in range(len(nums)):
            if(nums[i] in ht):
                ht[nums[i]] += 1
            else:
                ht[nums[i]] = 1
        res = max(ht, key=ht.get)   # To get the Key
        return res
