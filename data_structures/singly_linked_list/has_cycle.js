function hasCycle(head) {
    if (!head || !head.next) return 0;
    let fast = slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) return 1;
    }
    return 0;
}