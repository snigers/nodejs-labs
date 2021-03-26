'use strict';

console.log(parseInt("11", 2));
console.log(parseInt("11", 8));
console.log(parseInt("11", 16));

console.log(parseInt(5, 10));
console.log(parseInt("5", 10));
console.log(parseInt("+5", 10));
console.log(parseInt("5mm", 10));

console.log(parseInt("(5)", 10));
console.log(parseInt('"5"', 10));
console.log(parseInt("[5]", 10));

console.log(parseInt("NaN", 10));
console.log(parseInt(Infinity, 10));
console.log(parseInt("Infinity", 10));
console.log(parseInt("-Infinity", 10));
