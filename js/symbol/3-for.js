'use strict';

const symbol1 = Symbol.for('name');
const symbol2 = Symbol.for('name');

if (symbol2 === symbol1) {
  console.log(
    'Symbol with identical description ' +
    'from global registry list are equal'
  );
}
console.log('symbol1: ', symbol1);
console.log('Symbol("name"): ', Symbol("name"));
console.log('Symbol.for("name"): ', Symbol.for("name"));

console.log(Symbol("name") === Symbol.for("name"));
console.log(Symbol.for("name") === Symbol.for("name"));

const symbol3 = Symbol('name2');


// for (const key in obj1) {
//   console.log('Key in obj1: ', key);
//   console.log('value: ', obj1[key]);
// }