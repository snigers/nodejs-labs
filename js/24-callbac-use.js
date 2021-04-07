'use strict';

const fs = require('fs');

fs.readFile('./24-calback.js', 'utf8', (err, data) => {
  console.log({lines: data.toString().split('\n').length});
});

console.log('end');