"use strict";
function repeat(element, length) {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
}
console.log(repeat('a', 5));
console.log(repeat(123, 3));
