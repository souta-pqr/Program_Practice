"use strict";
const calcBMI1 = ({ height, weight }) => {
    return weight / height ** 2;
};
const uhyo1 = { height: 1.84, weight: 72 };
console.log(calcBMI1(uhyo1));
