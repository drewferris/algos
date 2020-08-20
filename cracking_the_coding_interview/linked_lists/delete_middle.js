function Node(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

// not given access to the head

const deleteMiddle = n => {
  if (n === null || n.next === null) return false;
  let next = n.next;
  n.val = next.val;
  n.next = next.next;
  return;
}