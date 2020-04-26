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
    this.insertAt(data, 0)
  }

  size() {
    return this.counter;
  }

  getFirst() {
    return this.getAt(0);
  }

  getLast() {
    return this.getAt(this.size()-1);
  }

  clear() {
    this.head = null;
    this.counter = 0;
  }

  removeFirst() {
    this.removeAt(0);
  }

  removeLast() {
    this.removeAt(this.size()-1);
  }

  insertLast(record) {
    this.insertAt(record, this.size());
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

  removeAt(index) {
    if ( this.size() === 0 ) {
      return;
    }
    if (index > this.size()-1) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      this.counter--;
      return;
    }
    const prev =  this.getAt(index-1);
    const currentNode = prev.next;
    prev.next = currentNode.next;
    this.counter--;
  }

  insertAt(record ,index) {
    if(!this.head) {
      this.head = new Node(record);
      this.counter++;
      return;
    }
    if(index === 0) {
      this.head = new Node(record, this.head);
      this.counter++;
      return;
    }
    const prev = this.getAt(index-1) || this.getLast();
    const newNode = new Node(record, prev.next);
    prev.next = newNode;
    this.counter++;
  }

  forEach(fn) {
    let node = this.head;
    let counterr = 0;
    while(node) {
      fn( node, counterr);
      node = node.next;
      counterr++;
    }
  }
}

module.exports = { Node, LinkedList };
