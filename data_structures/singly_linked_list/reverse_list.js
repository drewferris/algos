var reverseListIterative = function(head) {
    let curr = head, prev = null, nextTemp;
    while (curr !== null) {
        nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}


var reverseListRec = function (head) {
    if (head === null || head.next === null) return head;
    let p = reverseListRec(head.next);
    head.next.next = head;
    head.next = null;
    return p;
}