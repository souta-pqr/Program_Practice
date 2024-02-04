"use strict";
const tuple1 = ["hello", 10];
const [myName, age] = tuple1;
console.log(myName);
console.log(age);
const obj3 = {
    foo2: 123,
    bar: "string",
    baz: false
};
const { foo2, ...restObj } = obj3;
console.log(foo2);
console.log(restObj);
