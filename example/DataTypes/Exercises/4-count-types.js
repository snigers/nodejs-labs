'use strict';

const countTypesInArray = array => {
  const res = {};
  array.forEach(item => {
    const type = typeof item;
    if (res[type] === undefined)
      res[type] = 1;
    else
      res[type]++;
  });
  return res;
};

module.exports = { countTypesInArray };
