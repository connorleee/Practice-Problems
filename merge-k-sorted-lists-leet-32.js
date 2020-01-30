/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  
    var merge2Lists = function(L1, L2) {
        let dummyHead = new Node(-1);

        let cur = dummyHead;        
        while(L1 && L2) {
            if(L1.val <= L2.val) {
                cur.next = L1;
                L1 = L1.next;
            } else {
                cur.next = L2;
                L2 = L2.next;
            }            

            cur = cur.next;
        }

        if(L1) {
            cur.next = L1;
        }
        if(L2) {
            cur.next = L2;
        }

        return dummyHead.next;
    };
};