function Node(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const removeDuplicates = head => {
  let map = new Map(),
      curr = head,
      prev;

  while (curr !== null) {
    if (!map.get(curr.val)) {
      map.set(curr.val, true);
      prev = curr;
    } else {
      prev.next = curr.next;
    }
    curr = curr.next;
  }

  return head;
}

const noBuffer = head => {
  let current = head;

  while (current !== null) {
    let runner = current;
    while (runner.next !== null) {
      if (runner.next.val == current.val) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }

  return head;
}

let node = new Node(1, new Node(2, new Node(3, new Node(1))));

console.log(noBuffer(node));
