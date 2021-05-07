'use strict';

const Text = function (s) {
  this.value = s;
};

Text.prototype.line = function(a) {
  this.value += '\n' + a;
  return this;
};

Text.prototype.toString = function() {
  return this.value;
};

const txt = new Text('line1')
  .line('line2')
  .line('line3');

console.log(txt + '');

const text1 = (s = '') => ({
  line: a => text1(s + '\n' + a),
  toString: () => s
});

const txt2 = text1('line1')
  .line('line2')
  .line('line3');

console.log(txt2 + '');

const text2 = (s = '', o = {
  line: a => (s += '\n' + a, o),
  toString: () => s
}) => o;

const txt3 = text2('line11')
  .line('line12')
  .line('line13');

console.log(`${txt3}`)