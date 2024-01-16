type Human1 = {
    height: number;
    weight: number;
};
const calcBMI1 = ({
    height, weight
}: Human): number => {
    return weight / height ** 2;
};

const uhyo1: Human1 = {height: 1.84, weight: 72};
console.log(calcBMI1(uhyo1));