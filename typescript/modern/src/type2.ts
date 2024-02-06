type HasName1 = {
    name: string;
}
type HasNameAge1 = {
    name: string;
    age: number;
}

const showName1 = (obj: HasName1) => {
    console.log(obj.name);
}
const g: (obj: HasNameAndAge) => void = showName1;

g ({
    name: "John",
    age: 25
})