class SetOfStacks {
    constructor(capacity) {
        this.capacity = capacity;
        this.stack = [];
    }

    push(val) {
        if (!this.stack.length) {
            this.stack.push([val]);
        } else {
            this.stack[this.stack.length - 1].push(val);
            if (this.stack[this.stack.length - 1].length === this.capacity)
                this.stack.push([]);
        }
    }

    pop() {
        if (!this.stack[this.stack.length - 1].length) this.stack.pop();
        let val = this.stack[this.stack.length - 1].pop();
        if (!this.stack[this.stack.length - 1].length) this.stack.pop();
        return val;
    }

    popAt(index) {
        let val = this.stack[index].pop();

        while (index < this.stack.length - 1) {
            let newVal = this.stack[index + 1].shift();
            this.stack[index].push(newVal);
            index++;
        }

        return val;
    }
}

let setOfStacks = new SetOfStacks(3);
setOfStacks.push(1);
setOfStacks.push(2);
setOfStacks.push(3);
setOfStacks.push(4);
setOfStacks.push(5);
setOfStacks.push(6);
setOfStacks.push(7);
setOfStacks.push(8);
setOfStacks.push(9);
console.log(setOfStacks);
setOfStacks.pop();
console.log(setOfStacks);
setOfStacks.popAt(0);
console.log(setOfStacks);
