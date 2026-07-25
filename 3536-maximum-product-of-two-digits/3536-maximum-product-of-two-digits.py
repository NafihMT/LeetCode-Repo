class Solution(object):
    def maxProduct(self, n):
        """
        :type n: int
        :rtype: int
        """
        # n = [int(d) for d in str(n)]
        # n.sort()
        m = sorted(str(n))
        return int(m[-1]) * int(m[-2])
        