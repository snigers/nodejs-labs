'use strict';

class Dictionary {
  constructor() {
    this.map = Object.create(null);
  }

  set(key, value) {
    return this.map[key] = value;
  }

  get(key) {
    return this.map[key];
  }

  has(key) {
    return !!this.map[key];
  }

  delete(key) {
    delete this.map[key];
  }

  get size() {
    return Object.keys(this.map).length;
  }

  keys() {
    return Object.keys(this.map);
  }

  clear() {
    this.map = Object.create(null);
  }

  static from(hash) {
    const instance = new Dictionary();
    for (const key in hash) {
      instance.set(key, hash[key]);
    }
    return instance;
  }
}

const cities = {
  Shanghai: 24256800,
  Beijing: 21516000,
  Delhi: 16787941,
  Lagos: 16060303,
};

const cityPopulation1 = Dictionary.from(cities);
console.dir({cityPopulation1});

const cityPopulation2 = new Dictionary();
cityPopulation2.set('Shanghai', 24256800);
cityPopulation2.set('Beijing', 21516000);
cityPopulation2.set('Delhi', 16787941);
cityPopulation2.set('Lagos', 16060303);
console.dir({cityPopulation2});