"use strict";
const obj1 = {
    1: "one",
    2.05: "two point zero five",
};
console.log(obj1["1"]);
console.log(obj1["2.05"]);
const propName = "foo";
const obj2 = {
    [propName]: 123
};
console.log(obj2.foo);
