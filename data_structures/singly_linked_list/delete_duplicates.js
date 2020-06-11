function deleteDuplicates(head) {
    let curr = head,
        prev, //not needed if list is sorted, hashTable as well. All that is needed is to compare curr.next.val to curr.val and if equal replace.
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