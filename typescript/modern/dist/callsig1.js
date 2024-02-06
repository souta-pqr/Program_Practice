"use strict";
const double = (arg) => {
    console.log(arg * 2);
};
double.isUsed = true;
console.log(double.isUsed); // true
double(5); // 10
