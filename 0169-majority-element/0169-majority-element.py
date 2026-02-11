class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        
        nums.sort()
        ht ={}
        for num in nums:
            if num not in ht:
                ht[num] = 1
            else:
                ht[num] += 1
        
        return max(ht, key=ht.get)