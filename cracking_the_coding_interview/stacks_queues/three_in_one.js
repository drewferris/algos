// Implement three stacks in a single array.

// Approach 1: Fixed division

class FixedMultiStack {
    constructor(stackSize) {
        this.numberOfStacks = 3;
        this.stackCapacity = stackSize;
        this.values = new Array(stackSize * this.numberOfStacks);
        this.sizes = new Array(this.numberOfStacks).fill(0);
    }

    // Push value on stack.
    push(stackNum, value) {
        // Check that there is space for the next element.
        if (this.isFull(stackNum)) return null;

        // Increment stack pointer and then update the top value.
        this.sizes[stackNum]++;
        this.values[this.indexOfTop(stackNum)] = value;
    }

    // Pop item from stack.
    pop(stackNum) {
        if (this.isEmpty(stackNum)) return null;

        const topIndex = this.indexOfTop(stackNum),
            value = this.values[topIndex];
        this.values[topIndex] = 0;
        this.sizes[stackNum]--;
        return value;
    }

    // Return top element.
    peek(stackNum) {
        if (this.isEmpty(stackNum)) return null;
        return this.values[this.indexOfTop(stackNum)];
    }

    // Return if stack is empty.
    isEmpty(stackNum) {
        return this.sizes[stackNum] === 0;
    }

    // Returns index of the top of the stack.
    indexOfTop(stackNum) {
        const offset = stackNum * this.stackCapacity,
            size = this.sizes[stackNum];
        return offset + size - 1;
    }

    // Return if stack is full.
    isFull(stackNum) {
        return this.sizes[stackNum] === this.stackCapacity;
    }
}

// Approach 2: Flexible Divisions
// - When one stack exceeds its initial capacity, the capacity is increased and elements shifted as necessary.
// - Array will be circular, such that final stack may start at the end and wrap around to the beginning.

class MultiStack {
    constructor(numberOfStacks, defaultSize) {
        this.values = new Array(numberOfStacks * defaultSize);
        this.info = new Array(numberOfStacks);

        // Create metadata for all the stacks
        for (let i = 0; i < numberOfStacks; i++) {
            this.info[i] = this.stackInfo(defaultSize * i, defaultSize);
        }
    }

    stackInfo(start, capacity) {
        // Simple class that holds info about each stack. Does not hold the actual items of the stack.
        this.start = start;
        this.capacity = capacity;
        this.size = 0;

        // Check if an index on the full array is within the stack boundaries. The stack can wrap around to the start of the array.
        this.isWithinStackCapacity = index => {
            // If outside the bounds return false.
            if (index < 0 || index >= this.values.length) return false;

            // If index wraps around, adjust it.
            const contiguousIndex =
                    index < this.start ? index + this.values.length : index,
                end = this.start + this.capacity;
            return this.start <= contiguousIndex && contiguousIndex < end;
        };

        this.lastCapacityIndex = () => {
            return this.adjustIndex(this.start + this.capacity - 1);
        };

        this.lastElementIndex = () => {
            return this.adjustIndex(this.start + this.size - 1);
        };

        this.isFull = () => this.size === capacity;
        this.isEmpty = () => this.size === 0;
    }

    // Adjust index to be within the range of 0 -> length - 1;
    adjustIndex(index) {
        const max = this.values.length;
        return ((index % max) + max) % max;
    }

    // Push value onto stack num, shifting/expanding stacks as necessary.
    push(stackNum, value) {
        if (this.allStacksAreFull()) return null;

        // If this stack is full, expand it.
        let stack = this.info[stackNum];
        if (stack.isFull()) this.expand(stackNum);

        // Find the index of the top element in the array + 1, and increment the stack pointer.
        stack.size++;
        this.values[stack.lastElementIndex()] = value;
    }

    // Remove value from stack.
    pop(stackNum) {
        let stack = this.info[stackNum];
        if (stack.isEmpty()) return null;

        // Remove last element.
        let value = values[stack.lastElementIndex()];
        values[stack.lastElementIndex()] = 0; // Clear item
        stack.size--;
        return value;
    }

    // Get top element of stack.
    peek(stackNum) {
        let stack = this.info[stackNum];
        return this.values[stack.lastElementIndex()];
    }


    // Expand stack by shifting over other stacks.
    expand(stackNum) {
        this.shift((stackNum + 1) % this.info.length);
        this.info[stackNum].capacity++;
    }

    // Shift items in stack over by one element. If capacity is available, then stack will be shrunk by one element. If capacity is not available, shift the next stack over as well.
    shift(stackNum) {
        let stack = this.info[stackNum];

        // If this stack is at full capacity, then move the next stack over by one element. This stack can now claim the free index.
        if (stack.size >= stack.capacity) {
            let nextStack = (stackNum + 1) % this.info.length;
            this.shift(nextStack);
            stack.capacity++; // claim index that next stack lost
        }

        // Shift all elements in stack over by one.
        let index = stack.lastCapacityIndex();
        while (stack.isWithinStackCapacity(index)) {
            this.values[index] = values[this.previousIndex(index)];
            index = this.previousIndex(index);
        }

        // Adjust stack data.
        this.values[stack.start] = 0; // Clear item
        stack.start = this.nextIndex(stack.start); // move start
        stack.capacity--;
    }

    // Get index after this index, adjusted for wrap around.
    nextIndex(index) {
        return this.adjustIndex(index + 1);
    }

    // Get index before this index, adjusted for wrap around.
    previousIndex(index) {
        return this.adjustIndex(index - 1);
    }

    // Returns true if all stacks are full.
    allStacksAreFull() {
        return this.numberOfElements() === this.values.length;
    }

    // Returns number of items actually present in stack.
    numberOfElements() {
        let size = 0;
        for (const sd of this.info) {
            size += sd.size;
        }
        return size;
    }
}

let fixedStack = new FixedMultiStack(3);
fixedStack.push(0, 1);
fixedStack.push(0, 2);
fixedStack.push(0, 3);
fixedStack.push(1, 1);
fixedStack.push(1, 2);
fixedStack.push(1, 3);
fixedStack.push(2, 1);
fixedStack.push(2, 2);
fixedStack.push(2, 3);

console.log(fixedStack);
console.log(fixedStack.pop(1));
console.log(fixedStack.peek(1));
