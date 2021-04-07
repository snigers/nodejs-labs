'use strict';

const fs = require('fs');

const print = (fileName, err, data) => {
  console.log({lines: data.split('\n').length});
};

const fileName = './24-calback.js';


fs.readFile(fileName, 'utf8', print.bind(null, fileName));

console.log('end');