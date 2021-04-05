'use strict';

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.from = function (obj) {
  const { x, y } = obj;
  return new Point(x, y);
};

Point.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
};

Point.prototype.toString = function() {
  return `[${this.x}, ${this.y}]`;
}

console.log('function prototype:', (function() {}).prototype);
console.log('lymbda prototype:', (() => {}).prototype);


console.log('Point prototype:', Point.prototype);
console.log('move prototype:', Point.prototype.move.prototype);

const p1 = new Point(10, 20);
console.log(p1);
p1.move(-5, 10);


console.log(p1);
console.log(p1.toString());
console.log(p1 + '');
console.log('===================');

class Point1 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }

  toString() {
    return `[${this.x}, ${this.y}]`;
  }

  static from(obj) {
    const { x, y } = obj;
    return new Point1(x, y);
  }
}

console.log('Point1 prototype:', Point1.prototype);
console.log('move prototype:', Point1.prototype.move.prototype);
console.log('construct prototype:', Point1.constructor.prototype);
console.log('prototype construct prototype:', Point1.prototype.constructor.prototype);

const p2 = new Point1(10, 20);
console.log(p2);
p2.move(-5, 10);


console.log(p2);
console.log(p2.toString());
console.log(p2 + '');
