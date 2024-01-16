type HasName1 = {
    name: string;
};
type HasNameAndAge1 = {
    name: string;
    age: number;
};

const showName = (obj1: HasName1) => {
    console.log(obj1.name);
}
const g: (obj1: HasNameAndAge1) => void = showName;

g ({
    name: "John Smith",
    age: 16,
});