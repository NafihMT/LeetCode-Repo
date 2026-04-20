public class Solution {
    public bool IsBalanced(string num) {
        int evenSum = 0, oddSum = 0;
        
        for (int i = 0; i < num.Length; i++) {
            if (i % 2 == 0) {
                evenSum += num[i] - '0';
            } else {
                oddSum += num[i] - '0';
            }
            Console.WriteLine(oddSum + evenSum);
        }
        
        return evenSum == oddSum;
    }
}