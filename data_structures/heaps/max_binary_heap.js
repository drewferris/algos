// each parent has at most two child nodes
// the value of the parent is always greater than its child nodes
// siblings do not have to be greater or less than each other
// a binary heap is as compact as possible, all children of each node are as full as possible and left node is filled out first

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    let index = this.values.length - 1,
      parentIndex = Math.floor((index - 1) / 2);

    while (this.values[index] > this.values[parentIndex] && index > 0) {
      this.swap(parentIndex, index);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }

    return this;
  }

  swap(idx1, idx2) {
    [this.values[idx1], this.values[idx2]] = [
      this.values[idx2],
      this.values[idx1],
    ];
  }

  remove() {
    this.swap(0, this.values.length - 1);

    const popped = this.values.pop();
    let parentIndex = 0;

    if (this.values.length === 0) return popped;

    while (true) {
      let leftChildIndex =
          2 * parentIndex + 1 < this.values.length && 2 * parentIndex + 1,
        rightChildIndex =
          2 * parentIndex + 2 < this.values.length && 2 * parentIndex + 2,
        leftChild = leftChildIndex && this.values[leftChildIndex],
        rightChild = rightChildIndex && this.values[rightChildIndex],
        parent = this.values[parentIndex];
      if (parent < leftChild && parent < rightChild) {
        this.swap(
          parentIndex,
          leftChild > rightChild ? leftChildIndex : rightChildIndex
        );
        parentIndex = leftChild > rightChild ? leftChildIndex : rightChildIndex;
      } else if (parent < leftChild || parent < rightChild) {
        this.swap(
          parentIndex,
          parent < leftChild ? leftChildIndex : rightChildIndex
        );
        parentIndex = parent < leftChild ? leftChildIndex : rightChildIndex;
      } else {
        break;
      }
    }

    return popped;
  }
}

const heap = new MaxBinaryHeap();
heap.values = [41, 39, 33, 18, 27, 12];
