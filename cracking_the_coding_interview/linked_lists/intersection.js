function Node(data, next) {
    this.data = data === undefined ? null : data;
    this.next = next === undefined ? null : next;
}

// Hash table approach, only finds intersection by value and not reference.

const doIntersect = (l1, l2) => {
    let map = {};

    while (l1 !== null) {
        if (!map[l1.data]) map[l1.data] = [];
        map[l1.data].push(l1);
        l1 = l1.next;
    }

    let curr = l2;

    while (curr !== null) {
        if (map[curr.data]) {
            let nodes = map[curr.data],
                temp = curr;
            for (let i = 0; i < nodes.length; i++) {
                let node = nodes[i];
                while (temp && node && temp.data === node.data) {
                    temp = temp.next;
                    node = node.next;
                }
                if (!node && !temp) {
                    return nodes[i];
                }
            }
        }
        curr = curr.next;
    }

    return false;
};

// Cracking the Code Interview solution: check if the last nodes are equal, get lengths of the list, chop off extra and then compare as you iterate
//  1. Run through each linked list to get the lengths and the tails.
//  2. Compare the tails. If they are different (by reference, not by value), return immediately. There is no intersection.
//  3. Set two pointers to the start of each list.
//  4. On the longer list advance its pointer by the difference in lengths.
//  5. Now traverse each linked list until the pointers are the same.

const findIntersection = (list1, list2) => {
    if (list1 === null || list2 === null) return null;

    // Get tail and sizes
    let result1 = getTailAndSize(list1),
        result2 = getTailAndSize(list2);

    // If different tail nodes, then there's no intersection.
    if (result1.tail !== result2.tail) return null;

    // Set pointers to the start of each list
    let shorter = result1.size < result2.size ? list1 : list2,
        longer = result1.size < result2.size ? list2 : list1;

    // Advance the pointer for the longer list by the difference in lengths
    longer = getKthNode(longer, Math.abs(result2.size - result1.size));

    // Move pointers along until you find a collision
    while (longer !== shorter) {
        longer = longer.next;
        shorter = shorter.next;
    }

    return longer;
};

const getKthNode = (head, k) => {
    let current = head;
    while (k > 0 && current !== null) {
        current = current.next;
        k--;
    }

    return current;
};

const getTailAndSize = list => {
    if (list === null) return null;

    let size = 1,
        current = list;
    while (current.next !== null) {
        size++;
        current = current.next;
    }
    return new Result(current, size);
};

function Result(tail, size) {
    this.tail = tail;
    this.size = size;
}

let intersection = new Node(7, new Node(2, new Node(1)));

console.log(
    findIntersection(
        new Node(3, new Node(1, new Node(5, new Node(9, intersection)))),
        new Node(4, new Node(6, intersection))
    )
);

console.log(
    findIntersection(
        new Node(
            3,
            new Node(
                1,
                new Node(5, new Node(9, new Node(7, new Node(2, new Node(1)))))
            )
        ),
        new Node(4, new Node(6, new Node(7, new Node(2, new Node(1)))))
    )
);
