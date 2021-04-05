'use strict';

const util = require('util');

function Rect(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Rect.prototype.toString = function() {
  return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
};

function Square(x, y, side) {
  Rect.call(this, x, y, side, side);
}

Object.setPrototypeOf(Square.prototype, Rect.prototype); // JS for prototype

// util.inherits(Square, Rect); // node-js

// For Js
// Square.prototype = Object.create(Rect.prototype);
// Square.prototype.constructor = Square;


const p1 = new Square(10, 20, 50);
console.log(p1);