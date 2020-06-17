function addTwoNumbers(l1, l2) {
    let stack1 = [],
        stack2 = [];

    while (l1 !== null) {
        stack1.push(l1.val);
        l1 = l1.next;
    }

    while (l2 !== null) {
        stack2.push(l2.val);
        l2 = l2.next;
    }

    let curr = new ListNode(0),
         sum = 0;

    while (stack1.length || stack2.length) {
        if (stack1.length) sum += stack1.pop();
        if (stack2.length) sum += stack2.pop();

        curr.val = sum % 10;
        let head = new ListNode(Math.floor(sum / 10));
        head.next = curr;
        curr = head;
        sum = Math.floor(sum / 10);
    }

    if (curr.val === 0) {
        return curr.next;
    } else {
        return curr;
    }
}