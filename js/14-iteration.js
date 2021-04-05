'use strict';

// const hash = {
//   first: 7,
//   second: 10,
//   third: 1,
//   fourth: 5,
// };
//
// hash.first = 2;
//
// for (const key in hash)
// {
//   const value = hash[key];
//   console.log(
//     key, '\t', typeof key, '\t',
//     value, '\t', typeof value
//   );
// }
//
// const numbers = [7, 10, 1, 5, 2];
// numbers.field2 = "value2";
// numbers[-10] = "value3";
// numbers.field1 = "value1";
// numbers[5] = 20;
//
// for (const i in numbers)
// {
//   const value = numbers[i];
//   console.log(i, typeof i, value);
// }
//
// for (const i of numbers)
// {
//   const value = numbers[i];
//   console.log(i, typeof i, value);
// }

// const f1 = x => x * 2;
// const f2 = x => ++x;
//
// const compose = (...funcs) => x => funcs.reduce((v, f) => f(v), x);
//
// const f3 = compose(f1, f2);
//
// const res1 = [7, 10, 1, 5, 2]
//   .filter(x => x > 4)
//   .map(f3)
//   .reduce((acc, val) => acc + val);
//
// console.log(res1);

// const matrix = [
//   [7, 10, 1, 5, 2],
//   [6, -1, 7, 2, 3],
//   [1, 2, 4, -8, 2],
//   [-6, 4, 8, 2, 0],
// ];
//
// const max = (a, b) => a > b ? a : b;
//
// const res = matrix
//   .map(row => row.reduce((max)))
//   .reduce((acc, rowMax) => acc + rowMax);
//
// console.log(res);
//
// for (const i in matrix)
// {
//   const row = matrix[i];
//   for (const j in row)
//   {
//     const col = row[j];
//     console.log(i, j, col);
//   }
//
// }
//
// let count = 0;
// const arr = [7, 10, 1, 5, 2];
// const sum = (acc, val) => (count++, console.log(count, acc, val), acc + val);
// const res1 = arr.reduce(sum);
// console.log({res1, count});


const p1 = {
  x: 10,
  y: 20,
  move(x, y) {
    this.x += x;
    this.y += y;
  },
  toString() {
    return `[${this.x}, ${this.y}]`;
  }
};

p1.move(-5, 10);

console.log(p1);
console.log(p1.toString());
console.log(p1 + '');
