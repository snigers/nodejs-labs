'use strict';

const { sin, PI } = Math;
console.log(PI);
const inverse = f => x => 1 / f(x);
const cosecant = inverse(sin);

const a = cosecant(5);

console.log(a);

const fn = (par, callback) => {
  if (!par) {
    callback(new Error('Parameter needed'));
    return;
  }
  callback(null, 'Data ' + par);
  return 'Value';
};

const res = fn('example', (err, data) => {
  if (err) throw err;
  console.dir({data});
});

console.dir({res});
console.log("====================");

const fn1 = a => {
  const b = 'Closure variable';
  return c => {
    console.log({a, b, c})
  };
};

const f1 = fn1('Parameter 1');
f1('Parametr 2');

const f2 = fn1('Parameter X');
f2('Parametr Y');

console.log("====================");

function fn2(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

const f11 = fn2(1);
const f22 = f11(2);
const res2 = f22(3);

console.log(res2);
