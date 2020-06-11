function deleteDuplicates(head) {
    let curr = head,
        prev,
        hashTable = {};

    while (curr !== null) {
        if (!hashTable[curr.val]) {
            hashTable[curr.val] = true;
            prev = curr;
        } else {
            prev.next = curr.next;
            curr = prev;
        }

        curr = curr.next;
    }

    return head;
}