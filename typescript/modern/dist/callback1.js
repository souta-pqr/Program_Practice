"use strict";
function map(array, callback) {
    const result = [];
    for (const value of array) {
        result.push(callback(value));
    }
    return result;
}
const data = [1, 1, 2, 3, 5, 8, 13];
const result = map(data, (x) => x * 10);
console.log(result); // [10, 10, 20, 30, 50, 80, 130]
