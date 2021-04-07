'use strict';

const log = (base, n) => Math.log(n) / Math.log(base);

const createLog = base => n => log(base, n);

const lg = createLog(10);
const ln = createLog(Math.E);

console.log(lg(5));
console.log(ln(5));
console.log("======================");

const log2 = (base, n) => Math.log(n) / Math.log(base);

const lg2 = n => log(10, n);
const ln2 = n => log(Math.E, n);

console.log(lg2(5));
console.log(ln2(5));
console.log("======================");

const log3 = (base, n) => Math.log(n) / Math.log(base);

const lg3 = log.bind(null, 10);
const ln3 = log.bind(null, Math.E);

console.log(lg3(5));
console.log(ln3(5));
console.log("======================");

const partial = (fn, ...args) => (...rest) => fn(...args.concat(rest));

const sum4 = (a, b, c, d) => (a + b + c + d);

const f11 = partial(sum4, 1);
const f12 = partial(f11, 2);
const f13 = partial(f12, 3);
const y1 = f13(4);
console.log(y1);

const f21 = partial(sum4, 1, 2);
const f22 = partial(f21, 3);
const y2 = f22(4);
console.log(y2);
console.log("======================");

