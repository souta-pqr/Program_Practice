"use strict";
const obj43 = {
    foo: 123,
    bar: 456
};
const obj53 = {
    foo: 789,
    bar: 101112,
};
const obj63 = {
    ...obj53,
    ...obj43
};
console.log(obj63);
