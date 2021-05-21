'use strict';

const data = { name: 'Marcus Aurelius', city: 'Rome', born: 121};

const person = new Proxy(data, {
  deleteProperty(obj, key) {
    console.log('delete', key);
    return true;
  }
});
console.dir(person);
delete person.name;
console.dir(person);
