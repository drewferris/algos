function intersection(node1, node2) {
    let curr1 = node1, curr2 = node2;

    while (curr1 !== curr2) {
        curr1 = curr1 === null ? node2 : curr1.next;
        curr2 = curr2 === null ? node1 : curr2.next;
    }

    return curr1;
}