'use strict';

const point = (x, y) => {
  const p = {};

  p.move = (dx, dy) => {
    x += dx;
    y += dy;
  };

  p.toString = () => `[${x}, ${y}]`;

  return p;
}

const p1 = point(10, 20);
p1.move(-5, 10);


console.log(p1);
console.log(p1.toString());
console.log(p1 + '');
console.log('===================');

function move(x, y) {
  this.x += x;
  this.y += y;
}

function toString() {
  return `[${this.x}, ${this.y}]`;
}

const p2 = {x: 10, y: 20};
const p2move = move.bind(p2);
const p2toString = toString.bind(p2);
p2move(-5, 10);

console.log(p2);
console.log(p2toString());
console.log(p2 + '');
console.log('===================');