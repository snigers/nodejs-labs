'use strict';

const accessors = {
  string (proto, name, index) {
    Object.defineProperty(proto.prototype, name, {
      get() {
        return this[index];
      },
      set(value) {
        this[index] = value;
      }
    });
  },

  Date(proto, name, index) {
    Object.defineProperty(proto.prototype, name, {
      get() {
        return new Date(this[index]);
      },
      set(value) {
        this[index] = value instanceof Date ? value.toISOString() : value;
      }
    });
  },

  function (proto, name, index, fieldDef) {
    Object.defineProperty(proto.prototype, name, {get: fieldDef});
  }
};


const assignPrototype = (data, proto) => {
  if (Array.isArray(data)) {
    data.forEach(item => item.__proto__ = proto.prototype);
  } else {
    Object.assignProperty(data, proto.prototype);
  }
};


const buildPrototype = metadata => {
  const protoClass = function ProtoClass() {};
  let index = 0, fieldDef, buildGetter, fieldType;
  for (const name in metadata) {
    fieldDef = metadata[name];
    fieldType = typeof fieldDef;
    if (fieldType !== 'function') fieldType = fieldDef;
    buildGetter = accessors[fieldType];
    if (buildGetter) buildGetter(protoClass, name, index++, fieldDef);
  }
  return protoClass;
};

const assignMetadata = (data, metadata) => {
  const proto = buildPrototype(metadata);
  assignPrototype(data, proto);
  return proto;
};

const data = [
  ['Marcus Aurelius', 'Rome', '212-04-26'],
  ['Victor Glushkov', 'Rostov', '1923-08-24'],
  ['Ibn Arabi', 'Murcia', '1165-11-16'],
  ['Mao Zedong', 'Shaoshan', '1893-12-26'],
  ['Rene Descartes', 'La Haye en Touraine', '1596-03-31'],
];

console.dir({ data });

const metadata = {
  name: 'string',
  city: 'string',
  born: 'Date',
  age() {
    return (
      new Date().getFullYear() - new Date(this.born).getFullYear()
    );
  },

}

const query = ({ name, age, city}) => (
  name !== '' &&
  age > 25 &&
  city === 'Rome'
);

assignMetadata(data, metadata);

const res = data.filter(query);
console.dir({ res });
console.dir({ age: res[0].age });

