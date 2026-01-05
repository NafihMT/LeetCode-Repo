class Solution(object):
    def fib(self, n):
        """
        :type n: int
        :rtype: int
        """
        # if(n <= 1):
        #     return n
        
        # a = 0
        # b = 1
        # for i in range(2, n + 1):
        #     a , b = b , a + b
        # return b

        cache = {}
        def helper(n):
            if(n == 0):
                return 0
            if(n == 1):
                return 1

            if(n in cache):
                return cache[n]
            cache[n] = helper(n - 1) + helper(n - 2)
        
            return cache[n]
            
        return helper(n)