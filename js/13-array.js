'use strict';

const person = {
  name: "Marcus",
  city: "Roma",
  born: 121,
};

console.log(person.name);
console.log(person["name"]);

const person2 = {
  name: "Marcus A",
  get city() {
    return "Roma";
  },
  set city(value) {
    console.log("Marcus remains in Roma");
  }
};

person2.city = 'Kiev';
console.dir({person2});

if ('name' in person2)
{
  console.log("true");
}

for (const key in person2)
{
  const value = person[key];
  console.dir({value});
}

const letters = [];
letters.push('B');
console.dir({letters});
letters.unshift('A');
console.dir({letters});
letters.push('C');
console.dir({letters});
console.log(letters.join("---"));

