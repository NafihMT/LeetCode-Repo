class Solution(object):
    def mostWordsFound(self, sentences):
        """
        :type sentences: List[str]
        :rtype: int
        """
        
        ht = {}

        for i in range(len(sentences)):
            ht[i] = len(sentences[i].split())
            # print(ht)

        return max(ht.values())