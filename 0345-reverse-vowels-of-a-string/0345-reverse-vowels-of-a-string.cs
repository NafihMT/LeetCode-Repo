public class Solution {
    public string ReverseVowels(string s) {
        int l = 0;
        int r = s.Length - 1;

        HashSet<char> vowels = new HashSet<char>(){
            'a','e','i','o','u',
            'A','E','I','O','U'
        };

        char[] arr = s.ToCharArray();
        while(l < r){
            while(l < r && !vowels.Contains(arr[l])){
                l++;
            }
            while(l < r && !vowels.Contains(arr[r])){
                r--;
            }
            if(l < r){
                char temp = arr[l];
                arr[l] = arr[r];
                arr[r] = temp;
                
                r--;
                l++;
            }
        }
        return new string(arr);
    }
}