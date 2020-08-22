function Node(data, next) {
    this.data = data === undefined ? null : data;
    this.next = next === undefined ? null : next;
}

const isCircular = list => {
    let map = {},
        curr = list;

    while (curr !== null) {
        if (!map[curr].val) {
            map[curr.val] = [curr];
        } else {
            let nodes = map[curr.val];
            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];
                if (curr === node) return node;
            }
        }
        curr = curr.next;
    }
    return null;
};

// Cracking the Coding Interview solution:

// Logic:

// - When SlowPointer enters the loop after k nodes,  FastPointer is k nodes into the loop (since moves twice for every slow move).
// - Thus FastPointer is LOOP_SIZE - k nodes away from SlowPointer.
// - Once they are in the loop, for every move they move one node closer to eachother. They will meet at LOOP_SIZE - k turns and then be k nodes away from the start of the loop.
// - The head of the list is k nodes from the start of the loop, so move one pointer to the start of the list and keep the other where it is, then move each at same pace they will meet at the start of the looop.

// Implementation:

//  1. Create two pointers, FastPointer and SlowPointer.
//  2. Move FastPointer at a rate of 2 steps and SlowPointer at a rate of 1 step.
//  3. When they collide, move SlowPointer to the LinkedListHead. Keep FastPointer where it is.
//  4. Move SlowPointer and FastPointer at a rate of one step. Return the new collision point.

const findBeginning = head => {
    let slow = head,
        fast = head;

    // Find the meeting point. This will be LOOP_SIZE - k steps into the linked list.
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break; // Collision
    }

    // Error check - no meeting point, and therefore no loop.
    if (slow === null || fast === null) return null;

    // Move slow to Head. Keep fast at Meeting Point. Each are k steps from the Loop Start. If they move at the same pace, they must meet at the Loop Start.
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    // Both now point to the start of the loop.
    return slow;
};
