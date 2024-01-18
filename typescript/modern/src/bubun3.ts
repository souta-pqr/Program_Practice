type HasName1 = {
    name: string;
}
type HasNameAndAge1 = {
    name: string;
    age: number;
}

const showName = (obj: HasName1) => {
    console.log(obj.name)
}
const g: (obj: HasNameAndAge1) => void = showName;

g({
    name: "daishi",
    age: 35,
})
