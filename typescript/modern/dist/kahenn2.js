"use strict";
const sum1 = (base, ...args) => {
    let result = base * 1000;
    for (const num of args) {
        result += num;
    }
    return result;
};
console.log(sum1(1, 10, 100));
console.log(sum1(123, 233));
// console.log(sum1());
