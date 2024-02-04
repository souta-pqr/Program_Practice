"use strict";
const calcBMI = function (human) {
    return human.weight / human.height ** 2;
};
const uhyo = { height: 1.7, weight: 65 };
console.log(calcBMI(uhyo)); // 22.49134948096886
