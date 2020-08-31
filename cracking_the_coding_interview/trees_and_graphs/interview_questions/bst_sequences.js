// Given a binary search tree with distinc elements, return all possible arrays that could have been used to build this tree, traversing the array from left to right.

// Solution does not work, contains errors.
class Tree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class LinkedList {
    constructor(val) {
        this.head = null;
    }

    add(val) {
        if (!this.head) {
            this.head = new Node(val);
        } else {
            let curr = this.head;
            while (curr.next !== null) {
                curr = curr.next;
            }

            curr.next = new Node(val);
        }
    }

    size() {
        let curr = this.head,
            i = 0;

        while (curr !== null) {
            i++;
            curr = curr.next;
        }

        return i;
    }

    clone() {
        let clone = new LinkedList(),
            clonedHead = this.head;
        clone.add(clonedHead);
        return clone;
    }

    addAll(vals) {
        if (this.head === null) {
            this.head = vals;
            return;
        }
        if (vals.head === null) return;
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = vals;
    }

    removeFirst() {
        let val = this.head.val;
        this.head = this.head.next;
        return val;
    }

    removeLast() {
        let curr = this.head;
        while (curr.next.next !== null) {
            curr = curr.next;
        }

        let val = curr.next.val;
        curr.next = null;
        return val;
    }

    addFirst(val) {
        let newNode = new Node(val),
            tmp = this.head;

        newNode.next = tmp;
        this.head = newNode;
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const allSequences = node => {
    let result = [];

    if (node === null || node === undefined) {
        result.push(new LinkedList());
        return result;
    }

    let prefix = new LinkedList();
    prefix.add(node.val);

    // Recurse on left and right subtrees.
    let leftSeq = allSequences(node.left),
        rightSeq = allSequences(node.right);

    // Weave together each list from the left and right sides.
    for (const left of leftSeq) {
        for (const right of rightSeq) {
            let weaved = [];
            weaveLists(left, right, weaved, prefix);
            result.concat(weaved);
        }
    }
    return result;
};

// Weave lists together in all possible ways. This algorithm works by removing the head from one list, recursing, and then doing the same with the other list.
const weaveLists = (first, second, results, prefix) => {
    // One list is empty. Add remainder to [a cloned] prefix and store the result.
    if (first.size() === 0 || second.size() === 0) {
        let result = prefix.clone();
        result.addAll(first);
        result.addAll(second);
        results.push(result);
        return;
    }

    // Recurse with head of first added to the prefix. Removing the head will damage first, so we will need to put it back where we found it afterwards.
    let headFirst = first.removeFirst();
    prefix.add(headFirst);
    weaveLists(first, second, results, prefix);
    prefix.removeLast();
    first.addFirst(headFirst);

    // Do the same thing with the second, damaging and then restoring the list.
    let headSecond = second.removeFirst();
    prefix.add(headSecond);
    weaveLists(first, second, results, prefix);
    prefix.removeLast();
    second.addFirst(headSecond);
};

let node = new Node(2);
node.left = new Node(1);
node.right = new Node(3);

console.log(allSequences(node));

let pause;
