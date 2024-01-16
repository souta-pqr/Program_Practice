"use strict";
const calcBMI = function (human) {
    return human.weight / human.height ** 2;
};
const uhyo = { height: 1.84, weight: 72 };
console.log(calcBMI(uhyo));
