var nextLargerNodes = function(head) {
    if (!head) return [];
    if (!head.next) return[0];

    const arr = [];
    
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    
    const stack = [];
    const ret = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
            ret[stack.pop()] = arr[i];
        }
        stack.push(i);
    }

    return ret;
};

