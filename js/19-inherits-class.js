'use strict';

class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  toString() {
    return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
  }
}

class Square extends Rect {
  constructor(x, y, side) {
    super(x, y, side, side);
  }
}

const p1 = new Square(10, 20, 50);
console.log(p1);

class Rect2 {
  toString() {
    return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
  }
}

const p2 = {x: 10, y: 20, width: 50, height: 50};
// Object.setPrototypeOf(p2, Rect2.prototype);
p2.__proto__ = Rect.prototype;

console.log(p2.toString())

function Rect3(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.toString = function(){
    return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
  }
}


const p3 = new Rect3(10, 20, 50, 50);
console.log(p2.toString())