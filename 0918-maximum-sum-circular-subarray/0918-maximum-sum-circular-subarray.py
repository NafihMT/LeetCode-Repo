class Solution(object):
    def maxSubarraySumCircular(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        globalMax = nums[0]
        currMax = 0
        total = 0
        currMin = 0
        globalMin = nums[0]

        for num in nums:
            currMax = max(num, currMax + num)
            globalMax = max(currMax, globalMax)

            total += num

            currMin = min(num, currMin + num)
            globalMin = min(currMin, globalMin)

        return max(globalMax, total - globalMin) if globalMax > 0 else globalMax