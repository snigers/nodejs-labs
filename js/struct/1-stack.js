'use strict';

class Stack {
  constructor() {
    this.last = null;
  }
  push(item) {
    const prev = this.last;
    const element = { prev, item};
    this.last = element;
  }
  pop() {
    const element = this.last;
    if (!element) return null;
    this.last = element.prev;
    return element.item;
  }
}

const obj1 = {name: 'first'};
const obj2 = {name: 'second'};
const obj3 = {name: 'third'};

const list = new Stack();
list.push(obj1);
list.push(obj2);
list.push(obj3);

console.dir(list.pop());
console.dir(list.pop());
console.dir(list.pop());
console.dir(list.pop());