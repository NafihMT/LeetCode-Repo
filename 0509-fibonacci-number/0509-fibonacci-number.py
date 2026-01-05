class Solution(object):
    def __init__(self):
        self.cache = {}

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

        # cache = {}
        # def helper(n):
        if(n == 0):
            return 0
        if(n == 1):
            return 1

        if(n in self.cache):
            return self.cache[n]
        self.cache[n] = self.fib(n - 1) + self.fib(n - 2)
        
        return self.cache[n]       
        # return helper(n)