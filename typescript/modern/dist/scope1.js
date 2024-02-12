"use strict";
const repeatLength = 5;
const repeat1 = function (element) {
    const result = [];
    for (let i = 0; i < repeatLength; i++) {
        result.push(element);
    }
    return result;
};
console.log(repeat1(1));
