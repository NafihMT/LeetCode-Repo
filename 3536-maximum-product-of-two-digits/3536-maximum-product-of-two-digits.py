class Solution(object):
    def maxProduct(self, n):
        """
        :type n: int
        :rtype: int
        """
        n = [int(d) for d in str(n)]
        n.sort()
        return int(n[-1] * n[-2])
        