function numComponents(head, G) {
    const set = new Set(G);
    let pointer = head,
        stack = [],
        ans = 0;

    while (pointer) {
        if (set.has(pointer.val)) {
            stack.push(pointer.val);
        } else {
            if (stack.length) {
                ans++;
                stack = [];
            }
        }
        pointer = pointer.next;
    }

    return (stack.length) ? ans + 1 : ans;
}
