'use strict';

const pow = (base, power) => {
  if (power === 1) return base;
  else return pow(base, power - 1) * base;
}
console.log(pow(2, 3));

const factorial = n => {
  if (n === 0) return 1;
  else return n * factorial(n - 1);
};

console.log(factorial(10));

const fibonacci = n => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));

console.log(fibonacci(10));

const  reduce = (fn, acc, [cur, ...rest]) => (
  cur === undefined ? acc : reduce(fn, fn(acc, cur), rest)
);

const res = reduce((a, b) => a + b, 0, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log({ res });
