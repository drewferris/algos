function Node(data, next) {
  this.data = (data === undefined ? 0 : data);
  this.next = (next === undefined ? null : next);
}

const kthToLast = (head, k) => {
  let i = 0,
      arr = [],
      curr = head;

  while (curr !== null) {
    arr[i] = curr;
    curr = curr.next;
    i++;
  }

  return arr[i - k - 1];
}

// k = 1 is the last node

const twoPointer = (head, k) => {
  let p1 = head,
      p2 = head;

  for (let i = 0; i < k; i++) {
    p1 = p1.next;
  }

  while (p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p2;
}

let node = new Node(1, new Node(2, new Node(3, new Node(1))));

console.log(twoPointer(node, 2));