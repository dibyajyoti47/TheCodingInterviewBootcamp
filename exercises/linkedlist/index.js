// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

}

class LinkedList {

  constructor() {
    this.head = null;
    this.counter = 0;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
    this.counter++;
  }

  size() {
    return this.counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if(!this.head) {
      return null;
    }
    let node = this.head;
    while(node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
    this.counter = 0;
  }

  removeFirst() {
    if(!this.head) {
      return;
    }
    this.counter--;
    this.head = this.head.next;
  }

  removeLast() {
    if(!this.head) {
      return;
    }
    if(this.size() === 1) {
      this.clear();
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while(node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
    this.counter-- ;
  }

  insertLast(record) {
    if(this.size() === 0) {
      this.head = new Node(record);
      this.counter++;
      return;
    }
    this.getLast().next = new Node(record);
    this.counter++;
  }

  getAt(index) {
    let nodeCount = 0;
    let node = this.head;
    while (node) {
      if (nodeCount === index) {
        return node;
      }
      nodeCount++;  
      node = node.next;
    }
    return null;
  }
}

module.exports = { Node, LinkedList };
