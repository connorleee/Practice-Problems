let addTwoNumbers = function(l1, l2) {
    let currentNode = new ListNode(0);
    let result = currentNode;

    let sum = 0;

    while(l1 || l2) {
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        currentNode.next = new ListNode(sum % 10);
        currentNode = currentNode.next;

        sum = sum >= 10 ? 1 : 0;
    }

    if(sum) {
        currentNode.next = new ListNode(sum);
    }

    return result.next;
}