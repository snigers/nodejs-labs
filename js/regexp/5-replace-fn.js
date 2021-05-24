'use strict';

const rx = /abc/g;
const s = 'abcdefgabc';
const res = s.replace(rx, (sub, pos, str) => {
  console.dir({ sub, pos, str });
  return sub.toUpperCase();
});

console.log(res);