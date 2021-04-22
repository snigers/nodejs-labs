'use string';

console.log('\u1f420');

const name = "Marcus Aurelius";

console.log(`name = '${name}'`);

console.log(`typeof name = '${typeof name}'`);
console.log(`name.length = '${name.length}'`);
console.log(`name[3] = '${name[3]}'`);
console.log(`name.charAt(5) = '${name.charAt(5)}'`);
console.log(`name.charCodeAt(7) = '${name.charCodeAt(7)}'`);


console.log(`'A'.repeat(5) = '${'A'.repeat(5)}'`);
console.log(`'  ABC  '.trim() = '${'  ABC  '.trim()}'`);
console.log(`'  ABC  '.trimLeft() = '${'  ABC  '.trimLeft()}'`);
console.log(`'  ABC  '.trimRight() = '${'  ABC  '.trimRight()}'`);
console.log(`'hello'.toLowerCase() = '${'hello'.toLowerCase()}'`);
console.log(`'hello'.toUpperCase() = '${'hello'.toUpperCase()}'`);
console.log(`String.fromCharCode(80) = '${String.fromCharCode(80)}'`);

//Методы прототипа строки
console.log();
console.log(`name.indexOf('Aur') = '${name.indexOf('Aur')}'`);
console.log(`name.lastIndexOf('u') = '${name.lastIndexOf('u')}'`);
console.log(`name.includes('Ma') = '${name.includes('Ma')}'`);
console.log(`name.startsWith('re') = '${name.startsWith('re')}'`);
console.log(`name.endsWith('lius') = '${name.endsWith('lius')}'`);

//Модифицирование строк
console.log();
console.log(`name.split(' ') = '${name.split(' ')}'`);
console.log(`name.replace('r', 'R') = '${name.replace('r', 'R')}'`);
console.log(`name.replace(/r/g, 'R') = '${name.replace(/r/g, 'R')}'`);
console.log(`'Ave !'.concat(name, '!') = '${'Ave !'.concat(name, '!')}'`);

//Polyfill
console.log();
console.log(`name = ${name}`);

if (!String.prototype.includes) {
  String.prototype.includes = function(s) {
    return this.indexOf(s) > -1;
  };
}

console.log(name.includes('Mar'));

//Bad practice

String.prototype.includesWord = function(s) {
    return ` ${this} `.includes(` ${s} `);
}

//tag Использование шаблонизирующих строк
const tag = (strings, ...values) => {
  console.dir({ strings, values });
  return '';
};

const greeting = 'Hello';
const person = { name: 'Marcus Aurelius '};

const text = tag`${greeting} ${person.name}!`;
console.dir({text});

