"use strict";
const fromAge = (age) => ({
    name: "john Smith",
    age,
});
const f = fromAge;
const obj2 = f(100);
console.log(obj2.name);
