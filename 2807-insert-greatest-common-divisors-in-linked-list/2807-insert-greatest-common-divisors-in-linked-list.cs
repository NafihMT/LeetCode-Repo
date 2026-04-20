/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode InsertGreatestCommonDivisors(ListNode head) {
        if(head == null || head.next == null) return head;

        ListNode curr = head;

        while(curr.next != null){

            int gcdVal = getGcd(curr.val, curr.next.val);

            ListNode newNode = new ListNode(gcdVal, curr.next);
            curr.next = newNode;
            curr = newNode.next;
        }
        return head;
    }

    private int getGcd(int a, int b){
        while(b != 0){
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}