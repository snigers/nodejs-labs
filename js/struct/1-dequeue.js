'use strict';

class Dequeue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  push(item) {
    const last = this.last;
    const element = { prev: last, next: null, item};
    if (last) {
      last.next = element;
      this.last = element;
    } else {
      this.first = element;
      this.last = element;
    }
  }
  pop() {
    const element = this.last;
    if (!element) return null;
    if (this.first === element) {
      this.first = null;
      this.last = null;
    } else {
      this.last = element.prev;
    }
    return element.item;
  }
  unshift(item) {
    const first = this.first;
    const element = { prev: null, next: first, item};
    if (first) {
      first.prev = element;
      this.first = element;
    } else {
      this.first = element;
      this.last = element;
    }
  }
  shift(item) {
    const element = this.first;
    if (!element) return null;
    if (last) {
      this.first = null;
      this.last = null;
    } else {
      this.last = element.prev;
    }
  }

}