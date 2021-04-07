'use strict';

const fn = () => {
  console.log('Generate cache');
  const cache = {};
  return a => {
    let res = cache[a];
    if (res) {
      console.log('From cache');
      return res;
    } else {
      console.log('Calcilate and save to cache');
      res = 'value' + a;
      cache[a] = res;
      return res;
    }
  };
};

const f1 = fn();
const f2 = fn();

f1(1);
f1(2);
f1(1);
f1(2);

f2(1);
f2(2);
f2(1);
f2(2);

console.log("====================");

const logable = fn1 => (...args) => {
  const res = fn1(...args);
  console.log(`Call: ${fn1.name}(${args.join(', ')}) Result: ${res}`);
  return res;
}

const sum = (a, b) => (a + b);
const wrapper = logable(sum);
console.log(wrapper(3, 5));