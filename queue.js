/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let new_val = new Node(val);

    if (this.size > 0) {
      this.last.next = new_val;
      this.last = new_val;
    } else {
      this.first = new_val;
      this.last = new_val;
    }
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    let old_first = this.first;
    this.first = this.first.next;
    if (this.size == 1) {
      this.last = null; // Ensure last node is set to null when the queue becomes empty
    }
    this.size--;
    return old_first(val);
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.first(val);
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
