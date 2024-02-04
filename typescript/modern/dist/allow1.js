"use strict";
const calcBMI2 = ({ height, weight }) => {
    return weight / height ** 2;
};
const uhyo2 = { height: 1.7, weight: 65 };
console.log(calcBMI2(uhyo2)); // 22.49134948096886
