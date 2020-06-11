function middleNode(head) {
    let slow = head, fast = head, mid;

    while (fast !== null) {
        if (fast.next === null) {
            mid = slow;
            fast = fast.next;
        } else {
            fast = fast.next.next;
        }
        slow = slow.next;
    }

    if (!mid) {
        mid = slow;
    }

    return mid;
}

function middleNodeOpt(head) {
    slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}