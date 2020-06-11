function mergeTwoLists(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    let head = new ListNode(null, null),
        prev = new ListNode(null, null),
        ln1,
        ln2;

    prev = head;

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            ln1 = new ListNode(l1.val);
            prev.next = ln1;
            prev = ln1;
            l1 = l1.next;
        } else {
            ln2 = new ListNode(l2.val);
            prev.next = ln2;
            prev = ln2;
            l2 = l2.next;
        }

        if (l1 === null) prev.next = l2;
        if (l2 === null) prev.next = l1;

        return head.next;
    }
}

function mergeTwoListsRec(l1, l2) {
    let list = helper(l1, l2);
    return list;
}

function helper(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    if (l1.val < l2.val) {
        let val = l1.val;
        l1 = l1.next;
        return new ListNode(val, helper(l1, l2));
    } else {
        let val = l2.val;
        l2 = l2.next;
        return new ListNode(val, helper(l1, l2));
    }
}

function mergeTwoListsIt(l1, l2) {
    let result = new ListNode(),
        resultHead = result;
        
    while (l1 && l2) {
        if (l1.val < l2.val) {
            result.next = new ListNode(l1.val);
            result = result.next;
            l1 = l1.next;
        } else {
            result.next = new ListNode(l2.val);
            result = result.next;
            l2 = l2.next;
        }
    }

    if (l1 === null) result.next = l2;
    if (l2 === null) result.next = l1;

    return resultHead.next;
}