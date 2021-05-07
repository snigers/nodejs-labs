'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.clear();

// console.log('\x1b[4A');

rl.question(' '.repeat(10) + '\x1b[4ALogin: ', name => {
  console.log(`Hell ${name} !`);
  rl.close();
})