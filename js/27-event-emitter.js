'use strict';

const events = require('events');

const emitter = new events.EventEmitter();

emitter.on('new city', city => {
  console.log('Emitter city: ' + city);
});

emitter.on('data', array => {
  console.log(array.reduce((a, b) => a + b));
});

emitter.emit('new city', 'Delhi');
emitter.emit('new city', 'Berlin');
emitter.emit('new city', 'Tokio');
emitter.emit('data', [5, 10, 7, -3]);