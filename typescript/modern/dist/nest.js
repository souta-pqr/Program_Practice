"use strict";
const nested = {
    num2: 123,
    obj7: {
        foo1: "hello",
        bar1: "world"
    }
};
const { num2, obj7: { foo1 } } = nested;
console.log(num2);
console.log(foo1);
