class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        pairs = {
            ')':'(',
            '}':'{',
            ']':'['            
            }
        stack = []

        for i in s:
            if i in pairs:
                if not stack or stack.pop() != pairs[i]:
                    return False
            else:
                stack.append(i)

        return not stack
        