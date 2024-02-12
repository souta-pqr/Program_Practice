"use strict";
const repeat2 = (element, length) => {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
};
console.log(repeat2({
    name: 'uhyo',
    age: 26
}, 5));
