/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(!head || !head.next) return head;

    let oddList = new ListNode(-1);
    let evenList = new ListNode(-1);

    let oddStart = oddList;
    let evenStart = evenList;

    let index = 1;

    let current = head;

    while(current){
        if(index % 2 === 1){
            oddList.next = current;
            oddList = oddList.next;
        }else{
            evenList.next = current;
            evenList = evenList.next;
        }

        current = current.next;
        index += 1;
    }
    
    evenList.next = null;
    oddList.next = evenStart.next;

    return oddStart.next;

};

// Time complexity : O(n)
// Space complexity : O(n)
// Tags : Linked List