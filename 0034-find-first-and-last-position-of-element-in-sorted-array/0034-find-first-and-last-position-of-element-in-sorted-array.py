class Solution(object):
    def searchRange(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        l = 0
        r = len(nums) - 1
        res = [-1,-1]

        # while(l<=r):
        #     mid = (l+r)//2
        #     if(nums[mid] == target):
        #         res[0] = mid
        #         res[1] = mid + 1
        #         return res
        #     elif(nums[mid] < target):
        #         l = mid + 1
        #     else:
        #         r = mid - 1
        # return res

        while(l <= r):
            if(nums[l] == nums[r] and nums[r] == target):
                return [l,r]
            elif(nums[l] == target and nums[r] != target):
                r -= 1
            elif(nums[r] ==target and nums[l] != target):
                l += 1
            else:
                l += 1
                r -= 1
        return res



            

