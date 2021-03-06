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
    if(lists.length === 0) return null

    var merge2Lists = function(L1, L2) {
        let dummyHead = new ListNode(-1);

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

    let result = lists.pop();
    
    while(lists.length) {
        let nextNode = lists.pop();

        result = merge2Lists(result, nextNode);
    }

    return result;
};