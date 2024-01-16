"use strict";
console.log(range1(5, 10));
function range1(min, max) {
    const result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}
