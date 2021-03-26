'use strict';

let emptyScalar;
console.log({ emptyScalar }, typeof emptyScalar);

let emptyObject = null;
console.log({ emptyObject }, typeof emptyObject);

let count = NaN;
console.log({ count }, typeof count);

count = undefined + 1;
console.dir({count});

console.log(Infinity, -Infinity, typeof Infinity);

const  s = (
	emptyObject === null ?
		'is null' :
		'is not null'
);

console.log(s);