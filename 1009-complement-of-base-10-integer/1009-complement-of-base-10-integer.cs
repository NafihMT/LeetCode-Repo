public class Solution {
    public int BitwiseComplement(int n) {
        string bin = Convert.ToString(n,2);
        StringBuilder sb = new StringBuilder();
        foreach(char i in bin){
            if(i == '0'){
                sb.Append('1');
            }
            else{
                sb.Append('0');
            }
        }
        Console.WriteLine(Convert.ToInt32(sb.ToString(),2));
        
        return Convert.ToInt32(sb.ToString(),2);
    }
}