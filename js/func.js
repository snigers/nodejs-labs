console.log("test");

const cities = ["Athens", "Roma"];
const f = s => s.toLowerCase();

console.dir(cities.map(f));

function inc(a) {
  return ++a;
}

const sum = function (a, b) {
  return a + b;
};

const max = (a, b) => (a > b ? a : b);

console.dir(
  {
    inc: inc.name,
    sum: sum.name,
    max: max.name,
  }
);

console.dir(
  {
    inc: inc.length,
    sum: sum.length,
    max: max.length,
  }
);

console.dir(
  {
    inc: inc.toString(),
    sum: sum.toString(),
    max: max.toString(),
  }
);