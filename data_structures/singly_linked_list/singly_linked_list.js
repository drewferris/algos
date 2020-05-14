// comparison with arrays
// lists dont have indexes, are connected via nodes with a next pointer and do not allow random access
// arrays are indexed in order, but insertion and deletion are expensive, can be accessed quickly at a specific index

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  traverse() {
    var current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }

  pop() {
    var current = this.head,
      prev = current;
    if (this.length === 0) return undefined;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    var old = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;

    return old;
  }

  unshift(val) {
    var node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    var current = this.head,
      counter = 0;

    while (counter !== index) {
      counter++;
      current = current.next;
    }

    return current;
  }

  set(val, index) {
    var target = get(index);

    if (!target) {
      return false;
    }

    target.val = val;
    return true;
  }

  insert(val, index) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === this.length) {
      this.push(val);
      return true;
    }

    if (index === 0) {
      this.unshift(val);
      return true;
    }

    var prev = this.get(index - 1),
      node = new Node(val),
      temp = prev.next;

    prev.next = node;
    node.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    if (index === 0) {
      return this.shift();
    }

    var prev = this.get(index - 1),
      removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;

    var next, prev = null, i = 0;

    while (i < this.length) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
      i++;
    }

    return this;
  }
}
