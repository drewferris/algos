// BFS is not recursive, it uses a queue.

class Node {
    constructor(val) {
        this.val = val;
        this.adjacent = [];
        this.marked = false;
    }
}

class Queue {
    constructor() {
        this.queue = [];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    enqueue(val) {
        this.queue.push(val);
    }

    dequeue() {
        const val = this.queue.shift();
        return val;
    }
}

const search = root => {
    let queue = new Queue();
    root.marked = true;
    queue.enqueue(root);

    while (!queue.isEmpty()) {
        let r = queue.dequeue();
        console.log(r.val);
        for (const n of r.adjacent) {
            if (!n.marked) {
                n.marked = true;
                queue.enqueue(n);
            }
        }
    }
};
