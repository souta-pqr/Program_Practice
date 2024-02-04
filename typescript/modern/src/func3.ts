type Human = {
    height: number;
    weight: number;
};
const calcBMI = function(human: Human): number {
    return human.weight / human.height ** 2;
}
const uhyo: Human = { height: 1.7, weight: 65 };
console.log(calcBMI(uhyo)); // 22.49134948096886