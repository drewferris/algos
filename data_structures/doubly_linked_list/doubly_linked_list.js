class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    var current, i;
    if (index <= Math.floor(this.length / 2)) {
      current = this.head;
      i = 0;
      while (i !== index) {
        current = current.next;
        i++;
      }
    } else {
      current = this.tail;
      i = this.length - 1;
      while (i !== index) {
        current = current.prev;
        i--;
      }
    }
    return current;
  }

  set(val, index) {
    var target = get(index);
    if (target) {
      target.val = val;
      return true;
    }
    return false;
  }

  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(val);
      return;
    }
    if (index === this.length) {
      this.push(val);
      return;
    }
    var beforeNode = get(index - 1);
    var newNode = new Node(val);
    var afterNode = beforeNode.next;
    afterNode.prev = newNode;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) {
      this.shift();
      return;
    }
    if (index === this.length -1) {
      this.pop();
      return;
    }
    var beforeNode = this.get(index - 1);
    var afterNode = this.get(index + 1);
    var removedNode = this.get(index);
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}
