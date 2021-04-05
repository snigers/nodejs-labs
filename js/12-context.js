'use strict';

const hash = () => {
  const data = {};
  let counter = 0;
  return (key, value) => {
    data[key] = value;
    counter++;
    console.dir({ counter });
    return data;
  };
};

const h1 = hash();
h1('name', 'Marcus');
h1('city', 'Roma');

const obj1 = h1('born', 121);
console.dir({ obj1 });

const hash2 = () => {
  const data = {};
  Object.defineProperty(data, 'add', {
    enumerable: false,
    value(key, value) {
      data[key] = value;
      return data;
    }
  });
  return data;
};

console.dir(
  hash2()
    .add("name", "Marcus")
    .add("city", "Rome")
    .add("born", "121")
);

const add = x => y => {
  const z = x + y;
  console.log(x + '+' + y + '=' + z);
  return add(z);
}

const a1 = add(5);
const a2 = a1(2);
const a3 = a2(3);
const a4 = a1(1);
const a5 = a2(10);

console.log(a1, a2, a3, a4, a5);

const res = add(1)(4)(6)(8);
console.log(res);