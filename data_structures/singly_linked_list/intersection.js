var getIntersectionNode = function(headA, headB) {
    let firstPointer = headA, secondPointer = headB;
    while(firstPointer !== secondPointer) {
        firstPointer = firstPointer === null ? headB : firstPointer.next;
        secondPointer = secondPointer === null ? headA : secondPointer.next;
    }
    return firstPointer;
};