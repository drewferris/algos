class MyQueue {
	constructor(params) {
		this.stackNewest = new Stack();
		this.stackOldest = new Stack();
	}

	size() {
		return this.stackNewest.values.length + this.stackOldest.values.length;
	}

	add(val) {
		// Push onto stackNewest, which always has the newest elements on top.
		this.stackNewest.push(val);
	}

	// Move elements from stackNewest into stackOldest. This is usually done so that we can do operations on stackOldest.
	shiftStacks() {
		if (!this.stackOldest.values.length) {
			while (this.stackNewest.length) {
				this.stackOldest.push(this.stackNewest.pop());
			}
		}
	}

	peek() {
		this.shiftStacks(); // Ensure stackOldest has the current elements
		return this.stackOldest.peek(); // retrieve the oldest item.
	}

	remove() {
		this.shiftStacks(); // Ensure stackOldest has the current elements
		return this.stackOldest.pop(); // pop the oldest item.
	}
}

 class Stack {
	constructor() {
		this.values = [];
	}

	push(val) {
		this.values.push(val);
	}

	pop() {
		const val = this.values.pop();
		return val;
	}

	peek() {
		return this.values[this.values.length - 1];
	}

	isEmpty() {
		return !this.values.length;
	}
}
