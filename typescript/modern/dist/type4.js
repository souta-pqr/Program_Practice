"use strict";
// const {
//     foo,
//     bar: barVar,
//     "foo bar": fooBar
// } = obj2
const nested = {
    num: 123,
    obj: {
        foo: "hello",
        bar: "world"
    }
};
const { num, obj: { foo } } = nested;
console.log(num);
console.log(foo);
