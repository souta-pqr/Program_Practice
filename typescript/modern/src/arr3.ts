type Human2 = {
    height: number;
    weight: number;
};
type ReturnObj = {
    bmi: number;
};

const calcBMIObject = ({
    height, weight
}: Human2): ReturnObj => ({
    bmi: weight / height ** 2
});