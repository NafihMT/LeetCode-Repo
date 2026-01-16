class Solution(object):
    def maxDistinct(self, s):
        """
        :type s: str
        :rtype: int
        """
        ht = {}
        count = 0
        for i in range(len(s)):
            if(s[i] not in ht):
                count += 1
            ht[s[i]] = s[i]
        return count
      
        
        