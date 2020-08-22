function Node(data, next) {
	this.data = data === undefined ? null : data;
	this.next = next === undefined ? null : next;
}

const isPalindrome = (node) => {
	let arr = [],
		curr = node;

	while (curr !== null) {
		arr.push(curr.data);
		curr = curr.next;
	}

	return arr.join('') === arr.reverse().join('');
};

// Cracking the Coding Interview Solution #1: Reverse and Compare
// Note: only need to compare first half of original list to first half of reversed list

const isPalindromeSol1 = (head) => {
	let reversed = reverseAndClone(head);
	return isEqual(head, reversed);
};

const isEqual = (one, two) => {
	while (one !== null && two !== null) {
		if (one.data !== two.data) return false;
		one = one.next;
		two = two.next;
	}
	return one == null && two == null;
};

const reverseAndClone = (node) => {
	let head = new Node();
	while (node !== null) {
		let n = new Node(node.data); // Clone
		if (head.data !== null) n.next = head; // attach list to n
		head = n; // reset head of list to n
		node = node.next; // go to next node
	}
	return head;
};

// Cracking the Coding Interview Solution #2: Reverse the front half of the list with a stack and compare to the second half.
// - If size of the list is known, push onto stack for the first half of the list and compare. Must be careful for when length
//   of the list is odd
// - If size of the list is not known, iterate through the list using the fast and slow runner technique. Each iteration, push ///   slow runners value onto the stack. Once fast runner has reached the end of the list, the slow runner will be at the        //   halfway point. Iterate through the rest of the list, comparing the top value of the stack to the node value. If the end is //   reached then it is a palindrome.

const isPalindromeSol2 = (head) => {
	let fast = head,
		slow = head,
    stack = [];
    
  // Push elements of first half of the list onto the stack. When the fast runner reaches the end of the list, then we are at the middle
  while (fast !== null && fast.next !== null) {
    stack.push(slow.data);
    slow = slow.next;
    fast = fast.next.next;
  }

  // Has odd number of elements, so skip the middle element
  if (fast !== null) slow = slow.next;

  while (slow !== null) {
    let top = stack.pop();

    // If values are different, then it's not a palindrome
    if (top !== slow.data) return false;
    slow = slow.next;
  }
  return true;
};

// Cracking the Code Interview Solution #3: Recursion: We need to pass a length to each recursive call in order to find out when we have reached the middle, we do this by passing length - 2 each time and when it is 0 or 1 we know we are at the middle. From there we compare the head value from the returned node of the recursive call, which is returned_node.next

const isPalindromSol3 = head => {
  let length = lengthOfList(head),
  p = isPalindromeRecurse(head, length);
}

function Result(node, result) {
  this.node = node;
  this.result = result;
}

const isPalindromeRecurse = (head, length) => {
  if (head === null || length <= 0) { // Even number of nodes
    return new Result(head, true);
  } else if (length === 1) { // Odd number of nodes
    return new Result(head.next, true);
  }

  // Recurse on sublist
  let res = isPalindromeRecurse(head.next, length - 2);

  // If child calls are not a palindrome, pass back up a failure.
  if (!res.result || res.node === null) {
    return res;
  }

  
}

const lengthOfList = n => {
  let size = 0;
  while (n !== null) {
    size++;
    n = n.next;
  }
  return size;
}

console.log(
	isPalindromeSol2(
		new Node(0, new Node(1, new Node(2, new Node(1, new Node(0)))))
	)
);
