"use strict";
const fromAge = (age) => ({
    name: "daishi",
    age,
});
const f = fromAge;
const obj = f(100);
console.log(obj);
