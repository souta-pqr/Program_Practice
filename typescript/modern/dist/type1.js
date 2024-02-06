"use strict";
const fromAge = (age) => ({
    name: 'John',
    age
});
const f = fromAge;
const obj2 = f(25);
