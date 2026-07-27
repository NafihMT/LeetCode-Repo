public class Solution {
    public int MaxProduct(int n) {
        var sorted = n.ToString().OrderBy(c => c).ToArray();
        int len =sorted.Length;
        int n1 = sorted[len - 1] - '0';
        int n2 = sorted[len - 2] - '0';
        return n1 * n2;

    }
}