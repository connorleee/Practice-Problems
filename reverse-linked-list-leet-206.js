const reverseList = function(head) {
    let previousNode = null;

    let currentNode = head;

    while(currentNode !== null) {
        let next = currentNode.next;

        currentNode.next = previousNode;

        previousNode = currentNode;

        currentNode = next;
    }

    return previousNode;
}
