function Node(data, next) {
	this.data = data === undefined ? null : data;
	this.next = next === undefined ? null : next;
}

const partition = (node, x) => {
	let beforeStart, beforeEnd, afterStart, afterEnd;

	while (node !== null) {
		let next = node.next;
		node.next = null;
		if (node.data < x) {
			if (!beforeStart) {
				beforeStart = node;
				beforeEnd = beforeStart;
			} else {
				beforeEnd.next = node;
				beforeEnd = node;
			}
		} else {
			if (!afterStart) {
				afterStart = node;
				afterEnd = afterStart;
			} else {
				afterEnd.next = node;
				afterEnd = node;
			}
		}
		node = next;
	}

	if (!beforeStart) return afterStart;
	beforeEnd.next = afterStart;
	return beforeStart;
};

const partition2 = (node, x) => {
	let head = new Node(),
		tail = new Node();

	head.next = tail;

	while (node !== null) {
		let next = node.next;

		if (node.data < x) {
			if (!head.data) {
				head.data = node.data;
			} else {
				node.next = head;
			}
			head = node;
		} else {
			if (!tail.data) {
				tail.data = node.data;
			} else {
				tail.next = node;
			}
			tail = node;
		}
		node = next;
	}
	tail.next = null;
	return head;
};

let node = new Node(
	3,
	new Node(5, new Node(8, new Node(5, new Node(10, new Node(2, new Node(1))))))
);
console.log(partition2(node, 5));
