function getDecimalValue(head) {
    let i = 0, total = 0, queue = [], curr = head;

    while (curr !== null) {
        queue.push(curr.val);
        curr = curr.next;
    }

    while (queue.length) {
        curr = queue.pop();
        total += (curr * Math.pow(2, i));
        i++;
    }

    return total;
}

function getDecimalValueParseInt(head) {
    let curr = head, binary = '';

    while (curr !== null) {
        binary += curr.val;
        curr = curr.next;
    }

    return parseInt(binary, 2);
}