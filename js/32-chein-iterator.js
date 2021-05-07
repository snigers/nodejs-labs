'use strict';

const text = (s = '', o = {
  line: a => (s += '\n' + a, o),
  [Symbol.iterator]: () => ({
    next() {
      const res = { value: s, done: this.finished };
      this.finished = true;
      return res;
    }
  })
}) => o;

const txt = text('line1')
  .line('line2')
  .line('line3');

console.log(...txt);