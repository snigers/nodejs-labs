'use strict';

const iterate = (array, listener) => {
  let counter = 0;
  setInterval(() => {
    listener(array[counter++]);
    if (counter >= array.length) counter = 0;
  }, 1000);
};

const cities = ["Moscow", "Piter", "Rostov"];

const fn = city => console.log('Next city: ' + city);

iterate(cities, fn);