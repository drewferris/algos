function Node(val, next) {
	this.val = val === undefined ? null : val;
	this.next = next === undefined ? null : next;
}

function PartialSum() {
  this.sum = new Node();
  this.carry = 0;
}

const sumLists = (node1, node2) => {
	let sumList,
		runner,
		carry = 0,
		sum;
	while (node1 !== null && node2 !== null) {
		if (node1 && node2) {
			sum = node1.val + node2.val + carry;
			if (sum < 10) {
				if (!sumList) {
					sumList = new Node(sum);
					runner = sumList;
				} else {
					runner.val = sum;
				}
			} else {
				if (!sumList) {
					sumList = new Node(sum % 10);
					runner = sumList;
				} else {
					runner.val = sum % 10;
				}
				carry = 1;
			}
		} else if (!node2) {
			runner.val = node1.val;
		} else if (!node1) {
			runner.val = node2.val;
		}
		if (node1.next || node2.next) {
			let newNode = new Node();
			runner.next = newNode;
			runner = runner.next;
		}
		if (node1) node1 = node1.next;
		if (node2) node2 = node2.next;
	}

	return sumList;
};

// Cracking the Coding Interview solution: recursion

const addLists = (l1, l2, carry = 0) => {
	if (!l1 && !l2 && carry === 0) return null;

	let result = new Node(),
		value = carry;
	if (l1 !== null) value += l1.val;
	if (l2 !== null) value += l2.val;

	// second digit of number
	result.val = value % 10;

	// Recurse
	if (l1 !== null || l2 !== null) {
		let more = addLists(
			!l1 ? null : l1.next,
			!l2 ? null : l2.next,
			value >= 10 ? 1 : 0
    );
    result.next = more;
  }
  return result;
};

// Cracking the Coding Interview solution to Part B, digits are stored in forward order: recursion also
const getLength = (node) => {
  if (!node) return 0;

  let length = 0;

  while (node !== null) {
    length++;
    node = node.next;
  }

  return length;
}

const padList = (l, padding) => {
  let head = l;
  for (let i = 0; i < padding; i++) {
    head = insertBefore(head, 0);
  }
  return head;
}

const insertBefore = (list, data) => {
  let node = new Node(data);
  if (list !== null) {
    node.next = list;
  }
  return node;
}

const addListsHelper = (l1, l2) => {
  if (!l1 && !l2) {
    let sum = new PartialSum();
    return sum;
  }
  // Add smaller digits recursively
  let sum = addListsHelper(l1.next, l2.next);

  // Add carry to current data
  let val = sum.carry + l1.val + l2.val;

  // Insert sum so far, and the carry value
  let full_result = insertBefore(sum.sum, val % 10);

  // Return sum so far, and the carry value
  sum.sum = full_result;
  sum.carry = Math.floor(val / 10);
  return sum;
}

const addListsForward = (l1, l2) => {
  let len1 = getLength(l1),
      len2 = getLength(l2);

  // Pad the shorter list with zeros
  if (len1 < len2) {
    l1 = padList(l1, len2 - len1);
  } else {
    l2 = padList(l2, len1 - len2);
  }

  // Add lists
  let sum = addListsHelper(l1, l2);

  // If there was a carry value left over, insert this at the front of the list. Otherwise just return the linked list.
  if (sum.carry === 0) return sum.sum;
  let result = insertBefore(sum.sum, sum.carry);
  return result;
}

let node1 = new Node(1, new Node(2, new Node(3, new Node(4)))),
	node2 = new Node(5, new Node(6, new Node(7)));

console.log(addListsForward(node1, node2));
