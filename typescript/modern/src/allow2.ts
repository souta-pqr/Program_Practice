const calcBMI3 = ({
    height, weight
}: Human): number => weight / height ** 2;

type Human3 = {
    height: number;
    weight: number;
};
type Returnobject = {
    bmi: number
}

const calcBMIObject = ({
    height, weight
}: Human3): Returnobject => ({
    bmi: weight / height ** 2
});