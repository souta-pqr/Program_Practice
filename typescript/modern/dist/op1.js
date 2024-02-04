"use strict";
const toLowerUpper = (str, upper) => {
    if (upper) {
        return str.toUpperCase();
    }
    else {
        return str.toLowerCase();
    }
};
console.log(toLowerUpper('Hello', true)); // HELLO
