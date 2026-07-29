public class Solution {
    public int AddDigits(int num) {
        if (num == 0) return 0;
        while(num >= 10){
        int sum = 0;
            while(num > 0){
                sum += num % 10;
                num = num / 10;
                // Console.WriteLine(sum);
                // Console.WriteLine(num);
            }
            num = sum;
        }
        return num;
    }
}