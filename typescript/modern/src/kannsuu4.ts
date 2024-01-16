type Human = {
    height: number;
    weight: number;
};
const calcBMI = function(human: Human): number {
    return human.weight / human.height ** 2;
};
const uhyo: Human = { height: 1.84, weight: 72 };
console.log(calcBMI(uhyo));