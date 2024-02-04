"use strict";
const sum1 = (base, ...args) => {
    let result = base * 1000;
    for (const num of args) {
        result += num;
    }
    return result;
};
console.log(sum1(1, 2, 3, 4, 5)); // 1015
console.log(sum1(123, 456)); // 1579
// console.log(sum1()); // Error: Expected 1-5 arguments, but got 0.
