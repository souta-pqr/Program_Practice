"use strict";
const obj1 = {
    double(num) {
        return num * 2;
    },
    double2: (num) => num * 2,
};
console.log(obj1.double(100));
console.log(obj1.double2(100));
