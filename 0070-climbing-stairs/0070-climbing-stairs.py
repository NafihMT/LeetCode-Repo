class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        cache = {}
        def ways(x):
            if(x == 0 or x == 1):
                return 1
            if x in cache:
                return cache[x]
            cache[x] = ways(x - 1) + ways(x - 2)

            return cache[x]

        return ways(n)

    