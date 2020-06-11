var reverseListIterative = function(head) {
    let curr = head, prev = null, nextTemp;
    while (curr !== null) {
        nextTemp = curr.next; // the current's next value in temp variable
        curr.next = prev; // set current's next value to the previous node
        prev = curr; // reset previous to current node
        curr = nextTemp; // reset current to the next node in the list saved in the temp variable
    }
    return prev; // return new list
}


var reverseListRec = function (head) {
    if (head === null || head.next === null) return head;
    let p = reverseListRec(head.next);
    head.next.next = head;
    head.next = null;
    return p;
}