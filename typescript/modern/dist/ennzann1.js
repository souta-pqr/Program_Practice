"use strict";
const obj1 = {};
const obj2 = { foo: -1234 };
const { foo = 500 } = obj1;
console.log(foo);
const { foo: bar = 500 } = obj2;
console.log(bar);
