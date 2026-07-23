class Solution(object):
    def nextGreaterElement(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        stack = []
        greater = {}
        for num in nums2:
            while stack and stack[-1] < num:
                smaller = stack.pop()
                greater[smaller] = num
            stack.append(num)
        while(stack):
            greater[stack.pop()] = -1
        
        return [greater[num] for num in nums1]
       
