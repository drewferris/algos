function oddEvenList(head) {
    if (!head) return head;

    let odd = head,
        even = head.next;

    while (odd && odd.next) {
        let tmp = odd.next;
        odd.next = odd.next.next;
        if (odd.next) {
            odd = odd.next;
            tmp.next = odd.next;
        }
    }

    odd.next = even;

    return head;
}