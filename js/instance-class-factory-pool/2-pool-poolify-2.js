'use strict';

const poolified = Symbol('poolified');

const mixFlag = {[poolified]: true};

const duplicate = (factory, n) => (
  new Array(n).fill().map(() => {
    const instance = factory();
    return Object.assign(instance, mixFlag);
  })
);

const provide = callback => item => {
  setImmediate(() => {
    callback(item);
  });
};

const poolify = (factory, min, norm, max) => {
  let allocated = norm;
  const items = duplicate(factory, norm);
  const delayed = [];

  return par => {
    if (par[poolified]) {
      const request = delayed.shift();
      if (request) request(par);
      else items.push(par);
      return;
    }
    if (items.length < min && allocated < max) {
      const grow = Math.min(max - allocated, norm - items.length);
      allocated += grow;
      const instances = duplicate(factory, grow);
      items.push(...instances);
    }
    const res = items.pop();
    if (res) par(res);
    else delayed.push(par);
  };
};

const adder = a => b => adder(a + b);

const pool = poolify(adder, 1, 2, 3);

//  Дальше длинный тест на тайммаутах, https://www.youtube.com/watch?v=Ax_mSvadFp8 50 минута