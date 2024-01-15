"use strict";
const obj4 = {
    foo4: 123,
    bar4: "string",
    baz: false
};
const { foo4, ...restObj } = obj4;
console.log(foo4);
console.log(restObj);
