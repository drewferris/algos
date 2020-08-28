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
const sort = (s) => {
	let r = new Stack();
	while (!s.isEmpty()) {
		// Insert each element in s in sorted order into r.
		let tmp = s.pop();
		while (!r.isEmpty() && r.peek() > tmp) {
			s.push(r.pop());
		}
		r.push(tmp);
	}

	// Copy the elements from r back into s.
	while (!r.isEmpty()) {
		s.push(r.pop());
  }
  
  return;
};

let stack = new Stack();
stack.push(5);
stack.push(1);
stack.push(9);
stack.push(4);
stack.push(6);
stack.push(3);

sort(stack);

let pause;
