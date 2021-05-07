'use strict';

global.api = {
  metasync: require('metasync')
};

const implementations = (
  ['32-chein-iterator', '32-chein-promise', '32-chein-build', '32-chein-functor', '32-chein-prototype']
    .map(name => './' + name + '.js')
    .map(require)
);

const test = require('./32-chein-promise-modul.js');

inplementations.map((chaining, i) => {
  console.log('Implementation: #' + i);
  test(chaining);
})