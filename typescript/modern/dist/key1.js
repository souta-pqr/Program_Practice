"use strict";
const toLowerUpper = (str, upper = false) => {
    if (upper) {
        return str.toUpperCase();
    }
    else {
        return str.toLowerCase();
    }
};
console.log(toLowerUpper('Hello', true)); // HELLO
console.log(toLowerUpper("hello", undefined)); // hello
