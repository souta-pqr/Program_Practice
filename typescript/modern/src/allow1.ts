type Human2 = {
    height: number;
    weight: number;
};

const calcBMI2 = ({
    height, weight
}: Human2): number => {
    return weight / height ** 2;
};
const uhyo2: Human2 = { height: 1.7, weight: 65 };
console.log(calcBMI2(uhyo2)); // 22.49134948096886