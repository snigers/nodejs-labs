'use strict';

const scalable = image => {
  image.scale = () => console.log('Image scaled');
};

const lazy = image => {
  const scale = image.scale;
  image.scale = () => setImmediate(() => scale());
};

const image = {};

console.log('Mixin scalable() adds method: scale');
scalable(image);
console.log('Before scala');
image.scale();
console.log('After scala\n');

console.log('Mixin lazy() adds lazy behavior');
lazy(image);
console.log('Before scala');
image.scale();
console.log('After scala\n');