function Node(data, next) {
  this.data = (data === undefined ? 0 : data);
  this.next = (next === undefined ? null : next);
}

// not given access to the head

const deleteMiddle = n => {
  if (n === null || n.next === null) return false;
  let next = n.next;
  n.data = next.data;
  n.next = next.next;
  return;
}

