// Implement a stack that has a function min to return minimum element along with push, pop. All should operate at O(1) time.

class Stack {
    constructor() {
        this.values = [];
        this.minStack = [];
    }

    push(val) {
        if (val <= this.min()) this.minStack.push(val);
        this.values.push(val);
    }

    pop() {
        let val = this.values.pop();
        if (val === this.min()) this.minStack.pop();
        return val;
    }

    min() {
        if (!this.minStack.length) {
            return Number.POSITIVE_INFINITY;
        }
        return this.minStack[this.minStack.length - 1];
    }
}

let stack = new Stack();
stack.push(5);
stack.push(4);
console.log(stack.min());
stack.push(3);
stack.push(2);
stack.pop();
console.log(stack.min());


