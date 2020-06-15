function remove(head, val) {
    while (head && head.val === val) {
        head = head.next;
    }
    let curr = head, prev = null;

    while (curr !== null) {
        if (curr.val === val) {
            prev.next = curr.next;
            curr = curr.next;
            continue;
        }
        prev = curr;
        curr = curr.next;
    }
    return head;
}