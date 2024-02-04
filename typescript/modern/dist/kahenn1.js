"use strict";
const sum = (...args) => {
    let result = 0;
    for (const num of args) {
        result += num;
    }
    return result;
};
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(123, 456)); // 579
console.log(sum()); // 0
