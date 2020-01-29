/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head) return null;

    const map = new Map();

    //populate hash map
    let cur = head;
    while(cur !== null) {
        map.set(cur, new Node(cur.val));

        cur = cur.next;
    }

    cur = head;
    while(cur !== null) {
        // map.set(map.get(cur).next, map.get(cur.next));
        // map.set(map.get(cur).random, map.get(cur.random));

        map.get(cur).next = map.get(cur.next) || null;
        map.get(cur).random = map.get(cur.random) || null;

        cur = cur.next;
    }

    return map.get(head);
};