'use strict';

const compose = (...fns) => x => {
  if (fns.length === 0 ) return x;

  const fn = fns.pop();

  if (!(fn instanceof Function)) throw fn;

  const res = fn(x);
  if (fns.length === 0) return res;
  return compose(...fns)(res);
};

const pipe = (...fns) => x => {
  if (fns.length === 0 ) return x;

  const fn = fns.shift();
  const res = fn(x);
  if (fns.length === 0) return res;
  return pipe(...fns)(res);
};


const upperFirst = word => word.charAt(0).toUpperCase() + word.slice(1);
const upperCapital = s => s.split(' ').map(upperFirst).join(' ');
const lower = s => s.toLowerCase();
const trim = s => s.trim();

const s = '   MARCUS AURELIUS   ';
console.log(s);
console.log(`lower('${s}') = '${lower(s)}'`);
console.log(`upperCapital('${s}') = '${upperCapital(s)}'`);

{
  console.log('Use compose');

  const capitalize = compose(upperCapital, lower, trim, 44);
  console.log(`capitalize('${s}') = '${capitalize(s)}'`);
}

{
  console.log('Use pipe');

  const capitalize = pipe(trim, lower, upperCapital);
  console.log(`capitalize('${s}') = '${capitalize(s)}'`);
}
